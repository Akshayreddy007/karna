import React from "react";
import { Card, Button, Modal, Form, Table, Col, Row } from "react-bootstrap";
import Searchbar from "../dashboard/Searchbar";
import styles1 from "../../../styles/Services.module.scss";
import styles2 from "../../../styles/Labdashboard.module.scss";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../../labservicesdata";
import { useState } from "react";
import Link from "next/link";
const Labservices = () => {
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
      dataField: "TESTNAME",
      text: "TEST NAME",
    },
    {
      dataField: "TYPE",
      text: "TYPE",
    },
    {
      dataField: "FEE",
      text: "FEE",
    },
    {
      dataField: "SAMPLETYPE",
      text: "SAMPLE TYPE",
    },
    {
      dataField: "VOLUME",
      text: "VOLUME",
    },
    {
      dataField: "DEPARTMENT",
      text: "DEPARTMENT",
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
        <Col md={12} xl={9} lg={9} xs={12}>
          <div className="bg-white mt-3 br8 mb-3">
            <div className="px-3 py-2">
              <Searchbar />
            </div>
          </div>
        </Col>
        <Col
          md={3}
          xl={3}
          lg={3}
          xs={4}
          className=" justify-content-md-end mb-2"
        >
          <div className="mt-0 mt-xl-4  pt-1  ">
            <Button
              style={{ float: "right", marginLeft: "10px" }}
              className={styles1.servicebtn}
              onClick={handleShow}
            >
              Add Test
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

      <Modal show={show} onHide={handleClose} size="xl" id="xl1">
        <Modal.Header closeButton className={styles1.bg3}>
          <Modal.Title>
            {selectedValue == "option1" && <div>Add Test </div>}
            {selectedValue == "option2" && <div>Add Package </div>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="theme14 f14 px-md-4"> Test Details</h6>

          <Row className=" mt-4 mb-3 px-md-4">
            <Col xl={2} md={3}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-0 f13">Service Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  className={styles1.services_input}
                />
              </Form.Group>
            </Col>
            <Col xl={2} md={3}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-0 f13">Type</Form.Label>
                <Form.Select
                  className={styles1.services_input}
                  onChange={handleSelectChange}
                >
                  <option value="">Select</option>
                  <option value="option1">One time</option>
                  <option value="option2">Package</option>
                </Form.Select>
              </Form.Group>
            </Col>
            {selectedValue == "option1" && (
              <React.Fragment>
                <Col xl={2} md={3}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="mb-0 f13">Total Fee</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter "
                      className={styles1.services_input}
                    />
                  </Form.Group>
                </Col>
                <Col xl={2} md={3}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="mb-0 f13">
                      Investigation Days
                    </Form.Label>
                    <Form.Select className={styles1.services_input}>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </React.Fragment>
            )}
          </Row>
          {selectedValue == "option1" && (
            <div>
              <Row className="px-md-4">
                <Col xl={2} md={3}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="mb-0 f13">Sample Type</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      className={styles1.services_input}
                    />
                  </Form.Group>
                </Col>
                <Col xl={2} md={3}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="mb-0 f13">Volume</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      className={styles1.services_input}
                    />
                  </Form.Group>
                </Col>
                <Col xl={2} md={3}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="mb-0 f13">Department</Form.Label>
                    <Form.Select className={styles1.services_input}>
                      <option>Select</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={8} className={`${styles2.borderright} px-0`}>
                  <div className={styles1.bdr_top}>
                    <h6 className="theme14 f13"> Test Attributes</h6>
                  </div>
                  <div className={`px-4 mx-2  ${styles1.bdr_rtlt}`}>
                    <div className="theme14 font-weight-500 pt-3 pb-3">01</div>
                    <Form>
                      <Row>
                        <Col xl={6} md={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="mb-0 f13">Title</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Name"
                              className={styles1.services_input}
                            />
                          </Form.Group>
                        </Col>
                        <Col xl={2} md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="mb-0 f13">
                              High Value
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Name"
                              className={styles1.services_input}
                            />
                          </Form.Group>
                        </Col>
                        <Col xl={2} md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="mb-0 f13">
                              Low Value
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Name"
                              className={styles1.services_input}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Col xl={4} md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="reference range"
                          />
                        </Form.Group>
                      </Col>
                    </Form>
                  </div>
                  <div className={`px-4 mx-2  ${styles1.bdr_rtlt}`}>
                    <div className="theme14 font-weight-500 pt-3 pb-3">02</div>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="mb-0 f13">Title</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Comments"
                              className={styles1.services_input}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={2}></Col>
                        <Col md={2}></Col>
                      </Row>
                      <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="reference range"
                          />
                        </Form.Group>
                      </Col>
                    </Form>
                  </div>

                  <Row className={styles1.abs}>
                    <Col md={9} xl={9}></Col>
                    <Col md={1} xl={1} className="mt-2">
                      <Link href="/" className="theme9 pt-2 f14 mt-2">
                        Cancel
                      </Link>
                    </Col>
                    <Col md={2} xl={2}>
                      <Button
                        style={{ marginLeft: "10px" }}
                        className={styles1.servicebtn}
                      >
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col md={4} className="px-0">
                  <div className={styles1.bdr_top}>
                    <h6 className="theme14 f14"> Component Box</h6>
                  </div>
                  <div className={` mx-3 ${styles1.componentbg}`}>
                    <Form>
                      <Row className=" mt-4 mb-3 px-4 py-3">
                        <Col md={12}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="mb-0 f13">Title</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Name"
                              className={styles1.services_input}
                            />
                          </Form.Group>
                        </Col>
                        <Col xl={6} md={12}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="mb-0 f13">
                              High Value
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Name"
                              className={styles1.services_input}
                            />
                          </Form.Group>
                        </Col>
                        <Col xl={6} md={12}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="mb-0 f13">
                              Low Value
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Name"
                              className={styles1.services_input}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={12}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder="Enter Name"
                            />
                          </Form.Group>
                        </Col>
                        <div className="text-end">
                          <Button
                            className={styles1.servicebtn1}
                            style={{ width: "fitContent" }}
                          >
                            Add
                          </Button>
                        </div>
                      </Row>
                    </Form>
                  </div>

                  <div className={` mx-3 ${styles1.componentbg}`}>
                    <Form>
                      <Row className=" mt-4 mb-3 px-4 py-3">
                        <Col md={12}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="mb-0 f14">Title</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Name"
                              className={styles1.services_input}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={12}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder="Enter Name"
                            />
                          </Form.Group>
                        </Col>
                        <div className="text-end">
                          <Button
                            className={styles1.servicebtn1}
                            style={{ width: "fitContent" }}
                          >
                            Add
                          </Button>
                        </div>
                      </Row>
                    </Form>
                  </div>
                  <div className={` mx-3 ${styles1.componentbg}`}>
                    <Form>
                      <Row className=" mt-4 mb-3 px-4 py-3">
                        <Col md={12}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="mb-0 f14">Title</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Name"
                              className={styles1.services_input}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={12}>
                          <input
                            type="file"
                            className="custom-file-input w-100"
                          />
                        </Col>
                        <div className="text-end mt-3">
                          <Button
                            className={styles1.servicebtn1}
                            style={{ width: "fitContent" }}
                          >
                            Add
                          </Button>
                        </div>
                      </Row>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          )}
          {selectedValue == "option2" && (
            <div className="px-4 mx-1 ">
              <Row>
                <Col md={3}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="mb-0 f14"> Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      className={styles1.services_input}
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="mb-0 f14">Type</Form.Label>
                    <Form.Select className={styles1.services_input}>
                      <option value="">Select</option>
                      <option>Package</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={2} className={styles2.w_11}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="mb-0 f14"> Services</Form.Label>
                    <Form.Control
                      type="text"
                      className={styles1.services_input}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className="mb-0 f13">Service</Form.Label>
                    <Form.Select className={styles1.services_input}>
                      <option value="">Select</option>
                      <option>Package</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className="mb-0 f13"> Discount %</Form.Label>
                    <Form.Control
                      type="text"
                      className={styles1.services_input}
                    />
                  </Form.Group>
                </Col>
                <Col md={2} className={styles2.w_11}>
                  <div className={`${styles2.bg22}  px-3 py-3 mb-3 rounded`}>
                    <div className="theme12 f13 mb-1 line_trough">
                      <i className="fal fa-rupee-sign"></i> 1200/-
                    </div>
                    <div className="theme14 f16">
                      <i className="fal fa-rupee-sign"></i> 1080/-
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className="mb-0 f13">Service</Form.Label>
                    <Form.Select className={styles1.services_input}>
                      <option value="">Select</option>
                      <option>Package</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className="mb-0 f13"> Discount %</Form.Label>
                    <Form.Control
                      type="text"
                      className={styles1.services_input}
                    />
                  </Form.Group>
                </Col>
                <Col md={2} className={styles2.w_11}>
                  <div className={`${styles2.bg22}  px-3 py-3 mb-3 rounded`}>
                    <div className="theme12 f13 mb-1 line_trough">
                      <i className="fal fa-rupee-sign"></i> 1200/-
                    </div>
                    <div className="theme14 f16">
                      <i className="fal fa-rupee-sign"></i> 1080/-
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className="mb-0 f13">Status</Form.Label>
                    <Form.Select className={styles1.services_input}>
                      <option value="">Select</option>
                      <option>Package</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={3}></Col>
                <Col md={2} className={styles2.w_11}>
                  <div className={`${styles2.bg22}  px-3 py-3 mb-3 rounded`}>
                    <div className="theme12 f13 mb-1">Total</div>
                    <div className="theme14 f16 font-weight-600">
                      <i className="fal fa-rupee-sign"></i> 2160/-
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="mt-5 mb-5">
                <Col md={9} xl={10}></Col>
                <Col md={1} xl={1} className="mt-2">
                  <Link href="/" className="theme9 pt-2 f14 mt-2">
                    Cancel
                  </Link>
                </Col>
                <Col md={2} xl={1}>
                  <Button
                    style={{ marginLeft: "10px" }}
                    className={styles1.servicebtn}
                  >
                    Save
                  </Button>
                </Col>
              </Row>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Labservices;
