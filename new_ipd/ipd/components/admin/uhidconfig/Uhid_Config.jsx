import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import styles from "../../../styles/Services.module.scss";
const Uhid_Config = () => {
  return (
    <React.Fragment>
      <div className="bg-white mt-3 p-3">
        <div className={styles.min_ht}>
          <div className={`p-5 ${styles.services_bg} ${styles.uhidcenter}`}>
            <h6 className="mb-4">UHID Configuration</h6>
            <Form>
              <div className="d-md-flex d-lg-flex">
                <div className="mx-2">
                  <InputGroup className={`mb-3 ${styles.services_wdth}`}>
                    <InputGroup.Text id="basic-addon1">Prefix</InputGroup.Text>
                    <Form.Control
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
                <div className="mx-2">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      Starts From
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
              </div>
            </Form>
            <div className="d-flex justify-content-end mt-4">
              <Button
                className={`theme9 bg-white f14 ${styles.border_none} ${styles.services_bg}`}
              >
                Cancel
              </Button>
              <Button variant="primary" className={` f14 ${styles.servicebtn}`}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Uhid_Config;
