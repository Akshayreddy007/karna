import React, { useState } from "react";
import { Card, Button, Modal, Form, Table, Col, Row } from "react-bootstrap";
import Searchbar from "../patients/Searchbar";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../../pharmapatientsdata";
import styles1 from "../../../styles/Services.module.scss";
const Patients = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const columns = [
    {
      dataField: "UHID",
      text: "UHID",
    },
    {
      dataField: "NAME",
      text: "NAME",
    },
    {
      dataField: "AGEGENDER",
      text: "AGEGENDER",
    },
    {
      dataField: "MOBILENO",
      text: "MOBILENO",
    },
    {
      dataField: "CONSULTANTDOCTOR",
      text: "CONSULTANTDOCTOR",
    },
    {
      dataField: "BILLSTATUS",
      text: "BILLSTATUS",
    },
    {
      dataField: "ACTION",
      text: "ACTION",
    },
  ];
  return (
    <React.Fragment>
      <div className="d-lg-flex d-md-grid d-grid">
        <Col md={12} xl={10} lg={9} xs={12}>
          <div className="bg-white mt-3 br8 mb-3 py-3">
            <Searchbar />
          </div>
        </Col>
        <Col md={12} xl={2} lg={3} xs={5} className=" justify-content-end mb-2">
          <div className=" mt-0 mt-md-4  pt-1   ">
            <Button
              style={{ float: "right", marginLeft: "10px" }}
              className={styles1.servicebtn}
              onClick={handleShow}
            >
              Add Patient
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
          <Modal.Title>Add Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4 mx-5 py-5">
          <Form>
            <Row className=" mt-4 mb-4">
              <Col md={1}></Col>
              <Col md={5}>
                <Form.Group className="mb-2 pb-2" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f14">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group className="mb-2 pb-2">
                  <Form.Label className="mb-0 f14">Mobileno</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Mobileno"
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={1}></Col>
              <Col md={5}>
                <Form.Group className="mb-2 pb-2">
                  <Form.Label className="mb-0 f14">EmailId</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter EmailId"
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group className="mb-2 pb-2">
                  <Form.Label className="mb-0 f14">Doctor</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Doctor"
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={1}></Col>
              <Col md={10}>
                <Form.Group className="mb-2 pb-2">
                  <Form.Label className="mb-0 f14">Address</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Col>
            </Row>
          </Form>
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

export default Patients;
