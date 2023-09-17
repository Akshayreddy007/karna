import React from "react";
import styles1 from "../../../styles/Services.module.scss";
import { Form, Row, Col, Button, Card, Modal } from "react-bootstrap";
const AddMessage_Modal = (props) => {
  return (
    <React.Fragment>
      <Modal size="lg" id="md1" {...props}>
        <Modal.Header closeButton className={styles1.services_border}>
          <Modal.Title>Add Message template</Modal.Title>
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
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
              <Col md={2}></Col>
              <Col md={5}>
                <Form.Group className="mb-4 pb-4">
                  <Form.Label className="mb-0 f14">Category</Form.Label>
                  <Form.Select className={styles1.services_input}>
                    <option>Appointment</option>
                    <option>Multi Step Procedure </option>
                    <option>Package</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group className="mb-4 pb-4">
                  <Form.Label className="mb-0 f14">Template Id</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Template Id"
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
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
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

export default AddMessage_Modal;
