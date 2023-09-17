import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo2 from "../../public/images/avatar.svg";
import Logo3 from "../../public/images/avatarlogo.svg";
import Logo4 from "../../public/images/image 64.svg";
import Logo5 from "../../public/images/image 62.svg";
import Logo1 from "../../public/images/Group 95.svg";
import styles from "../../styles/Navbar1.module.scss";
import styles1 from "../../styles/IPD_Doctor/Navbar1.module.scss";
import Sidenavbar from "../sidenavbar_ipd_receptionist/SideNavbar";
import {
  Container,
  Navbar,
  Nav, Col,
  Form,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { useRouter } from "next/router";
import { logout } from "../tokenauth/AuthorizationError";
const Navbar3 = () => {
  const router = useRouter();
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  // Retrieve user data from localStorage
  let userData = {};
  let globalUserHip = 0;

  if (typeof window !== "undefined") {
    const storedUserData = localStorage.getItem("user");
    const storedGlobalUserHip = localStorage.getItem("userHip");

    if (storedUserData) {
      try {
        userData = JSON.parse(storedUserData);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }

    if (storedGlobalUserHip) {
      try {
        globalUserHip = JSON.parse(storedGlobalUserHip);
      } catch (error) {
        console.error("Error parsing global user hip from localStorage:", error);
      }
    }
  }

  // Extract the username from userData if it exists
  let userName = "";
  let Name = ""
  const { username, name } = userData;
  userName = username
  Name = name


  return (
    <React.Fragment>
      <Navbar className={`bg-white pt-0 pb-0 ${styles.navbarfix}`} id="navbar">
        <div className={styles.logobg1}>
          <Image
            src={Logo1}
            className={`${styles.lgimg} luminosity`}
            width="130"
            height="35"
            alt="logo"
          />
        </div>
        <div
          className=" mt-1 d-md-none d-block col-8 col-md-2 me-3 text-end"
          onClick={ToggleSidebar}
        >
          <i className="fa fa-bars"></i>
        </div>

        <Nav className="me-auto"></Nav>
        <div className="d-xl-flex d-lg-flex d-none">
          {/* <span className={styles.f28}>
            <i className="fal fa-star"></i>
          </span>
          <span className={styles.f28}>
            <i className="fal fa-bell"></i>
          </span>
          <span className={styles.f28}>
            <i className="fal fa-life-ring"></i>
          </span>
          <span className={styles.f28} style={{ marginRight: "0px" }}>
            <i className="fal fa-cog"></i>
          </span> */}
          <span className={styles.f28} style={{ marginRight: "0px" }}>
            <div className="dropdown1">
              <button className="dropbtn1">
                <div className={`d-flex align-items-center ${styles1.bdr}`}>
                  <Col className={` f12 text-center px-3 ${styles1.texttr2}`} md={9}>{Name}</Col>
                  <Col md={3} className="text-end">
                    <Image src={Logo2} className="" width="35" height="35" alt="logo" />
                  </Col>
                </div>
              </button>
              <div class="dropdown-content1">
                {/* <div className={`bg-white ${styles1.br32} `}>
                  <a href="#" className={`d-flex align-items-center ${styles1.bdrbtm}`}>
                    <div><Image src={Logo5} className="" width="30" height="30" alt="logo" /></div>
                    <div className={`ps-2 theme14 f12 ${styles1.lt14}`}>Sprint Fields Clinic <span className="theme12 f10">sfc@91care.com</span></div>
                  </a>
                  <a href="#" className="d-flex align-items-center pt-2 div1 ">
                    <div><Image src={Logo4} className="" width="30" height="30" alt="logo" /></div>
                    <div className={`ps-2 theme14 f12 ${styles1.lt14}`}>Sprint Fields Clinic <span className="theme12 f10">sfc@91care.com</span></div>
                  </a>
                </div> */}
                <a href="#" className="d-flex align-items-center pt-2">
                  <div className="ps-2"><i className="fal fa-sign-out"></i></div>
                  <div className="ps-3 theme14 f13" onClick={() => logout()}>Logout </div>
                </a>
              </div>
            </div>
          </span>
        </div>
      </Navbar>
      <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
        <Sidenavbar />
      </div>
      <div
        className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
        onClick={ToggleSidebar}
      ></div>
    </React.Fragment>
  );
};

export default Navbar3;
