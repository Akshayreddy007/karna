import React from "react";
import { Col, Row } from "react-bootstrap";
import Abha_Card from "../components/Abha_Card";
import NavbarOne from "../components/admin/prescriptions/Prescription_Navbar";
import Patient_Not_Registered from "../components/Patient_Not_Registered";
import Patient_Registration from "../components/Patient_Registration";

const patient_registration = () => {
  return (
    <div>
      <NavbarOne />
      <Patient_Registration />
    </div>
  );
};

export default patient_registration;
