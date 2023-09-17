import React, { useState } from 'react'
import styles from '../styles/Appointments.module.scss';
  const products = [ 
  {
       TOKENNO: <div className='nowwrap'>1207895</div>,
       UHID: <div className='nowwrap'> 91C001897</div>,
       NAME: <div className='nowwrap'>Devon Miles</div>,
       AGEGENDER: <div className='nowwrap'>56/M</div>,
       MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
       DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
       VISITTYPE: <div  className="nowwrap" title='kalyan123@gmail.com' >OP</div>,
       PAYMENT:<div className={styles.declined}> Declined</div>,
       ACTION: <div className='nowwrap'><i className='fal fa-receipt me-3  f14'></i> <i className='fal fa-prescription me-3  f14'></i> <i className='fal fa-ellipsis me-3  f14'></i></div>,
  
      },
      {
        TOKENNO: <div className='nowwrap'>1207895</div>,
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Angus MacGyver</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE: <div  className="nowwrap" title='kalyan123@gmail.com' >OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION: <div className='nowwrap'><i className='fal fa-receipt me-3  f14'></i> <i className='fal fa-prescription me-3  f14'></i> <i className='fal fa-ellipsis me-3  f14'></i></div>,
   
       },
       {
        TOKENNO: <div className='nowwrap'>1207895</div>,
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Tony Danza</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE: <div  className="nowwrap" title='kalyan123@gmail.com' >OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION: <div className='nowwrap'><i className='fal fa-receipt me-3  f14'></i> <i className='fal fa-prescription me-3  f14'></i> <i className='fal fa-ellipsis me-3  f14'></i></div>,
   
       },
       {
        TOKENNO: <div className='nowwrap'>1207895</div>,
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE: <div  className="nowwrap" title='kalyan123@gmail.com' >OP</div>,
        PAYMENT:<div className={styles.pending}> Pending</div>,
        ACTION: <div className='nowwrap'><i className='fal fa-receipt me-3  f14'></i> <i className='fal fa-prescription me-3  f14'></i> <i className='fal fa-ellipsis me-3  f14'></i></div>,
   
       },
       {
        TOKENNO: <div className='nowwrap'>1207895</div>,
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Thomas Magnum</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE: <div  className="nowwrap" title='kalyan123@gmail.com' >OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION: <div className='nowwrap'><i className='fal fa-receipt me-3  f14'></i> <i className='fal fa-prescription me-3  f14'></i> <i className='fal fa-ellipsis me-3  f14'></i></div>,
   
       },
       {
        TOKENNO: <div className='nowwrap'>1207895</div>,
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE: <div  className="nowwrap" title='kalyan123@gmail.com' >OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION: <div className='nowwrap'><i className='fal fa-receipt me-3  f14'></i> <i className='fal fa-prescription me-3  f14'></i> <i className='fal fa-ellipsis me-3  f14'></i></div>,
   
       },
       {
        TOKENNO: <div className='nowwrap'>1207895</div>,
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE: <div  className="nowwrap" title='kalyan123@gmail.com' >OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION: <div className='nowwrap'><i className='fal fa-receipt me-3  f14'></i> <i className='fal fa-prescription me-3  f14'></i> <i className='fal fa-ellipsis me-3  f14'></i></div>,
   
       },
       {
        TOKENNO: <div className='nowwrap'>1207895</div>,
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE: <div  className="nowwrap" title='kalyan123@gmail.com' >OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION: <div className='nowwrap'><i className='fal fa-receipt me-3  f14'></i> <i className='fal fa-prescription me-3  f14'></i> <i className='fal fa-ellipsis me-3  f14'></i></div>,
   
       },
       {
        TOKENNO: <div className='nowwrap'>1207895</div>,
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE: <div  className="nowwrap" title='kalyan123@gmail.com' >OP</div>,
        PAYMENT:<div className={styles.declined}> Declined</div>,
        ACTION: <div className='nowwrap'><i className='fal fa-receipt me-3  f14'></i> <i className='fal fa-prescription me-3  f14'></i> <i className='fal fa-ellipsis me-3  f14'></i></div>,
   
       },
       {
        TOKENNO: <div className='nowwrap'>1207895</div>,
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE: <div  className="nowwrap" title='kalyan123@gmail.com' >OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION: <div className='nowwrap'><i className='fal fa-receipt me-3  f14'></i> <i className='fal fa-prescription me-3  f14'></i> <i className='fal fa-ellipsis me-3  f14'></i></div>,
   
       },
       {
        TOKENNO: <div className='nowwrap'>1207895</div>,
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE: <div  className="nowwrap" title='kalyan123@gmail.com' >OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION: <div className='nowwrap'><i className='fal fa-receipt me-3  f14'></i> <i className='fal fa-prescription me-3  f14'></i> <i className='fal fa-ellipsis me-3  f14'></i></div>,
   
       },
       {
        TOKENNO: <div className='nowwrap'>1207895</div>,
        UHID: <div className='nowwrap'> 91C001897</div>,
        NAME: <div className='nowwrap'>Devon Miles</div>,
        AGEGENDER: <div className='nowwrap'>56/M</div>,
        MOBILENO: <div className='nowwrap'>+91 9911991199</div>,
        DOCTORNAME: <div className='nowwrap'>Peter Thornton</div>,
        VISITTYPE: <div  className="nowwrap" title='kalyan123@gmail.com' >OP</div>,
        PAYMENT:<div className={styles.paid}> Paid</div>,
        ACTION: <div className='nowwrap'><i className='fal fa-receipt me-3  f14'></i> <i className='fal fa-prescription me-3  f14'></i> <i className='fal fa-ellipsis me-3  f14'></i></div>,
   
       },
    
  ];

  export default products;
  