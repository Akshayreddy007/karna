import React, { useState } from "react";
import { Card, Button, Modal, Form, Table, Col, Row, NavDropdown, Dropdown,DropdownButton } from "react-bootstrap";
// import Sales_Searchbar from "../Sales_Searchbar";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import styles from "../../styles/IPD_Nurse/IpdNurse.module.scss";
import Image from "next/image";
import arrowdown from '../../public/images/chevron-right.svg'
// import Newsale_modal from "../sales_newpharma/Newsale_modal";
// import Inventory_Searchbar from "../inventory_newpharma/Inventory_Searchbar";
// import inventory_newpharmadata from "../inventory_newpharma/inventory_newpharmadata";
import Link from "next/link";
// import inventory_newpharmaaddrowdata from "../inventory_newpharma/inventory_newpharmaaddrowdata";
// import inventory_newpharmaaddnewstockdata from "../inventory_newpharma/inventory_newpharmaaddnewstockdata";
import Ipd_Searchbar from "./Ipd_Searchbar";
// import { DropdownButton } from "react-bootstrap/esm";
const Dashboard_Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const handleAddClick = () => {
    setIsEditing(false);
    setModalShow(true);
  };

  const products = [
    {
      UHID_IP_ADMISNNO: <div className='nowwrap1 f15'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
      PATIENTNAME_AGE_GENDER: <div className='nowwrap1 f15'><div className="theme14"> Bonnie Barstow</div><div className='theme12'> 68/M</div></div>,
      GUARDIAN_CONTACT_NO: <div className='nowwrap1 f15'><div className="theme14">Tatiana</div><div className='theme12'>9898121233</div></div>,
      BEDLOCATION: <div className='nowwrap1 f15'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
      DOCTOR_DEPARTMENT: <div className='nowwrap1 f15'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
      STATUS: <div className={styles.admitted}>Admitted</div>,
      BALANCE: <div className={styles.admitted}>Rs:23,500</div>,
      ACTION: <div className='nowwrap1 d-flex '>
        <Link href="/ipd_nurse_view"><i className='fal fa-eye me-2 px-2 py-2  f15'></i></Link>
        <i className='fal fa-edit me-2 px-2 py-2  f15'></i>
        <div class="dropdown-container py-1" tabindex="-1">
          <div class="three-dots px-2 py-1"></div>
          <div class="dropdown">
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>View Prescription</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Change Bed</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Upload Consent</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reports</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Schedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reschedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Visitor ID</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Nurse assigned</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Medical Note</div></a>
          </div>
        </div></div>,

    },
    {
      UHID_IP_ADMISNNO: <div className='nowwrap1'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
      PATIENTNAME_AGE_GENDER: <div className='nowwrap1'><div className="theme14"> Thornton</div><div className='theme12'> 68/M</div></div>,
      GUARDIAN_CONTACT_NO: <div className='nowwrap1'><div className="theme14">Nolan</div><div className='theme12'>9898121233</div></div>,
      BEDLOCATION: <div className='nowwrap1'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
      DOCTOR_DEPARTMENT: <div className='nowwrap1'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
      STATUS: <div className={styles.discharged}>Discharged</div>,
      BALANCE: <div className={styles.admitted}>Rs: 0</div>,
      ACTION: <div className='nowwrap1 d-flex '><i className='fal fa-eye me-2 px-2 py-2  f15'></i>
        <i className='fal fa-edit me-2 px-2 py-2  f15'></i>
        <div class="dropdown-container py-1" tabindex="-1">
          <div class="three-dots px-2 py-1"></div>
          <div class="dropdown">
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>View Prescription</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Change Bed</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Upload Consent</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reports</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Schedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reschedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Visitor ID</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Nurse assigned</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Medical Note</div></a>
          </div>
        </div></div>,

    },
    {
      UHID_IP_ADMISNNO: <div className='nowwrap1'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
      PATIENTNAME_AGE_GENDER: <div className='nowwrap1'><div className="theme14">Peter Thornton</div><div className='theme12'> 68/M</div></div>,
      GUARDIAN_CONTACT_NO: <div className='nowwrap1'><div className="theme14">Nolan</div><div className='theme12'>9898121233</div></div>,
      BEDLOCATION: <div className='nowwrap1'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
      DOCTOR_DEPARTMENT: <div className='nowwrap1'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
      STATUS: <div className={styles.admitted}>Admitted</div>,
      BALANCE: <div className={styles.admitted}>Rs: 25,000</div>,
      ACTION: <div className='nowwrap1 d-flex '><i className='fal fa-eye me-2 px-2 py-2  f15'></i>
        <i className='fal fa-edit me-2 px-2 py-2  f15'></i>
        <div class="dropdown-container py-1" tabindex="-1">
          <div class="three-dots px-2 py-1"></div>
          <div class="dropdown">
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>View Prescription</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Change Bed</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Upload Consent</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reports</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Schedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reschedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Visitor ID</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Nurse assigned</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Medical Note</div></a>
          </div>
        </div></div>,

    },
    {
      UHID_IP_ADMISNNO: <div className='nowwrap1'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
      PATIENTNAME_AGE_GENDER: <div className='nowwrap1'><div className="theme14">Peter Thornton</div><div className='theme12'> 68/M</div></div>,
      GUARDIAN_CONTACT_NO: <div className='nowwrap1'><div className="theme14">Payitn</div><div className='theme12'>9898121233</div></div>,
      BEDLOCATION: <div className='nowwrap1'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
      DOCTOR_DEPARTMENT: <div className='nowwrap1'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
      STATUS: <div className={styles.admitted}>Admitted</div>,
      BALANCE: <div className={styles.discharged}>Rs: -23,000</div>,
      ACTION: <div className='nowwrap1 d-flex '><i className='fal fa-eye me-2 px-2 py-2  f15'></i>
        <i className='fal fa-edit me-2 px-2 py-2  f15'></i>
        <div class="dropdown-container py-1" tabindex="-1">
          <div class="three-dots px-2 py-1"></div>
          <div class="dropdown">
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>View Prescription</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Change Bed</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Upload Consent</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reports</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Schedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reschedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Visitor ID</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Nurse assigned</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Medical Note</div></a>
          </div>
        </div></div>,

    },
    {
      UHID_IP_ADMISNNO: <div className='nowwrap1'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
      PATIENTNAME_AGE_GENDER: <div className='nowwrap1'><div className="theme14">Angela</div><div className='theme12'> 68/M</div></div>,
      GUARDIAN_CONTACT_NO: <div className='nowwrap1'><div className="theme14">Zairey</div><div className='theme12'>9898121233</div></div>,
      BEDLOCATION: <div className='nowwrap1'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
      DOCTOR_DEPARTMENT: <div className='nowwrap1'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
      STATUS: <div className={styles.admitted}>Admitted</div>,
      BALANCE: <div className={styles.admitted}>Rs: 23,000</div>,
      ACTION: <div className='nowwrap1 d-flex '><i className='fal fa-eye me-2 px-2 py-2  f15'></i>
        <i className='fal fa-edit me-2 px-2 py-2  f15'></i>
        <div class="dropdown-container py-1" tabindex="-1">
          <div class="three-dots px-2 py-1"></div>
          <div class="dropdown">
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>View Prescription</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Change Bed</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Upload Consent</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reports</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Schedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reschedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Visitor ID</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Nurse assigned</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Medical Note</div></a>
          </div>
        </div></div>,

    },
    {
      UHID_IP_ADMISNNO: <div className='nowwrap1'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
      PATIENTNAME_AGE_GENDER: <div className='nowwrap1'><div className="theme14">Angela</div><div className='theme12'> 68/M</div></div>,
      GUARDIAN_CONTACT_NO: <div className='nowwrap1'><div className="theme14">Coirey</div><div className='theme12'>9898121233</div></div>,
      BEDLOCATION: <div className='nowwrap1'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
      DOCTOR_DEPARTMENT: <div className='nowwrap1'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
      STATUS: <div className={styles.admitted}>Admitted</div>,
      BALANCE: <div className={styles.admitted}>Rs: 23,000</div>,
      ACTION: <div className='nowwrap1 d-flex '><i className='fal fa-eye me-2 px-2 py-2  f15'></i>
        <i className='fal fa-edit me-2 px-2 py-2  f15'></i>
        <div class="dropdown-container py-1" tabindex="-1">
          <div class="three-dots px-2 py-1"></div>
          <div class="dropdown">
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>View Prescription</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Change Bed</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Upload Consent</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reports</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Schedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reschedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Visitor ID</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Nurse assigned</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Medical Note</div></a>
          </div>
        </div></div>,

    },
    {
      UHID_IP_ADMISNNO: <div className='nowwrap1'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
      PATIENTNAME_AGE_GENDER: <div className='nowwrap1'><div className="theme14">Angela Bower</div><div className='theme12'> 68/M</div></div>,
      GUARDIAN_CONTACT_NO: <div className='nowwrap1'><div className="theme14">Corey</div><div className='theme12'>9898121233</div></div>,
      BEDLOCATION: <div className='nowwrap1'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
      DOCTOR_DEPARTMENT: <div className='nowwrap1'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
      STATUS: <div className={styles.scheduled}>Scheduled</div>,
      BALANCE: <div className={styles.admitted}>Rs: 500</div>,
      ACTION: <div className='nowwrap1 d-flex '><i className='fal fa-eye me-2 px-2 py-2  f15'></i>
        <i className='fal fa-edit me-2 px-2 py-2  f15'></i>
        <div class="dropdown-container py-1" tabindex="-1">
          <div class="three-dots px-2 py-1"></div>
          <div class="dropdown">
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>View Prescription</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Change Bed</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Upload Consent</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reports</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Schedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reschedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Visitor ID</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Nurse assigned</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Medical Note</div></a>
          </div>
        </div></div>,

    },
    {
      UHID_IP_ADMISNNO: <div className='nowwrap1'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
      PATIENTNAME_AGE_GENDER: <div className='nowwrap1'><div className="theme14">Capt. Trunk</div><div className='theme12'> 68/M</div></div>,
      GUARDIAN_CONTACT_NO: <div className='nowwrap1'><div className="theme14">Joselin</div><div className='theme12'>9898121233</div></div>,
      BEDLOCATION: <div className='nowwrap1'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
      DOCTOR_DEPARTMENT: <div className='nowwrap1'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
      STATUS: <div className={styles.admitted}>Admitted</div>,
      BALANCE: <div className={styles.admitted}>Rs: 23,500</div>,
      ACTION: <div className='nowwrap1 d-flex '><i className='fal fa-eye me-2 px-2 py-2  f15'></i>
        <i className='fal fa-edit me-2 px-2 py-2  f15'></i>
        <div class="dropdown-container py-1" tabindex="-1">
          <div class="three-dots px-2 py-1"></div>
          <div class="dropdown">
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>View Prescription</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Change Bed</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Upload Consent</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reports</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Schedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reschedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Visitor ID</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Nurse assigned</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Medical Note</div></a>
          </div>
        </div></div>,

    },
    {
      UHID_IP_ADMISNNO: <div className='nowwrap1'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
      PATIENTNAME_AGE_GENDER: <div className='nowwrap1'><div className="theme14">Col. Roderick </div><div className='theme12'> 68/M</div></div>,
      GUARDIAN_CONTACT_NO: <div className='nowwrap1'><div className="theme14">Jaxson</div><div className='theme12'>9898121233</div></div>,
      BEDLOCATION: <div className='nowwrap1'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
      DOCTOR_DEPARTMENT: <div className='nowwrap1'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
      STATUS: <div className={styles.admitted}>Admitted</div>,
      BALANCE: <div className={styles.admitted}>Rs: 23,500</div>,
      ACTION: <div className='nowwrap1 d-flex '><i className='fal fa-eye me-2 px-2 py-2  f15'></i>
        <i className='fal fa-edit me-2 px-2 py-2  f15'></i>
        <div class="dropdown-container py-1" tabindex="-1">
          <div class="three-dots px-2 py-1"></div>
          <div class="dropdown">
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>View Prescription</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Change Bed</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Upload Consent</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reports</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Schedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reschedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Visitor ID</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Nurse assigned</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Medical Note</div></a>
          </div>
        </div></div>,

    },
    {
      UHID_IP_ADMISNNO: <div className='nowwrap1'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
      PATIENTNAME_AGE_GENDER: <div className='nowwrap1'><div className="theme14">Col. Roderick </div><div className='theme12'> 68/M</div></div>,
      GUARDIAN_CONTACT_NO: <div className='nowwrap1'><div className="theme14">Jaxson</div><div className='theme12'>9898121233</div></div>,
      BEDLOCATION: <div className='nowwrap1'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
      DOCTOR_DEPARTMENT: <div className='nowwrap1'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
      STATUS: <div className={styles.admitted}>Admitted</div>,
      BALANCE: <div className={styles.admitted}>Rs: 23,500</div>,
      ACTION: <div className='nowwrap1 d-flex '><i className='fal fa-eye me-2 px-2 py-2  f15'></i>
        <i className='fal fa-edit me-2 px-2 py-2  f15'></i>
        <div class="dropdown-container py-1" tabindex="-1">
          <div class="three-dots px-2 py-1"></div>
          <div class="dropdown">
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>View Prescription</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Change Bed</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Upload Consent</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reports</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Schedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reschedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Visitor ID</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Nurse assigned</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Medical Note</div></a>
          </div>
        </div></div>,

    },
    {
      UHID_IP_ADMISNNO: <div className='nowwrap1'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
      PATIENTNAME_AGE_GENDER: <div className='nowwrap1'><div className="theme14">Peter. Roderick </div><div className='theme12'> 68/M</div></div>,
      GUARDIAN_CONTACT_NO: <div className='nowwrap1'><div className="theme14">Payitn</div><div className='theme12'>9898121233</div></div>,
      BEDLOCATION: <div className='nowwrap1'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
      DOCTOR_DEPARTMENT: <div className='nowwrap1'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
      STATUS: <div className={styles.admitted}>Admitted</div>,
      BALANCE: <div className={styles.admitted}>Rs: 23,500</div>,
      ACTION: <div className='nowwrap1 d-flex '><i className='fal fa-eye me-2 px-2 py-2  f15'></i>
        <i className='fal fa-edit me-2 px-2 py-2  f15'></i>
        <div class="dropdown-container py-1" tabindex="-1">
          <div class="three-dots px-2 py-1"></div>
          <div class="dropdown">
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>View Prescription</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Change Bed</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Upload Consent</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reports</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Schedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reschedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Visitor ID</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Nurse assigned</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Medical Note</div></a>
          </div>
        </div></div>,

    },
    {
      UHID_IP_ADMISNNO: <div className='nowwrap1'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
      PATIENTNAME_AGE_GENDER: <div className='nowwrap1'><div className="theme14">Col. Roderick </div><div className='theme12'> 68/M</div></div>,
      GUARDIAN_CONTACT_NO: <div className='nowwrap1'><div className="theme14">Jaxson</div><div className='theme12'>9898121233</div></div>,
      BEDLOCATION: <div className='nowwrap1'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
      DOCTOR_DEPARTMENT: <div className='nowwrap1'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
      STATUS: <div className={styles.admitted}>Admitted</div>,
      BALANCE: <div className={styles.admitted}>Rs: 23,500</div>,
      ACTION: <div className='nowwrap1 d-flex '><i className='fal fa-eye me-2 px-2 py-2  f15'></i>
        <i className='fal fa-edit me-2 px-2 py-2  f15'></i>
        <div class="dropdown-container py-1 py-1" tabindex="-1">
          <div class="three-dots px-2 py-1"></div>
          <div class="dropdown">
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>View Prescription</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Change Bed</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Upload Consent</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reports</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Schedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Reschedule consultation</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Visitor ID</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Nurse assigned</div></a>
            <a href="#" className='clr21'><div className='pt-2 pb-2 ps-3'>Medical Note</div></a>
          </div>
        </div></div>,

    },

  ];
  const columns = [
    {
      dataField: "UHID_IP_ADMISNNO",
      text: (
        <div className='f13'>
          UHID /<br /> IP ADMISN NO
        </div>
      ),
    },
    {
      dataField: "PATIENTNAME_AGE_GENDER",
      text: (
        <div className='f13'>
          PATIENT NAME/<br /> AGE/GENDER
        </div>
      ),
    },
    {
      dataField: "GUARDIAN_CONTACT_NO",
      text: (
        <div className='f13'>
          GUARDIAN /<br />CONTACT NO
        </div>
      ),
    },
    {
      dataField: "BEDLOCATION",
      text: (<div className='f13'> BED LOCATION  </div>),

    },
    {
      dataField: "DOCTOR_DEPARTMENT",
      text: (
        <div className='f13'>
          DOCTOR /<br />DEPARTMENT
        </div>
      ),
    },

    {
      dataField: "STATUS",
      text: (<div className='f13'>STATUS </div>),
    },
    {
      dataField: "BALANCE",
      text: (<div className='f13'>BALANCE </div>),
    },

    {
      dataField: "ACTION",
      text: (<div className='f13'>ACTION</div>)
    },
  ];

  return (
    <React.Fragment>
      <div className="d-lg-flex d-md-grid d-grid">
        <Col md={12}>
          <div className="bg-white mt-3 mb-3 py-3">
            <Ipd_Searchbar />
            {/* <Inventory_Searchbar /> */}
          </div>
        </Col>
        {/* <Col md={2} className={`${styles1.cus_column_2} justify-content-end mb-2`}>
          <div className="mt-4 mt-md-4 pt-2 text-end ms-3 ddown">
          <NavDropdown id="cus-dropdown" className={`${styles1.cusdropdown}`} align='start' alignBottom title={
              <span className='align-items-center'>
                 <span className='text-white' style={{marginTop:''}}>Add Stock</span>
              </span>
          }>
             <NavDropdown.Item><Link  className="" href="#" onClick={() => setShow(true)}><span style={{cursor: "pointer"}}>Add Stock</span></Link></NavDropdown.Item>
             <NavDropdown.Item><Link  className="" href="/Inventory/new_stock"><span style={{cursor: "pointer"}}>Add New Stock</span></Link></NavDropdown.Item>
          </NavDropdown>
          
          </div>
        </Col> */}
      </div>

      <Card className="border-0 br_none">
        <Card.Body className="p-0" id="inventory">
        <Card.Body className="pt-1 px-0">
              <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} bordered={false} pagination={paginationFactory()} />
            </Card.Body>
        </Card.Body>
      </Card>

      
    </React.Fragment>
  );
};

export default Dashboard_Home;
