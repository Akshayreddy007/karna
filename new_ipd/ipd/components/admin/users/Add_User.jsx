import React, { useState } from "react";
import { MultiStepForm, MultiStep, Step } from "react-multi-form";
import {
  Form,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Breadcrumb,
} from "react-bootstrap";
import styles from "../../../styles/Appointments.module.scss";
import styles1 from "../../../styles/Services.module.scss";
import styles2 from "../../../styles/Users.module.scss";
const Add_User = () => {
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
  return (
    <React.Fragment>
      <div className="mt-3">
        <Breadcrumb>
          <Breadcrumb.Item href="#" className="theme12">
            <i className="fa fa-home"></i>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#" className="theme12">
            Users
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="theme14">
            Add User
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="mx-5 px-5">
          <div className="bg-white pb-3 pt-5 rounded">
            <MultiStepForm activeStep={active} className="px-3 ">
              <Step label="Visit Info" className="mr_1041">
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
                      <Form.Label className="mb-0">Specialisation</Form.Label>
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
                      <Form.Label className="mb-0">Registration No</Form.Label>
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
              <Step label="Vitals" className="mr_101">
                <Row>
                  <Col md={2} className="p-0">
                    <Card>
                      <Card.Body>
                        <h6 className="f13 font-weight-500 theme14 text-center">
                          Admin Module
                        </h6>
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Select All"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Clinic Information"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Access Clinic Information"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Add Clinic Information"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Edit Clinic Information"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Delete Clinic Information"
                        />
                        <h6 className="mt-3 mb-3 font-weight-300 text-center">
                          Users
                        </h6>
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Access User Settings"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Create User"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Edit User Permission"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Delete User"
                        />

                        <h6 className="f14  theme14 text-center font-weight-400">
                          Services
                        </h6>
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Access Services"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Price Settings"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Create Services Price"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Edit Services Price"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Delete Services Price"
                        />
                        <h6 className="f14  theme14">Billing</h6>
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Access Patient Billing"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Create Bills"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Edit Bills"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Delete Bills"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Acess Discount Settings"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Create Discount "
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Edit Discount "
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Delete Discount "
                        />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={2} className="p-0">
                    <Card>
                      <Card.Body>
                        <h6 className="f13 text-center font-weight-500 theme14">
                          Lab Module
                        </h6>
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Select All"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Access  List Of lab reports"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Create list of lab reports"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Edit list of lab reports"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Delete lab reports"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Access lab orders "
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Create/ add lab orders "
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Edit lab orders price"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Delete lab orders "
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Create lab bills"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Edit lab bills"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Delete lab bills"
                        />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={2} className="p-0">
                    <Card>
                      <Card.Body>
                        <h6 className="f13 text-center  font-weight-500 theme14">
                          Pharmacy Module
                        </h6>
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Select All"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Access Medication list"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Create Medication list"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Edit Medication list"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Delete Medication list"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Access pharmacy bills"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Create pharmacy bills"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Edit pharmacy bills"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Delete pharmacy bills"
                        />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3} className="p-0">
                    <Card>
                      <Card.Body>
                        <h6 className="f13 text-center font-weight-500 theme14">
                          Doctor Module
                        </h6>
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Select All"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Access Prescription pad"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Create Prescription"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Edit Prescription"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Delete Prescription"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Access Vitals"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Create Vitals"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Edit Vitals"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Delete Vitals"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Access Reports"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Create Reports"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Edit Reports"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Delete Reports"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Access Prescription pad settings"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Create Prescription settings"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Edit Prescription settings"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Delete Prescription settings"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Access Templates"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Create templates"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Edit templates"
                        />
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Delete templates"
                        />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={2} className="p-0">
                    <Card>
                      <Card.Body>
                        <h6 className="f13 text-center font-weight-500 theme14">
                          Reception Module
                        </h6>
                        <Form.Check
                          type="checkbox"
                          id="id"
                          label="Select All"
                        />
                        <Form.Check type="checkbox" id="id" label="View" />
                        <Form.Check type="checkbox" id="id" label="Edit" />
                        <Form.Check type="checkbox" id="id" label="Delete" />
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Step>
              <Step label="Billing"></Step>
            </MultiStepForm>
            <Row className="justify-content-end">
              <Col md={4} className="text-center">
                {active !== 3 && (
                  <React.Fragment>
                    <a href="#" className="theme9 pt-2 f13 ps_relative">
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
    </React.Fragment>
  );
};

export default Add_User;
