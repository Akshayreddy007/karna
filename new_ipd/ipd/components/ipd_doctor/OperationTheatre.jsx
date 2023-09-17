import Link from 'next/link'
import React, { useState } from 'react'
import { Breadcrumb, Button, Card,Col,Modal,Form } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import styles1 from '../../styles/IPD_Doctor/CrossConsultation.module.scss'

const OperationTheatre = () => {
  const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const products = [
    {
      DATE_TIME: <div className='nowwrap1 f15'><div className="theme14">24 Jan 2023</div><div className='theme12 f14'>12:34 PM</div></div>,
      OPERATION_THEATHRE: <div className='nowwrap1 f15'><div className="theme14"> Stellar Nebula</div><div className='theme12 f14'> 3rd Floor,Block D</div></div>,
      ANASTASIA_DOCTOR: <div className='nowwrap1 f15'><div className="theme14">Dr John Doe</div></div>,
      OTHERDOCTORS: <div className='nowwrap1 f15'><div className="theme14">Dr Corey Jax</div><div className='theme12 f14'>Cardiologist.</div></div>,
      STATUS: <div className={styles1.admitted}>Scheduled</div>,
      ACTION: <div className='nowwrap1 d-flex '>
        <i className='fal fa-eye me-2 px-2 py-2  f15'></i>
        <i className='fal fa-trash-alt me-2 px-2 py-2  f15'></i>
      </div>,

    },
    {
      DATE_TIME: <div className='nowwrap1 f15'><div className="theme14">24 Jan 2023</div><div className='theme12 f14'>12:34 PM</div></div>,
      OPERATION_THEATHRE: <div className='nowwrap1 f15'><div className="theme14"> Ramanujam</div><div className='theme12 f14'> 2nd Floor,Block A</div></div>,
      ANASTASIA_DOCTOR: <div className='nowwrap1 f15'><div className="theme14">Dr John Doe</div></div>,
      OTHERDOCTORS: <div className='nowwrap1 f15'><div className="theme14">Dr Corey Jax</div><div className='theme12 f14'>Cardiologist.</div></div>,
      STATUS: <div className="">Completed</div>,
      ACTION: <div className='nowwrap1 d-flex '>
        <i className='fal fa-eye me-2 px-2 py-2  f15'></i>
        <i className='fal fa-trash-alt me-2 px-2 py-2  f15'></i>
      </div>,

    }

  ];
  const columns = [
    {
      dataField: "DATE_TIME",
      text: (
        <div className='f13'>
          DATE / TIME
        </div>
      ),
    },
    {
      dataField: "OPERATION_THEATHRE",
      text: (
        <div className='f13'>
          OPERATION THEATRE NAME
        </div>
      ),
    },
    {
      dataField: "ANASTASIA_DOCTOR",
      text: (
        <div className='f13'>
          ANASTASIA DOCTOR
        </div>
      ),
    },
    {
      dataField: "OTHERDOCTORS",
      text: (<div className='f13'> OTHER DOCTORS  </div>),

    },
    {
      dataField: "STATUS",
      text: (
        <div className='f13'>
          STATUS
        </div>
      ),
    },

    {
      dataField: "ACTION",
      text: (<div className='f13'>ACTION</div>)
    },
  ];
  return (
    <div>
    <div className="d-flex align-items-center mb-3">
    <Col md={6} xs={6} sm={6}>
      <div id="breadcrumb1" className='mt-3'>
        <Breadcrumb>
          <Link href="#" className='me-3'><i className='fal fa-arrow-left theme14'></i></Link>
          <Breadcrumb.Item href="#" className={`${styles1.font} f16`}>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#" className={`${styles1.font} f16`}> Profile</Breadcrumb.Item>
          <Breadcrumb.Item active className={`${styles1.font} f16`}>Operation Theatre </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      </Col>
      <Col md={6} xs={6} sm={6} className="text-end justify-content-end">
      <Button className={styles1.book} onClick={handleShow}>Book Now</Button>
      </Col>
      </div>

      <Card className={`${styles1.font} brnone`}>
        <Card.Body className="pt-1">
          <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} bordered={false} pagination={paginationFactory()} />
        </Card.Body>
      </Card>
      <Modal
      show={show} size='lg'
      onHide={handleClose}
    >
      <Modal.Header closeButton className='bdr2 mb-3'>
        <Modal.Title className={styles1.font}>Book OT</Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${styles1.px5} ${styles1.font}`}>
   <div className="d-flex align-items-center mt-5 mb-3">
   <Col md={6} className='pe-5'>
   <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label className='mb-0'>Date and Time</Form.Label>
   <Form.Control type="datetime-local" placeholder="Enter " />
 </Form.Group>
   </Col>
   <Col md={6} className='ps-5'>
   <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label className='mb-0'>Operation Theatre</Form.Label>
   <Form.Select aria-label="Default select example">
   <option>Select</option>
   <option value="1">One</option>
   <option value="2">Two</option>
   <option value="3">Three</option>
 </Form.Select>
 </Form.Group>
   </Col>
   </div>
   <div className="d-flex align-items-center mb-5">
   <Col md={6} className='pe-5'>
   <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label className='mb-0'>Anastasia Doctor</Form.Label>
   <Form.Control type="text" placeholder="Enter " />
 </Form.Group>
   </Col>
   <Col md={6} className='ps-5'>
   <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label className='mb-0'>Other Doctor</Form.Label>
   <Form.Control type="text" placeholder="Enter " />
 </Form.Group>
   </Col>
   </div>
      </Modal.Body>
      <Modal.Footer className="d-flex flex-row flex-nowrap mt-3">
            <div>
              <Button className={`theme13 bg-white brnone ${styles1.font}`}>Cancel</Button>
            </div>
            <div>
          </div>
            <div>
              <Button className={`${styles1.book1} ${styles1.font}`}>Book</Button>
            </div>
            <div>
          </div>
        </Modal.Footer>
    </Modal>

    </div>
  )
}

export default OperationTheatre