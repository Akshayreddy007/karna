import React, { useState } from "react";
import styles from "../styles/Services.module.scss";

const products1 = [
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    PATIENTNAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    SERVICETAKEN: <div className="nowwrap">Appointment</div>,
    TOTALBILL: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
    PAYMENTSTATUS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Pending
      </div>
    ),
    AMOUNTINRS: <div className="nowwrap">5</div>,
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    PATIENTNAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    SERVICETAKEN: <div className="nowwrap">Appointment </div>,
    TOTALBILL: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">4</div>,
    PAYMENTSTATUS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Pending
      </div>
    ),
    AMOUNTINRS: <div className="nowwrap">5</div>,
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    PATIENTNAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    SERVICETAKEN: <div className="nowwrap">Appointment</div>,
    TOTALBILL: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">3</div>,
    PAYMENTSTATUS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Pending
      </div>
    ),
    AMOUNTINRS: <div className="nowwrap">5</div>,
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    PATIENTNAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    SERVICETAKEN: <div className="nowwrap">Appointment</div>,
    TOTALBILL: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">2</div>,
    PAYMENTSTATUS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Pending
      </div>
    ),
    AMOUNTINRS: <div className="nowwrap">5</div>,
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    PATIENTNAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    SERVICETAKEN: <div className="nowwrap">Appointment</div>,
    TOTALBILL: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
    PAYMENTSTATUS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Pending
      </div>
    ),
    AMOUNTINRS: <div className="nowwrap">5</div>,
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    PATIENTNAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    SERVICETAKEN: <div className="nowwrap">Appointment</div>,
    TOTALBILL: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
    PAYMENTSTATUS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Pending
      </div>
    ),
    AMOUNTINRS: <div className="nowwrap">5</div>,
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    PATIENTNAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    SERVICETAKEN: <div className="nowwrap">Appointment</div>,
    TOTALBILL: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
    PAYMENTSTATUS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Pending
      </div>
    ),
    AMOUNTINRS: <div className="nowwrap">5</div>,
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    PATIENTNAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    SERVICETAKEN: <div className="nowwrap">Appointment</div>,
    TOTALBILL: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
    PAYMENTSTATUS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Pending
      </div>
    ),
    AMOUNTINRS: <div className="nowwrap">5</div>,
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    PATIENTNAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    SERVICETAKEN: <div className="nowwrap">Appointment</div>,
    TOTALBILL: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
    PAYMENTSTATUS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Pending
      </div>
    ),
    AMOUNTINRS: <div className="nowwrap">5</div>,
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    PATIENTNAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    SERVICETAKEN: <div className="nowwrap">Appointment</div>,
    TOTALBILL: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
    PAYMENTSTATUS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Pending
      </div>
    ),
    AMOUNTINRS: <div className="nowwrap">5</div>,
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    PATIENTNAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    SERVICETAKEN: <div className="nowwrap">Appointment</div>,
    TOTALBILL: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
    PAYMENTSTATUS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Pending
      </div>
    ),
    AMOUNTINRS: <div className="nowwrap">5</div>,
  },
  {
    ID: <div className="nowwrap"> 91C001897</div>,
    PATIENTNAME: <div className="nowwrap">Dr. Bonnie Barstow </div>,
    SERVICETAKEN: <div className="nowwrap">Appointment</div>,
    TOTALBILL: <div className="nowwrap">500/-</div>,
    DOCTORS1: <div className="nowwrap">5</div>,
    PAYMENTSTATUS: (
      <div title="kalyan123@gmail.com" className="nowwrap">
        Pending
      </div>
    ),
    AMOUNTINRS: <div className="nowwrap">5</div>,
  },
];

export default products1;
