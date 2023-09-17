import React from "react";
import Navbar from "../components/navbar5/Navbar6";
import SideNavbar from "../components/sidenavbar_ipd_admin/SideNavbar";
import Dashboard from "../components/ipd_admin/dashboard/Dashboard";

const dashboard_ipdadmin = () => {
  return (
    <div>
      <Navbar />
      <div className="sidebar">
        <SideNavbar />
      </div>
      <div className="content-page ps-2 pe-4">
        <div className="main-content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default dashboard_ipdadmin;
