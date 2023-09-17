import React from "react";
import { Breadcrumb, Row, Col, Form, Card } from "react-bootstrap";
import styles from "../../../styles/Services.module.scss";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../../referraldoc_data";
const Referralusers_View = () => {
  const columns = [
    {
      dataField: "ID",
      text: "ID",
    },
    {
      dataField: "PATIENTNAME",
      text: "PATIENT NAME",
    },
    {
      dataField: "SERVICETAKEN",
      text: "SERVICE TAKEN",
    },
    {
      dataField: "TOTALBILL",
      text: "TOTAL BILL",
    },
    {
      dataField: "DOCTORS1",
      text: "DOCTORS %",
    },
    {
      dataField: "PAYMENTSTATUS",
      text: "PAYMENT STATUS",
    },
    {
      dataField: "AMOUNTINRS",
      text: "AMOUNT IN RS",
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
            Referral Doc
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="theme14">
            Tony Danza
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="bg-white mt-3 br8 mb-3 px-3 py-3">
          <Row>
            <Col md={12}>
              <div className="d-flex justify-content-between">
                <div>
                  <Form.Label className="theme12">ID</Form.Label>
                  <div className="theme14 font-weight-500">01</div>
                </div>

                <div className="ms-5">
                  <Form.Label className="theme12 f14">NAME</Form.Label>
                  <div className="theme14 font-weight-500 f14">Tony Danza</div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f14">CONTACT NO</Form.Label>
                  <div className="theme14 font-weight-500 f14">
                    +91 9014567345
                  </div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f14">
                    Specialisation{" "}
                  </Form.Label>
                  <div className="theme14 font-weight-500 f14">Cardio</div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f14">Margin %</Form.Label>
                  <div className="theme14 font-weight-500 f14">5%</div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f14">Referrals</Form.Label>
                  <div className="theme14 font-weight-500 f14">25%</div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f14">
                    Payment Status
                  </Form.Label>
                  <div className="theme14 font-weight-500 f14">Pending</div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f14">Status</Form.Label>
                  <div
                    className={`theme14 font-weight-500 f14 ${styles.services_active}`}
                  >
                    Active
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

export default Referralusers_View;
