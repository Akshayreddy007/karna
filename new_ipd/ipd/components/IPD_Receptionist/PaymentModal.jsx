import React, { useState, useEffect } from "react";
import styles1 from "../../styles/Services.module.scss";
import styles2 from "../../styles/Labdashboard.module.scss";
import { Form, Row, Col, Button, Card, Modal, Table } from "react-bootstrap";
import Logo1 from "../../public/images/Check-circle.svg";
import Logo2 from "../../public/images/Check-circle1.svg";
import { useRecoilState } from "recoil";
import { paymentbilling } from "./recoilAtom";
import { appointmentTable } from "../../shared/appointments";
import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import validator from "validator";
import { ADD_WALLET } from "../../graphql/mutations";
import { GET_IP_PATIENTS } from "../../graphql/queries";
import SuccessMessage, { showMessage } from "../alertmessages/Alertmessages";

const PaymentModal = (props) => {
  const [setter, setSetter] = useState("yes");
  const [tpay, TotalPay] = useState(0);
  const [selected, setSelected] = useState("cash");
  const [form1, setForm1] = useRecoilState(appointmentTable);
  const [form, setForm] = useRecoilState(paymentbilling);

  const changeHandler = (e) => {
    setSelected(e.target.value);
  };

  let Astatus = "";
  if (props && props.Astatus) {
    Astatus = props.Astatus;
  }

  let ipid = "";
  if (props.IpId) {
    ipid = props.IpId;
  }

  let ipAppointmentid = "";
  if (props.ipAppointmentId) {
    console.log(props.ipAppointmentId, "Wall ipap");
    ipAppointmentid = props.ipAppointmentId;
  }

  const { data: data1, refetch: refetch1 } = useQuery(GET_IP_PATIENTS, {
    variables: { ipAppointmentId: ipAppointmentid },
    fetchPolicy: "network-only",
  });
  const [addWallet] = useMutation(ADD_WALLET, {
    onCompleted: () => {
      refetch1();
      props.refetch();
      props.refetch9()
    },
    onError: (err) => {
      if (err.message == "Request failed with status code 422") {
        // setSubMsg("Got Continous request please try after some time");
      } else {
        // setSubMsg(err.message);
        console.log(err.message);
      }
    },
  });

  let userName = "";
  if (props.userName) {
    console.log(props.userName, "Wall userna");
    userName = props.userName;
  }

  //wallent amount
  let BalanceAmount = "";
  if (props.WalBalance) {
    BalanceAmount = props.WalBalance;
  }

  const onCancel = () => {
    props.onHide();
    setForm("");
  };

  useEffect(() => {
    if (props.show) {
      setForm({
        ...form,
        onlinePay: 0,
        cash: 0,
        paymentMode: 2,
        submitError: "",
      });
      setSetter("yes");
    }
  }, [props.test, props.show]);

  let tAmount = "";
  if (props && props.Amount) {
    tAmount = props.Amount;
  }
  //   const cash=props.walAmount
  console.log(tAmount, "propAmount");

  const handleInputpaymentModeChnage = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let formErrors = {};
    if (validator.isEmpty(value, { ignore_whitespace: true })) {
      formErrors = {
        ...form.formErrors,
        [name]: `${name} cannot be empty`,
      };
    } else {
      formErrors = {
        ...form.formErrors,
        [name]: "",
      };
    }
    setForm({
      ...form,
      onlinePay: 0,
      cash: 0,
      [name]: value,
      formErrors: formErrors,
      submitError: "",
      formValid: true,
    });
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = parseInt(e.target.value);
    if (value) {
      setForm({ ...form, [name]: value, submitError: "" });
    } else {
      setForm({ ...form, [name]: 0, submitError: "" });
    }
  };

  const pendingAmount = Math.max(tAmount - 0, 0);

  function handleCashSubmit(e) {
    e.preventDefault();

    if (form.cash !== 0) {
      if (form.cash == pendingAmount) {
        addWallet({
          variables: {
            ipId: ipid || "",
            ipAppointmentId: ipAppointmentid || "",
            type: 0,
            username: userName || "",
            amount: parseFloat(tAmount),
            status: parseInt(0),
            onlinePay: 0,
            cash: parseInt(form.cash),
            paymentMethod: parseInt(form.paymentMode),
          },
          refetchQueries: [
            {
              query: GET_IP_PATIENTS,
              variables: {
                department: parseInt(form1.department),
                search: form1.search,
                floor: parseInt(form1.floor),
                ward: parseInt(form1.ward),
                crossConsultationAppid: 1,
              },
              fetchPolicy: "network-only",
            },
            { onCompleted: refetch1 },
          ],
          update: (cache, { data }) => {
            if (data !== undefined) {
              setForm({
                ...form,
                formValid: true,
                submitError: "Update PartialAmount successfully",
              });
              showMessage("Amount paid successfully", "success");
              setTimeout(() => {
                setSetter("no");
                TotalPay(parseInt(form.cash) + parseInt(form.onlinePay));
              }, 200);
              props.handleClose;
            }
          },
        });
      } else {
        setForm({
          ...form,
          submitError: "Amount must be equal to Total Bill",
        });
      }
    } else {
      setForm({ ...form, submitError: "Paying amount cannot be zero" });
    }
  }

  function handleOnlineSubmit(e) {
    e.preventDefault();

    if (form.onlinePay !== 0) {
      if (form.onlinePay == pendingAmount) {
        addWallet({
          variables: {
            ipId: ipid || "",
            ipAppointmentId: ipAppointmentid || "",
            type: 0,
            username: userName || "",
            amount: parseFloat(tAmount),
            status: 0,
            onlinePay: parseInt(form.onlinePay),
            cash: 0,
            paymentMethod: parseInt(form.paymentMode),
          },
          refetchQueries: [
            {
              query: GET_IP_PATIENTS,
              variables: {
                department: parseInt(form1.department),
                search: form1.search,
                floor: parseInt(form1.floor),
                ward: parseInt(form1.ward),
                crossConsultationAppid: 1,
              },
              fetchPolicy: "network-only",
            },
          ],
          update: (cache, { data }) => {
            if (data !== undefined) {
              setForm({
                ...form,
                formValid: true,
                submitError: "Update PartialAmount successfully",
              });
              showMessage("Amount paid successfully", "success");
              setTimeout(() => {
                setSetter("no");
                TotalPay(parseInt(form.cash) + parseInt(form.onlinePay));
              }, 200);
              props.handleClose;
            }
          },
        });
      } else {
        setForm({
          ...form,
          submitError: "Amount must be equal to Total Bill",
        });
      }
    } else {
      setForm({ ...form, submitError: "Paying amount cannot be zero" });
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (form.cash + form.onlinePay !== 0) {
      if (form.cash + form.onlinePay == pendingAmount) {
        addWallet({
          variables: {
            ipId: ipid || "",
            ipAppointmentId: ipAppointmentid || "",
            type: 0,
            username: userName || "",
            amount: parseFloat(tAmount),
            status: parseInt(0),
            onlinePay: parseInt(form.onlinePay),
            cash: parseInt(form.cash),
            paymentMethod: parseInt(form.paymentMode),
          },
          refetchQueries: [
            {
              query: GET_IP_PATIENTS,
              variables: {
                department: parseInt(form1.department),
                search: form1.search,
                floor: parseInt(form1.floor),
                ward: parseInt(form1.ward),
                crossConsultationAppid: 1,
              },
              fetchPolicy: "network-only",
            },
          ],
          update: (cache, { data }) => {
            if (data !== undefined) {
              setForm({
                ...form,
                formValid: true,
                submitError: "Update PartialAmount successfully",
              });
              showMessage("Amount paid successfully", "success");
              setTimeout(() => {
                setSetter("no");
                TotalPay(parseInt(form.cash) + parseInt(form.onlinePay));
              }, 200);
            }
          },
        });
      } else {
        setForm({
          ...form,
          submitError: "Amount must be equal to Total Bill",
        });
      }
    } else {
      setForm({ ...form, submitError: "Paying amount cannot be zero" });
    }
  }

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
          {setter == "yes" ? (
            <div>
              {form.submitError == "Update PartialAmount successfully" ? (
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
                        label="Cash"
                        name="paymentMode"
                        className="f13"
                        checked={form.paymentMode == "2" ? true : false}
                        value="2"
                        onChange={handleInputpaymentModeChnage}
                      />
                    </div>
                    <div className="me-5">
                      <Form.Check
                        type="radio"
                        id="id"
                        label="Card/UPI"
                        name="paymentMode"
                        className="f13"
                        checked={form.paymentMode == "3" ? true : false}
                        value="3"
                        onChange={handleInputpaymentModeChnage}
                      />
                    </div>
                    <div className="me-3">
                      <Form.Check
                        type="radio"
                        id="id"
                        label="Split"
                        name="paymentMode"
                        className="f13 "
                        checked={form.paymentMode == "4" ? true : false}
                        value="4"
                        onChange={handleInputpaymentModeChnage}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles2.paybg} justify-content-end col-md-3`}
                >
                  <div className="text-white">Total Bill</div>
                  <div className="text-white">{`${tAmount}/-`}</div>
                </div>
              </div>
              {form.paymentMode == "2" ? (
                <div>
                  <Col md={4} className="px-3">
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                      <Form.Label className="theme14 f13">
                        Amount Recieved
                      </Form.Label>
                      <Form.Control
                        type="text"
                        onChange={handleInputChange}
                        name="cash"
                        value={form.cash}
                        placeholder="Enter Amount"
                        className={`${styles1.services_input}`}
                      />
                    </Form.Group>
                  </Col>
                  {/* <Row className="px-4">
                    <Col md={7}></Col>
                    <Col md={5} className={styles2.bg23}>
                      <div className="f12 text-center">
                        Amount received - Bill amount = Change to return
                      </div>
                      <div className="font-weight-500 text-end f21 mt-3">
                        <i className="fal fa-rupee-sign"></i> 258/-
                      </div>
                    </Col>
                  </Row> */}

                  <div
                    className={`d-flex justify-content-end mt-4 pt-3 ${styles2.bdr_tp}`}
                  >
                    <Link
                      href="#"
                      className="me-5 theme9 mt-2 f13"
                      onClick={onCancel}
                    >
                      Cancel
                    </Link>
                    <Button
                      className={`${styles1.servicebtn2} me-3`}
                      onClick={handleCashSubmit}
                    >
                      Mark as Paid
                    </Button>
                  </div>
                </div>
              ) : form.paymentMode == "3" ? (
                <div>
                  <div className="f12 text-left ms-3 mb-0 pb-5">
                    Credit/Debit Card /UPI Device Connected
                    <Image
                      src={Logo1}
                      alt=""
                      width={20}
                      height={20}
                      className="ps-2"
                    ></Image>
                  </div>
                  <Col md={4} className="px-3">
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                      <Form.Label className="theme14 f13">
                        Amount Recieved
                      </Form.Label>
                      <Form.Control
                        type="text"
                        onChange={handleInputChange}
                        name="onlinePay"
                        value={form.onlinePay.toString()}
                        placeholder="25000"
                        className={`${styles1.services_input}`}
                      />
                    </Form.Group>
                  </Col>
                  <div
                    className={`d-flex justify-content-end mt-4 pt-3 ${styles2.bdr_tp}`}
                  >
                    <Link href="#" className="me-5 theme9 mt-2 f13">
                      Cancel
                    </Link>
                    <Button
                      className={`${styles1.servicebtn2} me-3`}
                      onClick={handleOnlineSubmit}
                    >
                      Proceed
                    </Button>
                  </div>
                </div>
              ) : form.paymentMode == "4" ? (
                <div>
                  <Col md={4} className="px-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="theme14 f13">
                        Amount Received
                      </Form.Label>
                      <Form.Control
                        type="text"
                        onChange={handleInputChange}
                        name="cash"
                        value={form.cash.toString()} // Convert to string
                        placeholder="Enter Amount"
                        className={`${styles1.services_input}`}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4} className="px-3">
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                      <Form.Label className="theme14 f13">
                        Credit/Debit Card / UPI
                      </Form.Label>
                      <Form.Control
                        type="text"
                        onChange={handleInputChange}
                        name="onlinePay"
                        value={form.onlinePay.toString()}
                        placeholder="25000"
                        className={`${styles1.services_input}`}
                      />
                    </Form.Group>
                  </Col>

                  <div className="f12 text-left ms-3 mb-3 pb-5">
                    Credit/Debit Card /UPI Device Connected
                    <Image
                      src={Logo1}
                      width={20}
                      height={20}
                      className="ps-2"
                    ></Image>
                  </div>

                  <div
                    className={`d-flex justify-content-end mt-4 pt-3 ${styles2.bdr_tp}`}
                  >
                    <Link href="#" className="me-5 theme9 mt-2 f13">
                      Cancel
                    </Link>
                    <Button
                      className={`${styles1.servicebtn2} me-3`}
                      onClick={handleFormSubmit}
                    >
                      Proceed
                    </Button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : setter == "no" ? (
            <div>
              <div className="d-grid align-items-center justify-content-center mt-5 mb-5 pb-5">
                <Image src={Logo2} alt="" className="ms-5 px-2 mb-3 mt-4" />
                <div className="f15 text-center">Payment Success</div>
                <div className="f15 text-center">Amount received {tpay}/- </div>
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
