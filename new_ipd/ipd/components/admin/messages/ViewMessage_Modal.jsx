import React from "react";
import styles1 from "../../../styles/Services.module.scss";
import { Form, Row, Col, Button, Modal } from "react-bootstrap";
const ViewMessage_Modal = (props) => {
  return (
    <React.Fragment>
      <Modal size="lg" id="md1" {...props}>
        <Modal.Header closeButton className={styles1.services_border}>
          <Modal.Title> Message template</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5 mx-5 py-5">
          <div className="d-flex">
            <div>
              <Form.Label className="theme12">Name</Form.Label>
              <div className="theme14 ">Birthday Wishes</div>
            </div>
            <div>
              <Form.Label className="theme12">Category</Form.Label>
              <div className="theme14 ">Greetings</div>
            </div>
            <div>
              <Form.Label className="theme12">Status</Form.Label>
              <div className="theme14 ">Active</div>
            </div>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
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

export default ViewMessage_Modal;
