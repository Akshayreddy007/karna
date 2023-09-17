import Link from "next/link";
import React, { useState } from "react";
import styles1 from "../../styles/IPD_Nurse/IpdNurse.module.scss";
// import styles2 from "../../styles/Inventory.module.scss";
import Image from "next/image";
import edit from '../../public/images/edit.svg';
import { Col, Form } from "react-bootstrap";
const Ipd_Antibiotics_Lines_Data = [
  {
    SNO:<div className="nowwrap">1</div>,
    LINES:<div className="nowwrap px-2">FOLEYS</div>,
    INSERTED: <div className="nowwrap">11th Feb, 23 @4:00PM</div>,
    REINSERTED: <div className="nowwrap">-</div>,
    REMOVED: <div className="nowwrap">25th Feb, 23 @6:00PM</div>,
    INFORMED:<div className="nowwrap">Dr Corey Jax <br/><p class="txt_light mb-0">Cardiologist</p></div>,
    NURSE:<div className="nowwrap">Jyothi</div>,
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
    LINES:<div className="nowwrap px-2">FOLEYS</div>,
    INSERTED: <div className="nowwrap">11th Feb, 23 @4:00PM</div>,
    REINSERTED: <div className="nowwrap">-</div>,
    REMOVED: <div className="nowwrap">25th Feb, 23 @6:00PM</div>,
    INFORMED:<div className="nowwrap">Dr Corey Jax <br/><p class="txt_light mb-0">Cardiologist</p></div>,
    NURSE:<div className="nowwrap">Jyothi</div>,
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
    LINES:<div className="nowwrap px-2">FOLEYS</div>,
    INSERTED: <div className="nowwrap">11th Feb, 23 @4:00PM</div>,
    REINSERTED: <div className="nowwrap">-</div>,
    REMOVED: <div className="nowwrap">25th Feb, 23 @6:00PM</div>,
    INFORMED:<div className="nowwrap">Dr Corey Jax <br/><p class="txt_light mb-0">Cardiologist</p></div>,
    NURSE:<div className="nowwrap">Jyothi</div>,
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
    LINES:<div className="nowwrap px-2">FOLEYS</div>,
    INSERTED: <div className="nowwrap">11th Feb, 23 @4:00PM</div>,
    REINSERTED: <div className="nowwrap">-</div>,
    REMOVED: <div className="nowwrap">25th Feb, 23 @6:00PM</div>,
    INFORMED:<div className="nowwrap">Dr Corey Jax <br/><p class="txt_light mb-0">Cardiologist</p></div>,
    NURSE:<div className="nowwrap">Jyothi</div>,
    ACTION: (
        <div className="nowwrap d-flex">
          <Link href="#" className={styles1.ihoverview}>
            <Image className="me-3" src={edit} alt="view"/>
          </Link>
        </div>
      ),
  },
  
];

export default Ipd_Antibiotics_Lines_Data;
