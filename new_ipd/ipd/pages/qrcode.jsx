import React from "react";
import Navbar2 from "../components/navbar/Navbar2";
import SideNavbar from "../components/sidenavbar/SideNavbar";
import { Col } from "react-bootstrap";
import Qrcode from "../components/admin/qrcode/Qrcode";

const qrcode = () => {
  return (
    <div>
      <Navbar2 />
      <div className="left-side-menu">
        <SideNavbar />
      </div>
      <div className="content-page">
        <div className="main-content">
          <Qrcode />
        </div>
      </div>
    </div>
  );
};

export default qrcode;
