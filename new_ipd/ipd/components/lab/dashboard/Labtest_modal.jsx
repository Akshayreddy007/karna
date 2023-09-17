import React, { useState } from "react";
import styles1 from "../../../styles/Services.module.scss";
import styles2 from "../../../styles/Labdashboard.module.scss";
import styles3 from "../../../styles/Dashboard.module.scss";
import { Form, Row, Col, Button, Card, Modal, Table } from "react-bootstrap";
import Payment_modal from "../../Payment_modal";
import Schedule_modal from "./Schedule_modal";
const Labtest_modal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);
  const [modalShows, setModalShows] = useState(false);
  return (
    <React.Fragment>
      <Modal size="xl" id="xl1" {...props}>
        <Modal.Header closeButton className={styles1.bg3}>
          <div className="w-100">
            <Modal.Title>New Lab Test</Modal.Title>
          </div>
          <div className="d-md-flex d-none justify-content-end w-100">
            <div>
              <div className="f14 me-4">
                <span>Invoice No :</span>
                <span className="font-weight-500 "> ABC987645</span>
              </div>
            </div>

            <div>
              <div className="f14 me-4">
                <span>Date :</span>
                <span className="font-weight-500 "> 2nd Jan 2023</span>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="pb-0 pt-0">
          <Row className=" mt-0 mb-1">
            <Col
              md={1}
              xs={2}
              className={`${styles2.minht} text-center pt-2 px-2`}
            >
              <div className={`${styles2.addbtn} f12`}>Bill1</div>
              <div className="mt-3 f12">Bill2</div>
              <div className="mt-3 f12">Bill3</div>
              <div className="mt-3 f12">Add</div>
            </Col>
            <Col md={11} xs={10} className="px-0">
              <Form>
                {props.isediting == false ? (
                  <div className={`d-flex ${styles2.dsh} px-2 pt-2`}>
                    <Col md={7} xl={7} xs={7}>
                      <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          placeholder="Enter Patient name , id , mobileno  etc "
                          className={`${styles1.services_input} ${styles2.border22}`}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={5} xl={5} xs={5} className="text-end">
                      <Button className={`${styles2.addbtn}  f14`}>
                        Add Patient
                      </Button>
                    </Col>
                  </div>
                ) : (
                  <div
                    className={`d-flex ${styles2.dsh} px-2 overflow_scroll pt-1`}
                  >
                    <div className="ms-3 me-5 mb-1 mt-1 ">
                      <div className="f12 theme12">UHID</div>
                      <div className="f13 theme14">UH2011</div>
                    </div>

                    <div className="me-5 mb-1 mt-1 ">
                      <div className="f12 theme12">NAME</div>
                      <div className="f13 theme14">April Curtis</div>
                    </div>

                    <div className="me-5 mb-1 mt-1 ">
                      <div className="f12 theme12">AGE/GENDER</div>
                      <div className="f13 theme14">44/M</div>
                    </div>

                    <div className="me-5 mb-1 mt-1 ">
                      <div className="f12 theme12">MOBILE NO</div>
                      <div className="f13 theme14">+91 9876512345</div>
                    </div>

                    <div className="me-5 mb-1 mt-1  ">
                      <div className="f12 theme12">CONSULTANT DOCTOR </div>
                      <div className="f13 theme14">Peter Thornton</div>
                    </div>
                  </div>
                )}

                <div className="table-responsive">
                  <Table bordered className="mb-0">
                    <thead>
                      <tr>
                        <th className="font-weight-500 theme14">Sno</th>
                        <th className="font-weight-500 theme14">Item</th>
                        <th className="font-weight-500 theme14">Quantity</th>
                        <th className="font-weight-500 theme14">Unit Price</th>
                        <th className="font-weight-500 theme14">GST</th>
                        <th className="font-weight-500 theme14">Price</th>
                        <th className="font-weight-500 theme14">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={styles2.text_initial}>1</td>
                        <td className={styles2.text_initial}>
                          <div className="d-flex">
                            <div className="col-md-11">
                              Complete blood picture(CBP){" "}
                            </div>
                            <div>
                              <i className="fal fa-trash-alt"></i>
                            </div>
                          </div>
                        </td>
                        <td
                          className={`${styles2.w80} ${styles2.text_initial}`}
                        >
                          {" "}
                          <Form.Control
                            type="text"
                            className={`${styles1.services_input} ${styles2.border1} ${styles2.w80}`}
                          />
                        </td>
                        <td className={styles2.text_initial}>
                          <i className="fal fa-rupee-sign"></i> 4000
                        </td>
                        <td className={styles2.text_initial}>18%</td>
                        <td className={styles2.text_initial}>
                          <i className="fal fa-rupee-sign"></i> 180
                        </td>
                        <td className={styles2.text_initial}>
                          <i className="fal fa-rupee-sign"></i> 23460
                        </td>
                      </tr>
                      <tr>
                        <td className={styles2.text_initial}>2</td>
                        <td>
                          <Form.Control
                            type="text"
                            className={`${styles1.services_input} ${styles2.border1}  ${styles3.textboxwdth4}`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={5}></td>
                      </tr>
                      <tr>
                        <td colSpan={5}></td>
                      </tr>
                      <tr>
                        <td colSpan={5}></td>
                      </tr>
                      <tr>
                        <td colSpan={5}></td>
                      </tr>
                      <tr>
                        <td colSpan={5}></td>
                      </tr>
                      <tr>
                        <td colSpan={5}></td>
                      </tr>

                      <tr>
                        <td colSpan={5}></td>
                      </tr>
                      <tr>
                        <td colSpan={5}></td>
                      </tr>
                      <tr>
                        <td colSpan={5}></td>
                      </tr>
                      <tr>
                        <td colSpan={5}></td>
                      </tr>
                      <tr>
                        <td colSpan={5}></td>
                      </tr>
                      <tr>
                        <td colSpan={5}></td>
                      </tr>
                      <tr>
                        <td colSpan={5}></td>
                      </tr>
                      <tr>
                        <td
                          className={`${styles2.text_initial} text-end f18`}
                          colSpan={2}
                        >
                          <b> Total</b>
                        </td>
                        <td>2</td>
                        <td>
                          <i className="fal fa-rupee-sign"></i>1000
                        </td>
                        <td>
                          <i className="fal fa-rupee-sign"></i>180
                        </td>
                        <td>
                          <i className="fal fa-rupee-sign"></i>1180
                        </td>
                        <td className="f18 nowwrap ">
                          <b>
                            {" "}
                            <i className="fal fa-rupee-sign"></i>23680
                          </b>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className={`d-xl-flex ${styles1.bdr_tb}`}>
                  <Col md={12} xl={5} xs={12} className={styles2.bg22}>
                    <div className="d-md-flex align-items-center py-3 px-md-1 px-3 justify-content-center">
                      <div className="theme12 me-3 f13">Discount</div>
                      <span className=" me-3">
                        <Form.Control
                          type="text"
                          className={`${styles1.services_input} ${styles2.border1} ${styles2.w80}`}
                        />
                      </span>
                      <span className=" me-3 f13 mt-1 mt-md-0">118/-</span>
                      <div className=" ms-3 f13">
                        <div className="f13">Total - Discount = Final bill</div>
                        <div className="font-weight-500 f13">
                          2360 - 118 = 2242
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={12} xl={3} xs={12}>
                    <div className="d-flex align-items-center py-3 px-1 justify-content-center">
                      <div className="theme12 me-3 f13">Pay Partially</div>
                      <div className=" me-3">
                        <Form.Control
                          type="text"
                          className={`${styles1.services_input} ${styles2.border1} ${styles2.w80}`}
                        />
                      </div>
                      <div className=" me-3 f13">1121/-</div>
                    </div>
                  </Col>
                  <Col
                    md={12}
                    xl={4}
                    xs={12}
                    style={{ background: "#62B970" }}
                    className="d-flex align-items-center px-3"
                  >
                    <div className="d-md-flex align-items-center">
                      <div className="text-white f22 me-3 font-weight-500">
                        {" "}
                        <b> Total</b>
                      </div>
                      <div className="text-white f22 font-weight-500">
                        <b>
                          {" "}
                          <i className="fal fa-rupee-sign"></i> 1121/-
                        </b>
                      </div>
                    </div>
                  </Col>
                </div>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className={`${styles2.border_none} d-block pt-0`}>
          <div className="d-lg-flex mt-0">
            <Col
              md={12}
              lg={1}
              xl={1}
              xs={12}
              className={` ${styles2.bdright} px-2`}
            ></Col>
            <Col md={12} lg={3} xl={3} xs={12} className="px-2 pt-4">
              <Form.Check type="checkbox" id="id" label="Emergency Reports" />
            </Col>
            <Col md={12} xl={8} lg={8} xs={12} className="text-md-end pt-4">
              <Button className={`${styles2.addbtn} me-3 f13 mt-md-0 mt-2`}>
                Save Bill
              </Button>
              <Button
                className={`${styles2.addbtn} me-3 f13 mt-md-0 mt-2`}
                onClick={() => setModalShow(true)}
              >
                Schedule Test
              </Button>
              <Button
                className={`${styles1.servicebtn2} me-3 mt-md-0 mt-2`}
                onClick={handleShow}
              >
                {" "}
                Pay & Schedule Test
              </Button>
              <Button
                className={`${styles1.servicebtn2} me-3 mt-md-0 mt-2`}
                onClick={handleShow}
              >
                {" "}
                Pay Now
              </Button>
            </Col>
          </div>
        </Modal.Footer>
      </Modal>
      <Payment_modal
        show={show}
        onHide={handleClose}
        size="md"
        id="md1"
        data-backdrop="false"
      />
      <Schedule_modal show={modalShow} onHide={() => setModalShow(false)} />
    </React.Fragment>
  );
};

export default Labtest_modal;
