import React from "react";
import styles from "../../../styles/Dashboard.module.scss";
import styles1 from "../../../styles/Services.module.scss";
import { Form, Row, Col, Button } from "react-bootstrap";
const Searchbar = () => {
  return (
    <React.Fragment>
      <div className="row">
        <Col md={4} xl={2} lg={4}>
          <Form.Select
            aria-label="Default select example"
            className={styles.textboxwdth44}
          >
            <option>All Stocks</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>

        <Col md={8} xs={12}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter Keyword"
              className={styles.textboxwdth55}
              style={{ width: "100%!important" }}
            />
          </Form.Group>
        </Col>
        <Col md={2} className="pl-0">
          <Button className={styles1.servicebtn}>Search</Button>
        </Col>
      </div>
    </React.Fragment>
  );
};

export default Searchbar;
