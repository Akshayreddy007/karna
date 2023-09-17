import React from 'react'
import { Col,Row } from 'react-bootstrap'
import NavbarOne from '../components/navbar1/NavbarTwo'
import AbhaCard from '../components/AbhaCard'

const abha_card = () => {
  return (
    <React.Fragment>
    <NavbarOne/>
    <div>
    <AbhaCard/>
    </div>
    </React.Fragment>

  )
}

export default abha_card