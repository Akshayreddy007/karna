import React from "react";
import styles1 from "../../../styles/IPD_Admin/Nurse.module.scss";
import { Form, Row, Col, Button,Modal} from "react-bootstrap";
const AddWard = (props) => {
  return (
    <React.Fragment>
    <Modal size="lg" id="md1" {...props}>
    <Modal.Header closeButton className={styles1.services_border}>
      <Modal.Title>Add Ward</Modal.Title>
    </Modal.Header>
    <Modal.Body className="px-5 mx-5 py-5">
      <Form>
        <Row className=" mt-5 mb-4">
          <Col md={6} className="pe-5 ps-md-4">
          <Form.Group className="mb-4 pb-4" controlId="formBasicEmail">
            <Form.Label className="mb-0 f14">Ward Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              className={styles1.services_input}
            />
          </Form.Group>
        </Col>
        <Col md={6} className="pe-5 ">
            <Form.Group className="mb-4 pb-4">
              <Form.Label className="mb-0 f14">Floor </Form.Label>
              <Form.Select className={styles1.services_input}>
                <option>Floor A</option>
                <option>Floor B </option>
                <option>Floor C</option>
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
  );
};

export default AddWard;
