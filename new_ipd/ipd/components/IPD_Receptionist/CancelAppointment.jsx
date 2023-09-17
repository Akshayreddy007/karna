import React, { useEffect, useState } from "react";
import { Modal, Form, Button, Col, Table } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/IPD_Receptionist/Appointments.module.scss";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CANCEL_REASON ,GET_IP_PATIENTS} from "../../graphql/queries";
import moment from "moment";
import { APPOINTMENT_STATUS } from "../../graphql/mutations";
import SuccessMessage, { showMessage } from "../alertmessages/Alertmessages";

const CancelAppointment = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
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
        console.error(
          "Error parsing global user hip from localStorage:",
          error
        );
      }
    }
  }

  // Extract the username from userData if it exists
  let username = "";
  if (userData && userData.username) {
    username = userData.username;
  }

  const [reasonData, setReasonData] = useState([]);
  const [reason, setReason] = useState([]);

  const [err, setErr] = useState("");
  const [reasonerror, setReasonError] = useState("");
  const { data: cancelReason } = useQuery(GET_CANCEL_REASON);
  useEffect(() => {
    if (cancelReason) {
      setReasonData(cancelReason.getGlobalCancellationReason);
    }
  }, [cancelReason]);

  const handleChange = (e) => {
    setReason(e.target.value);
    if (e.target.value) {
      setReasonError("");
      setErr("");
    }
  };

  const handleShow = () => {
    console.log(reason, "reason");
    if ((reason && reason.length === 0)) {
      setReasonError("select option");
      setErr("Please fill mandatary filed");
      setShow(false);
    } else {
      setShow(true);
    }
  };
  
  const [UpdateIPAppointmentStatus] = useMutation(APPOINTMENT_STATUS, {
    onError: (err) => {
      if (err.message == "Request failed with status code 422") {
        setErr("Got continuous requests.Please try again");
      } else {
        setErr(err.message);
      }
    },
    onCompleted: props.refetch,
  });

  let cancelAp = "";
  if (props.test) {
    cancelAp = props.test;
  }

  const { balance } = props;

  let Name = "";
  let Age = "";
  let Gender = "";
  let Mobile = "";

  const { PatientData, timestamp } = cancelAp;

  if (PatientData) {
    Name = PatientData.name || "";
    Age = PatientData.age || "";
    Gender =
      PatientData.gender === 1
        ? "M"
        : PatientData.gender === 2
        ? "O"
        : PatientData.gender === 0
        ? "F"
        : "";
    Mobile = PatientData.mobile || "";
  }

  let Guardian = "";
  let GmobileNo = "";
  let AdmissionNo = "";
  let time = "";
  let ipAppointmentId = "";
  let Status = "";
  let DoctorName = "";
  let DoctorId = "";
  let Department = 0;
  let Uhid = "";
  if (cancelAp) {
    const {
      display_ip_appointment_id,
      ip_appointment_timestamp,
      ip_appointment_id,
      status,
      doctor_name,
      doctor,
      department,
      gerdian_details,
      uhid,
    } = cancelAp;
    AdmissionNo = display_ip_appointment_id || "NA";
    ipAppointmentId = ip_appointment_id || "";
    DoctorName = doctor_name || "NA";
    DoctorId = doctor;
    Department = department || 0;
    Uhid = uhid || "NA";
    // Status=status

    if (gerdian_details && gerdian_details.length > 0) {
      if (gerdian_details[0].Name) {
        Guardian = gerdian_details[0].Name;
      }
      if (gerdian_details[0].Mobile) {
        GmobileNo = gerdian_details[0].Mobile;
      }
    }

    if (ip_appointment_timestamp) {
      const formattedTime = moment
        .unix(ip_appointment_timestamp)
        .format("hh:mm A");
      time = formattedTime;
    } else {
      time = "NA";
    }

    if (status === 0) {
      Status = "New";
    } else if (status === 1) {
      Status = "Checked-In";
    } else if (status === 2) {
      Status = "Admitted";
    } else if (status === 3) {
      Status = "Discharged";
    } else if (status === 4) {
      Status = "Cancelled";
    }
  }

  const { data: data5 } = useQuery(GET_IP_PATIENTS, {
    variables: {  
      hip: globalUserHip,
      ipAppointmentId:ipAppointmentId,
      status:6
      },
      fetchPolicy: "network-only",
});

  let Data5 = [];
if (data5 && data5.getInPateints && data5.getInPateints.length > 0 ) {
  Data5 = data5.getInPateints[0];
}
console.log(data5,"data5")

let mainDoctor = ""
if (data5 && data5.getInPateints && data5.getInPateints.length > 0) {
    const patientData = data5.getInPateints[0];
    if (patientData.assigndoctor) {
      mainDoctor = patientData.assigndoctor.filter(
        (doctor) => doctor.main_doctor === 1
      );
    }
}
console.log(mainDoctor,"mainDoctor")

  const onCancel = () => {
    props.onHide();
    setErr("");
    setReason("");
    setReasonError("");
  };

  // const onSubmit = async () => {

  //     if (!reason) {
  //         setReasonError("select option")
  //     }

  //     if (reason) {
  //         const { data } = await UpdateIPAppointmentStatus({
  //             variables: {
  //                 type: 0,
  //                 doctor: parseInt(DoctorId),
  //                 department: parseInt(Department),
  //                 ipAppointmentId: ipAppointmentId,
  //                 appointmentDate: "",
  //                 appointmentTime: "",
  //                 reasonForCancellation: parseInt(reason)
  //             }
  //         })
  //         if (data && data.UpdateIPAppointmentStatus) {
  //             setReason("")
  //             // setErr("Appointment cancelled Successfully")
  //             showMessage("Appointment cancelled Successfully", "success");

  //             setTimeout(() => {
  //               props.onHide();
  //             }, 3000);
  //         } else {
  //             setErr("Some thing went wrong please try after sometime")
  //         }

  //     } else {
  //         setErr("Please fill mandatary fileds")
  //     }

  // }

  const onSubmit = async () => {
    const { data } = await UpdateIPAppointmentStatus({
      variables: {
        type: 0,
        doctor: parseInt(DoctorId),
        department: parseInt(Department),
        ipAppointmentId: ipAppointmentId,
        appointmentDate: "",
        appointmentTime: "",
        reasonForCancellation: parseInt(reason),
      },
    });
    if (data && data.UpdateIPAppointmentStatus) {
      setReason("");
      // setErr("Appointment cancelled Successfully")
      showMessage("Appointment cancelled Successfully", "success");

      setTimeout(() => {
        //   props.onHide();
        setShow(false);
      }, 3000);
    } else {
      setErr("Some thing went wrong please try after sometime");
    }
  };

  const modelProps = { ...props, onHide: onCancel };
  return (
    <div>
      <Modal
        {...modelProps}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="md3"
      >
        <Modal.Header closeButton className="bdr2">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className={`px-md-3 f15 ${styles.font}`}
          >
            Cancel Appointment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center pe-md-5 ps-md-0 ps-3 mx-md-4">
            <Col
              md={6}
              xl={3}
              lg={3}
              sm={6}
              xs={6}
              className="ps-0 mb-lg-3 mb-md-3 mb-0"
            >
              <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>
                UHID
              </Form.Label>
              <div className={`f14 ${styles.font}`} disabled>
                {Uhid}
              </div>
            </Col>
            <Col
              md={6}
              xl={3}
              lg={3}
              sm={6}
              xs={6}
              className=" ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0"
            >
              <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>
                NAME
              </Form.Label>
              <div
                className={`f14 ${styles.font}`}
              >{`${Name}(${Age}/${Gender})`}</div>
            </Col>
            <Col
              md={6}
              xl={3}
              lg={3}
              sm={6}
              xs={6}
              className=" ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0"
            >
              <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>
                MOBILE NO
              </Form.Label>
              <div className={`f14 ${styles.font}`}>{`+91 ${Mobile}`}</div>
            </Col>
            <Col
              md={6}
              xl={3}
              lg={3}
              sm={6}
              xs={6}
              className=" ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0"
            >
              <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>
                GUARDIAN
              </Form.Label>
              <div
                className={`f14 ${styles.font}`}
              >{`${Guardian}(${GmobileNo})`}</div>
            </Col>
          </div>
          <div className="d-lg-flex align-items-center pe-md-5 ps-md-0 ps-2 mx-md-4">
            <Col
              md={6}
              xl={3}
              lg={3}
              sm={6}
              xs={6}
              className="  ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0 pb-3"
            >
              <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>
                ADMISN NO
              </Form.Label>
              <div
                className={`f14 ${styles.font}`}
              >{`${AdmissionNo} (${time})`}</div>
            </Col>
            <Col
              md={6}
              xl={3}
              lg={3}
              sm={6}
              xs={6}
              className=" ps-0 mt-md-0 mb-lg-3 mb-md-3 mt-3 mb-5 pb-3"
            >
              <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>
                STATUS
              </Form.Label>
              <div className={`${styles.admitted} f14`}>{Status}</div>
            </Col>
          </div>
          <div className="bdr2">
            {/* {err == "Appointment cancelled Successfully" ? "" : <span className="text-danger">{err}</span>} */}
            <SuccessMessage />
          </div>

          <Col></Col>
          <Col md={6} xl={3} lg={6} className='ps-md-0 ps-2 mb-4 mx-md-4 mt-4'>
                        <Form.Label className={`f12 theme12 ${styles.font} mb-1 `}>CHIEF DOCTOR</Form.Label>
                       <div className={`f14 ${styles.font}`}>{`Dr ${mainDoctor[0]?.doctor_name}`}</div>
                       {/* {`Dr ${DoctorName}(${Department})`} */}
          </Col>
          <Col
            md={6}
            xl={3}
            lg={6}
            sm={6}
            xs={11}
            className="ps-md-0 ps-2 mb-5 pb-3 mx-md-4"
          >
            <Form.Label className={`f14 theme14 ${styles.font} mb-0 `}>
              Reason For Cancellation
            </Form.Label>
            <Form.Select
              style={{ marginLeft: "0px!important" }}
              aria-label="Default select example"
              className={styles.textboxwdth44}
              onChange={handleChange}
              value={reason}
            >
              <option value="" className="d-none">Select Option</option>
              {reasonData.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {" "}
                    {item.reason}
                  </option>
                );
              })}
            </Form.Select>
            {reasonerror && <div className="text-danger">{reasonerror}</div>}
          </Col>
          {/* {isSubmit && isSubmit ? <div className='text-success text-center'>Successfully Appointment Cancelled</div> : ''} */}
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex">
            <Col md={9} className="text-center">
              <div className="theme12"></div>
            </Col>
            <Col md={3} className="d-flex justify-content-end">
              <Button
                className={` ${styles.bdrnone} ${styles.font}  bg-white theme13 me-2 `}
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button className={styles.submitbtn} onClick={() => handleShow()}>
                Submit
              </Button>
            </Col>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header closeButton className={styles.modal_header}>
          Cancel
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className={`${styles.trashclr} ${styles.trashbg}`}>
              <i className="fal fa-trash-alt"></i>
            </div>
            <div className={`text-center ${styles.font} f18 mt-3 mb-3`}>
              {" "}
              Are You Sure ?
            </div>
            <div
              className={`theme12 f13 mx-auto text-center ${styles.font} mb-4`}
            >
              <div> Do you really want to cancel this appointment . </div>
              <div>This appointment cannot be restore.</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ borderTop: "1px solid #fff" }}>
          <Button
            className={`${styles.appointmentbtn2} me-3`}
            onClick={handleClose}
          >
            No
          </Button>
          <Button className={styles.yesbtn} onClick={onSubmit}>
            Yes <i className="fal fa-chevron-right ps-2"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CancelAppointment;
