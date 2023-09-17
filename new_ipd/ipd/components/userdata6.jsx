import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Services.module.scss";

const products1 = [
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">OP Consultation</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    GST: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    STATUS: <div className={styles.services_active}> Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/services_view">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">Full Body Check Up</div>,
    TYPE: <div className="nowwrap">Multi Body Package</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">4</div>,
    GST: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    STATUS: <div className={styles.services_active}> Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/services_view">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">OP Consultation</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">3</div>,
    GST: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    STATUS: <div className={styles.services_active}> Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/services_view">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">Full Body Check Up</div>,
    TYPE: <div className="nowwrap">Multi Body Package</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">2</div>,
    GST: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    STATUS: <div className={styles.services_inactive}> In-Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/services_view">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">Package</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    GST: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    STATUS: <div className={styles.services_active}> Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/services_view">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">OP Consultation</div>,
    TYPE: <div className="nowwrap">Package</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    GST: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    STATUS: <div className={styles.services_active}> Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/services_view">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">OP Consultation</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    GST: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    STATUS: <div className={styles.services_active}> Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/services_view">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">OP Consultation</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    GST: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    STATUS: <div className={styles.services_active}> Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/services_view">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">OP Consultation</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    GST: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    STATUS: <div className={styles.services_inactive}> In-Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/services_view">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">OP Consultation</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    GST: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    STATUS: <div className={styles.services_active}> Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/services_view">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">OP Consultation</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    GST: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    STATUS: <div className={styles.services_active}> Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/services_view">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">OP Consultation</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    GST: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    STATUS: <div className={styles.services_active}> Active</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <Link href="/services_view">
          <i className="fal fa-eye me-3  f14"></i>
        </Link>
        <i className="fal fa-edit me-3  f14  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
];

export default products1;
