import React from "react";
import Navbar from "../components/navbar5/Navbar6";
import SideNavbar from "../components/sidenavbar_ipd_admin/SideNavbar";
import Ward from "../components/ipd_admin/ward/Ward";

const ward = () => {
  return (
    <div>
      <Navbar />
      <div className="sidebar">
        <SideNavbar />
      </div>
      <div className="content-page ps-2 pe-0">
        <div className="main-content">
          <Ward />
        </div>
      </div>
    </div>
  );
};

export default ward;
