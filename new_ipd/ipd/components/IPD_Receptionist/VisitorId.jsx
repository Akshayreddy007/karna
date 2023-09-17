import React from "react";
import { Modal, Form, Button, Col, Table } from "react-bootstrap";
import styles from "../../styles/IPD_Receptionist/Appointments.module.scss";
import styles1 from "../../styles/IPD_Doctor/Visitor.module.scss";
import Image from "next/image";
import Logo3 from "../../public/images/image472.jpg";
import moment from "moment";
const VisitorId = (props) => {
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

  let visitorData = "";
  if (props.test) {
    console.log(props.test, "VD");
    visitorData = props.test;
  }
  // console.log(props.test,"visit")
  console.log(visitorData.PatientData, "visit");

  let Name = "";
  let Age = "";
  let Gender = "";
  let Mobile = "";
  // let TimeStampDate = "";

  const { PatientData, gerdian_details } = visitorData;

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
  let Date = "";
  if (visitorData) {
    const {
      attender_name,
      attender_mobile,
      display_ip_appointment_id,
      ip_appointment_timestamp,
      ip_appointment_id,
      status,
      gerdian_details,
    } = visitorData;
    AdmissionNo = display_ip_appointment_id || "NA";
    ipAppointmentId = ip_appointment_id || "";

    // Status=status

    if (ip_appointment_timestamp) {
      const formattedTime = moment
        .unix(ip_appointment_timestamp)
        .format("hh:mm A");
      time = formattedTime;
    } else {
      time = "NA";
    }
    console.log(Status, "st");
    if (gerdian_details && gerdian_details.length > 0) {
      if (gerdian_details[0].Name) {
        Guardian = gerdian_details[0].Name;
      }
      if (gerdian_details[0].Mobile) {
        GmobileNo = gerdian_details[0].Mobile;
      }
    }

    if (ip_appointment_timestamp) {
      const formattedTime = moment.unix(ip_appointment_timestamp);
      const day = formattedTime.date(); // Numeric day of the month (1-31)
      const month = formattedTime.month() + 1; // Numeric month (1-12)
      const year = formattedTime.year(); // Numeric year

      Date = `${day}/${month}/${year}`;
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

  return (
    <div>
      <Modal
        {...props}
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
            Visitor ID
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
              <div className={`f14 ${styles.font}`}>UHID2011</div>
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
              {/* <div className={`f14 ${styles.font}`}>{`${Name}(${Age}/${Gender})`}</div> */}
              <div className={`f14 ${styles.font}`}>{`${Name}`}</div>
              <div className={`f14 ${styles.font}`}>{`(${Age}/${Gender})`}</div>
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
          <div className="bdr2 pe-md-5 ps-md-0 ps-3 mx-md-4 mb-4 pb-1"></div>
          <Col md={12} xl={8} lg={8} className={`mx-auto ${styles1.bdr} mb-3`}>
            <div className={`d-flex ${styles1.bg1}`}>
              <Col md={3} className={`px-1 pt-1 mb-lg-1 ${styles1.w22}`}>
                <Image
                  src={Logo3}
                  alt="Image"
                  width={98}
                  height={87}
                  className={styles1.btr14}
                />
              </Col>
              <Col md={9} className="pt-1">
                <div
                  className={`font-weight-600 text-white pt-1 ${styles.font}`}
                >
                  New Indiv Clinic
                </div>
                <p
                  className={`text-white mb-0 font-weight-400 f14 ${styles.font}`}
                >
                  Metro Pillar Number C1775, 18, Hitech City Rd, HUDA Techno
                  Enclave, HITEC City, Hyd, TS-81 Ph: +91 9966332214,{" "}
                </p>
              </Col>
            </div>
            <div className="px-3 py-4">
              <div className="d-flex pb-4">
                <Col md={4} className="pe-2">
                  <div className={`theme12 f12 font-weight-300 ${styles.font}`}>
                    ADMISN No
                  </div>
                  <div
                    className={`theme14 font-weight-600 f14 ${styles.font}`}
                  >{`${AdmissionNo} (${Date})`}</div>
                </Col>
                <Col md={4} className="pe-2 ps-1">
                  <div className={`theme12 f12 font-weight-300 ${styles.font}`}>
                    PATIENT NAME
                  </div>
                  <div className={`theme14 font-weight-600 f14 ${styles.font}`}>
                    {Name}
                  </div>
                </Col>
                <Col md={4} className="pe-2 ps-1">
                  <div className={`theme12 f12 font-weight-300 ${styles.font}`}>
                    AGE/ GENDER
                  </div>
                  <div
                    className={`theme14 font-weight-600 f14 ${styles.font}`}
                  >{`${Age}/${Gender}`}</div>
                </Col>
              </div>
              <div className="d-flex pt-2">
                <Col md={4} className="pe-2 ps-1">
                  <div className={`theme12 f12 font-weight-300 ${styles.font}`}>
                    GUARDIAN NAME
                  </div>
                  <div className={`theme14 font-weight-600 f14 ${styles.font}`}>
                    {Guardian}
                  </div>
                </Col>
                <Col md={4} className="pe-2 ps-1">
                  <div className={`theme12 f12 font-weight-300 ${styles.font}`}>
                    MOBILE NO
                  </div>
                  <div
                    className={`theme14 font-weight-600 f14 ${styles.font}`}
                  >{`+91 ${GmobileNo}`}</div>
                </Col>
                <Col md={4} className="pe-2 ps-1">
                  <div className={`theme12 f12 font-weight-300 ${styles.font}`}>
                    ALT MOBILE NO
                  </div>
                  <div
                    className={`theme14 font-weight-600 f14 ${styles.font}`}
                  >{`+91 ${Mobile}`}</div>
                </Col>
              </div>
            </div>
            <div className={`${styles1.bg2} py-2`}>
              {/*   <p className={`mb-0 text-center text-white ${styles.font}`}>Visit Timings: 03:00 pm - 05:00 pm</p> */}
            </div>
          </Col>
        </Modal.Body>
        <Modal.Footer className="d-block">
          <div className="d-flex">
            <Col md={8} className="text-start f15">
              <Button
                className={` ${styles.bdrnone} ${styles.font} bg-white theme13 me-2 `}
              >
                Download Card
              </Button>
            </Col>
            <Col md={4} className="d-flex justify-content-end">
              <Button className={`${styles.submitbtn} ${styles.font}`}>
                Print ID
              </Button>
            </Col>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default VisitorId;
