import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import styles from "../../styles/IPD_Receptionist/Appointments.module.scss"
import Icon from "../../public/images/dashboardicon.png"
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
  
  return (
    <React.Fragment>
      <div className="sd-body">
        <ul>
          {/* <li>
            <Link
              className={router.pathname == "/dashboard_admin" ? "active" : ""}
              href="/dashboard_ipr"
            >
              <div className="sd-link">
                <Image src={Icon} width={18} height={16} />
                <span className={`px-1 ${styles.font}`}> Dashboard</span>
              </div>
            </Link>
          </li> */}
           <li>
            <Link
              className={router.pathname == "/dashboard_ipr" ? "active" : ""}
              href="/dashboard_ipr"
            >
              <div className="sd-link">
                <i className="fal fa-tachometer-alt"></i>
                <span className={`px-1 ${styles.font}`}> Dashboard</span>
              </div>
            </Link>
          </li>

          <li>
            <Link
              className={router.pathname == "/ipr_appointments" ? "active" : ""}
              href="/ipr_appointments"
            >
              <div className="sd-link">
                <i className="fal fa-home"></i>
                <span className={`px-1 ${styles.font}`}> Home</span>
              </div>
            </Link>
          </li>

          <li>
            <Link
              className={router.pathname == "/ipr_cross_consultation" ? "active" : ""}
              href="/ipr_cross_consultation"
            >
              <div className="sd-link">
                <i className="fal fa-ballot-check"></i>
                <span className={`px-1 ${styles.font}`}> Cross Consultation</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SideNavbar;
