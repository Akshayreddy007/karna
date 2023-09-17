import React, { useState } from "react";
import styles from "../styles/Labdashboard.module.scss";

const products1 = [
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23-Jan-2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    PAYMENT: <div className={styles.inprogress}> In Progress</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription  me-3  f14"></i>
        <i className="fal fa-file-invoice  me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23-Jan-2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Kierra Carder</div>,
    PAYMENT: <div className={styles.inprogress}> In Progress</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription  me-3  f14"></i>
        <i className="fal fa-file-invoice  me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23-Jan-2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Kierra Carder</div>,
    PAYMENT: <div className={styles.pending}> Pending</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription  me-3  f14"></i>
        <i className="fal fa-file-invoice  me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23-Jan-2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Kierra Carder</div>,
    PAYMENT: <div className={styles.pending}> Pending </div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription  me-3  f14"></i>
        <i className="fal fa-file-invoice  me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23-Jan-2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    PAYMENT: <div className={styles.pending}> Pending</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription  me-3  f14"></i>
        <i className="fal fa-file-invoice  me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23-Jan-2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    PAYMENT: <div className={styles.pending}> Pending</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription  me-3  f14"></i>
        <i className="fal fa-file-invoice  me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23-Jan-2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    PAYMENT: <div className={styles.pending}> Pending</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription  me-3  f14"></i>
        <i className="fal fa-file-invoice  me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23-Jan-2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    PAYMENT: <div className={styles.pending}> Pending</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription  me-3  f14"></i>
        <i className="fal fa-file-invoice  me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23-Jan-2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    PAYMENT: <div className={styles.paid}> Paid </div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription  me-3  f14"></i>
        <i className="fal fa-file-invoice  me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23-Jan-2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    PAYMENT: <div className={styles.paid}> Paid </div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription  me-3  f14"></i>
        <i className="fal fa-file-invoice  me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23-Jan-2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    PAYMENT: <div className={styles.paid}> Paid </div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription    me-3  f14"></i>
        <i className="fal fa-file-invoice  me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
    BILLDATE: <div className="nowwrap">23-Jan-2023</div>,
    TYPE: <div className="nowwrap">OP</div>,
    DOCTOR: <div className="nowwrap">Allison Kenter</div>,
    PAYMENT: <div className={styles.paid}> Paid </div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-prescription    me-3  f14"></i>
        <i className="fal fa-file-invoice  me-3  f14  f14"></i>
      </div>
    ),
  },
];

export default products1;
