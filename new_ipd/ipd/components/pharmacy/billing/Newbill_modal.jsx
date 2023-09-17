import React, { useState } from "react";
import styles1 from "../../../styles/Services.module.scss";
import styles2 from "../../../styles/Labdashboard.module.scss";
import styles3 from "../../../styles/Dashboard.module.scss";
import { Form, Row, Col, Button, Card, Modal, Table } from "react-bootstrap";
import Payment_modal from "../../Payment_modal";
const Newbill_modal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modalShow, setModalShow] = useState(false);
  return (
    <React.Fragment>
      <Modal size="xl" id="xl1" {...props}>
        <Modal.Header closeButton className={styles1.bg3}>
          <div className="w-100">
            <Modal.Title>New Bill</Modal.Title>
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
        <Modal.Body>
          <Row className=" mt-0 mb-4">
            <Col md={1} xs={2} className={`${styles2.minht} text-center`}>
              <div className={styles2.addbtn}>Bill</div>
              <div>Bill</div>
              <div>Bill</div>
            </Col>
            <Col md={11} xs={10} className="px-0">
              <Form>
                {props.isediting == false ? (
                  <div
                    className={`d-flex ${styles2.dsh} px-2 overflow_scroll py-2`}
                  >
                    <Col md={2} className="px-2">
                      <Form.Group>
                        <Form.Control
                          type="text"
                          className={`${styles1.services_input} ${styles2.border1} f13`}
                          placeholder="Name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={2} className="px-2">
                      <Form.Group>
                        <Form.Control
                          type="text"
                          className={`${styles1.services_input} ${styles2.border1}  f13`}
                          placeholder="Mobile"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={1} className="px-2">
                      <Form.Group>
                        <Form.Control
                          type="text"
                          className={`${styles1.services_input} ${styles2.border1} f13`}
                          placeholder="Age"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={1} className="px-2">
                      <Form.Group>
                        <Form.Control
                          type="text"
                          className={`${styles1.services_input} ${styles2.border1} f13`}
                          placeholder="Gender"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={2} className="px-2">
                      <Form.Group>
                        <Form.Control
                          type="text"
                          className={`${styles1.services_input} ${styles2.border1} f13`}
                          placeholder="Dr Name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={2} className="px-2"></Col>
                    <Col md={2} className="px-2">
                      <Form.Group>
                        <Form.Select>
                          <option>Walkins</option>
                          <option></option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </div>
                ) : (
                  <div className={`d-flex ${styles2.dsh} px-2 overflow_scroll`}>
                    <div className="ms-3 me-5 mb-1 mt-1 ">
                      <div className="f12 theme12">UHID</div>
                      <div className="f13 theme14">UH2011</div>
                    </div>

                    <div className="me-5 mb-1 mt-1 ">
                      <div className="f12 theme12">Name</div>
                      <div className="f13 theme14">April Curtis</div>
                    </div>

                    <div className="me-5 mb-1 mt-1 ">
                      <div className="f12 theme12">Age/Gender</div>
                      <div className="f13 theme14">44/M</div>
                    </div>

                    <div className="me-5 mb-1 mt-1 ">
                      <div className="f12 theme12">Mobile No</div>
                      <div className="f13 theme14">+91 9876512345</div>
                    </div>

                    <div className="me-5 mb-1 mt-1  ">
                      <div className="f12 theme12">consultant Doctor </div>
                      <div className="f13 theme14">Peter Thornton</div>
                    </div>
                  </div>
                )}
                <div className="table-responsive">
                  <Table bordered className="mb-0">
                    <thead>
                      <tr>
                        <th className="font-weight-500 theme14">HSN</th>
                        <th className="font-weight-500 theme14">Item</th>
                        <th className="font-weight-500 theme14">Batch</th>
                        <th className="font-weight-500 theme14">Quantity</th>
                        <th className="font-weight-500 theme14">Unit Price</th>
                        <th className="font-weight-500 theme14"> Price</th>
                        <th className="font-weight-500 theme14">GST</th>
                        <th className="font-weight-500 theme14">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={styles2.text_initial}>ABCD12</td>
                        <td className={styles2.text_initial}>
                          <div className="d-flex">
                            <div className="col-md-11">
                              Dolo 650 (Paracetmol) 650mg
                            </div>
                            <div>
                              <i className="fal fa-trash-alt"></i>
                            </div>
                          </div>

                          <div className="mt-2">
                            <Form.Control
                              type="text"
                              className={`${styles1.services_input} ${styles2.border1}  ${styles3.textboxwdth4}`}
                            />
                          </div>
                        </td>
                        <td className={styles2.text_initial}>ABCD12</td>
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
                          <i className="fal fa-rupee-sign"></i> 10
                        </td>
                        <td className={styles2.text_initial}>
                          <i className="fal fa-rupee-sign"></i> 200
                        </td>
                        <td className={styles2.text_initial}>18%</td>
                        <td className={styles2.text_initial}>
                          <i className="fal fa-rupee-sign"></i> 234
                        </td>
                      </tr>
                      <tr>
                        <td className={styles2.text_initial}></td>
                        <td></td>
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
                          colSpan={3}
                        >
                          <b> Total</b>
                        </td>
                        <td>20</td>
                        <td>
                          <i className="fal fa-rupee-sign"></i>10
                        </td>
                        <td>
                          <i className="fal fa-rupee-sign"></i>200
                        </td>
                        <td>
                          <i className="fal fa-rupee-sign"></i>36
                        </td>
                        <td className="f18 nowrap">
                          <i className="fal fa-rupee-sign"></i>224/-
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className={`d-xl-flex ${styles1.bdr_tb}`}>
                  <Col md={12} xl={3} xs={12}>
                    <div
                      className="d-flex align-items-center ms-4 mt-4"
                      id="form1"
                    >
                      <div className="me-5">
                        <Form.Check
                          type="radio"
                          id="id"
                          label="OP"
                          name="radio"
                          className="f13"
                        />
                      </div>
                      <div className="me-5">
                        <Form.Check
                          type="radio"
                          id="id"
                          label="IP"
                          name="radio"
                          className="f13"
                        />
                      </div>
                      <div className="me-3">
                        <Form.Check
                          type="radio"
                          id="id"
                          label="OT"
                          name="radio"
                          className="f13 "
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md={12} xl={6} xs={12}>
                    <div className="d-md-flex align-items-center px-1 justify-content-end">
                      <div className="theme12 ms-3 ms-md-0  me-3 mb-2 mb-md-0 mt-2 mt-md-0">
                        Discount
                      </div>
                      <div className=" ms-3 ms-md-0 me-3 mb-2 mb-md-0">
                        <Form.Control
                          type="text"
                          className={`${styles1.services_input} ${styles2.border1} ${styles2.w80}`}
                        />
                      </div>
                      <div className="ms-3 ms-md-0 me-3 mb-2 mb-md-0">
                        <i className="fal fa-rupee-sign"></i> 12/-
                      </div>
                      <div className={` ${styles2.bg22} ms-2 px-3 py-3`}>
                        <div className="f12">Total - Discount = Final bill</div>
                        <div className="font-weight-500 f15">
                          236 - 12 = 224
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col
                    md={12}
                    xl={3}
                    xs={12}
                    style={{ background: "#62B970" }}
                    className="d-flex align-items-center px-3"
                  >
                    <div className="d-md-flex align-items-center">
                      <div className="text-white f21 me-3 font-weight-500">
                        {" "}
                        <b> Total</b> :
                      </div>
                      <div className="text-white f21 font-weight-500">
                        <b>
                          {" "}
                          <i className="fal fa-rupee-sign"></i> 224/-
                        </b>
                      </div>
                    </div>
                  </Col>
                </div>
                <div className="d-lg-flex mt-4">
                  <Col md={12} lg={4} xl={6} xs={12} className="px-2"></Col>
                  <Col md={12} xl={6} lg={8} xs={12} className="text-end">
                    <Button className={`${styles2.addbtn} me-3 f13 px-4 py-2`}>
                      Save Bill
                    </Button>
                    <Button
                      className={`${styles1.servicebtn2} me-3`}
                      onClick={handleShow}
                    >
                      Pay Now
                    </Button>
                  </Col>
                </div>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <Payment_modal
        show={show}
        onHide={handleClose}
        size="md"
        id="md1"
        data-backdrop="false"
      />
    </React.Fragment>
  );
};

export default Newbill_modal;
