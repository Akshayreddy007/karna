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
  Table,
  Container,
} from "react-bootstrap";
import styles1 from "../../../styles/IPD_Admin/Nurse.module.scss";
import styles2 from "../../../styles/Appointments.module.scss";
const HeadNurse = () => {
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
    <div className={styles1.services_bg}>
    <div className="mt-3">
    <Container>
    <div className="mx-md-5 px-md-0 px-0 mx-0">
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
                  <Form.Label className="mb-0">Email id</Form.Label>
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
                  <Form.Label className="mb-0">University</Form.Label>
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
                  <Form.Label className="mb-0">Specialisation</Form.Label>
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
                  <Form.Label className="mb-0">Registration Number</Form.Label>
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
                  <Form.Label className="mb-0">HFR Number</Form.Label>
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
          <Step label="Permissions" className="mr_101 px-md-0 px-0">
          <Row>
          <Col md={3} className="p-0">
            <Card className={styles1.minht112}>
              <Card.Body>
                <h6 className="f13 font-weight-600 theme14 text-center">
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
                <h6 className="mt-4 mb-3 font-weight-300 text-center">
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

                <h6 className="f14  theme14 mt-4 mb-3 font-weight-300 text-center">
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
                <h6 className="f14  mt-4 mb-3 font-weight-300 text-center">Billing</h6>
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
            <Card className={styles1.minht112}>
              <Card.Body>
                <h6 className="f13 text-center font-weight-600 theme14">
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
            <Card className={styles1.minht112}>
              <Card.Body>
                <h6 className="f13 text-center  font-weight-600 theme14">
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
            <Card className={styles1.minht112}>
              <Card.Body>
                <h6 className="f13 text-center font-weight-600 theme14">
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
            <Card className={styles1.minht112}>
              <Card.Body>
                <h6 className="f13 text-center font-weight-600 theme14">
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
          <Step label="Services">
            <div className="px-4">
              <h6 className="theme14 font-weight-500 mt-3 mb-3">
                 Services
              </h6>
              <div className="d-md-flex">
                <Col md={4} xl={4} xs={12} className={styles1.user_bg}>
                  <div className={`p-2 ${styles1.user_ht}`}>
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
                  <div className={styles1.user_ht}>
                    <Table>
                      <thead>
                        <tr className={styles1.userbdr_clr}>
                          <th>DEPARTMENT</th>
                          <th>SHIFT TIMINGS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={styles1.userbdr_clr}>
                          <td className={styles1.textinitial}>
                            OP Consultation
                          </td>
                          <td className={styles1.textinitial}>
                          <div className="d-flex align-items-center">
                          <div>
                          <Form.Select aria-label="Default select example">
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                        </div>
                        <div className="ps-2">48hrs</div>
                        </div>
                          </td>
                        </tr>
                        <tr className={styles1.userbdr_clr}>
                          <td className={styles1.textinitial}>
                            OP Consultation
                          </td>
                          <td className={styles1.textinitial}>   
                            <div className="d-flex align-items-center">
                          <div>
                          <Form.Select aria-label="Default select example">
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                        </div>
                        <div className="ps-2">48hrs</div>
                        </div></td>
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
                  className={styles2.appointmentbtn1}
                >
                  Next
                </Button>
              </React.Fragment>
            )}
            {active !== 2 && (
              <Button
                onClick={handleClick}
                style={{ float: "right" }}
                className={styles2.appointmentbtn1}
              >
                Submit
              </Button>
            )}
            {active !== 1 && (
              <Button
                onClick={() => setActive(active - 1)}
                style={{ float: "right", marginRight: "20px" }}
                className={styles2.appointmentbtn2}
              >
                Previous
              </Button>
            )}
          </Col>
        </Row>
      </div>
    </div>
    </Container>
  </div>
    </div>
    </React.Fragment>
  )
}

export default HeadNurse