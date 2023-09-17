import React from "react";
import IpdNurseView from "../components/ipd_nurse/IPD_NurseView";
import Navbar from "../components/navbar1/NavbarTwo";
const ipd_nurse_view = () => {
  return (
    <div>
      <Navbar />
      <div>
        <IpdNurseView />
      </div>
    </div>
  );
};

export default ipd_nurse_view;
