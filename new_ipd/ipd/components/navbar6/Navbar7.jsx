import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo2 from "../../public/images/avatar.svg";
import Logo3 from "../../public/images/image 62.svg";
import Logo4 from "../../public/images/image 64.svg";
import Logo1 from "../../public/images/Group 95.svg";
import styles from "../../styles/IPD_Doctor/Navbar1.module.scss";
import {
  Container,
  Navbar,
  Nav,
  Col,
  Form,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { useRouter } from "next/router";
import SideNavbarIpdNurse from "../sidenavbar_ipdnurse/SideNavbarIpdNurse";
const Navbar6 = () => {
  const router = useRouter();
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <React.Fragment>
      <div>
        <Navbar
          className={`bg-white pt-0 pb-0 ${styles.navbarfix}`}
          id="navbar"
        >
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
            <span className={styles.f28}>
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
            </span>
            <span className={styles.f28} style={{ marginRight: "0px" }}>
              <div className="dropdown1">
                <button className="dropbtn1">
                  <div className={`d-flex align-items-center ${styles.bdr}`}>
                    <Col
                      className={` f12 text-center px-3 ${styles.texttr2}`}
                      md={9}
                    >
                      Fttestdoctor2
                    </Col>
                    <Col md={3} className="text-end">
                      <Image
                        src={Logo2}
                        className=""
                        width="35"
                        height="35"
                        alt="logo"
                      />
                    </Col>
                  </div>
                </button>
                <div class="dropdown-content1">
                  <div className={`bg-white ${styles.br32} `}>
                    <a
                      href="#"
                      className={`d-flex align-items-center ${styles.bdrbtm}`}
                    >
                      <div>
                        <Image
                          src={Logo3}
                          className=""
                          width="30"
                          height="30"
                          alt="logo"
                        />
                      </div>
                      <div className={`ps-2 theme14 f12 ${styles.lt14}`}>
                        Sprint Fields Clinic{" "}
                        <span className="theme12 f10">sfc@91care.com</span>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center pt-2 div1 "
                    >
                      <div>
                        <Image
                          src={Logo4}
                          className=""
                          width="30"
                          height="30"
                          alt="logo"
                        />
                      </div>
                      <div className={`ps-2 theme14 f12 ${styles.lt14}`}>
                        Sprint Fields Clinic{" "}
                        <span className="theme12 f10">sfc@91care.com</span>
                      </div>
                    </a>
                  </div>
                  <a href="#" className="d-flex align-items-center pt-2">
                    <div className="ps-2">
                      <i className="fal fa-sign-out"></i>
                    </div>
                    <div className="ps-3 theme14 f13">Logout </div>
                  </a>
                </div>
              </div>
            </span>
          </div>
        </Navbar>
        <div
          className={`sidebar ${isOpen == true ? "active" : ""}`}
          id="sidebar"
        >
          <SideNavbarIpdNurse />
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </React.Fragment>
  );
};

export default Navbar6;
