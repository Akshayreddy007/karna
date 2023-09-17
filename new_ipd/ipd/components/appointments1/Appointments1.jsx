import React, { useState,Component } from 'react'
import { Row,Col,Form,Tab,Nav,Button,Card,Tabs,Modal,Accordion,FormLabel,InputGroup, Table } from 'react-bootstrap'
import styles from '../../styles/Appointments.module.scss';
import 'react-calendar/dist/Calendar.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import products from '../usersdata4';
import Avatar from 'react-avatar';
import Confirmscreen from '../Confirmscreen';
import Appointment_Calendar from './Appointment_Calendar';
import Appointments1_modal from './Appointments1_modal';
const Appointments1 = () => {
  const [active, setActive] = React.useState(1);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShows, setModalShows] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
  }


  const columns = [
    {
    dataField: 'TOKENNO',
    text: 'TOKENNO'
  },
    {
    dataField: 'UHID',
    text: 'UHID'
  }, {
    dataField: 'NAME',
    text: 'NAME'
  }, {
    dataField: 'AGEGENDER',
    text: 'AGEGENDER'
  },
  {
    dataField: 'MOBILENO',
    text: 'MOBILENO'
  },
  {
    dataField: 'DOCTORNAME',
    text: 'DOCTORNAME'
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
    dataField: 'ACTION',
    text: 'ACTION'
  }];

  return (
   <React.Fragment>
   <div className='container-fluid'>
   <Row className='pt-3'>
   <Col md={12} xl={4} lg={4}>
   <div className='d-flex mt-2'>
   <span className='mt-1 w_300'>
   <i className='fa fa-arrow-left me-md-3 me-2  f12 mt-1'></i>
     <span className='f12 me-2 '>Dec 13, 2022 . 12:32pm</span>
     <i className='fa fa-arrow-right me-md-3 me-2 f12 mt-1'></i>
     </span>
     <span>
     <Form.Select aria-label="Default select example" className={styles.textboxwdth8} >
     <option> Today </option>
     <option value="1">One</option>
     <option value="2">Two</option>
     <option value="3">Three</option>
   </Form.Select>
   </span>
     </div>
   </Col>
   <Col md={12} xl={8} lg={8} className='text-end'>
   <div className=' justify-content-end'>
   <Row>
   <Col xl={4} xs={0} md={1} lg={1}></Col>
   <Col xl={2} xs={4} md={3} lg={2}>
   <Form.Select aria-label="Default select example" className={styles.dropdowntextbox} >
   <option> All Status </option>
   <option value="1">One</option>
   <option value="2">Two</option>
   <option value="3">Three</option>
 </Form.Select>
 </Col>
 <Col xl={2} xs={5} md={2} lg={2}>
 <Form.Select aria-label="Default select example" className={styles.dropdowntextbox1} >
 <option>All Services</option>
 <option value="1">One</option>
 <option value="2">Two</option>
 <option value="3">Three</option>
</Form.Select>
</Col>
<Col xl={2} xs={4} md={2}  lg={2} className={styles.d_flex_col}>
<button className={styles.usericon} onClick={() => setModalShows(true)}>
<i className='fal fa-user-plus'></i>
</button>
<button className={styles.calendaricon}  onClick={() => setModalShow(true)}>
<i className='fal fa-calendar'></i>
</button>
</Col>
<Col xl={2} xs={5} md={3} lg={5}>
<Button className={styles.appointmentbtn} onClick={handleShow}><i className='fal fa-plus '></i>  Appointment</Button>
</Col>
</Row>
</div>
</Col>
</Row>
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Nav variant="pills" className="flex-row tabrow">
    <div className='d-flex'>
    <div className={styles.bgtab}>
      <Nav.Item>
        <Nav.Link eventKey="first"><i className='fal fa-calendar'></i></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second"><i className='fal fa-table'></i></Nav.Link>
      </Nav.Item>
      </div>
      </div>
    </Nav>

    <Tab.Content>
      <Tab.Pane eventKey="first">
        <Card>
        <Card.Body>
       <Col md={12} className="text-center"> Page Under Construction </Col>
        
        </Card.Body>
        </Card>
      </Tab.Pane>
      <Tab.Pane eventKey="second">
      <Row>
      <Col md={12} xl={10} lg={9} className='pr-0'> 
      <Card>
      <Card.Body>
      <BootstrapTable bootstrap4 keyField='id' data={products} columns={ columns } bordered={ false } pagination={ paginationFactory() } />
       </Card.Body>
      </Card>
      </Col>
      <Col md={12} xl={2} lg={3} className='pl-md-0'>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled_tab_example1"
      className=""
      >
      <Tab eventKey="doctors" title="Doctors">
       <Card className={styles.bordernone}>
       <Card.Body>
       <Row className='bdr2 pb-2'>
       <Col md={3} xs={2}>
       <Avatar name="Jonathan Higgins" size="40" round color='#f7c094 '/></Col>
       <Col md={9} className='pl-0' xs={10}>
       <Row>
       <Col md={10} xs={10}>
       <div className='f11 pb-1 pt-1'>Jonathan Higgins</div>
       <div className='f11  theme12'>General Physician</div>
       </Col>
       <Col md={2} xs={2} className='pl-0' >
       <Form.Check type='checkbox' name='checkbox' style={{width:'19px',height: '22px'}}/>
       </Col>
       </Row>
       </Col>
       </Row>
       <Row className='bdr2 pb-2 pt-2'>
       <Col md={3} xs={2}>
       <Avatar name="Mike Torello" size="40" round color='#d8eedb'/></Col>
       <Col md={9} xs={10} className='pl-0'>
       <Row>
       <Col md={10} xs={10}>
       <div className='f11 pb-1 pt-1'>Mike Torello</div>
       <div className='f11  theme12'>General Physician</div>
       </Col>
       <Col md={2} xs={2} className='pl-0'>
       <Form.Check type='checkbox' name='checkbox' style={{width:'19px',height: '22px'}}/>
       </Col>
       </Row>
       </Col>
       </Row>
       <Row className='bdr2 pb-2 pt-2'>
       <Col md={3} xs={2}>
       <Avatar name="Willie Tanner" size="40" round color='#ffdb98'/></Col>
       <Col md={9} xs={10} className='pl-0'>
       <Row>
       <Col md={10} xs={10}>
       <div className='f11 pb-1 pt-1'>Willie Tanner</div>
       <div className='f11  theme12'>General Physician</div>
       </Col>
       <Col md={2}  xs={2} className='pl-0'>
       <Form.Check type='checkbox' name='checkbox' style={{width:'19px',height: '22px'}}/>
       </Col>
       </Row>
       </Col>
       </Row>
       <Row className='bdr2 pb-2 pt-2'>
       <Col md={3} xs={2}>
       <Avatar name="Peter Thornton" size="40" round color='#ffe6b7'/></Col>
       <Col md={9} xs={10} className='pl-0'>
       <Row>
       <Col md={10} xs={10}>
       <div className='f11 pb-1 pt-1'>Peter Tanner</div>
       <div className='f11  theme12'>General Physician</div>
       </Col>
       <Col md={2}  xs={2}className='pl-0'>
       <Form.Check type='checkbox' name='checkbox' style={{width:'19px',height: '22px'}}/>
       </Col>
       </Row>
       </Col>
       </Row>
       <Row className='bdr2 pb-2 pt-2'>
       <Col md={3} xs={2}>
       <Avatar name="Peter Thornton" size="40" round color='#EEE5FD'/></Col>
       <Col md={9} xs={10} className='pl-0'>
       <Row>
       <Col md={10} xs={10}>
       <div className='f11 pb-1 pt-1'>Petter Tanner</div>
       <div className='f11  theme12'>General Physician</div>
       </Col>
       <Col md={2} xs={2} className='pl-0'>
       <Form.Check type='checkbox' name='checkbox' style={{width:'19px',height: '22px'}}/>
       </Col>
       </Row>
       </Col>
       </Row>
       <Row className='bdr2 pb-2 pt-2'>
       <Col md={3} xs={2}>
       <Avatar name="Angela Bower" size="40" round color='#DAE3FF'/></Col>
       <Col md={9}  xs={10}className='pl-0'>
       <Row>
       <Col md={10} xs={10}>
       <div className='f11 pb-1 pt-1'>Angela Bower</div>
       <div className='f11  theme12'>General Physician</div>
       </Col>
       <Col md={2} xs={2} className='pl-0'>
       <Form.Check type='checkbox' name='checkbox' style={{width:'19px',height: '22px'}}/>
       </Col>
       </Row>
       </Col>
       </Row>
       <Row className='bdr2 pb-2 pt-2'>
       <Col md={3} xs={2}>
       <Avatar name="Lynn Tanner" size="40" round color='#F4E0F6'/></Col>
       <Col md={9} xs={10} className='pl-0'>
       <Row>
       <Col md={10} xs={10}>
       <div className='f11 pb-1 pt-1'>Lyn Tanner</div>
       <div className='f11  theme12'>General Physician</div>
       </Col>
       <Col md={2} xs={2} className='pl-0'>
       <Form.Check type='checkbox' name='checkbox' style={{width:'19px',height: '22px'}}/>
       </Col>
       </Row>
       </Col>
       </Row>
       <Row className='bdr2 pb-2 pt-2'>
       <Col md={3} xs={2}>
       <Avatar name="Hannibal Smith" size="40" round color='#FAD3B4'/></Col>
       <Col md={9} xs={10} className='pl-0'>
       <Row>
       <Col md={10} xs={10}>
       <div className='f11 pb-1 pt-1'>Hannibal Smith</div>
       <div className='f11  theme12'>General Physician</div>
       </Col>
       <Col md={2} xs={2} className='pl-0'>
       <Form.Check type='checkbox' name='checkbox' style={{width:'19px',height: '22px'}}/>
       </Col>
       </Row>
       </Col>
       </Row>
       <Row className='bdr2 pb-2 pt-2'>
       <Col md={3} xs={2}>
       <Avatar name="Templeton Peck" size="40" round color='#ffefd1'/></Col>
       <Col md={9} xs={10} className='pl-0'>
       <Row>
       <Col md={10} xs={10}>
       <div className='f11 pb-1 pt-1'>Templeton Peck</div>
       <div className='f11  theme12'>General Physician</div>
       </Col>
       <Col md={2} xs={2} className='pl-0'>
       <Form.Check type='checkbox' name='checkbox' style={{width:'19px',height: '22px'}}/>
       </Col>
       </Row>
       </Col>
       </Row>
       <Row className=' pb-2 pt-2'>
       <Col md={3} xs={2}>
       <Avatar name="Willie Tanner" size="40" round color='#DAE3FF' border='#ffefd1'/></Col>
       <Col md={9} xs={10}>
       <Row>
       <Col md={10} xs={10}>
       <div className='f11 pb-1 pt-1'>Willie Tanner</div>
       <div className='f11  theme12'>General Physician</div>
       </Col>
       <Col md={2} xs={2} className='pl-0'>
       <Form.Check type='checkbox' name='checkbox' style={{width:'19px',height: '22px'}}/>
       </Col>
       </Row>
       </Col>
       </Row>
       </Card.Body>
       </Card>
      </Tab>
      <Tab eventKey="department" title="Department">
        
      </Tab>
      </Tabs>
      </Col>
      </Row>
      </Tab.Pane>
    </Tab.Content>
</Tab.Container>


   </div>

<Appointments1_modal show={show} onHide={() => setShow(false)}/>
<Appointment_Calendar show={modalShow}
onHide={() => setModalShow(false)}/>
   </React.Fragment>
  )
}

export default Appointments1