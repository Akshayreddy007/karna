import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import styles from "../../styles/IPD_Admin/Dashboard.module.scss";
import Icon from "../../public/images/dashboardicon.png";
import {
  FaCalendar,
  FaUser,
  FaUsers,
  FaMoney,
  FaStar,
  FaCircle,
  FaBed,
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
import Image from "next/image";
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
  const [subMenu, setSubMenu] = useState({ bed: false });
  useEffect(() => {
    if (router.pathname === "/bed_types" || router.pathname === "/bed") {
      setSubMenu({ ...subMenu, bed: true });
    }
  }, []);
  return (
    <React.Fragment>
      <div className="sd-body">
        <ul>
          <li>
            <Link
              className={
                router.pathname == "/dashboard_ipdadmin" ? "active" : ""
              }
              href="/dashboard_ipdadmin"
            >
              <div className="sd-link">
                <Image src={Icon} width={18} height={16} />
                <span className={`px-1 ${styles.font}`}> Dashboard</span>
              </div>
            </Link>
          </li>

          <li>
            <Link
              className={router.pathname == "/dashboard_home" ? "active" : ""}
              href="/dashboard_home"
            >
              <div className="sd-link">
                <i className="fal fa-home"></i>
                <span className={`px-1 ${styles.font}`}> Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={router.pathname == "/dashboard_users" ? "active" : ""}
              href="/dashboard_users"
            >
              <div className="sd-link">
                <i className="fal fa-users"></i>
                <span className={`px-1 ${styles.font}`}> Users</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={router.pathname == "/block" ? "active" : ""}
              href="/block"
            >
              <div className="sd-link">
                <i className="fal fa-square"></i>
                <span className={`px-2 ${styles.font}`}> Block</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={router.pathname == "/floor" ? "active" : ""}
              href="/floor"
            >
              <div className="sd-link">
                <i className="fal fa-building"></i>
                <span className={`px-2 ${styles.font}`}> Floors</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={router.pathname == "/department" ? "active" : ""}
              href="/department"
            >
              <div className="sd-link">
                <i className="fal fa-users"></i>
                <span className={`px-1 ${styles.font}`}> Department</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={router.pathname == "/ward" ? "active" : ""}
              href="/ward"
            >
              <div className="sd-link">
                <i className="fal fa-users"></i>
                <span className={`px-1 ${styles.font}`}> Wards</span>
              </div>
            </Link>
          </li>
          <li id="menuitems1">
            <Menu>
              <SubMenu
                label="bed"
                icon={<FaBed />}
                open={
                  subMenu.bed ||
                  router.pathname === "/bed_type" ||
                  router.pathname === "/bed_types"
                }
                onOpenChange={() =>
                  setSubMenu({ ...subMenu, bed: !subMenu.bed })
                }
              >
                <Link
                  className={router.pathname == "/bed" ? "active" : ""}
                  href="/bed"
                >
                  <MenuItem>
                    <div className="sd-link">
                      <i className="fal fa-circle ps-2 pe-1"></i> Beds{" "}
                    </div>
                  </MenuItem>
                </Link>
                <Link
                  className={router.pathname == "/bed_types" ? "active" : ""}
                  href="/bed_types"
                >
                  <MenuItem>
                    <div className="sd-link">
                      <i className="fal fa-circle ps-2 pe-1"></i> Types{" "}
                    </div>
                  </MenuItem>
                </Link>
              </SubMenu>
            </Menu>
          </li>
          <li>
            <Link
              className={router.pathname == "/dashboard_home" ? "active" : ""}
              href="/dashboard_home"
            >
              <div className="sd-link">
                <i className="fal fa-cog"></i>
                <span className={`px-1 ${styles.font}`}> Services</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SideNavbar;
