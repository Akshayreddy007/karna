import React, { useState } from 'react'
import { Modal, Form, Button, Col, Table } from 'react-bootstrap'
import Image from "next/image";
import Logo2 from '../../public/images/confirmed_image.png'
import styles from '../../styles/IPD_Receptionist/Appointments.module.scss'
import { IP_CHECKIN } from '../../graphql/mutations'
import { useMutation } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { checkin } from '../../shared/schedule'
import moment from 'moment';
import SuccessMessage, { showMessage } from '../alertmessages/Alertmessages'

const CheckIn = (props) => {
    const [form, setForm] = useRecoilState(checkin)
    const [IpcheckIn] = useMutation(IP_CHECKIN, {
        onCompleted: props.refetch

    })


    // Retrieve user data from localStorage
    let userData = {};
    let globalUserHip = 0;

    if (typeof window !== "undefined") {
        const storedUserData = localStorage.getItem("user");
        const storedGlobalUserHip = localStorage.getItem("userHip");

        if (storedUserData) {
            try {
                userData = JSON.parse(storedUserData);
            } catch (error) {
                console.error("Error parsing user data from localStorage:", error);
            }
        }

        if (storedGlobalUserHip) {
            try {
                globalUserHip = JSON.parse(storedGlobalUserHip);
            } catch (error) {
                console.error("Error parsing global user hip from localStorage:", error);
            }
        }
    }

    // Extract the username from userData if it exists
    let username = "";
    if (userData && userData.username) {
        username = userData.username;
    }

    const pdetails = props.pdetails || {}

    let appointmentId = "";
    let Name = "";
    let Status = "";
    let TimeStampDate = "";
    let AppointmentType = "";
    let Age = "";
    let Gender = "";
    let DoctorName = "NA"
    let DoctorUsername = ""



    if (pdetails && pdetails.ip_appointment_id) {
        appointmentId = pdetails.ip_appointment_id;

        const { PatientData, status, timestamp, appointment_type, doctor_name, doctor_username, assigndoctor, resheduled } = pdetails;

        if (PatientData) {
            Name = PatientData.name || "";
            Age = PatientData.age || "";
            Gender = PatientData.gender === 1 ? 'M' : PatientData.gender === 2 ? 'O' : PatientData.gender === 0 ? 'F' : "";
        }

        if (appointment_type || appointment_type === 0) {
            AppointmentType = appointment_type === 0 ? "Ip" : appointment_type === 1 ? "Op" : appointment_type === 2 ? "Ed" : "";
        }

        if (doctor_username) {
            DoctorUsername = doctor_username
        }

        if (status === 0 && resheduled) {
            Status = "Resheduled"
        } else if (status === 0 && !resheduled) {
            Status = "New"
        } else if (status === 1) {
            Status = "Checked-In"
        } else if (status === 2) {
            Status = "Admitted"
        } else if (status === 3) {
            Status = "Discharged"
        } else if (status === 4) {
            Status = "Cancelled"
        }

        TimeStampDate = timestamp

        let arr = assigndoctor.find((each) => each.main_doctor)
        if (arr) {
            DoctorName = arr.doctor_name || "NA"
        }

    }

    const handleCheckin = async () => {

        try {
            if (appointmentId) {
                const { data } = await IpcheckIn({
                    variables: {
                        ipAppointmentId: appointmentId,
                        status: 1
                    },
                });

                if (data && data.IpcheckIn) {
                    setForm((prevForm) => ({
                        ...prevForm,
                        submitError: "Checked-In successfully",
                    }));

                    showMessage("Checked-In successfully", "success");

                    setTimeout(() => {
                        props.onHide();
                    }, 2500);

                } else {
                    setForm((prevForm) => ({
                        ...prevForm,
                        submitError: "Something went wrong. Please try again",
                    }));
                }

            } else {
                setForm((prevForm) => ({
                    ...prevForm,
                    submitError: "Something went wrong. Please try again",
                }));
            }
        } catch (error) {
            if (error.message === "Request failed with status code 422") {
                setForm((prevForm) => ({
                    ...prevForm,
                    submitError: "Too many continuous requests. Please try again later",
                }));
            } else {
                setForm((prevForm) => ({
                    ...prevForm,
                    submitError: error.message,
                }));
            }
        }
    };

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered id="md3">
                <Modal.Header closeButton className='bdr2'>
                    <Modal.Title id="contained-modal-title-vcenter" className={`px-md-3 f15 ${styles.font}`}>
                        Check In
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='px-md-5 px-4 mx-lg-5'>
                    {/* Allert Messges */}
                    <SuccessMessage />
                    {form.submitError === "Checked-In successfully" ? <span className="text-success">{""}</span> : <span className="text-danger">{form.submitError}</span>}

                    <div className='d-md-flex align-items-center mt-4'>
                        <Col md={6} xl={6} lg={6} className='ps-0 mb-md-5 mb-4'>
                            <Form.Label className={`mb-0 ${styles.font}`}>Patient</Form.Label>
                            <div className={`mb-0 ${styles.font}`}>{Name}/{Age} {Gender}</div>
                        </Col>
                        <Col md={6} xl={6} lg={6} className=' ps-0 mt-md-0 mt-3 mb-md-5 mb-4'>
                            <Form.Label className={`mb-0 ${styles.font}`}>Doctor</Form.Label>
                            <div className={` ${styles.font}`}>{DoctorName}</div>
                        </Col>
                    </div>
                    <div className='d-md-flex align-items-center'>
                        <Col md={6} xl={6} lg={6} className='pe-5 mb-md-5 mb-4'>
                            <Form.Label className={`mb-0 ${styles.font}`}>Appointment Date & Time</Form.Label>
                            <br />
                            <Form.Text>{moment.unix(TimeStampDate).format("Do-MMM-YYYY HH:MM a")}</Form.Text>
                        </Col>
                        <Col md={6} xl={6} lg={6} className='ps-0 mb-md-5 mb-4'>
                            <Form.Label className={`mb-0 ${styles.font}`}>Appointment Type</Form.Label>
                            <br />
                            <Form.Text>{AppointmentType}</Form.Text>
                        </Col>
                    </div>
                    <div className='d-md-flex align-items-center'>
                        <Col md={6} xl={6} lg={6} className='pe-5 mb-4'>
                            <Form.Label className={`mb-0 ${styles.font}`}>Appointment Status</Form.Label>
                            <br />
                            <Form.Text>{Status}</Form.Text>
                        </Col>
                        <Col md={6} xl={6} lg={6} className='ps-0 mt-3 mb-4'>
                            <div className={` ${styles.font} f14`}>Updated <span><Image src={Logo2} alt="" width={15} height={15} /></span></div>
                        </Col>
                    </div>
                    {/* <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder='note for patient' className={`mb-0 ${styles.font}`} />
                    </Form.Group> */}
                </Modal.Body>
                <Modal.Footer className='d-block'>
                    <div className='d-md-flex'>
                        <Col md={9} className='text-center'>
                            {/* <div className={`theme12 f13  ${styles.font}`}>Email and Sms will be Sent to Registered Details</div> */}
                        </Col>
                        <Col md={3} className='d-flex justify-content-end'>
                            <Button className={` ${styles.bdrnone} bg-white theme13 `} onClick={props.onHide}>Cancel</Button>
                            <Button className={styles.submitbtn} onClick={handleCheckin}>Check In</Button>
                        </Col>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CheckIn