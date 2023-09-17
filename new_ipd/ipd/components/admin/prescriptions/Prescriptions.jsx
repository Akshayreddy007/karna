import React from "react";
import Users_search from "../users/Users_search.jsx";
import { Col, Card, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../../prescriptionsdata";
import styles from "../../../styles/admin/Prescription.module.scss";
const Prescriptions = () => {
  const columns = [
    {
      dataField: "ID",
      text: "ID",
    },
    {
      dataField: "TEMPLATE",
      text: "TEMPLATE",
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
  return (
    <React.Fragment>
      <div className="d-lg-flex d-md-inline-block d-flex align-items-center">
        <Col md={12} xl={8} lg={9} xs={9}>
          <div className="bg-white mt-3 br8 mb-3">
            <div className="px-3 py-2">
              <Users_search />
            </div>
          </div>
        </Col>
        <Col md={12} xl={4} lg={3} xs={3} className=" justify-content-end text-end">
          <Button className={styles.btn}>Create Template</Button>
        </Col>
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

export default Prescriptions;
