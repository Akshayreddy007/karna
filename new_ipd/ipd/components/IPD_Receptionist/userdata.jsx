import React, { useState } from 'react'
import styles from '../../styles/IPD_Receptionist/Appointments.module.scss';
const products = [
  {
    UHID_IP_ADMISNNO: <div className='nowwrap'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
    PATIENTNAME_AGE_GENDER: <div className='nowwrap'><div className="theme14"> Bonnie Barstow</div><div className='theme12'> 68/M</div></div>,
    GUARDIAN_CONTACT_NO: <div className='nowwrap'><div className="theme14">Tatiana</div><div className='theme12'>9898121233</div></div>,
    BEDLOCATION: <div className='nowwrap'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
    DOCTOR_DEPARTMENT: <div className='nowwrap'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
    STATUS: <div className={styles.admitted}>Admitted</div>,
    BALANCE: <div className={styles.admitted}>Rs:23,500</div>,
    ACTION: <div className='nowwrap d-flex '><i className='fal fa-eye me-3  f14'></i>
      <i className='fal fa-edit me-3  f14'></i>
      <div class="dropdown-container" tabindex="-1">
        <div class="three-dots"></div>
        <div class="dropdown">
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Wallet</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Change Bed</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Discharge Summary</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Consent</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Check in</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Cancel Appointment</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Schedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Assign Doctor</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Reschedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Visitor ID</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Final Billing</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Add Service / Bill</div></a>
        </div>
      </div></div>,

  },
  {
    UHID_IP_ADMISNNO: <div className='nowwrap'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
    PATIENTNAME_AGE_GENDER: <div className='nowwrap'><div className="theme14"> Thornton</div><div className='theme12'> 68/M</div></div>,
    GUARDIAN_CONTACT_NO: <div className='nowwrap'><div className="theme14">Nolan</div><div className='theme12'>9898121233</div></div>,
    BEDLOCATION: <div className='nowwrap'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
    DOCTOR_DEPARTMENT: <div className='nowwrap'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
    STATUS: <div className={styles.discharged}>Discharged</div>,
    BALANCE: <div className={styles.admitted}>Rs: 0</div>,
    ACTION: <div className='nowwrap d-flex '><i className='fal fa-eye me-3  f14'></i>
      <i className='fal fa-edit me-3  f14'></i>
      <div class="dropdown-container" tabindex="-1">
        <div class="three-dots"></div>
        <div class="dropdown">
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Wallet</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Change Bed</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Discharge Summary</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Consent</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Check in</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Cancel Appointment</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Schedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Assign Doctor</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Reschedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Visitor ID</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Final Billing</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Add Service / Bill</div></a>
        </div>
      </div></div>,

  },
  {
    UHID_IP_ADMISNNO: <div className='nowwrap'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
    PATIENTNAME_AGE_GENDER: <div className='nowwrap'><div className="theme14">Peter Thornton</div><div className='theme12'> 68/M</div></div>,
    GUARDIAN_CONTACT_NO: <div className='nowwrap'><div className="theme14">Nolan</div><div className='theme12'>9898121233</div></div>,
    BEDLOCATION: <div className='nowwrap'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
    DOCTOR_DEPARTMENT: <div className='nowwrap'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
    STATUS: <div className={styles.admitted}>Admitted</div>,
    BALANCE: <div className={styles.admitted}>Rs: 25,000</div>,
    ACTION: <div className='nowwrap d-flex '><i className='fal fa-eye me-3  f14'></i>
      <i className='fal fa-edit me-3  f14'></i>
      <div class="dropdown-container" tabindex="-1">
        <div class="three-dots"></div>
        <div class="dropdown">
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Wallet</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Change Bed</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Discharge Summary</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Consent</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Check in</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Cancel Appointment</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Schedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Assign Doctor</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Reschedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Visitor ID</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Final Billing</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Add Service / Bill</div></a>
        </div>
      </div></div>,

  },
  {
    UHID_IP_ADMISNNO: <div className='nowwrap'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
    PATIENTNAME_AGE_GENDER: <div className='nowwrap'><div className="theme14">Peter Thornton</div><div className='theme12'> 68/M</div></div>,
    GUARDIAN_CONTACT_NO: <div className='nowwrap'><div className="theme14">Payitn</div><div className='theme12'>9898121233</div></div>,
    BEDLOCATION: <div className='nowwrap'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
    DOCTOR_DEPARTMENT: <div className='nowwrap'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
    STATUS: <div className={styles.admitted}>Admitted</div>,
    BALANCE: <div className={styles.discharged}>Rs: -23,000</div>,
    ACTION: <div className='nowwrap d-flex '><i className='fal fa-eye me-3  f14'></i>
      <i className='fal fa-edit me-3  f14'></i>
      <div class="dropdown-container" tabindex="-1">
        <div class="three-dots"></div>
        <div class="dropdown">
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Wallet</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Change Bed</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Discharge Summary</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Consent</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Check in</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Cancel Appointment</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Schedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Assign Doctor</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Reschedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Visitor ID</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Final Billing</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Add Service / Bill</div></a>
        </div>
      </div></div>,

  },
  {
    UHID_IP_ADMISNNO: <div className='nowwrap'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
    PATIENTNAME_AGE_GENDER: <div className='nowwrap'><div className="theme14">Angela</div><div className='theme12'> 68/M</div></div>,
    GUARDIAN_CONTACT_NO: <div className='nowwrap'><div className="theme14">Zairey</div><div className='theme12'>9898121233</div></div>,
    BEDLOCATION: <div className='nowwrap'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
    DOCTOR_DEPARTMENT: <div className='nowwrap'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
    STATUS: <div className={styles.admitted}>Admitted</div>,
    BALANCE: <div className={styles.admitted}>Rs: 23,000</div>,
    ACTION: <div className='nowwrap d-flex '><i className='fal fa-eye me-3  f14'></i>
      <i className='fal fa-edit me-3  f14'></i>
      <div class="dropdown-container" tabindex="-1">
        <div class="three-dots"></div>
        <div class="dropdown">
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Wallet</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Change Bed</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Discharge Summary</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Consent</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Check in</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Cancel Appointment</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Schedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Assign Doctor</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Reschedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Visitor ID</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Final Billing</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Add Service / Bill</div></a>
        </div>
      </div></div>,

  },
  {
    UHID_IP_ADMISNNO: <div className='nowwrap'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
    PATIENTNAME_AGE_GENDER: <div className='nowwrap'><div className="theme14">Angela</div><div className='theme12'> 68/M</div></div>,
    GUARDIAN_CONTACT_NO: <div className='nowwrap'><div className="theme14">Coirey</div><div className='theme12'>9898121233</div></div>,
    BEDLOCATION: <div className='nowwrap'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
    DOCTOR_DEPARTMENT: <div className='nowwrap'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
    STATUS: <div className={styles.admitted}>Admitted</div>,
    BALANCE: <div className={styles.admitted}>Rs: 23,000</div>,
    ACTION: <div className='nowwrap d-flex '><i className='fal fa-eye me-3  f14'></i>
      <i className='fal fa-edit me-3  f14'></i>
      <div class="dropdown-container" tabindex="-1">
        <div class="three-dots"></div>
        <div class="dropdown">
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Wallet</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Change Bed</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Discharge Summary</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Consent</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Check in</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Cancel Appointment</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Schedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Assign Doctor</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Reschedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Visitor ID</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Final Billing</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Add Service / Bill</div></a>
        </div>
      </div></div>,

  },
  {
    UHID_IP_ADMISNNO: <div className='nowwrap'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
    PATIENTNAME_AGE_GENDER: <div className='nowwrap'><div className="theme14">Angela Bower</div><div className='theme12'> 68/M</div></div>,
    GUARDIAN_CONTACT_NO: <div className='nowwrap'><div className="theme14">Corey</div><div className='theme12'>9898121233</div></div>,
    BEDLOCATION: <div className='nowwrap'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
    DOCTOR_DEPARTMENT: <div className='nowwrap'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
    STATUS: <div className={styles.scheduled}>Scheduled</div>,
    BALANCE: <div className={styles.admitted}>Rs: 500</div>,
    ACTION: <div className='nowwrap d-flex '><i className='fal fa-eye me-3  f14'></i>
      <i className='fal fa-edit me-3  f14'></i>
      <div class="dropdown-container" tabindex="-1">
        <div class="three-dots"></div>
        <div class="dropdown">
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Wallet</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Change Bed</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Discharge Summary</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Consent</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Check in</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Cancel Appointment</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Schedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Assign Doctor</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Reschedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Visitor ID</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Final Billing</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Add Service / Bill</div></a>
        </div>
      </div></div>,

  },
  {
    UHID_IP_ADMISNNO: <div className='nowwrap'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
    PATIENTNAME_AGE_GENDER: <div className='nowwrap'><div className="theme14">Capt. Trunk</div><div className='theme12'> 68/M</div></div>,
    GUARDIAN_CONTACT_NO: <div className='nowwrap'><div className="theme14">Joselin</div><div className='theme12'>9898121233</div></div>,
    BEDLOCATION: <div className='nowwrap'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
    DOCTOR_DEPARTMENT: <div className='nowwrap'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
    STATUS: <div className={styles.admitted}>Admitted</div>,
    BALANCE: <div className={styles.admitted}>Rs: 23,500</div>,
    ACTION: <div className='nowwrap d-flex '><i className='fal fa-eye me-3  f14'></i>
      <i className='fal fa-edit me-3  f14'></i>
      <div class="dropdown-container" tabindex="-1">
        <div class="three-dots"></div>
        <div class="dropdown">
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Wallet</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Change Bed</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Discharge Summary</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Consent</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Check in</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Cancel Appointment</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Schedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Assign Doctor</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Reschedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Visitor ID</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Final Billing</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Add Service / Bill</div></a>
        </div>
      </div></div>,

  },
  {
    UHID_IP_ADMISNNO: <div className='nowwrap'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
    PATIENTNAME_AGE_GENDER: <div className='nowwrap'><div className="theme14">Col. Roderick </div><div className='theme12'> 68/M</div></div>,
    GUARDIAN_CONTACT_NO: <div className='nowwrap'><div className="theme14">Jaxson</div><div className='theme12'>9898121233</div></div>,
    BEDLOCATION: <div className='nowwrap'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
    DOCTOR_DEPARTMENT: <div className='nowwrap'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
    STATUS: <div className={styles.admitted}>Admitted</div>,
    BALANCE: <div className={styles.admitted}>Rs: 23,500</div>,
    ACTION: <div className='nowwrap d-flex '><i className='fal fa-eye me-3  f14'></i>
      <i className='fal fa-edit me-3  f14'></i>
      <div class="dropdown-container" tabindex="-1">
        <div class="three-dots"></div>
        <div class="dropdown">
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Wallet</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Change Bed</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Discharge Summary</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Consent</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Check in</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Cancel Appointment</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Schedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Assign Doctor</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Reschedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Visitor ID</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Final Billing</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Add Service / Bill</div></a>
        </div>
      </div></div>,

  },
  {
    UHID_IP_ADMISNNO: <div className='nowwrap'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
    PATIENTNAME_AGE_GENDER: <div className='nowwrap'><div className="theme14">Col. Roderick </div><div className='theme12'> 68/M</div></div>,
    GUARDIAN_CONTACT_NO: <div className='nowwrap'><div className="theme14">Jaxson</div><div className='theme12'>9898121233</div></div>,
    BEDLOCATION: <div className='nowwrap'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
    DOCTOR_DEPARTMENT: <div className='nowwrap'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
    STATUS: <div className={styles.admitted}>Admitted</div>,
    BALANCE: <div className={styles.admitted}>Rs: 23,500</div>,
    ACTION: <div className='nowwrap d-flex '><i className='fal fa-eye me-3  f14'></i>
      <i className='fal fa-edit me-3  f14'></i>
      <div class="dropdown-container" tabindex="-1">
        <div class="three-dots"></div>
        <div class="dropdown">
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Wallet</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Change Bed</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Discharge Summary</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Consent</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Check in</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Cancel Appointment</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Schedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Assign Doctor</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Reschedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Visitor ID</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Final Billing</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Add Service / Bill</div></a>
        </div>
      </div></div>,

  },
  {
    UHID_IP_ADMISNNO: <div className='nowwrap'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
    PATIENTNAME_AGE_GENDER: <div className='nowwrap'><div className="theme14">Peter. Roderick </div><div className='theme12'> 68/M</div></div>,
    GUARDIAN_CONTACT_NO: <div className='nowwrap'><div className="theme14">Payitn</div><div className='theme12'>9898121233</div></div>,
    BEDLOCATION: <div className='nowwrap'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
    DOCTOR_DEPARTMENT: <div className='nowwrap'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
    STATUS: <div className={styles.admitted}>Admitted</div>,
    BALANCE: <div className={styles.admitted}>Rs: 23,500</div>,
    ACTION: <div className='nowwrap d-flex '><i className='fal fa-eye me-3  f14'></i>
      <i className='fal fa-edit me-3  f14'></i>
      <div class="dropdown-container" tabindex="-1">
        <div class="three-dots"></div>
        <div class="dropdown">
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Wallet</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Change Bed</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Discharge Summary</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Consent</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Check in</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Cancel Appointment</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Schedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Assign Doctor</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Reschedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Visitor ID</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Final Billing</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Add Service / Bill</div></a>
        </div>
      </div></div>,

  },
  {
    UHID_IP_ADMISNNO: <div className='nowwrap'><div className="theme14">54323</div><div className='theme12'>APH34231</div></div>,
    PATIENTNAME_AGE_GENDER: <div className='nowwrap'><div className="theme14">Col. Roderick </div><div className='theme12'> 68/M</div></div>,
    GUARDIAN_CONTACT_NO: <div className='nowwrap'><div className="theme14">Jaxson</div><div className='theme12'>9898121233</div></div>,
    BEDLOCATION: <div className='nowwrap'><div className="theme14">2nd Floor, G Ward</div><div className='theme13'>Bed No:201.</div></div>,
    DOCTOR_DEPARTMENT: <div className='nowwrap'><div className="theme14">Dr Corey Jax</div><div className='theme12'>Cardiologist</div></div>,
    STATUS: <div className={styles.admitted}>Admitted</div>,
    BALANCE: <div className={styles.admitted}>Rs: 23,500</div>,
    ACTION: <div className='nowwrap d-flex '><i className='fal fa-eye me-3  f14'></i>
      <i className='fal fa-edit me-3  f14'></i>
      <div class="dropdown-container" tabindex="-1">
        <div class="three-dots"></div>
        <div class="dropdown">
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Wallet</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Change Bed</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Discharge Summary</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Consent</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Check in</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Cancel Appointment</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Schedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Assign Doctor</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Reschedule consultation</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Visitor ID</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Final Billing</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Add Service / Bill</div></a>
        </div>
      </div></div>,

  },

];

export default products;
