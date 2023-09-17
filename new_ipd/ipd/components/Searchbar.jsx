import React from "react";
import styles from "../styles/Dashboard.module.scss";
import { Form, Row, Col } from "react-bootstrap";
const Searchbar = () => {
  return (
    <React.Fragment>
      <div className="d-lg-flex">
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="date"
            placeholder="Today"
            className={styles.textboxwdth}
          />
        </Form.Group>

        <Form.Select
          aria-label="Default select example"
          className={styles.textboxwdth}
        >
          <option>All Services</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <Form.Select
          aria-label="Default select example"
          className={styles.textboxwdth}
        >
          <option>All Doctors</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <Form.Select
          aria-label="Default select example"
          className={styles.textboxwdth2}
        >
          <option>All Visits</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <Form.Select
          aria-label="Default select example"
          className={styles.textboxwdth2}
        >
          <option>All Department</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
    </React.Fragment>
  );
};

export default Searchbar;
