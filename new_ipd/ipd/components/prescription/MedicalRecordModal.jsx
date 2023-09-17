import React, { useState } from 'react'
import styles1 from '../../styles/Prescription.module.scss'
import { Modal,Form,Row,Col,Button } from 'react-bootstrap'
import MedicalRecordPrint from './MedicalRecordPrint';
const MedicalRecordModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(handleShow);
  return (
    <React.Fragment>
    <Modal size="lg"  {...props}>
      <Modal.Header closeButton className={styles1.services_border}>
        <Modal.Title>Request a medical record</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-3 mx-5 py-5">
        <Form>
          <Row className=" mt-4 mb-4">
            <Col md={5}>
            <Form.Group className="mb-4 pb-4">
            <Form.Label className="mb-0 f14">Record Type</Form.Label>
            <Form.Select className={styles1.services_input}>
              <option>Lab Report</option>
              <option>1</option>
              <option>2</option>
            </Form.Select>
          </Form.Group>
            </Col>
            <Col md={7}></Col>
            <Col md={5}>
              <Form.Group className="mb-4 pb-4">
                <Form.Label className="mb-0 f14">Report From</Form.Label>
                <Form.Control
                type="date"
                placeholder="Enter"
                className={styles1.services_input}
              />
              </Form.Group>
            </Col>
            <Col md={1}></Col>
            <Col md={5}>
              <Form.Group className="mb-4 pb-4">
                <Form.Label className="mb-0 f14">Report To</Form.Label>
                <Form.Control
                type="date"
                placeholder="Enter"
                className={styles1.services_input}
              />
              </Form.Group>
            </Col>
            <Col md={1}></Col>
            <Col md={5}>
              <Form.Group className="mb-4">
                <Form.Label className="mb-0 f14">Doctor Expiry At</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter Name"
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
        <Button variant="primary" className={styles1.servicebtn} onClick={handleShow}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
    <MedicalRecordPrint show={show} onHide={handleClose}/>
  </React.Fragment>
  )
}

export default MedicalRecordModal