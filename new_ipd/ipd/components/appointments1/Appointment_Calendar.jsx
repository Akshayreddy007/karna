import React from 'react'
import {Button,Modal,Row,Col,Form } from 'react-bootstrap'
import styles from '../../styles/Appointments.module.scss';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
const Appointment_Calendar = (props) => {
  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date < new Date()
 }

  return (
    <Modal size='lg'   {...props}>
    <Modal.Header closeButton className={styles.modal_header1}>
    Add Time Off
    </Modal.Header>
    <Modal.Body className='pt-0'>
    <Row>
    <Col md={5} className='mt-4'>
    <Calendar tileDisabled={tileDisabled}/>
    </Col> 
    <Col md={7} className='bg_clr3 px-5'>
    <div className='d-flex bg_clr33 mt-3 mb-3'>
    <div className='f13 col-md-7 font-weight-600'>I'm unavailable the Entire Day</div>
    <Form.Group  controlId="formBasicEmail" className='col-md-5 text-end pb-2'>
    <Form.Check type="checkbox" placeholder="I'm Unavailable For Entire Day" />
     </Form.Group>
     </div>
    <h6 className='f13'>What hours are you unavailable</h6>
     <Row className='mb-2'>
     <Col md={3} className='pr-0'>
     <div className='f13 bordertime'>9:00 AM</div>
     </Col>
     <Col md={1} className='f13 mt-1'>-</Col>
     <Col md={3} className='f13 pl-0'>
     <div className='f13 bordertime'>10:00 AM</div>
     </Col>
     <Col md={1} className='f13 mt-1 pl-0'><i className='fal fa-trash'></i></Col>
     <Col md={4} className='text-end'><i className='fal fa-plus'></i></Col>
     </Row>
     <Row className='mb-2'>
     <Col md={3} className='pr-0'>
     <div className='f13 bordertime'>10:00 AM</div>
     </Col>
     <Col md={1} className='f13 mt-1'>-</Col>
     <Col md={3} className='f13 pl-0'>
     <div className='f13 bordertime'>11:00 AM</div>
     </Col>
     <Col md={1} className='f13 mt-1 pl-0'><i className='fal fa-trash'></i></Col>
     <Col md={4} className='text-end'><i className='fal fa-plus'></i></Col>
     </Row>
     <Row className='mb-2'>
     <Col md={3} className='pr-0'>
     <div className='f13 bordertime'>11:00 AM</div>
     </Col>
     <Col md={1} className='f13 mt-1'>-</Col>
     <Col md={3} className='f13 pl-0'>
     <div className='f13 bordertime'>12:00 AM</div>
     </Col>
     <Col md={1} className='f13 mt-1 pl-0'><i className='fal fa-trash'></i></Col>
     <Col md={4} className='text-end'><i className='fal fa-plus'></i></Col>
     </Row>
    </Col>
    </Row>
   
    </Modal.Body>
    <Modal.Footer className='d-block'>
    <Row>
    <Col md={6}></Col>
    <Col md={6} className='text-end'>
    <a href='#' className='theme9 pb-2 f13  px-5' onClick={props.onHide}>Cancel</a>  
    <Button style={{marginLeft:'10px' }} className={styles.appointmentbtn1}>
      Submit
    </Button>
    
    </Col>
    </Row>
    </Modal.Footer>
    </Modal>
  )
}

export default Appointment_Calendar