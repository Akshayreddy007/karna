import React from "react";
import styles1 from "../../../styles/Services.module.scss";
import styles from "../../../styles/Navbar1.module.scss";
import Logo1 from "../../../public/images/image48.svg";
import Image from "next/image";
import { Form, Row, Col, Button, Card, Modal } from "react-bootstrap";

const Qrcode_viewmodal = (props) => {
  return (
    <React.Fragment>
      <Modal size="lg"  {...props}>
        <Modal.Header closeButton className={styles1.services_border}>
          <Modal.Title>QR Code</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5 mx-5 py-5">
          <Form>
            <Row className=" mt-4 mb-5">
              <Col md={6} className="text-center">
                <Image
                  src={Logo1}
                  className={styles.lgimg}
                  width="200"
                  height="200"
                  alt="logo"
                />
              </Col>

              <Col md={5} className="text-center">
                <div className="mb-3 mt-5">
                  <i className="fal fa-download f32"></i>
                </div>
                <div className="theme12"> Download QR Code</div>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <div className="py-4"></div>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default Qrcode_viewmodal;
