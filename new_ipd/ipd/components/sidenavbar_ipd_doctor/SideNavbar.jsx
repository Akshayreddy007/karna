import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useRouter } from "next/router";
import styles from '../../styles/IPD_Doctor/Sidebar.module.scss';
import { Col } from "react-bootstrap";
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
                        <div className="px-1">
                            <Col md={12} className={`${styles.bg1} text-center px-3 py-3`}>
                                <i className="fal fa-user-circle theme9 f44 text-center"></i>
                                <div className="f13 font-weight-600 pt-2">April Curtis </div>
                                <div className="f12"> (44/M)</div>
                            </Col>

                            <Col md={12} className={`${styles.bg2} px-2 py-3`}>
                                <div className="f11 theme12">GUARDIAN</div>
                                <div className="f12 theme14">April Curtis</div>
                                <div className="f12 theme14">(9393939393)</div>

                                <div className="f11 theme12 mt-2">ADMISN NO</div>
                                <div className="f12 theme14">AABBDD122</div>

                                <div className="f11 theme12 mt-2">UHID</div>
                                <div className="f12 theme14">UHI2011</div>
                            </Col>
                        </div>
                    </li>
                    <li>
                        <div className={`f13 mt-2 mb-2 px-3 ${styles.active}`}>Initial Assessment</div>
                    </li>
                    <li>
                        <div className="f13 py-3 px-3">Prescription</div>
                    </li>
                    <li>
                        <div className="f13 py-3 px-3">Cross Consultation</div>
                    </li>
                    <li>
                        <div className="f13 py-3 px-3">Operation Theatre</div>
                    </li>
                    <li>
                        <div className="f13 py-3 px-3">Discharge Summary</div>
                    </li>
                    <li>
                        <div className="f13 py-3 px-3">Past Visits</div>
                    </li>
                    <li>
                        <div className="f13 py-2 px-3">Case Sheet</div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default SideNavbar;
