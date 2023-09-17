import React from "react";
import Image from "next/image";
import styles from "../../styles/Appointments.module.scss";
import styles1 from "../../styles/DoctorProfile.module.scss";
import Image2 from "../../public/images/Rectangle1.svg";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";
const Doctor_profile = () => {
  const [edit, setEdit] = useState("false");
  const handleClick = () => {
    setEdit("true");
  };
  const handleCancel = () => {
    setEdit("false");
  };
  return (
    <React.Fragment>
      <div className="pt-4 pb-3 container-fluid">
        <Card>
          <Card.Header className={`${styles1.profile_image3} p-0`}>
            <div className="d-flex">
              <Col md={10}></Col>
              <Col md={2} className="mt-3 d-xl-block d-none text-end px-3">
                <div className="f12"> Invite Code: </div>
                <div className="f12">PT9M</div>
                <div className="f12">Invite Link: </div>
                <div className="f12">https://91.care/sBGAzr6UJub</div>
                <div className="d-flex justify-content-end">
                  <div className="mx-3">
                    <i className="fal fa-copy f12"></i>
                  </div>
                  <div>
                    <i className="fal fa-share-alt f12"></i>
                  </div>
                </div>
              </Col>
            </div>
          </Card.Header>
          <Card.Body className="pt-0">
            <Container>
              <Row>
                <Col md={3} lg={3} xl={2}>
                  <Image
                    src={Image2}
                    className="profile_image1 mb-4 profilewdth"
                    alt="logo"
                    width="150"
                  />
                  <span className="input--file1">
                    <i className="fal fa-camera text-white"></i>
                    <Form.Control type="file" name="name" />
                  </span>
                </Col>
                <Col md={9} lg={9} xl={10} className="px-0">
                  <div className={` d-flex ${styles1.abs}`}>
                    <div className={`theme9 f21 mb-1 px-lg-2 ${styles1.fs_18}`}>
                      Dr.Angus MacGyver
                    </div>
                    <div
                      className={`f18 px-2 pt-1 ${styles1.fs_13}`}
                      onClick={handleClick}
                    >
                      <i className="fal fa-edit "></i>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <Row>
              <Col md={3} lg={2} xl={2}></Col>
              <Col
                md={4}
                lg={4}
                xl={4}
                className=" px-xs-4 mt-5 mt-md-0 psrelative  pm4"
              >
                <div className="f13">Cardiologist</div>
                <div className="f13 theme12">Redg No. TS123986</div>
                <div className="f13 theme12">HPR ID. anug_23@hpr</div>
              </Col>
              <Col
                md={5}
                lg={5}
                xl={6}
                className="text-md-end mt-2 px-md-3 px-3 psrelative"
              >
              <Link href="/weekly_schedule">
                  <Button className="theme22 f11  px-2 brnone me-3">
                    My Income
                  </Button>
                </Link>

                <Link href="/weekly_schedule">
                  <Button className="theme22 f11  px-2 brnone">
                    Schedule you calender
                  </Button>
                </Link>
              </Col>
            </Row>
            <Container>
              {edit == "false" ? (
                <div className="d-xl-flex mt-4 pt-2">
                  <Col md={12} lg={6} xl={4} className="pe-5">
                  <div className={`px-4 py-4 pb-5 rounded ${styles1.bdr}`}>
                    <div>
                      <b>Personal details</b>
                    </div>
                    <div className="d-flex mt-3">
                      <Col md={6} xs={6}>
                        <div className="theme12 f12">DOB</div>
                        <div className="f12">01 Jan, 1991</div>
                      </Col>
                      <Col md={6} xs={6}>
                        <div className="theme12 f12">Gender</div>
                        <div className="f12">Male</div>
                      </Col>
                    </div>
                    <div className="d-flex mt-3">
                      <Col md={6} xs={6}>
                        <div className="theme12 f12">Mobile No</div>
                        <div className="f12">+91 9922 9922 44</div>
                      </Col>
                      <Col md={6} xs={6}>
                        <div className="theme12 f12">Alternative Mobile No</div>
                        <div className="f12">+91 9922 9922 55</div>
                      </Col>
                    </div>
                    <Col md={7} xs={12} className="mt-3">
                      <div className="theme12 f12">Email</div>
                      <div className="f12">suresh@email.com</div>
                    </Col>
                    <Col md={12} xs={12} className="mt-3">
                      <div className="theme12 f12">Address</div>
                      <div className="f12">
                        1-2-123/A, New Road, 1st Street, Hyderabad-81. TS, IN.
                      </div>
                    </Col>
                    </div>
                  </Col>
                  <Col md={12} lg={6} xl={4} className=" mt-xl-0 mt-3 pe-5">
                  <div className={`px-4 py-4 pb-5 rounded ${styles1.bdr}`}>
                    <div>
                      <b>Education details</b>
                    </div>
                    <div className="d-flex mt-3">
                      <Col md={6} xs={6}>
                        <div className="theme12 f12">Degree</div>
                        <div className="f12">MBBS</div>
                      </Col>
                      <Col md={6} xs={6}>
                        <div className="theme12 f12">University</div>
                        <div className="f12">Gandhi Medical College</div>
                      </Col>
                    </div>
                    <Col md={7} className="mt-3">
                      <div className="theme12 f12">Specialisation</div>
                      <div className="f12">Cardiology</div>
                    </Col>
                    <Col md={7} className="mt-3">
                      <div className="theme12 f12">Registration No</div>
                      <div className="f12">ABCD1234</div>
                    </Col>
                    <Col md={7} className="mt-4 mb-2">
                      <div className="theme12 f12">
                        two-factor authentication
                      </div>
                      <div className="d-flex" id="Twofactor">
                        <Form.Check
                          type="radio"
                          label="yes"
                          className="f12 mx-2 "
                          name="yes"
                        />
                        <Form.Check
                          type="radio"
                          label="No"
                          className="f12"
                          name="yes"
                        />
                      </div>
                    </Col>
                    </div>
                  </Col>
                  <Col md={11} lg={6} xl={4} className=" mt-xl-0 mt-3">
                  <div className={`px-4 py-4 rounded ${styles1.bdr}`}>
                    <div className="mb-3">
                      <b>Password Reset</b>
                    </div>
                    <Form>
                      <Form.Group className="mb-3 col-md-8 col-xl-8" controlId="formBasicEmail">
                        <Form.Label className="f13 mb-0">
                          Enter old Password
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter " />
                      </Form.Group>

                      <Form.Group
                        className="mb-3 mt-4 col-md-8 col-xl-8"
                        controlId="formBasicEmail"
                      >
                        <Form.Label className="f13 mb-0">New Password</Form.Label>
                        <Form.Control type="email" placeholder="Enter " />
                      </Form.Group>
                     <div className="d-md-flex">
                      <Form.Group className="mb-1 col-md-8 col-xl-8" controlId="formBasicEmail">
                        <Form.Label className="f13 mb-0">
                          Confirm Password
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter " />
                      </Form.Group>
                    
                    <Col
                    md={4}
                    lg={4}
                    xl={4}
                    className=" ps-md-3 px-0 mt-4 text-end"
                  >
                    <Button className={styles.appointmentbtn}>Update</Button>
                  </Col>
                  
                  </div>
                  </Form>
                  </div>
                  </Col>

                </div>
              ) : (
                <div className="row mt-4 pt-4">
                  <Col md={12} lg={6} xl={4}>
                    <div>
                      <b>Personal details</b>
                    </div>
                    <Form>
                      <div className="d-flex mt-3">
                        <Col md={6} xs={6} className="px-2">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="f14">Dob</Form.Label>
                            <Form.Control type="date" placeholder="Enter " />
                          </Form.Group>
                        </Col>
                        <Col md={6} xs={6} className="px-2">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="f14">Gender</Form.Label>
                            <Form.Control type="text" placeholder="Enter " />
                          </Form.Group>
                        </Col>
                      </div>
                      <div className="d-flex">
                        <Col md={6} xs={6} className="px-2">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="f14">Mobile No</Form.Label>
                            <Form.Control type="text" placeholder="Enter " />
                          </Form.Group>
                        </Col>
                        <Col md={6} xs={6} className="px-2">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="f14">
                              Alternate Mobile No
                            </Form.Label>
                            <Form.Control type="text" placeholder="Enter " />
                          </Form.Group>
                        </Col>
                      </div>
                      <Col md={6} xs={6} className="px-2">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="f14">Email Id</Form.Label>
                          <Form.Control type="text" placeholder="Enter " />
                        </Form.Group>
                      </Col>
                      <Col md={12} xs={12} className="px-2">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="f14">Address</Form.Label>
                          <Form.Control type="text" placeholder="Enter " />
                        </Form.Group>
                      </Col>
                    </Form>
                  </Col>
                  <Col md={12} lg={6} xl={4} className=" mt-xl-0 mt-3">
                    <div>
                      <b>Education details</b>
                    </div>

                    <Form>
                      <div className="d-flex mt-3">
                        <Col md={6} xs={6} className="px-2">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="f14">Degree</Form.Label>
                            <Form.Control type="text" placeholder="Enter " />
                          </Form.Group>
                        </Col>
                        <Col md={6} xs={6} className="px-2">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="f14">University</Form.Label>
                            <Form.Control type="text" placeholder="Enter " />
                          </Form.Group>
                        </Col>
                      </div>
                      <div className="d-flex">
                        <Col md={6} xs={6} className="px-2">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="f14">
                              Specification
                            </Form.Label>
                            <Form.Control type="text" placeholder="Enter " />
                          </Form.Group>
                        </Col>
                        <Col md={6} xs={6} className="px-2">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="f14">
                              Registration No
                            </Form.Label>
                            <Form.Control type="text" placeholder="Enter " />
                          </Form.Group>
                        </Col>
                      </div>
                      <Col md={12} xs={12} className="px-2">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="f14">
                            Upload Signature
                          </Form.Label>
                          <Form.Control type="file" placeholder="Enter " />
                        </Form.Group>
                      </Col>
                      <Col md={7} className="mt-3 px-2">
                        <div className="theme12 f12">
                          two-factor authentication
                        </div>
                        <div className="d-flex" id="Twofactor">
                          <Form.Check
                            type="radio"
                            label="yes"
                            className="f12 mx-2 "
                            name="yes"
                          />
                          <Form.Check
                            type="radio"
                            label="No"
                            className="f12"
                            name="yes"
                          />
                        </div>
                      </Col>
                    </Form>
                  </Col>
                  <Col
                    md={12}
                    lg={6}
                    xl={4}
                    className=" justify-content-end mt-xl-0 mt-3 d-flex align-items-end"
                  >
                    <Button
                      className="theme9 px-3 f12  bg-white brnone"
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                    <Button className={styles.appointmentbtn}>Update</Button>
                  </Col>
                </div>
              )}
            </Container>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Doctor_profile;
