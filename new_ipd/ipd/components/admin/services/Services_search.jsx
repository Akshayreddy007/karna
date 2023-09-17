import React from "react";
import styles from "../../../styles/Dashboard.module.scss";
import styles1 from "../../../styles/Services.module.scss";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useRecoilState, atom } from "recoil";
const Services_search = () => {
  return (
    <React.Fragment>
      <div className="row">
        <Col md={3} xs={12}>
          <Form.Select
            aria-label="Default select example"
            className={styles.textboxwdth44}
          >
            <option>All Service Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>

        <Col md={3} xs={12}>
          <Form.Select
            aria-label="Default select example"
            className={styles.textboxwdth44}
          >
            <option>All Doctors</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>

        <Col md={4} xs={12}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter Keyword"
              className={styles.textboxwdth44}
              style={{ width: "100%!important" }}
            />
          </Form.Group>
        </Col>
        <Col md={2} xs={4}>
          <Button
            style={{ float: "right", marginLeft: "10px" }}
            className={styles1.servicebtn}
          >
            Search
          </Button>
        </Col>
      </div>
    </React.Fragment>
  );
};

export default Services_search;
