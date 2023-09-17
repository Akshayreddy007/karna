import React,{useState,useEffect} from 'react'
import { Container,Row,Col,Card,Nav,Tab,Form,Button} from 'react-bootstrap';
import styles from '../styles/Login.module.scss';
import Not_Willing_To_Register from './Not_Willing_To_Register';
import AadharOtpVerify from './AadharOtpVerify';
const Patient_Not_Registered = () => {
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };

  // const handleClick = event => {
  //   setIsShown(current => !current);
  // };
  return (
    <React.Fragment>
   <div className='bgclr'>
   <div className='px-md-2 container-fluid'>
      <div className='mt-5 ms-2 mb-5'>
      <input  type="checkbox"  checked={checked}  onChange={handleChange} />
      <label for="c2" className='ms-2'>Not Willing to Register</label>
     </div>
     { checked ?
     <Form>
     <Col md={6} xl={3} lg={4} className="ms-2">
     <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label className='f14 mb-0'>Aadhar Number :</Form.Label>
     <Form.Control type="text"   name="aadhar number" className='textboxborder' autoComplete="off" placeholder='Enter Aadhar Number'/>
      </Form.Group>
      </Col>
      
      <div className='mt-5 mb-4 ms-2'>
      <input id="c2" type="checkbox"  />
      <div className='adhrno ms-5 f14'>I, hereby declare that I am voluntarily sharing my Aadhar Number/Virtual ID issued by the Unique Identification Authority of India(“UIDAI”). And my demographic information for the purpose of creating an Ayushman Bharat Health Account number (“ABHA number”) AND Ayushman Bharat Heath Account address(“ABHA Address”). I authorize NHA yo use my Aadhar number / Virtual ID for performing Adhar based authentication with UIDAI as per the provisions of the Aadhar(Targeted Delivery of Financial abd other Subsidies. Benefits and Services) Act.2016 fot the aforesaid purpose. Iunderstand thet UIDAI will share my e_KYC details. Or response of Yes with NHA upon suscessfil authentication I intend to create Ayushman Bharat Health Account Number (“ABHA number”) and Ayushman Bharat Heath Account address (“ABHA Address”) using document other than Aadhaar (Click here to proceed further) I consent to usage of my ABHA Address and ABHA number for linking of my legacy (past) government health records and those which will be generated during this encounter. I authorize the sharing of all my health records with health care provider(s) for the purpose of providing health care services to me during this encounter. I consent to the anonymization and subsequent use of my government health records for public health purpose. 1. (name of healthcare worker depending on the user name used for logging in into the system). Confirm that I have duly informed and explained the beneficiary of the contents of consent for aforementioned purposes. 2. (beneficiary name). have been explained about the consent as stated above and hereby provide my consent for the aforementioned purposes.
      </div>
      </div>
      <h6 className="ms-2">HEALTH WORKER DECLARATION</h6>
      <div className='mt-3 mb-5 ms-2'>
      <input id="c2" type="checkbox"  />
      <div className='adhrno ms-5 f14'>I have manually verified the registering beneficiary against the Aadhaar provided. I have also duly informed the beneficiary of the Health ID creation and contents of consent for Health ID creation.
     </div>
      </div>
      <Row>
      <Col md={2}>
      <Button className={styles.login_button} style={{width:'auto',padding:'8px 17px 8px 17px'}} >Get Otp    </Button>
      </Col>
      <Col md={3} className='mt-md-2 mt-xl-2 mt-lg-0 mt-3'>
      Resend OTP  in 30Sec
      </Col>
      </Row>
      </Form>
      :<Not_Willing_To_Register/>}


   </div>
   </div>

   </React.Fragment>
  )
}

export default Patient_Not_Registered