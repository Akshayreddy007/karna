import React, { useState } from "react";
import { Card, Button, Modal, Form, Table } from "react-bootstrap";
import styles from "../../../styles/Dashboard.module.scss";
import styles1 from "../../../styles/Services.module.scss";
import styles2 from "../../../styles/Labdashboard.module.scss";
import Searchbar from "./Searchbar";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Labtest_modal from "./Labtest_modal";
import Addpatient_modal from "./Addpatient_modal";
import Addtestvalues_modal from "../Addtestvalues_modal";
const Dashboard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [modalShow, setModalShow] = useState(false);
  const [keepShow, setkeepShow] = useState(false);
  const [testShow, settestShow] = useState(false);

  //conditions
  const [isEditing, setIsEditing] = useState(false);

  const handleAddClick = () => {
    setIsEditing(false);
    setModalShow(true);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setModalShow(true);
  };

  const columns = [
    {
      dataField: "ID",
      text: "ID",
    },
    {
      dataField: "TESTNAME",
      text: "TESTNAME",
    },
    {
      dataField: "PATIENTNAME",
      text: "PATIENTNAME",
    },
    {
      dataField: "TYPE",
      text: "TYPE",
    },
    {
      dataField: "DOCTOR",
      text: "DOCTOR",
    },
    {
      dataField: "STATUS",
      text: "STATUS",
    },

    {
      dataField: "ACTION",
      text: "ACTION",
    },
  ];
  const Products1 = [
    {
      ID: <div className="nowwrap"> 01</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      PATIENTNAME: <div className="nowwrap">Ryan Calzoni</div>,
      TYPE: <div className="nowwrap">OP</div>,
      DOCTOR: <div className="nowwrap">Allison Kenter</div>,
      STATUS: <div className={styles2.inprogress}> In Progress</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i
            className="fal fa-file me-3  f14"
            onClick={() => setShow(true)}
          ></i>
          <i
            className="fal fa-edit me-3  f14"
            onClick={() => handleEditClick(true)}
          ></i>
          <i className="fal  fa-ellipsis-v me-3"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 02</div>,
      TESTNAME: <div className="nowwrap">Fasting blood glucose(FBS)</div>,
      PATIENTNAME: <div className="nowwrap">Abram Westervelt</div>,
      TYPE: <div className="nowwrap">IP</div>,
      DOCTOR: <div className="nowwrap">Kierra Carder</div>,
      STATUS: <div className={styles2.inprogress}> In Progress</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i
            className="fal fa-file me-3  f14"
            onClick={() => settestShow(true)}
          ></i>
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal  fa-ellipsis-v me-3"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 03</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      PATIENTNAME: <div className="nowwrap">Ryan Calzoni</div>,
      TYPE: <div className="nowwrap">OT</div>,
      DOCTOR: <div className="nowwrap">Kierra Carder</div>,
      STATUS: <div className={styles2.reportspending}> Reports Pending</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-file me-3  f14"></i>
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal  fa-ellipsis-v me-3"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 04</div>,
      TESTNAME: <div className="nowwrap">Fasting blood glucose(FBS)</div>,
      PATIENTNAME: <div className="nowwrap">Abram Westervelt</div>,
      TYPE: <div className="nowwrap">OT</div>,
      DOCTOR: <div className="nowwrap">Kierra Carder</div>,
      STATUS: <div className={styles2.pending}> Pending Samples</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-file me-3  f14"></i>
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal  fa-ellipsis-v me-3"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 05</div>,
      TESTNAME: <div className="nowwrap">Fasting blood glucose(FBS)</div>,
      PATIENTNAME: <div className="nowwrap">Ryan Calzoni</div>,
      TYPE: <div className="nowwrap">OP</div>,
      DOCTOR: <div className="nowwrap">Allison Kenter</div>,
      STATUS: <div className={styles2.scheduled}> Scheduled</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-file me-3  f14"></i>
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal  fa-ellipsis-v me-3"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 06</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      PATIENTNAME: <div className="nowwrap">Ryan Calzoni</div>,
      TYPE: <div className="nowwrap">IP</div>,
      DOCTOR: <div className="nowwrap">Allison Kenter</div>,
      STATUS: <div className={styles2.reportspending}> Reports Pending</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-file me-3  f14"></i>
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal  fa-ellipsis-v me-3"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 07</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      PATIENTNAME: <div className="nowwrap">Ryan Calzoni</div>,
      TYPE: <div className="nowwrap">OT</div>,
      DOCTOR: <div className="nowwrap">Allison Kenter</div>,
      STATUS: <div className={styles2.scheduled}> Scheduled</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-file me-3  f14"></i>
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal  fa-ellipsis-v me-3"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 08</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      PATIENTNAME: <div className="nowwrap">Ryan Calzoni</div>,
      TYPE: <div className="nowwrap">OP</div>,
      DOCTOR: <div className="nowwrap">Allison Kenter</div>,
      STATUS: <div className={styles2.reportspending}> Reports Pending</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-file me-3  f14"></i>
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal  fa-ellipsis-v me-3"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 09</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      PATIENTNAME: <div className="nowwrap">Ryan Calzoni</div>,
      TYPE: <div className="nowwrap">IP</div>,
      DOCTOR: <div className="nowwrap">Allison Kenter</div>,
      STATUS: <div className={styles2.pending}> Pending Samples</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-file me-3  f14"></i>
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal  fa-ellipsis-v me-3"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 10</div>,
      TESTNAME: <div className="nowwrap">Complete blood picture(CBP)</div>,
      PATIENTNAME: <div className="nowwrap">Ryan Calzoni</div>,
      TYPE: <div className="nowwrap">OT</div>,
      DOCTOR: <div className="nowwrap">Allison Kenter</div>,
      STATUS: <div className={styles2.reportspending}> Reports Pending</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-file me-3  f14"></i>
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal  fa-ellipsis-v me-3"></i>
        </div>
      ),
    },
  ];
  console.log(isEditing);
  return (
    <React.Fragment>
      <div className="card4">
        <Card className={`${styles.card_shadow1} card_width p-0`}>
          <Card.Body className="px-4">
            <div className={`${styles.textclr} ${styles.textclr5}`}>
              Pending Tests
            </div>
            <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-left">
              2
            </div>
          </Card.Body>
        </Card>
        <Card className={`${styles.card_shadow1} card_width p-0`}>
          <Card.Body className="px-4">
            <div className={`${styles.textclr} ${styles.textclr5}`}>
              Clinic Lab Testing
            </div>
            <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-left">
              25
            </div>
          </Card.Body>
        </Card>
        <Card className={`${styles.card_shadow1} card_width p-0`}>
          <Card.Body className="px-4">
            <div className={`${styles.textclr} ${styles.textclr5}`}>
              Scheduled Tests
            </div>
            <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-left">
              25
            </div>
          </Card.Body>
        </Card>
        <Card className={`${styles.card_shadow1} card_width p-0`}>
          <Card.Body className="px-4">
            <div className={`${styles.textclr} ${styles.textclr5}`}>
              Reports pending
            </div>
            <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-left">
              25
            </div>
          </Card.Body>
        </Card>
        <div>
          <Button
            style={{ marginLeft: "10px", marginTop: "10px" }}
            className={styles1.servicebtn3}
            onClick={() => setkeepShow(true)}
          >
            Add Patient
          </Button>
          <Button
            style={{ marginLeft: "10px", marginTop: "10px" }}
            className={`${styles1.servicebtn3} ${styles.pad34}`}
            onClick={handleAddClick}
          >
            New test
          </Button>
        </div>
      </div>
      <div className="bg-white mt-3 br8 mb-3">
        <div className="px-3 py-2">
          <Searchbar />
        </div>
      </div>
      <Card>
        <Card.Body className="pb-0" id="services">
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={Products1}
            columns={columns}
            bordered={false}
            pagination={paginationFactory()}
          />
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg" id="md1">
        <Modal.Header>
          <Modal.Title>Sample Collection</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-0">
          <Form>
            <div className="table-responsive">
              <Table>
                <thead className={styles2.border12}>
                  <tr>
                    <th>TEST NAME</th>
                    <th>CODE</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles2.border1}>
                    <td className={`${styles2.text_initial} nowwrap`}>
                      <div className="theme14">Complete blood picture(CBP)</div>
                      <div className="theme12">4th Feb, 2023 - 5 PM</div>
                    </td>
                    <td className={`${styles2.text_initial} nowwrap`}>
                      <div className="theme12">ABSCD12345</div>
                    </td>
                    <td className={`${styles2.text_initial} nowwrap`}>
                      <Form.Check
                        type="checkbox"
                        id="id"
                        label="Mark as Collected"
                      />
                    </td>
                    <td className={`${styles2.text_initial} nowwrap`}>
                      <div className={styles2.theme14bg}>Print Barcode</div>
                    </td>
                  </tr>
                  <tr className={styles2.border1}>
                    <td className={`${styles2.text_initial} nowwrap`}>
                      <div className="theme14">Complete blood picture(CBP)</div>
                      <div className="theme12">4th Feb, 2023 - 5 PM</div>
                    </td>
                    <td className={`${styles2.text_initial} nowwrap`}>
                      <div className="theme12">ABSCD12345</div>
                    </td>
                    <td className={`${styles2.text_initial} nowwrap`}>
                      <Form.Check
                        type="checkbox"
                        id="id"
                        label="Mark as Collected"
                      />
                    </td>
                    <td className={`${styles2.text_initial} nowwrap`}>
                      <div className={styles2.theme14bg}>Print Barcode</div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className={`theme9 bg-white ${styles1.border_none}`}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button variant="primary" className={styles1.servicebtn}>
            Print All
          </Button>
        </Modal.Footer>
      </Modal>
      <Labtest_modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        isediting={isEditing}
      />
      <Addpatient_modal show={keepShow} onHide={() => setkeepShow(false)} />
      <Addtestvalues_modal show={testShow} onHide={() => settestShow(false)} />
    </React.Fragment>
  );
};

export default Dashboard;
