import Link from 'next/link';
import React from 'react'
import { Card, Container,Row,Col,Button } from 'react-bootstrap'
import styles from '../../styles/Prescription.module.scss';
import Footer from '../footer/Footer';
const Prescription_Preview = () => {
  return (
    <React.Fragment>
    <div className={styles.bgclr1}>
    <Container className='px-5'>
    <h5 className='mb-3 pt-4 font-weight-400'>Print preview</h5>
    <Card>
    <Card.Body className='min_ht70'>
    
    
    </Card.Body>
    </Card>
    </Container>
    <div className='container-fluid mt-4 pb-4'>
    <Row>
    <Col md={6} xl={6} lg={6} sm={6} xs={12}></Col>
    <Col md={6} xl={6} lg={6} sm={6} xs={12} className='text-end'>
    <a href='#' className='theme9 pb-2 f12  px-5'>Cancel</a>  
    <Link href='/Prescription_share'>
    <Button style={{marginLeft:'10px' }} className={styles.prescriptionbtn1}>
    Go to prescription
    </Button>
    </Link>
    </Col>
    </Row>
    </div>
    </div>
    <Footer/>
    </React.Fragment>
  )
}

export default Prescription_Preview