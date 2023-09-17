import React from "react";
import styles from "../../../styles/Dashboard.module.scss";
import { Form, Row, Col } from "react-bootstrap";
const Searchbar = () => {
  return (
    <React.Fragment>
      <div className="row">
        <Col md={4} xl={2} lg={4}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="date"
              placeholder="Today"
              className={styles.h44}
            />
          </Form.Group>
        </Col>
        <Col md={4} xl={2} lg={4}>
          <Form.Select
            aria-label="Default select example"
            className={styles.h44}
          >
            <option>All Departments</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={4} xl={2} lg={4}>
          <Form.Select
            aria-label="Default select example"
            className={styles.textboxwdth12}
          >
            <option>Clinics</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </div>
    </React.Fragment>
  );
};

export default Searchbar;
