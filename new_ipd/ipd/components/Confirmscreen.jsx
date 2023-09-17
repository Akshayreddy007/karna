import React from 'react'
import Image from 'next/image';
import { Row,Col,Form,Button } from 'react-bootstrap'
import Logo2 from "../public/images/confirmed_image.png";
const Confirmscreen = () => {
  return (
    <div className='text-center pt-4'>
    <div className='d-flex justify-content-center'>
    <Image src={Logo2} alt='Logo2' width='55' height='55'/>
    <Col md={1} >
    <h5 className='font-weight-400 text-success text-left ln27'>Payment Success</h5>
    </Col>
    </div>
    <h5 className='mt-3  me-1'>Appointment Confirmed</h5>
    <div className='mt-3 me-1'>Your Token No</div>
    <h2 className='mt-2 font-weight-600 me-1'>DN005</h2>
    </div>
  )
}

export default Confirmscreen