import React from "react";
import Navbar2 from "../components/navbar/Navbar2";
import SideNavbar from "../components/sidenavbar/SideNavbar";
import { Col } from "react-bootstrap";
import Referral_users from "../components/admin/referralusers/Referral_users";
const referralusers = () => {
  return (
    <div>
      <Navbar2 />
      <div className="left-side-menu">
        <SideNavbar />
      </div>
      <div className="content-page"> 
        <div className="main-content">
          <Referral_users />
        </div>
      </div>
    </div>
  );
};

export default referralusers;
