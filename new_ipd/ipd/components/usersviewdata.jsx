import React, { useState } from "react";
import styles from "../styles/Services.module.scss";

const products1 = [
    {
        SNO: <div className="nowwrap"> 1</div>,
        PATIENTNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
        SERVICETAKEN: <div className="nowwrap">Appointment</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                10%
            </div>
        ),
        PAYMENTSTATUS: <div className="nowwrap">Paid</div>,
        AMOUNTINRS: <div className="nowwrap">25/-</div>,
    },
    {
        SNO: <div className="nowwrap"> 2</div>,
        PATIENTNAME: <div className="nowwrap">Devon Miles</div>,
        SERVICETAKEN: <div className="nowwrap"> Appointment</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                10%
            </div>
        ),
        PAYMENTSTATUS: <div className="nowwrap">Paid</div>,
        AMOUNTINRS: <div className="nowwrap">25/-</div>,
    },
    {
        SNO: <div className="nowwrap"> 3</div>,
        PATIENTNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
        SERVICETAKEN: <div className="nowwrap">Appointment</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                10%
            </div>
        ),
        PAYMENTSTATUS: <div className="nowwrap">Paid</div>,
        AMOUNTINRS: <div className="nowwrap">25/-</div>,
    },
    {
        SNO: <div className="nowwrap"> 4</div>,
        PATIENTNAME: <div className="nowwrap">Devon Miles</div>,
        SERVICETAKEN: <div className="nowwrap"> Appointment</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                5%
            </div>
        ),
        PAYMENTSTATUS: <div className="nowwrap">Pending</div>,
        AMOUNTINRS: <div className="nowwrap">25/-</div>,
    },
    {
        SNO: <div className="nowwrap"> 5</div>,
        PATIENTNAME: <div className="nowwrap">Devon Miles</div>,
        SERVICETAKEN: <div className="nowwrap">Appointment</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                5%
            </div>
        ),
        PAYMENTSTATUS: <div className="nowwrap">Pending</div>,
        AMOUNTINRS: <div className="nowwrap">25/-</div>,
    },
    {
        SNO: <div className="nowwrap"> 6</div>,
        PATIENTNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
        SERVICETAKEN: <div className="nowwrap">Appointment</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                5%
            </div>
        ),
        PAYMENTSTATUS: <div className="nowwrap">Paid</div>,
        AMOUNTINRS: <div className="nowwrap">25/-</div>,
    },
    {
        SNO: <div className="nowwrap"> 7</div>,
        PATIENTNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
        SERVICETAKEN: <div className="nowwrap">Appointment</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                5%
            </div>
        ),
        PAYMENTSTATUS: <div className="nowwrap">Pending</div>,
        AMOUNTINRS: <div className="nowwrap">25/-</div>,
    },
    {
        SNO: <div className="nowwrap"> 8</div>,
        PATIENTNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
        SERVICETAKEN: <div className="nowwrap">Appointment</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                5%
            </div>
        ),
        PAYMENTSTATUS: <div className="nowwrap">Paid</div>,
        AMOUNTINRS: <div className="nowwrap">25/-</div>,
    },
    {
        SNO: <div className="nowwrap"> 9</div>,
        PATIENTNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
        SERVICETAKEN: <div className="nowwrap">Appointment</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                5%
            </div>
        ),
        PAYMENTSTATUS: <div className="nowwrap">pending</div>,
        AMOUNTINRS: <div className="nowwrap">25/-</div>,
    },
    {
        SNO: <div className="nowwrap"> 10</div>,
        PATIENTNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
        SERVICETAKEN: <div className="nowwrap">Appointment</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                10%
            </div>
        ),
        PAYMENTSTATUS: <div className="nowwrap">paid</div>,
        AMOUNTINRS: <div className="nowwrap">25/-</div>,
    },
    {
        SNO: <div className="nowwrap"> 11</div>,
        PATIENTNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
        SERVICETAKEN: <div className="nowwrap">Appointment</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                10%
            </div>
        ),
        PAYMENTSTATUS: <div className="nowwrap">Paid</div>,
        AMOUNTINRS: <div className="nowwrap">25/-</div>,

    },
    {
        SNO: <div className="nowwrap"> 12</div>,
        PATIENTNAME: <div className="nowwrap">Dr Bronnie Brastow</div>,
        SERVICETAKEN: <div className="nowwrap">Appointment</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                10%
            </div>
        ),
        PAYMENTSTATUS: <div className="nowwrap">Pending</div>,
        AMOUNTINRS: <div className="nowwrap">25/-</div>,
    },
];

export default products1;
