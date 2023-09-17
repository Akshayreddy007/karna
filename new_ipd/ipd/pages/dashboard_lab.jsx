import React from "react";
import Dashboard from "../components/lab/dashboard/Dashboard";
import Navbar3 from "../components/navbar2/Navbar3";
import Sidenavbar_lab from "../components/sidenavbar_lab/SideNavbar_lab";

const dashboard_lab = () => {
  return (
    <div>
      <Navbar3 />
      <div className="left-side-menu">
        <Sidenavbar_lab />
      </div>
      <div className="content-page">
        <div className="main-content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default dashboard_lab;
