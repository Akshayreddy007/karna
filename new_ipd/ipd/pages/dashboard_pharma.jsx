import React from "react";
import Navbar2 from "../components/navbar3/Navbar4";
import Dashboard from "../components/pharmacy/dashboard/Dashboard";
import SideNavbar from "../components/sidenavbar/SideNavbar";
const dashboard_pharma = () => {
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

export default dashboard_pharma;
