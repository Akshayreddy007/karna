import React, { useState } from "react";
import styles from "../styles/Labdashboard.module.scss";

const products1 = [
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    STATUS: <div className={styles.inprogress}> In Progress</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file me-3  f14"></i>
        <i className="fal fa-edit me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Fasting blood glucose(FBS)</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Kierra Carder</div>,
    STATUS: <div className={styles.inprogress}> In Progress</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file me-3  f14"></i>
        <i className="fal fa-edit me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Kierra Carder</div>,
    STATUS: <div className={styles.reportspending}> Reports Pending</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file me-3  f14"></i>
        <i className="fal fa-edit me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Fasting blood glucose(FBS)</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Kierra Carder</div>,
    STATUS: <div className={styles.pending}> Pending Samples</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file me-3  f14"></i>
        <i className="fal fa-edit me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Fasting blood glucose(FBS)</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    STATUS: <div className={styles.reportspending}> Reports Pending</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file me-3  f14"></i>
        <i className="fal fa-edit me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    STATUS: <div className={styles.reportspending}> Reports Pending</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file me-3  f14"></i>
        <i className="fal fa-edit me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    STATUS: <div className={styles.reportspending}> Reports Pending</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file me-3  f14"></i>
        <i className="fal fa-edit me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    STATUS: <div className={styles.reportspending}> Reports Pending</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file me-3  f14"></i>
        <i className="fal fa-edit me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    STATUS: <div className={styles.pending}> Pending Samples</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file me-3  f14"></i>
        <i className="fal fa-edit me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    STATUS: <div className={styles.reportspending}> Reports Pending</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file me-3  f14"></i>
        <i className="fal fa-edit me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    STATUS: <div className={styles.reportspending}> Reports Pending</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file me-3  f14"></i>
        <i className="fal fa-edit me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    STATUS: <div className={styles.reportspending}> Reports Pending</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file me-3  f14"></i>
        <i className="fal fa-edit me-3  f14  f14"></i>
      </div>
    ),
  },
];

export default products1;
