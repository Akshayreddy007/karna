import React from 'react'
import Prescription from '../components/prescription/Prescription'
import NavbarOne from '../components/navbar1/NavbarTwo'
import Prescription_Preview from '../components/prescription/Prescription_Preview'
const prescription_preview = () => {
  return (
    <React.Fragment>
    <NavbarOne/>
    <div>
    <Prescription_Preview/>
    </div>
    </React.Fragment>
  )
}

export default prescription_preview