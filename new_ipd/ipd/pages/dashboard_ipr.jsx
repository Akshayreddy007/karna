import React from "react";
import Navbar from "../components/navbar2/Navbar3";
import SideNavbar from "../components/sidenavbar_ipd_receptionist/SideNavbar";
import Dashboard from "../components/IPD_Receptionist/dashboard/Dashboard";

const dashboard_ipr = () => {
  return (
    <div>
      <Navbar />
      <div className="sidebar">
        <SideNavbar />
      </div>
      <div className="content-page ps-2 pe-md-4">
        <div className="main-content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default dashboard_ipr;
