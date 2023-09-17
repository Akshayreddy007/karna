import React, { useState, useEffect } from "react";
import styles1 from "../../styles/Services.module.scss";
import styles2 from "../../styles/Labdashboard.module.scss";
import { Form, Row, Col, Button, Card, Modal, Table } from "react-bootstrap";
import Logo1 from "../../public/images/Check-circle.svg";
import Logo2 from "../../public/images/Check-circle1.svg";
import { useRecoilState } from "recoil";
import { addipservices } from '../../shared/addipservices'
import Link from "next/link";
import Image from "next/image";

const PaymentModal = (props) => {
    const [form, setForm] = useRecoilState(addipservices)
    //handle Change for PaymentModes
    const TotalpayingAmount = props.grandtotal || 0;
    const TotalPaidAmount = parseFloat(form.onlinePay) || 0 + parseFloat(form.cash) || 0

    const handlepaymentModeChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setForm((prevForm) => ({
            ...prevForm,
            onlinePay: "",
            cash: "",
            [name]: value,
            submitError: "",
            formValid: true
        }));
    };

    const handleInputpaymentModeChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;


        if (value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
                submitError: "",
                formValid: true
            }));
        }
        else {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value.slice(0, -1),
                submitError: "",
                formValid: true
            }));
        }

    };


    return (
        <React.Fragment>
            <Modal
                size="lg"
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
                    {!props.showmessage ? (
                        <div>
                            {form.submitError == "Bill Pad successfully" ? (
                                <span className="text-sucess">{form.submitError}</span>
                            ) : (
                                <span className="text-danger">{form.submitError}</span>
                            )}
                            <div className="d-md-flex mt-3 px-3">
                                <div className="col-md-9">
                                    <div className="theme12 f12">Mode</div>
                                    <div className="d-flex mt-3" id="form1">
                                        <div className="me-5">
                                            <Form.Check
                                                type="radio"
                                                id="id"
                                                label="Online"
                                                name="paymentMethod"
                                                className="f13"
                                                checked={form.paymentMethod == "1" ? true : false}
                                                value="1"
                                                onChange={handlepaymentModeChange}
                                            />
                                        </div>
                                        <div className="me-5">
                                            <Form.Check
                                                type="radio"
                                                id="id"
                                                label="Cash"
                                                name="paymentMethod"
                                                className="f13"
                                                checked={form.paymentMethod == "2" ? true : false}
                                                value="2"
                                                onChange={handlepaymentModeChange}
                                            />
                                        </div>
                                        <div className="me-5">
                                            <Form.Check
                                                type="radio"
                                                id="id"
                                                label="Card"
                                                name="paymentMethod"
                                                className="f13"
                                                checked={form.paymentMethod == "3" ? true : false}
                                                value="3"
                                                onChange={handlepaymentModeChange}
                                            />
                                        </div>
                                        <div className="me-3">
                                            <Form.Check
                                                type="radio"
                                                id="id"
                                                label="Wallet"
                                                name="paymentMethod"
                                                className="f13 "
                                                checked={form.paymentMethod == "4" ? true : false}
                                                value="4"
                                                onChange={handlepaymentModeChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`${styles2.paybg} justify-content-end col-md-3`}
                                >
                                    <div className="text-white">Total Bill</div>
                                    <div className="text-white">{`${TotalpayingAmount}/-`}</div>
                                </div>
                            </div>
                            {form.paymentMethod == "2" ? (
                                <Col md={4} className="px-3">
                                    <Form.Group className="mb-5" controlId="formBasicEmail">
                                        <Form.Label className="theme14 f13">
                                            Amount Recieved
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={handleInputpaymentModeChange}
                                            name="cash"
                                            value={form.cash}
                                            placeholder="Enter Amount"
                                            className={`${styles1.services_input}`}
                                        />
                                    </Form.Group>
                                </Col>
                            ) : form.paymentMethod == "3" || form.paymentMethod == "1" ? (
                                <div>
                                    <Col md={4} className="px-3">
                                        <Form.Group className="mb-5" controlId="formBasicEmail">
                                            <Form.Label className="theme14 f13">
                                                Amount Recieved
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                onChange={handleInputpaymentModeChange}
                                                name="onlinePay"
                                                value={form.onlinePay}
                                                placeholder="Enter Amount"
                                                className={`${styles1.services_input}`}
                                            />
                                        </Form.Group>
                                    </Col>
                                </div>
                            ) : (
                                <>
                                    {form.paymentMethod == 4 && <div className="my-2 mx-4 text-bold">Money Debit from Wallet</div>}
                                </>
                            )}
                            <div
                                className={`d-flex justify-content-end mt-4 pt-3 ${styles2.bdr_tp}`}
                            >
                                <Link href="#" className="me-5 theme9 mt-2 f13">
                                    Cancel
                                </Link>
                                <Button
                                    className={`${styles1.servicebtn2} me-3`}
                                    onClick={props.handleIpInvoice}
                                >
                                    Proceed
                                </Button>
                            </div>
                        </div>
                    ) : props.showmessage ? (
                        <div>
                            <div className="d-grid align-items-center justify-content-center mt-5 mb-5 pb-5">
                                <Image src={Logo2} alt="" className="ms-5 px-2 mb-3 mt-4" />
                                <div className="f15 text-center">Payment Success</div>
                                {TotalPaidAmount > 0 ? <div className="f15 text-center">Amount received {TotalPaidAmount}/- </div> : ""}
                            </div>
                            <div className={`d-flex  mt-4 pt-3 ${styles2.bdr_tp}`}>
                                <Col md={1}></Col>
                                <Col md={11} className={`justify-content-end  `}>
                                    <Button className={`${styles2.addbtn5} me-3 f13`}>
                                        Download PDF
                                    </Button>
                                    {/* <Button
                    className={`${styles2.addbtn5} me-3 f13 mt-2 mt-md-0`}
                  >
                    Send Whatsapp Invoice
                  </Button>
                  <Button
                    className={`${styles2.addbtn5} me-3 f13 mt-2 mt-md-0`}
                  >
                    Send SMS Link Invoice
                  </Button> */}
                                    <Button
                                        className={`${styles1.servicebtn2} me-3 mt-2 mt-md-0`}
                                    >
                                        Print
                                    </Button>
                                </Col>
                            </div>
                        </div>
                    ) : null}
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default PaymentModal;
