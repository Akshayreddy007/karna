import React, { Component, useEffect } from 'react';
import Image from 'next/image';
import gif from "../../public/images/preloader.gif";
const Preloader = () => {
  return (
    <React.Fragment>
    <div className='text-center mt-4'  id="preloader"> 
    <Image src={gif} alt='Preloader' width='60'/>
    <h4 className='mt-4 pt-2 font-weight-600'>Waiting for confirmation</h4>
    <div className='f13 mt-4 mb-4'>Confirm this auth in your ABHA mobile app</div>
    </div>
    </React.Fragment>
  )
}

export default Preloader