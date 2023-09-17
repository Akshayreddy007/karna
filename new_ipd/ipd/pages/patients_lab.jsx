import React from "react";
import Navbar3 from "../components/navbar2/Navbar3";
import Patients from "../components/lab/patients/Patients";
import Sidenavbar_lab from "../components/sidenavbar_lab/Sidenavbar_lab.jsx";
const patients_lab = () => {
  return (
    <div>
      <Navbar3 />
      <div className="left-side-menu">
        <Sidenavbar_lab />
      </div>
      <div className="content-page">
        <div className="main-content">
          <Patients />
        </div>
      </div>
    </div>
  );
};

export default patients_lab;
