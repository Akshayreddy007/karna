import React, { useState } from "react";
import Services_search from "./Services_search";
import styles1 from "../../../styles/Services.module.scss";
import { Form, Row, Col, Button, Card, Modal } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../../userdata6";
const Services = () => {
  const defaultOption = "option1";
  const [selectedValue, setSelectedValue] = useState(defaultOption);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
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
      dataField: "TYPE",
      text: "TYPE",
    },
    {
      dataField: "PRICE",
      text: "PRICE",
    },
    {
      dataField: "DOCTORS",
      text: "DOCTORS",
    },
    {
      dataField: "GST",
      text: "GST%",
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
              <Services_search />
            </div>
          </div>
        </Col>
        <Col md={12} xl={4} lg={3} xs={5} className=" justify-content-end">
          <div className="mt-0 mt-md-4  pt-1   ">
            <Button
              style={{ float: "right", marginLeft: "10px" }}
              className={`${styles1.servicebtn} ms-0 mb-2 mb-md-0`}
              onClick={handleShow}
            >
              Add Service
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
          <Modal.Title>Add Service</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4 mx-4 py-5">
          <Form>
            <Row className=" mt-4 mb-4">
              <Col md={5}>
                <Form.Group className="mb-3 pb-2" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f13">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group className="mb-3 pb-2">
                  <Form.Label className="mb-0 f13">Type</Form.Label>
                  <Form.Select
                    className={styles1.services_input}
                    onChange={handleSelectChange}
                  >
                    <option value="option1">Appointment</option>
                    <option value="option2">Multi Step Procedure </option>
                    <option value="option3">Package</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              {selectedValue == "option2" && (
                <React.Fragment>
                  <Col md={2}>
                    <Form.Group className="mb-3 pb-2">
                      <Form.Label className="mb-0 f13">Steps</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Steps"
                        className={styles1.services_input}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={5}>
                    <Form.Group className="mb-3 pb-2">
                      <Form.Label className="mb-0 f13">Step1</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Step1"
                        className={styles1.services_input}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={5}>
                    <Form.Group className="mb-3 pb-2">
                      <Form.Label className="mb-0 f13">Fee</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Fee"
                        className={styles1.services_input}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2}></Col>
                  <Col md={5}>
                    <Form.Group className="mb-3 pb-2">
                      <Form.Label className="mb-0 f13">Step2</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Step1"
                        className={styles1.services_input}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={5}>
                    <Form.Group className="mb-3 pb-2">
                      <Form.Label className="mb-0 f13">Fee</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Fee"
                        className={styles1.services_input}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2}></Col>
                  <Col md={5}>
                    <Form.Group className="mb-3 pb-2">
                      <Form.Label className="mb-0 f13">Step3</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Step1"
                        className={styles1.services_input}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={5}>
                    <Form.Group className="mb-3 pb-2">
                      <Form.Label className="mb-0 f13">Fee</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Fee"
                        className={styles1.services_input}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2}></Col>
                </React.Fragment>
              )}
              {selectedValue == "option3" && (
                <React.Fragment>
                  <Col md={2}>
                    <Form.Group className="mb-3 pb-2">
                      <Form.Label className="mb-0 f13">Services</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Services"
                        className={styles1.services_input}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={5}>
                    <Form.Group className="mb-3 pb-2">
                      <Form.Label className="mb-0 f13">Service</Form.Label>
                      <Form.Select className={styles1.services_input}>
                        <option>Select</option>
                        <option>Select </option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={5}>
                    <Form.Group className="mb-3 pb-2">
                      <Form.Label className="mb-0 f13">Discount %</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Discount %"
                        className={styles1.services_input}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2} className="pr-0">
                    <div className="px-0 d-flex py-4 mb-3">
                      <div className="theme12 f13 mb-1 line_trough me-2">
                        <i className="fal fa-rupee-sign"></i> 1200/-
                      </div>
                      <div className="theme14 f14">
                        <i className="fal fa-rupee-sign"></i> 1080/-
                      </div>
                    </div>
                  </Col>
                  <Col md={5}>
                    <Form.Group className="mb-3 pb-2">
                      <Form.Label className="mb-0 f13">Service</Form.Label>
                      <Form.Select className={styles1.services_input}>
                        <option>Select</option>
                        <option>Select </option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={5}>
                    <Form.Group className="mb-3 pb-2">
                      <Form.Label className="mb-0 f13">Discount %</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Discount %"
                        className={styles1.services_input}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2} className="pr-0">
                    <div className="px-0 d-flex py-4 mb-3">
                      <div className="theme12 f13 mb-1 line_trough me-2">
                        <i className="fal fa-rupee-sign"></i> 1200/-
                      </div>
                      <div className="theme14 f14">
                        <i className="fal fa-rupee-sign"></i> 1080/-
                      </div>
                    </div>
                  </Col>
                  <Col md={5}>
                    <Form.Group className="mb-3 pb-2">
                      <Form.Label className="mb-0 f13">Service</Form.Label>
                      <Form.Select className={styles1.services_input}>
                        <option>Select</option>
                        <option>Select </option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={5}>
                    <Form.Group className="mb-3 pb-2">
                      <Form.Label className="mb-0 f13">Discount %</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Discount %"
                        className={styles1.services_input}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2} className="pr-0">
                    <div className="px-0 d-flex py-4 mb-3">
                      <div className="theme12 f13 mb-1 line_trough me-2">
                        <i className="fal fa-rupee-sign"></i> 1200/-
                      </div>
                      <div className="theme14 f14">
                        <i className="fal fa-rupee-sign"></i> 1080/-
                      </div>
                    </div>
                  </Col>
                </React.Fragment>
              )}
              {selectedValue == "option1" && (
                <React.Fragment>
                  <Col md={5}>
                    <Form.Group className="mb-3 pb-2">
                      <Form.Label className="mb-0 f13">Fee</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Fee"
                        className={styles1.services_input}
                      />
                    </Form.Group>
                  </Col>
                </React.Fragment>
              )}

              <Col md={5}>
                <Form.Group className="mb-3 pb-2">
                  <Form.Label className="mb-0 f13">Status</Form.Label>
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

export default Services;
