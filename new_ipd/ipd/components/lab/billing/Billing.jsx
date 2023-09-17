import React from "react";
import { Card, Button, Modal, Form, Table, Col } from "react-bootstrap";
import Searchbar from "../dashboard/Searchbar";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../../labbillingdata";

const Billing = () => {
  const columns = [
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
  return (
    <React.Fragment>
      <div className="d-lg-flex d-md-grid d-grid">
        <Col md={12} xl={8} lg={9} xs={12}>
          <div className="bg-white mt-3 br8 mb-3">
            <div className="px-3 py-2">
              <Searchbar />
            </div>
          </div>
        </Col>
        <Col
          md={12}
          xl={4}
          lg={3}
          xs={4}
          className=" justify-content-end"
        ></Col>
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
    </React.Fragment>
  );
};

export default Billing;
