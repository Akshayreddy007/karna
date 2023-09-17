import React from "react";
import Services from "../components/admin/services/Services";
import Navbar2 from "../components/navbar/Navbar2";
import SideNavbar from "../components/sidenavbar/SideNavbar";
import { Col } from "react-bootstrap";
const services = () => {
  return (
    <div>
      <Navbar2 />
      <div className="left-side-menu">
        <SideNavbar />
      </div>
      <div className="content-page">
        <div className="main-content">
          <Services />
        </div>
      </div>
    </div>
  );
};

export default services;
