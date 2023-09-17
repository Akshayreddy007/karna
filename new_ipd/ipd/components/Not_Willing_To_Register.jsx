import React,{useState,useEffect} from 'react'
import { Container,Row,Col,Form,Card,Button,Modal} from 'react-bootstrap';
import Link from 'next/link';
import styles from '../styles/Login.module.scss';
import Footer from './footer/Footer';
import Patient_Booking_Modal from './Patient_Booking_Modal';
import Working from './Working';
const Not_Willing_To_Register = () => {
  const [show, setShow] = useState(false);
  const [modalshow, setModalShow] = useState(false);
  return (
    <React.Fragment>
   <div className='bgclr'>
   <div className=''>
     <Form>
     <Row>
     <Col md={5} xl={3} lg={4} className="ms-2 ">
     <Form.Group className="mb-4 pb-2" controlId="formBasicEmail">
     <Form.Label className='f13 mb-0'>Mobile Number :</Form.Label>
     <Form.Control type="text"   name="mobile number" className='textboxborder f13' autoComplete="off" placeholder='Enter Mobile Number'/>
      </Form.Group>
      </Col>
      <Col md={8} xl={9} lg={8} className="ms-2 ">
      <div style={{color: "rgb(0, 60, 255)"}} role='button' onClick={() => setModalShow(true)}>Do You Want to Continue With Old Patient ?</div>
      </Col>
      <Col md={5} xl={3} lg={4} className="ms-2 ">
      <Form.Group className="mb-4 pb-2" controlId="formBasicEmail">
      <Form.Label className='f13 mb-0'>Name :</Form.Label>
      <Form.Control type="text"   name="name" className='textboxborder f13' autoComplete="off" placeholder='Enter Name'/>
       </Form.Group>
       </Col>
       <Col md={5} xl={3} lg={4} className="ms-md-4 ms-2">
       <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label className='f13 mb-0'>Age :</Form.Label>
       <Form.Control type="text"   name="age" className='textboxborder f13' autoComplete="off" placeholder='Enter Age'/>
        </Form.Group>
        </Col>
        <Col md={12} xl={5} lg={12} className="ms-md-4 ms-2">
        <Form.Group className="mb-3" controlId="formBasicEmail" id="gender">
        <Form.Label className='f13 mb-0 ms-0 text-dark'>Gender :</Form.Label>
        <div class="form flex-center">
		<div class="form-row flex-center">
			<input type="radio" name="gender" id="Male" class="form-input"/>
			<label for="Male" class="form-label">Male</label>
		</div>
		<div class="form-row flex-center">
			<input type="radio" name="gender" id="Female" class="form-input"/>
			<label for="Female" class="form-label">Female</label>
		</div>
  	<div class="form-row flex-center">
			<input type="radio" name="gender" id="Others" class="form-input"/>
			<label for="Others" class="form-label">others</label>
		</div>
	</div>
        </Form.Group>
         </Col>
         <Col md={5} xl={3} lg={4} className="ms-2 ">
         <Form.Group className="mb-4 pb-4" controlId="formBasicEmail">
         <Form.Label className='f13 mb-0'>Address :</Form.Label>
         <Form.Control as="textarea" rows={3} className='textboxborder f13'/>
         </Form.Group>
          </Col>
          <Col md={5} xl={3} lg={4} className="ms-md-4 ms-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='f13 mb-0'>Email :</Form.Label>
          <Form.Control type="email"   name="email" className='textboxborder f13' autoComplete="off" placeholder='Enter Email'/>
           </Form.Group>
           </Col>
           <Col md={1} xl={3} lg={3} className="ms-2"></Col>
           <Col md={4} xl={12} lg={4} className=" mb-4 pb-5">
           <Button className='bg-white text-dark brnone f13' onClick={() => setShow(true)}>
              <div><i className='fal fa-plus'></i> Add Fields</div>
              </Button>
           </Col>
           </Row>
           <div className='d-md-flex'>
           <div className="ms-2 me-4 mb-3 mb-md-0">
           <Link href='/appointments'>
           <Button className={styles.register_button} >Register  </Button>
           </Link>
        </div>
        <div className="ms-2 me-4 mb-3 mb-md-0">
        <Link href='/appointments'>
        <Button className={styles.register_button} >Register & Start Visit  </Button>
        </Link>
     </div>
     <div className="ms-2 mb-3 mb-md-0">
     <Link href='/appointments'>
     <Button className={styles.register_button}  >Register & Schedule Visit </Button>
     </Link>
  </div>
  </div>
        
      </Form>
   </div>
   </div>
  <Working show={modalshow}/>
   <Modal
   show={show}
   onHide={() => setShow(false)}
   dialogClassName="modal-40w"
   aria-labelledby="example-custom-modal-styling-title"
 >
   <Modal.Header closeButton>
     <Modal.Title id="example-custom-modal-styling-title">
     <h6>Patient Registration-More Fields</h6>
     </Modal.Title>
   </Modal.Header>
   <Modal.Body className='pt-0'>
   <Form>
   <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label className='f14'>Salutation</Form.Label>
   <Form.Select aria-label="Default select example">
   <option>Mr</option>
   <option value="1">Ms</option>
 </Form.Select>
 </Form.Group>
 <Form.Group className="mb-3" >
 <Form.Label className="mb-0 f14">City</Form.Label>
 <Form.Control type="text" placeholder="Hyderabad"  name="city" className='textboxborder'/>
</Form.Group>
<Form.Group className="mb-3" >
<Form.Label className="mb-0 f14">Pincode</Form.Label>
<Form.Control type="text" placeholder="xxx@xx.xx"  name="pincode" className='textboxborder'/>
</Form.Group>
<Form.Group className="mb-3" >
<Form.Label className="mb-0 f14">Blood Group</Form.Label>
<Form.Control type="text" placeholder="xxx@xx.xx"  name="bloodgroup" className='textboxborder'/>
</Form.Group>
<Form.Group className="mb-3" >
<Form.Label className="mb-0 f14">Alternate Phone</Form.Label>
<Form.Control type="text" placeholder="xxx@xx.xx"  name="phone" className='textboxborder'/>
</Form.Group>
<Form.Group className="mb-3" >
<Form.Label className="mb-0 f14">Referred by</Form.Label>
<Form.Control type="text" placeholder="xxx@xx.xx"  name="referred" className='textboxborder'/>
</Form.Group>

<Form.Group className="mb-3" >
<Form.Label className='f14'>Marital Status</Form.Label>
<Form.Select aria-label="Default select example">
<option>Single</option>
<option value="1">Married</option>
</Form.Select>
</Form.Group>
<Form.Group className="mb-3" >
<Form.Label className="mb-0 f14">Name of informant</Form.Label>
<Form.Control type="text" placeholder="xxx@xx.xx"  name="name" className='textboxborder'/>
</Form.Group>
<Form.Group className="mb-3" >
<Form.Label className="mb-0 f14">Channel</Form.Label>
<Form.Control type="text" placeholder="xxx@xx.xx"  name="channel" className='textboxborder'/>
</Form.Group>
<Form.Group className="mb-3" >
<Form.Label className="mb-0 f14">Patient’s Occupation</Form.Label>
<Form.Control type="text" placeholder="xxx@xx.xx"  name="occupation" className='textboxborder'/>
</Form.Group>
<Button className={styles.register_button}  style={{float:'right'}}>Update </Button>
   </Form>
   </Modal.Body>
 </Modal>
   </React.Fragment>
  )
}

export default Not_Willing_To_Register