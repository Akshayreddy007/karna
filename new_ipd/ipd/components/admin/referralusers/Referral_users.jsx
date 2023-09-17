import React, { useState } from "react";
import styles1 from "../../../styles/Services.module.scss";
import styles from "../../../styles/Dashboard.module.scss";
import { Form, Row, Col, Button, Card, Modal } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../../referraldata";
const Referral_users = () => {
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
      dataField: "CONTACTNO",
      text: "CONTACTNO",
    },
    {
      dataField: "TYPE",
      text: "TYPE",
    },
    {
      dataField: "REFERRALS",
      text: "REFERRALS",
    },
    {
      dataField: "SPECIALISATION",
      text: "SPECIALISATION",
    },
    {
      dataField: "MARGIN",
      text: "MARGIN%",
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
        <Col md={12} xl={4} lg={3} xs={5} className=" justify-content-end mb-2">
          <div className=" mt-0 mt-md-4  pt-1">
            <Button
              style={{ float: "right", marginLeft: "10px" }}
              className={styles1.servicebtn}
              onClick={handleShow}
            >
              Add Users
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
          <Modal.Title>Add Referral Doc</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-md-5 mx-md-5 mx-3 py-md-5 py-2">
          <Form>
            <Row className=" mt-4 mb-4">
              <Col md={4}>
                <Form.Group className="mb-4 pb-4" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f14">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-4 pb-4" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f14">Mobile No</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Mobileno"
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-4 pb-4" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f14">Email Id</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter EmailId"
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-4 pb-4" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f14">Specialisation</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter "
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-4 pb-4" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f14">Margin %</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter EmailId"
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
              <Col md={4}></Col>
              <Col md={4}>
                <Form.Group className="mb-4 pb-4">
                  <Form.Label className="mb-0 f14">InClinic Doctor</Form.Label>
                  <Form.Select className={styles1.services_input}>
                    <option>InClinic Doctor</option>
                    <option>InClinic Doctor</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
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
          <Button variant="primary" className={styles1.servicebtn}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default Referral_users;
