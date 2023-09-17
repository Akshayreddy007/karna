import React, { useState } from "react";
import styles from "../styles/Services.module.scss";

const products1 = [
    {
        SNO: <div className="nowwrap"> 1</div>,
        SERVICE: <div className="nowwrap">Dressing</div>,
        NOOFTIMES: <div className="nowwrap">10</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                10%
            </div>
        ),

        AMOUNTINRS: <div className="nowwrap">25/-</div>,
    },
    {
        SNO: <div className="nowwrap"> 2</div>,
        SERVICE: <div className="nowwrap"> Consulting</div>,
        NOOFTIMES: <div className="nowwrap">10</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                10%
            </div>
        ),

        AMOUNTINRS: <div className="nowwrap">25/-</div>,
    },
    {
        SNO: <div className="nowwrap"> 3</div>,
        SERVICE: <div className="nowwrap">Surgery</div>,
        NOOFTIMES: <div className="nowwrap">10</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                10%
            </div>
        ),

        AMOUNTINRS: <div className="nowwrap">25/-</div>,
    },
    {
        SNO: <div className="nowwrap"> 4</div>,
        SERVICE: <div className="nowwrap"> Dressing</div>,
        NOOFTIMES: <div className="nowwrap">10</div>,
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
        SERVICE: <div className="nowwrap">Consulting</div>,
        NOOFTIMES: <div className="nowwrap">10</div>,
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
        SERVICE: <div className="nowwrap">Surgery</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        NOOFTIMES: <div className="nowwrap">10</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                5%
            </div>
        ),

        AMOUNTINRS: <div className="nowwrap">25/-</div>,
    },
    {
        SNO: <div className="nowwrap"> 7</div>,
        SERVICE: <div className="nowwrap">Surgery</div>,
        NOOFTIMES: <div className="nowwrap">10</div>,
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
        SERVICE: <div className="nowwrap">Appointment</div>,
        NOOFTIMES: <div className="nowwrap">10</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                5%
            </div>
        ),

        AMOUNTINRS: <div className="nowwrap">25/-</div>,
    },
    {
        SNO: <div className="nowwrap"> 9</div>,
        SERVICE: <div className="nowwrap">Consulting</div>,
        NOOFTIMES: <div className="nowwrap">10</div>,
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
        SERVICE: <div className="nowwrap">Appointment</div>,
        NOOFTIMES: <div className="nowwrap">10</div>,
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
        SERVICE: <div className="nowwrap">Appointment</div>,
        NOOFTIMES: <div className="nowwrap">10</div>,
        NOOFTIMES: <div className="nowwrap">10</div>,
        TOTALBILL: <div className="nowwrap">4000/-</div>,
        DOCTORS1: (
            <div title="kalyan123@gmail.com" className="nowwrap">
                10%
            </div>
        ),

        AMOUNTINRS: <div className="nowwrap">25/-</div>,

    },
    {
        SNO: <div className="nowwrap"> 12</div>,
        SERVICE: <div className="nowwrap">Appointment</div>,
        NOOFTIMES: <div className="nowwrap">10</div>,
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
