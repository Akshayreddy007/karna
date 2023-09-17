import React, { useState } from 'react'
import styles from '../styles/Appointments.module.scss';
  const products1 = [ 
  {
       SNO: <div className='nowwrap'> 91C001897</div>,
       DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
       SPECIALISATION : <div className='nowwrap'>Demartologist</div>,
       MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        MARGINPERCENTAGE: <div className='nowwrap'>50%</div>,
       TOTALREFERRALS: <div className='nowwrap'> 34</div>,
       TOTALBILLEDAMOUNT:<div className='nowwrap'> 12,241/- - <a href="#" className='theme13'> Services List</a></div>,
       COMMISSION:<div className='nowwrap'> 6,221</div>,
       ACTION: <div className='nowwrap d-flex'>
       <i className='fal fa-money-bill me-3 money_pending'></i>
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
        SNO: <div className='nowwrap'> 91C001897</div>,
       DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
       SPECIALISATION : <div className='nowwrap'>Demartologist</div>,
       MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        MARGINPERCENTAGE: <div className='nowwrap'>50%</div>,
       TOTALREFERRALS: <div className='nowwrap'> 34</div>,
       TOTALBILLEDAMOUNT:<div className='nowwrap'> 12,241/- - <a href="#" className='theme13'> Services List</a></div>,
       COMMISSION:<div className='nowwrap'> 6,221</div>,
       ACTION: <div className='nowwrap d-flex money_paid'>
       <i className='fal fa-money-bill me-3'></i>
        <div class="dropdown-container" tabindex="-1">
        <div class="three-dots"></div>
        <div class="dropdown">
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Booking Appointment</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2' >Billing History</div></a>
          <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Documents</div></a>
        </div>
        </div></div>,
   
       },
       {
        SNO: <div className='nowwrap'> 91C001897</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        SPECIALISATION : <div className='nowwrap'>Demartologist</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
         MARGINPERCENTAGE: <div className='nowwrap'>50%</div>,
        TOTALREFERRALS: <div className='nowwrap'> 34</div>,
        TOTALBILLEDAMOUNT:<div className='nowwrap'> 12,241/- - <a href="#" className='theme13'> Services List</a></div>,
        COMMISSION:<div className='nowwrap'> 6,221</div>,
        ACTION: <div className='nowwrap d-flex'>
        <i className='fal fa-money-bill me-3 money_declined'></i>
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
        SNO: <div className='nowwrap'> 91C001897</div>,
       DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
       SPECIALISATION : <div className='nowwrap'>Demartologist</div>,
       MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        MARGINPERCENTAGE: <div className='nowwrap'>50%</div>,
       TOTALREFERRALS: <div className='nowwrap'> 34</div>,
       TOTALBILLEDAMOUNT:<div className='nowwrap'> 12,241/- - <a href="#" className='theme13'> Services List</a></div>,
       COMMISSION:<div className='nowwrap'> 6,221</div>,
       ACTION: <div className='nowwrap d-flex'>
       <i className='fal fa-money-bill me-3 money_pending'></i>
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
        SNO: <div className='nowwrap'> 91C001897</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        SPECIALISATION : <div className='nowwrap'>Demartologist</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
         MARGINPERCENTAGE: <div className='nowwrap'>50%</div>,
        TOTALREFERRALS: <div className='nowwrap'> 34</div>,
        TOTALBILLEDAMOUNT:<div className='nowwrap'> 12,241/- - <a href="#" className='theme13'> Services List</a></div>,
        COMMISSION:<div className='nowwrap'> 6,221</div>,
        ACTION: <div className='nowwrap d-flex'>
        <i className='fal fa-money-bill me-3 money_pending'></i>
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
        SNO: <div className='nowwrap'> 91C001897</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        SPECIALISATION : <div className='nowwrap'>Demartologist</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
         MARGINPERCENTAGE: <div className='nowwrap'>50%</div>,
        TOTALREFERRALS: <div className='nowwrap'> 34</div>,
        TOTALBILLEDAMOUNT:<div className='nowwrap'> 12,241/- - <a href="#" className='theme13'> Services List</a></div>,
        COMMISSION:<div className='nowwrap'> 6,221</div>,
        ACTION: <div className='nowwrap d-flex'>
        <i className='fal fa-money-bill me-3 money_pending'></i>
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
        SNO: <div className='nowwrap'> 91C001897</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        SPECIALISATION : <div className='nowwrap'>Demartologist</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
         MARGINPERCENTAGE: <div className='nowwrap'>50%</div>,
        TOTALREFERRALS: <div className='nowwrap'> 34</div>,
        TOTALBILLEDAMOUNT:<div className='nowwrap'> 12,241/- - <a href="#" className='theme13'> Services List</a></div>,
        COMMISSION:<div className='nowwrap'> 6,221</div>,
        ACTION: <div className='nowwrap d-flex'>
        <i className='fal fa-money-bill me-3 money_pending'></i>
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
        SNO: <div className='nowwrap'> 91C001897</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        SPECIALISATION : <div className='nowwrap'>Demartologist</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
         MARGINPERCENTAGE: <div className='nowwrap'>50%</div>,
        TOTALREFERRALS: <div className='nowwrap'> 34</div>,
        TOTALBILLEDAMOUNT:<div className='nowwrap'> 12,241/- - <a href="#" className='theme13'> Services List</a></div>,
        COMMISSION:<div className='nowwrap'> 6,221</div>,
        ACTION: <div className='nowwrap d-flex'>
        <i className='fal fa-money-bill me-3 money_pending'></i>
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
        SNO: <div className='nowwrap'> 91C001897</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        SPECIALISATION : <div className='nowwrap'>Demartologist</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
         MARGINPERCENTAGE: <div className='nowwrap'>50%</div>,
        TOTALREFERRALS: <div className='nowwrap'> 34</div>,
        TOTALBILLEDAMOUNT:<div className='nowwrap'> 12,241/- - <a href="#" className='theme13'> Services List</a></div>,
        COMMISSION:<div className='nowwrap'> 6,221</div>,
        ACTION: <div className='nowwrap d-flex'>
        <i className='fal fa-money-bill me-3 money_paid'></i>
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
        SNO: <div className='nowwrap'> 91C001897</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        SPECIALISATION : <div className='nowwrap'>Demartologist</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
         MARGINPERCENTAGE: <div className='nowwrap'>50%</div>,
        TOTALREFERRALS: <div className='nowwrap'> 34</div>,
        TOTALBILLEDAMOUNT:<div className='nowwrap'> 12,241/- - <a href="#" className='theme13'> Services List</a></div>,
        COMMISSION:<div className='nowwrap'> 6,221</div>,
        ACTION: <div className='nowwrap d-flex'>
        <i className='fal fa-money-bill me-3 money_pending'></i>
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
        SNO: <div className='nowwrap'> 91C001897</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        SPECIALISATION : <div className='nowwrap'>Demartologist</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
         MARGINPERCENTAGE: <div className='nowwrap'>50%</div>,
        TOTALREFERRALS: <div className='nowwrap'> 34</div>,
        TOTALBILLEDAMOUNT:<div className='nowwrap'> 12,241/- - <a href="#" className='theme13'> Services List</a></div>,
        COMMISSION:<div className='nowwrap'> 6,221</div>,
        ACTION: <div className='nowwrap d-flex'>
        <i className='fal fa-money-bill me-3 money_pending'></i>
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
        SNO: <div className='nowwrap'> 91C001897</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        SPECIALISATION : <div className='nowwrap'>Demartologist</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
         MARGINPERCENTAGE: <div className='nowwrap'>50%</div>,
        TOTALREFERRALS: <div className='nowwrap'> 34</div>,
        TOTALBILLEDAMOUNT:<div className='nowwrap'> 12,241/- - <a href="#" className='theme13'> Services List</a></div>,
        COMMISSION:<div className='nowwrap'> 6,221</div>,
        ACTION: <div className='nowwrap d-flex'>
        <i className='fal fa-money-bill me-3 money_pending'></i>
         <div class="dropdown-container" tabindex="-1">
         <div class="three-dots"></div>
         <div class="dropdown">
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Booking Appointment</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Billing History</div></a>
           <a href="#" className='clr21'><div className='pt-1 pb-2'>Upload Documents</div></a>
         </div>
         </div></div>
   
       },
    
  ];

  export default products1;
  