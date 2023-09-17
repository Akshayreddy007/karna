import React, { useState } from 'react'
import { Modal, Col, Button, Row } from 'react-bootstrap';
import styles1 from '../../91care_receptionist/styles/Directappointment.module.scss'
const Working = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionChange = (event) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton className='bdr2'>
          Patients with the same phone number
        </Modal.Header>
        <Modal.Body className=' pt-0  px-4'>
          <div className={`item mb-3 ${selectedOption == 1 ? "selectedone" : "notselectedone"} mt-3`}>
            <Row className=" d-flex justify-content-between pt-3 pb-3 px-3">
              <Col className="pe-2" xl={1} lg={1}>
                <div id='id1'>
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      id="1"
                      className="checkbx"
                      value={1}
                      checked={selectedOption == 1}
                      onChange={handleOptionChange}
                    />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col className="pe-2 ps-4 ps-md-4 ps-lg-2" xl={2} lg={2} md={6} sm={6} xs={6}>
                <div className="theme12 f11">UHID</div>
                <div className="theme14 f13">UHI2011</div>
              </Col>
              <Col className="pe-2" xl={3} lg={3} md={6} sm={6} xs={6}>
                <div className="theme12 f11">ABHA ID</div>
                <div className="theme14 f13">April@abha</div>
              </Col>
              <Col className="pe-2 ps-4 ps-md-4 ps-lg-2 mt-md-2 mt-xl-0 mt-2 mt-lg-0" xl={3} lg={3} md={6} sm={6} xs={6}>
                <div className="theme12 f11">NAME</div>
                <div className="theme14 f13">JayaLakshmi Allamreddy</div>
              </Col>
              <Col className="pe-2 mt-md-2 mt-xl-0 mt-2 mt-lg-0" xl={3} lg={3} md={6} sm={6} xs={6}>
                <div className="theme12 f11">MOBILENO</div>
                <div className="theme14 f13">+91 778989877</div>
              </Col>
              <Col className="pe-2" xl={3} lg={3} md={2} sm={6} xs={6}>
              </Col>
            </Row>
          </div>
          <div className={`item mb-3 ${selectedOption == 2 ? "selectedone" : "notselectedone"}`}>
            <Row className=" d-flex justify-content-between pt-3 pb-3 px-3">
              <Col className="pe-2" xl={1} lg={1}>
                <div id='id1'>
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      id="2"
                      className="checkbx"
                      checked={selectedOption == 2}
                      value={2}
                      onChange={handleOptionChange}
                    />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col className="pe-2 ps-4 ps-md-4 ps-lg-2" xl={2} lg={2} md={6} sm={6} xs={6}>
                <div className="theme12 f11">UHID</div>
                <div className="theme14 f13">UHI2011</div>
              </Col>
              <Col className="pe-2" xl={3} lg={3} md={6} sm={6} xs={6}>
                <div className="theme12 f11">ABHA ID</div>
                <div className="theme14 f13">April@abha</div>
              </Col>
              <Col className="pe-2 ps-4 ps-md-4 ps-lg-2 mt-md-2 mt-xl-0 mt-2 mt-lg-0" xl={3} lg={3} md={6} sm={6} xs={6}>
                <div className="theme12 f11">NAME</div>
                <div className="theme14 f13">JayaLakshmi Allamreddy</div>
              </Col>
              <Col className="pe-2 mt-md-2 mt-xl-0 mt-2 mt-lg-0" xl={3} lg={3} md={6} sm={6} xs={6}>
                <div className="theme12 f11">MOBILENO</div>
                <div className="theme14 f13">+91 778989877</div>
              </Col>
              <Col className="pe-2" xl={3} lg={3} md={6} sm={6} xs={6}>
              </Col>
            </Row>
          </div>
          <div className={`item mb-3 ${selectedOption == 3 ? "selectedone" : "notselectedone"}`}>
            <Row className=" d-flex justify-content-between pt-3 pb-3 px-3">
              <Col className="pe-2" xl={1} lg={1} >
                <div id='id1'>
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      id="3"
                      className="checkbx"
                      checked={selectedOption == 3}
                      value={3}
                      onChange={handleOptionChange}
                    />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col className="pe-2 ps-4 ps-md-4 ps-lg-2" xl={2} lg={2} md={6} sm={6} xs={6}>
                <div className="theme12 f11">UHID</div>
                <div className="theme14 f13">UHI2011</div>
              </Col>
              <Col className="pe-2" xl={3} lg={3} md={6} sm={6} xs={6}>
                <div className="theme12 f11">ABHA ID</div>
                <div className="theme14 f13">April@abha</div>
              </Col>
              <Col className="pe-2 ps-4 ps-md-4 ps-lg-2 mt-md-2 mt-xl-0 mt-2 mt-lg-0" xl={3} lg={3} md={6} sm={6} xs={6}>
                <div className="theme12 f11">NAME</div>
                <div className="theme14 f13">JayaLakshmi Allamreddy</div>
              </Col>
              <Col className="pe-2 mt-md-2 mt-xl-0 mt-2 mt-lg-0" xl={3} lg={3} md={6} sm={6} xs={6}>
                <div className="theme12 f11">MOBILENO</div>
                <div className="theme14 f13">+91 778989877</div>
              </Col>
              <Col className="pe-2" xl={3} lg={3} md={2} sm={6} xs={6}>
              </Col>
            </Row>
          </div>
          <div className={`pt-2 pb-2 mt-5 ${styles1.bg1} d-md-flex px-3 py-3 align-items-center`}>
            <div className="mt-1"><span className={`${styles1.iconclr} pe-3`}><i className='fal fa-info-circle'></i></span></div>
            <div className='f14'>If the patient you are registering is different from the above patients,  click on the <b>New Patient button. </b>
              or If the patient you are registering is the same, click on <b>Continue</b> button..</div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-row flex-nowrap">
          <Col md={6} className="px-3 d-flex">
            <div>
              <Button className={styles1.patientbtn}>New Patients</Button>
            </div>
            <div>

            </div>
          </Col>
          <Col md={6} className="text-right justify-content-end d-flex">
            <div>
              <Button className={styles1.bookbtn} >Continue</Button>
            </div>
            <div>

            </div>
          </Col>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Working