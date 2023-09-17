import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  Modal,
  Form,
  Button,
  Col,
  Table,
  Tab,
  Nav,
  Card,
} from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/IPD_Receptionist/Appointments.module.scss";
import { appointmentTable } from "../../shared/appointments";
import { useRecoilState } from "recoil";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../walletdata";
import moment from "moment";
import PaymentModal from "./PaymentModal";
import {
  GET_WALLET_TRANSACTIONS,
  GET_IP_PATIENTS,
} from "../../graphql/queries";
import { ADD_WALLET } from "../../graphql/mutations";
import Walletdata from "../walletdata";

const Wallet = (props) => {
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
        console.error(
          "Error parsing global user hip from localStorage:",
          error
        );
      }
    }
  }

  // Extract the username from userData if it exists
  let username = "";
  if (userData && userData.username) {
    username = userData.username;
  }

  const columns = [
    {
      dataField: "DATETIME",
      text: <div className="f13">DATE/TIME</div>,
    },
    // {
    //   dataField: "SERVICE",
    //   text: <div className="f13">SERVICE</div>,
    // },
    {
      dataField: "CREATEDBY",
      text: <div className="f13">CREATEDBY</div>,
    },
    {
      dataField: "AMOUNT",
      text: <div className="f13">AMOUNT</div>,
    },
    // {
    //   dataField: "BALANCE",
    //   text: <div className="f13">BALANCE </div>,
    // },
  ];
  const [form, setForm] = useRecoilState(appointmentTable);
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(1);
  const [ishow, setIshow] = useState(true);
  const [Amount, setAmount] = useState("");
  const [selectOpt, setSelectOpt] = useState();
  const [Astatus, setAStatus] = useState();
  const [refAmount, setRefAmount] = useState();
  const [transData, setTransData] = useState([]);
  const [err, setErr] = useState("");
  const [Rerr, setRerr] = useState("");
  const [afterRef, setAfterRef] = useState([]);
  const [tpay, TotalPay] = useState();
  const [isRefund, setIsRefund] = useState(false);
  let isValid = true;

  let WData = "";
  if (props.test) {
    WData = props.test;
  }
  console.log(WData, "WData");

  // let walletStatus =""
  // if (WData.total_wallet_amount > 0) {
  //   walletStatus = 0;
  // } else if (WData.total_wallet_amount < 0) {
  //   walletStatus = 1;
  // }

  // console.log(WalBalance,"balance")

  const handleRadioChange = (e) => {
    console.log(isChecked, "console");
    setIsChecked(e.target.value === "1");
    setAStatus(e.target.value);
    setAmount("");
    setRefAmount("");
  };

  console.log(Astatus, "status");
  const handleCRefund = (e) => {
    setRefAmount(e.target.value);
    if (e.target.value) {
      setRerr("");
    }
  };

  const handleCAmount = (e) => {
    setAmount(e.target.value);
    if (e.target.value) {
      setErr("");
    }
  };

  const handleClose = () => {
    setShow(false);
    setAmount("");
    setErr("");
  };
  // const handleInput = () => {
  //     setIshow(false);
  //     setSelectOpt("trans")
  // }

  const handleInput = () => {
    setIshow(false);
    setSelectOpt("trans");
  };
  // console.log(getWalletTransactions.getWalletTransaction,"walletTrans")

  const handleInputs = () => {
    setIshow(true);
    setSelectOpt("Add");
  };
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  let IpId = "";
  if (WData.IpRecord && WData.IpRecord.length > 0) {
    console.log(WData.IpRecord[0].ip_id);
    IpId = WData.IpRecord[0].ip_id;
  }

  let Name = "";
  let Age = "";
  let Gender = "";
  let Mobile = "";

  const { PatientData } = WData;

  if (PatientData) {
    Name = PatientData.name || "";
    Age = PatientData.age || "";
    Gender =
      PatientData.gender === 1
        ? "M"
        : PatientData.gender === 2
        ? "O"
        : PatientData.gender === 0
        ? "F"
        : "";
    Mobile = PatientData.mobile || "";
  }

  let Guardian = "";
  let GmobileNo = "";
  let AdmissionNo = "";
  let time = "";
  let ipAppointmentId = "";
  let Status = "";
  let DoctorName = "";
  let DoctorId = "";
  let userName = "";
  let WalBalance = "";
  let UHID = "";

  if (WData) {
    const {
      username,
      display_ip_appointment_id,
      ip_appointment_timestamp,
      ip_appointment_id,
      status,
      doctor_name,
      doctor,
      total_wallet_amount,
      gerdian_details,
      uhid
    } = WData;
    AdmissionNo = display_ip_appointment_id || "NA";
    ipAppointmentId = ip_appointment_id || "";
    DoctorName = doctor_name || "NA";
    DoctorId = doctor;
    userName = username || "NA";
    WalBalance = total_wallet_amount || "NA";
    UHID = uhid || "NA"

    if (gerdian_details && gerdian_details.length > 0) {
      if (gerdian_details[0].Name) {
        Guardian = gerdian_details[0].Name;
      }
      if (gerdian_details[0].Mobile) {
        GmobileNo = gerdian_details[0].Mobile;
      }
    }

    if (ip_appointment_timestamp) {
      const formattedTime = moment
        .unix(ip_appointment_timestamp)
        .format("hh:mm A");
      time = formattedTime;
    } else {
      time = "NA";
    }

    if (status === 0) {
      Status = "New";
    } else if (status === 1) {
      Status = "Checked-In";
    } else if (status === 2) {
      Status = "Admitted";
    } else if (status === 3) {
      Status = "Discharged";
    } else if (status === 4) {
      Status = "Cancelled";
    }
  }

  //transactions details
  const { data: walletTransactionData, refetch: refetch3 } = useQuery(
    GET_WALLET_TRANSACTIONS,
    {
      variables: {
        ipId: IpId,
        ipAppointmentId: ipAppointmentId,
        type: 0,
      },
      // fetchPolicy: "network-only",
      refetchQueries: {
        query: GET_WALLET_TRANSACTIONS,
        fetchPolicy: "network-only",
      },
    }
  );
  console.log(walletTransactionData, "walletTrans");
  useEffect(() => {
    if (walletTransactionData && walletTransactionData.getWalletTransaction) {
      setTransData(walletTransactionData.getWalletTransaction);
    }
  }, [walletTransactionData]);

  console.log(transData, "transData");

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("addConsole");
    isValid = true;
    let num = /^[0-9]+$/;

    if (!Amount) {
      setErr("Enter Amount");
      isValid = false;
      return;
    } else if (!Amount.match(num)) {
      setErr("Enter numbers only");
      isValid = false;
      return;
    } else {
      setErr("");
    }

    if (isValid) {
      // setAmount("");
      setErr("");
      setShow(true);
    }
    setShow(true);
  };

  const { data: data1, refetch: refetch1 } = useQuery(GET_IP_PATIENTS, {
    variables: { ipAppointmentId: ipAppointmentId },
    fetchPolicy: "network-only",
  });

  let Data1 = [];
  if (data1 && data1.getInPateints && data1.getInPateints.length > 0) {
    Data1 = data1.getInPateints[0];
  }
  console.log(Data1, "Data1");

  let walletStatus = Data1.total_wallet_amount >= 0 ? 0 : 1;

  const [addWallet] = useMutation(ADD_WALLET, {
    onCompleted: () => {
      refetch1();
      refetch3();
      props.refetch();
    },
  });
  
  const handleRefund = (e) => {
    e.preventDefault();
    console.log("console");
    isValid = true;
    let num = /^[0-9]+$/;

    if (!refAmount) {
      setRerr("Enter Amount");
      isValid = false;
      return;
    } else if (!refAmount.match(num)) {
      setRerr("Enter numbers only");
      isValid = false;
      return;
    } else {
      setRerr("");
    }
    if (isValid) {
      addWallet({
        variables: {
          ipId: IpId || "",
          ipAppointmentId: ipAppointmentId || "",
          type: 0,
          username: userName || "",
          amount: parseFloat(refAmount),
          status: parseInt(1),
          onlinePay: 0,
          cash: parseInt(refAmount),
          paymentMethod: parseInt(0),
        },
        refetchQueries: [
          {
            query: GET_IP_PATIENTS,
            variables: {
              Ip_appointment_id: ipAppointmentId,
              department: parseInt(form.department),
              search: form.search,
              floor: parseInt(form.floor),
              ward: parseInt(form.ward),
              crossConsultationAppid: 1,
            },
            fetchPolicy: "network-only",
          },
          { onCompleted: refetch1 },
        ],
      })
        .then((response) => {
          console.log("refund Success", response.data);
          setRefAmount("");
          setIsRefund(true);
          TotalPay(parseInt(refAmount));
          setTimeout(() => {
            setIsRefund(false);
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const onCancel = () => {
    props.onHide();
    setAmount("");
    setRefAmount("");
    setErr("");
    setRerr("");
  };

  const transcationUI = transData.map((each) => {
    const isPositiveAmount = each.status === 0;
    const amountColor = isPositiveAmount ? "text-success" : "text-danger";
    const amountSign = isPositiveAmount ? "+" : "-";
    return {
      DATETIME: <div className="nowwrap">{each.timestamp}</div>,
      // SERVICE: <div className="nowwrap">{each.service}</div>,
      CREATEDBY: <div className="nowwrap">{each.username}</div>,
      AMOUNT: (
        <div className={`nowwrap ${amountColor}`}>
          {amountSign}
          <i
            className={`fal fa-rupee-sign ${
              amountColor === "green" ? "positive" : "negative"
            }`}
          ></i>
          {each.amount}
        </div>
      ),
      //   BALANCE: (
      //     <div title="kalyan123@gmail.com" className="nowwrap">
      //       <i className="fal fa-rupee-sign"></i> {WalBalance - each.amount}
      //     </div>
      //   ),
    };
  });

  const modelProps = { ...props, onHide: onCancel };
  return (
    <div>
      <Modal
        {...modelProps}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="md3"
      >
        <Modal.Header closeButton className="bdr2">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className={`px-md-3 f15 ${styles.font}`}
          >
            Wallet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-0">
          <div className="px-4">
            <div className="d-md-flex align-items-center justify-content-between  pe-md-4 ps-md-0 ps-3 ">
              <div className="ps-0 mb-lg-4 mb-0">
                <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>
                  UHID
                </Form.Label>
                <div className={`f14 ${styles.font}`}>{UHID}</div>
              </div>
              <div className=" ps-md-3 mt-md-0 mt-3 mb-lg-4 mb-0">
                <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>
                  NAME
                </Form.Label>
                <div
                  className={`f14 ${styles.font}`}
                >{`${Name}(${Age}/${Gender})`}</div>
              </div>
              <div className=" ps-md-3 mt-md-0 mt-3 mb-lg-4 mb-0">
                <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>
                  MOBILE NO
                </Form.Label>
                <div className={`f14 ${styles.font}`}>{`+91 ${Mobile}`}</div>
              </div>
              <div className=" ps-md-3 mt-md-0 mt-3 mb-lg-4 mb-0">
                <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>
                  CONSULTANT DOCTOR
                </Form.Label>
                <div className={`f14 ${styles.font}`}>{`Dr ${DoctorName}`}</div>
              </div>
              <div className=" ps-md-3 mt-md-0 mt-3 mb-lg-4 mb-0">
                <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>
                  GUARDIAN
                </Form.Label>
                <div
                  className={`f14 ${styles.font}`}
                >{`${Guardian}(${GmobileNo})`}</div>
              </div>
            </div>

            <div className="row align-items-center   pe-md-4 ps-md-0 ps-3 ">
              <Col md={3} className=" ps-md-3 ps-3 mt-md-0 mt-3  mb-0">
                <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>
                  ADMISN NO
                </Form.Label>
                <div
                  className={`f14 ${styles.font}`}
                >{`${AdmissionNo} (${time})`}</div>
              </Col>
              <Col md={3} className=" ps-3 mt-md-0 mt-3 ">
                <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>
                  STATUS
                </Form.Label>
                <div className={`${styles.admitted} f14`}>{Status}</div>
              </Col>
              <Col md={6} className="text-end d-flex justify-content-end">
                <div
                  className={`${styles.bg22} ${styles.font} px-4 py-3`}
                  style={{ width: "fit-content" }}
                >
                  <span>Bal :</span>{" "}
                  <span
                    className={
                      walletStatus === 0 ? "text-success" : "text-danger"
                    }
                  >
                    <i className="fal fa-rupee-sign"></i>{" "}
                    {Data1.total_wallet_amount}
                  </span>
                </div>
              </Col>
            </div>
          </div>

          <div className="bdr2 pe-md-4 ps-md-0 ps-3 mb-2"></div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="d-flex align-items-center  bg-white rounded ">
              <Col md={12} className=" p-0 pt-1 pb-2  ">
                <Nav variant="pills" className="flex-row  bdr2">
                  <Nav.Item className={styles.p1}>
                    <Nav.Link
                      eventKey="first"
                      className={`f13 ${styles.font} `}
                      onClick={handleInputs}
                    >
                      Add/Refund
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="ms-4 ">
                    <Nav.Link
                      eventKey="second"
                      className={`f13 ${styles.font} `}
                      onClick={handleInput}
                    >
                      Transactions
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </div>
            <Col md={12}>
              <Tab.Content>
                <Tab.Pane eventKey="first" className="px-4">
                  <div className="px-3 pb-3">
                    <div className="d-flex mt-3 mb-4" id="form1">
                      <div className="me-5 ">
                        <Form.Check
                          type="radio"
                          name="name"
                          label="Add balance"
                          checked={isChecked}
                          className={`f14 ${styles.font}`}
                          value="1"
                          onChange={handleRadioChange}
                        />
                      </div>
                      <Form.Check
                        type="radio"
                        name="name"
                        label="Refund"
                        checked={!isChecked}
                        className={`f14 ${styles.font}`}
                        value="0"
                        onChange={handleRadioChange}
                      />
                    </div>
                    {isChecked ? (
                      <div>
                        <Col md={4} className="mt-4 mb-5">
                          <Form.Label className={`mb-1 ${styles.font}`}>
                            Amount
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="Amount"
                            value={Amount}
                            placeholder="Enter amount"
                            onChange={(e) => {
                              handleCAmount(e);
                            }}
                          ></Form.Control>
                          {err && <div className="text-danger">{err}</div>}
                        </Col>
                      </div>
                    ) : (
                      <div>
                        <Col md={4} className="mt-4 mb-5">
                          <Form.Label className={`mb-1 ${styles.font}`}>
                            Amount
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="refamount"
                            value={refAmount}
                            placeholder="Enter amount"
                            onChange={(e) => {
                              handleCRefund(e);
                            }}
                          />
                          {Rerr && <div className="text-danger">{Rerr}</div>}
                        </Col>
                        {isRefund && (
                          <div className="text-success text-center">
                            Amount {tpay}/- Refunded Successfully
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {transData.length > 0 ? (
                    <div className={`${styles.font} p-1 px-4`}>
                      <BootstrapTable
                        bootstrap4
                        keyField="DATETIME"
                        data={transcationUI}
                        columns={columns}
                        bordered={false}
                        pagination={pagination}
                      />
                    </div>
                  ) : (
                    <div className="text-center">
                      No transactions available.
                    </div>
                  )}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Tab.Container>
        </Modal.Body>
        {ishow ? (
          <Modal.Footer className="d-block">
            <div className="d-flex justify-content-end">
              <Col md={8} className="text-center">
                <div className="theme12"></div>
              </Col>
              <Col md={4} className="d-flex justify-content-end">
                <Button
                  className={` ${styles.bdrnone} bg-white theme13 me-2 ${styles.font} `}
                  onClick={onCancel}
                >
                  Cancel
                </Button>
                {isChecked ? (
                  <Button className={styles.submitbtn} onClick={handleAdd}>
                    Add Balance
                  </Button>
                ) : (
                  <Button className={styles.submitbtn} onClick={handleRefund}>
                    Refund
                  </Button>
                )}
              </Col>
            </div>
          </Modal.Footer>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </Modal>
      <PaymentModal
        show={show}
        onHide={handleClose}
        Amount={Amount}
        Astatus={Astatus}
        ipAppointmentId={ipAppointmentId}
        userName={userName}
        WalBalance={WalBalance}
        IpId={IpId}
        refetch={props.refetch}
        refetch9={refetch3} // wallwt transactions
      />
    </div>
  );
};

export default Wallet;
