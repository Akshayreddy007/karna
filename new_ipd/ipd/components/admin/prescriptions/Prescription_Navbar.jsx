import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Logo2 from "../../../public/images/avatar.svg";
import Logo3 from "../../../public/images/avatarlogo.svg";
import Logo1 from "../../../public/images/Group 95.svg";
import styles from "../../../styles/Navbar1.module.scss";
import {
    Container,
    Navbar,
    Nav,
    Form,
    InputGroup,
    Dropdown,
    DropdownButton,
  } from "react-bootstrap";
const Prescription_Navbar = () => {
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
        <span className={styles.f28}>
          <Link href="/profile">
            <span>
              <Image
                src={Logo3}
                className={styles.springfeild}
                width="95"
                height="40"
                alt="logo"
              />
            </span>
            <Image
              src={Logo2}
              className={styles.index}
              width="40"
              height="35"
              alt="logo"
            />
          </Link>
        </span>
      </div>
    </Navbar>
    
    
  </React.Fragment>
  )
}

export default Prescription_Navbar