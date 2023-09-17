import React, { useState } from "react";
import styles1 from "../styles/Services.module.scss";
import styles2 from "../styles/Labdashboard.module.scss";
import styles3 from "../styles/Dashboard.module.scss";
import { Form, Row, Col, Button, Card, Modal, Table } from "react-bootstrap";
import Logo1 from "../public/images/Check-circle.svg";
import Logo2 from "../public/images/Check-circle1.svg";
import Link from "next/link";
import Image from "next/image";

const Payment_modal = (props) => {
  const [setter, setSetter] = useState("");
  const [selected, setSelected] = useState("");
  const changeHandler = (e) => {
    setSelected(e.target.value);
  };

  return (
    <React.Fragment>
      <Modal
        size="md"
        {...props}
        data-backdrop="false"
        style={{ backgroundColor: "#0000007d" }}
      >
        <Modal.Header closeButton className={styles2.bdr_bt}>
          <div className="w-100">
            <Modal.Title>Payment</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          {setter == "yes" ? (
            <div>
              <div className="d-md-flex mt-3 px-3">
                <div className="col-md-10">
                  <div className="theme12 f12">Mode</div>
                  <div className="d-flex mt-3" id="form1">
                    <div className="me-5">
                      <Form.Check
                        type="radio"
                        id="id"
                        label="Cash"
                        name="radio"
                        className="f13"
                        checked={selected === "cash"}
                        value="cash"
                        onChange={changeHandler}
                      />
                    </div>
                    <div className="me-5">
                      <Form.Check
                        type="radio"
                        id="id"
                        label="Card/UPI"
                        name="radio"
                        className="f13"
                        checked={selected === "card"}
                        value="card"
                        onChange={changeHandler}
                      />
                    </div>
                    <div className="me-3">
                      <Form.Check
                        type="radio"
                        id="id"
                        label="Split"
                        name="radio"
                        className="f13 "
                        checked={selected === "split"}
                        value="split"
                        onChange={changeHandler}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles2.paybg} justify-content-end col-md-2`}
                >
                  <div className="text-white">Total Bill</div>
                  <div className="text-white">2234/-</div>
                </div>
              </div>
              {selected == "cash" ? (
                <div>
                  <Col md={4} className="px-3">
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                      <Form.Label className="theme14 f13">
                        Amount Recieved
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="25000"
                        className={`${styles1.services_input}`}
                      />
                    </Form.Group>
                  </Col>
                  <Row className="px-4">
                    <Col md={7}></Col>
                    <Col md={5} className={styles2.bg23}>
                      <div className="f12 text-center">
                        Amount received - Bill amount = Change to return
                      </div>
                      <div className="font-weight-500 text-end f21 mt-3">
                        <i className="fal fa-rupee-sign"></i> 258/-
                      </div>
                    </Col>
                  </Row>

                  <div
                    className={`d-flex justify-content-end mt-4 pt-3 ${styles2.bdr_tp}`}
                  >
                    <Link href="#" className="me-5 theme9 mt-2 f13">
                      Cancel
                    </Link>
                    <Button className={`${styles1.servicebtn2} me-3`}>
                      Mark as Paid
                    </Button>
                  </div>
                </div>
              ) : selected == "card" ? (
                <div>
                  <div className="f12 text-left ms-3 mb-5 pb-5">
                    Credit/Debit Card /UPI Device Connected
                    <Image src={Logo1} alt=""></Image>
                  </div>

                  <div
                    className={`d-flex justify-content-end mt-4 pt-3 ${styles2.bdr_tp}`}
                  >
                    <Link href="#" className="me-5 theme9 mt-2 f13">
                      Cancel
                    </Link>
                    <Button className={`${styles1.servicebtn2} me-3`}>
                      Proceed
                    </Button>
                  </div>
                </div>
              ) : selected == "split" ? (
                <div>
                  <Col md={4} className="px-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="theme14 f13">
                        Amount Recieved
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="25000"
                        className={`${styles1.services_input}`}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4} className="px-3">
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                      <Form.Label className="theme14 f13">
                        Credit/Debit Card /UPI
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="25000"
                        className={`${styles1.services_input}`}
                      />
                    </Form.Group>
                  </Col>
                  <div className="f12 text-left ms-3 mb-3 pb-5">
                    Credit/Debit Card /UPI Device Connected
                    <Image src={Logo1}></Image>
                  </div>

                  <div
                    className={`d-flex justify-content-end mt-4 pt-3 ${styles2.bdr_tp}`}
                  >
                    <Link href="#" className="me-5 theme9 mt-2 f13">
                      Cancel
                    </Link>
                    <Button className={`${styles1.servicebtn2} me-3`}>
                      Proceed
                    </Button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div>
              <div className="d-grid align-items-center justify-content-center mt-5 mb-5 pb-5">
                <Image src={Logo2} alt="" className="ms-5 px-2 mb-3 mt-4" />
                <div className="f15 text-center">Payment Success</div>
                <div className="f15 text-center">Amount received ₹ 2242/- </div>
              </div>
              <div className={`d-flex  mt-4 pt-3 ${styles2.bdr_tp}`}>
                <Col md={3}></Col>
                <Col md={9} className={`justify-content-end  `}>
                  <Button className={`${styles2.addbtn5} me-3 f13`}>
                    Download PDF
                  </Button>
                  <Button
                    className={`${styles2.addbtn5} me-3 f13 mt-2 mt-md-0`}
                  >
                    Send Whatsapp Invoice
                  </Button>
                  <Button
                    className={`${styles2.addbtn5} me-3 f13 mt-2 mt-md-0`}
                  >
                    Send SMS Link Invoice
                  </Button>
                  <Button
                    className={`${styles1.servicebtn2} me-3 mt-2 mt-md-0`}
                  >
                    Print
                  </Button>
                </Col>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Payment_modal;
