import React, { useState } from "react";
import styles from "../styles/Services.module.scss";

const products1 = [
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">OP Consultation</div>,
    ROLE: <div className="nowwrap">Appointment</div>,
    DISCOUNTS: <div className="nowwrap">4000/-</div>,
    MOBILENO: <div className="nowwrap">5</div>,
    SHIFTTIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    USERTYPE: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Full Body Check Up</div>,
    ROLE: <div className="nowwrap">Multi Body Package</div>,
    DISCOUNTS: <div className="nowwrap">4000/-</div>,
    MOBILENO: <div className="nowwrap">4</div>,
    SHIFTTIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    USERTYPE: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">OP Consultation</div>,
    ROLE: <div className="nowwrap">Appointment</div>,
    DISCOUNTS: <div className="nowwrap">4000/-</div>,
    MOBILENO: <div className="nowwrap">3</div>,
    SHIFTTIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    USERTYPE: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Full Body Check Up</div>,
    ROLE: <div className="nowwrap">Multi Body Package</div>,
    DISCOUNTS: <div className="nowwrap">4000/-</div>,
    MOBILENO: <div className="nowwrap">2</div>,
    SHIFTTIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    USERTYPE: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Package</div>,
    ROLE: <div className="nowwrap">Appointment</div>,
    DISCOUNTS: <div className="nowwrap">4000/-</div>,
    MOBILENO: <div className="nowwrap">5</div>,
    SHIFTTIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    USERTYPE: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">OP Consultation</div>,
    ROLE: <div className="nowwrap">Package</div>,
    DISCOUNTS: <div className="nowwrap">4000/-</div>,
    MOBILENO: <div className="nowwrap">5</div>,
    SHIFTTIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    USERTYPE: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">OP Consultation</div>,
    ROLE: <div className="nowwrap">Appointment</div>,
    DISCOUNTS: <div className="nowwrap">4000/-</div>,
    MOBILENO: <div className="nowwrap">5</div>,
    SHIFTTIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    USERTYPE: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">OP Consultation</div>,
    ROLE: <div className="nowwrap">Appointment</div>,
    DISCOUNTS: <div className="nowwrap">4000/-</div>,
    MOBILENO: <div className="nowwrap">5</div>,
    SHIFTTIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    USERTYPE: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">OP Consultation</div>,
    ROLE: <div className="nowwrap">Appointment</div>,
    DISCOUNTS: <div className="nowwrap">4000/-</div>,
    MOBILENO: <div className="nowwrap">5</div>,
    SHIFTTIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    USERTYPE: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">OP Consultation</div>,
    ROLE: <div className="nowwrap">Appointment</div>,
    DISCOUNTS: <div className="nowwrap">4000/-</div>,
    MOBILENO: <div className="nowwrap">5</div>,
    SHIFTTIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    USERTYPE: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">OP Consultation</div>,
    ROLE: <div className="nowwrap">Appointment</div>,
    DISCOUNTS: <div className="nowwrap">4000/-</div>,
    MOBILENO: <div className="nowwrap">5</div>,
    SHIFTTIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    USERTYPE: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">OP Consultation</div>,
    ROLE: <div className="nowwrap">Appointment</div>,
    DISCOUNTS: <div className="nowwrap">4000/-</div>,
    MOBILENO: <div className="nowwrap">5</div>,
    SHIFTTIMINGS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    USERTYPE: <div className="nowwrap">5</div>,
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
