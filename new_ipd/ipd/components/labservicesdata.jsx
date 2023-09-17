import React, { useState } from "react";
import styles from "../styles/Services.module.scss";

const products1 = [
  {
    ID: <div className="nowwrap"> 01</div>,
    TESTNAME: <div className="nowwrap">New Test Name</div>,
    TYPE: <div className="nowwrap">One time</div>,
    FEE: <div className="nowwrap">400/-</div>,
    SAMPLETYPE: <div className="nowwrap">Blood</div>,
    VOLUME: <div className="nowwrap">2ml</div>,
    DEPARTMENT: <div className="nowwrap">Hematology</div>,
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
    ID: <div className="nowwrap"> 01</div>,
    TESTNAME: <div className="nowwrap">New Test Name</div>,
    TYPE: <div className="nowwrap">Packages</div>,
    FEE: <div className="nowwrap">4000/-</div>,
    SAMPLETYPE: <div className="nowwrap">Blood</div>,
    VOLUME: <div className="nowwrap">2ml</div>,
    DEPARTMENT: <div className="nowwrap">Biochemistry</div>,
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
    ID: <div className="nowwrap"> 01</div>,
    TESTNAME: <div className="nowwrap">New Test Name</div>,
    TYPE: <div className="nowwrap">One time</div>,
    FEE: <div className="nowwrap">4000/-</div>,
    SAMPLETYPE: <div className="nowwrap">Urine</div>,
    VOLUME: <div className="nowwrap">2ml</div>,
    DEPARTMENT: <div className="nowwrap">Serology</div>,
    STATUS: <div className={styles.services_active}> Active</div>,
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
