import React from "react";
import { Button, Row, Col, Card, Form, Table } from "react-bootstrap";
import Image from "next/image";
import styles from "../../../styles/admin/prescription.module.scss";
import Logo2 from "../../../public/images/image472.jpg";
import Logo3 from "../../../public/images/image21.jpg";
const Prescription_edit = () => {
  return (
    <React.Fragment>
      <div className="px-5">
        <div className={styles.pt_6}>
          <div className="d-flex mb-4 mt-4 align-items-center">
            <Col md={8} xl={10}>
              <div className="d-flex ">
                <div>
                  <i className="fal fa-arrow-right"></i>
                </div>
                <div className="px-2">New Template</div>
              </div>
            </Col>
            <Col md={4} xl={2} className="text-end">
              <div className="d-flex">
                <div className="mx-4">
                  <Button className={styles.activate}>Activate</Button>
                </div>
                <div>
                  <Button className={styles.save}>Save</Button>
                </div>
              </div>
            </Col>
          </div>
        </div>
        <Card>
          <div className="d-xl-flex d-lg-flex  ">
            <Col md={12} lg={4} xl={4} xs={12} sm={12}>
              <div className={`px-4 py-3 ${styles.f_500}`}>Edit Template</div>
              <div className={`${styles.ht_60} ${styles.f_500} px-4 py-3`}>
                Dr Name
              </div>
              <Form className="px-4 mt-3 mb-4 py-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f13 ">Title font</Form.Label>
                  <Form.Select className={styles.w_70}>
                    <option> select</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f13 ">
                    Title Font Color
                  </Form.Label>
                  <Form.Select className={styles.w_70}>
                    <option> select</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f13 ">
                    Description font
                  </Form.Label>
                  <Form.Select className={styles.w_70}>
                    <option> select</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f13 ">
                    Description Font Color
                  </Form.Label>
                  <Form.Select className={styles.w_70}>
                    <option> select</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f13 ">
                    Background Color
                  </Form.Label>
                  <Form.Select className={styles.w_70}>
                    <option> select</option>
                  </Form.Select>
                </Form.Group>
              </Form>
              <div className="text-end">
                <div className="d-flex justify-content-end px-4">
                  <div className="mx-2">
                    <Button className={styles.activate}>Cancel</Button>
                  </div>
                  <div>
                    <Button className={styles.save}>save</Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              md={12}
              lg={8}
              xl={8}
              xs={12}
              sm={12}
              className={`${styles.bdr2} mb-4`}
            >
              <div className="d-flex">
                <Col md={2}>
                  <Image
                    src={Logo2}
                    width="100%"
                    height="105"
                    alt="logo"
                    className={styles.img1}
                  />
                </Col>
                <Col md={10}>
                  <div class={`${styles.headbg} text-left`}>
                    <div class="f-600">Dr.Angus MacGyver</div>
                    <div class="f13">M.B.B.S., M.D., M.S.,</div>
                    <div class="f13">
                      Reg No: TS123986 | HPR ID. anug_23@hpr
                    </div>
                    <div class="f13">Contact No: +91 9966996699</div>
                  </div>
                </Col>
              </div>
              <div className={`d-flex ${styles.bg1} ${styles.pad1}`}>
                <Col md={8}>
                  <div class="f14">
                    <span>Patient Name</span>:{" "}
                    <span class="font-weight-600"> Shanthi, F 56</span>
                  </div>
                  <div class="f14">
                    <span>Patient ID</span>:{" "}
                    <span class="font-weight-600"> OP0034188</span>
                  </div>
                  <div class="f14">
                    <span>Contact number</span>:{" "}
                    <span class="font-weight-600"> 9876543210</span>
                  </div>
                </Col>
                <Col md={4} className="text-end">
                  <div class="f14">
                    <span>Date</span>:{" "}
                    <span class="font-weight-600"> 02-Jan-2023</span>
                  </div>
                </Col>
              </div>
              <div className="font-weight-600 f14 mt-3 mb-3 px-4">
                Vital Signs
              </div>
              <div
                className={`d-flex justify-content-between px-2 py-2 ${styles.bdr1}`}
              >
                <div>
                  <div className="theme12 f14">TEMPERATURE</div>
                  <div>100F</div>
                </div>
                <div>
                  <div className="theme12 f14">BLOOD PRESSURE</div>
                  <div>168 / 98 mmHg</div>
                </div>
                <div>
                  <div className="theme12 f14">PULSE RATE</div>
                  <div>90 bpm</div>
                </div>
                <div>
                  <div className="theme12 f14">RESPIRATION</div>
                  <div>20 bpm</div>
                </div>
                <div>
                  <div className="theme12 f14">O2 SATURATION </div>
                  <div>97%</div>
                </div>
              </div>
              <div className="px-4 mx-2 mt-3">
                <h5 className="font-weight-600 mb-0 mt-0 f14">
                  Chief Complaints
                </h5>
                <ul className={styles.pl_18}>
                  <li className={`${styles.siteclr2} f14`}>
                    Complains of fever for 8 days
                  </li>
                </ul>
              </div>
              <div className="px-4 mx-2 mt-3">
                <h5 className="font-weight-600 mb-0 f14">
                  Provisional Diagnosis
                </h5>
                <ul className={styles.pl_18}>
                  <li className={`${styles.siteclr2} f14`}>
                    Chest pain with features of angina pectoris
                  </li>
                </ul>
              </div>
              <div className="px-4 mx-2 mt-3">
                <div className="f14 font-weight-600">
                  History Of Present Illness
                </div>
                <p className={`${styles.siteclr2} f13`}>
                  This is the first admission for this 56 year old woman, who
                  states she was in her usual state of good health until one
                  week prior to admission. At that time she noticed the abrupt
                  onset (over a few seconds to a minute) of chest pain which she
                  describes as dull and aching in character. The pain began in
                  the left parasternal area and radiated up to her neck. The
                  first episode of pain one week ago occurred when she was
                  working in her garden in the middle of the. She states she had
                  been working for approximately 45 minutes and began to feel
                  tired before the onset of the pain. Her discomfort was
                  accompanied by shortness of breath, but no sweating, nausea,
                  or vomiting. The pain lasted approximately 5 to 10 minutes and
                  resolved when she went inside and rested in a cool area.
                </p>

                <div className=" mt-3">
                  <h5 className="font-weight-600 mb-0 f14">
                    Past Medical History
                  </h5>
                  <ul className={styles.pl_18}>
                    <li className={`${styles.siteclr2} f14`}>
                      1994: Total abdominal hysterectomy and bilateral
                      oophorectomy for uterine fibroids.
                    </li>
                    <li className={`${styles.siteclr2} f14`}>
                      1998: Bunionectomy
                    </li>
                  </ul>
                </div>

                <div className=" mt-3">
                  <h5 className="font-weight-600 mb-0 f14">Medical History</h5>
                  <ul className={styles.pl_18}>
                    <li className={`${styles.siteclr2} f14`}>
                      1998: Diagnosed with hypertension and began on unknown
                      medication. Stopped after 6 months because of drowsiness.
                    </li>
                    <li className={`${styles.siteclr2} f14`}>
                      1990: Diagnosed with peptic ulcer disease, which resolved
                      after three months on cimetidine. She describes no history
                      of cancer, lung disease or previous heart disease.
                    </li>
                  </ul>
                </div>

                <div className=" mt-3">
                  <h5 className="font-weight-600 mb-0 f14">Allergy</h5>
                  <ul className={styles.pl_18}>
                    <li className={`${styles.siteclr2} f14`}>
                      Penicillin - experienced rash and hives in 1985.
                    </li>
                  </ul>
                </div>

                <div className=" mt-3">
                  <h5 className="font-weight-600 mb-0 f14">Habits</h5>
                  <ul className={styles.pl_18}>
                    <li className={`${styles.siteclr2} f14`}>
                      Alcohol use: 1 or 2 beers each weekend; 1 glass of wine
                      once a week with dinner.
                    </li>
                    <li className={`${styles.siteclr2} f14`}>
                      Tobacco use: None.
                    </li>
                  </ul>
                </div>

                <div className=" mt-3">
                  <h5 className="font-weight-600 mb-0 f14">Medications</h5>
                  <ul className={styles.pl_18}>
                    <li className={`${styles.siteclr2} f14`}>
                      No prescription or illegal drug use.
                    </li>
                    <li className={`${styles.siteclr2} f14`}>
                      Occasional OTC ibuprofen (Advil) for headache (QOD).
                    </li>
                  </ul>
                </div>

                <div className=" mt-3">
                  <h5 className="font-weight-600 mb-0 f14">Musculoskeletal</h5>
                  <ul className={styles.pl_18}>
                    <li className={`${styles.siteclr2} f14`}>
                      She complains of lower back pain, aching in quality,
                      approximately once every week after working in her garden.
                      This pain is usually relieved with Tylenol. She complains
                      of no other arthralgias, muscle aches, or pains.
                    </li>
                  </ul>
                </div>

                <div className=" mt-3">
                  <h5 className="font-weight-600 mb-0 f14">Neurological</h5>
                  <ul className={styles.pl_18}>
                    <li className={`${styles.siteclr2} f14`}>
                      She complains of no weakness, numbness, or incoordination.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`d-flex ${styles.bg1} ${styles.pad1}`}>
                <div className="px-3 mt-3">
                  <h5 className="font-weight-600 mb-0 f14">Investigations</h5>
                  <ul className={styles.pl_18}>
                    <li className={`${styles.siteclr2} f14`}>
                      Electrocardiogram (ECG or EKG).
                    </li>
                    <li className={`${styles.siteclr2} f14`}>Blood tests.</li>
                    <li className={`${styles.siteclr2} f14`}>Chest X-ray.</li>
                    <li className={`${styles.siteclr2} f14`}>
                      Computerized tomography (CT) scan.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="px-4 mx-3 mt-3">
                <h5 className="font-weight-600 mb-0 f14">Final Diagnosis</h5>
                <ul className={styles.pl_18}>
                  <li className={`${styles.siteclr2} f14`}>
                    Chest pain with features of angina pectoris
                  </li>
                </ul>
              </div>
              <div className="px-3 mb-4">
                <Table
                  striped
                  className={` ${styles.border_spacing} ${styles.border_none}`}
                >
                  <thead className="p-2">
                    <tr style={{ borderTop: "1px solid" }}>
                      <th className={`${styles.headingfont} font-weight-600`}>
                        <b>Medicine</b>
                      </th>
                      <th className={`${styles.headingfont} font-weight-600`}>
                        <b>Frequency</b>
                      </th>
                      <th className={`${styles.headingfont} font-weight-600`}>
                        <b>Timings </b>
                      </th>
                      <th className={`${styles.headingfont} font-weight-600`}>
                        <b>Duration </b>
                      </th>
                      <th className={`${styles.headingfont} font-weight-600`}>
                        <b>Start From </b>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={`f14 font-weight-600 ${styles.p_7}`}>
                        1. CARIPAPA TABLET
                      </td>
                      <td className={`f14  ${styles.p_7}`}>1-0-1</td>
                      <td className={`f14  ${styles.p_7}`}>After meals</td>
                      <td className={`f14  ${styles.p_7}`}>7 Days</td>
                      <td className={`f14  ${styles.p_7}`}>From day 1</td>
                    </tr>
                    <tr>
                      <td className="f14 font-weight-600">
                        2. VITAMIN C PLUS NEW SUGAR FREE ORANGE FLAVOUR Chewable
                        Tablet
                      </td>
                      <td className={`f14  ${styles.p_7}`}>1-0-1</td>
                      <td className={`f14  ${styles.p_7}`}>After meals</td>
                      <td className={`f14  ${styles.p_7}`}>7 Days</td>
                      <td className={`f14  ${styles.p_7}`}>From day 1</td>
                    </tr>
                    <tr>
                      <td className="f14 font-weight-600">
                        3. PARACETAMOL(ABBOTT) 650mg Tablet FLAVOUR Chewable
                        Tablet
                      </td>
                      <td className={`f14  ${styles.p_7}`}>1-0-1</td>
                      <td className={`f14  ${styles.p_7}`}>After meals</td>
                      <td className={`f14  ${styles.p_7}`}>7 Days</td>
                      <td className={`f14  ${styles.p_7}`}>From day 1</td>
                    </tr>
                  </tbody>
                </Table>

                <div className={`${styles.bg2} ${styles.pad1}`}>
                  <div className="mb-3">
                    <h5 class="font-weight-600 mb-0 f14">Note:</h5>
                    <div class="f14">
                      Come after 5 days if fever doesn't subside
                    </div>
                    <div class="f14">
                      In case fever greater than 102 F or or fever not
                      responding to paracetamol
                    </div>
                    <h5 class="font-weight-600 mb-0 f14 mt-4">Advice:</h5>
                    <div class="f14">Eat balanced diet rich in nutrients.</div>
                  </div>
                </div>
              </div>

              <div className="d-flex mt-2 px-4 mb-4 align-items-end">
                <Col md={8}>
                  <Image src={Logo3} alt="Image" className={styles.imgwdth1} />
                </Col>
                <Col md={4} className="text-end">
                  <div>Dr.Angus MacGyver</div>
                </Col>
              </div>
              <div className={`mt-2 ${styles.bdr3}`}></div>
              <div className="text-center">
                <div className={`${styles.siteclr3} mt-2 f14 font-weight-600`}>
                  New Indiv Clinic
                </div>
                <div className={`${styles.siteclr4} f13 `}>
                  Metro Pillar Number C1775, 18, Hitech City Rd, HUDA Techno
                  Enclave, HITEC City, Hyd, TS-81
                </div>
                <div className={`${styles.siteclr4} f13 `}>
                  Ph: +91 9966332214,
                </div>
                <div className={`${styles.siteclr4} f13 `}>
                  Timings: 09:00 Am - 09:00 PM
                </div>
              </div>
            </Col>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Prescription_edit;
