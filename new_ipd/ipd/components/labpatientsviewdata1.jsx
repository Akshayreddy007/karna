import React, { useState } from "react";
import styles from "../styles/Labdashboard.module.scss";

const products1 = [
  {
    SNO: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
    TESTDATE: <div className="nowwrap">23 JAN 2023</div>,
    TESTSTATUS: <div className="nowwrap">COMPLETED</div>,
    PAYMENTSTATUS: <div className="nowwrap">Pending</div>,
    BILLAMOUNT: <div className="nowwrap">2500</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file-invoice me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Fasting blood glucose(FBS)</div>,
    TESTDATE: <div className="nowwrap">23 JAN 2023</div>,
    TESTSTATUS: <div className="nowwrap">COMPLETED</div>,
    PAYMENTSTATUS: <div className="nowwrap">Pending</div>,
    BILLAMOUNT: <div className="nowwrap">2500</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file-invoice me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
    TESTDATE: <div className="nowwrap">23 JAN 2023</div>,
    TESTSTATUS: <div className="nowwrap">COMPLETED</div>,
    PAYMENTSTATUS: <div className="nowwrap">Pending</div>,
    BILLAMOUNT: <div className="nowwrap">2500</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file-invoice me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Fasting blood glucose(FBS)</div>,
    TESTDATE: <div className="nowwrap">23 JAN 2023</div>,
    TESTSTATUS: <div className="nowwrap">COMPLETED</div>,
    PAYMENTSTATUS: <div className="nowwrap">Pending</div>,
    BILLAMOUNT: <div className="nowwrap">2500</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file-invoice me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Fasting blood glucose(FBS)</div>,
    TESTDATE: <div className="nowwrap">23 JAN 2023</div>,
    TESTSTATUS: <div className="nowwrap">COMPLETED</div>,
    PAYMENTSTATUS: <div className="nowwrap">Pending</div>,
    BILLAMOUNT: <div className="nowwrap">2500</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file-invoice me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
    TESTDATE: <div className="nowwrap">23 JAN 2023</div>,
    TESTSTATUS: <div className="nowwrap">COMPLETED</div>,
    PAYMENTSTATUS: <div className="nowwrap">Pending</div>,
    BILLAMOUNT: <div className="nowwrap">2500</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file-invoice me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
    TESTDATE: <div className="nowwrap">23 JAN 2023</div>,
    TESTSTATUS: <div className="nowwrap">COMPLETED</div>,
    PAYMENTSTATUS: <div className="nowwrap">Pending</div>,
    BILLAMOUNT: <div className="nowwrap">2500</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file-invoice me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
    TESTDATE: <div className="nowwrap">23 JAN 2023</div>,
    TESTSTATUS: <div className="nowwrap">COMPLETED</div>,
    PAYMENTSTATUS: <div className="nowwrap">Pending</div>,
    BILLAMOUNT: <div className="nowwrap">2500</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file-invoice me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
    TESTDATE: <div className="nowwrap">23 JAN 2023</div>,
    TESTSTATUS: <div className="nowwrap">COMPLETED</div>,
    PAYMENTSTATUS: <div className="nowwrap">Pending</div>,
    BILLAMOUNT: <div className="nowwrap">2500</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file-invoice me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
  {
    SNO: <div className="nowwrap"> 91C001897</div>,
    TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
    TESTDATE: <div className="nowwrap">23 JAN 2023</div>,
    TESTSTATUS: <div className="nowwrap">COMPLETED</div>,
    PAYMENTSTATUS: <div className="nowwrap">Pending</div>,
    BILLAMOUNT: <div className="nowwrap">2500</div>,
    ACTION: (
      <div className="nowwrap d-flex">
        <i className="fal fa-file-invoice me-3  f14"></i>
        <i className="fal fa-trash-alt me-3  f14"></i>
      </div>
    ),
  },
];

export default products1;
