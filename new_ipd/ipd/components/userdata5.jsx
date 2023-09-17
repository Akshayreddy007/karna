import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Appointments.module.scss';

  const products1 = [ 
  {
    UHID: <div className='nowwrap'> 91C001897</div>,
       NAME: <div className='nowwrap'>Devon Miles</div>,
       AGEGENDER: <div className='nowwrap'>56/M</div>,
       MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
       DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
       VISITTYPE: <div title='kalyan123@gmail.com' className='nowwrap'>OP</div>,
       PAYMENT:<div className={styles.declined}> Declined</div>,
       ACTION: <div className='nowwrap d-flex'>
       <i className='fal fa-eye me-3  f14'></i>
        <i className='fal fa-receipt me-3  f14'></i> 
        <div class="dropdown-container" tabindex="-1">
        <div class="three-dots"></div>
        <div class="dropdown">
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Booking Appointment</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Billing History</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Documents</div></a>
        </div>
        </div></div>
       
  
      },
      {
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Angus MacGyver</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE: <div title='kalyan123@gmail.com' className='nowwrap'>OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION: <div className='nowwrap d-flex'>
        <i className='fal fa-eye me-3  f14'></i>
         <i className='fal fa-receipt me-3  f14'></i> 
         <div class="dropdown-container" tabindex="-1">
         <div class="three-dots"></div>
         <div class="dropdown">
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Booking Appointment</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Billing History</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Documents</div></a>
         </div>
         </div></div>,
   
       },
       {
         UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Tony Danza</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE:<div title='kalyan123@gmail.com' className='nowwrap'>OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION: <div className='nowwrap d-flex'>
        <i className='fal fa-eye me-3  f14'></i>
         <i className='fal fa-receipt me-3  f14'></i> 
         <div class="dropdown-container" tabindex="-1">
         <div class="three-dots"></div>
         <div class="dropdown">
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Booking Appointment</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Billing History</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Documents</div></a>
         </div>
         </div></div>
   
       },
       {
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE:<div title='kalyan123@gmail.com' className='nowwrap'>OP</div>,
        PAYMENT:<div className={styles.pending}> Pending</div>,
        ACTION: <div className='nowwrap d-flex'>
        <i className='fal fa-eye me-3  f14'></i>
         <i className='fal fa-receipt me-3  f14'></i> 
         <div class="dropdown-container" tabindex="-1">
         <div class="three-dots"></div>
         <div class="dropdown">
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Booking Appointment</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Billing History</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Documents</div></a>
         </div>
         </div></div>,
   
       },
       {
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Thomas Magnum</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE:<div title='kalyan123@gmail.com' className='nowwrap'>OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION: <div className='nowwrap d-flex'>
        <i className='fal fa-eye me-3  f14'></i>
         <i className='fal fa-receipt me-3  f14'></i> 
         <div class="dropdown-container" tabindex="-1">
         <div class="three-dots"></div>
         <div class="dropdown">
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Booking Appointment</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Billing History</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Documents</div></a>
         </div>
         </div></div>,
   
       },
       {
         UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE:<div title='kalyan123@gmail.com' className='nowwrap'>OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION:<div className='nowwrap d-flex'>
        <i className='fal fa-eye me-3  f14'></i>
         <i className='fal fa-receipt me-3  f14'></i> 
         <div class="dropdown-container" tabindex="-1">
         <div class="three-dots"></div>
         <div class="dropdown">
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Booking Appointment</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Billing History</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Documents</div></a>
         </div>
         </div></div>,
   
       },
       {
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE:<div title='kalyan123@gmail.com' className='nowwrap'>OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION:<div className='nowwrap d-flex'>
        <i className='fal fa-eye me-3  f14'></i>
         <i className='fal fa-receipt me-3  f14'></i> 
         <div class="dropdown-container" tabindex="-1">
         <div class="three-dots"></div>
         <div class="dropdown">
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Booking Appointment</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Billing History</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Documents</div></a>
         </div>
         </div></div>,
   
       },
       {
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE:<div title='kalyan123@gmail.com' className='nowwrap'>OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION:<div className='nowwrap d-flex'>
        <i className='fal fa-eye me-3  f14'></i>
         <i className='fal fa-receipt me-3  f14'></i> 
         <div class="dropdown-container" tabindex="-1">
         <div class="three-dots"></div>
         <div class="dropdown">
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Booking Appointment</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Billing History</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Documents</div></a>
         </div>
         </div></div>,
   
       },
       {
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE:<div title='kalyan123@gmail.com' className='nowwrap'>OP</div>,
        PAYMENT:<div className={styles.declined}> Declined</div>,
        ACTION:<div className='nowwrap d-flex'>
        <i className='fal fa-eye me-3  f14'></i>
         <i className='fal fa-receipt me-3  f14'></i> 
         <div class="dropdown-container" tabindex="-1">
         <div class="three-dots"></div>
         <div class="dropdown">
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Booking Appointment</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Billing History</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Documents</div></a>
         </div>
         </div></div>,
   
       },
       {
         UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE:<div title='kalyan123@gmail.com' className='nowwrap'>OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION:<div className='nowwrap d-flex'>
        <i className='fal fa-eye me-3  f14'></i>
         <i className='fal fa-receipt me-3  f14'></i> 
         <div class="dropdown-container" tabindex="-1">
         <div class="three-dots"></div>
         <div class="dropdown">
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Booking Appointment</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Billing History</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Documents</div></a>
         </div>
         </div></div>,
   
       },
       {
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE:<div title='kalyan123@gmail.com' className='nowwrap'>OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION:<div className='nowwrap d-flex'>
        <i className='fal fa-eye me-3  f14'></i>
         <i className='fal fa-receipt me-3  f14'></i>
         <div class="dropdown-container" tabindex="-1">
         <div class="three-dots"></div>
         <div class="dropdown">
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Booking Appointment</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Billing History</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Documents</div></a>
         </div>
         </div></div>,
   
       },
       {
         UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE:<div title='kalyan123@gmail.com' className='nowwrap'>OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION:<div className='nowwrap d-flex'>
        <i className='fal fa-eye me-3  f14'></i>
         <i className='fal fa-receipt me-3  f14  f14'></i>
         <div class="dropdown-container" tabindex="-1">
         <div class="three-dots"></div>
         <div class="dropdown">
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Booking Appointment</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Billing History</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Documents</div></a>
         </div>
         </div></div>,
   
       },
    
  ];

  export default products1;
  