import React from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap'
import Image from 'next/image';
import Logo1 from '../../public/images/overviewicon1.svg'
import Logo2 from '../../public/images/overviewicon2.svg'
import Logo3 from '../../public/images/overviewicon3.svg'
import Logo4 from '../../public/images/overviewicon4.svg'
import Logo5 from '../../public/images/smoking.svg'
import Logo6 from '../../public/images/alcohol.svg'
import Logo7 from '../../public/images/tobacco.svg'
import Logo8 from '../../public/images/overviewicon5.svg'
import Logo9 from '../../public/images/overviewicon6.svg'
import Logo10 from '../../public/images/overviewicon7.svg'
import Logo11 from '../../public/images/usericon1.svg'
import Logo12 from '../../public/images/arrowicon.svg'
import Logo13 from '../../public/images/usericon2.svg'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styles from '../../styles/Prescription.module.scss';
const PatientOverview = () => {
  const options5 = {
    chart: {
      type: 'line',
    },
    title: {
      text: '',
    },
    credits: {
      enabled: false // Disable the highcharts.com label
    },
    plotOptions: {
      series: {
        lineColor: '#000000', // Set the line color
        color: '#0030CC', // Set the dot color
        marker: {
          fillColor: '#0030CC', // Set the dot color
        },
      },
    },
    legend: {
      enabled: false, // Hide the legend
    },
    xAxis: {
      labels: {
        style: {
          color: '#898989', // Set the desired color for x-axis labels
          fontSize: '12px',
        },
      },
      categories: ['14Jun', '15Jun', '16Jun', '17Jun', '18Jun', '19Jun', '20Jun'], // Set the desired categories for the x-axis
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    series: [
      {
        name: 'Series 1',
        data: [5, 10, 15, 58, 45, 35, 20],
      },
    ],
  };
  return (
    <div>
      <div className="mt-2 mb-2 f14 font-weight-600 theme14">Overview</div>
      <Row>
        <Col md={3}>
          <Card className={`brnone ${styles.shadowbox}`}>
            <Card.Body className='pb-0'>
              <div className='d-flex align-items-center mb-3'>
                <div className='col-md-6'>
                  <Image src={Logo1} alt="" width={30} height={30}></Image>
                  <span className='font-weight-600 f14 ps-2'>Vitals</span>
                </div>
                <div className='col-md-6'>
                  <Form.Select className={styles.selectwdth}>
                    <option>Heart Rate</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </div>
              <div id="chart3"></div>
              <HighchartsReact highcharts={Highcharts} options={options5} style={{ height: "300px" }} />
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className={`brnone ${styles.shadowbox} ${styles.min95}`}>
            <Card.Body>
              <div className='d-flex align-items-center'>
                <div><Image src={Logo2} alt="" width={30} height={30}></Image></div>
                <div className='font-weight-600 f14 ps-2'> Existing Conditions</div>
              </div>
              <ol className={`ps-3 ${styles.ln24} mt-2`}>
                <li className='f14'>Hypertension (diagnosed 5 years ago)</li>
                <li className='f14'> Type 2 Diabetes (diagnosed 7 years ago)</li>
                <li className='f14'>Hyperlipidemia (high cholesterol levels)</li>
                <li className='f14'> Asthma (since childhood)</li>
                <li className='f14'> Osteoarthritis (knee joints)</li>
                <li className='f14'> Gastroesophageal Reflux Disease (GERD) </li>
                <li className='f14'>Chronic Kidney Disease (Stage 3) </li>
                <li className='f14'> Depression (diagnosed 2 years ago) </li>
                <li className='f14'> Hypothyroidism (diagnosed 10 years ago) </li>
                <li className='f14'>Obesity (BMI of 32) </li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className={`brnone ${styles.shadowbox} ${styles.min95}`}>
            <Card.Body>
              <div className='d-flex align-items-center'>
                <div><Image src={Logo3} alt="" width={30} height={30}></Image></div>
                <div className='font-weight-600 f14 ps-2'> Medication History</div>
              </div>
              <ol className={`ps-3 ${styles.ln24} mt-2`}>
                <li className='f14'> Lisinopril - for hypertension</li>
                <li className='f14'> Metformin - for diabetes.</li>
                <li className='f14'> Atorvastatin - for hyperlipidemia</li>
                <li className='f14'> Albuterol inhaler - for asthma</li>
                <li className='f14'>  Ibuprofen - for knee pain (as needed)</li>
                <li className='f14'> Gastroesophageal Reflux Disease (GERD) </li>
                <li className='f14'>Chronic Kidney Disease (Stage 3) </li>
                <li className='f14'> Depression (diagnosed 2 years ago) </li>
                <li className='f14'> Hypothyroidism (diagnosed 10 years ago) </li>
                <li className='f14'>Obesity (BMI of 32) </li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className={`brnone ${styles.shadowbox} ${styles.min45}`}>
            <Card.Body>
              <div className='d-flex align-items-center'>
                <div><Image src={Logo4} alt="" width={30} height={30}></Image></div>
                <div className='font-weight-600 f14 ps-2'> Habits</div>
              </div>
              <div className='d-flex align-items-center mt-3'>
                <Col md={4} xl={4} sm={6} xs={12}>
                  <Image src={Logo5} alt="" width={40} height={40} />
                  <div className='f14'>Cigarette</div>
                </Col>
                <Col md={4} xl={4} sm={6} xs={12}>
                  <Image src={Logo6} alt="" width={40} height={40} />
                  <div className='f14'>Alcohol</div>
                </Col>
                <Col md={4} xl={4} sm={6} xs={12}>
                  <Image src={Logo7} alt="" width={40} height={40} />
                  <div className='f14'>Tobacco</div>
                </Col>
              </div>
            </Card.Body>
          </Card>
          <Card className={`brnone ${styles.shadowbox} ${styles.min45} mt-3`}>
            <Card.Body>
              <div className='d-flex align-items-center'>
                <div><Image src={Logo8} alt="" width={30} height={30}></Image></div>
                <div className='font-weight-600 f14 ps-2'> Family History</div>
              </div>
              <ol className={`ps-3 ${styles.ln24} mt-2`}>
                <li className='f14'>Hypertension</li>
                <li className='f14'>Diabetes </li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className={`brnone ${styles.shadowbox} ${styles.min45}`}>
            <Card.Body>
              <div className='d-flex align-items-center'>
                <div><Image src={Logo9} alt="" width={30} height={30}></Image></div>
                <div className='font-weight-600 f14 ps-2'> Surgical History</div>
              </div>
              <ol className={`ps-3 ${styles.ln24} mt-2`}>
                <li> Knee Arthroscopy - performed 3 years ago to address knee pain due to osteoarthritis.</li>
                <li>Laparoscopic Cholecystectomy - performed 4 years ago to remove the gallbladder due to gallstones.</li>
                <li> Appendectomy - performed 15 years ago due to acute appendicitis. </li>
                <li> Tonsillectomy - performed in childhood due to recurrent tonsillitis.</li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='brnone'>
            <Card.Body>
              <div className='d-flex align-items-center'>
                <div><Image src={Logo10} alt="" width={30} height={30}></Image></div>
                <div> Immunisation</div>
              </div>
              <ol>
                <li>Influenza vaccine - received annually.</li>
                <li> Tetanus vaccine - last received 5 years ago.</li>
                <li> Pneumococcal vaccine - last received 3 years ago.</li>
                <li> Hepatitis B vaccine - completed series 10 years ago.</li>
                <li> Measles, mumps, and rubella (MMR) vaccine - received in childhood.</li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='brnone'>
            <Card.Body>
              <div className='d-flex align-items-center'>
                <div><Image src={Logo9} alt="" width={30} height={30}></Image></div>
                <div> Allergies</div>
              </div>
              <ol>
                <li>Penicillin - experienced an allergic reaction in childhood.</li>
                <li> Shellfish - causes mild allergic reactions (rash and itching).
                </li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <div>OP - Past Visits</div>
          <div className='d-flex'>
            <Col md={6}>
              <Card className='brnone'>
                <Card.Body>
                  <div className='d-flex align-items-center'>
                    <Col md={2} className='mt-2'>
                      <Image src={Logo11} alt="" width={30} height={30} />
                    </Col>
                    <Col md={8} className='ps-3 mt-2'>
                      <div className={`theme14 font-weight-600 f16 `}>Covid Flu </div>
                    </Col>
                    <Col className={`text-center  mb-3`}>
                      <Image src={Logo12} alt="" width={30} height={30} />
                    </Col>
                  </div>
                  <div className={`theme12  ps-3 f14`}>Visit : 23rd Jan, 2023</div>
                  <div className={`theme14  ps-3 f14 font-weight-600`}>Dr Ramoni roy</div>
                  <div className={`theme12  mt-2 ps-3 f14`}>M.B.B.S, MD, Nuero Surgeon </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className='brnone'>
                <Card.Body>
                  <div className='d-flex align-items-center'>
                    <Col md={2} className='mt-2'>
                      <Image src={Logo11} alt="" width={30} height={30} />
                    </Col>
                    <Col md={8} className='ps-3 mt-2'>
                      <div className={`theme14 font-weight-600 f16 `}>Viral Flu </div>
                    </Col>
                    <Col className={`text-center  mb-3`}>
                      <Image src={Logo12} alt="" width={30} height={30} />
                    </Col>
                  </div>
                  <div className={`theme12  ps-3 f14`}>Visit : 23rd Jan, 2023</div>
                  <div className={`theme14  ps-3 f14 font-weight-600`}>Dr Ramoni roy</div>
                  <div className={`theme12  mt-2 ps-3 f14`}>M.B.B.S, MD, Nuero Surgeon </div>
                </Card.Body>
              </Card>
            </Col>
          </div>
          <div className='d-flex'>
            <Col md={6}>
              <Card className='brnone'>
                <Card.Body>
                  <div className='d-flex align-items-center'>
                    <Col md={2} className='mt-2'>
                      <Image src={Logo11} alt="" width={30} height={30} />
                    </Col>
                    <Col md={8} className='ps-3 mt-2'>
                      <div className={`theme14 font-weight-600 f16 `}>Covid Flu </div>
                    </Col>
                    <Col className={`text-center  mb-3`}>
                      <Image src={Logo12} alt="" width={30} height={30} />
                    </Col>
                  </div>
                  <div className={`theme12  ps-3 f14`}>Visit : 23rd Jan, 2023</div>
                  <div className={`theme14  ps-3 f14 font-weight-600`}>Dr Ramoni roy</div>
                  <div className={`theme12  mt-2 ps-3 f14`}>M.B.B.S, MD, Nuero Surgeon </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className='brnone'>
                <Card.Body>
                  <div className='d-flex align-items-center'>
                    <Col md={2} className='mt-2'>
                      <Image src={Logo11} alt="" width={30} height={30} />
                    </Col>
                    <Col md={8} className='ps-3 mt-2'>
                      <div className={`theme14 font-weight-600 f16 `}>Viral Flu </div>
                    </Col>
                    <Col className={`text-center  mb-3`}>
                      <Image src={Logo12} alt="" width={30} height={30} />
                    </Col>
                  </div>
                  <div className={`theme12  ps-3 f14`}>Visit : 23rd Jan, 2023</div>
                  <div className={`theme14  ps-3 f14 font-weight-600`}>Dr Ramoni roy</div>
                  <div className={`theme12  mt-2 ps-3 f14`}>M.B.B.S, MD, Nuero Surgeon </div>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </Col>
        <Col md={4}>
          <div>IP - Past Visits</div>
          <div className='d-flex'>
            <Col md={6}>
              <Card className='brnone'>
                <Card.Body>
                  <div className='d-flex align-items-center'>
                    <Col md={2} className='mt-2'>
                      <Image src={Logo13} alt="" width={30} height={30} />
                    </Col>
                    <Col md={8} className='ps-3 mt-2'>
                      <div className={`theme14 font-weight-600 f16 `}>Covid Flu </div>
                    </Col>
                    <Col className={`text-center  mb-3`}>
                      <Image src={Logo12} alt="" width={30} height={30} />
                    </Col>
                  </div>
                  <div className={`theme12  ps-3 f14`}>Visit : 23rd Jan, 2023</div>
                  <div className={`theme14  ps-3 f14 font-weight-600`}>Dr Ramoni roy</div>
                  <div className={`theme12  mt-2 ps-3 f14`}>M.B.B.S, MD, Nuero Surgeon </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className='brnone'>
                <Card.Body>
                  <div className='d-flex align-items-center'>
                    <Col md={2} className='mt-2'>
                      <Image src={Logo13} alt="" width={30} height={30} />
                    </Col>
                    <Col md={8} className='ps-3 mt-2'>
                      <div className={`theme14 font-weight-600 f16 `}>Viral Flu </div>
                    </Col>
                    <Col className={`text-center  mb-3`}>
                      <Image src={Logo12} alt="" width={30} height={30} />
                    </Col>
                  </div>
                  <div className={`theme12  ps-3 f14`}>Visit : 23rd Jan, 2023</div>
                  <div className={`theme14  ps-3 f14 font-weight-600`}>Dr Ramoni roy</div>
                  <div className={`theme12  mt-2 ps-3 f14`}>M.B.B.S, MD, Nuero Surgeon </div>
                </Card.Body>
              </Card>
            </Col>
          </div>
          <div className='d-flex'>
            <Col md={6}>
              <Card className='brnone'>
                <Card.Body>
                  <div className='d-flex align-items-center'>
                    <Col md={2} className='mt-2'>
                      <Image src={Logo13} alt="" width={30} height={30} />
                    </Col>
                    <Col md={8} className='ps-3 mt-2'>
                      <div className={`theme14 font-weight-600 f16 `}>Covid Flu </div>
                    </Col>
                    <Col className={`text-center  mb-3`}>
                      <Image src={Logo12} alt="" width={30} height={30} />
                    </Col>
                  </div>
                  <div className={`theme12  ps-3 f14`}>Visit : 23rd Jan, 2023</div>
                  <div className={`theme14  ps-3 f14 font-weight-600`}>Dr Ramoni roy</div>
                  <div className={`theme12  mt-2 ps-3 f14`}>M.B.B.S, MD, Nuero Surgeon </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className='brnone'>
                <Card.Body>
                  <div className='d-flex align-items-center'>
                    <Col md={2} className='mt-2'>
                      <Image src={Logo13} alt="" width={30} height={30} />
                    </Col>
                    <Col md={8} className='ps-3 mt-2'>
                      <div className={`theme14 font-weight-600 f16 `}>Viral Flu </div>
                    </Col>
                    <Col className={`text-center  mb-3`}>
                      <Image src={Logo12} alt="" width={30} height={30} />
                    </Col>
                  </div>
                  <div className={`theme12  ps-3 f14`}>Visit : 23rd Jan, 2023</div>
                  <div className={`theme14  ps-3 f14 font-weight-600`}>Dr Ramoni roy</div>
                  <div className={`theme12  mt-2 ps-3 f14`}>M.B.B.S, MD, Nuero Surgeon </div>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </Col>
        <Col md={4}>
          <div>Medical Records</div>
          <Card className='brnone'>
            <Card.Body>
              <div className="theme15 px-2 mt-2 py-1">
                <Row>
                  <Col md={9}>
                    <div className="f11">
                      Document_name.pdf
                    </div>
                    <div className="f10 theme12">Prescription, Discharge summary, lab report, op consultation</div>
                    <div className="f10">Access granted</div>
                  </Col>
                  <Col md={3} className='text-end'>
                    <div className='d-flex'>
                      <div>
                        <div className="f10 theme12">Expiry on</div>
                        <div className="f10 mt-1">23-NOV-22</div>
                      </div>
                      <div className='ps-2'><i className="fal fa-external-link f13"></i></div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="theme15 px-2 mt-2 py-1">
                <Row>
                  <Col md={9}>
                    <div className="f11">
                      Document_name.pdf
                    </div>
                    <div className="f10 theme12">Lab report</div>
                    <div className="f10">Uploaded</div>
                  </Col>
                  <Col md={3} className='text-end'>
                    <div className='d-flex'>
                      <div>
                        <div className="f10 theme12">Uploaded on</div>
                        <div className="f10 mt-1">23-NOV-22</div>
                      </div>
                      <div className='ps-2'><i className="fal fa-external-link f13"></i></div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="theme15 px-2 mt-2 py-1">
                <Row>
                  <Col md={9}>
                    <div className="f11">
                      Document_name.pdf
                    </div>
                    <div className="f10 theme12">Lab report</div>
                    <div className="f10">Declined</div>
                  </Col>
                  <Col md={3} className='text-end'>
                    <div className='d-flex'>
                      <div>
                        <div className="f10 theme12"></div>
                        <div className="f10 mt-1">23-NOV-22</div>
                      </div>
                      <div className='ps-2'><i className="fal fa-external-link f13"></i></div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="theme15 px-2 mt-2 py-1">
                <Row>
                  <Col md={9}>
                    <div className="f11">
                      Document_name.pdf
                    </div>
                    <div className="f10 theme12">Lab report</div>
                    <div className="f10">Uploaded</div>
                  </Col>
                  <Col md={3} className='text-end'>
                    <div className='d-flex'>
                      <div>
                        <div className="f10 theme12">Uploaded on</div>
                        <div className="f10 mt-1">23-NOV-22</div>
                      </div>
                      <div className='ps-2'><i className="fal fa-external-link f13"></i></div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PatientOverview