import React from 'react'
import Patients from '../components/patients/Patients'
import Navbar from '../components/navbar1/NavbarTwo'
const patients = () => {
  return (
    <React.Fragment>
    <Navbar/>
    <div>
    <Patients/>
    </div>
    </React.Fragment>
  )
}

export default patients