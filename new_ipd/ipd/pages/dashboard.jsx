import React from 'react'
import Dashboard from '../components/dashboard/Dashboard'
import Navbar from '../components/navbar1/NavbarTwo'

const dashboard = () => {
  return (
    <React.Fragment>
    <Navbar/>
    <div>
    <Dashboard/>
    </div>
    </React.Fragment>
  )
}

export default dashboard