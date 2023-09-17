import React, { useState } from "react";
import styles from "../styles/Services.module.scss";

const products1 = [
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    DOCTORNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    DOCTORS1: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    MAXDISCOUNTS: <div className="nowwrap">10%</div>,
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
    DOCTORNAME: <div className="nowwrap">Devon Miles</div>,
    TYPE: <div className="nowwrap"> Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">4</div>,
    DOCTORS1: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    MAXDISCOUNTS: <div className="nowwrap">10%</div>,
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
    DOCTORNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">3</div>,
    DOCTORS1: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    MAXDISCOUNTS: <div className="nowwrap">10%</div>,
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
    DOCTORNAME: <div className="nowwrap">Devon Miles</div>,
    TYPE: <div className="nowwrap"> Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">2</div>,
    DOCTORS1: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    MAXDISCOUNTS: <div className="nowwrap">5%</div>,
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
    DOCTORNAME: <div className="nowwrap">Devon Miles</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    DOCTORS1: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    MAXDISCOUNTS: <div className="nowwrap">10%</div>,
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
    DOCTORNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    DOCTORS1: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    MAXDISCOUNTS: <div className="nowwrap">10%</div>,
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
    DOCTORNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    DOCTORS1: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    MAXDISCOUNTS: <div className="nowwrap">10%</div>,
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
    DOCTORNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    DOCTORS1: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    MAXDISCOUNTS: <div className="nowwrap">10%</div>,
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
    DOCTORNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    DOCTORS1: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        5%
      </div>
    ),
    MAXDISCOUNTS: <div className="nowwrap">5%</div>,
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
    DOCTORNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    DOCTORS1: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    MAXDISCOUNTS: <div className="nowwrap">10%</div>,
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
    DOCTORNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    DOCTORS1: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    MAXDISCOUNTS: <div className="nowwrap">10%</div>,
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
    DOCTORNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
    TYPE: <div className="nowwrap">Appointment</div>,
    PRICE: <div className="nowwrap">4000/-</div>,
    DOCTORS: <div className="nowwrap">5</div>,
    DOCTORS1: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        10%
      </div>
    ),
    MAXDISCOUNTS: <div className="nowwrap">10%</div>,
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
