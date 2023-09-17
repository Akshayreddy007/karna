import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '../sidebar/Sidebar'
import { Button,Row,Col,Form } from 'react-bootstrap';
import Logo1 from "../../public/images/loginlogo.png";
import styles from '../../styles/Login.module.scss';

const Signup_verify = () => {
  return (
    <React.Fragment>
    <div className='container-fluid bg-white'>
    <Row>
    <Col md={5} xl={3} lg={4} sm={12} className='pr-md-0'>
    <Sidebar/>
    </Col>
    <Col md={7} xl={9} lg={8} sm={9}>
    <div className={styles.mgauto}>
    <div className='text-center me-md-5'>
    <Image src={Logo1} className="img-fluid" width="55" height="50" alt="logo" />
    </div>
    <h4 className='text-left mt-4 welcomefont mb-0'>Verify</h4>
    <div className='text-left mb-4 pb-3 mt-1'>
    <small className={styles.smallclr}>The faster you fill up, the faster you get started</small>
    </div>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="mb-0">OTP :</Form.Label>
    <Form.Control type="text"   name="otp" className='textboxborder' autoComplete="off" placeholder='Enter Otp'/>
     </Form.Group>
     <Col md={12} xl={12} lg={12} className='text-left mt-5 pt-3 mb-3'>
    <Button className={styles.login_button}  >Verify     <i className='fal fa-chevron-circle-right mr_12'></i></Button>
   </Col>
   </Form>
   <Row>
   <Col md={6} xl={6} lg={6} sm={12}>
    <Link href='/' >Resend Otp</Link>
   </Col>
   </Row>
   <Link href='/login'>
    <Col md={12} xl={12} lg={12} className='text-center mt-5 mb-3 pt-5'>
    Already have an Account ?<b> Signin </b>
    </Col>
    </Link>
    </div>
    </Col>
    </Row>
    </div>
    </React.Fragment>

  )
}

export default Signup_verify