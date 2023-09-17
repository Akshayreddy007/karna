import React from "react";
import Navbar from "../components/navbar5/Navbar6";
import SideNavbar from "../components/sidenavbar_ipd_admin/SideNavbar";
import Bed from "../components/ipd_admin/bed/Bed";

const bed = () => {
  return (
    <div>
      <Navbar />
      <div className="sidebar">
        <SideNavbar />
      </div>
      <div className="content-page ps-2 pe-2">
        <div className="main-content">
          <Bed />
        </div>
      </div>
    </div>
  );
};

export default bed;
