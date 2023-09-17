import React from "react";
import $ from 'jquery';
import { Col, Row } from "react-bootstrap";
import Abha_Card from "../components/Abha_Card";
import Prescription from "../components/prescription/Prescription";
import NavbarOne from "../components/navbar1/NavbarTwo";

const prescription = () => {
  return (
    <React.Fragment>
      <NavbarOne />
      <div>
        <Prescription />
      </div>
    </React.Fragment>
  );
};

export default prescription;
