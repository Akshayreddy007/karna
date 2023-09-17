import React from "react";
import styles1 from "../../../styles/IPD_Admin/Nurse.module.scss";
import { Form, Row, Col, Button, Modal } from "react-bootstrap";

const AddBedType = (props) => {
  return (
    <React.Fragment>
    <Modal size="lg" id="md1" {...props}>
      <Modal.Header closeButton className={styles1.services_border}>
        <Modal.Title>Add Bed Type</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-5 mx-5 py-5">
        <Form>
          <Row className=" mt-5 mb-4">
            <Col md={6} className="pe-5 ps-md-4">
              <Form.Group className="mb-4 pb-4" controlId="formBasicEmail">
                <Form.Label className="mb-0 f14">Type Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  className={styles1.services_input}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="pe-5 ps-md-4">
              <Form.Group className="mb-4 pb-4">
                <Form.Label className="mb-0 f14">Bed Category</Form.Label>
                <Form.Select className={styles1.services_input}>
                  <option>select</option>
                  <option> Luxury </option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} className="pe-5 ps-md-4">
              <Form.Group className="mb-4 pb-4">
                <Form.Label className="mb-0 f14">Fee</Form.Label>
                <Form.Select className={styles1.services_input}>
                  <option>select</option>
                  <option> Yes </option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} className="pe-5 ps-md-4">
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
      </Modal.Body>
      <Modal.Footer>
        <Button className={`theme9 bg-white ${styles1.border_none} brnone`}>
          Cancel
        </Button>
        <Button variant="primary" className={styles1.servicebtn}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  </React.Fragment>
  )
};

export default AddBedType;
