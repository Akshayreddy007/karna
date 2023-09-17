import React from "react";
import Services_types from "../components/admin/services/Services_types";
import Navbar2 from "../components/navbar/Navbar2";
import SideNavbar from "../components/sidenavbar/SideNavbar";
import { Col } from "react-bootstrap";

const services_types = () => {
  return (
    <div>
      <Navbar2 />
      <div className="left-side-menu">
        <SideNavbar />
      </div>
      <div className="content-page">
        <div className="main-content">
          <Services_types />
        </div>
      </div>
    </div>
  );
};

export default services_types;
