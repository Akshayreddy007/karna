import Link from "next/link";
import React, { useState } from "react";
import styles1 from "../../styles/IPD_Nurse/IpdNurse.module.scss";
// import styles2 from "../../styles/Inventory.module.scss";
import Image from "next/image";
import edit from '../../public/images/edit.svg';
import { Col, Form } from "react-bootstrap";
const Ipd_Parenteralfluid_Statsdrug_Data = [
  {
    SNO:<div className="nowwrap">1</div>,
    DATETIME:<div className="nowwrap px-2">11th Feb, 23 @4:00pm</div>,
    MEDICATION: <div className="nowwrap">Inj PCM</div>,
    DOSAGE: <div className="nowwrap">100ml</div>,
    ROUTE:<div className="nowwrap">IV</div>,
    INFORMED:<div className="nowwrap">Dr Corey Jax <br/><p class="txt_light mb-0">Cardiologist</p></div>,
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
    MEDICATION: <div className="nowwrap">Inj PCM</div>,
    DOSAGE: <div className="nowwrap">100ml</div>,
    ROUTE:<div className="nowwrap">IV</div>,
    INFORMED:<div className="nowwrap">Dr Corey Jax <br/><p class="txt_light mb-0">Cardiologist</p></div>,
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
    MEDICATION: <div className="nowwrap">Inj PCM</div>,
    DOSAGE: <div className="nowwrap">100ml</div>,
    ROUTE:<div className="nowwrap">IV</div>,
    INFORMED:<div className="nowwrap">Dr Corey Jax <br/><p class="txt_light mb-0">Cardiologist</p></div>,
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
    MEDICATION: <div className="nowwrap">Inj PCM</div>,
    DOSAGE: <div className="nowwrap">100ml</div>,
    ROUTE:<div className="nowwrap">IV</div>,
    INFORMED:<div className="nowwrap">Dr Corey Jax <br/><p class="txt_light mb-0">Cardiologist</p></div>,
    ACTION: (
        <div className="nowwrap d-flex">
          <Link href="#" className={styles1.ihoverview}>
            <Image className="me-3" src={edit} alt="view"/>
          </Link>
        </div>
      ),
  },
  
];

export default Ipd_Parenteralfluid_Statsdrug_Data;
