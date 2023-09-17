import React from "react";
import { Breadcrumb, Row, Col, Form, Card } from "react-bootstrap";
import styles from "../../../styles/Services.module.scss";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../../servicesviewdata";
const Services_view = () => {
  const columns = [
    {
      dataField: "ID",
      text: "ID",
    },
    {
      dataField: "DOCTORNAME",
      text: "DCOTOR NAME",
    },
    {
      dataField: "TYPE",
      text: "TYPE",
    },
    {
      dataField: "PRICE",
      text: "PRICE",
    },
    {
      dataField: "DOCTORS1",
      text: "DOCTORS %",
    },
    {
      dataField: "MAXDISCOUNTS",
      text: "MAX DISCOUNTS",
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
            Service
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="theme14">
            Op Consultation
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
                    OP Consultation
                  </div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f14">TYPE</Form.Label>
                  <div className="theme14 font-weight-500 f14">Appointment</div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f14">PRICE</Form.Label>
                  <div className="theme14 font-weight-500 f14">400/-</div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f14">GST%</Form.Label>
                  <div className="theme14 font-weight-500 f14">18%</div>
                </div>
              </div>
            </Col>
            <Col md={4} className="d-flex justify-content-end">
              <div className="d-flex">
                <div className="ms-5">
                  <Form.Label className="theme12 f14">DOCTORS</Form.Label>
                  <div className="theme14 font-weight-500 f14">5</div>
                </div>
                <div className="ms-5">
                  <Form.Label className="theme12 f14">STATUS</Form.Label>
                  <div className={`theme14 f14  ${styles.services_active}`}>
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

export default Services_view;
