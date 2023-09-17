import React, { useState } from "react";
import styles from "../styles/Services.module.scss";

const walletdata = [
    {
        DATETIME: <div className="nowwrap">23/03/2023 - 12:34 pm</div>,
        SERVICE: <div className="nowwrap">Consultation</div>,
        CREATEDBY: <div className="nowwrap">Ravi</div>,
        AMOUNT: <div className="nowwrap"><i className="fal fa-rupee-sign"></i> 4000/-</div>,
        BALANCE: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                <i className="fal fa-rupee-sign"></i> 5000
            </div>
        ),


    },
    {
        DATETIME: <div className="nowwrap"> 26/05/2023 - 12:34 pm</div>,
        SERVICE: <div className="nowwrap"> Consulting</div>,
        CREATEDBY: <div className="nowwrap">Adi</div>,
        AMOUNT: <div className="nowwrap"><i className="fal fa-rupee-sign"></i> 4000/-</div>,
        BALANCE: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                <i className="fal fa-rupee-sign"></i> 20000
            </div>
        ),


    },
    {
        DATETIME: <div className="nowwrap">25/06/2023 - 12:34 pm</div>,
        SERVICE: <div className="nowwrap">Surgery</div>,
        CREATEDBY: <div className="nowwrap">10</div>,
        AMOUNT: <div className="nowwrap"> <i className="fal fa-rupee-sign"></i> 4000/-</div>,
        BALANCE: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                <i className="fal fa-rupee-sign"></i> 5000
            </div>
        ),


    },

];

export default walletdata;
