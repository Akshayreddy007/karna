import React from 'react'
import styles1 from '../../styles/Prescription.module.scss'
import styles2 from '../../styles/Medicalrecordprint.module.scss'
import { Modal,Form,Row,Col,Button, Table } from 'react-bootstrap'
const MedicalRecordPrint = (props) => {
  return (
    <React.Fragment>
    <Modal size="lg"  {...props}>
      <Modal.Header closeButton className={`${styles1.services_border} brnone`}>
        <Modal.Title> medical record</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-3 py-2">
      <React.Fragment>
      <Table>
      <thead>
      <tr>
          <th className="p-0">
              <div className={`${styles2.theadbg} `}>
                  <div>Medical Records</div>
              </div>
          </th>
      </tr>
  </thead>
  <tbody>
  <tr>
  <td className="p-0">
      <div className={`${styles2.row} ${styles2.bg1} ${styles2.pad1}`}>
          <div className={styles2.column2}>
              <div className={styles2.f14}>
                  <span>
                      OP-ID
                  </span>
                  :
                  <span className={styles2.f_600}> MMOG42WPDONA</span>
              </div>
              <div className={styles2.f_600}>
                  <span>Name</span>
                  :
                  <span className={styles2.f_600}> Dodireddi Naga Sridevi</span>
              </div>
              <div className={styles2.f14}>
                  <span>Birth Date</span>
                  :
                  <span className={styles2.f_600}> 1991-04-09</span>
              </div>
              <div className={styles2.f14}>
                  <span>Gender</span>
                  :
                  <span className={styles2.f_600}> Female</span>
              </div>
              <div className={styles2.f14}>
                  <span>Health ID</span>
                  :
                  <span className={styles2.f_600}> sridevkbs@abx</span>
              </div>
          </div>
          <div className={styles2.column1}>
              <div className={styles2.f14}>
                  <div>Encounter</div>
                  <span>
                      Start Date :
                  </span>
                  <span className={styles2.f_600}>02-Jan-2023</span>
              </div>
              <div className={styles2.f14} style={{marginTop:"10px"}}>
                  <span>  Status:</span>
                  <span className={styles2.f_600}>Finished</span>
              </div>
          </div>
      </div>
  </td>
</tr>
<tr>
              <td className={styles2.pdlr}>
                  <div className={`${styles2.p2} ${styles2.bdrbtm}`}>
                      <div>Practitioner</div>
                      <div className={styles2.f_600}>Dr.Angus MacGyver</div>
                  </div>
              </td>
          </tr>
          <tr>
          <td className={styles2.pdlr}>
              <div className={`${styles2.p2} ${styles2.bdrbtm}`}>
                  <div>DocumentReference</div>
                  <div className={styles2.f_600}></div>
              </div>
          </td>
      </tr>
      <tr>
          <td className={styles2.pdlr}>
              <div className={`${styles2.p2} ${styles2.bdrbtm}`}>
                  <div>
                      Care Context Referenco ID:
                      <span className={styles2.f_600}>_g4T4nQXX8_hs3RU-RIU</span>
                  </div>
              </div>
          </td>
      </tr>
      <tr>
          <td className={styles2.pdlr}>
              <div className={`${styles2.p2} ${styles2.pb0}`}>
                  <div>Conditions</div>
              </div>
          </td>
      </tr>
      <tr>
      <td className={styles2.pdlr}>
          <div className={styles2.p2} id='id1'>
              <table className={styles2.table} style={{width:"100%"}}>
                  <thead className={`${styles2.bdrbtm} ${styles2.bdrtop} bg-white`}>
                      <tr className='bg-white'>
                          <th className={`text-left  ${styles2.ptb7}`}>SNo</th>
                          <th className="text-left">Value</th>
                      </tr>
                  </thead>
                  <tbody >
                      <tr >
                          <td className={`${styles2.f14} ${styles2.f_600} `}>1.</td>
                          <td className={styles2.f14}>Shy</td>
                      </tr>
                      <tr >
                          <td className={`${styles2.f14} ${styles2.f_600} `}>2.</td>
                          <td className={styles2.f14}>Shy</td>
                      </tr>
                      <tr>
                          <td className={`${styles2.f14} ${styles2.f_600} `}>3.</td>
                          <td className={styles2.f14}>Shy</td>
                      </tr>
                      <tr >
                          <td className={`${styles2.f14} ${styles2.f_600} `}>4.</td>
                          <td className={styles2.f14}>Shy</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </td>
  </tr>
  <tr>
              <td className={styles2.pdlr}>
                  <div  id="id1">
                      <div className={`${styles2.f_600} ${styles2.p2}`}>Observations</div>
                      <table className={styles2.table } style={{width:"100%"}}>
                          <thead className={`${styles2.bdrbtm} ${styles2.bdrtop} `}>
                              <tr className='bg-white'>
                                  <th className={`text-left ${styles2.ptb7}`}>Type</th>
                                  <th className="text-left">Value</th>
                                  <th className="text-left">Unit</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td  className={styles2.text_left}>Lody surlace temperature</td>
                                  <td  className={styles2.text_left}>99</td>
                                  <td  className={styles2.text_left}>
                                      degf
                                  </td>
                              </tr>
                              <tr>
                                  <td  className={styles2.text_left}>Oxygen saturation in Arteriol blood</td>
                                  <td  className={styles2.text_left}>0</td>
                                  <td  className={styles2.text_left}> %</td>
                              </tr>
                              <tr>
                                  <td  className={styles2.text_left}>Respiratory rate</td>
                                  <td  className={styles2.text_left}>99</td>
                                  <td  className={styles2.text_left}>breaths/minute</td>
                              </tr>
                              <tr>
                                  <td  className={styles2.text_left}> Heart rate</td>
                                  <td  className={styles2.text_left}>99</td>
                                  <td  className={styles2.text_left}>beats/minute</td>
                              </tr>
                              <tr>
                                  <td  className={styles2.text_left}>Blood pressure ponel with all children optional</td>
                                  <td  className={styles2.text_left}>0</td>
                                  <td  className={styles2.text_left}>cm</td>
                              </tr>
                              <tr>
                                  <td  className={styles2.text_left}>Body hmight</td>
                                  <td  className={styles2.text_left}>177</td>
                                  <td  className={styles2.text_left}>kg</td>
                              </tr>
                              <tr>
                                  <td  className={styles2.text_left}>Body weight measured</td>
                                  <td  className={styles2.text_left}>50</td>
                                  <td  className={styles2.text_left}>kg</td>
                              </tr>
                              <tr>
                                  <td  className={styles2.text_left}>Body mass in</td>
                                  <td  className={styles2.text_left}>120</td>
                                  <td className={styles2.text_left}>kg/m2</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </td>
          </tr>
  </tbody>
  </Table>
      </React.Fragment>
      </Modal.Body>
      <Modal.Footer>
        <Button className={`theme9 bg-white ${styles1.border_none}`}>
          Cancel
        </Button>
        <Button variant="primary" className={styles1.servicebtn}>
          Print
        </Button>
      </Modal.Footer>
    </Modal>
  </React.Fragment>
  )
}

export default MedicalRecordPrint