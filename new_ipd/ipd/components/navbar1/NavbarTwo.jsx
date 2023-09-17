import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo2 from "../../public/images/avatar.svg";
import Logo3 from "../../public/images/avatarlogo.svg";
import Logo1 from "../../public/images/Group 95.svg";
import Logo10 from "../../public/images/admin.png";
import Logo11 from "../../public/images/pharma.png";
import Logo12 from "../../public/images/nurse.png";
import Logo13 from "../../public/images/receptionist.png";
import Logo14 from "../../public/images/doctor.png";
import Logo15 from "../../public/images/lab.png";
import styles from "../../styles/Navbar1.module.scss";
import {
  Container,
  Navbar,
  Nav,
  Form,
  InputGroup,
  Dropdown,
  DropdownButton,
  Col,
} from "react-bootstrap";
import { useRouter } from "next/router";
const NavbarTwo = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <Navbar className="bg-white pt-0 pb-0" id="navbar">
        <div className={styles.logobg}>
          <Image
            src={Logo1}
            className={`${styles.lgimg} luminosity`}
            width="130"
            height="35"
            alt="logo"
          />
        </div>
        <Nav className="me-auto">
          <Nav.Item className={styles.themenavbar}>
            <Link
              className={router.pathname == "/dashboard" ? "active" : ""}
              href="/dashboard"
            >
              Dashboard
            </Link>
          </Nav.Item>
          <Nav.Item className={styles.themenavbar}>
            <Link
              className={router.pathname == "/appointments1" ? "active" : ""}
              href="/appointments1"
            >
              Appointments
            </Link>
          </Nav.Item>
          <Nav.Item className={styles.themenavbar}>
            <Link
              className={router.pathname == "/patients" ? "active" : ""}
              href="/patients"
            >
              Patients
            </Link>
          </Nav.Item>
          <Nav.Item className={styles.themenavbar}>
            <Link
              className={router.pathname == "/doctors" ? "active" : ""}
              href="/doctors"
            >
              Doctors
            </Link>
          </Nav.Item>
          <InputGroup className="mb-0 ms-xl-5 ms-lg-1 d-xl-flex d-lg-flex d-none searchbxwdth">
            <i className="fal fa-search searchboxicon"></i>
            <Form.Control
              aria-label="Text input with dropdown button"
              placeholder="Search By OP ID / ABHA ADDRESS / MOBILE"
              className="fp_13"
            />
            <DropdownButton
              variant="outline-secondary"
              id="input-group-dropdown-2"
              align="end"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Nav>
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
            <div class="dropdown3">
            <button class="dropbtn3">
            <div>
            <i className="fal fa-cog"></i>
            </div>
            </button>
            <div class="dropdown-content3 box arrow-top">
            <div className="d-flex">
            <Col md={6} className="text-center px-3 py-3">
            <div className="dropdown3border pt-2 pb-2">
            <Image src={Logo10} alt="Image" width={35} height={35}/>
            <div className="f13 mt-1">Admin</div>
            </div>
            </Col>
            <Col md={6} className="text-center px-3 py-3">
            <div className="dropdown3border  pt-2 pb-2">
            <Image src={Logo11} alt="Image" width={35} height={35}/>
            <div className="f13 mt-1">Pharma</div>
            </div>
            </Col>
            </div>
            <div className="d-flex">
            <Col md={6} className="text-center px-3 py-2">
            <div className="dropdown3border pt-2 pb-2">
            <Image src={Logo12} alt="Image" width={35} height={35}/>
            <div className="f13 mt-1">Nurse</div>
            </div>
            </Col>
            <Col md={6} className="text-center px-3 py-2">
            <div className="dropdown3border  pt-2 pb-2">
            <Image src={Logo14} alt="Image" width={35} height={35}/>
            <div className="f13 mt-1">Reception</div>
            </div>
            </Col>
            </div>
            <div className="d-flex">
            <Col md={6} className="text-center px-3 py-3">
            <div className="dropdown3border pt-2 pb-2">
            <Image src={Logo15} alt="Image" width={35} height={35}/>
            <div className="f13 mt-1">Doctor</div>
            </div>
            </Col>
            <Col md={6} className="text-center px-3 py-3">
            <div className="dropdown3border  pt-2 pb-2">
            <Image src={Logo13} alt="Image" width={35} height={35}/>
            <div className="f13 mt-1">Lab</div>
            </div>
            </Col>
            </div>
            </div>
            </div>
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
  );
};

export default NavbarTwo;
