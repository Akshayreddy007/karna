import React from "react";
import { Breadcrumb, Row, Col, Form, Card, Tab, Nav } from "react-bootstrap";
import styles from "../../../styles/Services.module.scss";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../../pharmapatientsviewdata";
const Patients_View = () => {
  const columns = [
    {
      dataField: "ID",
      text: "ID",
    },
    {
      dataField: "BILLNUMBER",
      text: "BILLNUMBER",
    },
    {
      dataField: "BILLDATE",
      text: "BILLDATE",
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
      dataField: "PAYMENT",
      text: "PAYMENT",
    },

    {
      dataField: "ACTION",
      text: "ACTION",
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
          <Row className={styles.ovrflw}>
            <Col md={8}>
              <div className="d-flex">
                <div>
                  <Form.Label className="theme12">ID</Form.Label>
                  <div className="theme14 font-weight-500">01</div>
                </div>

                <div className="ms-5">
                  <Form.Label className="theme12 f14">NAME</Form.Label>
                  <div className="theme14 font-weight-500 f14">
                    April Curtis
                  </div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f14">MOBILENO</Form.Label>
                  <div className="theme14 font-weight-500 f14">
                    +919911991192
                  </div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f14">EMAILID</Form.Label>
                  <div className="theme14 font-weight-500 f14">
                    aprinc@gmail.com
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="d-flex justify-content-end">
              <div className="d-flex">
                <div className="ms-5">
                  <Form.Label className="theme12 f14">STATUS</Form.Label>
                  <div className={`theme14 f14  ${styles.services_active}`}>
                    In-Patients
                  </div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f14">REPORTS</Form.Label>
                  <div className="theme14  f14">
                    <span className={styles.services_inactive}>2</span>-Pending
                  </div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f14">PAYMENT</Form.Label>
                  <div className="theme14  f14">
                    <span className={styles.services_inactive}> 3000/-</span>
                    <span>Due</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

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
      </div>
    </React.Fragment>
  );
};

export default Patients_View;
