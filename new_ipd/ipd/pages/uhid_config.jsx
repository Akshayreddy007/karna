import React from "react";
import Navbar2 from "../components/navbar/Navbar2";
import SideNavbar from "../components/sidenavbar/SideNavbar";
import Uhid_Config from "../components/admin/uhidconfig/Uhid_Config";
const uhid_config = () => {
  return (
    <div>
      <Navbar2 />
      <div className="left-side-menu">
        <SideNavbar />
      </div>
      <div className="content-page">
        <div className="main-content">
          <Uhid_Config />
        </div>
      </div>
    </div>
  );
};

export default uhid_config;
