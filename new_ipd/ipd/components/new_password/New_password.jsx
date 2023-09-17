import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '../sidebar/Sidebar'
import { Button,Row,Col,Form } from 'react-bootstrap';
import Logo1 from "../../public/images/loginlogo.png";
import styles from '../../styles/Login.module.scss';

const New_password = () => {
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
    <h4 className='text-left mt-4 welcomefont mb-0'>Set New Password</h4>
    <div className='text-left mb-4 pb-3 mt-1'>
    <small className={styles.smallclr}>Enter  new password and confirm password..</small>
    </div>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicl">
    <Form.Label className="mb-0">New Password :</Form.Label>
    <Form.Control type="text"   name="newpassword" className='textboxborder' autoComplete="off" placeholder='xxx@xx.xx'/>
     </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="mb-0">Confirm Password :</Form.Label>
    <Form.Control type="text"   name="confirmpassword" className='textboxborder' autoComplete="off" placeholder='Enter'/>
     </Form.Group>
     <Col md={12} xl={12} lg={12} className='text-left mt-4 pt-1 mb-4'>
     <Link href='/login'>
    <Button className={styles.login_button} style={{width:'auto',padding:'8px 17px 8px 17px'}} >Submit  <i className='fal fa-chevron-circle-right mr_12'></i></Button>
    </Link>
    </Col>
   </Form>
   <Row>
   <Col md={12} xl={12} lg={12} sm={12}>
   </Col>
    <Col md={12} xl={12} lg={12} sm={12} className='text-end mt-5 pt-2 me-4'>
      <Link href='/login' style={{textDecoration:'underline!important'}} className='me-4'> Sign In </Link>
    </Col>
    </Row>
    </div>
    </Col>
    </Row>
    </div>
    </React.Fragment>
  )
}

export default New_password