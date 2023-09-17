import React from "react";
import Navbar2 from "../components/navbar/Navbar2";
import SideNavbar from "../components/sidenavbar/SideNavbar";
import { Col } from "react-bootstrap";
import Users_Roles from "../components/admin/users/Users_Roles";
const users_roles = () => {
  return (
    <div>
      <Navbar2 />
      <div className="left-side-menu">
        <SideNavbar />
      </div>
      <div className="content-page">
        <div className="main-content">
          <Users_Roles />
        </div>
      </div>
    </div>
  );
};

export default users_roles;
