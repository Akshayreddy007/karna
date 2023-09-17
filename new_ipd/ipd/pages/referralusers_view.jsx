import React from "react";
import Navbar2 from "../components/navbar/Navbar2";
import SideNavbar from "../components/sidenavbar/SideNavbar";
import { Col } from "react-bootstrap";
import Referralusers_View from "../components/admin/referralusers/Referralusers_View";

const referralusers_view = () => {
  return (
    <React.Fragment>
      <Navbar2 />
      <div className="d-flex">
        <Col md={2}>
          <SideNavbar />
        </Col>
        <Col md={10} className="px-md-3">
          <Referralusers_View />
        </Col>
      </div>
    </React.Fragment>
  );
};

export default referralusers_view;
