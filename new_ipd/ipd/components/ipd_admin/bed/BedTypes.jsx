import React, { useState } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import styles from "../../../styles/IPD_Admin/Nurse.module.scss";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import AddBedType from "./AddBedType";

const BedTypes = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const columns = [
    {
      dataField: "ID",
      text: "ID",
    },
    {
      dataField: "CATEGORY",
      text: " CATEGORY",
    },
    {
      dataField: "FEE",
      text: "FEE",
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
  const products1 = [
    {
      ID: <div className="nowwrap"> 1</div>,
      CATEGORY: <div className="nowwrap">Delux</div>,

      FEE: <div className="nowwrap">Yes</div>,
      STATUS: <div className={`nowwrap ${styles.active}`}>Active</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 2</div>,
      CATEGORY: <div className="nowwrap">Luxury</div>,

      FEE: <div className="nowwrap">Yes</div>,
      STATUS: <div className={`nowwrap ${styles.active}`}>Active</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 3</div>,
      CATEGORY: <div className="nowwrap">Basic</div>,
      FEE: <div className="nowwrap">Both</div>,
      STATUS: <div className={`nowwrap ${styles.active}`}>Active</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 4</div>,
      CATEGORY: <div className="nowwrap">Ultra Luxury</div>,
      FEE: <div className="nowwrap">Both</div>,
      STATUS: <div className={`nowwrap ${styles.active}`}>Active</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 5</div>,
      CATEGORY: <div className="nowwrap">Luxury</div>,
      FEE: <div className="nowwrap">Both</div>,
      STATUS: <div className={`nowwrap ${styles.active}`}>Active</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 6</div>,
      CATEGORY: <div className="nowwrap">Basic</div>,

      FEE: <div className="nowwrap">Yes</div>,
      STATUS: <div className={`nowwrap ${styles.active}`}>Active</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 7</div>,
      CATEGORY: <div className="nowwrap">Ultra Luxury</div>,

      FEE: <div className="nowwrap">Yes</div>,
      STATUS: <div className={`nowwrap ${styles.active}`}>Active</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 7</div>,
      CATEGORY: <div className="nowwrap">Luxury</div>,

      FEE: <div className="nowwrap">Yes</div>,
      STATUS: <div className={`nowwrap ${styles.active}`}>Active</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 7</div>,
      CATEGORY: <div className="nowwrap">Luxury</div>,

      FEE: <div className="nowwrap">Yes</div>,
      STATUS: <div className={`nowwrap ${styles.active}`}>Active</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 7</div>,
      CATEGORY: <div className="nowwrap">Luxury</div>,

      FEE: <div className="nowwrap">Yes</div>,
      STATUS: <div className={`nowwrap ${styles.active}`}>Active</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="row">
        <Col md={7} xs={12}>
          <Card className="brnone">
            <div className="row pt-3 pb-2">
              <Col md={3} xs={12}>
                <Form.Select
                  aria-label="Default select example"
                  className={styles.textboxwdth44}
                >
                  <option>All Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col md={6} xs={12}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Enter Keyword"
                    className={styles.textboxwdth44}
                    style={{ width: "100%!important" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3} xs={12} className="text-end pe-4">
                <Button className={styles.servicebtn}>Search</Button>
              </Col>
            </div>
          </Card>
        </Col>
        <Col md={5} xs={12} className="text-end mt-3">
          <Button className={styles.servicebtn} onClick={handleShow}>
            Add Type
          </Button>
        </Col>
      </div>
      <Card className="mt-3 brnone">
        <Card.Body className="pb-0 pt-1" id="services">
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
      <AddBedType show={show} onHide={handleClose} />
    </div>
  );
};

export default BedTypes;
