import React from "react";
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
const Slotsetup_modal = (props) => {
  return (
    <React.Fragment>
      <Modal size="lg" {...props}>
        <Modal.Header closeButton className={styles.modal_header1}>
          Monday slot setup
        </Modal.Header>
        <Modal.Body className="pt-0">
          <Row>
            <Col md={12} lg={5} className="">
              <div className="d-flex  mt-3 mb-3 px-3">
                <Form.Group
                  controlId="formBasicEmail"
                  className="col-md-11 col-9 text-end pb-2"
                >
                  <Form.Select aria-label="Default select example">
                    <option value="0">Clinic 1</option>
                    <option value="1">Clinic 2</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="d-flex">
                <div className="col-md-8">
                  <h6 className="f13 px-3">What hours are available</h6>
                </div>
                <div className="theme9 font-weight-300 col-md-4 f13 text-end">
                  <i className="fal fa-plus"></i> Add Time
                </div>
              </div>
              <Row className="mb-2 bg_clr3 pt-3 pb-3 mt-4 px-3">
                <Col md={4} xs={4} className="pr-0">
                  <div className="f14 bordertime text-center px-2">9:00 AM</div>
                </Col>
                <Col md={1} xs={1} className="f14 mt-1">
                  -
                </Col>
                <Col md={4} xs={4} className="f14 pl-0">
                  <div className="f14 bordertime text-center px-2">
                    12:00 AM
                  </div>
                </Col>
                <Col md={1} xs={1} className="f15 mt-1">
                  <i className="fal fa-trash-alt"></i>
                </Col>
              </Row>
              <Row className="mb-2 mt-4 px-3">
                <Col md={4} xs={4} className="pr-0">
                  <div className="f14 bordertime text-center px-2">7:00 AM</div>
                </Col>
                <Col md={1} xs={1} className="f14 mt-1">
                  -
                </Col>
                <Col md={4} xs={4} className="f14 pl-0">
                  <div className="f14 bordertime text-center px-2">
                    10:00 AM
                  </div>
                </Col>
                <Col md={1} xs={1} className="f15 mt-1">
                  <i className="fal fa-trash-alt"></i>
                </Col>
              </Row>
            </Col>
            <Col md={12} lg={7} className=" bg_clr3">
              <div className="px-3 py-3">
                <div className="font-weight-600">Services</div>
                <div className="py-3 d-flex" id="inputcheck">
                  <Form.Check
                    type="checkbox"
                    id="lorem"
                    name="name"
                    className="mx-2"
                  />{" "}
                  Lorem Ipsum{" "}
                </div>
                <ul>
                  <li className="py-2 d-flex" id="inputcheck">
                    <Form.Check
                      type="checkbox"
                      id="lorem"
                      name="name"
                      className="mx-2"
                    />{" "}
                    simply dummy{" "}
                  </li>
                  <li className="py-2 d-flex" id="inputcheck">
                    <Form.Check
                      type="checkbox"
                      id="lorem"
                      name="name"
                      className="mx-2"
                    />{" "}
                    printing{" "}
                  </li>
                </ul>
                <div className="py-2 d-flex" id="inputcheck">
                  {" "}
                  <Form.Check
                    type="checkbox"
                    id="lorem"
                    name="name"
                    className="mx-2"
                  />{" "}
                  typesetting
                </div>
                <div className="py-2 d-flex" id="inputcheck">
                  {" "}
                  <Form.Check
                    type="checkbox"
                    id="lorem"
                    name="name"
                    className="mx-2"
                  />{" "}
                  standard{" "}
                </div>
                <div className="py-2 d-flex" id="inputcheck">
                  {" "}
                  <Form.Check
                    type="checkbox"
                    id="lorem"
                    name="name"
                    className="mx-2"
                  />{" "}
                  dummy text{" "}
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-block">
          <Row>
            <Col md={5} lg={6} xs={6}></Col>
            <Col md={7} lg={6} xs={6} className="text-end">
              <Button className="bg-white brnone theme9 pb-2 f13  px-5 mx-2">
                Cancel
              </Button>
              <Button className={styles.appointmentbtn}>Submit</Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default Slotsetup_modal;
