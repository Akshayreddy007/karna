import React from "react";
import Navbar2 from "../components/navbar3/Navbar4";
import SideNavbar from "../components/sidenavbar/SideNavbar";
import Patients_View from "../components/pharmacy/patients/Patients_View";

const patients_pharma = () => {
  return (
    <div>
      <Navbar2 />
      <div className="left-side-menu">
        <SideNavbar />
      </div>
      <div className="content-page">
        <div className="main-content">
          <Patients_View />
        </div>
      </div>
    </div>
  );
};

export default patients_pharma;
