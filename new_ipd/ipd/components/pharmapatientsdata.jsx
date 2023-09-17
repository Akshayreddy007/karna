import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Labdashboard.module.scss";

const products1 = [
  {
    UHID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">April Curtis</div>,
    AGEGENDER: <div className="nowwrap">44/M</div>,
    MOBILENO: <div className="nowwrap">+91 9000545454</div>,
    CONSULTANTDOCTOR: <div className="nowwrap">Allison Kenter</div>,
    BILLSTATUS: <div className="nowwrap">Paid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/patients_pharmaview">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-prescription me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    UHID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">Theodore T.C. Calvin</div>,
    AGEGENDER: <div className="nowwrap">45/M</div>,
    MOBILENO: <div className="nowwrap">+91 9000545454</div>,
    CONSULTANTDOCTOR: <div className="nowwrap">Kierra Carder</div>,
    BILLSTATUS: <div className="nowwrap">Unpaid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/patients_pharmaview">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-prescription me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    UHID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">April Curtis</div>,
    AGEGENDER: <div className="nowwrap">44/M</div>,
    MOBILENO: <div className="nowwrap">+91 9000545454</div>,
    CONSULTANTDOCTOR: <div className="nowwrap">Kierra Carder</div>,
    BILLSTATUS: <div className="nowwrap">Unpaid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/patients_pharmaview">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-prescription me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    UHID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">Theodore T.C. Calvin</div>,
    AGEGENDER: <div className="nowwrap">45/M</div>,
    MOBILENO: <div className="nowwrap">+91 9000545454</div>,
    CONSULTANTDOCTOR: <div className="nowwrap">Kierra Carder</div>,
    BILLSTATUS: <div className="nowwrap">Paid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/patients_pharmaview">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-prescription me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    UHID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">Theodore T.C. Calvin</div>,
    AGEGENDER: <div className="nowwrap">44/M</div>,
    MOBILENO: <div className="nowwrap">+91 9000545454</div>,
    CONSULTANTDOCTOR: <div className="nowwrap">Allison Kenter</div>,
    BILLSTATUS: <div className="nowwrap">Paid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/patients_pharmaview">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-prescription me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    UHID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">April Curtis</div>,
    AGEGENDER: <div className="nowwrap">44/M</div>,
    MOBILENO: <div className="nowwrap">+91 9000545454</div>,
    CONSULTANTDOCTOR: <div className="nowwrap">Allison Kenter</div>,
    BILLSTATUS: <div className="nowwrap">Paid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/patients_pharmaview">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-prescription me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    UHID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">April Curtis</div>,
    AGEGENDER: <div className="nowwrap">44/M</div>,
    MOBILENO: <div className="nowwrap">+91 9000545454</div>,
    CONSULTANTDOCTOR: <div className="nowwrap">Allison Kenter</div>,
    BILLSTATUS: <div className="nowwrap">Paid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/patients_pharmaview">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-prescription me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    UHID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">April Curtis</div>,
    AGEGENDER: <div className="nowwrap">44/M</div>,
    MOBILENO: <div className="nowwrap">+91 9000545454</div>,
    CONSULTANTDOCTOR: <div className="nowwrap">Allison Kenter</div>,
    BILLSTATUS: <div className="nowwrap">Paid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/patients_pharmaview">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-prescription me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    UHID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">April Curtis</div>,
    AGEGENDER: <div className="nowwrap">44/M</div>,
    MOBILENO: <div className="nowwrap">+91 9000545454</div>,
    CONSULTANTDOCTOR: <div className="nowwrap">Allison Kenter</div>,
    BILLSTATUS: <div className="nowwrap">Paid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/patients_pharmaview">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-prescription me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    UHID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">April Curtis</div>,
    AGEGENDER: <div className="nowwrap">44/M</div>,
    MOBILENO: <div className="nowwrap">+91 9000545454</div>,
    CONSULTANTDOCTOR: <div className="nowwrap">Allison Kenter</div>,
    BILLSTATUS: <div className="nowwrap">Paid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/patients_pharmaview">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-prescription me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    UHID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">April Curtis</div>,
    AGEGENDER: <div className="nowwrap">44/M</div>,
    MOBILENO: <div className="nowwrap">+91 9000545454</div>,
    CONSULTANTDOCTOR: <div className="nowwrap">Allison Kenter</div>,
    BILLSTATUS: <div className="nowwrap">Paid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/patients_pharmaview">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-prescription me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    UHID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">April Curtis</div>,
    AGEGENDER: <div className="nowwrap">44/M</div>,
    MOBILENO: <div className="nowwrap">+91 9000545454</div>,
    CONSULTANTDOCTOR: <div className="nowwrap">Allison Kenter</div>,
    BILLSTATUS: <div className="nowwrap">Paid</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/patients_pharmaview">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-prescription me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
];

export default products1;
