import React from "react";
import styles1 from "../../../styles/Services.module.scss";
import { Form, Row, Col, Button, Card, Modal } from "react-bootstrap";
const Messageconfig_modal = (props) => {
  return (
    <React.Fragment>
      <Modal size="lg" id="md1" {...props}>
        <Modal.Header closeButton className={styles1.services_border}>
          <Modal.Title> Message Config</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5 mx-5 py-5">
          <Form>
            <Row className=" mt-4 mb-4">
              <Col md={5}>
                <Form.Group className="mb-4">
                  <Form.Label className="mb-0 f14">Service Provider</Form.Label>
                  <Form.Select className={styles1.services_input}>
                    <option>Sms Config</option>
                    <option>Multi Step Procedure </option>
                    <option>Package</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={7}></Col>
              <Col md={12}>
                <Form.Group className="mb-4">
                  <Form.Label className="mb-0 f14"> Id</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=" Id"
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-4 ">
                  <Form.Label className="mb-0 f14">Secret Key</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=" Id"
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className={`theme9 bg-white ${styles1.border_none}`}>
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

export default Messageconfig_modal;
