import React, { useState } from "react";
import styles from "../../../styles/Dashboard.module.scss";
import styles1 from "../../../styles/Services.module.scss";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../../messagesdata";
import AddMessage_Modal from "./AddMessage_Modal";
import ViewMessage_Modal from "./ViewMessage_Modal";
import Messageconfig_modal from "./Messageconfig_modal";
const Messages = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modalShow, setModalShow] = useState(false);
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
      dataField: "CATEGORY",
      text: "CATEGORY",
    },
    {
      dataField: "TEMPLATEID",
      text: "TEMPLATEID",
    },
    {
      dataField: "MESSAGE",
      text: "MESSSAGE",
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
              <Row>
                <Col md={3} xs={12}>
                  <Form.Select
                    aria-label="Default select example"
                    className={styles.textboxwdth15}
                  >
                    <option>All Types</option>
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
                <Col md={2}>
                  <Button
                    style={{ float: "right", marginLeft: "10px" }}
                    className={styles1.servicebtn}
                  >
                    Search
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col md={12} xl={4} lg={3} xs={4} className=" justify-content-end">
          <div className="d-flex justify-content-end  align-items-center mt-4 pt-1  ">
            <Button
              style={{ float: "right", marginRight: "0px" }}
              className={styles1.servicebtn}
              onClick={() => setShow(true)}
            >
              Add Template
            </Button>
            <div className="ms-4">
              <Button
                onClick={() => setModalShow(true)}
                className={` ${styles1.border_none} ${styles1.services_bg}`}>
                <i className="fal fa-cog f21"></i>
              </Button>
            </div>
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
      <AddMessage_Modal show={show} onHide={() => setShow(false)} />
      <Messageconfig_modal show={modalShow} onHide={() => setModalShow(false)}/>
    </React.Fragment>
  );
};

export default Messages;
