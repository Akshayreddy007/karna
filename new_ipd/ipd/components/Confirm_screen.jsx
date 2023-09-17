import React from 'react'
import Logo2 from "../public/images/confirmed_image.png";
const Confirm_screen = () => {
  return (
    <div className='text-center pt-4'>
    <Image src={Logo2} alt='Logo2' width='60' height='60'/>
    <h6 className='mt-3'>Confirmed</h6>
    <div className='mt-3'>auth in your ABHA mobile app</div>
    </div>
  )
}

export default Confirm_screen