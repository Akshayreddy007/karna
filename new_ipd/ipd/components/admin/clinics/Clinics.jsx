import React, { useState } from "react";
import { MultiStepForm, MultiStep, Step } from "react-multi-form";
import styles2 from "../../../styles/Users.module.scss";
import styles3 from "../../../styles/Dashboard.module.scss";
import styles from "../../../styles/Appointments.module.scss";
import styles1 from "../../../styles/Services.module.scss";
import {
  Form,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Breadcrumb,
  Table,
} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../../clinicsdata";
const Clinics = () => {
  const [active, setActive] = React.useState(1);
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
  };
  const [selected, setSelected] = useState("");
  const changeHandler = (e) => {
    setSelected(e.target.value);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const columns = [
    {
      dataField: "ID",
      text: "ID",
    },
    {
      dataField: "BRANCHNAME",
      text: "BRANCHNAME",
    },
    {
      dataField: "SERVICES",
      text: "SERVICES",
    },
    {
      dataField: "CONTACTNO",
      text: "CONTACTNO",
    },
    {
      dataField: "TIMINGS",
      text: "TIMINGS",
    },
    {
      dataField: "BRANCHTYPE",
      text: "BRANCHTYPE",
    },
    {
      dataField: "STATUS",
      text: "STATUS",
    },

    {
      dataField: "ACTION",
      text: "ACTION",
    },
  ];
  return (
    <React.Fragment>
      <div className="d-lg-flex d-md-grid d-grid">
        <Col md={12} xl={8} lg={9} xs={12}>
          <div className="bg-white mt-3 br8 mb-3">
            <div className="px-3 py-2">
              <div className="row">
                <Col md={12} xl={3} xs={12}>
                  <Form.Select
                    aria-label="Default select example"
                    className={styles3.textboxwdth44}
                  >
                    <option>All Branches</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>

                <Col md={12} xl={6} xs={12}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Enter Keyword"
                      className={styles3.textboxwdth44}
                      style={{ width: "100%!important" }}
                    />
                  </Form.Group>
                </Col>
                <Col md={12} xl={2}>
                  <Button
                    style={{ float: "right", marginLeft: "10px" }}
                    className={styles1.servicebtn}
                  >
                    Search
                  </Button>
                </Col>
              </div>
            </div>
          </div>
        </Col>
        <Col md={12} xl={4} lg={3} xs={5} className=" justify-content-end mb-2">
          <div className=" mt-0 mt-md-4  pt-1   ">
            <Button
              style={{ float: "right", marginLeft: "10px" }}
              className={styles1.servicebtn}
              onClick={handleShow}
            >
              Add Clinic
            </Button>
          </div>
        </Col>
      </div>
      <Card>
        <Card.Body className="pb-0" id="services">
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={products}
            columns={columns}
            bordered={false}
            pagination={paginationFactory()}
          />
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton className={styles1.services_bg}>
          <Modal.Title>
            <Breadcrumb>
              <Breadcrumb.Item href="#" className="theme12 f14">
                <i className="fa fa-home"></i>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#" className="theme12 f14">
                Clinic
              </Breadcrumb.Item>
              <Breadcrumb.Item active className="theme14 f14">
                Add Clinic
              </Breadcrumb.Item>
            </Breadcrumb>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles1.services_bg}>
          <div className="mt-3">
            <div className="mx-md-5 px-md-5 px-0 mx-0">
              <div className="bg-white pb-3 pt-5 rounded">
                <MultiStepForm activeStep={active} className="px-3 ">
                  <Step label="Clinic Details" className="mr_1041">
                    <Row>
                      <Col md={4}>
                        <Form.Group
                          controlId="formBasicEmail"
                          className="mb-3 pb-3"
                        >
                          <Form.Label className="mb-0">Clinic Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Select"
                            className={styles1.services_input}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group
                          controlId="formBasicEmail"
                          className="mb-3 pb-3"
                        >
                          <Form.Label className="mb-0">Contact No</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Select"
                            className={styles1.services_input}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group
                          controlId="formBasicEmail"
                          className="mb-3 pb-3"
                        >
                          <Form.Label className="mb-0">Email Id</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Select"
                            className={styles1.services_input}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group
                          controlId="formBasicEmail"
                          className="mb-3 pb-3"
                        >
                          <Form.Label className="mb-0">Type</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Select"
                            className={styles1.services_input}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group
                          controlId="formBasicEmail"
                          className="mb-3 pb-3"
                        >
                          <Form.Label className="mb-0">Timings</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Select"
                            className={styles1.services_input}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group
                          controlId="formBasicEmail"
                          className="mb-3 pb-3"
                        >
                          <Form.Label className="mb-0">Status</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Select"
                            className={styles1.services_input}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={8}>
                        <Form.Group
                          controlId="formBasicEmail"
                          className="mb-3 pb-3"
                        >
                          <Form.Label className="mb-0">Address</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder=" Address"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group
                          controlId="formBasicEmail"
                          className="mb-3 pb-3"
                        >
                          <Form.Label className="mb-0">HFR Number</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Select"
                            className={styles1.services_input}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Step>
                  <Step label="Permissions" className="mr_101 px-md-5 px-0">
                    <div className="mt-2" id="label1">
                      <label>
                        <input type="radio" name="radio" />
                        <span>
                          Lab Module
                          <div className="theme12 mx-4 px-1 f13 mt-2">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </div>
                        </span>
                      </label>
                    </div>

                    <div className="mt-2" id="label1">
                      <label>
                        <input type="radio" name="radio" />
                        <span>
                          Pharma Module
                          <div className="theme12 mx-4 px-1 f13 mt-2">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </div>
                        </span>
                      </label>
                    </div>

                    <div className="mt-2 mb-4 pb-4" id="label1">
                      <label>
                        <input type="radio" name="radio" />
                        <span>
                          Clinic Module
                          <div className="theme12 mx-4 px-1 f13 mt-2">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </div>
                        </span>
                      </label>
                    </div>
                  </Step>
                  <Step label="Services">
                    <div className="px-4">
                      <h6 className="theme14 font-weight-500 mt-3 mb-3">
                        Doctors Services
                      </h6>
                      <div className="d-md-flex">
                        <Col md={4} xl={4} xs={12} className={styles2.user_bg}>
                          <div className={`p-2 ${styles2.user_ht}`}>
                            <div className="theme12 mb-3">SERVICES</div>
                            <div>
                              <Form.Check
                                type="checkbox"
                                id="id"
                                label="Op Consultation"
                                className="theme14 mb-0"
                              />
                              <div className="theme12 mx-4 px-1 f12">
                                Appointment
                              </div>
                            </div>

                            <div className="mt-3">
                              <Form.Check
                                type="checkbox"
                                id="id"
                                label="Full Body CheckUp"
                                className="theme14 mb-0"
                              />
                              <div className="theme12 mx-4 px-1 f12">
                                Packages
                              </div>
                            </div>
                            <div className="mt-3">
                              <Form.Check
                                type="checkbox"
                                id="id"
                                label="Root Canal"
                                className="theme14 mb-0"
                              />
                              <div className="theme12 mx-4 px-1 f12">
                                Multi Step Procedure
                              </div>
                            </div>

                            <div className="mt-3">
                              <Form.Check
                                type="checkbox"
                                id="id"
                                label="Op Consultation"
                                className="theme14 mb-0"
                              />
                              <div className="theme12 mx-4 px-1 f12">
                                Appointment
                              </div>
                            </div>

                            <div className="mt-3">
                              <Form.Check
                                type="checkbox"
                                id="id"
                                label="Op Consultation"
                                className="theme14 mb-0"
                              />
                              <div className="theme12 mx-4 px-1 f12">
                                Follow Up
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={8} xl={8} xs={12} className="px-3">
                          <div className={styles2.user_ht}>
                            <Table>
                              <thead>
                                <tr className={styles2.userbdr_clr}>
                                  <th>SERVICE NAME</th>
                                  <th>CLINIC FEE</th>
                                  <th>DOCTOR %</th>
                                  <th>TOTAL FEE</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className={styles2.userbdr_clr}>
                                  <td className={styles2.textinitial}>
                                    OP Consultation
                                  </td>
                                  <td className={styles2.textinitial}>400/-</td>
                                  <td
                                    className={`${styles2.textinitial} ${styles2.wdth30}`}
                                  >
                                    <Form.Control
                                      type="text"
                                      placeholder="50"
                                      value="50"
                                      className={styles2.wdth25}
                                    />
                                  </td>
                                  <td className={styles2.textinitial}>600/-</td>
                                </tr>
                                <tr className={styles2.userbdr_clr}>
                                  <td className={styles2.textinitial}>
                                    OP Consultation
                                  </td>
                                  <td className={styles2.textinitial}>400/-</td>
                                  <td className={styles2.textinitial}>
                                    <Form.Control
                                      type="text"
                                      placeholder="50"
                                      value="50"
                                      className={styles2.wdth25}
                                    />
                                  </td>
                                  <td className={styles2.textinitial}>600/-</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </Col>
                      </div>
                    </div>
                  </Step>
                </MultiStepForm>
                <Row className="justify-content-end">
                  <Col xl={5} md={8} className="text-center">
                    {active !== 3 && (
                      <React.Fragment>
                        <a
                          href="#"
                          className="theme9 pt-2 f13 ps_relative mx-1"
                        >
                          Confirm Booking
                        </a>
                        <Button
                          onClick={() => setActive(active + 1)}
                          style={{ float: "right", marginLeft: "10px" }}
                          className={styles.appointmentbtn1}
                        >
                          Next
                        </Button>
                      </React.Fragment>
                    )}
                    {active !== 2 && (
                      <Button
                        onClick={handleClick}
                        style={{ float: "right" }}
                        className={styles.appointmentbtn1}
                      >
                        Submit
                      </Button>
                    )}
                    {active !== 1 && (
                      <Button
                        onClick={() => setActive(active - 1)}
                        style={{ float: "right", marginRight: "20px" }}
                        className={styles.appointmentbtn2}
                      >
                        Previous
                      </Button>
                    )}
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Clinics;
