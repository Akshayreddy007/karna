import Image from 'next/image';
import React from 'react'
import { Modal,Button } from 'react-bootstrap'
import styles from '../../styles/Prescription.module.scss';
import Image1 from "../../public/images/image 34.svg";
const Prescription_modal = (props) => {
  return (
    <React.Fragment>
    <Modal size='md' {...props}>

        <Modal.Body className='text-center'>
        <Modal.Title className={`f14 text-center mb-3 ${styles.ft600} `}>Prescription</Modal.Title>
        <Image src={Image1} alt='Prescription' height='480' width='360'/>
        </Modal.Body>
        <Modal.Footer className='pt-2'>
        <div className='text-end'>
          <Button style={{marginLeft:'10px' }} className={styles.prescriptionbtn1} onClick={props.onHide}>Print</Button>
           </div>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default Prescription_modal