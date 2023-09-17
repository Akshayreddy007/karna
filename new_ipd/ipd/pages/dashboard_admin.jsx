import React from "react";
import { Col } from "react-bootstrap";
import Dashboard from "../components/admin/dashboard/Dashboard";
import Navbar2 from "../components/navbar/Navbar2";
import SideNavbar from "../components/sidenavbar/SideNavbar";
const dashboard_admin = () => {
  return (
    <div>
      <Navbar2 />
      <div className="left-side-menu">
        <SideNavbar />
      </div>
      <div className="content-page">
        <div className="main-content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default dashboard_admin;
