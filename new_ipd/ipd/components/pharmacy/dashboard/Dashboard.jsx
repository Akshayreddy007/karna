import React, { useState } from "react";
import { Card, Button, Modal, Form, Row, Col } from "react-bootstrap";
import styles from "../../../styles/Dashboard.module.scss";
import styles1 from "../../../styles/Services.module.scss";
import styles2 from "../../../styles/Labdashboard.module.scss";
import Searchbar from "./Searchbar";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Link from "next/link";
import Newbill_modal from "../billing/Newbill_modal";
const Dashboard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);
  //conditions
  const [isEditing, setIsEditing] = useState(false);

  const handleAddClick = () => {
    setIsEditing(false);
    setModalShow(true);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setModalShow(true);
  };
  const columns = [
    {
      dataField: "SNO",
      text: "SNO",
    },
    {
      dataField: "MEDICINENAME",
      text: "MEDICINENAME",
    },
    {
      dataField: "STOCK",
      text: "STOCK",
    },
    {
      dataField: "EXPIRY",
      text: "EXPIRY",
    },
    {
      dataField: "ACTION",
      text: "ACTION",
    },
  ];

  const products1 = [
    {
      SNO: <div className="nowwrap"> 01</div>,
      MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
      STOCK: <div className="nowwrap">231</div>,
      EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i
            className="fal fa-edit me-3  f14"
            onClick={() => setShow(true)}
          ></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      SNO: <div className="nowwrap"> 01</div>,
      MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
      STOCK: <div className="nowwrap">231</div>,
      EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i
            className="fal fa-edit me-3  f14"
            onClick={() => setShow(true)}
          ></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      SNO: <div className="nowwrap"> 01</div>,
      MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
      STOCK: <div className="nowwrap">231</div>,
      EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i
            className="fal fa-edit me-3  f14"
            onClick={() => setShow(true)}
          ></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      SNO: <div className="nowwrap"> 01</div>,
      MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
      STOCK: <div className="nowwrap">231</div>,
      EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      SNO: <div className="nowwrap"> 01</div>,
      MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
      STOCK: <div className="nowwrap">231</div>,
      EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      SNO: <div className="nowwrap"> 01</div>,
      MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
      STOCK: <div className="nowwrap">231</div>,
      EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      SNO: <div className="nowwrap"> 01</div>,
      MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
      STOCK: <div className="nowwrap">231</div>,
      EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      SNO: <div className="nowwrap"> 01</div>,
      MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
      STOCK: <div className="nowwrap">231</div>,
      EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      SNO: <div className="nowwrap"> 01</div>,
      MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
      STOCK: <div className="nowwrap">231</div>,
      EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      SNO: <div className="nowwrap"> 01</div>,
      MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
      STOCK: <div className="nowwrap">231</div>,
      EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      SNO: <div className="nowwrap"> 01</div>,
      MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
      STOCK: <div className="nowwrap">231</div>,
      EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      SNO: <div className="nowwrap"> 01</div>,
      MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
      STOCK: <div className="nowwrap">231</div>,
      EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14  f14"></i>
        </div>
      ),
    },
  ];
  return (
    <React.Fragment>
      <div className="card4">
        <Card className={`${styles.card_shadow1} card_width p-0`}>
          <Card.Body className="px-4">
            <div className={`${styles.textclr} ${styles.textclr5}`}>
              Stock Not Available
            </div>
            <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-left">
              23
            </div>
          </Card.Body>
        </Card>
        <Card className={`${styles.card_shadow1} card_width p-0`}>
          <Card.Body className="px-4">
            <div className={`${styles.textclr} ${styles.textclr5}`}>
              Expires In 30days
            </div>
            <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-left">
              36
            </div>
          </Card.Body>
        </Card>
        <Card className={`${styles.card_shadow1} card_width p-0`}>
          <Card.Body className="px-4">
            <div className={`${styles.textclr} ${styles.textclr5}`}>
              Cold Stored Medicine
            </div>
            <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-left">
              12
            </div>
          </Card.Body>
        </Card>
        <Card className={`${styles.card_shadow1} card_width p-0`}>
          <Card.Body className="px-4">
            <div className={`${styles.textclr} ${styles.textclr5}`}>
              Bills pending
            </div>
            <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-left">
              5000/-
            </div>
          </Card.Body>
        </Card>
        <div>
          <Button
            style={{ marginLeft: "10px", marginTop: "10px" }}
            className={styles1.servicebtn3}
            onClick={handleAddClick}
          >
            New Bill
          </Button>
          <Button
            style={{ marginLeft: "10px", marginTop: "10px" }}
            className={`${styles1.servicebtn3} ${styles.pad34}`}
            onClick={() => setShow(true)}
          >
            Add Stock
          </Button>
        </div>
      </div>
      <div className="bg-white mt-3 br8 mb-3">
        <div className="px-3 py-2">
          <Searchbar />
        </div>
      </div>
      <Card>
        <Card.Body className="pb-0" id="services">
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={products1}
            columns={columns}
            bordered={false}
            pagination={paginationFactory()}
          />
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="xl" id="xl1">
        <Modal.Header closeButton className={styles1.bg3}>
          <Modal.Title>Add Stock</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="theme14 f15 px-md-4"> Medicine Details</h6>

          <Row className=" mt-4 mb-3 px-md-4">
            <Col md={3}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-0 f13"> Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  className={styles1.services_input}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-0 f13">Type</Form.Label>
                <Form.Select className={styles1.services_input}>
                  <option value="">Select</option>
                  <option value="option1">One time</option>
                  <option value="option2">Package</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-0 f13">Manufacturer </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter "
                  className={styles1.services_input}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-0 f13">Salt compensation </Form.Label>
                <Form.Select className={styles1.services_input}>
                  <option>Select</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <div>
            <Row className="px-md-4">
              <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f13">HSN</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f13">Unit Type</Form.Label>
                  <Form.Select className={styles1.services_input}>
                    <option>Select</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <h6 className="theme14 f15 px-md-4 mt-4"> Stock Details</h6>
            <Row className=" mt-4 mb-3 px-md-4">
              <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f13"> Package</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f13">Batch No</Form.Label>
                  <Form.Select className={styles1.services_input}>
                    <option value="">Select</option>
                    <option value="option1">One time</option>
                    <option value="option2">Package</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f13">Expiry Date </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter "
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className=" mt-4 mb-3 px-md-4">
              <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f13">GST</Form.Label>
                  <Form.Select className={styles1.services_input}>
                    <option value="">Select</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f13"> MRP</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f13">Max Discount </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter "
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f13">Final Price</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter "
                    className={styles1.services_input}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-5 mb-3 pt-4">
              <Col md={9} xl={10} xs={4}></Col>
              <Col md={1} xl={1} xs={3} className="mt-2">
                <Link href="/" className="theme9 pt-2 f15 mt-2">
                  Cancel
                </Link>
              </Col>
              <Col md={2} xl={1} xs={3}>
                <Button
                  style={{ marginLeft: "10px" }}
                  className={styles1.servicebtn}
                >
                  Save
                </Button>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
      <Newbill_modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        isediting={isEditing}
      />
    </React.Fragment>
  );
};

export default Dashboard;
