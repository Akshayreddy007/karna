import React, { useState } from "react";
import styles from "../styles/Services.module.scss";

const products1 = [
  {
    ID: <div className="nowwrap"> 01</div>,
    NAME: <div className="nowwrap">Appointment</div>,
    TYPE: <div className="nowwrap">One time visit</div>,
    FEE: <div className="nowwrap">YES</div>,
    STATUS: <div className={styles.services_active}> Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-eye me-3  f14"></i>
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 02</div>,
    NAME: <div className="nowwrap">Follow Up</div>,
    TYPE: <div className="nowwrap">One time visit</div>,
    FEE: <div className="nowwrap">YES</div>,
    STATUS: <div className={styles.services_active}> Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-eye me-3  f14"></i>
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 03</div>,
    NAME: <div className="nowwrap">Multi Step</div>,
    TYPE: <div className="nowwrap">Multi visit</div>,
    FEE: <div className="nowwrap">NO</div>,
    STATUS: <div className={styles.services_active}> Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-eye me-3  f14"></i>
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 04</div>,
    NAME: <div className="nowwrap">Package</div>,
    TYPE: <div className="nowwrap">Multi Service</div>,
    FEE: <div className="nowwrap">NO</div>,
    STATUS: <div className={styles.services_inactive}> In-Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-eye me-3  f14"></i>
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
];

export default products1;
