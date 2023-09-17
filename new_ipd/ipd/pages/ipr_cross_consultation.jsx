import React, { useEffect } from 'react'
import Navbar from '../components/navbar2/Navbar3'
import SideNavbar from '../components/sidenavbar_ipd_receptionist/SideNavbar';
import CrossConsultation from '../components/IPD_Receptionist/CrossConsultation'
import Router from 'next/router';
import { authlogout, resocket } from "../components/tokenauth/AuthorizationError";

const ipr_consultation = () => {

  useEffect(() => {
    if (localStorage.getItem("auth_token") == undefined) {
      Router.push("/");
      authlogout();
    
    }
  });

  return (
    <div>
      <Navbar />
      <div className="left-side-menu">
        <SideNavbar />
      </div>
      <div className="content-page">
        <div className="main-content">
          <CrossConsultation />
        </div>
      </div>
    </div>
  )
}

export default ipr_consultation;