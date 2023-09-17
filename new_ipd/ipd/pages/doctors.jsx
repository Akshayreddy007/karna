import React from 'react'
import Navbar from '../components/navbar1/NavbarTwo'
import Doctors from '../components/doctors/Doctors'
const doctors = () => {
  return (
    <React.Fragment>
    <Navbar/>
    <div>
    <Doctors/>
    </div>
    </React.Fragment>
  )
}

export default doctors