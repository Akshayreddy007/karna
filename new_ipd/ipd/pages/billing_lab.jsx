import React from "react";
import Billing from "../components/lab/billing/Billing";
import Navbar3 from "../components/navbar2/Navbar3";
import Sidenavbar_lab from "../components/sidenavbar_lab/SideNavbar_lab";
const billing_lab = () => {
  return (
    <div>
      <Navbar3 />
      <div className="left-side-menu">
        <Sidenavbar_lab />
      </div>
      <div className="content-page">
        <div className="main-content">
          <Billing />
        </div>
      </div>
    </div>
  );
};

export default billing_lab;
