import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import styles from "../styles/AbhaCard.module.scss";
import Logo1 from "../public/images/abdmlogo.svg";
import Logo5 from "../public/images/healthauthority.jpg";
import Logo7 from "../public/images/QR_code.png";
import Image from "next/image";
const AbhaCard = () => {
  return (
    <React.Fragment>
      <Col md={7} lg={6} xl={4} sm={10} xs={12} className="mx-auto mt-4">
        <Card className={styles.br30}>
          <Card.Header className={styles.bg1}>
            <Row>
              <Col md={6} lg={6} xl={6} sm={6} xs={6}>
                <Image
                  src={Logo1}
                  alt=""
                  width={60}
                  height={60}
                  className={styles.bg4}
                />
              </Col>
              <Col md={6} lg={6} xl={6} sm={6} xs={6} className="text-end">
                <Image src={Logo5} alt="" width={140} height={60} />
              </Col>
            </Row>
          </Card.Header>
          <Card.Body className="px-md-3 px-2">
            <div className="px-1">
              <div className="d-flex">
                <Col md={8} xs={9} sm={9}>
                  <div className={`${styles.siteclr} mb-1`}>
                    Panduranga Appalaswamy
                  </div>
                  <div className={`${styles.siteclr1} font-weight-600 mb-1`}>
                    ABHA Number: 34-3628-8823-0277
                  </div>
                  <div className={`${styles.siteclr1} font-weight-400 mb-1`}>
                    swamypanduranga555@abdm
                  </div>
                  <div className={`${styles.siteclr1} font-weight-400 mb-1`}>
                    Male,33 Years
                  </div>
                </Col>
                <Col md={4} xs={3} sm={3} className="text-end">
                  <Image
                    src={Logo7}
                    alt=""
                    className={`${styles.w_1001} ${styles.h_1001}`}
                  />
                </Col>
              </div>
            </div>
          </Card.Body>
          <Card.Footer className={`${styles.bg2} py-4`}>
            <div
              className="text-white mx-auto text-center"
              role="button"
              title="Vivid Diagnostics"
            >
              Vivid Diagnostics
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default AbhaCard;
