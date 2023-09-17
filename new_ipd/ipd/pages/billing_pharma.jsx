import React from "react";
import Billing from "../components/pharmacy/billing/Billing";
import Navbar2 from "../components/navbar3/Navbar4";
import SideNavbar from "../components/sidenavbar/SideNavbar";
const billing_pharma = () => {
  return (
    <div>
      <Navbar2 />
      <div className="left-side-menu">
        <SideNavbar />
      </div>
      <div className="content-page">
        <div className="main-content">
          <Billing />
        </div>
      </div>
    </div>
  );
};

export default billing_pharma;
