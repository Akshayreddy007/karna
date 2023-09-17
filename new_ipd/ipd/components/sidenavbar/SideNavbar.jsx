import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import {
  FaCalendar,
  FaUser,
  FaUsers,
  FaMoney,
  FaStar,
  FaCircle,
} from "react-icons/fa";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useRouter } from "next/router";
const SideNavbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);
  const handlemenuClick = (e) => {
    setOpen(!open);
  };
  // const handleSubmenuClick = (e) => {
  //   setOpen(open);
  // };
  const userCloseClick = (e) => {
    setOpen(open);
  };
  return (
    <React.Fragment>
      <div className="sd-body">
        <ul>
          <li>
            <Link
              className={router.pathname == "/dashboard_admin" ? "active" : ""}
              href="/dashboard_admin"
            >
              <div className="sd-link">
                <i className="fal fa-tachometer"></i>
                <span className="px-1"> Dashboard</span>
              </div>
            </Link>
          </li>

          <Menu>
            <SubMenu
              label="Services"
              icon={<FaCircle />}
              title="Submenu"
              onClick={handlemenuClick}
              open={open}
            >
              <Link
                className={router.pathname == "/services" ? "active" : ""}
                href="/services"
              >
                <MenuItem onClick={userCloseClick}>
                  <i className="fal fa-circle"></i> Services
                </MenuItem>
              </Link>
              <Link
                className={router.pathname == "/services_types" ? "active" : ""}
                href="/services_types"
              >
                <MenuItem onClick={userCloseClick}>
                  <i className="fal fa-circle"></i> Type
                </MenuItem>
              </Link>
            </SubMenu>
            <li>
              <Link
                className={router.pathname == "/messages" ? "active" : ""}
                href="/messages"
              >
                <div className="sd-link">
                  <i className="fal fa-comment"></i>
                  <span className="px-1"> Messages</span>
                </div>
              </Link>
            </li>

            <SubMenu label="Users" icon={<FaUsers />}>
              <Link
                className={router.pathname == "/users" ? "active" : ""}
                href="/users"
              >
                <MenuItem>
                  <i className="fal fa-users"></i> Users
                </MenuItem>
              </Link>
              <Link
                className={router.pathname == "/users_roles" ? "active" : ""}
                href="/users_roles"
              >
                <MenuItem>
                  <i className="fal fa-user"></i> Roles
                </MenuItem>
              </Link>
            </SubMenu>
            <li>
              <Link
                className={router.pathname == "/clinics" ? "active" : ""}
                href="/clinics"
              >
                <div className="sd-link">
                  <i className="fal fa-hospital"></i>
                  <span className="px-1">Clinics </span>
                </div>
              </Link>
            </li>
            <li>
              <a className="sd-link">
                <i className="fal fa-receipt"></i>
                <span className="px-1">Billing </span>
              </a>
            </li>
            <li>
              <a className="sd-link">
                <i className="fal fa-money-bill-alt"></i>
                <span className="px-1">Payments </span>
              </a>
            </li>
            <li>
              <div className="sd-link">
                <Link
                  className={
                    router.pathname == "/prescriptions" ? "active" : ""
                  }
                  href="/prescriptions"
                >
                  <i className="fal fa-file"></i>
                  <span className="px-1">Prescription </span>
                </Link>
              </div>
            </li>
            <li>
              <div className="sd-link">
                <Link
                  className={
                    router.pathname == "/referralusers" ? "active" : ""
                  }
                  href="/referralusers"
                >
                  <i className="fal fa-user"></i>
                  <span className="px-1">Referral Users </span>
                </Link>
              </div>
            </li>
            <li>
              <div className="sd-link">
                <Link
                  className={router.pathname == "/qrcode" ? "active" : ""}
                  href="/qrcode"
                >
                  <i className="fal fa-user"></i>
                  <span className="px-1">QR Code </span>
                </Link>
              </div>
            </li>
            <li>
              <div className="sd-link">
                <i className="fal fa-user"></i>
                <span className="px-1">Patients </span>
              </div>
            </li>
            <li>
              <div className="sd-link">
                <Link
                  className={router.pathname == "/uhid_config" ? "active" : ""}
                  href="/uhid_config"
                >
                  <i className="fal fa-user"></i>
                  <span className="px-1">UHID Config </span>
                </Link>
              </div>
            </li>
          </Menu>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SideNavbar;
