import React from "react";
import Patients_View from "../components/lab/patients/Patients_View";
import Navbar3 from "../components/navbar2/Navbar3";
import Sidenavbar_lab from "../components/sidenavbar_lab/Sidenavbar_lab";

const patients_labview = () => {
  return (
    <div>
      <Navbar3 />
      <div className="left-side-menu">
        <Sidenavbar_lab />
      </div>
      <div className="content-page">
        <div className="main-content">
          <Patients_View />
        </div>
      </div>
    </div>
  );
};

export default patients_labview;
