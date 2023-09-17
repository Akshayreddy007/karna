import React, { useState } from 'react'
import styles from '../styles/Login.module.scss';
  const products = [ 
  {
       UHID: <div className='nowwrap'><input type='checkbox' className='me-2 me-md-2'/> 91C001897</div>,
       PATIENTDETAILS: <div className='nowwrap'>Devon Miles</div>,
       AGEGENDER: <div className='nowwrap'>56/M</div>,
       CONTACT: <div className='nowwrap'>+91 9911991199</div>,
       VISITTYPE: <div title='kalyan123@gmail.com' className={styles.f13text}>OP</div>,
       PAYMENT:<div className='declined'><i className='fa fa-times-circle' style={{color:'red'}}></i> Declined</div>,
       STATUS: <div className='nowwrap'>Completed</div>,
       AMOUNT: <div className='nowwrap'><i className='fa fa-rupee-sign'></i> 500/-</div>,
       STATUSACTION: <div className='nowwrap'><i className='fal fa-link me-2'></i> <i className='fal fa-eye me-2'></i> <i className='fal fa-file me-2'></i></div>,
  
      },
      {
        UHID: <div className='nowwrap'><input type='checkbox' className='me-2 me-md-2'/> 91C001897</div>,
        PATIENTDETAILS: <div className='nowwrap'>Angus MacGyver</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        CONTACT: <div className='nowwrap'>+91 9911991199</div>,
        VISITTYPE: <div title='kalyan123@gmail.com' className={styles.f13text}>OP</div>,
        PAYMENT:<div className='paid'><i className='fa fa-check-circle' style={{color:'green'}}></i> Paid</div>,
        STATUS: <div className='nowwrap'>Completed</div>,
        AMOUNT: <div className='nowwrap'><i className='fa fa-rupee-sign'></i> 500/-</div>,
        STATUSACTION: <div className='nowwrap'><i className='fal fa-link me-2'></i> <i className='fal fa-eye me-2'></i> <i className='fal fa-file me-2'></i></div>,
   
       },
       {
        UHID: <div className='nowwrap'><input type='checkbox' className='me-2 me-md-2'/> 91C001897</div>,
        PATIENTDETAILS: <div className='nowwrap'>Tony Danza</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        CONTACT: <div className='nowwrap'>+91 9911991199</div>,
        VISITTYPE: <div title='kalyan123@gmail.com' className={styles.f13text}>OP</div>,
        PAYMENT:<div className='paid'><i className='fa fa-check-circle' style={{color:'green'}}></i> Paid</div>,
        STATUS: <div className='nowwrap'>Completed</div>,
        AMOUNT: <div className='nowwrap'><i className='fa fa-rupee-sign'></i> 500/-</div>,
        STATUSACTION: <div className='nowwrap'><i className='fal fa-link me-2'></i> <i className='fal fa-eye me-2'></i> <i className='fal fa-file me-2'></i></div>,
   
       },
       {
        UHID: <div className='nowwrap'><input type='checkbox' className='me-2 me-md-2'/> 91C001897</div>,
        PATIENTDETAILS: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        CONTACT: <div className='nowwrap'>+91 9911991199</div>,
        VISITTYPE: <div title='kalyan123@gmail.com' className={styles.f13text}>OP</div>,
        PAYMENT:<div className='pending'><i className='fa fa-pause' style={{color:'#F2BD01'}}></i> Pending</div>,
        STATUS: <div className='nowwrap'>Completed</div>,
        AMOUNT: <div className='nowwrap'><i className='fa fa-rupee-sign'></i> 500/-</div>,
        STATUSACTION: <div className='nowwrap'><i className='fal fa-link me-2'></i> <i className='fal fa-eye me-2'></i> <i className='fal fa-file me-2'></i></div>,
   
       },
       {
        UHID: <div className='nowwrap'><input type='checkbox' className='me-2 me-md-2'/> 91C001897</div>,
        PATIENTDETAILS: <div className='nowwrap'>Thomas Magnum</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        CONTACT: <div className='nowwrap'>+91 9911991199</div>,
        VISITTYPE: <div title='kalyan123@gmail.com' className={styles.f13text}>OP</div>,
        PAYMENT:<div className='paid'><i className='fa fa-check-circle' style={{color:'green'}}></i> Paid</div>,
        STATUS: <div className='nowwrap'>Completed</div>,
        AMOUNT: <div className='nowwrap'><i className='fa fa-rupee-sign'></i> 500/-</div>,
        STATUSACTION: <div className='nowwrap'><i className='fal fa-link me-2'></i> <i className='fal fa-eye me-2'></i> <i className='fal fa-file me-2'></i></div>,
   
       },
       {
        UHID: <div className='nowwrap'><input type='checkbox' className='me-2 me-md-2'/> 91C001897</div>,
        PATIENTDETAILS: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        CONTACT: <div className='nowwrap'>+91 9911991199</div>,
        VISITTYPE: <div title='kalyan123@gmail.com' className={styles.f13text}>OP</div>,
        PAYMENT:<div className='paid'><i className='fa fa-check-circle' style={{color:'green'}}></i> Paid</div>,
        STATUS: <div className='nowwrap'>Completed</div>,
        AMOUNT: <div className='nowwrap'><i className='fa fa-rupee-sign'></i> 500/-</div>,
        STATUSACTION: <div className='nowwrap'><i className='fal fa-link me-2'></i> <i className='fal fa-eye me-2'></i> <i className='fal fa-file me-2'></i></div>,
   
       },
       {
        UHID: <div className='nowwrap'><input type='checkbox' className='me-2 me-md-2'/> 91C001897</div>,
        PATIENTDETAILS: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        CONTACT: <div className='nowwrap'>+91 9911991199</div>,
        VISITTYPE: <div title='kalyan123@gmail.com' className={styles.f13text}>OP</div>,
        PAYMENT:<div className='paid'><i className='fa fa-check-circle' style={{color:'green'}}></i> Paid</div>,
        STATUS: <div className='nowwrap'>Completed</div>,
        AMOUNT: <div className='nowwrap'><i className='fa fa-rupee-sign'></i> 500/-</div>,
        STATUSACTION: <div className='nowwrap'><i className='fal fa-link me-2'></i> <i className='fal fa-eye me-2'></i> <i className='fal fa-file me-2'></i></div>,
   
       },
       {
        UHID: <div className='nowwrap'><input type='checkbox' className='me-2 me-md-2'/> 91C001897</div>,
        PATIENTDETAILS: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        CONTACT: <div className='nowwrap'>+91 9911991199</div>,
        VISITTYPE: <div title='kalyan123@gmail.com' className={styles.f13text}>OP</div>,
        PAYMENT:<div className='paid'><i className='fa fa-check-circle' style={{color:'green'}}></i> Paid</div>,
        STATUS: <div className='nowwrap'>Completed</div>,
        AMOUNT: <div className='nowwrap'><i className='fa fa-rupee-sign'></i> 500/-</div>,
        STATUSACTION: <div className='nowwrap'><i className='fal fa-link me-2'></i> <i className='fal fa-eye me-2'></i> <i className='fal fa-file me-2'></i></div>,
   
       },
       {
        UHID: <div className='nowwrap'><input type='checkbox' className='me-2 me-md-2'/> 91C001897</div>,
        PATIENTDETAILS: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        CONTACT: <div className='nowwrap'>+91 9911991199</div>,
        VISITTYPE: <div title='kalyan123@gmail.com' className={styles.f13text}>OP</div>,
        PAYMENT:<div className='declined'><i className='fa fa-times-circle' style={{color:'red'}}></i> Declined</div>,
        STATUS: <div className='nowwrap'>Completed</div>,
        AMOUNT: <div className='nowwrap'><i className='fa fa-rupee-sign'></i> 500/-</div>,
        STATUSACTION: <div className='nowwrap'><i className='fal fa-link me-2'></i> <i className='fal fa-eye me-2'></i> <i className='fal fa-file me-2'></i></div>,
   
       },
       {
        UHID: <div className='nowwrap'><input type='checkbox' className='me-2 me-md-2'/> 91C001897</div>,
        PATIENTDETAILS: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        CONTACT: <div className='nowwrap'>+91 9911991199</div>,
        VISITTYPE: <div title='kalyan123@gmail.com' className={styles.f13text}>OP</div>,
        PAYMENT:<div className='paid'><i className='fa fa-check-circle' style={{color:'green'}}></i> Paid</div>,
        STATUS: <div className='nowwrap'>Completed</div>,
        AMOUNT: <div className='nowwrap'><i className='fa fa-rupee-sign'></i> 500/-</div>,
        STATUSACTION: <div className='nowwrap'><i className='fal fa-link me-2'></i> <i className='fal fa-eye me-2'></i> <i className='fal fa-file me-2'></i></div>,
   
       },
       {
        UHID: <div className='nowwrap'><input type='checkbox' className='me-2 me-md-2'/> 91C001897</div>,
        PATIENTDETAILS: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        CONTACT: <div className='nowwrap'>+91 9911991199</div>,
        VISITTYPE: <div title='kalyan123@gmail.com' className={styles.f13text}>OP</div>,
        PAYMENT:<div className='paid'><i className='fa fa-check-circle' style={{color:'green'}}></i> Paid</div>,
        STATUS: <div className='nowwrap'>Completed</div>,
        AMOUNT: <div className='nowwrap'><i className='fa fa-rupee-sign'></i> 500/-</div>,
        STATUSACTION: <div className='nowwrap'><i className='fal fa-link me-2'></i> <i className='fal fa-eye me-2'></i> <i className='fal fa-file me-2'></i></div>,
   
       },
       {
        UHID: <div className='nowwrap'><input type='checkbox' className='me-2 me-md-2'/> 91C001897</div>,
        PATIENTDETAILS: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        CONTACT: <div className='nowwrap'>+91 9911991199</div>,
        VISITTYPE: <div title='kalyan123@gmail.com' className={styles.f13text}>OP</div>,
        PAYMENT:<div className='paid'><i className='fa fa-check-circle' style={{color:'green'}}></i> Paid</div>,
        STATUS: <div className='nowwrap'>Completed</div>,
        AMOUNT: <div className='nowwrap'><i className='fa fa-rupee-sign'></i> 500/-</div>,
        STATUSACTION: <div className='nowwrap'><i className='fal fa-link me-2'></i> <i className='fal fa-eye me-2'></i> <i className='fal fa-file me-2'></i></div>,
   
       },
    
  ];

  export default products;
  