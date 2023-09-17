import Image from 'next/image'
import React from 'react'
import { Row, Col, Card, Container, Button} from 'react-bootstrap'
import styles from '../styles/Login.module.scss';
import Logo1 from "../public/images/healthcardimg.png";

const Abha_Card = () => {
  return (
    <React.Fragment>
    <div className='bgclr'>
    <div className='px-md-3 container-fluid'>
    <Row className='pt-md-4 pt-0'>
    <Col md={6} xl={6} lg={6}>
    <h5 className='mb-4 pb-2 font-weight-400'>New Patient Registration</h5>
    </Col>
    </Row>
    <Card className='p-3 bdr1'>
    <Card.Body>
    <h6>Congrats your account is created successfully  <i className='fa fa-check-circle' style={{color:' #25B076'}}></i></h6>
      <div className='mb-4'><b>Abha Card</b></div>
         <Col md={3} xl={3}>
      <div className='cardborder'>
      <div className='cardimgborder'>
      <Image src={Logo1} alt='' width='80'></Image>
      </div>
     <div className='cardbg mt-3'><h6 className='f14'>Name:  Santhosh Kumar</h6> </div>
      <div className='cardbg'> <h6 className='f14'>Health Id:  5897889756</h6> </div>
      <div className='cardbg'> <h6 className='f14'>PHR Address :  Santhosh@nbx</h6> </div>
      <div className='cardbg'> <h6 className='f14'>Gender :  Male</h6> </div>
      <div className='cardbg'> <h6 className='f14'>DOB :  19-01-1991</h6> </div>
      </div>
      </Col>
      <Row className='mt-4'>
      <Col md={4}>
      <div className='theme9'>Download ID Card</div>
      </Col>
      <Col md={6} className='mt-md-0 mt-3 px-md-3 px-0'>
      <Button className={styles.login_button} style={{width:'auto'}} >Proceed With Registration <i className='fa fa-chevron-circle-right mr_12'></i></Button>
   
      </Col>
      </Row>
    </Card.Body>
    </Card>
    </div>
    </div>
    </React.Fragment>
  )
}

export default Abha_Card