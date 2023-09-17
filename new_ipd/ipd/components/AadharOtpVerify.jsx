import React from 'react'
import { Col,Form,Button } from 'react-bootstrap'
import Link from 'next/link';
import styles from '../styles/Login.module.scss';
const AadharOtpVerify = () => {
  return (
    <React.Fragment>
    <Form>

    <Col md={5} xl={3} lg={4} className="ms-2 ">
    <Form.Group className="mb-4 pb-2" controlId="formBasicEmail">
    <Form.Label>Aadhar Number OTP :</Form.Label>
    <Form.Control type="text"   name="mobile number" className='textboxborder' autoComplete="off" placeholder='Enter Mobile Number'/>
     </Form.Group>
     </Col>
     <Col md={5} xl={3} lg={4} className="ms-2 ">
    <Form.Group className="mb-4 pb-2" controlId="formBasicEmail">
    <Form.Label>Mobile Number :</Form.Label>
    <Form.Control type="text"   name="mobile number" className='textboxborder' autoComplete="off" placeholder='Enter Mobile Number'/>
     </Form.Group>
     </Col>
     <div className="ms-2 mb-3 mb-md-0">
     <Link href='/appointments'>
     <Button className={styles.register_button}  >Verify</Button>
     </Link>
  </div>
     </Form>
    </React.Fragment>
  )
}

export default AadharOtpVerify