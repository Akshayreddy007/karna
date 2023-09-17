import React from "react";
import Navbar from "../components/navbar5/Navbar6";
import SideNavbar from "../components/sidenavbar_ipd_admin/SideNavbar";
import Floor from "../components/ipd_admin/floor/Floor";

const floor = () => {
  return (
    <div>
      <Navbar />
      <div className="sidebar">
        <SideNavbar />
      </div>
      <div className="content-page ps-2 pe-2">
        <div className="main-content">
          <Floor />
        </div>
      </div>
    </div>
  );
};

export default floor;
