import Link from "next/link";
import React, { useState } from "react";
import styles1 from "../../styles/IPD_Nurse/IpdNurse.module.scss";
// import styles2 from "../../styles/Inventory.module.scss";
import Image from "next/image";
import edit from '../../public/images/edit.svg';
import { Col, Form } from "react-bootstrap";


const Ipd_Vital_Monitortng_Data = [
  {
    SNO:<div className="nowwrap">1</div>,
    DATETIME:<div className="nowwrap px-2">11th Feb, 23 @4:00pm</div>,
    TEMP: <div className="nowwrap">99 F</div>,
    PULSE: <div className="nowwrap">72</div>,
    BP:<div className="nowwrap">120/80</div>,
    SPO2:<div className="nowwrap">100</div>,
    RESP:<div className="nowwrap">24</div>,
    INFORMED:<div className="nowwrap">Dr Corey Jax <br/><p class="txt_light mb-0">Cardiologist</p></div>,
    INTERVENTION:<div className="nowwrap">PSV /50/8/8 <br/><p class="txt_light mb-0">Nr:Jyothi</p></div>,
    ACTION: (
        <div className="nowwrap d-flex">
          <Link href="#" className={styles1.ihoverview}>
            <Image className="me-3" src={edit} alt="view"/>
          </Link>
        </div>
      ),
  },
  {
    SNO:<div className="nowwrap">1</div>,
    DATETIME:<div className="nowwrap px-2">11th Feb, 23 @4:00pm</div>,
    TEMP: <div className="nowwrap">99 F</div>,
    PULSE: <div className="nowwrap">72</div>,
    BP:<div className="nowwrap">120/80</div>,
    SPO2:<div className="nowwrap">100</div>,
    RESP:<div className="nowwrap">24</div>,
    INFORMED:<div className="nowwrap">Dr Corey Jax <br/><p class="txt_light mb-0">Cardiologist</p></div>,
    INTERVENTION:<div className="nowwrap">PSV /50/8/8 <br/><p class="txt_light mb-0">Nr:Jyothi</p></div>,
    ACTION: (
        <div className="nowwrap d-flex">
          <Link href="#" className={styles1.ihoverview}>
            <Image className="me-3" src={edit} alt="view"/>
          </Link>
        </div>
      ),
  },
  
 
  
];

export default Ipd_Vital_Monitortng_Data;
