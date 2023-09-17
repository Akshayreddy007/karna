import React from "react";
import styles from "../../../styles/Appointments.module.scss";
import styles1 from "../../../styles/Services.module.scss";
import {
  Form,
  Table,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Breadcrumb,
} from "react-bootstrap";
import Users_search from "./Users_search";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../../usersdata8";
import { useState } from "react";
const Users_Roles = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const columns = [
    {
      dataField: "ID",
      text: "ID",
    },
    {
      dataField: "ROLENAME",
      text: "ROLENAME",
    },
    {
      dataField: "DISCOUNTS",
      text: "DISCOUNTS",
    },
    {
      dataField: "USERS",
      text: "USERS",
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
      <div className="d-lg-flex d-md-inline-block d-flex">
        <Col md={12} xl={8} lg={9} xs={9}>
          <div className="bg-white mt-3 br8 mb-3">
            <div className="px-3 py-2">
              <Users_search />
            </div>
          </div>
        </Col>
        <Col md={12} xl={4} lg={3} xs={3} className=" justify-content-end">
          <div className="  mt-4 pt-1  ">
            <Button
              style={{ float: "right", marginLeft: "10px" }}
              className={styles1.servicebtn}
              onClick={handleShow}
            >
              Add Role
            </Button>
          </div>
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

      <Modal show={show} onHide={handleClose} size="lg" id="md1">
        <Modal.Header closeButton className={styles1.services_border}>
          <Modal.Title>Add New Role</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5 mx-5 py-5">
          <div className="mt-3">
            <Form>
              <Row className=" mt-4 mb-4">
                <Col md={5}>
                  <Form.Group className="mb-4 pb-4" controlId="formBasicEmail">
                    <Form.Label className="mb-0 f14"> Role Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      className={styles1.services_input}
                    />
                  </Form.Group>
                </Col>
                <Col md={7}></Col>
                <Col md={5}>
                  <Form.Group className="mb-4 pb-4" controlId="formBasicEmail">
                    <Form.Label className="mb-0 f14">
                      {" "}
                      Max Discount %
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      className={styles1.services_input}
                    />
                  </Form.Group>
                </Col>
                <Col md={2}></Col>
                <Col md={5}>
                  <Form.Group className="mb-4 pb-4">
                    <Form.Label className="mb-0 f14">Status</Form.Label>
                    <Form.Select className={styles1.services_input}>
                      <option>Active</option>
                      <option>In Active </option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className={`theme9 bg-white ${styles1.border_none}`}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button variant="primary" className={styles1.servicebtn}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default Users_Roles;
