import React, { useState } from "react";
import styles from "../styles/Labdashboard.module.scss";

const products1 = [
  {
    ID: <div className="nowwrap"> 01</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
    AMOUNT: <div className="nowwrap">500/-</div>,
    PAYMENT: <div className={styles.inprogress}> In Progress</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription me-3  f13"></i>
        <i className="fal fa-file-invoice me-3  f13"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 02</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
    TYPE: <div className="nowwrap">IP</div>,
    PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
    AMOUNT: <div className="nowwrap">500/-</div>,
    PAYMENT: <div className={styles.paid}> Paid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription me-3  f13"></i>
        <i className="fal fa-file-invoice me-3  f13"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 03</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
    TYPE: <div className="nowwrap">OT</div>,
    PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
    AMOUNT: <div className="nowwrap">500/-</div>,
    PAYMENT: <div className={styles.pending}> Pending </div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription me-3  f13"></i>
        <i className="fal fa-file-invoice me-3  f13"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 04</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
    AMOUNT: <div className="nowwrap">500/-</div>,
    PAYMENT: <div className={styles.paid}> Paid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription me-3  f13"></i>
        <i className="fal fa-file-invoice me-3  f13"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 05</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
    AMOUNT: <div className="nowwrap">500/-</div>,
    PAYMENT: <div className={styles.paid}> Paid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription me-3  f13"></i>
        <i className="fal fa-file-invoice me-3  f13"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 06</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
    TYPE: <div className="nowwrap">IP</div>,
    PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
    AMOUNT: <div className="nowwrap">500/-</div>,
    PAYMENT: <div className={styles.paid}> Paid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription me-3  f13"></i>
        <i className="fal fa-file-invoice me-3  f13"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 07</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
    TYPE: <div className="nowwrap">OT</div>,
    PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
    AMOUNT: <div className="nowwrap">500/-</div>,
    PAYMENT: <div className={styles.pending}> Pending </div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription me-3  f13"></i>
        <i className="fal fa-file-invoice me-3  f13"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 08</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
    AMOUNT: <div className="nowwrap">500/-</div>,
    PAYMENT: <div className={styles.pending}> Pending </div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription me-3  f13"></i>
        <i className="fal fa-file-invoice me-3  f13"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 09</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
    AMOUNT: <div className="nowwrap">500/-</div>,
    PAYMENT: <div className={styles.pending}> Pending </div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription me-3  f13"></i>
        <i className="fal fa-file-invoice me-3  f13"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 10</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
    AMOUNT: <div className="nowwrap">500/-</div>,
    PAYMENT: <div className={styles.pending}> Pending </div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription me-3  f13"></i>
        <i className="fal fa-file-invoice me-3  f13"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 11</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
    AMOUNT: <div className="nowwrap">500/-</div>,
    PAYMENT: <div className={styles.paid}> Paid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription me-3  f13"></i>
        <i className="fal fa-file-invoice me-3  f13"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 12</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
    AMOUNT: <div className="nowwrap">500/-</div>,
    PAYMENT: <div className={styles.paid}> Paid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription me-3  f13"></i>
        <i className="fal fa-file-invoice me-3  f13  "></i>
      </div>
    ),
  },
];

export default products1;
