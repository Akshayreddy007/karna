import React, { useState } from "react";
import styles from "../styles/Services.module.scss";

const products1 = [
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    NAME: <div className="nowwrap">Appointment Confirmation</div>,
    CATEGORY: <div className="nowwrap">Transactional</div>,
    TEMPLATEID: <div className="nowwrap">0000ASDF</div>,
    MESSAGE: <div className="nowwrap">There are man of passage...</div>,
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
    NAME: <div className="nowwrap">Birthday Wishes</div>,
    CATEGORY: <div className="nowwrap">Greeting</div>,
    TEMPLATEID: <div className="nowwrap">0000ASDF</div>,
    MESSAGE: <div className="nowwrap">There are man of passage..</div>,
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
    NAME: <div className="nowwrap">Appointment Confirmation</div>,
    CATEGORY: <div className="nowwrap">Transactional</div>,
    TEMPLATEID: <div className="nowwrap">0000ASDF</div>,
    MESSAGE: <div className="nowwrap">There are man of passage..</div>,
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
    NAME: <div className="nowwrap">Birthday Wishes</div>,
    CATEGORY: <div className="nowwrap">Greeting</div>,
    TEMPLATEID: <div className="nowwrap">0000ASDF</div>,
    MESSAGE: <div className="nowwrap">There are man of passage..</div>,
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
    NAME: <div className="nowwrap">Greeting</div>,
    CATEGORY: <div className="nowwrap">Transactional</div>,
    TEMPLATEID: <div className="nowwrap">0000ASDF</div>,
    MESSAGE: <div className="nowwrap">There are man of passage...</div>,
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
    NAME: <div className="nowwrap">Appointment Confirmation</div>,
    CATEGORY: <div className="nowwrap">Greeting</div>,
    TEMPLATEID: <div className="nowwrap">0000ASDF</div>,
    MESSAGE: <div className="nowwrap">There are man of passage...</div>,
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
    NAME: <div className="nowwrap">Appointment Confirmation</div>,
    CATEGORY: <div className="nowwrap">Transactional</div>,
    TEMPLATEID: <div className="nowwrap">0000ASDF</div>,
    MESSAGE: <div className="nowwrap">There are man of passage...</div>,
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
    NAME: <div className="nowwrap">Appointment Confirmation</div>,
    CATEGORY: <div className="nowwrap">Transactional</div>,
    TEMPLATEID: <div className="nowwrap">0000ASDF</div>,
    MESSAGE: <div className="nowwrap">There are man of passage...</div>,
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
    NAME: <div className="nowwrap">Appointment Confirmation</div>,
    CATEGORY: <div className="nowwrap">Transactional</div>,
    TEMPLATEID: <div className="nowwrap">0000ASDF</div>,
    MESSAGE: <div className="nowwrap">There are man of passage...</div>,
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
    NAME: <div className="nowwrap">Appointment Confirmation</div>,
    CATEGORY: <div className="nowwrap">Transactional</div>,
    TEMPLATEID: <div className="nowwrap">0000ASDF</div>,
    MESSAGE: <div className="nowwrap">There are man of passage...</div>,
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
    NAME: <div className="nowwrap">Appointment Confirmation</div>,
    CATEGORY: <div className="nowwrap">Transactional</div>,
    TEMPLATEID: <div className="nowwrap">0000ASDF</div>,
    MESSAGE: <div className="nowwrap">There are man of passage...</div>,
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
    NAME: <div className="nowwrap">Appointment Confirmation</div>,
    CATEGORY: <div className="nowwrap">Transactional</div>,
    TEMPLATEID: <div className="nowwrap">0000ASDF</div>,
    MESSAGE: <div className="nowwrap">There are man of passage...</div>,
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
