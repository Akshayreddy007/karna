import React from "react";
import Navbar2 from "../components/navbar/Navbar2";
import SideNavbar from "../components/sidenavbar/SideNavbar";
import { Col } from "react-bootstrap";
import Prescriptions from "../components/admin/prescriptions/Prescriptions";
const prescription_admin = () => {
  return (
    <div>
      <Navbar2 />
      <div className="left-side-menu">
        <SideNavbar />
      </div>
      <div className="content-page">
        <div className="main-content">
          <Prescriptions />
        </div>
      </div>
    </div>
  );
};

export default prescription_admin;
