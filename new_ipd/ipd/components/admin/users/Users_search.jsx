import React from "react";
import styles from "../../../styles/Dashboard.module.scss";
import styles1 from "../../../styles/Services.module.scss";
import { Form, Row, Col, Button } from "react-bootstrap";
const Users_search = () => {
  return (
    <React.Fragment>
      <div className="row">
        <Col md={3} xs={12}>
          <Form.Select
            aria-label="Default select example"
            className={styles.textboxwdth15}
          >
            <option>All Roles</option>
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
      </div>
    </React.Fragment>
  );
};

export default Users_search;
