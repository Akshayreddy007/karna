import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";
import home from '../../public/images/home.svg';
import stafficon from '../../public/images/staff-sessions.svg';
import circle from '../../public/images/circle-solid.svg';
import inventoryicon from '../../public/images/inventory.svg';
import dashboard from '../../public/images/dashboard.svg';
import eorders from '../../public/images/e-cart.svg';
import patients from '../../public/images/patients.svg';
import mplace from '../../public/images/mplace.svg';
import more from '../../public/images/more.svg';
import purchase from '../../public/images/purchase.svg';
import nurse from "../../pages/ipd_nurse_view"

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
const SideNavbarIpdNurse = () => {
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
              <div className="sd-link">
              <Link href="#">
                <Image src={dashboard} width="18" height="18" alt="dashboard" />
                <span>Dashboard </span>
                </Link>
              </div>
         </li>
         <li>
              <div className={`${router.pathname == "/Ipdnurse/ipd_nurse" ? "active" : ""} sd-link`}>
              <Link href="/Ipdnurse/ipd_nurse">
              <i class="fal fa-home me-1"></i>
                <span>Home </span>
                </Link>
              </div>
            </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SideNavbarIpdNurse;
