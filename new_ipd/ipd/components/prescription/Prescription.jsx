import React from "react";
import { Bubble, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import {
  Container,
  Row,
  Col,
  Card,
  Nav,
  Tab,
  Form,
  Button,
  InputGroup,
  FormLabel,
  Accordion,
  useAccordionButton,
  Tabs,
} from "react-bootstrap";

import styles from "../../styles/Prescription.module.scss";
import styles1 from "../../styles/Prescription.module.scss";
import Logo2 from "../../public/images/Ellipse91.svg";
import Image from "next/image";
import Logo1 from "../../public/images/anamnesis.png";
import Prescription_sidebar from "./Prescription_sidebar";
import Link from "next/link";
import { useState } from "react";
import PatientOverview from "../patientoverview/PatientOverview";
import MedicalRecordModal from "./MedicalRecordModal";
const Prescription = () => {
  const [isOpen, setIsopen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const data = {
    labels: ["12Jan", "22Jan", "24Apr", "12Feb", "5Aug", "9Nov"],
    datasets: [
      {
        label: "BMI",
        data: [33, 53, 90, 41, 44, 65],
        fill: false,
        backgroundColor: "#0030CC",
        borderColor: "#0030CC",
        fontFamily: "poppins",
      },
    ],
  };
  const data1 = {
    labels: ["12Jan", "22Jan", "24Apr", "12Feb", "5Aug", "9Nov"],
    datasets: [
      {
        label: "Systolic BP",
        data: [33, 53, 90, 41, 44, 65],
        fill: false,
        backgroundColor: "#0030CC",
        borderColor: "#0030CC",
        fontFamily: "poppins",
      },
    ],
  };
  const data2 = {
    labels: ["12Jan", "22Jan", "24Apr", "12Feb", "5Aug", "9Nov"],
    datasets: [
      {
        label: "Diastolic BP",
        data: [33, 53, 90, 41, 44, 65],
        fill: false,
        backgroundColor: "#0030CC",
        borderColor: "#0030CC",
        fontFamily: "poppins",
      },
    ],
  };
  const data3 = {
    labels: ["12Jan", "22Jan", "24Apr", "12Feb", "5Aug", "9Nov"],
    datasets: [
      {
        label: "HR",
        data: [33, 53, 90, 41, 44, 65],
        fill: false,
        backgroundColor: "#0030CC",
        borderColor: "#0030CC",
        fontFamily: "poppins",
      },
    ],
  };
  const Prescription_key = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <React.Fragment>
        <span
          type="button"
          className={styles.bgprescription}
          onClick={decoratedOnClick}
        >
          {children}
        </span>
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      <div className="bgclr ">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="pt-2 container-fluid">
            <div className="bdrbtm1 p-2 px-3  pb-2 pt-2 bg-white  accordianradius">
              <div className="d-xl-flex">
                <Nav
                  variant="pills"
                  className="col-md-12 col-xl-4 col-12 col-lg-12"
                >
                  <Nav.Item>
                    <div id="prescription">
                      <Nav.Link eventKey="first">Patient Overview</Nav.Link>
                    </div>
                  </Nav.Item>
                  <Nav.Item>
                    <div id="prescription">
                      <Nav.Link eventKey="second">Prescription Pad</Nav.Link>
                    </div>
                  </Nav.Item>
                </Nav>
                <div className="col-md-7 col-xl-8 col-lg-9 col-12 d-lg-grid d-none">
                  <div>
                    <Row className="justify-content-end">
                      <div
                        className={`overflow_scroll  justify-content-end ${styles.display_box} ${styles.border_radius13}`}
                      >
                        <div className="d-flex">
                          <div className="me-2 mt-2">
                            <i className="fal fa-edit"></i>
                          </div>
                          <div className="ms-2">
                            <Image src={Logo2} alt="" width={40} className="" />
                          </div>
                          <div className="ms-2">
                            <Col md={12} className="f12">
                              Theodore T.C. Calvin
                            </Col>
                            <Col md={12} className="theme12 f12 text-left">
                              UHID: 598789562
                            </Col>
                          </div>
                        </div>
                        <div className="ms-4">
                          <div className="theme12 f12">DOB</div>
                          <div className="f12">19 Dec 1965</div>
                        </div>
                        <div className="ms-4">
                          <div className="theme12 f12">Gender</div>
                          <div className="f12">Male</div>
                        </div>
                        <div className="ms-4">
                          <div className="theme12 f12">Mobile No</div>
                          <div className="f12">+91 9898989898</div>
                        </div>
                        <div className="ms-4">
                          <div className="theme12 f12">Email</div>
                          <div className="f12">minions@gmail.com</div>
                        </div>
                        <div className="ms-4">
                          <div className="theme12 f12">Abha Address</div>
                          <div className="f12">Sumanth@abha</div>
                        </div>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
            </div>

            <Tab.Content>
              <Tab.Pane eventKey="first">
                <PatientOverview />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="d-xl-flex d-block">
                  <Col
                    sm={12}
                    md={12}
                    xl={9}
                    lg={12}
                    className="mt-2  rounded px-2"
                  >
                    <Accordion
                      defaultActiveKey={[
                        "0",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                      ]}
                      alwaysOpen
                    >
                      <Card className={styles.accordianradius1}>
                        <Card className={styles.accordianradius1}>
                          <Card.Header className="pt-0 pb-0 bg-white accordianradius1">
                            <Row className={styles.accordianradius1}>
                              <Col md={10} xs={6}>
                                <Prescription_key eventKey="0">
                                  <div className="d-block f16 bdrbtlradius">
                                    {" "}
                                    Vitals
                                  </div>
                                </Prescription_key>
                              </Col>
                              <Col
                                md={2}
                                xs={6}
                                className={styles.bgprescription1}
                              >
                                <div className=" text-end ">
                                  <span className="ms-2">
                                    <i className="fa fa-calculator theme9"></i>
                                  </span>
                                  <span className="ms-3 me-3 me-md-0" role="button" onClick={ToggleSidebar}>
                                    <i className="fal fa-cogs"></i>
                                  </span>
                                </div>
                              </Col>
                            </Row>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <Row className="bg-white">
                                <Col md={12} xl={6} lg={6} sm={12} xs={12}>
                                  <div className="d-flex">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth1">
                                      Pulse Rate
                                    </FormLabel>
                                    <InputGroup className="mb-3 ">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        /min
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={12} xl={6} lg={6} sm={12} xs={12}>
                                  <div className="d-flex">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth1 ">
                                      Height
                                    </FormLabel>
                                    <InputGroup className="mb-3 ">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        Inch
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={12} xl={6} lg={6} sm={12} xs={12}>
                                  <div className="d-flex">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth1">
                                      Blood Pressure
                                    </FormLabel>
                                    <InputGroup className="mb-3 ">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        mm/hg
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={12} xl={6} lg={6} sm={12} xs={12}>
                                  <div className="d-flex">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth1">
                                      Respiratory Rate
                                    </FormLabel>
                                    <InputGroup className="mb-3 ">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        /min
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={12} xl={6} lg={6} sm={12} xs={12}>
                                  <div className="d-flex">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth1">
                                      {" "}
                                      Temperature
                                    </FormLabel>
                                    <InputGroup className="mb-3 ">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        f
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={12} xl={6} lg={6} sm={12} xs={12}>
                                  <div className="d-flex">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth1">
                                      Blood Height
                                    </FormLabel>
                                    <InputGroup className="mb-3 ">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        %
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={12} xl={6} lg={6} sm={12} xs={12}>
                                  <div className="d-flex">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth1">
                                      Body Weight
                                    </FormLabel>
                                    <InputGroup className="mb-3 ">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        kg
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={12} xl={6} lg={6} sm={12} xs={12}>
                                  <div className="d-flex">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth1">
                                      Body Mass Index
                                    </FormLabel>
                                    <InputGroup className="mb-3 ">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        kg/m2
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={12} xl={6} lg={6} sm={12} xs={12}>
                                  <div className="d-flex">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth1">
                                      Systolic bp
                                    </FormLabel>
                                    <InputGroup className="mb-3 ">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        mm/hg
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={12} xl={6} lg={6} sm={12} xs={12}>
                                  <div className="d-flex">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth1">
                                      Diastolic bp
                                    </FormLabel>
                                    <InputGroup className="mb-3 ">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        mm/hg
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        <div className="mt-0"></div>
                        <Card
                          className={`${styles.accordianradius2} mx-2 mb-2`}
                        >
                          <Card.Header
                            className="pt-0 pb-0  accordianradius2"
                            style={{ borderBottom: "none" }}
                          >
                            <Row>
                              <Col md={10} xs={6}>
                                <Prescription_key
                                  eventKey="1"
                                  className={styles.bgprescription2}
                                >
                                  <div className="d-block f16 bdrbtlradius accordianradius2">
                                    <span className={styles.sorticon}>
                                      <i className="fa fa-sort-down"></i>
                                    </span>{" "}
                                    Calculators
                                  </div>
                                </Prescription_key>
                              </Col>
                            </Row>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body
                              style={{ background: "rgb(235 238 251 / 4%)" }}
                            >
                              <Row>
                                <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                  <div className="d-flex mt-3">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                      HOMA-IR
                                    </FormLabel>
                                    <InputGroup className="mb-3 prewdth2">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        calculate
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                  <div className="d-flex mt-3">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                      eGFR
                                    </FormLabel>
                                    <InputGroup className="mb-3 prewdth2">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        calculate
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                  <div className="d-flex mt-3">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                      USG EDD
                                    </FormLabel>
                                    <InputGroup className="mb-3 prewdth2">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        calculate
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                  <div className="d-flex mt-3">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                      Waist Hip Ratio
                                    </FormLabel>
                                    <InputGroup className="mb-3 prewdth2">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        calculate
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                  <div className="d-flex mt-3">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                      NAFLD fibrosis score
                                    </FormLabel>
                                    <InputGroup className="mb-3 prewdth2">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        calculate
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                  <div className="d-flex mt-3">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                      CVD 10 Yr Risk
                                    </FormLabel>
                                    <InputGroup className="mb-3 prewdth2">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        calculate
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                  <div className="d-flex mt-3">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                      Quicki
                                    </FormLabel>
                                    <InputGroup className="mb-3 prewdth2">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        calculate
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                  <div className="d-flex mt-3">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                      Epworth sleepiness score
                                    </FormLabel>
                                    <InputGroup className="mb-3 prewdth2">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        calculate
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                  <div className="d-flex mt-3">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                      HAS-BLED score
                                    </FormLabel>
                                    <InputGroup className="mb-3 prewdth2">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        calculate
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                  <div className="d-flex mt-3">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                      Child Pugh
                                    </FormLabel>
                                    <InputGroup className="mb-3 prewdth2">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        calculate
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                  <div className="d-flex mt-3">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                      ABCD² Score
                                    </FormLabel>
                                    <InputGroup className="mb-3 prewdth2">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        calculate
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                  <div className="d-flex mt-3">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                      CHA2DS2-Vasc score
                                    </FormLabel>
                                    <InputGroup className="mb-3 prewdth2">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        calculate
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                  <div className="d-flex mt-3">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                      MELD Score
                                    </FormLabel>
                                    <InputGroup className="mb-3 prewdth2">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        calculate
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                                <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                  <div className="d-flex mt-3">
                                    <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                      LMP EDD
                                    </FormLabel>
                                    <InputGroup className="mb-3 prewdth2">
                                      <Form.Control aria-describedby="basic-addon2" />
                                      <InputGroup.Text id="basic-addon2">
                                        calculate
                                      </InputGroup.Text>
                                    </InputGroup>
                                  </div>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Card>
                      <div className="mt-4"></div>
                      <Card className={styles.accordianradius1}>
                        <Card.Header className="pt-0 pb-0 bg-white accordianradius1">
                          <Row className={styles.accordianradius1}>
                            <Col md={8}>
                              <Prescription_key eventKey="2">
                                <div className="d-block f16 bdrbtlradius ">
                                  <span className={styles.sorticon}>
                                    <i className="fa fa-sort-down"></i>
                                  </span>{" "}
                                  Patient Medical History
                                </div>
                              </Prescription_key>
                            </Col>
                            <Col md={4} className={styles.bgprescription1}>
                              <div className=" text-end">
                                <span className="me-2 f13">
                                  <input type="checkbox"></input>{" "}
                                  <span className="ms-2 f13  ">
                                    No Unknown Medical History
                                  </span>
                                </span>
                                <span className="ms-2">
                                  <i className="fal fa-save"></i>
                                </span>
                                <span className="ms-3 me-3 me-md-0">
                                  <i className="fal fa-cogs"></i>
                                </span>
                              </div>
                            </Col>
                          </Row>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            <Row>
                              <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                    Diabetes Mellitus
                                  </FormLabel>
                                  <Form.Control
                                    type="text"
                                    name="Diabetes Mellitus"
                                    className="textboxborder"
                                  />
                                </div>
                              </Col>
                              <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                    Alcohol
                                  </FormLabel>
                                  <Form.Control
                                    type="text"
                                    name="Diabetes Mellitus"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                    Smoke
                                  </FormLabel>
                                  <Form.Control
                                    type="text"
                                    name="Diabetes Mellitus"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                    Hypertension
                                  </FormLabel>
                                  <Form.Control
                                    type="text"
                                    name="Diabetes Mellitus"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col md={6} xl={4} lg={6} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <FormLabel className="col-md-3 mt-2 f13 prewdth8">
                                    Tobacco
                                  </FormLabel>
                                  <Form.Control
                                    type="text"
                                    name="Diabetes Mellitus"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                            </Row>
                            .
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <div className="mt-4"></div>
                      <Card className={styles.accordianradius1}>
                        <Card.Header className="pt-0 pb-0 bg-white accordianradius1">
                          <Row className={styles.accordianradius1}>
                            <Col md={10} xs={6}>
                              <Prescription_key eventKey="3">
                                <div className="d-block f16 bdrbtlradius ">
                                  <span className={styles.sorticon}>
                                    <i className="fa fa-sort-down"></i>
                                  </span>{" "}
                                  Symptoms
                                </div>
                              </Prescription_key>
                            </Col>
                            <Col
                              md={2}
                              xs={6}
                              className={styles.bgprescription1}
                            >
                              <div className=" text-end">
                                <span className="ms-2">
                                  <i className="fal fa-save"></i>
                                </span>
                                <span className="ms-3 me-3 me-md-0">
                                  <i className="fal fa-cogs"></i>
                                </span>
                              </div>
                            </Col>
                          </Row>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body>
                            <Row>
                              <Col
                                md={1}
                                xl={1}
                                lg={4}
                                sm={12}
                                xs={12}
                                style={{ width: "3%" }}
                              >
                                <div className="d-flex mt-4">
                                  <i className="fal fa-bars"></i>
                                </div>
                              </Col>
                              <Col md={3} xl={3} lg={3} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Cold"
                                    placeholder="Cold"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col md={3} xl={3} lg={3} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="2 days"
                                    placeholder="2 Days"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col md={2} xl={2} lg={2} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="mild"
                                    placeholder="Mild"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col md={3} xl={3} lg={3} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Notes"
                                    placeholder="Notes"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col
                                md={1}
                                xl={1}
                                lg={1}
                                sm={12}
                                xs={12}
                                style={{ width: "5%" }}
                              >
                                <div className="d-flex mt-4">
                                  <i className="fal fa-trash"></i>
                                </div>
                              </Col>
                              <Col md={12} xl={12} lg={12} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Start Typing"
                                    placeholder="Start Typing"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <div className="mt-4"></div>
                      <Card className={styles.accordianradius1}>
                        <Card.Header className="pt-0 pb-0 bg-white accordianradius1">
                          <Row className={styles.accordianradius1}>
                            <Col md={10} xs={6}>
                              <Prescription_key eventKey="4">
                                <div className="d-block f16 bdrbtlradius ">
                                  <span className={styles.sorticon}>
                                    <i className="fa fa-sort-down"></i>
                                  </span>{" "}
                                  Habits
                                </div>
                              </Prescription_key>
                            </Col>
                            <Col
                              md={2}
                              xs={6}
                              className={styles.bgprescription1}
                            >
                              <div className=" text-end">
                                <span className="ms-2">
                                  <i className="fal fa-save"></i>
                                </span>
                                <span className="ms-3 me-3 me-md-0">
                                  <i className="fal fa-cogs"></i>
                                </span>
                              </div>
                            </Col>
                          </Row>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                          <Card.Body>
                            <Row>
                              <Col
                                md={1}
                                xl={1}
                                lg={4}
                                sm={12}
                                xs={12}
                                style={{ width: "3%" }}
                              >
                                <div className="d-flex mt-4">
                                  <i className="fal fa-bars"></i>
                                </div>
                              </Col>
                              <Col md={3} xl={3} lg={3} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Cigarette"
                                    placeholder="Cigarette"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col md={3} xl={3} lg={3} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="2 days"
                                    placeholder="2 Days"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col md={2} xl={2} lg={2} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="mild"
                                    placeholder="Mild"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col md={3} xl={3} lg={3} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Notes"
                                    placeholder="Notes"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col
                                md={1}
                                xl={1}
                                lg={1}
                                sm={12}
                                xs={12}
                                style={{ width: "5%" }}
                              >
                                <div className="d-flex mt-4">
                                  <i className="fal fa-trash"></i>
                                </div>
                              </Col>
                              <Col md={12} xl={12} lg={12} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Start Typing"
                                    placeholder="Start Typing"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <div className="mt-4"></div>
                      <Card className={styles.accordianradius1}>
                        <Card.Header className="pt-0 pb-0 bg-white accordianradius1">
                          <Row className={styles.accordianradius1}>
                            <Col md={10} xs={6}>
                              <Prescription_key eventKey="5">
                                <div className="d-block f16 bdrbtlradius ">
                                  <span className={styles.sorticon}>
                                    <i className="fa fa-sort-down"></i>
                                  </span>{" "}
                                  Diagnosis
                                </div>
                              </Prescription_key>
                            </Col>
                            <Col
                              md={2}
                              xs={6}
                              className={styles.bgprescription1}
                            >
                              <div className=" text-end">
                                <span className="ms-2">
                                  <i className="fal fa-save"></i>
                                </span>
                                <span className="ms-3 me-3 me-md-0">
                                  <i className="fal fa-cogs"></i>
                                </span>
                              </div>
                            </Col>
                          </Row>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5">
                          <Card.Body>
                            <Row>
                              <Col
                                md={1}
                                xl={1}
                                lg={4}
                                sm={12}
                                xs={12}
                                style={{ width: "3%" }}
                              >
                                <div className="d-flex mt-4">
                                  <i className="fal fa-bars"></i>
                                </div>
                              </Col>
                              <Col md={3} xl={3} lg={3} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Cigarette"
                                    placeholder="Dacryocystitis"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col md={3} xl={3} lg={3} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="2 days"
                                    placeholder="2 Days"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col md={2} xl={2} lg={2} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="mild"
                                    placeholder="Suspected"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col md={3} xl={3} lg={3} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Notes"
                                    placeholder="Laterality:Right and left
      Details:loruim ipusm"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col
                                md={1}
                                xl={1}
                                lg={1}
                                sm={12}
                                xs={12}
                                style={{ width: "5%" }}
                              >
                                <div className="d-flex mt-4">
                                  <i className="fal fa-trash"></i>
                                </div>
                              </Col>
                              <Col md={12} xl={12} lg={12} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Start Typing"
                                    placeholder="Start Typing"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <div className="mt-4"></div>

                      <Card className={styles.accordianradius1}>
                        <Card.Header className="pt-0 pb-0 bg-white accordianradius1">
                          <Row className={styles.accordianradius1}>
                            <Col md={10} xs={6}>
                              <Prescription_key eventKey="6">
                                <div className="d-block f16 bdrbtlradius ">
                                  <span className={styles.sorticon}>
                                    <i className="fa fa-sort-down"></i>
                                  </span>{" "}
                                  Medications
                                </div>
                              </Prescription_key>
                            </Col>
                            <Col
                              md={2}
                              xs={6}
                              className={styles.bgprescription1}
                            >
                              <div className=" text-end">
                                <span className="ms-2">
                                  <i className="fal fa-save"></i>
                                </span>
                                <span className="ms-3 me-3 me-md-0">
                                  <i className="fal fa-cogs"></i>
                                </span>
                              </div>
                            </Col>
                          </Row>
                        </Card.Header>
                        <Accordion.Collapse eventKey="6">
                          <Card.Body>
                            <Row className="bdrbtm1 pb-2 d-xl-flex d-none">
                              <Col
                                md={2}
                                xl={2}
                                lg={2}
                                sm={12}
                                xs={12}
                                style={{ width: "35px" }}
                              >
                                <div></div>
                              </Col>
                              <Col
                                md={2}
                                xl={2}
                                lg={2}
                                sm={12}
                                xs={12}
                                style={{ width: "150px" }}
                              >
                                <div className="f13 d-md-flex d-none">
                                  MEDICINE{" "}
                                </div>
                                <div className="f12 d-md-flex d-none">
                                  Generic
                                </div>
                              </Col>
                              <Col
                                md={2}
                                xl={2}
                                lg={2}
                                sm={12}
                                xs={12}
                                className="w_105"
                              >
                                <div className="f13 d-md-flex d-none">
                                  ROUTE{" "}
                                </div>
                                <div className="f12 d-md-flex d-none">
                                  eg. Oral
                                </div>
                              </Col>
                              <Col
                                md={2}
                                xl={2}
                                lg={2}
                                sm={12}
                                xs={12}
                                className="w_105"
                              >
                                <div className="f13 d-md-flex d-none">
                                  FREQUENCY{" "}
                                </div>
                                <div className="f12 d-md-flex d-none">
                                  eg. 1-0-1 etc
                                </div>
                              </Col>
                              <Col
                                md={2}
                                xl={2}
                                lg={2}
                                sm={12}
                                xs={12}
                                className="w_105"
                              >
                                <div className="f13 d-md-flex d-none">
                                  TIMING{" "}
                                </div>
                                <div className="f12 d-md-flex d-none">
                                  eg. After meal
                                </div>
                              </Col>
                              <Col
                                md={2}
                                xl={2}
                                lg={2}
                                sm={12}
                                xs={12}
                                className="w_105"
                              >
                                <div className="f13 d-md-flex d-none">
                                  DURATION{" "}
                                </div>
                                <div className="f12 d-md-flex d-none">
                                  eg. 3 days
                                </div>
                              </Col>
                              <Col
                                md={2}
                                xl={2}
                                lg={2}
                                sm={12}
                                xs={12}
                                style={{ width: "105px" }}
                              >
                                <div className="f13 d-md-flex d-none">
                                  START FROM{" "}
                                </div>
                                <div className="f12 d-md-flex d-none">
                                  eg. 1, 3, 5 etc
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col
                                md={1}
                                xl={1}
                                lg={4}
                                sm={12}
                                xs={12}
                                style={{ width: "3%" }}
                              >
                                <div className="d-flex mt-4">
                                  <i className="fal fa-bars"></i>
                                </div>
                              </Col>
                              <Col
                                md={2}
                                xl={2}
                                lg={2}
                                sm={12}
                                xs={12}
                                className="w_160"
                              >
                                <div className=" mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Cigarette"
                                    placeholder="Dacryocystitis"
                                    className="textboxborder f12"
                                  />
                                </div>
                              </Col>
                              <Col
                                md={2}
                                xl={2}
                                lg={2}
                                sm={12}
                                xs={12}
                                className="w_105"
                              >
                                <div className=" mt-3">
                                  <Form.Control
                                    type="text"
                                    name="2 days"
                                    placeholder="Oral"
                                    className="textboxborder f12"
                                  />
                                </div>
                              </Col>
                              <Col
                                md={2}
                                xl={2}
                                lg={2}
                                sm={12}
                                xs={12}
                                className="w_105"
                              >
                                <div className=" mt-3">
                                  <Form.Control
                                    type="text"
                                    name="mild"
                                    placeholder="1-0-1"
                                    className="textboxborder f12"
                                  />
                                </div>
                              </Col>
                              <Col
                                md={2}
                                xl={2}
                                lg={2}
                                sm={12}
                                xs={12}
                                className="w_105"
                              >
                                <div className=" mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Notes"
                                    placeholder="After Meals"
                                    className="textboxborder f12"
                                  />
                                </div>
                              </Col>
                              <Col
                                md={2}
                                xl={2}
                                lg={2}
                                sm={12}
                                xs={12}
                                className="w_105"
                              >
                                <div className=" mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Notes"
                                    placeholder="5 Days"
                                    className="textboxborder f12"
                                  />
                                </div>
                              </Col>
                              <Col
                                md={2}
                                xl={2}
                                lg={2}
                                sm={12}
                                xs={12}
                                className="w_105"
                              >
                                <div className=" mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Notes"
                                    placeholder="5 Days"
                                    className="textboxborder f12"
                                  />
                                </div>
                              </Col>
                              <Col
                                md={1}
                                xl={1}
                                lg={1}
                                sm={12}
                                xs={12}
                                style={{ width: "3%" }}
                              >
                                <div className="d-flex mt-4">
                                  <i className="fal fa-trash"></i>
                                </div>
                              </Col>
                              <Col md={12} xl={12} lg={12} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Start Typing"
                                    placeholder="Start Typing"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <div className="mt-4"></div>
                      <Card className={styles.accordianradius1}>
                        <Card.Header className="pt-0 pb-0 bg-white accordianradius1">
                          <Row className={styles.accordianradius1}>
                            <Col md={10} xs={6}>
                              <Prescription_key eventKey="7">
                                <div className="d-block f16 bdrbtlradius ">
                                  <span className={styles.sorticon}>
                                    <i className="fa fa-sort-down"></i>
                                  </span>{" "}
                                  Lab Investigations
                                </div>
                              </Prescription_key>
                            </Col>
                            <Col
                              md={2}
                              xs={6}
                              className={styles.bgprescription1}
                            >
                              <div className=" text-end">
                                <span className="ms-2">
                                  <i className="fal fa-save"></i>
                                </span>
                                <span className="ms-3 me-3 me-md-0">
                                  <i className="fal fa-cogs"></i>
                                </span>
                              </div>
                            </Col>
                          </Row>
                        </Card.Header>
                        <Accordion.Collapse eventKey="7">
                          <Card.Body>
                            <Row>
                              <Col
                                md={1}
                                xl={1}
                                lg={4}
                                sm={12}
                                xs={12}
                                style={{ width: "3%" }}
                              >
                                <div className="d-flex mt-4">
                                  <i className="fal fa-bars"></i>
                                </div>
                              </Col>
                              <Col md={4} xl={4} lg={4} sm={12} xs={12}>
                                <div className=" mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Cigarette"
                                    placeholder="CBC"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col md={7} xl={7} lg={7} sm={12} xs={12}>
                                <div className=" mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Notes"
                                    placeholder="Notes"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col
                                md={1}
                                xl={1}
                                lg={1}
                                sm={12}
                                xs={12}
                                style={{ width: "3%" }}
                              >
                                <div className="d-flex mt-4">
                                  <i className="fal fa-trash"></i>
                                </div>
                              </Col>
                              <Col md={12} xl={12} lg={12} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Start Typing"
                                    placeholder="Start Typing"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <div className="mt-4"></div>
                      <Card className={styles.accordianradius1}>
                        <Card.Header className="pt-0 pb-0 bg-white accordianradius1">
                          <Row className={styles.accordianradius1}>
                            <Col md={10} xs={8}>
                              <Prescription_key eventKey="8">
                                <div className="d-block f16 bdrbtlradius ">
                                  <span className={styles.sorticon}>
                                    <i className="fa fa-sort-down"></i>
                                  </span>{" "}
                                  Exam Findings
                                </div>
                              </Prescription_key>
                            </Col>
                            <Col
                              md={2}
                              xs={4}
                              className={styles.bgprescription1}
                            >
                              <div className=" text-end">
                                <span className="ms-2">
                                  <i className="fal fa-save"></i>
                                </span>
                                <span className="ms-3 me-3 me-md-0">
                                  <i className="fal fa-cogs"></i>
                                </span>
                              </div>
                            </Col>
                          </Row>
                        </Card.Header>
                        <Accordion.Collapse eventKey="8">
                          <Card.Body>
                            <Row>
                              <Col
                                md={1}
                                xl={1}
                                lg={4}
                                sm={12}
                                xs={12}
                                style={{ width: "3%" }}
                              >
                                <div className="d-flex mt-4">
                                  <i className="fal fa-bars"></i>
                                </div>
                              </Col>
                              <Col md={4} xl={4} lg={4} sm={12} xs={12}>
                                <div className=" mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Cigarette"
                                    placeholder="Adipsia"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col md={7} xl={7} lg={7} sm={12} xs={12}>
                                <div className=" mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Notes"
                                    placeholder="Notes"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col
                                md={1}
                                xl={1}
                                lg={1}
                                sm={12}
                                xs={12}
                                style={{ width: "3%" }}
                              >
                                <div className="d-flex mt-4">
                                  <i className="fal fa-trash"></i>
                                </div>
                              </Col>
                              <Col md={12} xl={12} lg={12} sm={12} xs={12}>
                                <div className="d-flex mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Start Typing"
                                    placeholder="Start Typing"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <div className="mt-4"></div>
                      <Card className={styles.accordianradius1}>
                        <Card.Header className="pt-0 pb-0 bg-white accordianradius1">
                          <Row className={styles.accordianradius1}>
                            <Col md={10} xs={6}>
                              <Prescription_key eventKey="9">
                                <div className="d-block f16 bdrbtlradius ">
                                  <span className={styles.sorticon}>
                                    <i className="fa fa-sort-down"></i>
                                  </span>{" "}
                                  Refer Doctor
                                </div>
                              </Prescription_key>
                            </Col>
                            <Col
                              md={2}
                              xs={6}
                              className={styles.bgprescription1}
                            >
                              <div className=" text-end"></div>
                            </Col>
                          </Row>
                        </Card.Header>
                        <Accordion.Collapse eventKey="9">
                          <Card.Body>
                            <Row>
                              <Col
                                md={1}
                                xl={1}
                                lg={4}
                                sm={12}
                                xs={12}
                                style={{ width: "3%" }}
                              >
                                <div className="d-flex mt-4">
                                  <i className="fal fa-bars"></i>
                                </div>
                              </Col>
                              <Col md={2} xl={2} lg={2} sm={12} xs={12}>
                                <div className=" mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Cigarette"
                                    placeholder="Rama Krishna"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col md={2} xl={2} lg={2} sm={12} xs={12}>
                                <div className=" mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Cigarette"
                                    placeholder="Cardio"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col md={2} xl={2} lg={2} sm={12} xs={12}>
                                <div className=" mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Cigarette"
                                    placeholder="91999999"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col md={5} xl={5} lg={5} sm={12} xs={12}>
                                <div className=" mt-3">
                                  <Form.Control
                                    type="text"
                                    name="Notes"
                                    placeholder="Notes"
                                    className="textboxborder f13"
                                  />
                                </div>
                              </Col>
                              <Col
                                md={1}
                                xl={1}
                                lg={1}
                                sm={12}
                                xs={12}
                                style={{ width: "3%" }}
                              >
                                <div className="d-flex mt-4">
                                  <i className="fal fa-trash"></i>
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <div className="mt-4"></div>
                      <Card className={styles.accordianradius1}>
                        <Card.Header className="pt-0 pb-0 bg-white accordianradius1">
                          <Row className={styles.accordianradius1}>
                            <Col md={10} xs={6}>
                              <Prescription_key eventKey="10">
                                <div className="d-block f16 bdrbtlradius ">
                                  <span className={styles.sorticon}>
                                    <i className="fa fa-sort-down"></i>
                                  </span>{" "}
                                  Notes
                                </div>
                              </Prescription_key>
                            </Col>
                            <Col
                              md={2}
                              xs={6}
                              className={styles.bgprescription1}
                            >
                              <div className=" text-end"></div>
                            </Col>
                          </Row>
                        </Card.Header>
                        <Accordion.Collapse eventKey="10">
                          <Card.Body>
                            <Row>
                              <Col md={12} xl={6} lg={12} sm={12} xs={12}>
                                <div className=" mt-3">
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                  >
                                    <Form.Label>
                                      NOTES FOR PATIENT
                                      (TREATMENT/SURGICAL/OTHERS)
                                    </Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                  </Form.Group>
                                </div>
                              </Col>

                              <Col md={12} xl={6} lg={12} sm={12} xs={12}>
                                <div className=" mt-3">
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                  >
                                    <Form.Label>PRIVATE NOTES</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                  </Form.Group>
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </Col>
                  <Col
                    md={12}
                    xl={3}
                    lg={12}
                    sm={12}
                    className=" px-2 d-md-block f16  w-28 mt-xl-2 mt-md-3"
                  >
                    <Card className="p-3 bdr1">
                      <Card.Body className="minht pt-0 px-0">
                        <Tab.Container
                          id="left-tabs-example"
                          defaultActiveKey="first"
                        >
                          <Row>
                            <Col sm={12} className={styles.bdr_btm1}>
                              <Nav variant="pills" className="flex-row">
                                <Nav.Item>
                                  <div id="vitals">
                                    <Nav.Link eventKey="first">Visits</Nav.Link>
                                  </div>
                                </Nav.Item>
                                <Nav.Item>
                                  <div id="vitals">
                                    <Nav.Link eventKey="second">History</Nav.Link>
                                  </div>
                                </Nav.Item>
                                <Nav.Item>
                                  <div id="vitals">
                                    <Nav.Link eventKey="third">Vitals</Nav.Link>
                                  </div>
                                </Nav.Item>
                                <Nav.Item>
                                  <div id="vitals">
                                    <Nav.Link eventKey="fourth">Records</Nav.Link>
                                  </div>
                                </Nav.Item>
                              </Nav>
                            </Col>
                            <Col sm={12}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <Card className="mt-3">
                                    <Card.Body>
                                      <div className="f12">TODAY’S LAB REPORTS</div>
                                      <a href="#" className="f12">
                                        <span className="theme9">CBG</span>{" "}
                                        <i className="fal fa-external-link"></i>
                                      </a>
                                    </Card.Body>
                                  </Card>
                                  <Card className={`mt-3  ${styles.min_scroll}`}>
                                    <Card.Header className="bg-white">
                                      <Row>
                                        <Col md={6} className="f12">
                                          Nov 16 2022
                                        </Col>
                                        <Col md={6} className="text-end f12">
                                          <span className="mx-2">
                                            <i className="fal fa-copy"></i>
                                          </span>
                                          <span className="mx-2">
                                            <i className="fal fa-external-link"></i>
                                          </span>
                                        </Col>
                                      </Row>
                                    </Card.Header>
                                    <Card.Body>
                                      <Row className="mb-2 mt-2">
                                        <Col md={1} xs={1}>
                                          <div className={styles.bg_i}>
                                            <i className="fal fa-thermometer"></i>
                                          </div>
                                        </Col>
                                        <Col md={10} xs={10} className="px-4">
                                          <div className="f12 mt-1">Cold Flue</div>
                                        </Col>
                                      </Row>
                                      <Row className="mb-2 mt-3">
                                        <Col md={1} xs={1}>
                                          <div className={styles.bg_i}>
                                            <i className="fal fa-pills"></i>
                                          </div>
                                        </Col>
                                        <Col md={11} xs={11} className="px-4">
                                          <div className="f12">
                                            LEVOCET TABLET
                                            <span className="theme12 f11">
                                              (Levocetirizine (5mg))
                                            </span>
                                          </div>
                                          <div className="theme12 f10">
                                            FROM DAY 0: 1 tablet | 0-0-1 | After
                                            Meal | 3 Days
                                          </div>
                                          <div className="f12 mt-1">
                                            PAN 20 TABLET
                                            <span className="theme12 f11">
                                              (Pantoprozal (20mg))
                                            </span>
                                          </div>
                                          <div className="theme12 f10">
                                            FROM DAY 0: 1 tablet | 0-0-1 | After
                                            Meal | 3 Days
                                          </div>
                                          <div className="f12 mt-1">
                                            Pyrazinamide TABLET
                                            <span className="theme12 f11">
                                              (Pantoprozal (20mg))
                                            </span>
                                          </div>
                                          <div className="theme12 f10">
                                            FROM DAY 0: 1 tablet | 0-0-1 | After
                                            Meal | 3 Days
                                          </div>
                                          <div className="f12 mt-1">
                                            Ocluf Plus Cough Syrup
                                            <span className="theme12 f11">
                                              ((Levocetirizine )
                                            </span>
                                          </div>
                                          <div className="theme12 f10">
                                            FROM DAY 0: 1 tablet | 0-0-1 | After
                                            Meal | 3 Days
                                          </div>
                                        </Col>
                                      </Row>
                                      <Row className="mb-2 mt-2">
                                        <Col md={1} xs={1}>
                                          <div className={styles.bg_i}>
                                            <i className="fal fa-file"></i>
                                          </div>
                                        </Col>
                                        <Col md={10} xs={10} className="px-4">
                                          <div className="f12 mt-1">
                                            Mild cold, no covid symptoms found.
                                          </div>
                                        </Col>
                                      </Row>
                                    </Card.Body>
                                    <Card.Footer className="bg-white">
                                      <Row className="bg-white">
                                        <Col md={1} xs={1}></Col>
                                        <Col md={11} xs={10} className="px-4">
                                          <div className="f12">
                                            Lab investigation
                                          </div>
                                          <a href="#" className="f12">
                                            <span className="theme9 mx-1">CBG</span>
                                            <i className="fal fa-external-link"></i>
                                          </a>
                                        </Col>
                                      </Row>
                                    </Card.Footer>
                                  </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  <div className={styles.bdr_btm1}>
                                    <div className="px-4">
                                      <h6 className="theme12 f12 mt-2">
                                        Complaints & Medication
                                      </h6>
                                      <Row className="mb-1">
                                        <Col
                                          md={4}
                                          xl={6}
                                          lg={4}
                                          sm={12}
                                          xs={12}
                                          className="mb-2"
                                        >
                                          <div className="f10 theme12">Disease</div>
                                          <div className="f11 ">Diabetes</div>
                                        </Col>
                                        <Col
                                          md={4}
                                          xl={6}
                                          lg={4}
                                          sm={12}
                                          xs={12}
                                          className="mb-2"
                                        >
                                          <div className="f10 theme12">Since</div>
                                          <div className="f11 ">
                                            29 years 3 Months
                                          </div>
                                        </Col>
                                      </Row>
                                      <Row className="mb-1">
                                        <Col
                                          md={4}
                                          xl={6}
                                          lg={4}
                                          sm={12}
                                          xs={12}
                                          className="mb-2"
                                        >
                                          <div className="f10 theme12">Disease</div>
                                          <div className="f11 ">Blood Pressure</div>
                                        </Col>
                                        <Col
                                          md={4}
                                          xl={6}
                                          lg={4}
                                          sm={12}
                                          xs={12}
                                          className="mb-2"
                                        >
                                          <div className="f10 theme12">Since</div>
                                          <div className="f11 ">
                                            19 years 3 Months
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                  <div className={styles.bdr_btm1}>
                                    <div className="px-4">
                                      <h6 className="theme12 f12 mt-2">
                                        Chronic Conditions
                                      </h6>
                                      <Row className="mb-2">
                                        <Col
                                          md={4}
                                          xl={6}
                                          lg={4}
                                          sm={12}
                                          xs={12}
                                          className="mb-2"
                                        >
                                          <div className="f10 theme12">Disease</div>
                                          <div className="f11 ">Thyroid </div>
                                        </Col>
                                        <Col
                                          md={4}
                                          xl={4}
                                          lg={4}
                                          sm={12}
                                          xs={12}
                                          className="mb-2"
                                        >
                                          <div className="f10 theme12">Since</div>
                                          <div className="f11 ">2 years</div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                  <div className={styles.bdr_btm1}>
                                    <div className="px-4">
                                      <h6 className="theme12 f12 mt-2">
                                        Immunisation Details
                                      </h6>
                                      <Row className="mb-2">
                                        <Col
                                          md={4}
                                          xl={6}
                                          lg={4}
                                          sm={12}
                                          xs={12}
                                          className="mb-2"
                                        >
                                          <div className="f10 theme12">Vaccine</div>
                                          <div className="f11 ">Covaxin </div>
                                        </Col>
                                        <Col
                                          md={4}
                                          xl={4}
                                          lg={4}
                                          sm={12}
                                          xs={12}
                                          className="mb-2"
                                        >
                                          <div className="f10 theme12">Doses</div>
                                          <div className="f11 ">2 Doses</div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                  <div className={styles.bdr_btm1}>
                                    <div className="px-4">
                                      <h6 className="theme12 f12 mt-2">
                                        Surgical history
                                      </h6>
                                      <Row className="mb-2">
                                        <Col
                                          md={4}
                                          xl={8}
                                          lg={4}
                                          sm={12}
                                          xs={12}
                                          className="mb-2"
                                        >
                                          <div className="f10 theme12">Surgery</div>
                                          <div className="f11 ">
                                            Left leg ligament surgery
                                          </div>
                                        </Col>
                                        <Col
                                          md={4}
                                          xl={4}
                                          lg={4}
                                          sm={12}
                                          xs={12}
                                          className="mb-2"
                                        >
                                          <div className="f10 theme12">Date</div>
                                          <div className="f11 ">23-02-2015</div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                  <div className={styles.bdr_btm1}>
                                    <div className="px-4">
                                      <h6 className="theme12 f12 mt-2">
                                        Family History
                                      </h6>
                                      <Row className="mb-2">
                                        <Col
                                          md={4}
                                          xl={6}
                                          lg={4}
                                          sm={12}
                                          xs={12}
                                          className="mb-2"
                                        >
                                          <div className="f10 theme12">Disease</div>
                                          <div className="f11 ">Diabetes</div>
                                        </Col>
                                        <Col
                                          md={4}
                                          xl={4}
                                          lg={4}
                                          sm={12}
                                          xs={12}
                                          className="mb-2"
                                        >
                                          <div className="f10 theme12">
                                            Relation
                                          </div>
                                          <div className="f11 ">Father</div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                  <div className={styles.bdr_btm1}>
                                    <div className="px-4">
                                      <h6 className="theme12 f12 mt-2">
                                        Allergies
                                      </h6>
                                      <Row className="mb-2">
                                        <Col
                                          md={4}
                                          xl={4}
                                          lg={4}
                                          sm={12}
                                          xs={12}
                                          className="mb-2 pr-0 text-center"
                                        >
                                          <div className={`f10 ${styles.selectbg}`}>
                                            <span className="mx-1">Cough</span>
                                            <span className="mx-1">
                                              <i className="fal fa-times"></i>
                                            </span>
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                  <div className={styles.bdr_btm1}>
                                    <div className="px-4">
                                      <h6 className="theme12 f12 mt-2">Habits</h6>
                                      <Row className="mb-2">
                                        <Col
                                          md={4}
                                          xl={4}
                                          lg={4}
                                          sm={12}
                                          xs={12}
                                          className="mb-2 pr-0 text-center"
                                        >
                                          <div className={`f10 ${styles.selectbg}`}>
                                            <span className="mx-1">Smoking</span>
                                            <span className="mx-1">
                                              <i className="fal fa-times"></i>
                                            </span>
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                  <div id="graph">
                                    <Tabs
                                      defaultActiveKey="BMI"
                                      id="uncontrolled-tab-example"
                                      className="mb-0  mt-4 f13"
                                    >
                                      <Tab
                                        eventKey="BMI"
                                        title="BMI"
                                        className="f13"
                                      >
                                        <Line data={data} />
                                      </Tab>
                                      <Tab
                                        eventKey="SystolicBP"
                                        title="Systolic BP"
                                        className="f13"
                                      >
                                        <Line data={data1} />
                                      </Tab>
                                      <Tab
                                        eventKey="DiastolicBP"
                                        title="Diastolic BP "
                                        className="f13"
                                      >
                                        <Line data={data2} />
                                      </Tab>
                                      <Tab
                                        eventKey="HR"
                                        title="HR "
                                        className="f13"
                                      >
                                        <Line data={data3} />
                                      </Tab>
                                    </Tabs>
                                    <Row className="mt-3">
                                      <Col md={4} className="mt-2">
                                        <div className={styles.bg_clr8}>
                                          <div className="theme12 f10 text-center">
                                            Today Reading
                                          </div>
                                          <div className="f12 pt-2 text-end ">
                                            26.50 kg/m2
                                          </div>
                                          <div className="theme12 f10 text-end mt-1">
                                            4Jan 23
                                          </div>
                                        </div>
                                      </Col>
                                      <Col md={4} className="mt-2">
                                        <div className={styles.bg_clr8}>
                                          <div className="theme12 f10 text-center">
                                            Last Reading
                                          </div>
                                          <div className="f12 pt-2 text-end">
                                            26.50 kg/m2
                                          </div>
                                          <div className="theme12 f10 text-end mt-1">
                                            4Jan 23
                                          </div>
                                        </div>
                                      </Col>
                                      <Col md={4} className="mt-2">
                                        <div className={styles.bg_clr8}>
                                          <div className="theme12 f10 text-center">
                                            First Reading
                                          </div>
                                          <div className="f12 pt-2 text-end">
                                            32.00 kg/m2
                                          </div>
                                          <div className="theme12 f10 text-end mt-1">
                                            12Jan 22
                                          </div>
                                        </div>
                                      </Col>

                                      <Col md={4} className="mt-2">
                                        <div className={styles.bg_clr8}>
                                          <div className="theme12 f10 text-center">
                                            Target Reading
                                          </div>
                                          <div className="f12 pt-2 text-end">
                                            21.00 kg/m2
                                          </div>
                                          <div className="theme12 f10 mt-1 mb-3"></div>
                                        </div>
                                      </Col>
                                    </Row>
                                  </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                <div className="text-end mt-2">
                                <Button className={styles.medicalrecordsbtn} onClick={handleShow}>Request Medical Records</Button>
                                </div>
                                  <Card className="mt-3">
                                    <Card.Header className={styles.bg5}>
                                    <Row>
                                      <Col md={8} className="ps-2">
                                        <div className="f11 font-weight-600">
                                          Document_name.pdf
                                        </div>
                                        <div className="f10 theme12">Prescription, Discharge summary</div>
                                        <div className={`f10 ${styles.grclr}`}>Access granted</div>
                                      </Col>
                                      <Col md={4} className='text-end pe-2'>
                                        <div className='d-flex justify-content-end'>
                                          <div>
                                            <div className="f9 theme12 text-start">Expiry on</div>
                                            <div className="f10 mt-1 font-weight-600">23-NOV-22</div>
                                          </div>
                                          <div className='ps-3'><i className="fal fa-external-link f13"></i></div>
                                        </div>
                                      </Col>
                                    </Row>
                                    </Card.Header>
                                  </Card>
                                  <Card className="mt-3">
                                  <Card.Header className={styles.bg5}>
                                  <Row>
                                    <Col md={8} className="ps-2">
                                      <div className="f11 font-weight-600">
                                        Document_name.pdf
                                      </div>
                                      <div className="f10 theme12">Prescription, Discharge summary</div>
                                      <div className={`f10 theme13`}>Uploaded</div>
                                    </Col>
                                    <Col md={4} className='text-end pe-2'>
                                      <div className='d-flex justify-content-end'>
                                        <div>
                                          <div className="f9 theme12 text-start">Uploaded on</div>
                                          <div className="f10 mt-1 font-weight-600">23-Feb-22</div>
                                        </div>
                                        <div className='ps-3'><i className="fal fa-external-link f13"></i></div>
                                      </div>
                                    </Col>
                                  </Row>
                                  </Card.Header>
                                </Card>
                                <div className={`theme13 f11 ${styles.btmpo}`}>More...</div>
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Card.Body>
                      <Row>
                        <Col
                          md={4}
                          xl={4}
                          lg={4}
                          xs={4}
                          className="px-md-2 px-1 mt-2"
                        >
                          <span className="theme9 f12">Create Invoice</span>
                        </Col>
                        <Col
                          md={4}
                          xl={4}
                          lg={4}
                          xs={4}
                          className="px-md-2 px-1 mt-2"
                        >
                          <span className="theme9 f12">Schedule Visit</span>
                        </Col>
                        <Col
                          md={4}
                          xl={4}
                          lg={4}
                          xs={4}
                          className="px-md-2 px-1 mt-1"
                        >
                          <span className="mt-md-2 mt-0">
                            <Button
                              className={`${styles.login_button} ${styles.startbtn}`}
                            >
                              Start Visit
                              <i className="fa fa-chevron-circle-right mr_12"></i>
                            </Button>
                          </span>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </div>
              </Tab.Pane>
            </Tab.Content>

          </div>
        </Tab.Container>
      </div>
      <div className={`sidebar1 ${isOpen == true ? "active" : ""}`}>
        <div className={`${styles.sd_header} d-flex`}>
        <Col md={10}>
        <div className="f14">Settings</div>
        </Col>
        <Col md={2} className="text-end">
          <div className="btn bg-white text-dark" onClick={ToggleSidebar}>
            <i className="fal fa-times"></i>
          </div>
          </Col>

        </div>
        <div className={styles.sd_body}>
          <div><Prescription_sidebar /></div>
        </div>
        <div className={styles.sd_footer}>
        <div className="d-flex justify-content-end align-items-center mb-2">
        <div>
        <Button className={`theme9 bg-white ${styles.border_none} f14`}>
        Clear
      </Button>
      </div>
      <div>
      <Button variant="primary" className={`${styles.servicebtn} f14`} onClick={handleShow}>
        Save
      </Button>
      </div>
      </div>
        </div>
      </div>
      <div
        className={`${styles.sidebar_overlay} ${isOpen == true ? "active" : ""
          }`}
        onClick={ToggleSidebar}
      ></div>
      <MedicalRecordModal show={show} onHide={handleClose}/>
    </React.Fragment>
  );
};

export default Prescription;
