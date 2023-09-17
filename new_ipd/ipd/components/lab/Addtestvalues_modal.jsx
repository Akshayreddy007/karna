import React from "react";
import {
  Card,
  Button,
  Modal,
  Form,
  Table,
  Col,
  Tab,
  Row,
  Nav,
} from "react-bootstrap";
import styles2 from "../../styles/Labdashboard.module.scss";
import styles1 from "../../styles/Services.module.scss";
const Addtestvalues_modal = (props) => {
  return (
    <React.Fragment>
      <Modal size="xl" id="xl1" {...props}>
        <Modal.Header closeButton className={styles1.bg3}>
          <div className="w-100">
            <Modal.Title>Add Test Values</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className={`d-flex ${styles2.dsh} px-2 overflow_scroll`}>
            <div className="ms-3 me-5 mb-3 mt-1 ">
              <div className="f12 theme12">UHID</div>
              <div className="f13 theme14">UH2011</div>
            </div>

            <div className="me-5 mb-3 mt-1 ">
              <div className="f12 theme12">NAME</div>
              <div className="f13 theme14">April Curtis</div>
            </div>

            <div className="me-5 mb-3 mt-1 ">
              <div className="f12 theme12">AGE/GENDER</div>
              <div className="f13 theme14">44/M</div>
            </div>

            <div className="me-5 mb-3 mt-1 ">
              <div className="f12 theme12">MOBILE NO</div>
              <div className="f13 theme14">+91 9876512345</div>
            </div>

            <div className="me-5 mb-3 mt-1  ">
              <div className="f12 theme12">CONSULTANT DOCTOR </div>
              <div className="f13 theme14">Peter Thornton</div>
            </div>
          </div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col xl={2} md={4}>
                <Nav variant="pills" className="flex-column" id="flex1">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      Complete blood picture(CBP)
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      Fasting blood glucose(FBS)
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xl={10} md={8} className={styles2.bordertab}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className={`theme12 mt-2 pb-2  ${styles2.dsh}`}>
                      ABSCD12345
                    </div>

                    <div className={`d-xl-flex py-3 ${styles2.dsh} `}>
                      <Col xl={3} lg={12} md={12} xs={12} className="px-3">
                        <div className="theme12 f13">TITLE</div>
                        <div className="theme14 f13">
                          Lorem Ipsum is simply dummy
                        </div>
                      </Col>
                      <Col xl={4} lg={12} md={12} xs={12} className="px-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">
                              Result Value
                            </div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input1}`}
                              />
                            </Form.Group>
                          </div>
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">Units</div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input}`}
                              />
                            </Form.Group>
                          </div>
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">Method</div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input}`}
                              />
                            </Form.Group>
                          </div>
                        </div>
                      </Col>
                      <Col xl={4} lg={12} md={12} xs={12} className="px-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <div className="theme12 f12 mb-1">HIGH VALUE</div>
                            <div className="theme12 f12 ">1000</div>
                          </div>
                          <div className="me-3">
                            <div className="theme12 f12 mb-1">LOW VALUE</div>
                            <div className="theme12 f12">1000</div>
                          </div>
                        </div>
                        <p className="f12 mt-3">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </Col>
                      <Col xl={1} lg={12} md={12} xs={12}></Col>
                    </div>

                    <div className={`d-xl-flex py-3 ${styles2.dsh} `}>
                      <Col xl={3} lg={12} md={12} xs={12} className="px-3">
                        <div className="theme12 f13">TITLE</div>
                        <div className="theme14 f13">
                          Lorem Ipsum is simply dummy
                        </div>
                      </Col>
                      <Col xl={4} lg={12} md={12} xs={12} className="px-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">
                              Result Value
                            </div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input1}`}
                              />
                            </Form.Group>
                          </div>
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">Units</div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input}`}
                              />
                            </Form.Group>
                          </div>
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">Method</div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input}`}
                              />
                            </Form.Group>
                          </div>
                        </div>
                      </Col>
                      <Col xl={4} lg={12} md={12} xs={12} className="px-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <div className="theme12 f12 mb-1">HIGH VALUE</div>
                            <div className="theme12 f12 ">1000</div>
                          </div>
                          <div className="me-3">
                            <div className="theme12 f12 mb-1">LOW VALUE</div>
                            <div className="theme12 f12">1000</div>
                          </div>
                        </div>
                        <p className="f12 mt-3">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </Col>
                      <Col xl={1} lg={12} md={12} xs={12}></Col>
                    </div>

                    <div className={`d-xl-flex py-3 ${styles2.dsh} `}>
                      <Col xl={3} lg={12} md={12} xs={12} className="px-3">
                        <div className="theme12 f13">TITLE</div>
                        <div className="theme14 f13">
                          Lorem Ipsum is simply dummy
                        </div>
                      </Col>
                      <Col xl={4} lg={12} md={12} xs={12} className="px-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">
                              Result Value
                            </div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input1}`}
                              />
                            </Form.Group>
                          </div>
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">Units</div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input}`}
                              />
                            </Form.Group>
                          </div>
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">Method</div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input}`}
                              />
                            </Form.Group>
                          </div>
                        </div>
                      </Col>
                      <Col xl={4} lg={12} md={12} xs={12} className="px-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <div className="theme12 f12 mb-1">HIGH VALUE</div>
                            <div className="theme12 f12 ">1000</div>
                          </div>
                          <div className="me-3">
                            <div className="theme12 f12 mb-1">LOW VALUE</div>
                            <div className="theme12 f12">1000</div>
                          </div>
                        </div>
                        <p className="f12 mt-3">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </Col>
                      <Col xl={1} lg={12} md={12} xs={12}></Col>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className={`theme12 mt-2 pb-2  ${styles2.dsh}`}>
                      ABSCD12345
                    </div>

                    <div className={`d-xl-flex py-3 ${styles2.dsh} `}>
                      <Col xl={3} lg={12} md={12} xs={12} className="px-3">
                        <div className="theme12 f13">TITLE</div>
                        <div className="theme14 f13">
                          Lorem Ipsum is simply dummy
                        </div>
                      </Col>
                      <Col xl={4} lg={12} md={12} xs={12} className="px-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">
                              Result Value
                            </div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input1}`}
                              />
                            </Form.Group>
                          </div>
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">Units</div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input}`}
                              />
                            </Form.Group>
                          </div>
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">Method</div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input}`}
                              />
                            </Form.Group>
                          </div>
                        </div>
                      </Col>
                      <Col xl={4} lg={12} md={12} xs={12} className="px-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <div className="theme12 f12 mb-1">HIGH VALUE</div>
                            <div className="theme12 f12 ">1000</div>
                          </div>
                          <div className="me-3">
                            <div className="theme12 f12 mb-1">LOW VALUE</div>
                            <div className="theme12 f12">1000</div>
                          </div>
                        </div>
                        <p className="f12 mt-3">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </Col>
                      <Col xl={1} lg={12} md={12} xs={12}></Col>
                    </div>

                    <div className={`d-xl-flex py-3 ${styles2.dsh} `}>
                      <Col xl={3} lg={12} md={12} xs={12} className="px-3">
                        <div className="theme12 f13">TITLE</div>
                        <div className="theme14 f13">
                          Lorem Ipsum is simply dummy
                        </div>
                      </Col>
                      <Col xl={4} lg={12} md={12} xs={12} className="px-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">
                              Result Value
                            </div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input1}`}
                              />
                            </Form.Group>
                          </div>
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">Units</div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input}`}
                              />
                            </Form.Group>
                          </div>
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">Method</div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input}`}
                              />
                            </Form.Group>
                          </div>
                        </div>
                      </Col>
                      <Col xl={4} lg={12} md={12} xs={12} className="px-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <div className="theme12 f12 mb-1">HIGH VALUE</div>
                            <div className="theme12 f12 ">1000</div>
                          </div>
                          <div className="me-3">
                            <div className="theme12 f12 mb-1">LOW VALUE</div>
                            <div className="theme12 f12">1000</div>
                          </div>
                        </div>
                        <p className="f12 mt-3">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </Col>
                      <Col xl={1} lg={12} md={12} xs={12}></Col>
                    </div>

                    <div className={`d-xl-flex py-3 ${styles2.dsh} `}>
                      <Col xl={3} lg={12} md={12} xs={12} className="px-3">
                        <div className="theme12 f13">TITLE</div>
                        <div className="theme14 f13">
                          Lorem Ipsum is simply dummy
                        </div>
                      </Col>
                      <Col xl={4} lg={12} md={12} xs={12} className="px-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">
                              Result Value
                            </div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input1}`}
                              />
                            </Form.Group>
                          </div>
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">Units</div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input}`}
                              />
                            </Form.Group>
                          </div>
                          <div className="me-3">
                            <div className="theme14 f12 mb-2 mt-2">Method</div>
                            <Form.Group
                              className="mb-2"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                className={`${styles1.services_input}`}
                              />
                            </Form.Group>
                          </div>
                        </div>
                      </Col>
                      <Col xl={4} lg={12} md={12} xs={12} className="px-3">
                        <div className="d-flex">
                          <div className="me-3">
                            <div className="theme12 f12 mb-1">HIGH VALUE</div>
                            <div className="theme12 f12 ">1000</div>
                          </div>
                          <div className="me-3">
                            <div className="theme12 f12 mb-1">LOW VALUE</div>
                            <div className="theme12 f12">1000</div>
                          </div>
                        </div>
                        <p className="f12 mt-3">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </Col>
                      <Col xl={1} lg={12} md={12} xs={12}></Col>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
                <div className="d-md-flex pt-5 pb-3 ">
                  <Col xl={6} md={5} xs={12}>
                    <Button className={`${styles2.addbtn} me-3 f13`}>
                      Auto Fill From Machine
                    </Button>
                  </Col>
                  <Col
                    xl={6}
                    md={7}
                    xs={12}
                    className="text-md-end mt-3 mt-md-0"
                  >
                    <Button
                      className={`theme9 bg-white  me-5`}
                      style={{ border: "none" }}
                    >
                      Clear
                    </Button>
                    <Button className={`${styles1.servicebtn2} me-3`}>
                      Save & Next
                    </Button>
                  </Col>
                </div>
              </Col>
            </Row>
          </Tab.Container>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Addtestvalues_modal;
