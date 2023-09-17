import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import styles1 from "../../styles/IPD_Nurse/IpdNurse.module.scss";
// import styles4 from "../../styles/Sales.module.scss";
// import styles2 from "../../styles/Labdashboard.module.scss";
// import styles3 from "../../styles/Dashboard.module.scss";
import {
  Form,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Table,
  Container,
  Tab,
  Nav,
  TabContainer,
} from "react-bootstrap";
import Image from "next/image";
import clock from "../../public/images/clock.svg";
// import close from "../../public/images/times.svg";
import Link from "next/link";
// import TypeaHead  from "../../components/purchase_pharma/TypeaHead"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import SearchItemFilter from '../../components/purchase_pharma/SearchItemFilter'
// import SearchBatchFilter from '../../components/purchase_pharma/SearchBatchFilter'
// import PurchaseRefund_Modal from "../../components/purchase_pharma/PurchaseRefund_Modal";
// import inventory_newpharmaaddnewstockdata from "../../components/inventory_newpharma/inventory_newpharmaaddnewstockdata";
// import SearchDistrubutorFilter from "../../components/purchase_pharma/SearchDistrubutorFilter";
// import Sale_Payment_Modal from "../../components/sales_newpharma/Sale_Card_Payment_Modal";
import Ipd_Vital_Monitortng_Data from "../../components/ipd_nurse/Ipd_Vital_Monitortng_Data";
import Ipd_Antibiotics_Drugs_Data, { allDrugsTable } from "../../components/ipd_nurse/Ipd_Antibiotics_Drugs_Data";
import Ipd_Antibiotics_Lines_Data from "../../components/ipd_nurse/Ipd_Antibiotics_Lines_Data";
import Ipd_Antibiotics_Remarks_Data from "../../components/ipd_nurse/Ipd_Antibiotics_Remarks_Data";
import Ipd_Parenteralfluid_Fluid_Data from "../../components/ipd_nurse/Ipd_Parenteralfluid_Fluid_Data";
import Ipd_Parenteralfluid_Statsdrug_Data from "../../components/ipd_nurse/Ipd_Parenteralfluid_Statsdrug_Data";
import Ipd_Parenteralfluid_Fluidmonitoring_Data from "../../components/ipd_nurse/Ipd_Parenteralfluid_Fluidmonitoring_Data";
import Ipd_Addnl_Drug_Prestn_Data from "../../components/ipd_nurse/Ipd_Addnl_Drug_Prestn_Data";
import { GET_ALL_DRUGS, GET_DOCTORS } from "../../graphql/queries";
import { useQuery, useMutation } from '@apollo/client';
import { useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";





const Ipd_NurseView = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   const [startDate, setStartDate] = useState(new Date());
  const Parenteralfluid_fluid_colmun = [
    {
      dataField: "SNO",
      text: "S NO",
    },
    {
      dataField: "DATETIME",
      text: "DATE/TIME",
    },
    {
      dataField: "FLUID",
      text: "FLUID",
    },
    {
      dataField: "RATEOFINFUSION",
      text: "RATE OF INFUSION",
    },
    {
      dataField: "TOTALFLUID",
      text: "TOTAL FLUID",
    },

    {
      dataField: "INFORMED",
      text: "INFORMED",
    },
    {
      dataField: "ACTION",
      text: "ACTION",
    },
  ];
  const Parenteralfluid_statsdrug_colmun = [
    {
      dataField: "SNO",
      text: "S NO",
    },
    {
      dataField: "DATETIME",
      text: "DATE/TIME",
    },
    {
      dataField: "MEDICATION",
      text: "MEDICATION",
    },
    {
      dataField: "DOSAGE",
      text: "DOSAGE",
    },
    {
      dataField: "ROUTE",
      text: "ROUTE",
    },

    {
      dataField: "INFORMED",
      text: "INFORMED",
    },
    {
      dataField: "ACTION",
      text: "ACTION",
    },
  ];
  const Parenteralfluid_fluidmonitoring_colmun = [
    {
      dataField: "SNO",
      text: "S NO",
    },
    {
      dataField: "DATETIME",
      text: "DATE/TIME",
    },
    {
      dataField: "INPUT",
      text: "INPUT",
    },
    {
      dataField: "OUTPUT",
      text: "OUTPUT",
    },
    {
      dataField: "NOTE",
      text: "NOTE",
    },

    {
      dataField: "INFORMED",
      text: "INFORMED",
    },
    {
      dataField: "NURSE",
      text: "NURSE",
    },
    {
      dataField: "ACTION",
      text: "ACTION",
    },
  ];
  const Addnl_Drug_Prestn_colmun = [
    {
      dataField: "SNO",
      text: "S NO",
    },
    {
      dataField: "DATETIME",
      text: "DATE/TIME",
    },
    {
      dataField: "DRUG",
      text: "DRUG",
    },
    {
      dataField: "DOSE",
      text: "DOSE",
    },
    {
      dataField: "ROUTE",
      text: "ROUTE",
    },

    {
      dataField: "FREQUENCY",
      text: "FREQUENCY",
    },
    {
      dataField: "DOCTOR",
      text: "DOCTOR",
    },
    {
      dataField: "NURSE",
      text: "NURSE",
    },
    {
      dataField: "ACTION",
      text: "ACTION",
    },
  ];
  const columns1 = [
    {
      dataField: "SNO",
      text: "S NO",
    },
    {
      dataField: "DATETIME",
      text: "DATE/TIME",
    },
    {
      dataField: "TEMP",
      text: "TEMP",
    },
    {
      dataField: "BP",
      text: "BP",
    },
    {
      dataField: "SPO2",
      text: "SPO2",
    },
    {
      dataField: "RESP",
      text: "RESP",
    },
    {
      dataField: "INFORMED",
      text: "INFORMED",
    },
    {
      dataField: "INTERVENTION",
      text: "INTERVENTION",
    },
    {
      dataField: "ACTION",
      text: "ACTION",
    },
  ];
  const columns2 = [
    {
      dataField: "SNO",
      text: "S NO",
    },
    {
      dataField: "DATETIME",
      text: "DATE/TIME",
    },
    {
      dataField: "MEDICATION",
      text: "MEDICATION",
    },

    {
      dataField: "STATUS",
      text: "STATUS",
    },

    {
      dataField: "INFORMED",
      text: "INFORMED",
    },
    {
      dataField: "USERNAME",
      text: "USERNAME",
    },
    {
      dataField: "ACTION",
      text: "ACTION",
    },
  ];
  const columns3 = [
    {
      dataField: "SNO",
      text: "S NO",
    },
    {
      dataField: "LINES",
      text: "LINES",
    },
    {
      dataField: "INSERTED",
      text: "INSERTED",
    },

    {
      dataField: "REINSERTED",
      text: "REINSERTED",
    },
    {
      dataField: "REMOVED",
      text: "REMOVED",
    },

    {
      dataField: "INFORMED",
      text: "INFORMED",
    },
    {
      dataField: "NURSE",
      text: "NURSE",
    },
    {
      dataField: "ACTION",
      text: "ACTION",
    },
  ];
  const columns4 = [
    {
      dataField: "SNO",
      text: "S NO",
    },
    {
      dataField: "CATEGORY",
      text: "CATEGORY",
    },
    {
      dataField: "NOTES",
      text: "NOTES",
    },

    {
      dataField: "NURSE",
      text: "NURSE",
    },
    {
      dataField: "ACTION",
      text: "ACTION",
    },
  ];

  const [startDate, setStartDate] = useState();
  const [ipId, setIpId] = useState('');
  const [appointment, setAppointment] = useState('')


  let userData = "";
  let gloablhip = 0;
  if (typeof window !== 'undefined') {
    userData = JSON.parse(localStorage.getItem("user"));
    gloablhip = JSON.parse(localStorage.getItem("userHip"));
  }

  let userName = userData ? userData.username : ""

  const { data: ALLDATA } = useQuery(GET_ALL_DRUGS, { variables: { ipId: "", ipAppointment: "" } });

  useEffect(() => {
    try {
      if (ALLDATA) {
        console.log(ALLDATA)
      }
    }
    catch (error) {
      console.log("thorwing errorr", error)
    }
  }, [ALLDATA]);

  const [department, setDeparment] = useState([])
  const { data: Doctors, loading: loading1, error: error1 } = useQuery(GET_DOCTORS, { variables: { department: 0, hip: gloablhip } });
  useEffect(() => {
    try {
      if (Doctors && Doctors.getDoctors) {
        console.log(Doctors)
        setDeparment(Doctors.getDoctors)
      }
    }
    catch (error) {
      console.log("thorwing errorr", error)
    }
  }, [Doctors]);

  console.log(department,"department")

  return (
    <React.Fragment>
      <div className="page-content pt-5">
        <div>
          <div closeButton className={`${styles1.bg3} ps-5 py-3 pt-4`}>
            <div className="d-flex  align-items-center justify-content-between w-100 py-1">
              <div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="">Medical Note</h6>
                  </div>
                </div>
              </div>

              <div>
                <div className="d-md-flex d-none justify-content-end w-100 pe-5 me-1">
                  <div>
                    <div className="f16 me-4">
                      <span>Time :</span>
                      <span className="font-weight-700 "> 2:45 pm</span>
                    </div>
                  </div>
                  <Link href="/ipd_nurse">
                    <Image src={close} className="" alt="Close" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <Row className="mb-4 mx-0">
              <Col md={12} xs={10} className="px-0 pt-2">
                <Form>
                  <Table className={`mb-0`} id="">
                    <thead>
                      <tr>
                        <th>
                          <Col md={2} className="px-2 ps-4">
                            <h6 className="f12 txt_light fw_400 text-uppercase">
                              UHID
                            </h6>
                            <h6 className="txt_dark mb-0 fw_400">UH2011</h6>
                          </Col>
                        </th>
                        <th>
                          <Col md={2} className="px-2">
                            <h6 className="f12 txt_light fw_400 text-uppercase">
                              Admisn no
                            </h6>
                            <h6 className="txt_dark mb-0 fw_400">
                              AABBD221 (5:34PM)
                            </h6>
                          </Col>
                        </th>
                        <th>
                          <Col md={1} className="px-2">
                            <h6 className="f12 txt_light fw_400 text-uppercase">
                              Name
                            </h6>
                            <h6 className="txt_dark mb-0 fw_400">
                              April Curtis (44/M)
                            </h6>
                          </Col>
                        </th>
                        <th>
                          <Col md={2} className="px-2">
                            <h6 className="f12 txt_light fw_400 text-uppercase">
                              Mobile No
                            </h6>
                            <h6 className="txt_dark mb-0 fw_400">
                              +91 9876512345
                            </h6>
                          </Col>
                        </th>
                        <th>
                          <Col md={2} className="px-2">
                            <h6 className="f12 txt_light fw_400 text-uppercase">
                              Guardian
                            </h6>
                            <h6 className="txt_dark mb-0 fw_400">
                              April (9933993393)
                            </h6>
                          </Col>
                        </th>
                        <th>
                          <Col md={2} className="px-2">
                            <h6 className="f12 txt_light fw_400 text-uppercase">
                              Bed details
                            </h6>
                            <h6 className="mb-0 fw_400">A1</h6>
                          </Col>
                        </th>
                        <th>
                          <Col md={2} className="px-2">
                            <h6 className="f12 txt_light fw_400 text-uppercase">
                              consultant Doctor{" "}
                            </h6>
                            <h6 className="mb-0 fw_400">
                              Peter Thornton (Cardio)
                            </h6>
                          </Col>
                        </th>
                        <th>
                          <Col md={2} className="px-2">
                            <h6 className="f12 txt_light fw_400 text-uppercase">
                              Status
                            </h6>
                            <h6 className={`${styles1.admitted} mb-0 fw_400`}>
                              Admitted{" "}
                            </h6>
                          </Col>
                        </th>
                      </tr>
                    </thead>
                  </Table>
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="vital"
                  >
                    <Row className="mx-0">
                      <Col sm={2} className={`${styles1.pills_left}`}>
                        <Nav
                          variant="pills"
                          className={`${styles1.cus_pills} flex-column p-3 text-center`}
                          id="custom_pills"
                        >
                          <Nav.Item>
                            <Nav.Link eventKey="vital">
                              Vital Monitoring
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="antibiotics">
                              Antibiotics
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="parenteralfluid">
                              Parenteral Fluid
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="addnldrug">
                              Addnl Drug Prestn
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={10} className="px-0">
                        <Tab.Content>
                          {/* Start Vital Monitoring */}
                          <Tab.Pane eventKey="vital">
                            <Row className="mx-0">
                              <Col md={{ span: 11 }}>
                                <Row className="my-4">
                                  <Col md={4}>
                                    <Form.Group
                                      className="mb-2 pb-2 mx-5"
                                      controlId="formBasicEmail"
                                    >
                                      <Form.Label className="mb-0 f14">
                                        Temp
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="99 F"
                                        className={`${styles1.themeinput} `}
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={4}>
                                    <Form.Group
                                      className="mb-2 pb-2 mx-5"
                                      controlId="formBasicEmail"
                                    >
                                      <Form.Label className="mb-0 f14">
                                        Pulse
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="72"
                                        className={`${styles1.themeinput} `}
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={4}>
                                    <Form.Group
                                      className="mb-2 pb-2 mx-5"
                                      controlId="formBasicEmail"
                                    >
                                      <Form.Label className="mb-0 f14">
                                        BP
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="120/80"
                                        className={`${styles1.themeinput} `}
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={4}>
                                    <Form.Group
                                      className="mb-2 pb-2 mx-5"
                                      controlId="formBasicEmail"
                                    >
                                      <Form.Label className="mb-0 f14">
                                        SPO2
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="100"
                                        className={`${styles1.themeinput} `}
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={4}>
                                    <Form.Group
                                      className="mb-2 pb-2 mx-5"
                                      controlId="formBasicEmail"
                                    >
                                      <Form.Label className="mb-0 f14">
                                        Resp
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="24"
                                        className={`${styles1.themeinput} `}
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={4}>
                                    <Form.Group
                                      className="mb-2 pb-2 mx-5"
                                      controlId=""
                                    >
                                      <Form.Label className="mb-0 f14">
                                        Informed
                                      </Form.Label>
                                      <Form.Select
                                        aria-label="Default select example"
                                        className={`${styles1.themeinput} `}
                                      >
                                        <option>Select</option>
                                        <option value="1">Dr.Aman Singh</option>
                                        <option value="2">Dr.Aman Singh</option>
                                        <option value="3">Dr.Aman Singh</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </Col>
                                  <Col md={4}>
                                    <Form.Group
                                      className="mb-2 pb-2 mx-5"
                                      controlId="formBasicEmail"
                                    >
                                      <Form.Label className="mb-0 f14">
                                        Intervention
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="Temp: 99 F"
                                        className={`${styles1.themeinput} `}
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={4}></Col>
                                  <Col md={4}>
                                    <div className="mt-3 pt-1 text-end pe-5 me-1">
                                      <Button
                                        className={`theme9 bg-white ${styles1.border_none}`}
                                        onClick={handleClose}
                                      >
                                        Cancel
                                      </Button>
                                      <Button
                                        variant="primary"
                                        className={styles1.serchbtn}
                                      >
                                        Submit
                                      </Button>
                                    </div>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                            <div id="vital_monitoring">
                              <BootstrapTable
                                bootstrap4
                                keyField="id"
                                data={Ipd_Vital_Monitortng_Data}
                                columns={columns1}
                                bordered={false}
                                pagination={paginationFactory()}
                              />
                            </div>
                          </Tab.Pane>
                          {/* End Vital Monitoring */}
                          {/* Start Antibiotics */}
                          <Tab.Pane eventKey="antibiotics">
                            <Tab.Container defaultActiveKey="drugs">
                              <div className="bdrbtm1 px-2">
                                <Nav
                                  variant="pills"
                                  className="inv_pills flex-row"
                                >
                                  <Nav.Item>
                                    <Nav.Link eventKey="drugs" className="f16">
                                      Drugs
                                    </Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link eventKey="lines" className="f16">
                                      Lines
                                    </Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link
                                      eventKey="remarks"
                                      className="f16"
                                    >
                                      Remarks
                                    </Nav.Link>
                                  </Nav.Item>
                                </Nav>
                              </div>
                              <div>
                                <Tab.Content>
                                  {/*Start Drugs */}
                                  <Tab.Pane eventKey="drugs" id="drugs">
                                    <div className="p-4 m-2">
                                      <Row>
                                        <Col
                                          md={6}
                                          className={`${styles1.col_line}`}
                                        >
                                          <Row className="align-items-center">
                                            {/* <Col>
                                              <Typeahead
                                               caseSensitive={false}
                                               ignoreDiacritics={true}
                                               labelKey="medicinename"
                                               id="basicexample"
                                               options={Medition}
                                               placeholder="Choose a medition name..."
                                               selected={selected}
                                               style={{ maxHeight: "110px" }}
                                              />
                                            </Col> */}
                                            <Col>
                                              <Form.Group
                                                className="mb-2"
                                                controlId="formBasicCheckbox"
                                              >
                                                <Form.Check
                                                  type="checkbox"
                                                  label="Tab Liv 52"
                                                />
                                              </Form.Group>
                                            </Col>
                                            {/* <Col>
                                              <Form.Group
                                                className={`${styles1.dategroup} mb-2`}
                                                controlId="formBasicEmail"
                                              >
                                                <DatePicker
                                                  selected={startDate}
                                                  onChange={(date) =>
                                                    setStartDate(date)
                                                  }
                                                  showTimeSelect
                                                  showTimeSelectOnly
                                                  timeIntervals={15}
                                                  timeCaption="Time"
                                                  dateFormat="h:mm aa"
                                                  className={`${styles1.themeinput}`}
                                                />
                                                <Image
                                                  className={`${styles1.dateicon}`}
                                                  width="16"
                                                  height="16"
                                                  src={clock}
                                                  alt="clock"
                                                />
                                              </Form.Group>
                                            </Col> */}
                                            <Col>
                                              <Form.Group
                                                className="mb-2"
                                                controlId=""
                                              >
                                                <Form.Select
                                                  aria-label="Default select example"
                                                  className={`${styles1.themeinput} `}
                                                >
                                                  <option>Select</option>
                                                  <option value={0}>Started</option>
                                                  <option value={1}>Completed</option>
                                                </Form.Select>
                                              </Form.Group>
                                            </Col>
                                            <Col>
                                              <Form.Group
                                                className="mb-2"
                                                controlId=""
                                              >
                                                <Form.Select
                                                  aria-label="Default select example"
                                                  className={`${styles1.themeinput} `}
                                                >
                                                  <option value={""}>Select</option>
                                                  {department?.map((name, index) => (
                                                    <option key={index} value={name.id}>
                                                        {name.department_name}
                                                    </option>
                                                  ))}
                                                </Form.Select>
                                              </Form.Group>
                                              

                                            </Col>
                                          </Row>
                                          {/* <Row className="align-items-center">
                                            <Col>
                                              <Form.Group
                                                className="mb-2"
                                                controlId="formBasicCheckbox"
                                              >
                                                <Form.Check
                                                  type="checkbox"
                                                  label="Tab Rantidin 250MG"
                                                />
                                              </Form.Group>
                                            </Col>
                                            <Col>
                                              <Form.Group
                                                className={`${styles1.dategroup} mb-2`}
                                                controlId="formBasicEmail"
                                              >
                                                <DatePicker
                                                  selected={startDate}
                                                  onChange={(date) =>
                                                    setStartDate(date)
                                                  }
                                                  showTimeSelect
                                                  showTimeSelectOnly
                                                  timeIntervals={15}
                                                  timeCaption="Time"
                                                  dateFormat="h:mm aa"
                                                  className={`${styles1.themeinput}`}
                                                />
                                                <Image
                                                  className={`${styles1.dateicon}`}
                                                  width="16"
                                                  height="16"
                                                  src={clock}
                                                  alt="clock"
                                                />
                                              </Form.Group>
                                            </Col>
                                            <Col>
                                              <Form.Group
                                                className="mb-2"
                                                controlId=""
                                              >
                                                <Form.Select
                                                  aria-label="Default select example"
                                                  className={`${styles1.themeinput} `}
                                                >
                                                  <option>Select</option>
                                                  <option value="1">
                                                    Started
                                                  </option>
                                                </Form.Select>
                                              </Form.Group>
                                            </Col>
                                          </Row>
                                          <Row className="align-items-center">
                                            <Col>
                                              <Form.Group
                                                className="mb-2"
                                                controlId="formBasicCheckbox"
                                              >
                                                <Form.Check
                                                  type="checkbox"
                                                  label="Inj. Cefriazone 500MG"
                                                />
                                              </Form.Group>
                                            </Col>
                                            <Col>
                                              <Form.Group
                                                className={`${styles1.dategroup} mb-2`}
                                                controlId="formBasicEmail"
                                              >
                                                <DatePicker
                                                  selected={startDate}
                                                  onChange={(date) =>
                                                    setStartDate(date)
                                                  }
                                                  showTimeSelect
                                                  showTimeSelectOnly
                                                  timeIntervals={15}
                                                  timeCaption="Time"
                                                  dateFormat="h:mm aa"
                                                  className={`${styles1.themeinput}`}
                                                />
                                                <Image
                                                  className={`${styles1.dateicon}`}
                                                  width="16"
                                                  height="16"
                                                  src={clock}
                                                  alt="clock"
                                                />
                                              </Form.Group>
                                            </Col>
                                            <Col>
                                              <Form.Group
                                                className="mb-2"
                                                controlId=""
                                              >
                                                <Form.Select
                                                  aria-label="Default select example"
                                                  className={`${styles1.themeinput} `}
                                                >
                                                  <option>Select</option>
                                                  <option value="1">
                                                    Started
                                                  </option>
                                                </Form.Select>
                                              </Form.Group>
                                            </Col>
                                          </Row> */}
                                        </Col>
                                        <Col md={6} className="f13">
                                          <Col md={12} className="mt-5 pt-5">
                                            <div className="mt-5 pt-5 text-end pe-5 me-1">
                                              <Button
                                                className={`theme9 bg-white ${styles1.border_none}`}
                                                onClick={handleClose}
                                              >
                                                Cancel
                                              </Button>
                                              <Button
                                                variant="primary"
                                                className={styles1.serchbtn}
                                              >
                                                Submit
                                              </Button>
                                            </div>
                                          </Col>
                                        </Col>
                                      </Row>
                                    </div>
                                    <div id="vital_monitoring">
                                      <BootstrapTable
                                        bootstrap4
                                        keyField="id"
                                        data={allDrugsTable(ALLDATA || [])}
                                        columns={columns2}
                                        bordered={false}
                                        pagination={paginationFactory()}
                                      />
                                    </div>
                                  </Tab.Pane>
                                  {/*End Drugs */}
                                  {/*Start Lines */}
                                  <Tab.Pane eventKey="lines" id="lines">
                                    <div className="p-4 my-2">
                                      <Row>
                                        <Col md={6}>
                                          <Container>
                                            <Row>
                                              <Col md={3}>
                                                <Form.Group
                                                  className="mb-2"
                                                  controlId=""
                                                >
                                                  <Form.Select
                                                    aria-label="Default select example"
                                                    className={`${styles1.themeinput} `}
                                                  >
                                                    <option>Select</option>
                                                    <option value="1">
                                                      Foleys
                                                    </option>
                                                    <option value="2">
                                                      Peripheral Line
                                                    </option>
                                                    <option value="3">
                                                      CVC
                                                    </option>
                                                    <option value="4">
                                                      H.D Sheath
                                                    </option>
                                                    <option value="5">
                                                      ET Tube
                                                    </option>
                                                  </Form.Select>
                                                </Form.Group>
                                              </Col>
                                              <Col md={5}>
                                                <Form.Group
                                                  className={`${styles1.dategroup} mb-2`}
                                                  controlId="formBasicEmail"
                                                >
                                                  <DatePicker
                                                    selected={startDate}
                                                    onChange={(date) =>
                                                      setStartDate(date)
                                                    }
                                                    showIcon
                                                    showTimeSelect
                                                    //   minTime={setHours(setMinutes(new Date(), 0), 17)}
                                                    //   maxTime={setHours(setMinutes(new Date(), 30), 20)}
                                                    dateFormat="MMMM d, yyyy h:mm aa"
                                                    className={`${styles1.themeinput}`}
                                                  />
                                                  <Image
                                                    className={`${styles1.dateicon}`}
                                                    width="16"
                                                    height="16"
                                                    src={clock}
                                                    alt="clock"
                                                  />
                                                </Form.Group>
                                              </Col>
                                              <Col md={3}>
                                                <Form.Group
                                                  className="mb-2"
                                                  controlId=""
                                                >
                                                  <Form.Select
                                                    aria-label="Default select example"
                                                    className={`${styles1.themeinput} `}
                                                  >
                                                    <option>Select</option>
                                                    <option value="1">
                                                      Started
                                                    </option>
                                                  </Form.Select>
                                                </Form.Group>
                                              </Col>
                                              <Col md={12}>
                                                <div className="text-end pe-5 me-1 mt-3">
                                                  <Button
                                                    className={`theme9 bg-white ${styles1.border_none}`}
                                                    onClick={handleClose}
                                                  >
                                                    Cancel
                                                  </Button>
                                                  <Button
                                                    variant="primary"
                                                    className={styles1.serchbtn}
                                                  >
                                                    Submit
                                                  </Button>
                                                </div>
                                              </Col>
                                            </Row>
                                          </Container>
                                        </Col>
                                      </Row>
                                    </div>
                                    <div id="vital_monitoring">
                                      <BootstrapTable
                                        bootstrap4
                                        keyField="id"
                                        data={Ipd_Antibiotics_Lines_Data}
                                        columns={columns3}
                                        bordered={false}
                                        pagination={paginationFactory()}
                                      />
                                    </div>
                                  </Tab.Pane>
                                  {/*End Lines */}
                                  {/*Start Remarks */}
                                  <Tab.Pane eventKey="remarks" id="remarks">
                                    <Row className="my-4 mx-0">
                                      <Col md={4}>
                                        <Form.Group
                                          className="mb-2 pb-2 ms-5"
                                          controlId=""
                                        >
                                          <Form.Label className="mb-0 f14">
                                            Informed
                                          </Form.Label>
                                          <Form.Select
                                            aria-label="Default select example"
                                            className={`${styles1.themeinput} `}
                                          >
                                            <option>Category</option>
                                            <option value="1">
                                              Dr.Aman Singh
                                            </option>
                                            <option value="2">
                                              Dr.Aman Singh
                                            </option>
                                            <option value="3">
                                              Dr.Aman Singh
                                            </option>
                                          </Form.Select>
                                        </Form.Group>
                                      </Col>

                                      <Col md={8}>
                                        <Form.Group
                                          className="mb-2 pb-2 mx-5"
                                          controlId="formBasicEmail"
                                        >
                                          <Form.Label className="mb-0 f14">
                                            Intervention
                                          </Form.Label>
                                          <Form.Control
                                            as="textarea"
                                            rows={1}
                                            placeholder="Temp: 99 F"
                                            className={`${styles1.themeinput} `}
                                          />
                                        </Form.Group>
                                      </Col>
                                      <Col md={12}>
                                        <div className="mt-3 pt-1 pe-5 text-end me-1">
                                          <Button
                                            className={`theme9 bg-white ${styles1.border_none}`}
                                            onClick={handleClose}
                                          >
                                            Cancel
                                          </Button>
                                          <Button
                                            variant="primary"
                                            className={styles1.serchbtn}
                                          >
                                            Submit
                                          </Button>
                                        </div>
                                      </Col>
                                    </Row>
                                    <div id="vital_monitoring">
                                      <BootstrapTable
                                        bootstrap4
                                        keyField="id"
                                        data={Ipd_Antibiotics_Remarks_Data}
                                        columns={columns4}
                                        bordered={false}
                                        pagination={paginationFactory()}
                                      />
                                    </div>
                                  </Tab.Pane>
                                  {/*End Remarks */}
                                </Tab.Content>
                              </div>
                            </Tab.Container>
                          </Tab.Pane>
                          {/* End Antibiotics */}
                          {/* Start parenteralfluid */}
                          <Tab.Pane eventKey="parenteralfluid">
                            <Tab.Container defaultActiveKey="fluid">
                              <div className="bdrbtm1 px-2">
                                <Nav
                                  variant="pills"
                                  className="inv_pills flex-row"
                                >
                                  <Nav.Item>
                                    <Nav.Link eventKey="fluid" className="f16">
                                      Fluid
                                    </Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link
                                      eventKey="statsdrugs"
                                      className="f16"
                                    >
                                      Stats/Once Only Drugs
                                    </Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link
                                      eventKey="fluidmonitoring"
                                      className="f16"
                                    >
                                      Fluid Monitoring
                                    </Nav.Link>
                                  </Nav.Item>
                                </Nav>
                              </div>
                              <div>
                                <Tab.Content>
                                  {/*Start fluid */}
                                  <Tab.Pane eventKey="fluid" id="fluid">
                                    <Row className="mx-0">
                                      <Col md={{ span: 11 }}>
                                        <Row className="my-4">
                                          <Col md={4}>
                                            <Form.Group
                                              className="mb-2 pb-2 mx-5"
                                              controlId=""
                                            >
                                              <Form.Label className="mb-0 f14">
                                                Fluid
                                              </Form.Label>
                                              <Form.Select
                                                aria-label="Default select example"
                                                className={`${styles1.themeinput} `}
                                              >
                                                <option>Select</option>
                                                <option value="1">
                                                  Inj Dextomid
                                                </option>
                                              </Form.Select>
                                            </Form.Group>
                                          </Col>
                                          <Col md={4}>
                                            <Form.Group
                                              className="mb-2 pb-2 mx-5"
                                              controlId="formBasicEmail"
                                            >
                                              <Form.Label className="mb-0 f14">
                                                Rate Of Infusion
                                              </Form.Label>
                                              <Form.Control
                                                type="text"
                                                placeholder="20ml / Hr"
                                                className={`${styles1.themeinput} `}
                                              />
                                            </Form.Group>
                                          </Col>
                                          <Col md={4}>
                                            <Form.Group
                                              className="mb-2 pb-2 mx-5"
                                              controlId="formBasicEmail"
                                            >
                                              <Form.Label className="mb-0 f14">
                                                Total Fluid
                                              </Form.Label>
                                              <Form.Control
                                                type="text"
                                                placeholder="50ml"
                                                className={`${styles1.themeinput} `}
                                              />
                                            </Form.Group>
                                          </Col>

                                          <Col md={4}>
                                            <Form.Group
                                              className="mb-2 pb-2 mx-5"
                                              controlId=""
                                            >
                                              <Form.Label className="mb-0 f14">
                                                Informed
                                              </Form.Label>
                                              <Form.Select
                                                aria-label="Default select example"
                                                className={`${styles1.themeinput} `}
                                              >
                                                <option>Select</option>
                                                <option value="1">
                                                  Dr.Aman Singh
                                                </option>
                                                <option value="2">
                                                  Dr.Aman Singh
                                                </option>
                                                <option value="3">
                                                  Dr.Aman Singh
                                                </option>
                                              </Form.Select>
                                            </Form.Group>
                                          </Col>

                                          <Col md={4}></Col>
                                          <Col md={4}>
                                            <div className="mt-3 pt-1 text-end pe-5 me-1">
                                              <Button
                                                className={`theme9 bg-white ${styles1.border_none}`}
                                                onClick={handleClose}
                                              >
                                                Cancel
                                              </Button>
                                              <Button
                                                variant="primary"
                                                className={styles1.serchbtn}
                                              >
                                                Submit
                                              </Button>
                                            </div>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                    <div id="vital_monitoring">
                                      <BootstrapTable
                                        bootstrap4
                                        keyField="id"
                                        data={Ipd_Parenteralfluid_Fluid_Data}
                                        columns={Parenteralfluid_fluid_colmun}
                                        bordered={false}
                                        pagination={paginationFactory()}
                                      />
                                    </div>
                                  </Tab.Pane>
                                  {/*End fluid */}
                                  {/*Start statsdrugs */}
                                  <Tab.Pane
                                    eventKey="statsdrugs"
                                    id="statsdrugs"
                                  >
                                    <Row className="mx-0">
                                      <Col md={{ span: 11 }}>
                                        <Row className="my-4">
                                          <Col md={4}>
                                            <Form.Group
                                              className="mb-2 pb-2 mx-5"
                                              controlId=""
                                            >
                                              <Form.Label className="mb-0 f14">
                                                Medication
                                              </Form.Label>
                                              <Form.Select
                                                aria-label="Default select example"
                                                className={`${styles1.themeinput} `}
                                              >
                                                <option>Select</option>
                                                <option value="1">
                                                  Inj PCM
                                                </option>
                                              </Form.Select>
                                            </Form.Group>
                                          </Col>
                                          <Col md={4}>
                                            <Form.Group
                                              className="mb-2 pb-2 mx-5"
                                              controlId="formBasicEmail"
                                            >
                                              <Form.Label className="mb-0 f14">
                                                Dosage
                                              </Form.Label>
                                              <Form.Control
                                                type="text"
                                                placeholder="100ml"
                                                className={`${styles1.themeinput} `}
                                              />
                                            </Form.Group>
                                          </Col>
                                          <Col md={4}>
                                            <Form.Group
                                              className="mb-2 pb-2 mx-5"
                                              controlId="Route"
                                            >
                                              <Form.Label className="mb-0 f14">
                                                Route
                                              </Form.Label>
                                              <Form.Control
                                                type="text"
                                                placeholder="IV"
                                                className={`${styles1.themeinput} `}
                                              />
                                            </Form.Group>
                                          </Col>

                                          <Col md={4}>
                                            <Form.Group
                                              className="mb-2 pb-2 mx-5"
                                              controlId=""
                                            >
                                              <Form.Label className="mb-0 f14">
                                                Informed
                                              </Form.Label>
                                              <Form.Select
                                                aria-label="Default select example"
                                                className={`${styles1.themeinput} `}
                                              >
                                                <option>Select</option>
                                                <option value="1">
                                                  Dr.Aman Singh
                                                </option>
                                                <option value="2">
                                                  Dr.Aman Singh
                                                </option>
                                                <option value="3">
                                                  Dr.Aman Singh
                                                </option>
                                              </Form.Select>
                                            </Form.Group>
                                          </Col>

                                          <Col md={4}></Col>
                                          <Col md={4}>
                                            <div className="mt-3 pt-1 text-end pe-5 me-1">
                                              <Button
                                                className={`theme9 bg-white ${styles1.border_none}`}
                                                onClick={handleClose}
                                              >
                                                Cancel
                                              </Button>
                                              <Button
                                                variant="primary"
                                                className={styles1.serchbtn}
                                              >
                                                Submit
                                              </Button>
                                            </div>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                    <div id="vital_monitoring">
                                      <BootstrapTable
                                        bootstrap4
                                        keyField="id"
                                        data={Ipd_Parenteralfluid_Statsdrug_Data}
                                        columns={Parenteralfluid_statsdrug_colmun}
                                        bordered={false}
                                        pagination={paginationFactory()}
                                      />
                                    </div>
                                  </Tab.Pane>
                                  {/*End statsdrugs */}
                                  {/*Start fluidmonitoring */}
                                  <Tab.Pane
                                    eventKey="fluidmonitoring"
                                    id="fluidmonitoring"
                                  >
                                    <Row className="mx-0">
                                      <Col md={{ span: 10 }}>
                                        <Row className="mt-4 mx-0">
                                          <Col md={4}>
                                            <Form.Group
                                              className="mb-2 pb-2 ms-5"
                                              controlId=""
                                            >
                                              <Form.Label className="mb-0 f14">
                                                Fluid
                                              </Form.Label>
                                              <Form.Select
                                                aria-label="Default select example"
                                                className={`${styles1.themeinput} `}
                                              >
                                                <option>Select</option>
                                                <option value="1">Input</option>
                                              </Form.Select>
                                            </Form.Group>
                                          </Col>
                                          <Col md={4}>
                                            <Form.Group
                                              className="mb-2 pb-2 me-5"
                                              controlId="Route"
                                            >
                                              <Form.Label className="mb-0 f14">
                                                Quantity
                                              </Form.Label>
                                              <Form.Control
                                                type="text"
                                                placeholder="200 ML"
                                                className={`${styles1.themeinput} `}
                                              />
                                            </Form.Group>
                                          </Col>

                                          <Col md={8}>
                                            <Form.Group
                                              className="mb-2 pb-2 mx-5"
                                              controlId="formBasicEmail"
                                            >
                                              <Form.Label className="mb-0 f14">
                                                Note
                                              </Form.Label>
                                              <Form.Control
                                                as="textarea"
                                                rows={3}
                                                placeholder=""
                                                className={`${styles1.themeinput} `}
                                              />
                                            </Form.Group>
                                          </Col>
                                        </Row>
                                      </Col>
                                      <Col md={12}>
                                        <div className="my-3 py-1 pe-5 text-end me-1">
                                          <Button
                                            className={`theme9 bg-white ${styles1.border_none}`}
                                            onClick={handleClose}
                                          >
                                            Cancel
                                          </Button>
                                          <Button
                                            variant="primary"
                                            className={styles1.serchbtn}
                                          >
                                            Submit
                                          </Button>
                                        </div>
                                      </Col>
                                    </Row>
                                    <div id="vital_monitoring">
                                      <BootstrapTable
                                        bootstrap4
                                        keyField="id"
                                        data={
                                          Ipd_Parenteralfluid_Fluidmonitoring_Data
                                        }
                                        columns={
                                          Parenteralfluid_fluidmonitoring_colmun
                                        }
                                        bordered={false}
                                        pagination={paginationFactory()}
                                      />
                                    </div>
                                  </Tab.Pane>
                                  {/*End fluidmonitoring */}
                                </Tab.Content>
                              </div>
                            </Tab.Container>
                          </Tab.Pane>
                          {/* End parenteralfluid */}
                          {/* Start Addnl Drug Prestn */}
                          <Tab.Pane eventKey="addnldrug">
                            <Row className="mx-0">
                              <Col md={{ span: 11 }}>
                                <Row className="my-4">
                                  <Col md={4}>
                                    <Form.Group
                                      className="mb-2 pb-2 mx-5"
                                      controlId=""
                                    >
                                      <Form.Label className="mb-0 f14">
                                        Drug
                                      </Form.Label>
                                      <Form.Select
                                        aria-label="Default select example"
                                        className={`${styles1.themeinput} `}
                                      >
                                        <option>Select</option>
                                        <option value="1">Inj PCM</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </Col>
                                  <Col md={4}>
                                    <Form.Group
                                      className="mb-2 pb-2 mx-5"
                                      controlId="formBasicEmail"
                                    >
                                      <Form.Label className="mb-0 f14">
                                        Dose
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="100mg"
                                        className={`${styles1.themeinput} `}
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={4}>
                                    <Form.Group
                                      className="mb-2 pb-2 mx-5"
                                      controlId="formBasicEmail"
                                    >
                                      <Form.Label className="mb-0 f14">
                                        Route
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="IV"
                                        className={`${styles1.themeinput} `}
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={4}>
                                    <Form.Group
                                      className="mb-2 pb-2 mx-5"
                                      controlId="formBasicEmail"
                                    >
                                      <Form.Label className="mb-0 f14">
                                        Frequency
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="OD"
                                        className={`${styles1.themeinput} `}
                                      />
                                    </Form.Group>
                                  </Col>

                                  <Col md={4}>
                                    <Form.Group
                                      className="mb-2 pb-2 mx-5"
                                      controlId=""
                                    >
                                      <Form.Label className="mb-0 f14">
                                        Doctor by
                                      </Form.Label>
                                      <Form.Select
                                        aria-label="Default select example"
                                        className={`${styles1.themeinput} `}
                                      >
                                        <option>Select</option>
                                        <option value="1">Dr.Aman Singh</option>
                                        <option value="2">Dr.Aman Singh</option>
                                        <option value="3">Dr.Aman Singh</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </Col>

                                  <Col md={4}>
                                    <Form.Group className="mx-5">
                                      <Form.Label className="mb-0 f14">
                                        Time
                                      </Form.Label>
                                      <div
                                        className={`${styles1.dategroup} mb-2`}
                                        controlId="formBasicEmail"
                                      >
                                        <DatePicker
                                          selected={startDate}
                                          onChange={(date) =>
                                            setStartDate(date)
                                          }
                                          showTimeSelect
                                          showTimeSelectOnly
                                          timeIntervals={15}
                                          timeCaption="Time"
                                          dateFormat="h:mm aa"
                                          className={`${styles1.themeinput}`}
                                        />
                                        <Image
                                          className={`${styles1.dateicon}`}
                                          width="16"
                                          height="16"
                                          src={clock}
                                          alt="clock"
                                        />
                                      </div>
                                    </Form.Group>
                                  </Col>
                                  <Col md={12}>
                                    <div className="mt-3 pt-1 text-end pe-5 me-1">
                                      <Button
                                        className={`theme9 bg-white ${styles1.border_none}`}
                                        onClick={handleClose}
                                      >
                                        Cancel
                                      </Button>
                                      <Button
                                        variant="primary"
                                        className={styles1.serchbtn}
                                      >
                                        Submit
                                      </Button>
                                    </div>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                            <div id="vital_monitoring">
                              <BootstrapTable
                                bootstrap4
                                keyField="id"
                                data={Ipd_Addnl_Drug_Prestn_Data}
                                columns={Addnl_Drug_Prestn_colmun}
                                bordered={false}
                                pagination={paginationFactory()}
                              />
                            </div>
                          </Tab.Pane>
                          {/* End Addnl Drug Prestn */}
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Form>
              </Col>
            </Row>
          </div>
        </div>

        {/* <Sale_Payment_Modal
        show={show}
        onHide={handleClose}
        size="md"
        id="salepaymodal"
        data-backdrop="false"
      /> */}
      </div>
    </React.Fragment>
  );
};

export default Ipd_NurseView;
