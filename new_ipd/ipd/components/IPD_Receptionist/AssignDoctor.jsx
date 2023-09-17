import React from 'react';
import { Modal, Form, Button, Col, Table } from 'react-bootstrap'
import styles from '../../styles/IPD_Receptionist/Appointments.module.scss'
import moment from 'moment';
import { ADD_ASSIGNED_DOCTORS } from '../../graphql/mutations'
import { useQuery, useMutation } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { GET_DEPARTEMNTS, GET_DOCTORS, GET_ASSIGNED_DOCTORS } from '../../graphql/queries';
import { assigndoctor } from '../../shared/assigndoctor'

const Doctors = (props) => {

    const [form, setForm] = useRecoilState(assigndoctor)

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

    const [AddIpAssignedDoctor, { loading: loading2 }] = useMutation(ADD_ASSIGNED_DOCTORS, {
        onCompleted: () => {
            props.refetch
            refetch()
        }
    })

    const pdetails = props.pdetails || {}

    let appointmentId = "";
    let Name = "";
    let Age = "";
    let Gender = "";
    let Mobile = "";
    let Guardian = "";
    let GmobileNo = "";
    let DisAppointment = "";
    let Status = "";
    let TimeStampDate = "";
    let Doctor = 0;
    let Department = 0;
    let DoctorName = "";
    let ipId = "";
    let UHID = "";


    if (pdetails && pdetails.ip_appointment_id) {
        appointmentId = pdetails.ip_appointment_id;
        console.log(appointmentId, "appointmentId AD")

        const { PatientData, display_ip_appointment_id, status, timestamp, department, doctor, doctor_name, IpRecord , gerdian_details, uhid} = pdetails;

        if (PatientData) {
            Name = PatientData.name || "";
            Age = PatientData.age || "";
            Gender = PatientData.gender === 1 ? 'M' : PatientData.gender === 2 ? 'O' : PatientData.gender === 0 ? 'F' : "";
            Mobile = PatientData.mobile || "";
        }

        UHID = uhid || "NA"

        if (status === 0) {
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

        DisAppointment = display_ip_appointment_id || "";
        TimeStampDate = timestamp
        Department = department || 0
        Doctor = doctor || 0
        DoctorName = doctor_name || ""
        if (IpRecord.length > 0) {
            if (IpRecord[0]) {
                if (IpRecord[0].ip_id) {
                    ipId = IpRecord[0].ip_id
                }
            }
        }

             if (gerdian_details && gerdian_details.length > 0) {
            if (gerdian_details[0]) {
                Guardian = gerdian_details[0].Name || "NA"
            }
            if (gerdian_details[0]) {
                GmobileNo = gerdian_details[0].Mobile || "NA"
            }
        }
    }

      
    const { data, loading: loading, error } = useQuery(GET_DEPARTEMNTS, {
        fetchPolicy: "cache-and-network"
    },
    );

    const { data: data1, loading: loading1, error: error1 } = useQuery(GET_DOCTORS, {
        variables: {
            department: parseInt(form.department),
            hip: globalUserHip
        },
        fetchPolicy: "cache-and-network"
    });

    // Assigned Docters
    const { data: data2, refetch } = useQuery(GET_ASSIGNED_DOCTORS, {
        variables: {
            ipAppointmentId: appointmentId
        },
        fetchPolicy: "cache-and-network"
    });

    let AssignedDoc = []
    if (data2 && data2.getAssignedDoctor) {
        AssignedDoc = data2.getAssignedDoctor
    }


    // Department query data
    let Departments = [];
    if (data && data.getDepartments) {
        Departments = data.getDepartments;
    }

    // Doctor query data
    let Doctors = [];
    if (data1 && data1.getDoctors) {
        if (form.department > 0) {
            data1.getDoctors.map((item, index) => {
                Doctors.push({
                    id: item.id,
                    name: item.details.name,
                    username: item.details.username,
                });
            });
        }
    }


    //handleChange for Department
    const handleChangeforDepartment = (event) => {
        const { name, value } = event.target
        if (value) {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
                submitError: "",
                doctor: 0,
                formErrors: {
                    ...prevForm.formErrors,
                    [name]: "",
                },
            }))
        } else {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
                submitError: "",
                doctor: 0,
                formErrors: {
                    ...prevForm.formErrors,
                    [name]: "",
                },
            }))
        }

    }

    // handleChanfe for Doctor
    const handleChangeforDoctor = (event) => {
        const { name, value } = event.target;

        if (value) {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
                submitError: "",
                formErrors: {
                    ...prevForm.formErrors,
                    [name]: ""
                }
            }));
        } else {
            setForm((prevForm) => ({
                ...prevForm,
                submitError: "",
                [name]: "",
                formErrors: {
                    ...prevForm.formErrors,
                    [name]: ""
                }
            }));
        }
    };

    // submit mutation
    const handleAssigndoctor = async () => {
        let formValid = true;

        if (!form.doctor || !appointmentId) {
            formValid = false;
        }

        const sdetails = {
            id: parseInt(0),
            ipAppoinmentId: appointmentId,
            doctor: parseInt(form.doctor),

        };

        try {
            if (appointmentId) {
                if (formValid) {
                    const { data } = await AddIpAssignedDoctor({
                        variables: sdetails,
                    });

                    if (data && data.AddIpAssignedDoctor) {
                        setForm((prevForm) => ({
                            ...prevForm,
                            submitError: "Doctor assigned was successfully",
                        }));
                        setTimeout(() => {
                            setForm({ ...form, submitError: "", })
                            setForm((prevForm) => ({
                                ...prevForm, doctor: 0, department: 0,
                                submitError: ""
                            }));
                        }, 2000);

                    } else {
                        setForm((prevForm) => ({
                            ...prevForm,
                            submitError: "Something went wrong. Please try again",
                        }));
                    }
                } else {
                    setForm((prevForm) => ({
                        ...prevForm,
                        submitError: "Please fill all mandatory fields",
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

    const changeAssigndoctor = async (id, action) => {
        const doctorToUpdate = AssignedDoc.find((item) => item.id === id);

        if (doctorToUpdate) {
            const sdetails = {
                id: parseInt(id),
                ipAppoinmentId: appointmentId,
                doctor: parseInt(doctorToUpdate.doctor),
            };

            try {
                const { data } = await AddIpAssignedDoctor({
                    variables: sdetails,
                });

                if (data && data.AddIpAssignedDoctor) {
                    if (action === "Assigned") {
                        setForm((prevForm) => ({
                            ...prevForm,
                            submitError: "Doctor unassigned was successfully",
                            formErrors: {
                                ...form.formErrors,
                                doctor: "",
                                department: ""
                            }
                        }));
                    } else {
                        setForm((prevForm) => ({
                            ...prevForm,
                            submitError: "Doctor assigned was successfully",
                            formErrors: {
                                ...form.formErrors,
                                doctor: "",
                                department: ""
                            }
                        }));
                    }
                    setTimeout(() => {
                        setForm({ ...form, submitError: "", })
                        setForm((prevForm) => ({
                            ...prevForm,
                            submitError: "",
                        }));
                    }, 2000);

                    // Refetch assigned doctors after update
                    refetch();
                } else {
                    setForm((prevForm) => ({
                        ...prevForm,
                        submitError: "Something went wrong. Please try again",
                    }));
                }
            } catch (error) {
                // Handle errors
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
                        Assign Doctors
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >

                    <div className='row align-items-center pe-md-5 ps-md-0 ps-3 mx-md-4'>
                        <Col md={6} xl={3} lg={3} sm={6} xs={6} className='ps-0 mb-lg-3 mb-md-3 mb-0'>
                            <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>UHID</Form.Label>
                            <div className={`f14 ${styles.font}`}>{UHID}</div>
                        </Col>
                        <Col md={6} xl={3} lg={3} sm={6} xs={6} className=' ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0'>
                            <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>NAME</Form.Label>
                            <div className={`f14 ${styles.font}`}>{Name} ({Age} {Gender ? "/" + Gender : ""})</div>
                        </Col>
                        <Col md={6} xl={3} lg={3} sm={6} xs={6} className=' ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0'>
                            <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>MOBILE NO</Form.Label>
                            <div className={`f14 ${styles.font}`}>{Mobile ? "+91 " + Mobile : "NA"}</div>
                        </Col>
                        <Col md={6} xl={3} lg={3} sm={6} xs={6} className=' ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0'>
                            <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>GUARDIAN</Form.Label>
                            <div className={`f14 ${styles.font}`}>{Guardian} ({GmobileNo})</div>
                        </Col>
                    </div>
                    <div className='d-lg-flex align-items-center pe-md-5 ps-md-0 ps-2 mx-md-4'>
                        <Col md={6} xl={3} lg={3} sm={6} xs={6} className='  ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0 pb-3'>
                            <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>ADMISN NO</Form.Label>
                            <div className={`f14 ${styles.font}`}>{DisAppointment} ({moment.unix(TimeStampDate).format("Do-MMM-YY hh:mm")})</div>
                        </Col>
                        <Col md={6} xl={3} lg={3} sm={6} xs={6} className=' ps-0 mt-md-0 mb-lg-3 mb-md-3 mt-3 mb-5 pb-3'>
                            <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>STATUS</Form.Label>
                            <div className={`${styles.admitted} f14`}>{Status}</div>
                        </Col>
                    </div>
                    <div className='bdr2 '>
                    </div>
                    {form.submitError === "Doctor assigned was successfully" || form.submitError == "Doctor unassigned was successfully" ? <span className="text-success">{form.submitError}</span> : <span className="text-danger">{form.submitError}</span>}

                    <div className="d-lg-flex  pb-3 align-items-center">
                        <Col md={11} xl={4} lg={5} xs={11} className='ps-md-4 ps-1 mb-3 ms-md-0 mt-4'>
                            <Form.Label className={`f14 theme14 ${styles.font} mb-1 `}>Department*</Form.Label>
                            <Form.Select style={{ marginLeft: '0px !important' }}
                                aria-label="Default select example"
                                className={styles.textboxwdth44}
                                onChange={handleChangeforDepartment}
                                name="department"
                                value={form.department}
                                onBlur={() => {
                                    const isEmpty = form.department > 0;
                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        formErrors: { ...prevForm.formErrors, department: isEmpty ? "" : "department cannot be empty" }
                                    }))
                                }}
                            >
                                <option value={0}> select </option>
                                {Departments.map((each, index) => {
                                    return (
                                        <option key={index} value={each.id}>{each.department}</option>
                                    )
                                })}
                            </Form.Select>
                            <Form.Text className="text-danger">{form.formErrors.department}</Form.Text>

                        </Col>

                        <Col md={11} xl={4} lg={5} xs={11} className='ps-md-4 ps-1 mb-3 ms-md-0 mt-4'>
                            <Form.Label className={`f14 theme14 ${styles.font} mb-1 `}>Doctor*</Form.Label>
                            <Form.Select style={{ marginLeft: '0px!important' }}
                                aria-label="Default select example"
                                className={styles.textboxwdth44}
                                name="doctor"
                                value={form.doctor}
                                onChange={handleChangeforDoctor}
                                onBlur={() => {
                                    const isEmpty = form.doctor > 0;
                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        formErrors: { ...prevForm.formErrors, doctor: isEmpty ? "" : "doctor cannot be empty" }
                                    }))
                                }}
                            >
                                <option> select </option>
                                {Doctors.map((each, index) => (
                                    <option key={index} value={each.id} className={AssignedDoc.some((item) => item.doctor == each.id) ? "d-none" : ""} >{each.name}</option>
                                ))}

                            </Form.Select>
                            <Form.Text className="text-danger">{form.formErrors.doctor}</Form.Text>

                        </Col>
                        <Col md={11} xl={4} lg={5} xs={11} className='ps-md-4 ps-1 mb-3 ms-md-0 mt-4'>

                            <Col className='d-flex justify-content-end mt-3'>
                                <Button className={` ${styles.bdrnone} ${styles.font} bg-white theme13 me-2 `} onClick={props.onHide}>Cancel</Button>
                                <Button className={styles.submitbtn} onClick={handleAssigndoctor}>Submit</Button>
                            </Col>

                        </Col>
                    </div>
                    <Table className=" mb-5" responsive>
                        <thead className={styles.bdr}>
                            <tr>
                                <th className={`${styles.font} ${styles.f60} ps-md-1`}>
                                    <b>Sno</b>
                                </th>
                                <th className={`${styles.font} ${styles.f60}`}>
                                    <b>Doctor Name</b>
                                </th>
                                <th className={`${styles.font} ${styles.f60}`}>
                                    <b>Department Name</b>
                                </th>
                                <th className={`${styles.font} ${styles.f60}`}>
                                    <b>Status</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {AssignedDoc && AssignedDoc.length > 0 ? (
                                AssignedDoc.map((item, index) => {
                                    let action = ""
                                    let textColor = item.status == 1 ? "text-success" : "text-danger"
                                    if (item.status == 0) {
                                        action = "Un Assigned"
                                    } else {
                                        action = "Assigned"
                                    }
                                    return (
                                        <tr key={item.id}>
                                            <td className={styles.txtleft}>{index + 1}</td>
                                            <td className={styles.txtleft}>{item?.doctor_name}</td>
                                            <td className={styles.txtleft}>{item?.department_name}</td>
                                            <td className={`${styles.txtleft} ${styles.cursorPointer} ${textColor}`} role="button" onClick={() => { changeAssigndoctor(item.id, action) }}>{action}</td>
                                        </tr>
                                    )
                                })
                            ) : (<div className='text-center'>No Details Available</div>)}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Doctors