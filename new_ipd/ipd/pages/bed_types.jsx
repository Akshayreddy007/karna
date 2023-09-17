import React from "react";
import Navbar from "../components/navbar5/Navbar6";
import SideNavbar from "../components/sidenavbar_ipd_admin/SideNavbar";
import BedTypes from "../components/ipd_admin/bed/BedTypes";
const bed_types = () => {
  return (
    <div>
      <Navbar />
      <div className="sidebar">
        <SideNavbar />
      </div>
      <div className="content-page ps-2 pe-2">
        <div className="main-content">
          <BedTypes />
        </div>
      </div>
    </div>
  );
};

export default bed_types;
