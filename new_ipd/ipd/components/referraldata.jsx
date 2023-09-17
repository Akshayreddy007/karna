import React, { useState } from "react";
import styles from "../styles/Services.module.scss";

const products1 = [
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">Peter Thomson</div>,
    CONTACTNO: <div className="nowwrap">+91 9014378908</div>,
    TYPE: <div className="nowwrap">Ref Doctor</div>,
    REFERRALS: <div className="nowwrap">5</div>,
    SPECIALISATION: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Cardio
      </div>
    ),
    MARGIN: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Peter Thomson</div>,
    CONTACTNO: <div className="nowwrap">+91 9904565463 </div>,
    TYPE: <div className="nowwrap">Ref Doctor</div>,
    REFERRALS: <div className="nowwrap">4</div>,
    SPECIALISATION: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Cardio
      </div>
    ),
    MARGIN: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Peter Thomson</div>,
    CONTACTNO: <div className="nowwrap">+91 9014378908</div>,
    TYPE: <div className="nowwrap">Ref Doctor</div>,
    REFERRALS: <div className="nowwrap">3</div>,
    SPECIALISATION: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Cardio
      </div>
    ),
    MARGIN: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Peter Thomson</div>,
    CONTACTNO: <div className="nowwrap">+91 9904565463</div>,
    TYPE: <div className="nowwrap">Ref Doctor</div>,
    REFERRALS: <div className="nowwrap">2</div>,
    SPECIALISATION: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Cardio
      </div>
    ),
    MARGIN: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Peter Thomson</div>,
    CONTACTNO: <div className="nowwrap">+91 9014378908</div>,
    TYPE: <div className="nowwrap">Ref Doctor</div>,
    REFERRALS: <div className="nowwrap">5</div>,
    SPECIALISATION: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Cardio
      </div>
    ),
    MARGIN: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Peter Thomson</div>,
    CONTACTNO: <div className="nowwrap">+91 9904565463</div>,
    TYPE: <div className="nowwrap">Ref Doctor</div>,
    REFERRALS: <div className="nowwrap">5</div>,
    SPECIALISATION: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Cardio
      </div>
    ),
    MARGIN: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Peter Thomson</div>,
    CONTACTNO: <div className="nowwrap">+91 9014378908</div>,
    TYPE: <div className="nowwrap">Ref Doctor</div>,
    REFERRALS: <div className="nowwrap">5</div>,
    SPECIALISATION: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Cardio
      </div>
    ),
    MARGIN: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Peter Thomson</div>,
    CONTACTNO: <div className="nowwrap">+91 9014378908</div>,
    TYPE: <div className="nowwrap">Ref Doctor</div>,
    REFERRALS: <div className="nowwrap">5</div>,
    SPECIALISATION: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Cardio
      </div>
    ),
    MARGIN: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Peter Thomson</div>,
    CONTACTNO: <div className="nowwrap">+91 9014378908</div>,
    TYPE: <div className="nowwrap">Ref Doctor</div>,
    REFERRALS: <div className="nowwrap">5</div>,
    SPECIALISATION: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Cardio
      </div>
    ),
    MARGIN: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Peter Thomson</div>,
    CONTACTNO: <div className="nowwrap">+91 9014378908</div>,
    TYPE: <div className="nowwrap">Ref Doctor</div>,
    REFERRALS: <div className="nowwrap">5</div>,
    SPECIALISATION: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Cardio
      </div>
    ),
    MARGIN: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Peter Thomson</div>,
    CONTACTNO: <div className="nowwrap">+91 9014378908</div>,
    TYPE: <div className="nowwrap">Ref Doctor</div>,
    REFERRALS: <div className="nowwrap">5</div>,
    SPECIALISATION: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Cardio
      </div>
    ),
    MARGIN: <div className="nowwrap">5</div>,
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
    NAME: <div className="nowwrap">Peter Thomson</div>,
    CONTACTNO: <div className="nowwrap">+91 9014378908</div>,
    TYPE: <div className="nowwrap">Ref Doctor</div>,
    REFERRALS: <div className="nowwrap">5</div>,
    SPECIALISATION: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Cardio
      </div>
    ),
    MARGIN: <div className="nowwrap">5</div>,
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
