import React, { useState } from "react";
import { Card, Button, Modal, Form, Row, Col } from "react-bootstrap";
import styles from "../../../styles/Dashboard.module.scss";
import styles1 from "../../../styles/Labdashboard.module.scss";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../../pharmabillingdata";
import Newbill_modal from "./Newbill_modal";
const Billing = () => {
  const columns = [
    {
      dataField: "ID",
      text: "ID",
    },
    {
      dataField: "BILLNUMBER",
      text: "BILLNUMBER",
    },
    {
      dataField: "BILLDATE",
      text: "BILLDATE",
    },
    {
      dataField: "TYPE",
      text: "TYPE",
    },
    {
      dataField: "PATIENTNAME",
      text: "PATIENTNAME",
    },
    {
      dataField: "AMOUNT",
      text: "AMOUNT",
    },
    {
      dataField: "PAYMENT",
      text: "PAYMENT",
    },
    {
      dataField: "ACTION",
      text: "ACTION",
    },
  ];
  const products1 = [
    {
      ID: <div className="nowwrap"> 01</div>,
      BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
      BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
      TYPE: <div className="nowwrap">OP</div>,
      PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
      AMOUNT: <div className="nowwrap">500/-</div>,
      PAYMENT: <div className={styles1.inprogress}> In Progress</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-prescription me-3  f13"></i>
          <i
            className="fal fa-file-invoice me-3  f13"
            onClick={() => handleEditClick(true)}
          ></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 02</div>,
      BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
      BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
      TYPE: <div className="nowwrap">IP</div>,
      PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
      AMOUNT: <div className="nowwrap">500/-</div>,
      PAYMENT: <div className={styles1.paid}> Paid</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-prescription me-3  f13"></i>
          <i className="fal fa-file-invoice me-3  f13"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 03</div>,
      BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
      BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
      TYPE: <div className="nowwrap">OT</div>,
      PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
      AMOUNT: <div className="nowwrap">500/-</div>,
      PAYMENT: <div className={styles1.pending1}> pending </div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-prescription me-3  f13"></i>
          <i className="fal fa-file-invoice me-3  f13"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 04</div>,
      BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
      BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
      TYPE: <div className="nowwrap">OP</div>,
      PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
      AMOUNT: <div className="nowwrap">500/-</div>,
      PAYMENT: <div className={styles1.paid}> Paid</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-prescription me-3  f13"></i>
          <i className="fal fa-file-invoice me-3  f13"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 05</div>,
      BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
      BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
      TYPE: <div className="nowwrap">OP</div>,
      PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
      AMOUNT: <div className="nowwrap">500/-</div>,
      PAYMENT: <div className={styles1.paid}> Paid</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-prescription me-3  f13"></i>
          <i className="fal fa-file-invoice me-3  f13"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 06</div>,
      BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
      BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
      TYPE: <div className="nowwrap">IP</div>,
      PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
      AMOUNT: <div className="nowwrap">500/-</div>,
      PAYMENT: <div className={styles1.paid}> Paid</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-prescription me-3  f13"></i>
          <i className="fal fa-file-invoice me-3  f13"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 07</div>,
      BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
      BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
      TYPE: <div className="nowwrap">OT</div>,
      PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
      AMOUNT: <div className="nowwrap">500/-</div>,
      PAYMENT: <div className={styles1.pending1}> Pending </div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-prescription me-3  f13"></i>
          <i className="fal fa-file-invoice me-3  f13"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 08</div>,
      BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
      BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
      TYPE: <div className="nowwrap">OP</div>,
      PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
      AMOUNT: <div className="nowwrap">500/-</div>,
      PAYMENT: <div className={styles1.pending1}> Pending </div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-prescription me-3  f13"></i>
          <i className="fal fa-file-invoice me-3  f13"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 09</div>,
      BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
      BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
      TYPE: <div className="nowwrap">OP</div>,
      PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
      AMOUNT: <div className="nowwrap">500/-</div>,
      PAYMENT: <div className={styles1.pending1}> Pending </div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-prescription me-3  f13"></i>
          <i className="fal fa-file-invoice me-3  f13"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 10</div>,
      BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
      BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
      TYPE: <div className="nowwrap">OP</div>,
      PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
      AMOUNT: <div className="nowwrap">500/-</div>,
      PAYMENT: <div className={styles1.pending1}> Pending </div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-prescription me-3  f13"></i>
          <i className="fal fa-file-invoice me-3  f13"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 11</div>,
      BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
      BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
      TYPE: <div className="nowwrap">OP</div>,
      PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
      AMOUNT: <div className="nowwrap">500/-</div>,
      PAYMENT: <div className={styles1.paid}> Paid</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-prescription me-3  f13"></i>
          <i className="fal fa-file-invoice me-3  f13"></i>
        </div>
      ),
    },
    {
      ID: <div className="nowwrap"> 12</div>,
      BILLNUMBER: <div className="nowwrap">Bill No 123456ASD</div>,
      BILLDATE: <div className="nowwrap">23 jan, 2023</div>,
      TYPE: <div className="nowwrap">OP</div>,
      PATIENTNAME: <div className="nowwrap">Allison Kenter</div>,
      AMOUNT: <div className="nowwrap">500/-</div>,
      PAYMENT: <div className={styles1.paid}> Paid</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-prescription me-3  f13"></i>
          <i className="fal fa-file-invoice me-3  f13  "></i>
        </div>
      ),
    },
  ];
  const [modalShow, setModalShow] = useState(false);
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
  return (
    <React.Fragment>
      <div className="card4 mb-5">
        <Card className={`${styles.card_shadow1} card_width p-0`}>
          <Card.Body className="px-4">
            <div className={`${styles.textclr} ${styles.textclr5}`}>
              Total bills
            </div>
            <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-left">
              23
            </div>
          </Card.Body>
        </Card>
        <Card className={`${styles.card_shadow1} card_width p-0`}>
          <Card.Body className="px-4">
            <div className={`${styles.textclr} ${styles.textclr5}`}>Paid</div>
            <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-left">
              36
            </div>
          </Card.Body>
        </Card>
        <Card className={`${styles.card_shadow1} card_width p-0`}>
          <Card.Body className="px-4">
            <div className={`${styles.textclr} ${styles.textclr5}`}>
              Pending
            </div>
            <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-left">
              12
            </div>
          </Card.Body>
        </Card>
        <Card className={`${styles.card_shadow1} card_width p-0`}>
          <Card.Body className="px-4">
            <div className={`${styles.textclr} ${styles.textclr5}`}>
              Today Pending
            </div>
            <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-left">
              5
            </div>
          </Card.Body>
        </Card>
        <Card className={`${styles.card_shadow1} card_width p-0`}>
          <Card.Body className="px-4">
            <div className={`${styles.textclr} ${styles.textclr5}`}>
              Total Pending
            </div>
            <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-left">
              5000/-
            </div>
          </Card.Body>
        </Card>
      </div>

      <Card>
        <Card.Body className="pb-0" id="services">
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={products1}
            columns={columns}
            bordered={false}
            pagination={paginationFactory()}
          />
        </Card.Body>
      </Card>

      <Newbill_modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        isediting={isEditing}
      />
    </React.Fragment>
  );
};

export default Billing;
