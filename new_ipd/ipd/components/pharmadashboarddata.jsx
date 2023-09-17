import React, { useState } from "react";
import styles from "../styles/Labdashboard.module.scss";

const products1 = [
  {
    SNO: <div className="nowwrap"> 01</div>,
    MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
    STOCK: <div className="nowwrap">231</div>,
    EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 01</div>,
    MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
    STOCK: <div className="nowwrap">231</div>,
    EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 01</div>,
    MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
    STOCK: <div className="nowwrap">231</div>,
    EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 01</div>,
    MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
    STOCK: <div className="nowwrap">231</div>,
    EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 01</div>,
    MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
    STOCK: <div className="nowwrap">231</div>,
    EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 01</div>,
    MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
    STOCK: <div className="nowwrap">231</div>,
    EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 01</div>,
    MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
    STOCK: <div className="nowwrap">231</div>,
    EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 01</div>,
    MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
    STOCK: <div className="nowwrap">231</div>,
    EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 01</div>,
    MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
    STOCK: <div className="nowwrap">231</div>,
    EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 01</div>,
    MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
    STOCK: <div className="nowwrap">231</div>,
    EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 01</div>,
    MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
    STOCK: <div className="nowwrap">231</div>,
    EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 01</div>,
    MEDICINENAME: <div className="nowwrap">Medicine Name(Formula)</div>,
    STOCK: <div className="nowwrap">231</div>,
    EXPIRY: <div className="nowwrap">22-Feb-2023</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-edit me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14  f14"></i>
      </div>
    ),
  },
];

export default products1;
