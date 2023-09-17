import React, { useState } from "react";
import {
  Card,
  Container,
  Table,
  Modal,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import styles from "../../styles/Appointments.module.scss";
import styles1 from "../../styles/DoctorProfile.module.scss";
import Slotsetup_modal from "./Slotsetup_modal";
const Weekly_schedule = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modalShow, setModalShow] = useState(false);
  return (
    <React.Fragment>
      <Container className="mt-3">
        <Card className="px-4">
          <div className="font-weight-500 pt-4 mb-3">
            Set Your Weekly Schedule
          </div>
          <div className="table-responsive">
            <Table className="table-bordered">
              <thead className={styles1.bdwdth}>
                <tr>
                  <th className=""></th>
                  <th className={styles1.bdleft}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles1.w_10}>
                    <span>
                      <i className="fal fa-edit"></i>
                    </span>
                    <b> Monday </b>
                  </td>
                  <td>
                    <div className="d-flex">
                      <div
                        className={styles1.cdborder}
                        onClick={() => setModalShow(true)}
                      >
                        <div className="mt-1 ">
                          In Clinic : <b>2hrs</b>
                        </div>
                        <div className="row mx-2">
                          <div className={`${styles1.consultbg} col-md-6 mx-1`}>
                            Consultation
                          </div>
                          <div className={`${styles1.consultbg} col-md-6 mx-1`}>
                            Followup
                          </div>
                          <div className={`${styles1.consultbg} col-md-6`}>
                            Dressing
                          </div>
                        </div>
                      </div>
                      <div className={styles1.cdborder1}>
                        <div className="mt-1">
                          In Clinic : <b>3hrs</b>
                        </div>
                        <div className="row mx-2 mt-1">
                          <div className={`${styles1.consultbg} col-md-6 mx-1`}>
                            Consultation
                          </div>
                          <div className={`${styles1.consultbg} col-md-6 mx-1`}>
                            Followup
                          </div>
                          <div className={`${styles1.consultbg} col-md-6`}>
                            Dressing
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className={styles1.w_10}>
                    <span>
                      <i className="fal fa-edit"></i>
                    </span>{" "}
                    <b> Tuesday </b>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td className={styles1.w_10}>
                    <span>
                      <i className="fal fa-edit"></i>
                    </span>{" "}
                    <b> Wednesday </b>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td className={styles1.w_10}>
                    <span>
                      <i className="fal fa-edit"></i>
                    </span>{" "}
                    <b> Thursday</b>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td className={styles1.w_10}>
                    <span>
                      <i className="fal fa-edit"></i>
                    </span>{" "}
                    <b> Friday </b>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td className={styles1.w_10}>
                    <span>
                      <i className="fal fa-edit"></i>
                    </span>{" "}
                    <b> Saturday</b>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td className={styles1.w_10}>
                    <span>
                      <i className="fal fa-edit"></i>
                    </span>{" "}
                    <b> Sunday </b>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card>
      </Container>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton className={styles.modal_header1}>
          Services list
        </Modal.Header>
        <Modal.Body className="pt-0">
          <Row>
            <Col md={5} className="">
              <div className="d-flex  mt-3 mb-3 px-3">
                <Form.Group
                  controlId="formBasicEmail"
                  className="col-md-11 text-end pb-2"
                >
                  <Form.Select aria-label="Default select example">
                    <option value="0">Clinic 1</option>
                    <option value="1">Clinic 2</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <h6 className="f13 px-3">What hours are available</h6>
              <Row className="mb-2 bg_clr3 pt-3 pb-3 mt-4 px-3">
                <Col md={5} className="pr-0">
                  <div className="f15 bordertime text-center">9:00 AM</div>
                </Col>
                <Col md={1} className="f15 mt-1">
                  -
                </Col>
                <Col md={5} className="f15 pl-0">
                  <div className="f15 bordertime text-center">12:00 AM</div>
                </Col>
              </Row>
              <Row className="mb-2 mt-4 px-3">
                <Col md={5} className="pr-0">
                  <div className="f15 bordertime text-center">7:00 AM</div>
                </Col>
                <Col md={1} className="f15 mt-1">
                  -
                </Col>
                <Col md={5} className="f15 pl-0">
                  <div className="f15 bordertime text-center">10:00 AM</div>
                </Col>
              </Row>
            </Col>
            <Col md={7} className=" bg_clr3">
              <div className="px-3 py-3">
                <div>
                  <b>Services</b>
                </div>
                <div className="py-3">1. Lorem Ipsum </div>
                <ul>
                  <li className="py-2"> simply dummy </li>
                  <li className="py-2"> printing </li>
                </ul>
                <div className="py-2"> 2. typesetting</div>
                <div className="py-2"> 3. standard </div>
                <div className="py-2"> 4. dummy text </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-block">
          <Row>
            <Col md={6}></Col>
            <Col md={6} className="text-end">
              <Button
                className="bg-white brnone theme9 pb-2 f13  px-5"
                onClick={handleClose}
              >
                Close
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>

      <Slotsetup_modal show={modalShow} onHide={() => setModalShow(false)} />
    </React.Fragment>
  );
};

export default Weekly_schedule;
