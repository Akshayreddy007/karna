import React from 'react'
import Appointments from '../components/appointments1/Appointments1'
import Navbar from '../components/navbar1/NavbarTwo'
const appointments1 = () => {
  return (
    <React.Fragment>
    <Navbar/>
    <div>
    <Appointments/>
    </div>
    </React.Fragment>
  )
}

export default appointments1