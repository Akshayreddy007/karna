import React from "react";
import Navbar2 from "../components/navbar3/Navbar4";
import SideNavbar from "../components/sidenavbar/SideNavbar";
import Patients from "../components/pharmacy/patients/Patients";

const patients_pharma = () => {
  return (
    <div>
      <Navbar2 />
      <div className="left-side-menu">
        <SideNavbar />
      </div>
      <div className="content-page">
        <div className="main-content">
          <Patients />
        </div>
      </div>
    </div>
  );
};

export default patients_pharma;
