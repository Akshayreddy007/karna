import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useRouter } from "next/router";
const Sidenavbar_lab = () => {
  const router = useRouter();
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
          <li>
            <Link
              className={router.pathname == "/patients_lab" ? "active" : ""}
              href="/patients_lab"
            >
              <div className="sd-link">
                <i className="fal fa-users"></i>
                <span className="px-1"> Patients</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={router.pathname == "/billing_lab" ? "active" : ""}
              href="/billing_lab"
            >
              <div className="sd-link">
                <i className="fal fa-receipt"></i>
                <span className="px-1"> Billing</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={router.pathname == "/services_lab" ? "active" : ""}
              href="/services_lab"
            >
              <div className="sd-link">
                <i className="fal fa-hand-holding-box"></i>
                <span className="px-1"> Lab Services</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidenavbar_lab;
