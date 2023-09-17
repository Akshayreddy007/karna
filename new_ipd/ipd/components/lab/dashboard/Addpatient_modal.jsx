import React from "react";
import Patient_Registration from "../../Patient_Registration";
import { Modal, Table } from "react-bootstrap";
import styles1 from "../../../styles/Services.module.scss";
import styles2 from "../../../styles/Labdashboard.module.scss";
import styles3 from "../../../styles/Dashboard.module.scss";
const Addpatient_modal = (props) => {
  return (
    <React.Fragment>
      <Modal size="lg" id="md2" {...props}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="pt-0">
          <Patient_Registration />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Addpatient_modal;
