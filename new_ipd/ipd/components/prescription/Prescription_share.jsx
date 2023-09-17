import Image from "next/image";
import React, { useState, Component } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import Logo1 from "../../public/images/message.svg";
import Logo2 from "../../public/images/WHATSAPP.svg";
import Logo3 from "../../public/images/envelope.svg";
import styles from "../../styles/Prescription.module.scss";
import Footer from "../footer/Footer";
import Prescription_modal from "./Prescription_modal";
const Prescription_share = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <div className={`d-lg-flex pt-1 ${styles.bg_clr5}`}>
        <Col xl={5} md={12} lg={5} sm={12} xs={12}>
          <Card className={styles.min_ht90}>
            <Card.Body className="px-3">
              <h6 className="px-5 font-weight-400">
                Sending Prescription link to patient .
              </h6>
              <Row className="px-5 pt-5 mt-3 mb-2">
                <Col xl={2} md={2} lg={2} sm={2} xs={2}>
                  <Image src={Logo1} alt="image" />
                </Col>
                <Col xl={8} md={8} lg={8} sm={8} xs={8}>
                  <h6 className="font-weight-400">Click to send sms</h6>
                </Col>
              </Row>
              <Row className="px-5  mt-3 mb-2">
                <Col xl={2} md={2} lg={2} sm={2} xs={2}>
                  <Image src={Logo2} alt="image" />
                </Col>
                <Col xl={8} md={8} lg={8} sm={8} xs={8}>
                  <h6 className="font-weight-400">
                    Click to send whatsapp message
                  </h6>
                </Col>
              </Row>
              <Row className="px-5  mt-3 mb-2">
                <Col xl={2} md={2} lg={2} sm={2} xs={2}>
                  <Image src={Logo3} alt="image" />
                </Col>
                <Col xl={8} md={8} lg={8} sm={8} xs={8}>
                  <h6 className="font-weight-400">Click to send email</h6>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={7} md={12} lg={7} sm={12} xs={12}>
          <Card className={` ${styles.min_ht80} ${styles.mx_6}`}>
            <Card.Body className="px-3">
              <h6 className="font-weight-400 text-center">Prescreption</h6>
            </Card.Body>
          </Card>
          <Card className={styles.border_none}>
            <Card.Body>
              <Row>
                <Col md={5}>
                  <div className="d-flex mt-2">
                    <a href="#" className="theme9 pb-2 f13  px-3">
                      Configure Template
                    </a>
                    <a href="#" className="theme9 pb-2 f13  px-3">
                      Configure pad
                    </a>
                  </div>
                </Col>
                <Col md={7} className="text-end">
                  <Button
                    style={{ marginLeft: "10px" }}
                    className={styles.prescriptionbtn1}
                    onClick={handleShow}
                  >
                    Edit prescription
                  </Button>
                  <Button
                    style={{ marginLeft: "10px" }}
                    className={styles.prescriptionbtn1}
                  >
                    Print
                  </Button>
                  <Button
                    style={{ marginLeft: "10px" }}
                    className={styles.prescriptionbtn1}
                  >
                    End Visit
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </div>
      <Footer />
      <Prescription_modal show={show} onHide={() => setShow(false)} />
    </React.Fragment>
  );
};

export default Prescription_share;
