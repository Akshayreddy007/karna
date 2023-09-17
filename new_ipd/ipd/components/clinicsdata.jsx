import React, { useState } from "react";
import styles from "../styles/Services.module.scss";

const products1 = [
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    BRANCHNAME: <div className="nowwrap">Himayatnagar</div>,

    SERVICES: <div className="nowwrap">25</div>,
    CONTACTNO: <div className="nowwrap">+91 903322123</div>,
    TIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        24X7
      </div>
    ),
    BRANCHTYPE: <div className="nowwrap">Main Branch</div>,
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
    ID: <div className="nowwrap"> 91C001897</div>,
    BRANCHNAME: <div className="nowwrap">Secunderabad</div>,
    SERVICES: <div className="nowwrap">25</div>,
    CONTACTNO: <div className="nowwrap">+91 903322123</div>,
    TIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        24X7
      </div>
    ),
    BRANCHTYPE: <div className="nowwrap">Main Branch</div>,
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
    ID: <div className="nowwrap"> 91C001897</div>,
    BRANCHNAME: <div className="nowwrap">Himayatnagar</div>,

    SERVICES: <div className="nowwrap">25</div>,
    CONTACTNO: <div className="nowwrap">+91 903322123</div>,
    TIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        24X7
      </div>
    ),
    BRANCHTYPE: <div className="nowwrap">Main Branch</div>,
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
    ID: <div className="nowwrap"> 91C001897</div>,
    BRANCHNAME: <div className="nowwrap">Secunderabad</div>,
    SERVICES: <div className="nowwrap">25</div>,
    CONTACTNO: <div className="nowwrap">+91 903322123</div>,
    TIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        7AM to 11PM
      </div>
    ),
    BRANCHTYPE: <div className="nowwrap">Main Branch</div>,
    STATUS: <div className={styles.services_inactive}> In-Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-eye me-3  f14"></i>
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    BRANCHNAME: <div className="nowwrap">Secunderabad</div>,

    SERVICES: <div className="nowwrap">25</div>,
    CONTACTNO: <div className="nowwrap">+91 903322123</div>,
    TIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        7AM to 11PM
      </div>
    ),
    BRANCHTYPE: <div className="nowwrap">Main Branch</div>,
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
    ID: <div className="nowwrap"> 91C001897</div>,
    BRANCHNAME: <div className="nowwrap">Himayatnagar</div>,

    SERVICES: <div className="nowwrap">25</div>,
    CONTACTNO: <div className="nowwrap">+91 903322123</div>,
    TIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        7AM to 11PM
      </div>
    ),
    BRANCHTYPE: <div className="nowwrap">Main Branch</div>,
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
    ID: <div className="nowwrap"> 91C001897</div>,
    BRANCHNAME: <div className="nowwrap">Himayatnagar</div>,

    SERVICES: <div className="nowwrap">25</div>,
    CONTACTNO: <div className="nowwrap">+91 903322123</div>,
    TIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        7AM to 11PM
      </div>
    ),
    BRANCHTYPE: <div className="nowwrap">Main Branch</div>,
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
    ID: <div className="nowwrap"> 91C001897</div>,
    BRANCHNAME: <div className="nowwrap">Himayatnagar</div>,

    SERVICES: <div className="nowwrap">25</div>,
    CONTACTNO: <div className="nowwrap">+91 903322123</div>,
    TIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        7AM to 11PM
      </div>
    ),
    BRANCHTYPE: <div className="nowwrap">Main Branch</div>,
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
    ID: <div className="nowwrap"> 91C001897</div>,
    BRANCHNAME: <div className="nowwrap">Himayatnagar</div>,

    SERVICES: <div className="nowwrap">25</div>,
    CONTACTNO: <div className="nowwrap">+91 903322123</div>,
    TIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        7AM to 11PM
      </div>
    ),
    BRANCHTYPE: <div className="nowwrap">Main Branch</div>,
    STATUS: <div className={styles.services_inactive}> In-Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-eye me-3  f14"></i>
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    BRANCHNAME: <div className="nowwrap">Himayatnagar</div>,

    SERVICES: <div className="nowwrap">25</div>,
    CONTACTNO: <div className="nowwrap">+91 903322123</div>,
    TIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        24X7
      </div>
    ),
    BRANCHTYPE: <div className="nowwrap">Main Branch</div>,
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
    ID: <div className="nowwrap"> 91C001897</div>,
    BRANCHNAME: <div className="nowwrap">Himayatnagar</div>,

    SERVICES: <div className="nowwrap">25</div>,
    CONTACTNO: <div className="nowwrap">+91 903322123</div>,
    TIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        24X7
      </div>
    ),
    BRANCHTYPE: <div className="nowwrap">Main Branch</div>,
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
    ID: <div className="nowwrap"> 91C001897</div>,
    BRANCHNAME: <div className="nowwrap">Himayatnagar</div>,

    SERVICES: <div className="nowwrap">25</div>,
    CONTACTNO: <div className="nowwrap">+91 903322123</div>,
    TIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        24X7
      </div>
    ),
    BRANCHTYPE: <div className="nowwrap">Main Branch</div>,
    STATUS: <div className={styles.services_active}> Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-eye me-3  f14"></i>
        <i className="fal fa-edit me-3  f14  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
];

export default products1;
