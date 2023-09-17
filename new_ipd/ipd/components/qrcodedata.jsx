import React, { useState } from "react";
import styles from "../styles/Services.module.scss";

const products1 = [
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    RECEPTIONIST: <div className="nowwrap">Appointment</div>,
    MOBILENO: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    RECEPTIONIST: <div className="nowwrap">Appointment </div>,
    MOBILENO: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">4</div>,
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
    NAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    RECEPTIONIST: <div className="nowwrap">Appointment</div>,
    MOBILENO: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">3</div>,
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
    NAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    RECEPTIONIST: <div className="nowwrap">Appointment</div>,
    MOBILENO: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">2</div>,
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
    NAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    RECEPTIONIST: <div className="nowwrap">Appointment</div>,
    MOBILENO: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    RECEPTIONIST: <div className="nowwrap">Appointment</div>,
    MOBILENO: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    RECEPTIONIST: <div className="nowwrap">Appointment</div>,
    MOBILENO: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    RECEPTIONIST: <div className="nowwrap">Appointment</div>,
    MOBILENO: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    RECEPTIONIST: <div className="nowwrap">Appointment</div>,
    MOBILENO: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    RECEPTIONIST: <div className="nowwrap">Appointment</div>,
    MOBILENO: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    RECEPTIONIST: <div className="nowwrap">Appointment</div>,
    MOBILENO: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    RECEPTIONIST: <div className="nowwrap">Appointment</div>,
    MOBILENO: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
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
