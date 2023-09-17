import React, { useState, useEffect } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'
import styles1 from "../../styles/BillingHistory.module.scss";
import { useQuery, useMutation } from '@apollo/client';
import { GET_IP_RX_DATES } from "../../graphql/queries"
import { VIEW_PDF } from "../../graphql/mutations"
import { RxState } from '../../shared/Rx';
import { useRecoilState } from 'recoil';
import Rxpdf from './Rxpdf';

function RX({ RxClose, RxShow, patientDetails }) {
  const [form, setForm] = useRecoilState(RxState)
  const [isNavBarBurgerClicked, toggleButtonClicked] = useState(false);
  const [pdfstate, setPdfState] = useState("");

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

  let appointmentId = "";
  let Name = "";
  let Status = "";
  let TimeStampDate = "";
  let AppointmentType = "";
  let Age = "";
  let Gender = "";
  let DoctorName = "NA"
  let DoctorUsername = ""
  let IPID = "";
  let PatientId = 0;


  if (patientDetails && patientDetails.ip_appointment_id) {
    appointmentId = patientDetails.ip_appointment_id;

    const { PatientData, status, timestamp, appointment_type, doctor_name, doctor_username, assigndoctor, resheduled, IpRecord, patient_id } = patientDetails;

    if (PatientData) {
      Name = PatientData.name || "";
      Age = PatientData.age || "";
      Gender = PatientData.gender === 1 ? 'M' : PatientData.gender === 2 ? 'O' : PatientData.gender === 0 ? 'F' : "";
    }

    if (IpRecord) {
      if (IpRecord.length > 0 && IpRecord[0].ip_id) {
        IPID = IpRecord[0].ip_id
      }
    }

    PatientId = patient_id || 0

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

  const [ViewPdf] = useMutation(VIEW_PDF, {
    onError: (err) => {
      if (err.message == "Request failed with status code 422") {
        setForm({
          ...form,
          submitError: "Got continuous requests.Please try again",
        });
      } else {
        setForm({
          ...form,
          submitError: err.message,
        });
      }
    },
  });

  const { data, loading } = useQuery(GET_IP_RX_DATES, {
    variables: {
      patientId: PatientId
    }, fetchPolicy: "cache-and-network"
  })

  let RxDetails = [];
  if (data && data.getIpPatientRX && PatientId) {
    RxDetails = data.getIpPatientRX
  }
  
  const appointments = RxDetails.filter(each => {
    // If form.rx is not empty and matches the appointment's RXTIME
    if (form.rx && each.RXTIME === form.rx) {
      return true;
    }

    // If form.rx is empty, include all appointments
    if (!form.rx) {
      return true;
    }

    return false; // Exclude appointments that don't match the condition
  });

  const HandleInputChnage = (event) => {
    const { name, value } = event.target
    setForm({
      ...form, [name]: value || "", submitError: ""
    })
  }

  useEffect(() => {
    if (appointments) {
      let appointmentId = ""
      if (appointments && appointments.length > 0) {
        const AppointmentsData = appointments
        if (AppointmentsData[0].appointment_id) {
          appointmentId = AppointmentsData[0].appointment_id
        }
      }
      if (appointmentId) {
        toggleButtonClicked(appointmentId);
        ViewPdf({
          variables: { Id: appointmentId, type: "Appointment" },
          update: (cache, { data }) => {
            if (data && data.ViewPdf) {
              const pdfUrl = data.ViewPdf.pdfurl;
              setForm(prevForm => ({
                ...prevForm,
                pdf: pdfUrl,
              }));
              setPdfState(pdfUrl);
            } else {
              setForm(prevForm => ({
                ...prevForm,
                submitError: "Please wait. We are processing your request.",
              }));
            }
          },
        });
      }
    }
  }, [RxShow, form.rx]);


  function RxpdfGenerator(e, item) {
    e.preventDefault();

    const appointmentId = item.appointment_id || "";

    if (appointmentId !== "") {
      toggleButtonClicked(appointmentId);

      ViewPdf({
        variables: { Id: appointmentId, type: "Appointment" },
        update: (cache, { data }) => {
          if (data && data.ViewPdf) {
            const pdfUrl = data.ViewPdf.pdfurl;
            setForm(prevForm => ({
              ...prevForm,
              pdf: pdfUrl,
            }));
            setPdfState(pdfUrl);
          } else {
            setForm(prevForm => ({
              ...prevForm,
              submitError: "Please wait. We are processing your request.",
            }));
          }
        },
      });
    }
  }

  return (
    <Modal show={RxShow} size="xl" onHide={RxClose}>
      <Modal.Header closeButton className='bdr2 pb-2'>
        RX
      </Modal.Header>
      <Modal.Body className=''>
        <Row className="px-3">
          <Col md={3} className="border_theme">
            <Form.Select
              aria-label="Default select example"
              className="mt-3"
              name="rx"
              value={form.rx}
              onChange={HandleInputChnage}
            >
              <option clasName="" value="">Select</option>
              {RxDetails.map((item, index) => {
                return (
                  <>
                    {item.RXTIME != "Invalid Date-NaN" && (
                      <option
                        value={item.RXTIME}
                        key={index}
                        selected={index}
                      >
                        {item &&
                          item.RXTIME.replace(
                            /^.{2}/g,
                            item.RXTIME.slice(0, 2) == "01"
                              ? "Jan"
                              : item.RXTIME.slice(0, 2) == "02"
                                ? "Feb"
                                : item.RXTIME.slice(0, 2) == "03"
                                  ? "Mar"
                                  : item.RXTIME.slice(0, 2) == "04"
                                    ? "Apr"
                                    : item.RXTIME.slice(0, 2) == "05"
                                      ? "May"
                                      : item.RXTIME.slice(0, 2) == "06"
                                        ? "Jun"
                                        : item.RXTIME.slice(0, 2) == "07"
                                          ? "Jul"
                                          : item.RXTIME.slice(0, 2) == "08"
                                            ? "Aug"
                                            : item.RXTIME.slice(0, 2) == "09"
                                              ? "Sep"
                                              : item.RXTIME == "10"
                                                ? "Oct"
                                                : item.RXTIME == "11"
                                                  ? "Nov"
                                                  : item.RXTIME == "12"
                                                    ? "Dec"
                                                    : ""
                          )}
                      </option>
                    )}
                  </>
                )
              })}
            </Form.Select>
            {appointments.map((each, index) => {
              return (
                <div className={`f13 mb-4  mt-3 ms-3  ${isNavBarBurgerClicked == each.appointment_id
                  ? "active"
                  : ""
                  }`} onClick={(e) => RxpdfGenerator(e, each)} role='button'>
                  {each.appointment_id} 
                </div>
              )
            })}
          </Col>
          <Col md={9}>
            {
              appointments &&
                appointments.length > 0 &&
                !loading ? (
                <div>
                  {form.pdf && (
                    <Col>
                      <Button
                        href={form.pdf}
                        download
                        target="_blank"
                      >
                        Download
                      </Button>
                    </Col>
                  )}
                  <Rxpdf test={pdfstate} loading={loading} />
                </div>
              ) : (
                <span className="my-2">No Rx Pdf Avialble</span>
              )}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={RxClose} className="bg-white theme13 brnone">close</Button>
      </Modal.Footer>
    </Modal>
  )
}
export default RX
