import React, { useState, useEffect } from 'react';
import { Modal, Form, Button, Col, Table } from 'react-bootstrap'
import styles from '../../styles/IPD_Receptionist/Appointments.module.scss'
import moment from 'moment';
import { UPDATE_IP_APPOINTMENT } from '../../graphql/mutations'
import { GET_SCHEDULE_SLOTS, GET_BLOCKDATES, GET_ADMIN_USERS } from '../../graphql/queries'
import { useQuery, useMutation } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { schedule } from '../../shared/reschedule'
import SuccessMessage, { showMessage } from '../alertmessages/Alertmessages'

const RescheduleConsultation = (props) => {
  const [form, setForm] = useRecoilState(schedule)
  const [disableloading, setDisableLoading] = useState(false);


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

  const newDate = new Date();
  const yyy = newDate.getFullYear();
  const mmm = String(newDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
  const ddd = String(newDate.getDate()).padStart(2, '0');

  const todayDate = `${yyy}-${mmm}-${ddd}`;

  const [UpdateIPAppointmentStatus, { loading: loading1 }] = useMutation(UPDATE_IP_APPOINTMENT, {
    onCompleted: props.refetch
  })

  useEffect(() => {
    if (loading1) {
      setDisableLoading(true);
    }
    setTimeout(() => {
      setDisableLoading(false);
    }, [2500])
  }, [loading1])

  const pdetails = props.pdetails || {}

  let appointmentId = "";
  let Name = "";
  let Age = "";
  let Gender = "";
  let Mobile = "";
  let AttenderName = "NA";
  let AttenderMobile = "NA";
  let DisAppointment = "";
  let Status = "";
  let TimeStampDate = "";
  let Doctor = 0;
  let Department = 0;
  let DoctorName = "";
  let DoctorUsername = "";
  let UHID = "";

  if (pdetails && pdetails.ip_appointment_id) {
    appointmentId = pdetails.ip_appointment_id;

    const { PatientData, display_ip_appointment_id, status, timestamp, department, doctor, doctor_name, doctor_username, gerdian_details, uhid, assigndoctor, resheduled } = pdetails;

    if (PatientData) {
      Name = PatientData.name || "";
      Age = PatientData.age || "";
      Gender = PatientData.gender === 1 ? 'M' : PatientData.gender === 2 ? 'O' : PatientData.gender === 0 ? 'F' : "";
      Mobile = PatientData.mobile || "";
    }

    UHID = uhid || "NA"

    if (status === 0 && resheduled) {
      Status = "Rescheduled"
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


    if (gerdian_details && gerdian_details.length > 0) {
      if (gerdian_details[0].Name) {
        AttenderName = gerdian_details[0].Name
      }
      if (gerdian_details[0].Mobile) {
        AttenderMobile = gerdian_details[0].Mobile
      }
    }

    DisAppointment = display_ip_appointment_id || "";
    TimeStampDate = timestamp
    Department = department || 0
    Doctor = doctor || 0
    DoctorUsername = doctor_username || ""
    let arr = assigndoctor.find((each) => each.main_doctor)
    if (arr) {
      DoctorName = arr.doctor_name || "NA"
    }

  }

  // Day Conversions
  const mydate = moment(form.date, 'YYYY-MM-DD');
  const dayId = mydate.format("d");

  //convert Date
  const formattedDate = mydate.format("DD-MM-YYYY");

  //timestamp
  const isToday = mydate.isSame(moment(), 'day');
  const timestamp = isToday ? Math.floor(Date.now() / 1000).toString() : (moment(mydate).format("x"));

  const { data, loading, error } = useQuery(GET_SCHEDULE_SLOTS, {
    variables: { username: DoctorUsername, day: parseInt(dayId) || 0, timestamp: timestamp },
    fetchPolicy: "network-only"
  });

  const { data: data2 } = useQuery(GET_ADMIN_USERS, {
    variables: {
      username: DoctorUsername,
      name: "",
      hip: globalUserHip
    },
    fetchPolicy: "network-only"
  })

  const { data: data3 } = useQuery(GET_BLOCKDATES, {
    variables: {
      date: formattedDate,
      username: DoctorUsername
    }, fetchPolicy: "network-only"
  })

  //blocked date for doctor
  let DoctorAvialble = 1;
  if (data3 && data3.getdoctorblockdate) {
    if (data3.getdoctorblockdate.length > 0) {
      if (data3.getdoctorblockdate[0]) {
        if (data3.getdoctorblockdate[0].entire_day) {
          DoctorAvialble = 0
        }
      }
    }
  }

  //disable past dates
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  // Assuming data3, DoctorAvailable, form.date, and slottimmings are available and defined elsewhere in the code.

  // Function to remove duplicates from an array based on a specific key.
  function uniqByKeepLast(data, key) {
    return [...new Map(data.map(item => [key(item), item])).values()];
  }

  // Filter and transform data if conditions are met
  let filterData = [];
  if (data2 && data2.getAdminUsers && DoctorAvialble && form.date) {
    if (data2.getAdminUsers.length > 0 && data2.getAdminUsers[0]) {
      const doctorServices = data2.getAdminUsers[0].doctorServices || [];
      filterData = doctorServices.map(each => ({
        ...each,
        serid: each.service_id,
        sertext: each.service_name,
      }));
    }
  }

  // Remove duplicate services based on the serid property
  let FilterDuplicateServices = uniqByKeepLast(filterData, it => it.serid);

  const handleChangeformDate = (event) => {
    const { name, value } = event.target;

    if (value) {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
        submitError: "",
        time: "",
        serviceType: 0,
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



  const handleChange = (event) => {
    const { name, value } = event.target;

    if (value) {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
        submitError: "",
        formErrors: {
          ...prevForm.formErrors,
          [name]: "",
          serviceType: ""
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



  const handleSchedule = async () => {
    let formValid = true;
    const mydate = moment(form.date, 'YYYY-MM-DD');
    const Date = mydate.format("DD-MM-YYYY") || "";

    if (!Date) {
      formValid = false;
    }

    const sdetails = {
      ipAppointmentId: appointmentId,
      appointmentDate: Date,
      appointmentTime: "",
      type: 1,
      doctor: Doctor,
      department: Department,
      reasonForCancellation: 0
    };

    try {
      if (appointmentId) {
        if (formValid) {
          const { data } = await UpdateIPAppointmentStatus({
            variables: sdetails,
          });

          if (data && data.UpdateIPAppointmentStatus) {
            setForm((prevForm) => ({
              ...prevForm,
              submitError: "Admission rescheduled successfully",
            }));

            showMessage("Admission rescheduled successfully", "success");

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

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered id="md3">
        <Modal.Header closeButton className='bdr2'>
          <Modal.Title id="contained-modal-title-vcenter" className={`px-md-3 f15 ${styles.font}`}>
            Reschedule Admission
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          {/* Allert Messges */}
          <SuccessMessage />

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
              <div className={`f14 ${styles.font}`}>{AttenderName || "NA"} ({AttenderMobile || "NA"})</div>
            </Col>
          </div>
          <div className='d-lg-flex align-items-center pe-md-5 ps-md-0 ps-2 mx-md-4'>
            <Col md={6} xl={3} lg={3} sm={6} xs={6} className='  ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0 pb-3'>
              <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>ADMISN NO</Form.Label>
              <div className={`f14 ${styles.font}`}>{DisAppointment}</div>
            </Col>
            <Col md={6} xl={3} lg={3} sm={6} xs={6} className='  ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0 pb-3'>
              <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>DATE & TIME</Form.Label>
              <div className={`f14 ${styles.font}`}>({moment.unix(TimeStampDate).format("Do-MMM-YY hh:mm a")})</div>
            </Col>
            <Col md={6} xl={3} lg={3} sm={6} xs={6} className=' ps-0 mt-md-0 mb-lg-3 mb-md-3 mt-3 mb-5 pb-3'>
              <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>STATUS</Form.Label>
              <div className={`${styles.admitted} f14`}>{Status}</div>
            </Col>
          </div>
          <div className='bdr2'>
          </div>
          {form.submitError === "Admission rescheduled successfully" ? <span className="text-success">{""}</span> : <span className="text-danger">{form.submitError}</span>}

          <div className="d-flex">
            <Col md={6} xl={3} lg={6} className='ps-md-0 ps-1 mb-3 ms-md-4 mt-4'>
              <Form.Label className={`f12 theme12 ${styles.font} `}>CHIEF DOCTOR</Form.Label>
              <div className={`f14 theme14 ${styles.font} `}>{DoctorName || "NA"}</div>
            </Col>

            <Col md={6} xl={3} lg={6} className='ps-md-0 ps-1 mb-3 ms-md-4 mt-4'>

            </Col>
          </div>
          <div className="d-lg-flex mt-3 mb-4">
            <Col md={11} xl={4} lg={5} sm={12} xs={12} className='ps-md-0 ps-2 mb-3 ms-md-4'>
              <Form.Label className={`f14 theme14 ${styles.font} mb-0 `}>Date*</Form.Label>
              <Form.Control style={{ marginLeft: '0px!important' }}
                className={styles.textboxwdth44} type='date'
                name="date"
                value={form.date}
                onChange={handleChangeformDate}
                min={disablePastDate()}
                onBlur={() => {
                  const isEmpty = form.date;
                  setForm((prevForm) => ({
                    ...prevForm,
                    formErrors: { ...prevForm.formErrors, date: isEmpty ? "" : "date cannot be empty" }
                  }))
                }}
              >
              </Form.Control>
              <Form.Text className="text-danger">{form.formErrors.date}</Form.Text>

            </Col>
            {/* <Col md={11} xl={4} lg={5} sm={12} xs={12} className='ps-md-0 ps-2 mb-3 ms-md-4'>

              <Form.Label className={`f14 theme14 ${styles.font} mb-0 `}>Services*</Form.Label>
              <Form.Select style={{ marginLeft: '0px!important' }}
                value={form.serviceType}
                name="serviceType"
                className={styles.textboxwdth44}
                onChange={handleChange}
                onBlur={() => {
                  const isEmpty = form.serviceType;
                  setForm((prevForm) => ({
                    ...prevForm,
                    formErrors: { ...prevForm.formErrors, serviceType: isEmpty ? "" : "Service cannot be empty" }
                  }))
                }}
              >
                <>
                  {DoctorAvialble ?
                    <option className="d-none">Select Service</option>
                    :
                    <option className="d-none" disabled>Doctor Not Available</option>
                  }
                  {FilterDuplicateServices && FilterDuplicateServices.map((item, index) => (
                    <option value={parseInt(item.serid)} key={index}>{item.sertext}</option>
                  ))}
                </>
              </Form.Select>
              <Form.Text className="text-danger">{form.formErrors.serviceType}</Form.Text>
            </Col> */}

          </div>
          <div className="d-lg-flex mt-3 mb-4">

          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='d-flex'>
            <Col md={9} className='text-center'><div className='theme12'></div></Col>
            <Col md={3} className='d-flex justify-content-end'>
              <Button className={` ${styles.bdrnone} ${styles.font} bg-white theme13 me-2 `} onClick={props.onHide}>Cancel</Button>
              <Button className={styles.submitbtn} disabled={disableloading} onClick={handleSchedule}>Submit</Button>
            </Col>
          </div>
        </Modal.Footer>
      </Modal>
    </div >
  )
}

export default RescheduleConsultation