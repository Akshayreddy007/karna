import React from 'react'
import styles1 from '../../styles/IPD_Doctor/CrossConsultation.module.scss'
import { Col, Card, Breadcrumb } from 'react-bootstrap'
import Link from 'next/link'
const CrossConsultation = () => {
    return (
        <React.Fragment>
            <div id="breadcrumb1" className='mt-3'>
                <Breadcrumb>
                    <Link href="#" className='me-3'><i className='fal fa-arrow-left theme14'></i></Link>
                    <Breadcrumb.Item href="#" className={`${styles1.font} f16`}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#" className={`${styles1.font} f16`}> Profile</Breadcrumb.Item>
                    <Breadcrumb.Item active className={`${styles1.font} f16`}>Cross Consultation </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div >
                <div className={styles1.card5}>
                    <Card className={`${styles1.card3}  ${styles1.font}`}>
                        <Card.Body>
                            <div className='d-flex align-items-center'>
                                <Col md={2} className='mt-2'>
                                    <div className={`${styles1.bgicon1} text-center pt-2 pb-2`}>
                                        <span className={styles1.iconclr}> <i class="fal fa-user-md  f16"></i></span>
                                    </div>
                                </Col>
                                <Col md={8} className='ps-3 mt-2'>
                                    <div className={`theme14 font-weight-600 f16 ${styles1.font}`}>Dr.Sabarwal </div>
                                </Col>
                                <Col className={`text-center ${styles1.pl5} mb-3`}>
                                    <div className={`${styles1.bgicon3} pt-2 pb-2 px-3`}>
                                        <i className='fal fa-level-up theme14 f15'></i>
                                    </div>
                                </Col>
                            </div>
                            <div className={`theme12 ${styles1.lt23} mt-2 ps-3 f14`}>M.B.B.S, MD, Nuero Surgeon </div>
                            <div className={`theme12 ${styles1.lt23} ps-3 f14`}>Visit : 23rd Jan, 2023</div>
                            <div className={`theme14 ${styles1.lt23} ps-3 f14 font-weight-600`}>Chief Complaint - IP</div>
                            <div className={`theme14 ${styles1.lt23} ps-3 f14`}>Headache for 8 days</div>
                        </Card.Body>
                    </Card>
                    <Card className={`${styles1.card3}  ${styles1.font}`}>
                    <Card.Body>
                        <div className='d-flex align-items-center'>
                            <Col md={2} className='mt-2'>
                                <div className={`${styles1.bgicon2} text-center pt-2 pb-2`}>
                                    <span className={styles1.iconclr1}> <i class="fal fa-user-md  f16"></i></span>
                                </div>
                            </Col>
                            <Col md={8} className='ps-3 mt-2'>
                                <div className={`theme14 font-weight-600 f16 ${styles1.font}`}>Dr.Arun Rao </div>
                            </Col>
                            <Col className={`text-center ${styles1.pl5} mb-3`}>
                                <div className={`${styles1.bgicon3} pt-2 pb-2 px-3`}>
                                    <i className='fal fa-level-up theme14 f15'></i>
                                </div>
                            </Col>
                        </div>
                        <div className={`theme12 ${styles1.lt23} mt-2 ps-3 f14`}>M.B.B.S, MD, Nuero Surgeon </div>
                        <div className={`theme12 ${styles1.lt23} ps-3 f14`}>Visit : 23rd Jan, 2023</div>
                        <div className={`theme14 ${styles1.lt23} ps-3 f14 font-weight-600`}>Chief Complaint - IP</div>
                        <div className={`theme14 ${styles1.lt23} ps-3 f14`}>Back Pain for 3 days</div>
                    </Card.Body>
                </Card>
                </div>

            </div>
        </React.Fragment>
    )
}

export default CrossConsultation