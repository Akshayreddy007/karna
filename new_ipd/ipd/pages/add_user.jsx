import React from "react";
import Navbar2 from "../components/navbar/Navbar2";
import SideNavbar from "../components/sidenavbar/SideNavbar";
import { Col } from "react-bootstrap";
import Add_User from "../components/admin/users/Add_User";
const add_user = () => {
  return (
    <React.Fragment>
      <Navbar2 />
      <div className="d-flex">
        <Col md={2}>
          <SideNavbar />
        </Col>
        <Col md={10} className="px-md-3">
          <Add_User />
        </Col>
      </div>
    </React.Fragment>
  );
};

export default add_user;
