import React, { useState } from "react";
import Services_search from "./Services_search";
import styles from "../../../styles/Services.module.scss";
import { Form, Row, Col, Button, Card, Modal } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../../servicestypesdata";
const Services_types = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const columns = [
    {
      dataField: "ID",
      text: "ID",
    },
    {
      dataField: "NAME",
      text: "NAME",
    },
    {
      dataField: "TYPE",
      text: "TYPE",
    },
    {
      dataField: "FEE",
      text: "FEE",
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
      <div className="d-lg-flex d-md-grid d-grid">
        <Col md={12} xl={8} lg={9} xs={12}>
          <div className="bg-white mt-3 br8 mb-3">
            <div className="px-3 py-2">
              <Services_search />
            </div>
          </div>
        </Col>
        <Col md={12} xl={4} lg={3} xs={5} className=" justify-content-end">
          <div className="  mt-4 pt-1  ">
            <Button
              style={{ float: "right", marginLeft: "10px" }}
              className={styles.servicebtn}
              onClick={handleShow}
            >
              Add Type
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
        <Modal.Header closeButton className={styles.services_border}>
          <Modal.Title>Add Service Type</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5 mx-5 py-5">
          <Form>
            <Row className=" mt-4 mb-4">
              <Col md={5}>
                <Form.Group className="mb-4 pb-4" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f14">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    className={styles.services_input}
                  />
                </Form.Group>
              </Col>
              <Col md={2}></Col>
              <Col md={5}>
                <Form.Group className="mb-4 pb-4">
                  <Form.Label className="mb-0 f14">Type</Form.Label>
                  <Form.Select className={styles.services_input}>
                    <option>Appointment</option>
                    <option>Multi Step Procedure </option>
                    <option>Package</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group className="mb-4 ">
                  <Form.Label className="mb-0 f14">Status</Form.Label>
                  <Form.Select className={styles.services_input}>
                    <option>Active</option>
                    <option>In Active </option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={2}></Col>
              <Col md={5}>
                <Form.Group className="mb-4 ">
                  <Form.Label className="mb-0 f14">Fee</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Fee"
                    className={styles.services_input}
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group className="mb-4 pb-4">
                  <Form.Label className="mb-0 f14">Validity</Form.Label>
                  <Form.Select className={styles.services_input}>
                    <option>10 Days</option>
                    <option>5 Days </option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className={`theme9 bg-white ${styles.border_none}`}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button variant="primary" className={styles.servicebtn}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default Services_types;
