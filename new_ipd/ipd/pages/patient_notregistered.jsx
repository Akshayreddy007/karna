import React from 'react'
import { Col,Row } from 'react-bootstrap'
import Abha_Card from '../components/Abha_Card'
import NavbarOne from '../components/navbar/NavbarOne'
import SideNavbar from '../components/navbar/SideNavbar'
import Patient_Not_Registered from '../components/Patient_Not_Registered'
import Patient_Registration from '../components/Patient_Registration'

const patient_notregistered = () => {
  return (
    <div>
    <NavbarOne/>
    <div className='left-side-menu'>
    <SideNavbar/>
   </div>
 <div className="content-page" >
    <div className="main-content">
    <Patient_Not_Registered/>
    </div>
</div>
    </div>


  )
}

export default patient_notregistered