import Image from "next/image";
import React, { useState, Component } from "react";
import {
  Col,
  Row,
  Card,
  Container,
  Modal,
  Nav,
  Tab,
  Form,
  Table,
  FormLabel,
  ProgressBar,
} from "react-bootstrap";
import { FileUploader } from "react-drag-drop-files";
import styles1 from "../../styles/BillingHistory.module.scss";
import Logo2 from "../../public/images/cloud-upload.svg";
import styles from "../../styles/Dashboard.module.scss";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../userdata5";
import Searchbar from "../Searchbar";
const Patients = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [file, setFile] = useState(null);
  const fileTypes = ["JPG", "PNG", "GIF", "PDF"];
  const handleChange = (file) => {
    setFile(file);
  };
  const columns = [
    {
      dataField: "UHID",
      text: "UHID",
    },
    {
      dataField: "NAME",
      text: "NAME",
    },
    {
      dataField: "AGEGENDER",
      text: "AGEGENDER",
    },
    {
      dataField: "MOBILENO",
      text: "MOBILENO",
    },
    {
      dataField: "DOCTORNAME",
      text: "LAST CONSULTANT DOCTOR",
    },
    {
      dataField: "VISITTYPE",
      text: "VISIT TYPE",
    },
    {
      dataField: "PAYMENT",
      text: "PAYMENT",
    },

    {
      dataField: "ACTION",
      text: "ACTION",
    },
  ];
  return (
    <React.Fragment>
      <Container>
        <Row className="pt-4">
          <Col md={2} xl={2} sm={6} xs={6}>
            <Card className="card_shadow1 w_1601">
              <Card.Body className="pt-2 pb-2">
                <div className="theme12 f13">Today Patients</div>
                <div className="f21">164</div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} xl={2} sm={6} xs={6}>
            <Card className="card_shadow1 w_1601">
              <Card.Body className="pt-2 pb-2">
                <div className="theme12 f13">Total Revenue</div>
                <div className="f21">
                  <i className="fal fa-rupee-sign"></i> 55,300
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} xl={2} sm={6} xs={6}>
            <Card className="card_shadow1 w_1601">
              <Card.Body className="pt-2 pb-2">
                <div className="theme12 f13">Pending Amount</div>
                <div className="f21">
                  <i className="fal fa-rupee-sign"></i> 30,000
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} xl={2} sm={6} xs={6}>
            <Card className="card_shadow1 w_1601">
              <Card.Body className="pt-2 pb-2">
                <div className="theme12 f13">Recieved Amount</div>
                <div className="f21">
                  <i className="fal fa-rupee-sign"></i> 20,064
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} xl={2} sm={6} xs={6}>
            <Card className="card_shadow1 w_1601">
              <Card.Body className="pt-2 pb-2">
                <div className="theme12 f13">Discounted Amount</div>
                <div className="f21">
                  <i className="fal fa-rupee-sign"></i> 2164
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="bg-white mt-3 br8 mb-3">
          <Row className="p-3">
            <Col md={12} xl={12} lg={12} sm={12}>
              <div className="d-md-flex">
                <Searchbar />
                <Form.Select
                  aria-label="Default select example"
                  className={styles.textboxwdth3}
                >
                  <option>All Gender</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  aria-label="Default select example"
                  className={styles.textboxwdth}
                >
                  <option>All Status</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className={styles.textboxwdth}
                  />
                </Form.Group>
              </div>
            </Col>
          </Row>
        </div>
        <Card>
          <Card.Body>
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
      </Container>
    </React.Fragment>
  );
};

export default Patients;
