import Link from 'next/link'
import React from 'react'
import { Breadcrumb, Col, Form, Card } from 'react-bootstrap'
import styles1 from '../../styles/IPD_Doctor/InitialAssessment.module.scss'

const InitialAssessment = () => {
    return (
        <React.Fragment>
            <div className='d-flex mt-3 align-items-center'>
                <Col md={6} id="breadcrumb1">
                    <Breadcrumb>
                        <Link href="#" className='me-3'><i className='fal fa-arrow-left theme14'></i></Link>
                        <Breadcrumb.Item href="#" className={`${styles1.font} f16`}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#" className={`${styles1.font} f16`}> Profile</Breadcrumb.Item>
                        <Breadcrumb.Item active className={`${styles1.font} f16`}>Initial Assessment</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Col md={6}>
                    <div className='d-flex justify-content-end align-items-center'>
                        <div>
                            <Form.Control type="date" name="name" className={styles1.h44}></Form.Control>
                        </div>
                        <div className='ms-3'>
                            <i className='fal fa-cog f22'></i>
                        </div>
                    </div>
                </Col>
            </div>
            <div className='d-flex'>
                <Col md={6}>
                    <Card style={{ border: 'none' }}>
                        <Card.Body>
                            <div className='d-flex align-items-center'>
                                <Col md={1} className={`${styles1.bgicon1} text-center ${styles1.w6}`}><i className='fal fa-exclamation-circle theme13'></i></Col>
                                <Col md={11} className="ps-3">
                                    <div className={`font-weight-600  ${styles1.font}`}>Admission Reason</div>
                                </Col>
                            </div>
                            <div className={`font-weight-600 mt-3 f14 px-1 ${styles1.font}`}>Chief Complaint</div>
                            <div className={`f14 px-1 ${styles1.font}`}>Complains of fever for 8 days</div>

                            <div className={`font-weight-600 mt-3 f14 px-1 ${styles1.font}`}>Provisional Diagnosis</div>
                            <div className={`f14 px-1 ${styles1.font}`}>Chest pain with features of angina pectoris</div>

                            <div className={`font-weight-600 mt-3 f14 px-1 ${styles1.font}`}>Differential Diagnosis</div>
                            <ul>
                                <li className={`f14  ${styles1.font}`}>Epigastric discomfort, NSAID use with a history of peptic ulcer.</li>
                                <li className={`f14  ${styles1.font}`}> Lumbo-sacral back pain</li>
                                <li className={`f14  ${styles1.font}`}>Fibrocystic breast disease</li>
                            </ul>

                            <div className={`font-weight-600 mt-3 f14 px-1 ${styles1.font}`}>HOPI</div>
                            <p className={`f14  ${styles1.font}`}>A 33-year-old white female presents after admission to the general medical/surgical hospital ward with a chief complaint of shortness of breath on exertion. A brief review of systems is negative for fever, night sweats, palpitations, chest pain, nausea, vomiting, diarrhea, constipation, abdominal pain, neural sensation changes, muscular changes, and increased bruising or bleeding. She admits a cough, shortness of breath, and shortness of breath on exertion.
                            </p>

                            <div className={`font-weight-600 mt-3 f14 px-1 ${styles1.font}`}>Examination Findings</div>
                            <div className={`f14 px-1 ${styles1.font}`}>Patient is moderately built, well nourished, conscious and oriented. </div>
                            <div className={`f14 px-1 ${styles1.font}`}> No pallor, icterus, clubbing, cyanosis, lymphadenopathy </div>
                            <div className={`f14 px-1 ${styles1.font}`}> Edema: facial edema with bruises </div>
                            <div className={`f14 px-1 ${styles1.font}`}> Bilateral black eye </div>
                            <div className={`f14 px-1 ${styles1.font}`}> Bruises over back and neck </div>
                            <div className={`f14 px-1 ${styles1.font}`}> Small clots in nostrils </div>

                            <div className={`font-weight-600 f14 mt-3 px-1 ${styles1.font}`}>Allergies</div>
                            <div className={`f14 px-1 ${styles1.font}`}>No known medicine, food, or environmental allergies.</div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className='ps-4'>
                    <div className='d-flex'>
                        <Col md={6} className='pe-lg-3'>
                            <Card className={styles1.card1}>
                                <Card.Body>
                                    <div className='d-flex align-items-center'>
                                        <Col md={2} >
                                            <div className={`${styles1.bgicon2} text-center`}>
                                                <i className='fal fa-waveform-path text-white f16'></i>
                                            </div>
                                        </Col>
                                        <Col md={8} className='ps-3'>
                                            <div className='text-white'>Blood Pressure</div>
                                        </Col>
                                        <Col md={2}>
                                            <div className={styles1.bgicon3}>
                                                <i className='fal fa-level-up text-white f16 '></i>
                                            </div>
                                        </Col>
                                    </div>
                                    <div className='text-white f16 pt-5'>Abnormal</div>
                                    <div className='text-white f22'>89/60  <span className='f16 ps-3'>mmHg</span></div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className='pe-lg-3'>
                            <Card className={styles1.card2}>
                                <Card.Body>
                                    <div className='d-flex align-items-center'>
                                        <Col md={2}>
                                            <div className={`${styles1.bgicon2} text-center`}>
                                                <i className='fal fa-heartbeat text-white f16'></i>
                                            </div>
                                        </Col>
                                        <Col md={8} className='ps-3'>
                                            <div className='text-white'>Heart Rate</div>
                                        </Col>
                                        <Col md={2}>
                                            <div className={styles1.bgicon3}>
                                                <i className='fal fa-level-up text-white f16 '></i>
                                            </div>
                                        </Col>
                                    </div>
                                    <div className='text-white f16 pt-5'>Checkup Now</div>
                                    <div className='text-white f22'>105  <span className='f16 ps-3'>bmp</span></div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                    <div className='d-flex'>
                        <Col md={6} className='pe-lg-3 pt-4'>
                            <Card className={`${styles1.card3}  ${styles1.font}`}>
                                <Card.Body>
                                    <div className='d-flex align-items-center'>
                                        <Col md={2}>
                                            <div className={`${styles1.bgicon4} text-center pt-2 pb-2`}>
                                                <i className='fal fa-heartbeat theme14 f16 '></i>
                                            </div>
                                        </Col>
                                        <Col md={8} className='ps-3'>
                                            <div className={`theme14 font-weight-600 f18 ${styles1.font}`}>Glucose</div>
                                        </Col>
                                        <Col md={2}>
                                            <div className={`${styles1.bgicon3} text-center pt-2 pb-2`}>
                                                <i className='fal fa-level-up theme14 f16'></i>
                                            </div>
                                        </Col>
                                    </div>
                                    <div className='theme14 f18 pt-5'>Normal</div>
                                    <div className='theme14 f22 font-weight-600'>100  <span className='f16 ps-3 theme12 font-weight-500'>mg/dL</span></div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className='pe-lg-3 pt-4'>
                            <Card className={`${styles1.card3}  ${styles1.font}`}>
                                <Card.Body>
                                    <div className='d-flex align-items-center'>
                                        <Col md={2}>
                                            <div className={`${styles1.bgicon4} text-center pt-2 pb-2`}>
                                                <span className={styles1.iconclr}> <i class="fal fa-thermometer-quarter theme14 f16"></i></span>
                                            </div>
                                        </Col>
                                        <Col md={8} className='ps-3'>
                                            <div className={`theme14 font-weight-600 f18 ${styles1.font}`}>Temp</div>
                                        </Col>
                                        <Col md={2} className='text-center'>
                                            <div className={`${styles1.bgicon3} pt-2 pb-2`}>
                                                <i className='fal fa-level-up theme14 f16'></i>
                                            </div>
                                        </Col>
                                    </div>
                                    <div className='theme14 f18 pt-5'>Normal</div>
                                    <div className='theme14 f22 font-weight-600'>97.5  <span className='f16 ps-3 theme12 font-weight-500'>F</span></div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>

                    <div className='d-flex'>
                    <Col md={6} className='pe-lg-3 pt-4'>
                        <Card className={`${styles1.card3}  ${styles1.font}`}>
                            <Card.Body>
                                <div className='d-flex align-items-center'>
                                    <Col md={2}>
                                        <div className={`${styles1.bgicon5} text-center pt-2 pb-2`}>
                                           <span className={styles1.iconclr1}><i className='fal fa-thermometer-quarter theme14 f16 '></i></span>
                                        </div>
                                    </Col>
                                    <Col md={8} className='ps-3'>
                                        <div className={`theme14 font-weight-600 f18 ${styles1.font}`}>Spo2</div>
                                    </Col>
                                    <Col md={2}>
                                        <div className={`${styles1.bgicon3} text-center pt-2 pb-2`}>
                                            <i className='fal fa-level-up theme14 f16'></i>
                                        </div>
                                    </Col>
                                </div>
                                <div className='theme14 f18 pt-5'>Normal</div>
                                <div className='theme14 f22 font-weight-600'>99  <span className='f16 ps-3 theme12 font-weight-500'>%</span></div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className='pe-lg-3 pt-4'>
                        <Card className={`${styles1.card3}  ${styles1.font}`}>
                            <Card.Body>
                                <div className='d-flex align-items-center'>
                                    <Col md={2}>
                                        <div className={`${styles1.bgicon6} text-center pt-2 pb-2`}>
                                            <span className={styles1.iconclr2}> <i class="fal fa-thermometer-quarter theme14 f16"></i></span>
                                        </div>
                                    </Col>
                                    <Col md={8} className='ps-3'>
                                        <div className={`theme14 font-weight-600 f18 ${styles1.font}`}>Respiratory rate</div>
                                    </Col>
                                    <Col md={2} className='text-center'>
                                        <div className={`${styles1.bgicon3} pt-2 pb-2`}>
                                            <i className='fal fa-level-up theme14 f16'></i>
                                        </div>
                                    </Col>
                                </div>
                                <div className='theme14 f18 pt-5'>Normal</div>
                                <div className='theme14 f22 font-weight-600'>97.5  <span className='f16 ps-3 theme12 font-weight-500'>F</span></div>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>

                <div className='d-flex'>
                <Col md={6} className='pe-lg-3 pt-4'>
                    <Card className={`${styles1.card3}  ${styles1.font}`}>
                        <Card.Body>
                            <div className='d-flex align-items-center'>
                                <Col md={2}>
                                    <div className={`${styles1.bgicon7} text-center pt-2 pb-2`}>
                                       <span className={styles1.iconclr1}><i className='fa fa-male theme14 f16 '></i></span>
                                    </div>
                                </Col>
                                <Col md={8} className='ps-3'>
                                    <div className={`theme14 font-weight-600 f18 ${styles1.font}`}>Height / Weight</div>
                                </Col>
                                <Col md={2}>
                                    <div className={`${styles1.bgicon3} text-center pt-2 pb-2`}>
                                        <i className='fal fa-level-up theme14 f16'></i>
                                    </div>
                                </Col>
                            </div>
                            <div className='theme14 f18 pt-5'>Normal</div>
                            <div className='theme14 f22 font-weight-600'>94  <span className='f16 ps-3 theme12 font-weight-500'>Kg</span> <span className='f22 ps-4 theme14 font-weight-500'>5.4</span><span className='f16 ps-3 theme12 font-weight-500'>ft</span></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className='pe-lg-3 pt-4'>
                    <Card className={`${styles1.card3}  ${styles1.font}`}>
                        <Card.Body>
                            <div className='d-flex align-items-center'>
                                <Col md={2}>
                                    <div className={`${styles1.bgicon8} text-center pt-2 pb-2`}>
                                        <span> <i class="fal fa-thermometer-quarter theme14 f16"></i></span>
                                    </div>
                                </Col>
                                <Col md={8} className='ps-3'>
                                    <div className={`theme14 font-weight-600 f18 ${styles1.font}`}>Body mass index</div>
                                </Col>
                                <Col md={2} className='text-center'>
                                    <div className={`${styles1.bgicon3} pt-2 pb-2`}>
                                        <i className='fal fa-level-up theme14 f16'></i>
                                    </div>
                                </Col>
                            </div>
                            <div className='theme14 f18 pt-5'>Obesity</div>
                            <div className='theme14 f22 font-weight-600'>38  <span className='f16 ps-3 theme12 font-weight-500'>Kg/m2</span></div>
                        </Card.Body>
                    </Card>
                </Col>
            </div>

            <div className='d-flex'>
            <Col md={6} className='pe-lg-3 pt-4'>
                <Card className={`${styles1.card3}  ${styles1.font}`}>
                    <Card.Body>
                        <div className='d-flex align-items-center'>
                            <Col md={2}>
                                <div className={`${styles1.bgicon9} text-center pt-2 pb-2`}>
                                   <span className={styles1.iconclr3}><i className='fal fa-vial theme14 f16 '></i></span>
                                </div>
                            </Col>
                            <Col md={8} className='ps-3'>
                                <div className={`theme14 font-weight-600 f18 ${styles1.font}`}>Tubes</div>
                            </Col>
                            <Col md={2}>
                                <div className={`${styles1.bgicon3} text-center pt-2 pb-2`}>
                                    <i className='fal fa-level-up theme14 f16'></i>
                                </div>
                            </Col>
                        </div>
                        <div className='theme14 f18 pb-5 pt-4 mt-2'>1.Rice Tube - Since 5 days</div>
                         </Card.Body>
                </Card>
            </Col>
            <Col md={6} className='pe-lg-3 pt-4'>
                <Card className={`${styles1.card3}  ${styles1.font}`}>
                    <Card.Body>
                        <div className='d-flex align-items-center'>
                            <Col md={2}>
                                <div className={`${styles1.bgicon10} text-center pt-2 pb-2`}>
                                    <span className={styles1.iconclr4}> <i class="fal fa-tint theme14 f16"></i></span>
                                </div>
                            </Col>
                            <Col md={8} className='ps-3'>
                                <div className={`theme14 font-weight-600 f18 ${styles1.font}`}>Fluids</div>
                            </Col>
                            <Col md={2} className='text-center'>
                                <div className={`${styles1.bgicon3} pt-2 pb-2`}>
                                    <i className='fal fa-level-up theme14 f16'></i>
                                </div>
                            </Col>
                        </div>
                        <div className='theme14 f18 pt-4'>1.NS 150</div>
                        <div className='theme14 f18 pb-4'>2.Paracetamol 1000mg </div>
                         </Card.Body>
                </Card>
            </Col>
        </div>


        <div className='d-flex'>
        <Col md={6} className='pe-lg-3 pt-4'>
            <Card className={`${styles1.card3}  ${styles1.font}`}>
                <Card.Body>
                    <div className='d-flex align-items-center'>
                        <Col md={2}>
                            <div className={`${styles1.bgicon11} text-center pt-2 pb-2`}>
                               <span className={styles1.iconclr5}><i className='fal fa-vial theme14 f16 '></i></span>
                            </div>
                        </Col>
                        <Col md={8} className='ps-3'>
                            <div className={`theme14 font-weight-600 f18 ${styles1.font}`}>Immunisation</div>
                        </Col>
                        <Col md={2}>
                            <div className={`${styles1.bgicon3} text-center pt-2 pb-2`}>
                                <i className='fal fa-level-up theme14 f16'></i>
                            </div>
                        </Col>
                    </div>
                    <div className='theme14 f18 pt-4 '>1.Covaxin (2 Doses)</div>
                    <div className='theme14 f18 pb-4 '>2. Cold flue (1 Doses)</div>
                     </Card.Body>
            </Card>
        </Col>
        <Col md={6} className='pe-lg-3 pt-4'>
            <Card className={`${styles1.card3}  ${styles1.font}`}>
                <Card.Body>
                    <div className='d-flex align-items-center'>
                        <Col md={2}>
                            <div className={`${styles1.bgicon11} text-center pt-2 pb-2`}>
                                <span className={styles1.iconclr5}> <i class="fal fa-disease theme14 f16"></i></span>
                            </div>
                        </Col>
                        <Col md={8} className='ps-3'>
                            <div className={`theme14 font-weight-600 f18 ${styles1.font}`}>Existing Conditions</div>
                        </Col>
                        <Col md={2} className='text-center'>
                            <div className={`${styles1.bgicon3} pt-2 pb-2`}>
                                <i className='fal fa-level-up theme14 f16'></i>
                            </div>
                        </Col>
                    </div>
                    <div className='theme14 f18 pt-4'>1.Hypertension</div>
                    <div className='theme14 f18 pb-3'>2.Diabetes </div>
                     </Card.Body>
            </Card>
        </Col>
    </div>
    <div className='d-flex'>
    <Col md={6} className='pe-lg-3 pt-4'>
        <Card className={`${styles1.card3}  ${styles1.font}`}>
            <Card.Body>
                <div className='d-flex align-items-center'>
                    <Col md={2}>
                        <div className={`${styles1.bgicon12} text-center pt-2 pb-2`}>
                           <span className={styles1.iconclr5}><i className='fal fa-flask theme14 f16 '></i></span>
                        </div>
                    </Col>
                    <Col md={8} className='ps-3'>
                        <div className={`theme14 font-weight-600 f18 ${styles1.font}`}>Lab investigations</div>
                    </Col>
                    <Col md={2}>
                        <div className={`${styles1.bgicon3} text-center pt-2 pb-2`}>
                            <i className='fal fa-level-up theme14 f16'></i>
                        </div>
                    </Col>
                </div>
                <ul>
                <li className='theme14 f18 pt-4 '>Electrocardiogram </li>
                <li className='theme14 f18  '>Blood tests. </li>
                <li className='theme14 f18 pb-0'>Skull X-ray</li>
                </ul>
                 </Card.Body>
        </Card>
    </Col>
    <Col md={6} className='pe-lg-3 pt-4'>
        <Card className={`${styles1.card3}  ${styles1.font}`}>
            <Card.Body>
                <div className='d-flex align-items-center'>
                    <Col md={2}>
                        <div className={`${styles1.bgicon11} text-center pt-2 pb-2`}>
                            <span className={styles1.iconclr5}> <i class="fal fa-flask theme14 f16"></i></span>
                        </div>
                    </Col>
                    <Col md={8} className='ps-3'>
                        <div className={`theme14 font-weight-600 f18 ${styles1.font}`}>Final Diagnosis</div>
                    </Col>
                    <Col md={2} className='text-center'>
                        <div className={`${styles1.bgicon3} pt-2 pb-2`}>
                            <i className='fal fa-level-up theme14 f16'></i>
                        </div>
                    </Col>
                </div>
                <ul>
                <li className='theme14 f18 pt-4 pb-5'>Dacryocystitis</li>
                </ul>
                 </Card.Body>
        </Card>
    </Col>
</div>
                </Col>
            </div>
        </React.Fragment>
    )
}

export default InitialAssessment