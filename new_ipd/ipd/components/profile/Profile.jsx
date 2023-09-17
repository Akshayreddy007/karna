import Image from "next/image";
import React from "react";
import styles from "../../styles/Appointments.module.scss";
import Image1 from "../../public/images/Rectangle209.svg";
import Image2 from "../../public/images/Ellipse81.png";
import {
  Card,
  Container,
  Row,
  Col,
  Nav,
  Tab,
  Form,
  Button,
} from "react-bootstrap";
import Link from "next/link";

const Profile = () => {
  return (
    <React.Fragment>
      <Container className="pt-4 pb-3">
        <Card>
          <Card.Header className="profile_image p-0">
            <Image src={Image1} className="profile_image" alt="logo" />
          </Card.Header>
          <Card.Body className="pt-0">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={4} md={3} xs={12} xl={3} className="bx_shdw3 w_20">
                  <Nav variant="pills" className="flex-column pt-5 mt-4">
                    <Nav.Item>
                      <div className="d-block">
                        <Nav.Link eventKey="first" className="">
                          My Profile
                        </Nav.Link>
                      </div>
                    </Nav.Item>
                    <Nav.Item>
                      <div className="d-block">
                        <Nav.Link eventKey="second" className="">
                          Password Reset
                        </Nav.Link>
                      </div>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={8} md={8} xs={12} xl={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Container>
                      <div className="bdrimg1">
                        <Image
                          src={Image2}
                          className="profile_image1 mb-4 profilewdth"
                          alt="logo"
                          width="150"
                        />
                        </div>
                        <div className="input--file">
                          <span className="iconimg">
                            <i className="fal fa-camera text-white"></i>
                          </span>
                          <Form.Control type="file" name="file" />
                        </div>
                        <Form>
                          <Row className="mt_5 pt-md-5">
                            <Col md={6} xl={4} lg={4} className="ms-2 ">
                              <Form.Group
                                className="mb-4 pb-2"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>First Name :</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="mobile number"
                                  className="textboxborder"
                                  autoComplete="off"
                                  placeholder="Enter"
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} xl={4} lg={4} className="ms-2 ">
                              <Form.Group
                                className="mb-4 pb-2"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Last Name :</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="mobile number"
                                  className="textboxborder"
                                  autoComplete="off"
                                  placeholder="Enter"
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} xl={4} lg={4} className="ms-2 ">
                              <Form.Group
                                className="mb-4 pb-2"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Department :</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="mobile number"
                                  className="textboxborder"
                                  autoComplete="off"
                                  placeholder="Enter"
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} xl={4} lg={4} className="ms-2 ">
                              <Form.Group
                                className="mb-4 pb-2"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Designation :</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="mobile number"
                                  className="textboxborder"
                                  autoComplete="off"
                                  placeholder="Enter"
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} xl={4} lg={4} className="ms-2 ">
                              <Form.Group
                                className="mb-4 pb-2"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Emailid :</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="mobile number"
                                  className="textboxborder"
                                  autoComplete="off"
                                  placeholder="Enter"
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} xl={4} lg={4} className="ms-2 ">
                              <Form.Group
                                className="mb-4 pb-2"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Mobile Number :</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="mobile number"
                                  className="textboxborder"
                                  autoComplete="off"
                                  placeholder="Enter"
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} xl={8} lg={8} className="ms-2 ">
                              <Form.Group
                                className="mb-4 pb-2"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Bio :</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="mobile number"
                                  className="textboxborder"
                                  autoComplete="off"
                                  placeholder="Enter"
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <div className="d-flex">
                            <Col md={6} xl={6} lg={4} className="ms-2 "></Col>
                            <Col md={6} xl={6} lg={4} className="ms-2 text-end">
                              <Link href="/">
                                <Button className={styles.appointmentbtn}>
                                  {" "}
                                  Update Profile
                                </Button>
                              </Link>
                            </Col>
                          </div>
                        </Form>
                      </Container>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Container>
                        <Image
                          src={Image2}
                          className="profile_image1 mb-4 profilewdth"
                          alt="logo"
                          width="150"
                        />
                        <Form>
                          <Row className="mt_5 pt-md-5">
                            <Col md={6} xl={4} lg={4} className="ms-2 ">
                              <Form.Group
                                className="mb-4 pb-2"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Old Password :</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="mobile number"
                                  className="textboxborder"
                                  autoComplete="off"
                                  placeholder="Enter"
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} xl={4} lg={4} className="ms-2 "></Col>
                            <Col md={6} xl={4} lg={4} className="ms-2 ">
                              <Form.Group
                                className="mb-4 pb-2"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>New Password :</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="mobile number"
                                  className="textboxborder"
                                  autoComplete="off"
                                  placeholder="Enter"
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6} xl={4} lg={4} className="ms-2 ">
                              <Form.Group
                                className="mb-4 pb-2"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Confirm Password :</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="mobile number"
                                  className="textboxborder"
                                  autoComplete="off"
                                  placeholder="Enter"
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <div className="d-flex">
                            <Col md={6} xl={6} lg={4} className="ms-2 "></Col>
                            <Col md={6} xl={6} lg={4} className="ms-2 text-end">
                              <Link href="/">
                                <Button className={styles.appointmentbtn}>
                                  {" "}
                                  Update Profile
                                </Button>
                              </Link>
                            </Col>
                          </div>
                        </Form>
                      </Container>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
