import Link from "next/link";
import React, { useState } from "react";
import styles1 from "../../styles/IPD_Nurse/IpdNurse.module.scss";
// import styles2 from "../../styles/Inventory.module.scss";
import Image from "next/image";
import edit from '../../public/images/edit.svg';
import { Col, Form } from "react-bootstrap";

export const allDrugsTable = (data) => {
  let getipdrugData = []
  if (data && data.getipdrugs) {
    getipdrugData = data.getipdrugs || [];
  }
  const Ipd_Antibiotics_Drugs_Data = getipdrugData?.map((drug, index) => {
    // const timestamp = parseInt(drug.timestamps) * 1000;
    // const dateTime = new Date(timestamp);
    // const formattedDate = `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
    if (!drug || typeof drug.nurse !== 'number') {
      return null; // Skip invalid data
    }
    return {
      SNO: <div className="nowwrap">{index + 1}</div>,
      DATETIME: <div className="nowwrap px-2">{drug.timestamps}</div>,
      MEDICATION: <div className="nowwrap">{drug.medicinename}</div>,
      STATUS: <div className="nowwrap">{drug.status == 1 ? "Completed" : "Started"}</div>,
      INFORMED: <div className="nowwrap">
        {drug.informed.map((name) => (
          <span>
            {name.doctor_username}
            {name.department ? `, ${name.department == 1 ? "MBBS":name.department ==2 ?"Cardiologiest":"Multispecilist"}` : ''}
          </span>
        ))}
      </div>,
      USERNAME: <div className="nowwrap">{drug.username}</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <Link href="#" className={styles1.ihoverview}>
            <Image className="me-3" src={edit} alt="view" />
          </Link>
        </div>
      ),
    }
  });

  return Ipd_Antibiotics_Drugs_Data || [];
}



