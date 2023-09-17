import React from "react";
import IpdNurse from "../components/ipd_nurse/IpdNurse";
import SideNavbarIpdNurse from "../components/sidenavbar_ipdnurse/SideNavbarIpdNurse";
import SideNavIpdNurse from "../components/sidenavbar_ipdnurse/SideNavbarIpdNurse";
import Navbar from "../components/navbar6/Navbar7";
const Ipd_Nurse = () => {
  return (
    <div>
      <Navbar />
      <div className="left-side-menu">
        <SideNavbarIpdNurse />
      </div>
      <div className="content-page" id="content-page">
        <div className="main-content pe-2">
          <IpdNurse />
        </div>
      </div>
    </div>
  );
};

export default Ipd_Nurse;
