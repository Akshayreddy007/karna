import React, { useState } from "react";
import { Card, Button, Modal, Form, Table } from "react-bootstrap";
import Searchbar from "../dashboard/Searchbar";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Link from "next/link";
const Patients = () => {
  const [show, setShow] = useState(false);
  const columns = [
    {
      dataField: "UHID",
      text: "UHID",
    },
    {
      dataField: "NAME",
      text: "NAME",
    },
    {
      dataField: "AGEGENDER",
      text: "AGE/GENDER",
    },
    {
      dataField: "MOBILENO",
      text: "MOBILENO",
    },
    {
      dataField: "CONSULTANTDOCTOR",
      text: "CONSULTANTDOCTOR",
    },
    {
      dataField: "ACTION",
      text: "ACTION",
    },
  ];
  const products1 = [
    {
      UHID: <div className="nowwrap"> UH2011</div>,
      NAME: <div className="nowwrap">April Curtis</div>,
      AGEGENDER: <div className="nowwrap">44/M</div>,
      MOBILENO: <div className="nowwrap">+91 9000545454</div>,
      CONSULTANTDOCTOR: <div className="nowwrap">Allison Kenter</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <Link href="/patients_labview">
            <i className="fal fa-eye me-3  f14"></i>
          </Link>
          <i className="fal fa-flask me-3  f14"></i>
          <i className="fal fa-ellipsis-v me-3  f14"></i>
        </div>
      ),
    },
    {
      UHID: <div className="nowwrap"> UH2011</div>,
      NAME: <div className="nowwrap">Theodore T.C. Calvin</div>,
      AGEGENDER: <div className="nowwrap">45/M</div>,
      MOBILENO: <div className="nowwrap">+91 9000545454</div>,
      CONSULTANTDOCTOR: <div className="nowwrap">Kierra Carder</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <Link href="/patients_labview">
            <i className="fal fa-eye me-3  f14"></i>
          </Link>
          <i className="fal fa-flask me-3  f14"></i>
          <i className="fal fa-ellipsis-v me-3  f14"></i>
        </div>
      ),
    },
    {
      UHID: <div className="nowwrap"> UH2011</div>,
      NAME: <div className="nowwrap">April Curtis</div>,
      AGEGENDER: <div className="nowwrap">44/M</div>,
      MOBILENO: <div className="nowwrap">+91 9000545454</div>,
      CONSULTANTDOCTOR: <div className="nowwrap">Kierra Carder</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <Link href="/patients_labview">
            <i className="fal fa-eye me-3  f14"></i>
          </Link>
          <i className="fal fa-flask me-3  f14"></i>
          <i className="fal fa-ellipsis-v me-3  f14"></i>
        </div>
      ),
    },
    {
      UHID: <div className="nowwrap"> UH2011</div>,
      NAME: <div className="nowwrap">Theodore T.C. Calvin</div>,
      AGEGENDER: <div className="nowwrap">45/M</div>,
      MOBILENO: <div className="nowwrap">+91 9000545454</div>,
      CONSULTANTDOCTOR: <div className="nowwrap">Kierra Carder</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <Link href="/patients_labview">
            <i className="fal fa-eye me-3  f14"></i>
          </Link>
          <i className="fal fa-flask me-3  f14"></i>
          <i className="fal fa-ellipsis-v me-3  f14"></i>
        </div>
      ),
    },
    {
      UHID: <div className="nowwrap"> UH2011</div>,
      NAME: <div className="nowwrap">Theodore T.C. Calvin</div>,
      AGEGENDER: <div className="nowwrap">44/M</div>,
      MOBILENO: <div className="nowwrap">+91 9000545454</div>,
      CONSULTANTDOCTOR: <div className="nowwrap">Allison Kenter</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <Link href="/patients_labview">
            <i className="fal fa-eye me-3  f14"></i>
          </Link>
          <i className="fal fa-flask me-3  f14"></i>
          <i className="fal fa-ellipsis-v me-3  f14"></i>
        </div>
      ),
    },
    {
      UHID: <div className="nowwrap"> UH2011</div>,
      NAME: <div className="nowwrap">April Curtis</div>,
      AGEGENDER: <div className="nowwrap">44/M</div>,
      MOBILENO: <div className="nowwrap">+91 9000545454</div>,
      CONSULTANTDOCTOR: <div className="nowwrap">Allison Kenter</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <Link href="/patients_labview">
            <i className="fal fa-eye me-3  f14"></i>
          </Link>
          <i className="fal fa-flask me-3  f14"></i>
          <i className="fal fa-ellipsis-v me-3  f14"></i>
        </div>
      ),
    },
    {
      UHID: <div className="nowwrap"> UH2011</div>,
      NAME: <div className="nowwrap">April Curtis</div>,
      AGEGENDER: <div className="nowwrap">44/M</div>,
      MOBILENO: <div className="nowwrap">+91 9000545454</div>,
      CONSULTANTDOCTOR: <div className="nowwrap">Allison Kenter</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-eye me-3  f14"></i>
          <i className="fal fa-flask me-3  f14"></i>
          <i className="fal fa-ellipsis-v me-3  f14"></i>
        </div>
      ),
    },
    {
      UHID: <div className="nowwrap"> UH2011</div>,
      NAME: <div className="nowwrap">April Curtis</div>,
      AGEGENDER: <div className="nowwrap">44/M</div>,
      MOBILENO: <div className="nowwrap">+91 9000545454</div>,
      CONSULTANTDOCTOR: <div className="nowwrap">Allison Kenter</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-eye me-3  f14"></i>
          <i className="fal fa-flask me-3  f14"></i>
          <i className="fal fa-ellipsis-v me-3  f14"></i>
        </div>
      ),
    },
    {
      UHID: <div className="nowwrap"> UH2011</div>,
      NAME: <div className="nowwrap">April Curtis</div>,
      AGEGENDER: <div className="nowwrap">44/M</div>,
      MOBILENO: <div className="nowwrap">+91 9000545454</div>,
      CONSULTANTDOCTOR: <div className="nowwrap">Allison Kenter</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-eye me-3  f14"></i>
          <i className="fal fa-flask me-3  f14"></i>
          <i className="fal fa-ellipsis-v me-3  f14"></i>
        </div>
      ),
    },
    {
      UHID: <div className="nowwrap"> UH2011</div>,
      NAME: <div className="nowwrap">April Curtis</div>,
      AGEGENDER: <div className="nowwrap">44/M</div>,
      MOBILENO: <div className="nowwrap">+91 9000545454</div>,
      CONSULTANTDOCTOR: <div className="nowwrap">Allison Kenter</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-eye me-3  f14"></i>
          <i className="fal fa-flask me-3  f14"></i>
          <i className="fal fa-ellipsis-v me-3  f14"></i>
        </div>
      ),
    },
  ];
  return (
    <React.Fragment>
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
            data={products1}
            columns={columns}
            bordered={false}
            pagination={paginationFactory()}
          />
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default Patients;
