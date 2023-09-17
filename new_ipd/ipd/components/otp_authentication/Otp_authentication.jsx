import React from 'react'
import Image from 'next/image'
import Sidebar from '../sidebar/Sidebar'
import { Button,Row,Col,Form } from 'react-bootstrap';
import Logo1 from "../../public/images/loginlogo.png";
import styles from '../../styles/Login.module.scss';
import Link from 'next/link';
const Otp_authentication = () => {
  return (
    <React.Fragment>
    <div className='container-fluid bg-white'>
    <Row>
    <Col md={5} xl={3} lg={4} sm={12} className='pr-md-0'>
    <Sidebar/>
    </Col>
    <Col md={7} xl={9} lg={8} sm={9}>
    <div className={styles.mgauto}>
    <div className='text-center me-4'>
    <Image src={Logo1} className="img-fluid" width="55" height="50" alt="logo" />
    </div>
    <h4 className='text-left mt-4 welcomefont mb-0'>Step 2 Authenticator</h4>
    <div className='text-left mb-3 '>
    <small className={styles.smallclr}>OTP has been sent to your mobile no +91 988XXXXXX9</small>
    </div>
    <Form>
    <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
    <Form.Label className="mb-0">OTP :</Form.Label>
    <Form.Control type="text"   name="otp" className='textboxborder' autoComplete="off" placeholder='Enter Otp'/>
     </Form.Group>
     <Col md={12} xl={12} lg={12} className='text-left mt-3 mb-3 mt-4 pt-1'>
     <Link href='/appointments'>
    <Button className={styles.login_button} style={{width:'auto',padding:'8px 17px 8px 17px'}} >Login     <i className='fal fa-chevron-circle-right mr_12'></i></Button>
    </Link>
    </Col>
   </Form>
    <Col md={12} xl={12} lg={12} className='text-left mt-4 f14 mb-4'>
       Resend OTP   
    </Col>
    </div>
    </Col>
    </Row>
    </div>
    </React.Fragment>
  )
}

export default Otp_authentication