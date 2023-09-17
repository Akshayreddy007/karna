import React from 'react'
import { Container,Row,Col,Card,Nav,Tab,Form,Button} from 'react-bootstrap';
import styles from '../styles/Login.module.scss';
import Footer from './footer/Footer';
import Preloader from './preloader/Preloader';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import products from './usersdata1';
import Image from 'next/image';
import Logo1 from "../public/images/anamnesis.png";
import Link from 'next/link';

const Appointments = () => {

    const columns = [{
        dataField: 'UHID',
        text: 'UHID'
      }, {
        dataField: 'PATIENTDETAILS',
        text: 'PATIENT DETAILS'
      }, {
        dataField: 'AGEGENDER',
        text: 'AGE/GENDER'
      },
      {
        dataField: 'CONTACT',
        text: 'CONTACT'
      },
      {
        dataField: 'VISITTYPE',
        text: 'VISIT TYPE'
      },
      {
        dataField: 'PAYMENT',
        text: 'PAYMENT'
      },
      {
        dataField: 'STATUS',
        text: 'STATUS'
      },
      {
        dataField: 'AMOUNT',
        text: 'AMOUNT'
      },
      {
        dataField: 'STATUSACTION',
        text: 'STATUS/ACTION'
      }];
  return (
    <React.Fragment>
    <div className='bgclr'>
    <div className='px-md-2 container-fluid'>
    <Row className='pt-xl-3 pt-0'>
    <Col md={6} xl={6} lg={6} sm={6} xs={6} className='mt-2'>
    <h5 className='mb-4 pb-2 fm14 mt-md-2 mt-0 font-weight-400 siteclr1'>Welcome Dr.Santhosh</h5>
    </Col>
    <Col md={6} xl={6} lg={6} sm={6} xs={6} className='text-end'>
    <Link href='/patient_registration'>
    <Button className={styles.login_button} style={{width:'auto',padding:'8px 17px 8px 17px',fontSize: '12px',fontWeight:'400'}} > Add New Patient<i className='fa fa-chevron-circle-right mr_12'></i></Button>
    </Link>
    </Col>
    </Row>
    <Row>
    <Col md={12} xl={9} lg={12} sm={12} className='w-78'>
    <Card className='p-xl-3 p-md-2 p-2 bdr1'>
    <Card.Body className='pt-0'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row >
      <Col sm={12} className='p-0'>
        <Nav variant="pills" className="flex-row">
          <Nav.Item>
            <Nav.Link eventKey="first">Today's Queue(29)</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Completed (12)</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Upcoming (20)</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fourth">Others (12)</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={12} className='mt-4 p-0'>
        <Tab.Content>
          <Tab.Pane eventKey="first">
          <BootstrapTable bootstrap4 keyField='id' data={products} columns={ columns } bordered={ false } pagination={ paginationFactory() } />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            
          </Tab.Pane>
          <Tab.Pane eventKey="third">

        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        <Preloader/>
        </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
    </Card.Body>
    </Card>
    </Col>
    <Col md={12} xl={3} lg={12} sm={12}  className='d-md-block  w-28 mt-xl-0 mt-md-3 mt-3'>
    <Card className='p-3 bdr1 h-100'>
    <Card.Body className='minht pt-1'>
    <h6>Anamnesis</h6>
    <div className='text-center mt-5 pt-5'>Previous Visit or details</div>
    <div className='text-center mt-1'>
    <Image src={Logo1} width='165'/>
    </div>
    </Card.Body>
    <Card.Footer>
    <Row>
    <Col md={4} xl={6} sm={6} xs={6} className='px-0'>
    <span className='theme9 f13'>Create Invoice</span>
    </Col>
    <Col md={4} xl={6} sm={6} xs={6} className='px-0'>
    <span className='theme9 f13'>Schedule Visit</span>
    </Col>
    <Col md={4} xl={6} sm={6} xs={6} className='px-0 mt-xl-2 mt-md-0 mt-lg-2 mt-2'>
    <span className='mt-md-2 mt-0'><Button className={styles.login_button} style={{padding:'7px 10px',fontSize:'13px',marginTop:'0px',width:'auto'}} > Start Visit<i className='fa fa-chevron-circle-right mr_12'></i></Button>
    </span>
    </Col>
    </Row>
    </Card.Footer>
    </Card>
    </Col>
    </Row>
    </div>
    <Footer/>
    </div>
    </React.Fragment>
  )
}

export default Appointments