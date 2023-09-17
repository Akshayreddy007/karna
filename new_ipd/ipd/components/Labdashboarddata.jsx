import React, { useState } from "react";
import styles from "../styles/Labdashboard.module.scss";
const Labdashboarddata = () => {
  const Products1 = [
    {
      ID: <div className="nowwrap"> 01</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      PATIENTNAME: <div className="nowwrap">Ryan Calzoni</div>,
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
      ID: <div className="nowwrap"> 02</div>,
      TESTNAME: <div className="nowwrap">Fasting blood glucose(FBS)</div>,
      PATIENTNAME: <div className="nowwrap">Abram Westervelt</div>,
      TYPE: <div className="nowwrap">IP</div>,
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
      ID: <div className="nowwrap"> 03</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      PATIENTNAME: <div className="nowwrap">Ryan Calzoni</div>,
      TYPE: <div className="nowwrap">OT</div>,
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
      ID: <div className="nowwrap"> 04</div>,
      TESTNAME: <div className="nowwrap">Fasting blood glucose(FBS)</div>,
      PATIENTNAME: <div className="nowwrap">Abram Westervelt</div>,
      TYPE: <div className="nowwrap">OT</div>,
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
      ID: <div className="nowwrap"> 05</div>,
      TESTNAME: <div className="nowwrap">Fasting blood glucose(FBS)</div>,
      PATIENTNAME: <div className="nowwrap">Ryan Calzoni</div>,
      TYPE: <div className="nowwrap">OP</div>,
      DOCTOR: <div className="nowwrap">Allison Kenter</div>,
      STATUS: <div className={styles.scheduled}> Scheduled</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-file me-3  f14"></i>
          <i className="fal fa-edit me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 06</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      PATIENTNAME: <div className="nowwrap">Ryan Calzoni</div>,
      TYPE: <div className="nowwrap">IP</div>,
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
      ID: <div className="nowwrap"> 07</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      PATIENTNAME: <div className="nowwrap">Ryan Calzoni</div>,
      TYPE: <div className="nowwrap">OT</div>,
      DOCTOR: <div className="nowwrap">Allison Kenter</div>,
      STATUS: <div className={styles.scheduled}> Scheduled</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-file me-3  f14"></i>
          <i className="fal fa-edit me-3  f14"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 08</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      PATIENTNAME: <div className="nowwrap">Ryan Calzoni</div>,
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
      ID: <div className="nowwrap"> 09</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      PATIENTNAME: <div className="nowwrap">Ryan Calzoni</div>,
      TYPE: <div className="nowwrap">IP</div>,
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
      ID: <div className="nowwrap"> 10</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      PATIENTNAME: <div className="nowwrap">Ryan Calzoni</div>,
      TYPE: <div className="nowwrap">OT</div>,
      DOCTOR: <div className="nowwrap">Allison Kenter</div>,
      STATUS: <div className={styles.reportspending}> Reports Pending</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-file me-3  f14"></i>
          <i className="fal fa-edit me-3  f14"></i>
        </div>
      ),
    },
  ];
  return (
    <React.Fragment>
      <Products1 />
    </React.Fragment>
  );
};
export default Labdashboarddata;
