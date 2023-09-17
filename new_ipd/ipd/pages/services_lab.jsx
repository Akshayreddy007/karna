import React from "react";
import Navbar3 from "../components/navbar2/Navbar3";
import Labservices from "../components/lab/labservices/Labservices";
import Sidenavbar_lab from "../components/sidenavbar_lab/Sidenavbar_lab";
const services_lab = () => {
  return (
    <div>
      <Navbar3 />
      <div className="left-side-menu">
        <Sidenavbar_lab />
      </div>
      <div className="content-page">
        <div className="main-content">
          <Labservices />
        </div>
      </div>
    </div>
  );
};

export default services_lab;
