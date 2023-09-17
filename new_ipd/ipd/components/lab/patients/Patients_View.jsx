import React, { useState } from "react";
import { Breadcrumb, Row, Col, Form, Card, Tab, Nav } from "react-bootstrap";
import styles from "../../../styles/Services.module.scss";
import styles1 from "../../../styles/Labdashboard.module.scss";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Addtestvalues_modal from "../Addtestvalues_modal";
import Labtest_modal from "../dashboard/Labtest_modal";
const Patients_View = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [modalShow, setModalShow] = useState(false);
  const handlemodalClose = () => setModalShow(false);

  const columns = [
    {
      dataField: "ID",
      text: "ID",
    },
    {
      dataField: "TESTNAME",
      text: "TESTNAME",
    },
    {
      dataField: "TESTDATE",
      text: "TESTDATE",
    },
    {
      dataField: "TYPE",
      text: "TYPE",
    },
    {
      dataField: "DOCTOR",
      text: "DOCTOR",
    },
    {
      dataField: "STATUS",
      text: "STATUS",
    },

    {
      dataField: "ACTION",
      text: "ACTION",
    },
  ];
  const columns1 = [
    {
      dataField: "SNO",
      text: "SNO",
    },
    {
      dataField: "TESTNAME",
      text: "TEST NAME",
    },
    {
      dataField: "TESTDATE",
      text: "TEST DATE",
    },
    {
      dataField: "TESTSTATUS",
      text: "TEST STATUS",
    },
    {
      dataField: "PAYMENTSTATUS",
      text: "PAYMENT STATUS",
    },
    {
      dataField: "BILLAMOUNT",
      text: "BILL AMOUNT",
    },
    {
      dataField: "ACTION",
      text: "ACTIONS",
    },
  ];

  const products = [
    {
      ID: <div className="nowwrap"> 01</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      TESTDATE: <div className="nowwrap">23 Jan 2023</div>,
      TYPE: <div className="nowwrap">OP</div>,
      DOCTOR: <div className="nowwrap">Allison Kenter</div>,
      STATUS: <div className={styles1.inprogress}> In Progress</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i
            className="fal fa-file me-3  f14"
            onClick={() => setShow(true)}
          ></i>
          <i
            className="fal fa-edit me-3  f14"
            onClick={() => setModalShow(true)}
          ></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 02</div>,
      TESTNAME: <div className="nowwrap">Fasting blood glucose(FBS)</div>,
      TESTDATE: <div className="nowwrap">23 Jan 2023</div>,
      TYPE: <div className="nowwrap">IP</div>,
      DOCTOR: <div className="nowwrap">Kierra Carder</div>,
      STATUS: <div className={styles1.inprogress}> In Progress</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i
            className="fal fa-file me-3  f14"
            onClick={() => setShow(true)}
          ></i>
          <i className="fal fa-edit me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 03</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      TESTDATE: <div className="nowwrap">23 Jan 2023</div>,
      TYPE: <div className="nowwrap">OT</div>,
      DOCTOR: <div className="nowwrap">Kierra Carder</div>,
      STATUS: <div className={styles1.reportspending}> Reports Pending</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i
            className="fal fa-file me-3  f14"
            onClick={() => setShow(true)}
          ></i>
          <i className="fal fa-edit me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 04</div>,
      TESTNAME: <div className="nowwrap">Fasting blood glucose(FBS)</div>,
      TESTDATE: <div className="nowwrap">23 Jan 2023</div>,
      TYPE: <div className="nowwrap">OP</div>,
      DOCTOR: <div className="nowwrap">Kierra Carder</div>,
      STATUS: <div className={styles1.pending}> Pending Samples</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i
            className="fal fa-file me-3  f14"
            onClick={() => setShow(true)}
          ></i>
          <i className="fal fa-edit me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 05</div>,
      TESTNAME: <div className="nowwrap">Fasting blood glucose(FBS)</div>,
      TESTDATE: <div className="nowwrap">23 Jan 2023</div>,
      TYPE: <div className="nowwrap">IP</div>,
      DOCTOR: <div className="nowwrap">Allison Kenter</div>,
      STATUS: <div className={styles1.reportspending}> Reports Pending</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i
            className="fal fa-file me-3  f14"
            onClick={() => setShow(true)}
          ></i>
          <i className="fal fa-edit me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 06</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      TESTDATE: <div className="nowwrap">23 Jan 2023</div>,
      TYPE: <div className="nowwrap">OT</div>,
      DOCTOR: <div className="nowwrap">Allison Kenter</div>,
      STATUS: <div className={styles1.reportspending}> Reports Pending</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-file me-3  f14"></i>
          <i className="fal fa-edit me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 07</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      TESTDATE: <div className="nowwrap">23 Jan 2023</div>,
      TYPE: <div className="nowwrap">OP</div>,
      DOCTOR: <div className="nowwrap">Allison Kenter</div>,
      STATUS: <div className={styles1.reportspending}> Reports Pending</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-file me-3  f14"></i>
          <i className="fal fa-edit me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 08</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      TESTDATE: <div className="nowwrap">23 Jan 2023</div>,
      TYPE: <div className="nowwrap">OP</div>,
      DOCTOR: <div className="nowwrap">Allison Kenter</div>,
      STATUS: <div className={styles1.reportspending}> Reports Pending</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-file me-3  f14"></i>
          <i className="fal fa-edit me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 09</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      TESTDATE: <div className="nowwrap">23 Jan 2023</div>,
      TYPE: <div className="nowwrap">OP</div>,
      DOCTOR: <div className="nowwrap">Allison Kenter</div>,
      STATUS: <div className={styles1.pending}> Pending Samples</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-file me-3  f14"></i>
          <i className="fal fa-edit me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 10</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      TESTDATE: <div className="nowwrap">23 Jan 2023</div>,
      TYPE: <div className="nowwrap">OP</div>,
      DOCTOR: <div className="nowwrap">Allison Kenter</div>,
      STATUS: <div className={styles1.reportspending}> Reports Pending</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-file me-3  f14"></i>
          <i className="fal fa-edit me-3  f14"></i>
        </div>
      ),
    },
  ];

  const products1 = [
    {
      SNO: <div className="nowwrap"> 01</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      TESTDATE: <div className="nowwrap">23 JAN 2023</div>,
      TESTSTATUS: <div className="nowwrap">COMPLETED</div>,
      PAYMENTSTATUS: <div className="nowwrap">Pending</div>,
      BILLAMOUNT: <div className="nowwrap">2500</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-file-invoice me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
  ];
  return (
    <React.Fragment>
      <div className="mt-3">
        <Breadcrumb>
          <Breadcrumb.Item href="#" className="theme12">
            <i className="fa fa-home"></i>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#" className="theme12">
            Patients
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="theme14">
            April Curtis
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="bg-white mt-3 br8 mb-3 px-3 py-3">
          <div className={`${styles.ovrflw} d-flex`}>
            <Col xl={8} md={12} lg={12}>
              <div className="d-flex">
                <div>
                  <Form.Label className="theme12 f13">ID</Form.Label>
                  <div className="theme14 font-weight-500 f13">01</div>
                </div>

                <div className="ms-5">
                  <Form.Label className="theme12 f13">NAME</Form.Label>
                  <div className="theme14 font-weight-500 f13">
                    April Curtis
                  </div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f13">MOBILENO</Form.Label>
                  <div className="theme14 font-weight-500 f13">
                    +919911991192
                  </div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f13">EMAILID</Form.Label>
                  <div className="theme14 font-weight-500 f13">
                    aprinc@gmail.com
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} md={12} lg={12} className="d-flex justify-content-end">
              <div className="d-flex">
                <div className="ms-5">
                  <Form.Label className="theme12 f13">STATUS</Form.Label>
                  <div
                    className={`theme14 f13  ${styles.services_active} font-weight-500`}
                  >
                    In-Patients
                  </div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f13">REPORTS</Form.Label>
                  <div className="theme14  f13 font-weight-500">
                    <span className={styles.services_inactive}>2</span>-Pending
                  </div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f13">PAYMENT</Form.Label>
                  <div className="theme14  f13 font-weight-500">
                    <span className={styles.services_inactive}> 3000/-</span>
                    <span>Due</span>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </div>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="mt-4 bdrbtm1  bg-white">
            <div className="d-flex">
              <Col sm={11} className=" px-2">
                <Nav variant="pills" className="flex-row">
                  <Nav.Item>
                    <Nav.Link eventKey="first" className="f13">
                      All Test
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" className="f13">
                      Transactions
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col
                sm={1}
                className=" px-3  d-flex align-items-center justify-content-end"
              >
                <i className="fal fa-filter"></i>
              </Col>
            </div>
            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Card>
                    <Card.Body className="pb-0" id="services">
                      <BootstrapTable
                        bootstrap4
                        keyField="id"
                        data={products}
                        columns={columns}
                        bordered={false}
                        pagination={paginationFactory()}
                      />
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Card>
                    <Card.Body className="pb-0" id="services">
                      <BootstrapTable
                        bootstrap4
                        keyField="id"
                        data={products1}
                        columns={columns1}
                        bordered={false}
                        pagination={paginationFactory()}
                      />
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </div>
        </Tab.Container>
      </div>
      <Addtestvalues_modal show={show} onHide={handleClose} />
      <Labtest_modal show={modalShow} onHide={handlemodalClose} />
    </React.Fragment>
  );
};

export default Patients_View;
