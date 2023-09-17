import Image from "next/image";
import React, { useState, Component } from "react";
import { FileUploader } from "react-drag-drop-files";
import {
  Col,
  Row,
  Button,
  Modal,
  Nav,
  Tab,
  Form,
  Table,
  FormLabel,
  ProgressBar,
} from "react-bootstrap";
import styles1 from "../../styles/BillingHistory.module.scss";
import PDFViewer from "pdf-viewer-reactjs";
import { Document, Page } from "react-pdf";
import Logo2 from "../../public/images/cloud-upload.svg";
import samplePdf from "../../public/images/image 34.svg";
const Billinghistory = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [file, setFile] = useState(null);
  const fileTypes = ["JPG", "PNG", "GIF", "PDF"];
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles1.border_radius13}>
            <Row className="py-3 ">
              <Col
                xl={11}
                md={10}
                sm={11}
                xs={10}
                className="d-flex overflow_scroll "
              >
                <div className="d-flex">
                  <div className="ms-2">
                    <i className="fal fa-user-circle f28"></i>
                  </div>
                  <div className="ms-2">
                    <Col md={12} className="f12">
                      Santhosh Kumar
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
                  <div className="theme12 f12">Address(Optional)</div>
                  <div className="f12">Hyderabad, TS 500081</div>
                </div>
                <div className="ms-4">
                  <div className="theme12 f12">Abha Linked Status</div>
                  <div className="f12">Linked</div>
                </div>
                <div className="ms-4">
                  <div className="theme12 f12">Abha Address</div>
                  <div className="f12">Sumanth@abha</div>
                </div>
              </Col>
              <Col xl={1} md={2} sm={1} xs={3} className="pl-md-0 mt-xl-0 mt-2">
                <div className="theme12 f10">Treatment Status</div>
                <div className="f12 text-success font-weight-600">Ongoing</div>
              </Col>
            </Row>
          </div>
          <div className={styles1.bgbilling}>
            <Row className="py-3">
              <Col md={11} sm={11} xs={9} className="d-flex  overflow_scroll">
                <div className="d-flex">
                  <div className="ms-4 px-1"></div>
                  <div className="ms-2">
                    <Col md={12} className="f12 theme12">
                      Doctor{" "}
                    </Col>
                    <Col md={12} className="theme12 f12 text-left">
                      Dr. Bonnie Barstow{" "}
                    </Col>
                  </div>
                </div>
                <div className="ms-4">
                  <div className="theme12 f12">Treatment Name</div>
                  <div className="f12">Root canal</div>
                </div>
                <div className="ms-4">
                  <div className="theme12 f12">Treatment Start date</div>
                  <div className="f12">12 Dec, 2022</div>
                </div>
                <div className="ms-4">
                  <div className="theme12 f12">Treatment Status</div>
                  <div className="f12 d-flex">
                    <div className={styles1.treatment1}>1</div>
                    <div className={styles1.treatment2}>2</div>
                    <div className={styles1.treatment3}>3</div>
                  </div>
                </div>
                <div className="ms-4">
                  <div className="theme12 f12">Last Visited</div>
                  <div className="f12">20 Dec 2022</div>
                </div>
                <div className="ms-4">
                  <div className="theme12 f12">Last Paid</div>
                  <div className="f12">20 Dec 2022</div>
                </div>
                <div className="ms-4">
                  <div className="theme12 f12">Total Cost</div>
                  <div className="f12">12000/-</div>
                </div>
                <div className="ms-4">
                  <div className="theme12 f12">Paid</div>
                  <div className="f12">8000/-</div>
                </div>
                <div className="ms-4">
                  <div className="theme12 f12">Pending</div>
                  <div className="f12">4,000/-</div>
                </div>
              </Col>
              <Col md={1} sm={1} xs={3} className="pl-md-0 mt-md-0 mt-2"></Col>
            </Row>
          </div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="mt-3 px-3">
              <Col
                sm={4}
                md={3}
                xs={12}
                xl={3}
                className={styles1.border_radius15}
              >
                <Nav variant="pills" className="flex-column  mt-4">
                  <Nav.Item>
                    <div className="d-grid">
                      <Nav.Link eventKey="first" className="">
                        Billing History
                      </Nav.Link>
                    </div>
                  </Nav.Item>
                  <Nav.Item>
                    <div className="d-grid">
                      <Nav.Link eventKey="second" className="">
                        Upload Document
                      </Nav.Link>
                    </div>
                  </Nav.Item>
                  <Nav.Item>
                    <div className="d-grid">
                      <Nav.Link eventKey="third" className="">
                        Rx
                      </Nav.Link>
                    </div>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={8} md={9} xs={12} xl={9} className="w_80 pr-0">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="font-weight-600 pt-3 pb-2 ms-2">
                      {" "}
                      15-Dec-2022 <i className="fal fa-print ms-2"></i>
                    </div>

                    <div className="table-responsive table1 px-2">
                      <Table className={styles1.tableborder}>
                        <thead>
                          <tr>
                            <th className="nowwrap">SNO </th>
                            <th className="nowwrap">SERVICE</th>
                            <th className="nowwrap">DESCRIPTION</th>
                            <th className="nowwrap tableleftborder">SITTING</th>
                            <th className="nowwrap tableleftborder">PRICE</th>
                            <th className="nowwrap tableleftborder">TAXES</th>
                            <th className="nowwrap tableleftborder">
                              DISCOUNT
                            </th>
                            <th className="nowwrap tableleftborder">
                              SUB TOTAL
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="nowwrap">1</td>
                            <td className="nowwrap">Root canal treatment</td>
                            <td className="nowwrap theme12">
                              Treatment 3 setting{" "}
                            </td>
                            <td className="nowwrap tableleftborder">01</td>
                            <td className="nowwrap tableleftborder">
                              <i className="fal fa-rupee-sign"></i> 1500
                            </td>
                            <td className="nowwrap tableleftborder">
                              <div className={styles1.taxesbg}>10%</div>
                            </td>
                            <td className="nowwrap tableleftborder">
                              <div className={styles1.taxesbg}>10%</div>
                            </td>
                            <td className="nowwrap tableleftborder">
                              <i className="fal fa-rupee-sign"></i> 1500
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="tableleftborder"></td>
                            <td className="tableleftborder"></td>
                            <td className="tableleftborder"></td>
                            <td className="tableleftborder">
                              <div className="theme12 f11 ">Discount</div>
                              <div>
                                <i className="fa fa-rupee-sign "></i> 25.00
                              </div>
                            </td>
                            <td className="tableleftborder">
                              <div className="theme12 f11 ">Total</div>
                              <div>
                                <i className="fa fa-rupee-sign "></i> 1525.00
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={8}>
                              <Row
                                className="me-0"
                                style={{
                                  overflow: "hidden",
                                  width: "100%",
                                  margin: "0",
                                }}
                              >
                                <Col md={5} sm={5} xs={5} className="pl-0 pr-0">
                                  <div className="bg3 d-flex py-1 rounded">
                                    <div className="d-xl-flex  ms-2 mt-2">
                                      <div className="f11">TOTAL BILL -</div>
                                      <div className="f11">
                                        <i className="fa fa-rupee-sign"></i>{" "}
                                        1525/-
                                      </div>
                                    </div>
                                    <div className="d-xl-flex  ms-3 paid_bill">
                                      <div className="f11">PAID -</div>
                                      <div className="f11">
                                        <i className="fa fa-rupee-sign"></i>{" "}
                                        525/-
                                      </div>
                                    </div>
                                    <div className="d-xl-flex  ms-3 pending_bill">
                                      <div className="f11">PENDING -</div>
                                      <div className="f11">
                                        <i className="fa fa-rupee-sign"></i>{" "}
                                        1000/-
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                                <Col
                                  md={1}
                                  sm={1}
                                  xs={1}
                                  className="pr-0 mt-2 "
                                >
                                  <a href="" className="theme9 f12">
                                    Pay Now
                                  </a>
                                </Col>
                                <Col md={6} sm={6} xs={6} className="pr-0">
                                  <div className="bg3 d-flex py-1 rounded">
                                    <div className="ms-2">
                                      <div className="theme12 f10 ms-2">
                                        Payment Mode
                                      </div>
                                      <div className="f11">Split</div>
                                    </div>

                                    <div className="ms-2">
                                      <div className="theme12 f10 ms-2">
                                        Card/upi/Wallet
                                      </div>
                                      <div className="f11">300</div>
                                    </div>

                                    <div className="ms-2">
                                      <div className="theme12 f10 ms-2">
                                        Cash
                                      </div>
                                      <div className="f11">200</div>
                                    </div>

                                    <div className="d-md-flex ms-3 mt-2">
                                      <div className=" f13">TOTAL PAID</div>
                                      <div className="theme9 ms-2 f15">
                                        <i className="fa fa-rupee-sign"></i>{" "}
                                        525.00
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                    <div className="font-weight-600 pt-3 pb-2 ms-2">
                      {" "}
                      20-Dec-2022 <i className="fal fa-print ms-2"></i>
                    </div>

                    <div className="table-responsive table1 px-2">
                      <Table className={styles1.tableborder}>
                        <thead>
                          <tr>
                            <th className="nowwrap">SNO </th>
                            <th className="nowwrap">SERVICE</th>
                            <th className="nowwrap">DESCRIPTION</th>
                            <th className="nowwrap tableleftborder">SITTING</th>
                            <th className="nowwrap tableleftborder">PRICE</th>
                            <th className="nowwrap tableleftborder">TAXES</th>
                            <th className="nowwrap tableleftborder">
                              DISCOUNT
                            </th>
                            <th className="nowwrap tableleftborder">
                              SUB TOTAL
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="nowwrap">1</td>
                            <td className="nowwrap">Root canal treatment</td>
                            <td className="nowwrap theme12">
                              Treatment 3 setting{" "}
                            </td>
                            <td className="nowwrap tableleftborder">01</td>
                            <td className="nowwrap tableleftborder">
                              <i className="fal fa-rupee-sign"></i> 1500
                            </td>
                            <td className="nowwrap tableleftborder">
                              <div className={styles1.taxesbg}>10%</div>
                            </td>
                            <td className="nowwrap tableleftborder">
                              <div className={styles1.taxesbg}>10%</div>
                            </td>
                            <td className="nowwrap tableleftborder">
                              <i className="fal fa-rupee-sign"></i> 1500
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="tableleftborder"></td>
                            <td className="tableleftborder"></td>
                            <td className="tableleftborder"></td>
                            <td className="tableleftborder">
                              <div className="theme12 f11 ">Discount</div>
                              <div>
                                <i className="fa fa-rupee-sign "></i> 25.00
                              </div>
                            </td>
                            <td className="tableleftborder">
                              <div className="theme12 f11 ">Total</div>
                              <div>
                                <i className="fa fa-rupee-sign "></i> 1525.00
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={8}>
                              <Row
                                className="me-0"
                                style={{
                                  overflow: "hidden",
                                  width: "100%",
                                  margin: "0",
                                }}
                              >
                                <Col md={5} sm={5} xs={5} className="pl-0 pr-0">
                                  <div className="bg3 d-flex py-1 rounded">
                                    <div className="d-xl-flex  ms-2 mt-2">
                                      <div className="f11">TOTAL BILL -</div>
                                      <div className="f11">
                                        <i className="fa fa-rupee-sign"></i>{" "}
                                        1525/-
                                      </div>
                                    </div>
                                    <div className="d-xl-flex  ms-3 paid_bill">
                                      <div className="f11">PAID -</div>
                                      <div className="f11">
                                        <i className="fa fa-rupee-sign"></i>{" "}
                                        525/-
                                      </div>
                                    </div>
                                    <div className="d-xl-flex  ms-3 pending_bill">
                                      <div className="f11">PENDING -</div>
                                      <div className="f11">
                                        <i className="fa fa-rupee-sign"></i>{" "}
                                        1000/-
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                                <Col
                                  md={1}
                                  sm={1}
                                  xs={1}
                                  className="pr-0 mt-2 "
                                >
                                  <a href="" className="theme9 f12">
                                    Pay Now
                                  </a>
                                </Col>
                                <Col md={6} sm={6} xs={6} className="pr-0">
                                  <div className="bg3 d-flex py-1 rounded">
                                    <div className="ms-2">
                                      <div className="theme12 f10 ms-2">
                                        Payment Mode
                                      </div>
                                      <div className="f11">Split</div>
                                    </div>

                                    <div className="ms-2">
                                      <div className="theme12 f10 ms-2">
                                        Card/upi/Wallet
                                      </div>
                                      <div className="f11">300</div>
                                    </div>

                                    <div className="ms-2">
                                      <div className="theme12 f10 ms-2">
                                        Cash
                                      </div>
                                      <div className="f11">200</div>
                                    </div>

                                    <div className="d-md-flex ms-3 mt-2">
                                      <div className=" f13">TOTAL PAID</div>
                                      <div className="theme9 ms-2 f15">
                                        <i className="fa fa-rupee-sign"></i>{" "}
                                        525.00
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row className="pt-3">
                      <Col md={4} className="pr-0 rounded">
                        <div className={styles1.border_theme}>
                          <Row className="p-2 mt-4">
                            <Col md={8} xs={8} className="px-3">
                              <div className="f11 theme12">File Name</div>
                              <div className="f11 mt-3">Document Name.pdf</div>
                              <div className="f11 theme12 mt-1">
                                Lab report 23-NOV-22
                              </div>
                            </Col>
                            <Col md={4} xs={4} className="text-center">
                              <div className="f11 theme12">Actions</div>
                              <span className="mt-2">
                                <i className="fal fa-eye f11 mt-3"></i>
                              </span>
                              <span className="ms-2">
                                <i className="fal fa-download f11 mt-3"></i>
                              </span>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col md={3}>
                        <div className={styles1.border_theme1}>
                          <Image
                            src={Logo2}
                            alt=""
                            width={70}
                            className="mt-5"
                          />
                          <FileUploader
                            handleChange={handleChange}
                            name="file"
                            types={fileTypes}
                          />
                        </div>
                      </Col>
                      <Col md={5}>
                        <div className={styles1.bg4}>
                          <Row>
                            <Col md={8} xs={8} className="">
                              <div className="p-3">
                                <div className="f11">Document name.pdf</div>
                                <div className="pt-3 d-flex">
                                  <Col md={6}>
                                    <Form.Label className="f11 mb-0">
                                      Record Type
                                    </Form.Label>
                                    <Form.Select
                                      aria-label="Default select example"
                                      className={styles1.textboxwdth2}
                                      style={{ fontSize: "0.7rem" }}
                                    >
                                      <option> All Status </option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </Form.Select>
                                  </Col>
                                  <Col md={6} className="ms-2">
                                    <Form.Label className="f11 mb-0">
                                      Creation Date
                                    </Form.Label>
                                    <Form.Control
                                      type="date"
                                      placeholder="Select"
                                      style={{ fontSize: "0.7rem" }}
                                    />
                                  </Col>
                                </div>
                              </div>
                            </Col>
                            <Col md={4} xs={4} className="text-end">
                              <div className="pt-3 px-3">
                                <div className="f11 text-danger">
                                  Delete file
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="pt-2">
                          <div
                            className={styles1.bg4}
                            style={{ padding: "8px" }}
                          >
                            <div className="f11">Document Name pdf</div>
                            <Row>
                              <Col md={11}>
                                <ProgressBar
                                  variant="primary"
                                  now={40}
                                  className="mt-2 mb-3"
                                />
                              </Col>
                              <Col md={1}>
                                <i className="fal fa-times"></i>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row className="px-3">
                      <Col md={3} className="border_theme">
                        <Form.Select
                          aria-label="Default select example"
                          className="mt-3"
                        >
                          <option> November 2022 </option>
                          <option value="1"> December 2022</option>
                          <option value="2"> January 2022</option>
                          <option value="3"> Feburary 2022</option>
                        </Form.Select>

                        <div className="f13 mb-4  mt-3 ms-3 active">
                          13th Cold flue
                        </div>
                        <div className="f13  mb-3 pb-3 ms-3">
                          14th Cold flue
                        </div>
                        <div className="f13  mb-3 pb-3 ms-3">
                          15th Cold flue
                        </div>
                        <div className="f13  mb-3 pb-3 ms-3">
                          16th Cold flue
                        </div>
                      </Col>
                      <Col md={9}>
                        <Image src={samplePdf} alt="" width="500" />
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Billinghistory;
