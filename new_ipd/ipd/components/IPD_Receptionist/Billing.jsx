import React, { useState, useEffect } from "react";
import { Col, Form, Button, Row, Table, Nav, InputGroup } from "react-bootstrap";
import styles from "../../styles/IPD_Receptionist/Billing.module.scss";
import styles1 from '../../styles/IPD_Receptionist/Appointments.module.scss';
import { useMutation, useQuery } from "@apollo/client";
import { GET_ADMIN_USERS, GET_PHARAMA_DISCOUNT, GET_IP_INVOICES } from "../../graphql/queries";
import { ADD_FINAL_BILL } from '../../graphql/mutations';
import TypeheadAutoSuggestions from './TypeheadAutoSuggestions';
import { useRecoilState } from "recoil";
import { addipservices } from '../../shared/addipservices'
import moment from "moment";
import Router from "next/router";
import SuccessMessage, { showMessage } from '../alertmessages/Alertmessages'

const Billing = () => {

  const [form, setForm] = useRecoilState(addipservices)
  // Retrieve user data from localStorage
  let userData = {};
  let globalUserHip = 0;

  if (typeof window !== "undefined") {
    const storedUserData = localStorage.getItem("user");
    const storedGlobalUserHip = localStorage.getItem("userHip");

    if (storedUserData) {
      try {
        userData = JSON.parse(storedUserData);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }

    if (storedGlobalUserHip) {
      try {
        globalUserHip = JSON.parse(storedGlobalUserHip);
      } catch (error) {
        console.error("Error parsing global user hip from localStorage:", error);
      }
    }
  }

  // Extract the username from userData if it exists
  let username = "";
  if (userData && userData.username) {
    username = userData.username;
  }

  // localStorage Data from Table
  let storedData = "";
  if (localStorage.getItem("item")) {
    storedData = localStorage.getItem("item")
  }

  let parsedData = {}
  if (storedData) {
    parsedData = JSON.parse(storedData);
  }

  const { loading, data } = useQuery(GET_ADMIN_USERS, {
    variables: {
      username: username,
      hip: globalUserHip
    },
  });

  let RoleDiscount = 0;
  if (data && data.getAdminUsers) {
    if (data.getAdminUsers.length > 0) {
      if (data.getAdminUsers[0].role_discount) {
        RoleDiscount = data.getAdminUsers[0].role_discount
      }
    }
  }


  // mutation final bill

  const [Addfinalbill, { loading: loading4 }] = useMutation(ADD_FINAL_BILL)


  const pdetails = parsedData || {}

  let appointmentId = "";
  let Name = "";
  let Age = "";
  let Gender = "";
  let Mobile = "";
  let AttenderName = "";
  let AttenderMobile = "";
  let DisAppointment = "";
  let Status = "";
  let TimeStampDate = "";
  let IpId = ""
  let DoctorName = ""
  let TotalWalletAmount = 0;
  let walletStatus = 0;
  let DoctorUsername = "";
  let UHID = "";
  let finalbillstatus = 0;

  if (pdetails && pdetails.ip_appointment_id) {
    appointmentId = pdetails.ip_appointment_id;

    const { PatientData, attender_name, attender_mobile, display_ip_appointment_id, status, timestamp, IpRecord, doctor_name, total_wallet_amount, doctor_username, uhid, assigndoctor, resheduled, final_bill_status } = pdetails;

    if (PatientData) {
      Name = PatientData.name || "";
      Age = PatientData.age || "";
      Gender = PatientData.gender === 1 ? 'M' : PatientData.gender === 2 ? 'O' : PatientData.gender === 0 ? 'F' : "";
      Mobile = PatientData.mobile || "";
    }

    UHID = uhid || ""

    if (IpRecord && IpRecord.length > 0) {
      IpId = IpRecord[0].ip_id
    }

    let arr = assigndoctor.find((each) => each.main_doctor)
    if (arr) {
      DoctorName = arr.doctor_name || "NA"
    }

    if (doctor_username) {
      DoctorUsername = doctor_username
    }

    finalbillstatus = final_bill_status || 0

    if (status === 0 && resheduled) {
      Status = "Rescheduled"
    } else if (status === 0 && !resheduled) {
      Status = "New"
    } else if (status === 1) {
      Status = "Checked-In"
    } else if (status === 2) {
      Status = "Admitted"
    } else if (status === 3) {
      Status = "Discharged"
    } else if (status === 4) {
      Status = "Cancelled"
    }

    AttenderName = attender_name || "";
    AttenderMobile = attender_mobile || "";
    DisAppointment = display_ip_appointment_id || "";
    TimeStampDate = timestamp

    if (total_wallet_amount > 0) {
      TotalWalletAmount = total_wallet_amount
      walletStatus = 0;
    } else if (total_wallet_amount < 0) {
      TotalWalletAmount = total_wallet_amount
      walletStatus = 1;
    }
  }

  const { data: data3, loading: loading3, error: error3 } = useQuery(GET_IP_INVOICES, {
    variables: {
      invoiceId: "",
      ipAppointmentId: appointmentId
    }
  })

  let getIpInvoiceDetails = [];
  if (data3 && data3.getIpInvoice) {
    getIpInvoiceDetails = data3.getIpInvoice;
  }


  // AllInvoicesDetails
  let AllInvoicesDetails = [];
  getIpInvoiceDetails.forEach((each) => {
    if (each.invoice_details && each.invoice_details.length > 0) {
      AllInvoicesDetails.push(...each.invoice_details);
    }
  });

  let AllInvoicesPaidDetails = [];
  getIpInvoiceDetails.forEach((each) => {
    if (each.partial_pay && each.partial_pay.length > 0) {
      AllInvoicesPaidDetails.push(...each.partial_pay);
    }
  });



  useEffect(() => {
    if (data3 && data3.getIpInvoice) {
      let transactionDetails = [];
      data3.getIpInvoice.map((each) => {
        let transArray = each.invoice_details;
        if (each.invoice_details && each.invoice_details.length) {
          if (each.payment_status == 1) {
            transArray = each.invoice_details.map(e => {
              return { ...e, amountpaid: e.amount, pendingamount: 0, sertype: each.type }
            });
          }
          else {
            transArray = each.invoice_details.map(e => {
              return { ...e, amountpaid: 0, pendingamount: e.amount, sertype: each.type }
            });

          }
        }
        transactionDetails = [...transactionDetails, ...transArray]
      })
      setForm({
        ...form, servicedetails: transactionDetails
      });
    }
  }, [data3]);

  //calculat total serviceamount
  const totalServicePrice = AllInvoicesDetails.reduce((total, invoice) => {
    return total + invoice.unit_price;
  }, 0);

  // Calculate the total price from all invoices details
  const totalInvoicePrice = AllInvoicesDetails.reduce((total, invoice) => {
    return total + invoice.amount;
  }, 0);

  const { totalDiscountedAmount, totalDiscountAmount, totalDiscountAmountMax } = AllInvoicesDetails.reduce(
    (acc, { price, discount }) => {
      const discountedAmount = price - (price * discount) / 100;
      const discountAmount = (price * discount) / 100;
      const TotalDiscountAmount = (price * RoleDiscount) / 100;
      return {
        totalDiscountedAmount: acc.totalDiscountedAmount + discountedAmount,
        totalDiscountAmount: acc.totalDiscountAmount + discountAmount,
        totalDiscountAmountMax: acc.totalDiscountAmountMax + TotalDiscountAmount
      };
    },
    { totalDiscountedAmount: 0, totalDiscountAmount: 0, totalDiscountAmountMax: 0 }
  );

  let totalDiscountRemaining = 0;

  let finalAmount1 = 0
  const calculateRemainingDiscount = () => {
    form.servicedetails.forEach((item) => {
      const discountedAmount =
        item.price - (item.price * item.discount) / 100;
      const finalAmount =
        discountedAmount + (discountedAmount * item.gst) / 100;
      finalAmount1 += finalAmount;
    });
  };

  let finalAmount2 = 0;
  const calculateRemainingDiscount1 = () => {
    form.servicedetails.forEach((item) => {
      let discountedAmount1 = [];
      if (item.sertype == 1) {
        if (item.discount > RoleDiscount) {
          discountedAmount1 = item.price - (item.price * item.discount) / 100;
        } else {
          discountedAmount1 = item.price - (item.price * RoleDiscount) / 100;
        }
      } else {
        discountedAmount1 = item.price - (item.price * item.max_discount) / 100;
      }
      const finalAmount =
        discountedAmount1 + (discountedAmount1 * item.gst) / 100;
      finalAmount2 += finalAmount;
    });
  };

  // Call the function here to calculate the finalAmount1 and finalAmount2
  calculateRemainingDiscount();
  calculateRemainingDiscount1();

  // console.log(finalAmount1, finalAmount2, form.servicedetails, "abc");
  totalDiscountRemaining = parseFloat(finalAmount1 || 0) - parseFloat(finalAmount2 || 0)
  // Round the final totalDiscountedAmount and totalDiscountAmount to two decimal places
  const roundedTotalDiscountAmount = parseFloat(totalDiscountAmount.toFixed(2));

  // Calculate the total GST amount from all invoices details
  const totalGSTAmount = AllInvoicesDetails.reduce((total, { price, discount, gst }) => {
    const discountedAmount = price - (price * discount) / 100;
    const gstAmount = parseFloat((discountedAmount * gst / 100));
    return total + gstAmount;
  }, 0);

  // Round the final totalGstAmount to two decimal places
  const roundedGstAmount = parseFloat(totalGSTAmount.toFixed(2));

  // Calculate the sum of the price from all invoices with partial payments

  const totalamount = form.servicedetails.reduce((total, invoice) => {
    return total + invoice.amount;
  }, 0);

  const totalPartialPaidPrice = form.servicedetails.reduce((total, invoice) => {
    return total + invoice.amountpaid;
  }, 0);


  const totalPendingPrice = form.servicedetails.reduce((total, invoice) => {
    return total + invoice.pendingamount;
  }, 0);

  // Total Pening Amount
  const totalPendingAmount = totalamount - totalPartialPaidPrice;
  const TotalPayAmount = totalPendingAmount - form.discount || 0
  const TotalDiscounted = (totalPendingAmount - TotalPayAmount)

  //diable payNow function
  // Check conditions to determine if the button should be disabled
  const isButtonDisabled = TotalPayAmount > TotalWalletAmount;


  let totaldiscount = totalDiscountRemaining;
  if (totalPendingAmount < totalDiscountRemaining) {
    totaldiscount = totalPendingAmount
  }

  // handleChnage for Discount
  const handleDiscountChange = (event) => {
    const { name, value } = event.target;
    let floatValue = value;

    if (value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) {
      if (floatValue == totaldiscount) {
        floatValue = totaldiscount
      } else if (floatValue > totaldiscount) {
        floatValue = floatValue.slice(0, -1)
      }
    }


    const leadingZeroMap = {
      "01": 1,
      "02": 2,
      "03": 3,
      "04": 4,
      "05": 5,
      "06": 6,
      "07": 7,
      "08": 8,
      "09": 9,
    };

    // Check for specific cases with leading zeros
    if (leadingZeroMap[floatValue]) {
      floatValue = leadingZeroMap[floatValue];
    }

    let decimalvalue = /^\d+(\.\d{0,2})?$/.test(floatValue) ? floatValue : floatValue.slice(0, -1)

    setForm({ ...form, [name]: decimalvalue || 0, submitError: "" });

  };

  // handleChange for Remarks
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form, [name]: value || "",
      submitError: "",
      formErrors: {
        ...form.formErrors,
        [name]: ""
      }
    })
  }


  // invoice mutation submit
  const handleIpInvoice = async () => {
    let formValid = true;
    if (!form.remarks) {
      formValid = false;
      setForm({
        ...form, formErrors: {
          ...form.formErrors, remarks: "this filed is mandatory"
        }
      })
    }

    try {
      if (formValid) {
        const { data } = await Addfinalbill({
          variables: {
            ipAppointmentId: appointmentId,
            remarks: form.remarks,
            discount: parseFloat(form.discount) || 0
          },
        });
        if (data && data.addfinalbill) {
          setForm((prevForm) => ({
            ...prevForm,
            submitError: "Bill Paid successfully",
          }));
          showMessage("Bill Paid successfully", "success");
          setTimeout(() => {
            Router.push("/ipr_appointments")
          }, [2000])
        } else {
          setForm((prevForm) => ({
            ...prevForm,
            submitError: "Something went wrong. Please try again",
          }));
        }
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          submitError: "Please fill all mandatory fields",
        }));
      }
    } catch (error) {
      if (error.message === "Request failed with status code 422") {
        setForm((prevForm) => ({
          ...prevForm,
          submitError: "Too many continuous requests. Please try again later",
        }));
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          submitError: error.message,
        }));
      }
    }
  };

  const parsePercentage = (percentValue) => parseFloat(percentValue) / 100;
  const itemDetails = form.servicedetails.reduce((acc, item) => {
    const existingItem = acc.find((el) => el.type === item.type && el.type !== "bed");
    const discount = parsePercentage(item.discount);
    const gst = parsePercentage(item.gst);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.price += item.price;
      existingItem.amount += item.amount;
      existingItem.totalDiscount += discount;
      existingItem.gst += gst;
      existingItem.amountpaid += item.amountpaid || 0
      existingItem.pendingamount += item.pendingamount || 0
      existingItem.invoice_id += item.invoice_id
      existingItem.unit_price += item.unit_price || 0
      existingItem.actualGst += item.gst || 0

    } else {
      acc.push({
        id: item.id,
        service_name: item.service_name,
        quantity: item.quantity,
        price: item.price,
        amount: item.amount,
        totalDiscount: discount,
        type: item.type,
        gst,
        amountpaid: item.amountpaid || 0,
        pendingamount: item.pendingamount || 0,
        invoice_id: item.invoice_id,
        unit_price: item.unit_price || 0,
        actualGst: item.gst || 0,
        sertype: item.sertype
      });
    }
    return acc;
  }, []);

  itemDetails.forEach((item) => {
    item.discount = item.totalDiscount / item.quantity;
    item.discountAmount = item.amount * item.discount;
    item.totalAfterDiscount = item.amount - item.discountAmount;
    item.gstAmount = item.totalAfterDiscount * item.gst;
    item.totalAmount = item.totalAfterDiscount + item.gstAmount;
    item.eachdiscountAmount = (item.price * (item.discount))
  });

  console.log(itemDetails, "gg")
  return (
    <React.Fragment>
      {/* Allert Messges */}
      <SuccessMessage />
      <div className={styles.pt_6}>
        <div
          className={`${styles.bg3} d-md-flex pt-4 pb-4 align-items-center px-4 px-xl-5 `}>
          <Col md={6} xl={6} lg={6} sm={12} xs={12}>
            <div className="d-flex">
              <div className="pe-4">
                <Nav.Link href="/ipr_appointments">
                  <i className="fal fa-arrow-left"></i>
                </Nav.Link>
              </div>
              <div className={`${styles.text} ${styles1.font} f18`}>
                Final Billing</div>
            </div>
          </Col>
          <Col md={6} xl={6} lg={6} sm={12} xs={12} className="text-md-end">
            <div className="d-md-flex justify-content-end">
              <div className={styles1.font}>
                {/* Invoice No: */}
                <span>
                  {/* <strong> ABC458978 </strong> */}
                </span>
              </div>

              <div className={`ps-md-5 ${styles1.font}`}>
                {/* Date: */}
                <span>
                  {/* <strong> 2 Jan 2023 </strong> */}
                </span>
              </div>
            </div>
          </Col>
        </div>
        <div className="bg-white d-flex">
          <Col md={1} xl={1} lg={1} className={`${styles.minht} ${styles.w_5}`}>
          </Col>
          <Col md={11} xl={11} lg={11} xs={12} className={styles.w_95}>
            <div className={`d-md-flex ${styles.bdtopbtm}`}>
              <Col md={10} xs={12}>
                <Row className="px-2 py-3 py-md-0 px-md-3">
                  <Col xl={1} lg={3} md={4} sm={6} xs={6} className="mb-md-3 mb-2 mt-3">
                    <div className={`theme12 f12 font-weight-300 ${styles1.font}`}>UHID</div>
                    <div className={`f14 ${styles1.font}`}>{UHID}</div>
                  </Col>
                  <Col xl={2} lg={3} md={4} sm={6} xs={6} className="mb-md-3 mb-2 mt-3">
                    <div className={`theme12 f12 font-weight-300 ${styles1.font}`}>NAME</div>
                    <div className={`f14 ${styles1.font}`}>{Name}</div>
                  </Col>
                  <Col xl={2} lg={3} md={4} sm={6} xs={6} className="mb-md-3 mb-2 mt-3">
                    <div className={`theme12 f12 font-weight-300 ${styles1.font}`}>MOBILE NO</div>
                    <div className={`f14 ${styles1.font}`}>+91 {Mobile}</div>
                  </Col>
                  <Col xl={2} lg={3} md={4} sm={6} xs={6} className="mb-md-3 mb-2 mt-3">
                    <div className={`theme12 f12 font-weight-300 ${styles1.font}`}>CHIEF DOCTOR</div>
                    <div className={`f14 ${styles1.font}`}>Dr {DoctorName}</div>
                  </Col>
                  <Col xl={2} lg={3} md={4} sm={6} xs={6} className="mb-md-3 mb-2 mt-3">
                    <div className={`theme12 f12 font-weight-300 ${styles1.font}`}>ADMISN NO</div>
                    <div className={`f14 ${styles.font}`}>{DisAppointment}</div>
                  </Col>
                  <Col xl={2} lg={3} md={4} sm={6} xs={6} className="mb-md-3 mb-2 mt-3">
                    <div className={`theme12 f12 font-weight-300 ${styles1.font}`}>DATE & TIME</div>
                    <div className={`f14 ${styles.font}`}> {moment.unix(TimeStampDate).format("Do-MMM-YY hh:mm a")}</div>
                  </Col>
                  <Col xl={1} lg={3} md={4} sm={6} xs={6} className="mb-md-3 mb-2 mt-3">
                    <div className={`theme12 f12 font-weight-300 ${styles1.font}`}>STATUS</div>
                    <div className={`${Status === "Cancelled" ? styles.amount : styles.admitted} f14 ${styles1.font}`}>{Status}</div>
                  </Col>
                </Row>
              </Col>
              <Col md={2} xs={12} className={`${styles.bg2} ${styles1.font} d-lg-flex align-items-center justify-content-center  `}>
                <div className="pt-md-5 pt-lg-0 pt-xl-0 pt-sm-2 px-xs-3 px-xl-0 mx-2">Wallet Bal: </div>
                <div className={`${walletStatus ? styles.amount : styles.admitted} px-xs-3 `}><i className="fal fa-rupee ps-2"></i>{TotalWalletAmount}/-</div>
              </Col>
            </div>
            {form.servicedetails.length > 0 && !loading &&
              <React.Fragment>
                {/* {form.submitError === "Bill Paid successfully" ? <span className="text-success">{""}</span> : <span className="text-danger">{form.submitError}</span>} */}

                <Table responsive bordered className={`mb-0 bg-white ${styles1.font}`}>
                  <thead>
                    <tr>
                      <th className={`${styles.boldth} ${styles1.font}`}><b>Sno</b></th>
                      {/* <th className={`${styles.boldth} ${styles1.font}`}><b>Invoice Id</b></th> */}
                      <th className={`${styles.boldth}  ${styles1.font}`}><b>Item</b></th>
                      <th className={`${styles.boldth}  ${styles1.font}`}><b>Quantity</b></th>
                      <th className={`${styles.boldth}  ${styles1.font}`}><b>Unit Price</b></th>
                      <th className={`${styles.boldth}  ${styles1.font}`}><b>Discount</b></th>
                      <th className={`${styles.boldth}  ${styles1.font}`}><b>GST</b></th>
                      <th className={`${styles.boldth}  ${styles1.font}`}><b>Amount</b></th>
                      <th className={`${styles.boldth}  ${styles1.font}`}><b>Paid Amount</b></th>
                      <th className={`${styles.boldth}  ${styles1.font}`}><b>Pending Amount</b></th>
                    </tr>
                  </thead>
                  <tbody>
                    {itemDetails.map((each, index) => {
                      const amountPending = parseFloat(each.amount || 0) - parseFloat(each.amountpaid || 0)
                      return (
                        <tr key={index}>
                          <td>
                            <span className="ps-3">{index + 1}</span>
                          </td>
                          {/* <td>
                              <span className="ps-3">{each.invoice_id}</span>
                            </td> */}
                          <td colSpan={1} className={styles.w_70}>
                            <div className="d-md-flex f15 justify-content-left mt-3">
                              <div className="col-md-10 text-start">
                                <span className="ps-3">{each.service_name} </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <td className={`${styles.w_9} f15`}>{each.quantity}</td>
                          </td>
                          <td>
                            <td className={`${styles.w_9} f15`}>{each.unit_price}</td>
                          </td>
                          <td >
                            <div>
                              <Form.Text className={`${styles.w_9} f15`}>{Math.ceil(each.eachdiscountAmount || 0)}</Form.Text>
                              {/* <Form.Text className="text-danger">{each.error}</Form.Text> */}
                            </div></td>
                          {/* <td className={`${styles.w_9} f15`}>18%</td> */}
                          <td><div className="">
                            <Form.Text className={`${styles.w_9} f15`}>
                              {each.sertype != 2 ? each.actualGst ? (each.actualGst / each.quantity).toFixed(2) : each.actualGst : each.actualGst}%
                            </Form.Text>
                          </div></td>
                          {/* <td className={`${styles.w_9} f15`}><i className="fal fa-rupee-sign"></i> 1180</td> */}
                          <td className={`${styles.w_9} f15`} ><i className="fal fa-rupee-sign"></i> {each.amount}</td>
                          <td className={`${styles.w_9} f15`} ><i className="fal fa-rupee-sign"></i> {each.amountpaid}</td>
                          <td className={`${styles.w_9} f15`} ><i className="fal fa-rupee-sign"></i> {each.pendingamount}</td>

                        </tr>
                      )
                    })}
                    <tr>
                      <td></td>
                      <td
                        className={`${styles.text_initial} text-end f18`}
                        colSpan={2}
                      >
                        <b> Total</b>
                      </td>
                      {/* <td className="f15">
                    <i className="fal fa-rupee-sign"></i> 1000
                  </td> */}
                      <td className="f15">
                        <i className="fal fa-rupee-sign"></i> {totalServicePrice}
                      </td>
                      {/* <td className="f15">
                    <i className="fal fa-rupee-sign"></i> 180
                  </td> */}
                      <td className="f15">
                        <i className="fal fa-rupee-sign"></i> {roundedTotalDiscountAmount}
                      </td>
                      <td className="f15">
                        <i className="fal fa-rupee-sign"></i> {roundedGstAmount}
                      </td>
                      <td className="f18  ">
                        <b>
                          {" "}
                          <i className="fal fa-rupee-sign"></i> {(totalInvoicePrice).toFixed(2)}
                        </b>
                      </td>
                      <td className="f18  ">
                        <b>
                          {" "}
                          <i className="fal fa-rupee-sign"></i> {(totalPartialPaidPrice).toFixed(2)}
                        </b>
                      </td>
                      <td className="f18  ">
                        <b>
                          {" "}
                          <i className="fal fa-rupee-sign"></i> {(totalPendingPrice).toFixed(2)}
                        </b>
                      </td>

                    </tr>
                  </tbody>
                </Table>
                <div className="my-2 mx-2 d-flex">
                  <Col md={6}>
                    <Form.Control as="textarea" name="remarks" value={form.remarks} onChange={handleChange} placeholder="Enter Reason/Remarks" disabled={finalbillstatus}></Form.Control>
                    <Form.Text className="text-danger">{form.formErrors.remarks}</Form.Text>
                  </Col>
                  <Col md={6} className="text-end">
                    <div className="h5 my-3">
                      Total Paid : <span className="text-primary h4">{totalPartialPaidPrice}</span>
                    </div>
                  </Col>
                </div>
              </React.Fragment>
            }

            {form.servicedetails.length > 0 && !loading ?
              <React.Fragment>
                <div className={`d-xl-flex ${styles.bdr_tb} ${styles1.font}`}>
                  <Col md={12} xl={5} xs={12} className={styles.bg22}>
                    <div className="d-flex  align-items-center py-3 px-md-1 px-3 justify-content-center">
                      <div className="theme12 me-3 f13 font-weight-600">Discount</div>
                      <span className=" me-3">
                        <Form.Control
                          type="text" name="discount" value={form.discount} onChange={handleDiscountChange}
                          className={`${styles.services_input} ${styles.border1} ${styles.w80}`}
                          disabled={finalbillstatus}
                        />
                        <Form.Text>Max {totaldiscount.toFixed(2)}</Form.Text>
                      </span>
                      <span className=" me-3 f13 theme12 mt-1 mt-md-0 font-weight-600"></span>
                      <div className=" ms-3 f13">
                        <div className="f13">Total - Discount = Final bill</div>
                        <div className="font-weight-600 f13">
                          {totalPendingAmount.toFixed(2)} - {form.discount ? form.discount : 0} = {TotalPayAmount.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={12} xl={4} xs={12} className="bg-white">
                    <div className="d-flex align-items-center py-3 px-1 justify-content-center">
                      {/* <div className="theme12 me-3 f13 font-weight-600">
                        Pay
                      </div>
                      <div className="me-3">
                        <Form.Control
                          type="text"
                          className={`${styles.services_input} ${styles.border1} ${styles.w80}`}
                        />
                      </div> */}
                    </div>
                  </Col>
                  <Col
                    md={12}
                    xl={3}
                    xs={12}
                    style={{ background: "#62B970" }}
                    className="d-flex align-items-center justify-content-center px-3 pt-2 pb-2 "
                  >
                    <div className="d-flex  align-items-center">
                      <div className="text-white  me-3 font-weight-500">
                        {" "}
                        <b> Pending Amount</b>
                      </div>
                      <div className="text-white f22 font-weight-500">
                        <b>
                          {" "}
                          <i className="fal fa-rupee-sign"></i> {TotalPayAmount.toFixed(2) + "/-"}
                        </b>
                      </div>
                    </div>
                  </Col>
                </div>
                <div className="d-lg-flex mt-0 bg-white">
                  <Col
                    md={12}
                    lg={1}
                    xl={1}
                    xs={12}
                    className={` ${styles.bdright} ${styles1.font} px-2`}
                  ></Col>
                  <Col md={12} lg={3} xl={3} xs={12} className="px-2 pt-4">
                  </Col>
                  <Col md={12} xl={8} lg={8} xs={12} className="text-end pt-4 mb-3">
                    {/* <Button className={`${styles.addbtn} me-3 f13 mt-md-0 mt-2`}>
                  Save Bill
                </Button> */}
                    <div>
                      {form.submitError === "Bill Paid successfully" ? <span className="text-success">{""}</span> : <span className="text-danger">{form.submitError}</span>}
                    </div>
                    {!finalbillstatus ?
                      <Button
                        className={`${styles.servicebtn2} me-3 mt-md-0 mt-2`}
                        onClick={handleIpInvoice}
                        disabled={isButtonDisabled}
                      >
                        {" "}
                        Pay Now
                      </Button> : ""}
                  </Col>
                </div>
              </React.Fragment> : loading3 ? (
                <div className="text-center my-5 h6">Loading details please wait...</div>) :
                <div className="text-center my-5 h6">No Billing Details Available</div>}
          </Col>
        </div>

      </div>

    </React.Fragment >
  );

}

export default Billing;
