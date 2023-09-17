import React, { useState } from "react";
import styles1 from "../../../styles/Services.module.scss";
import styles2 from "../../../styles/Labdashboard.module.scss";
import styles3 from "../../../styles/Dashboard.module.scss";
import { Form, Row, Col, Button, Card, Modal, Table } from "react-bootstrap";
import Link from "next/link";

const Schedule_modal = (props) => {
  return (
    <React.Fragment>
      <Modal
        size="lg"
        {...props}
        data-backdrop="false"
        style={{ backgroundColor: "#0000007d" }}
      >
        <Modal.Header closeButton className={styles2.bdr_bt}>
          <div className="w-100">
            <Modal.Title>Schedule test</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className="pt-0 pb-0">
          <Row>
            <Col md={7} className="pt-3 pb-3">
              <Row className="mb-3">
                <Col md={8}>
                  <div className="theme14 f14">Complete blood picture(CBP)</div>
                </Col>
                <Col md={4}>
                  <div className="theme12 f13">4th Feb, 2023 - 5 PM</div>
                </Col>
              </Row>
              <div className="d-flex mb-3">
                <div className="theme14 f14">Fasting blood glucose(FBS)</div>
              </div>
            </Col>
            <Col md={5} className={styles2.bg1}>
              <div className="px-2 py-3">
                <Form.Check
                  type="checkbox"
                  id="id"
                  label="Schedule all test at same time"
                  name="radio"
                  className="f13 mt-4 "
                />
                <div className="mt-4">
                  <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Label className="theme14 f13">Date</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="25000"
                      className={`${styles1.services_input}`}
                    />
                  </Form.Group>
                  <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Label className="theme14 f13">Time</Form.Label>
                    <Form.Control
                      type="time"
                      placeholder="25000"
                      className={`${styles1.services_input}`}
                    />
                  </Form.Group>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div className={`d-flex justify-content-end `}>
            <Link href="#" className="me-5 theme9 mt-2 f13">
              Cancel
            </Link>
            <Button className={`${styles1.servicebtn2} me-3`}>Schedule</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default Schedule_modal;
