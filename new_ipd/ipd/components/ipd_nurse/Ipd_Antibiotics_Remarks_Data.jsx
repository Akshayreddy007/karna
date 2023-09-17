import Link from "next/link";
import React, { useState } from "react";
import styles1 from "../../styles/IPD_Nurse/IpdNurse.module.scss";
// import styles2 from "../../styles/Inventory.module.scss";
import Image from "next/image";
import edit from '../../public/images/edit.svg';
import { Col, Form } from "react-bootstrap";
const Ipd_Antibiotics_Remarks_Data = [
  {
    SNO:<div className="nowwrap">1</div>,
    CATEGORY:<div className="nowwrap px-2">7.2</div>,
    NOTES: <div className="nowwrap"><ul>
        <li>Urine cls sentin ER 6/2/23 . e-coli</li>
        <li>2D Echo clone in ER 6/2/23 Blood cls 6/2/23</li>
        </ul>
        <p className="mb-0">Blood cls 6/2/23 M/Cor (No growth) 24hrs (no growth)</p></div>,
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
    CATEGORY:<div className="nowwrap px-2">7.2</div>,
    NOTES: <div className="nowwrap"><ul>
        <li>Urine cls sentin ER 6/2/23 . e-coli</li>
        <li>2D Echo clone in ER 6/2/23 Blood cls 6/2/23</li>
        </ul>
        <p className="mb-0">Blood cls 6/2/23 M/Cor (No growth) 24hrs (no growth)</p></div>,
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
    CATEGORY:<div className="nowwrap px-2">7.2</div>,
    NOTES: <div className="nowwrap"><ul>
        <li>Urine cls sentin ER 6/2/23 . e-coli</li>
        <li>2D Echo clone in ER 6/2/23 Blood cls 6/2/23</li>
        </ul>
        <p className="mb-0">Blood cls 6/2/23 M/Cor (No growth) 24hrs (no growth)</p></div>,
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
    CATEGORY:<div className="nowwrap px-2">7.2</div>,
    NOTES: <div className="nowwrap"><ul>
        <li>Urine cls sentin ER 6/2/23 . e-coli</li>
        <li>2D Echo clone in ER 6/2/23 Blood cls 6/2/23</li>
        </ul>
        <p className="mb-0">Blood cls 6/2/23 M/Cor (No growth) 24hrs (no growth)</p></div>,
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

export default Ipd_Antibiotics_Remarks_Data;
