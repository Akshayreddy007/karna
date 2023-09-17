import React from "react";
import Message from "../components/admin/messages/Messages";
import Navbar2 from "../components/navbar/Navbar2";
import SideNavbar from "../components/sidenavbar/SideNavbar";
import { Col } from "react-bootstrap";

const messages = () => {
  return (
    <div>
      <Navbar2 />
      <div className="left-side-menu">
        <SideNavbar />
      </div>
      <div className="content-page">
        <div className="main-content">
          <Message />
        </div>
      </div>
    </div>
  );
};

export default messages;
