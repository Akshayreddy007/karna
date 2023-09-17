import React, { useState } from "react";
import { MultiStepForm, MultiStep, Step } from "react-multi-form";
import Users_search from "./Users_search";
import styles2 from "../../../styles/Users.module.scss";
import styles from "../../../styles/Appointments.module.scss";
import styles1 from "../../../styles/Services.module.scss";
import {
  Form,
  Table,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Breadcrumb,
} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../../usersdata7";
const Users = () => {
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
      dataField: "NAME",
      text: "NAME",
    },
    {
      dataField: "ROLE",
      text: "ROLE",
    },
    {
      dataField: "DISCOUNTS",
      text: "DISCOUNTS",
    },
    {
      dataField: "MOBILENO",
      text: "MOBILENO",
    },
    {
      dataField: "SHIFTTIMINGS",
      text: "SHIFT/TIMINGS",
    },
    {
      dataField: "USERTYPE",
      text: "USERTYPE",
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
      <div className="d-lg-flex d-md-inline-block d-flex">
        <Col md={12} xl={8} lg={9} xs={9}>
          <div className="bg-white mt-3 br8 mb-3">
            <div className="px-3 py-2">
              <Users_search />
            </div>
          </div>
        </Col>
        <Col md={12} xl={4} lg={3} xs={3} className=" justify-content-end">
          <div className="  mt-4 pt-1  ">
            <Button
              style={{ float: "right", marginLeft: "10px" }}
              className={styles1.servicebtn}
              onClick={handleShow}
            >
              Add User
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
                Users
              </Breadcrumb.Item>
              <Breadcrumb.Item active className="theme14 f14">
                Add User
              </Breadcrumb.Item>
            </Breadcrumb>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={`pt-0 ${styles1.services_bg}`}>
          <div className="mt-0">
            <div className="mx-5 px-5">
              <div className="bg-white pb-3 pt-5 rounded">
                <MultiStepForm activeStep={active} className="px-3 ">
                  <Step label="Personal Details" className="mr_1041">
                    <Row>
                      <Col md={4}>
                        <Form.Group
                          controlId="formBasicEmail"
                          className="mb-3 pb-3"
                        >
                          <Form.Label className="mb-0">First Name</Form.Label>
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
                          <Form.Label className="mb-0">Last Name</Form.Label>
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
                          <Form.Label className="mb-0">Role</Form.Label>
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
                          <Form.Label className="mb-0">Mobile No</Form.Label>
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
                          <Form.Label className="mb-0">Gender</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Select"
                            className={styles1.services_input}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
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
                          <Form.Label className="mb-0">Degree</Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            className={styles1.services_input}
                          >
                            <option>Select</option>
                            <option value="1">Btech</option>
                            <option value="2">Mtech</option>
                            <option value="3">MBA</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group
                          controlId="formBasicEmail"
                          className="mb-3 pb-3"
                        >
                          <Form.Label className="mb-0">University</Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            className={styles1.services_input}
                          >
                            <option>Select</option>
                            <option value="1">JNTUH</option>
                            <option value="2">JNTUK</option>
                            <option value="3">JNTUA</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group
                          controlId="formBasicEmail"
                          className="mb-3 pb-3"
                        >
                          <Form.Label className="mb-0">
                            Specialisation
                          </Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            className={styles1.services_input}
                          >
                            <option>Select</option>
                            <option value="1">CSE</option>
                            <option value="2">ECE</option>
                            <option value="3">EEE</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group
                          controlId="formBasicEmail"
                          className="mb-3 pb-3"
                        >
                          <Form.Label className="mb-0">
                            Registration No
                          </Form.Label>
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
                          <Form.Label className="mb-0">HFR NO</Form.Label>
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
                          <Form.Label className="mb-0">Clinic</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Select"
                            className={styles1.services_input}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Step>
                  <Step label="Permissions" className="mr_1015">
                    <Row>
                      <Col md={3} className="p-0">
                        <Card>
                          <Card.Body>
                            <h6 className="f14 font-weight-500 theme14">
                              Admin Module
                            </h6>
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Select All"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Clinic Information"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Access Clinic Information"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Add Clinic Information"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Edit Clinic Information"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Delete Clinic Information"
                              className={styles2.ltht}
                            />
                            <h6 className="mt-3 mb-3">Users</h6>
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Access User Settings"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Create User"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Edit User Permission"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Delete User"
                              className={styles2.ltht}
                            />

                            <h6 className="f14  theme14">Services</h6>
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Access Services"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Price Settings"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Create Services Price"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Edit Services Price"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Delete Services Price"
                              className={styles2.ltht}
                            />
                            <h6 className="f14  theme14">Billing</h6>
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Access Patient Billing"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Create Bills"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Edit Bills"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Delete Bills"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Acess Discount Settings"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Create Discount "
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Edit Discount "
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Delete Discount "
                              className={styles2.ltht}
                            />
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={2} className="p-0">
                        <Card>
                          <Card.Body>
                            <h6 className="f14 font-weight-500 theme14">
                              Lab Module
                            </h6>
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Select All"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Access  List Of lab reports"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Create list of lab reports"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Edit list of lab reports"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Delete lab reports"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Access lab orders "
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Create/ add lab orders "
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Edit lab orders price"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Delete lab orders "
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Create lab bills"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Edit lab bills"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Delete lab bills"
                              className={styles2.ltht}
                            />
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={2} className="p-0">
                        <Card>
                          <Card.Body>
                            <h6 className="f14 font-weight-500 theme14">
                              Pharmacy Module
                            </h6>
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Select All"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Access Medication list"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Create Medication list"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Edit Medication list"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Delete Medication list"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Access pharmacy bills"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Create pharmacy bills"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Edit pharmacy bills"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Delete pharmacy bills"
                              className={styles2.ltht}
                            />
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={3} className="p-0">
                        <Card>
                          <Card.Body>
                            <h6 className="f14 font-weight-500 theme14">
                              Doctor Module
                            </h6>
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Select All"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Access Prescription pad"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Create Prescription"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Edit Prescription"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Delete Prescription"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Access Vitals"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Create Vitals"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Edit Vitals"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Delete Vitals"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Access Reports"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Create Reports"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Edit Reports"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Delete Reports"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Access Prescription pad settings"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Create Prescription settings"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Edit Prescription settings"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Delete Prescription settings"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Access Templates"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Create templates"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Edit templates"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Delete templates"
                              className={styles2.ltht}
                            />
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={2} className="p-0">
                        <Card>
                          <Card.Body>
                            <h6 className="f14 font-weight-500 theme14">
                              Reception Module
                            </h6>
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Select All"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="View"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Edit"
                              className={styles2.ltht}
                            />
                            <Form.Check
                              type="checkbox"
                              id="id"
                              label="Delete"
                              className={styles2.ltht}
                            />
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Step>
                  <Step label="Services">
                    <div className="px-4">
                      <h6 className="theme14 font-weight-500 mt-3 mb-3">
                        Doctors Services
                      </h6>
                      <div className="d-flex">
                        <Col md={4} className={styles2.user_bg}>
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

                            <div className="mt-2">
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
                            <div className="mt-2">
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

                            <div className="mt-2">
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

                            <div className="mt-2">
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
                        <Col md={8} className="px-3">
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
                  <Col md={5} className="text-center">
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

export default Users;
