import React, { useState,Component } from 'react'
import { MultiStepForm,MultiStep, Step } from 'react-multi-form';
import { Row,Col,Form,Tab,Nav,Button,Card,Tabs,Modal,Accordion,FormLabel,InputGroup, Table } from 'react-bootstrap'
import styles from '../../styles/Appointments.module.scss';
import styles2 from '../../styles/Login.module.scss';
import products from '../usersdata2';
import 'react-calendar/dist/Calendar.css';
import Logo1 from "../../public/images/QR_code.png";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Image from 'next/image';
import Preloader from '../preloader/Preloader';
import Patient_Not_Registered from '../Patient_Not_Registered';
import Patient_Registration from '../Patient_Registration';

const Appointments1_modal = (props) => {
    const [active, setActive] = React.useState(1);
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
    }
    const [selected, setSelected] = useState("");
    const changeHandler = e => {
      setSelected(e.target.value);
    };

    const columns = [{
        dataField: 'ABHAID',
        text: 'ABHA ID'
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
        dataField: 'ACTIONS',


        
        text: 'ACTIONS'
      }];

  return (
    <Modal  size="xl"  {...props} >
    <Modal.Header closeButton className={styles.modal_header}  style={{display: selected ? 'none' : 'flex' }}>
      <Modal.Title>Booking Appointment</Modal.Title>
    </Modal.Header>
    <Modal.Body className=' pt-0 min_ht72 px-4 '> 

    {selected == "yes" ?
(<Patient_Registration/>): (selected == "no"? (<Patient_Not_Registered/>):
   (
    <div>
    <MultiStepForm activeStep={active} className='px-3 '>
    <Step label="Visit Info" className='mr_104'>
    <h6 className='mb-1 font-weight-400 f14'>Registered With ABHA</h6>
    <Form className=' pb-2 mb-4 px-2'>
    <label>
      <input type="radio" name="radio"  className='checkbx' checked={selected === "yes"} value="yes"  onChange={changeHandler}/>
      <span>Yes</span>
    </label>
    <label>
      <input type="radio" name="radio" className='checkbx' checked={selected === "no"} value="no" onChange={changeHandler}/>
      <span>No</span>
    </label>
     </Form>
   <Row>
     <Col md={6}>
     <Form.Group  controlId="formBasicEmail" className='mb-3'>
     <Form.Label>Patient</Form.Label>
     <Form.Control type="text" placeholder="Select" />
      </Form.Group>
      </Col>
      <Col md={6}>
      <Form.Group  controlId="formBasicEmail" className='mb-3'>
      <Form.Label>Doctor</Form.Label>
      <Form.Control type="text" placeholder="Select"  />
       </Form.Group>
       </Col>
       <Col md={6}>
       <Form.Group  controlId="formBasicEmail" className='mb-3'>
       <Form.Label>Appointment Date & Time</Form.Label>
       <Form.Control type="datetime-local" placeholder="Select"  />
        </Form.Group>
        </Col>
        <Col md={6}>
       <Form.Group  controlId="formBasicEmail" className='mb-3'>
       <Form.Label>Appointment Type</Form.Label>
       <Form.Select aria-label="Default select example"  >
       <option>New Consultation</option>
       <option value="1">One</option>
       <option value="2">Two</option>
       <option value="3">Three</option>
     </Form.Select>
        </Form.Group>
        </Col>
        <Col md={6}>
       <Form.Group  controlId="formBasicEmail" className='mb-3'>
       <Form.Label>Referral Doctor</Form.Label>
       <Form.Control type="text" placeholder="Select"  />
        </Form.Group>
        </Col>
        <Col md={6}>
       <Form.Group  controlId="formBasicEmail" className='mb-3'>
       <Form.Label>Referral Contact No</Form.Label>
       <Form.Control type="text" placeholder="Select"  />
        </Form.Group>
        </Col>
        <Col md={12}>
        <Form.Group className="mb-0" controlId="exampleForm.ControlTextarea1">
         <Form.Control as="textarea" rows={3} placeholder=" Notes" />
       </Form.Group>
        </Col>
     </Row>

    </Step>
    <Step label="Vitals" className='mr_101'>
    <Row className='bg-white'>
    <Col md={12} xl={6} lg={6} sm={12} xs={12}>
    <div className='d-flex mt-3'>
    <FormLabel className='col-md-3 mt-2 f13 prewdth1' >Pulse Rate</FormLabel>
    <InputGroup className="mb-3 prewdth2" >
   <Form.Control   aria-describedby="basic-addon2"/>
   <InputGroup.Text id="basic-addon2">/min</InputGroup.Text>
    </InputGroup>
    </div>
    </Col>
    <Col md={12} xl={6} lg={6} sm={12} xs={12}>
    <div className='d-flex mt-3'>
    <FormLabel className='col-md-3 mt-2 f13 prewdth1' >Peripheral oxygen saturation</FormLabel>
    <InputGroup className="mb-3 prewdth2">
   <Form.Control   aria-describedby="basic-addon2"/>
   <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
    </InputGroup>
    </div>
    </Col>
    <Col md={12} xl={6} lg={6} sm={12} xs={12}>
    <div className='d-flex mt-3'>
    <FormLabel className='col-md-3 mt-2 f13 prewdth1' >Blood Pressure</FormLabel>
    <InputGroup className="mb-3 prewdth2" >
   <Form.Control   aria-describedby="basic-addon2"/>
   <InputGroup.Text id="basic-addon2">mm/hg</InputGroup.Text>
    </InputGroup>
    </div>
    </Col>
    <Col md={12} xl={6} lg={6} sm={12} xs={12}>
    <div className='d-flex mt-3'>
    <FormLabel className='col-md-3 mt-2 f13 prewdth1' >Respiratory Rate</FormLabel>
    <InputGroup className="mb-3 prewdth2" >
   <Form.Control   aria-describedby="basic-addon2"/>
   <InputGroup.Text id="basic-addon2">/min</InputGroup.Text>
    </InputGroup>
    </div>
    </Col>
    <Col md={12} xl={6} lg={6} sm={12} xs={12}>
    <div className='d-flex mt-3'>
    <FormLabel className='col-md-3 mt-2 f13 prewdth1' >Body Temperature</FormLabel>
    <InputGroup className="mb-3 prewdth2" >
   <Form.Control   aria-describedby="basic-addon2"/>
   <InputGroup.Text id="basic-addon2">f</InputGroup.Text>
    </InputGroup>
    </div>
    </Col>
    <Col md={12} xl={6} lg={6} sm={12} xs={12}>
    <div className='d-flex mt-3'>
    <FormLabel className='col-md-3 mt-2 f13 prewdth1' >Blood Height</FormLabel>
    <InputGroup className="mb-3 prewdth2" >
   <Form.Control   aria-describedby="basic-addon2"/>
   <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
    </InputGroup>
    </div>
    </Col>
    <Col md={12} xl={6} lg={6} sm={12} xs={12}>
    <div className='d-flex mt-3'>
    <FormLabel className='col-md-3 mt-2 f13 prewdth1' >Body Weight</FormLabel>
    <InputGroup className="mb-3 prewdth2" >
   <Form.Control   aria-describedby="basic-addon2"/>
   <InputGroup.Text id="basic-addon2">kg</InputGroup.Text>
    </InputGroup>
    </div>
    </Col>
    <Col md={12} xl={5} lg={6} sm={12} xs={12}>
    <div className='d-flex mt-3'>
    <FormLabel className='col-md-3 mt-2 f13 prewdth1' >Body Mass Index</FormLabel>
    <InputGroup className="mb-3 prewdth2" >
   <Form.Control   aria-describedby="basic-addon2"/>
   <InputGroup.Text id="basic-addon2">kg/m2</InputGroup.Text>
    </InputGroup>
    </div>
    </Col>
    <Col md={12} xl={6} lg={6} sm={12} xs={12}>
    <div className='d-flex mt-3'>
    <FormLabel className='col-md-3 mt-2 f13 prewdth1' >Systolic blood pressure</FormLabel>
    <InputGroup className="mb-3 prewdth2" >
   <Form.Control   aria-describedby="basic-addon2"/>
   <InputGroup.Text id="basic-addon2">mm/hg</InputGroup.Text>
    </InputGroup>
    </div>
    </Col>
    <Col md={12} xl={6} lg={6} sm={12} xs={12}>
    <div className='d-flex mt-3'>
    <FormLabel className='col-md-3 mt-2 f13 prewdth1' >Diastolic blood pressure</FormLabel>
    <InputGroup className="mb-3 prewdth2" >
   <Form.Control   aria-describedby="basic-addon2"/>
   <InputGroup.Text id="basic-addon2">mm/hg</InputGroup.Text>
    </InputGroup>
    </div>
    </Col>
    </Row>
    </Step>
    <Step label="Billing">
    <div className='table-responsive'>
      <Table>
      <thead className={styles.bdrtop}>
         <tr>
           <th className='nowwrap text-center'>SNO </th>
           <th className='nowwrap text-center'>SERVICE</th>
           <th className='nowwrap text-center'>DESCRIPTION</th>
           <th className='nowwrap tableleftborder text-center'>UNIT PRICE</th>
           <th className='nowwrap tableleftborder text-center'>TAXES</th>
           <th className='nowwrap tableleftborder text-center'>DISCOUNT</th>
           <th className='nowwrap text-center tableleftborder'>SUB TOTAL</th>
           <th className='nowwrap text-center '>ACTION</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td className='nowwrap'>1</td>
           <td className='nowwrap'>Dentist Consultation</td>
           <td className='nowwrap tableleftborder'>General Oral Checkup and treatment suggestions </td>
           <td className='nowwrap tableleftborder text-center'><i className='fal fa-rupee-sign'></i> 500</td>
           <td className='nowwrap tableleftborder text-center'>10%</td>
           <td className='nowwrap tableleftborder text-center'> <InputGroup className="mt-2 w_100 mx-auto" >
           <Form.Control   aria-describedby="basic-addon2"/>
           <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
            </InputGroup></td>
            <td className='nowwrap text-center tableleftborder'><i className='fal fa-rupee-sign'></i> 500</td>
            <td className='nowwrap text-center'><i className='fal fa-trash'></i></td>
         </tr>
         <tr>
         <td colSpan={3} className='tableleftborder'>
         <Row>
         <Col md={8}>
         <Form.Group  controlId="formBasicEmail" className='d-flex'>
         <FormLabel className='me-3 mb-0 mt-2'>Services</FormLabel>
         <Form.Select aria-label="Default select example" className={styles.textboxwdth1} >
       <option> Services</option>
       <option value="1">One</option>
       <option value="2">Two</option>
       <option value="3">Three</option>
     </Form.Select>
          </Form.Group>
          </Col>
          <Col md={2} className='mt-2'>
          <a href='#' className='theme13 ms-3 mt-2'><i className='fa fa-plus'></i> Add</a>
          </Col>
          </Row>
         </td>
         <td className='tableleftborder'></td>
         <td className='tableleftborder'></td>
         <td className='tableleftborder'>
         <div>Discount</div>
         <div><i className='fa fa-rupee-sign'></i> 25.00</div>
         </td>
         <td className='tableleftborder'>
         <div>Total</div>
         <div><i className='fa fa-rupee-sign'></i> 525.00</div>
         </td>
         </tr>
         </tbody>
      </Table>
      <div className='bg3 py-2 px-1 d-flex' style={{overflow:'hidden'}}>
      <Col md={3}>
      
      <Form.Group  controlId="formBasicEmail" >
      <Row>
      <Col md={4} className='pr-0 ms-4'>
         <FormLabel className=' mb-0 mt-2 f12'>Payment Mode</FormLabel>
         </Col>
         <Col md={7}>
         <Form.Select aria-label="Default select example"  >
       <option> Split</option>
       <option value="1">One</option>
       <option value="2">Two</option>
       <option value="3">Three</option>
     </Form.Select>
     </Col>
     </Row>
          </Form.Group>
          
      </Col>
      <Col md={3} className='ms-4'>
      <Form.Group  controlId="formBasicEmail">
      <Row>
      <Col md={4} className='pr-0'>
         <FormLabel className='f12 mb-0 mt-2'>Cash/Card/UPI</FormLabel>
         </Col>
         <Col md={7}>
         <Form.Control type="text" placeholder="Select" />
         </Col>
         </Row>
          </Form.Group>
      </Col>
      <Col md={3} className='ms-2'>
      <Form.Group  controlId="formBasicEmail" >
      <Row>
      <Col md={2} className='pr-0'>
         <FormLabel className=' mb-0 mt-2 f12'>Cash</FormLabel>
         </Col>
         <Col md={7}>
         <Form.Control type="text" placeholder="Select"  />
         </Col>
        </Row>
          </Form.Group>
      </Col>
      <Col md={1}></Col>
      <Col md={2} >
      <div className='bg-white py-2 rounded px-2' style={{width:'fit-content'}}>
        <span className='me-2'>Total</span>
        <span className='theme13'><i className='fa fa-rupee-sign'></i> 525.00</span>
          </div>
      </Col>
      </div>
      </div>
    </Step>
 
    
  </MultiStepForm>

  <div className='ps_absoluteht'>
  <Row>
  <Col md={3} className='pt-2'>
  <div className='f13'>Last Payment : 6 Days Ago</div>
  </Col>
  <Col md={5} className='text-center pt-2'>
  <div className='theme12 f12'>
  Email and Sms will be sent to registered details
  </div>
  </Col>
  <Col md={4} className='text-center'>
  {active !== 3 && (
    <React.Fragment>
    <a href='#' className='theme9 pt-2 f13 ps_relative'>Confirm Booking</a>  
   <Button
     onClick={() => setActive(active + 1)}
     style={{ float: 'right',marginLeft:'10px' }} className={styles.appointmentbtn1}>
     Next
   </Button>
   </React.Fragment>
  )}
  {active !== 2 && (
   <Button onClick={handleClick}
     style={{ float: 'right' }} className={styles.appointmentbtn1}>
     Pay now
   </Button>
  )}
  {active !== 1 && (
   <Button onClick={() => setActive(active - 1)} style={{ float: 'right',marginRight:'20px' }} className={styles.appointmentbtn2}>Previous</Button>
  )}
  
  
  </Col>
  </Row>
  
  </div>
  </div>
  ))} 
 
  </Modal.Body>

  </Modal>
  )
}

export default Appointments1_modal