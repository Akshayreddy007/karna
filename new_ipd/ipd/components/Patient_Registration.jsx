import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Nav,
  Tab,
  Form,
  Button,
} from "react-bootstrap";
import styles from "../styles/Login.module.scss";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Logo1 from "../public/images/QR_code.png";
import products from "./usersdata2";
import Footer from "./footer/Footer";
import Preloader from "./preloader/Preloader";
import Patient_Not_Registered from "./Patient_Not_Registered";
const Patient_Registration = () => {
  const [selected, setSelected] = useState("yes");
  const changeHandler = (e) => {
    setSelected(e.target.value);
  };

  const columns = [
    {
      dataField: "ABHAID",
      text: "ABHA ID",
    },
    {
      dataField: "PATIENTDETAILS",
      text: "PATIENT DETAILS",
    },
    {
      dataField: "AGEGENDER",
      text: "AGE/GENDER",
    },
    {
      dataField: "CONTACT",
      text: "CONTACT",
    },
    {
      dataField: "ACTIONS",
      text: "ACTIONS",
    },
  ];
  return (
    <React.Fragment>
      <div className="bgclr">
        <div className="px-md-4 container-fluid pt-5">
          <Card className="p-0 bdr1">
            <Card.Body className="p-1 ">
              <h6 className="mb-4 mt-4 font-weight-400 px-3">
                Registered With ABHA
              </h6>
              <form>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    className="checkbx"
                    checked={selected === "yes"}
                    value="yes"
                    onChange={changeHandler}
                  />
                  <span>Yes</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    className="checkbx"
                    checked={selected === "no"}
                    value="no"
                    onChange={changeHandler}
                  />
                  <span>No</span>
                </label>
              </form>
              {selected == "yes" ? (
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row className="pt-4">
                    <Col sm={12} className="bdrbtm1 p-0">
                      <Nav variant="pills" className="flex-row">
                        <Nav.Item>
                          <Nav.Link eventKey="first" className="f13">
                            ABHA
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second" className="f13">
                            Share Profile
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third" className="f13">
                            Mobile App
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="fourth" className="f13">
                            Scan QR using Health ID Card
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={12} className="mt-4">
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Form>
                            <Col
                              md={4}
                              xl={3}
                              lg={4}
                              className="text-left mt-4 mb-3"
                            >
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Control
                                  type="text"
                                  name="otp"
                                  className="textboxborder"
                                  autoComplete="off"
                                  placeholder="Enter ABHA Id"
                                />
                              </Form.Group>
                            </Col>
                            <Col
                              md={12}
                              xl={12}
                              lg={12}
                              className="text-left mt-3 mb-3"
                            >
                              <Button
                                className={styles.login_button}
                                style={{
                                  width: "auto",
                                  padding: "8px 17px 8px 17px",
                                }}
                              >
                                Get Otp{" "}
                              </Button>
                            </Col>
                          </Form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            <Col md={5}>
                              <Image src={Logo1} alt="Logo1" width="100" />
                              <div className="mt-5 mb-2 bdrmodule">
                                Note : Scan the above code form ABHA app to
                                proceed with registration{" "}
                              </div>
                            </Col>
                            <Col md={7}>
                              <BootstrapTable
                                bootstrap4
                                keyField="id"
                                data={products}
                                columns={columns}
                                bordered={false}
                                pagination={paginationFactory()}
                              />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Form>
                            <Col
                              md={4}
                              xl={3}
                              lg={4}
                              className="text-left mt-4 mb-3">
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Control
                                  type="text"
                                  name="otp"
                                  className="textboxborder"
                                  autoComplete="off"
                                  placeholder="Enter Mobile No"
                                />
                              </Form.Group>
                            </Col>
                            <Col
                              md={12}
                              xl={12}
                              lg={12}
                              className="text-left mt-3 mb-3"
                            >
                              <Button
                                className={styles.login_button}
                                style={{
                                  width: "auto",
                                  padding: "8px 17px 8px 17px",
                                }}
                              >
                                Verify{" "}
                              </Button>
                            </Col>
                            <div className="mt-1 bdrmodule">
                              Note : enter ABHA Id to get the notification in
                              ABHA app then accept it to proceed with
                              registration
                            </div>
                          </Form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <Preloader />
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              ) : selected == "no" ? (
                <Patient_Not_Registered />
              ) : (
                ""
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Patient_Registration;
