import React, { useState } from "react";
import styles1 from "../../../styles/Services.module.scss";
import styles from "../../../styles/Dashboard.module.scss";
import { Form, Row, Col, Button, Card, Modal } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../../qrcodedata";
import Qrcode_viewmodal from "./Qrcode_viewmodal";

const Qrcode = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);

  const openModal1 = () => {
    setModalShow(true);
    setShow(false);
  };
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
      dataField: "RECEPTIONIST",
      text: "RECEPTIONIST",
    },
    {
      dataField: "MOBILENO",
      text: "MOBILENO",
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
              <div className="row">
                <Col md={8} xs={12}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Enter Keyword"
                      className={styles.textboxwdth44}
                      style={{ width: "100%!important" }}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Button
                    style={{ float: "right", marginLeft: "10px" }}
                    className={styles1.servicebtn}
                  >
                    Search
                  </Button>
                </Col>
              </div>
            </div>
          </div>
        </Col>
        <Col md={12} xl={4} lg={3} xs={5} className=" justify-content-end">
          <div className="mt-0 mt-md-4  pt-1 ">
            <Button
              style={{ float: "right", marginLeft: "10px" }}
              className={` mb-md-0 mb-2 ${styles1.servicebtn}`}
              onClick={handleShow}
            >
              Generate QR
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

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton className={styles1.services_border} >
          <Modal.Title>Generate QR Code</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-md-4 mx-md-5 mx-4 py-md-5 py-3">
          <Form>
            <Row className=" mt-4 mb-4">
              <Col md={5}>
                <Form.Group className="mb-4 pb-4" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f14">Name</Form.Label>
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
                  <Form.Label className="mb-0 f14">Receptionist</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter "
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
              <Col md={2}></Col>
              <Col md={5}>
                <Form.Group className="mb-4 pb-4" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f14">Mobile No</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Mobileno"
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group className="mb-4 pb-4">
                  <Form.Label className="mb-0 f14">Status</Form.Label>
                  <Form.Select className={styles1.services_input}>
                    <option>Active</option>
                    <option>In Active</option>
                  </Form.Select>
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
          <Button variant="primary" className={styles1.servicebtn} onClick={openModal1}>
            Generate QR
          </Button>
        </Modal.Footer>
      </Modal>

      <Qrcode_viewmodal  show={modalShow} onHide={() => setModalShow(false)}/>
    </React.Fragment>
  );
};

export default Qrcode;
