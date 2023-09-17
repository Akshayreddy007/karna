import React from 'react'
import { Col,Row } from 'react-bootstrap'
import styles from '../../styles/Footer.module.scss';
const Footer = () => {
  return (
    <React.Fragment>
    <div className='footerborder'>
    <div className='px-md-3'>
    <div className='row ms-1  me-1  '>
    <Col md={12} xl={6} lg={6} sm={12} xs={12} className='px-0'>
    <div className={styles.footer1}>Copyright © 2022. Doctors <span className={styles.footerfontclr}>91.care</span> from Entro labs Pvt Ltd. All rights reserved.</div>
    </Col>
    <Col md={12} xl={6} lg={6} sm={12} xs={12} className='text-md-end mt-md-0 mt-2 px-0'>
    <div className={styles.footer2}>Hand-crafted & made with <i className='fal fa-heart footericnclr'></i></div>
    </Col>
    </div>
    </div>
    </div>
    </React.Fragment>
  )
}

export default Footer