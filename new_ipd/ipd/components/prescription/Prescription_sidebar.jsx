import React, { useRef, useState } from "react";
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from "react-sortable-hoc";
import { Col,Form } from "react-bootstrap";
const Prescription_sidebar = () => {

  return (
    <React.Fragment>
    <div className="d-flex">
    <Col md={10}>
    <div className="f14">Pulse rate</div>
    </Col>
    <Col md={2}   className="pl-0 my-2 text-end pe-2"
    id="checkbx">
    <Form.Check
      type="checkbox"
      className="radio"
      name="doctorValue"
      style={{
        width: "14px!important",
        height: "16px!important",
      }}
    />
    </Col>
    </div>
    <div className="d-flex">
    <Col md={10}>
    <div className="f14">Respiratory rate</div>
    </Col>
    <Col md={2}   className="pl-0 my-2 text-end pe-2"
    id="checkbx">
    <Form.Check
      type="checkbox"
      className="radio"
      name="doctorValue"
      style={{
        width: "14px!important",
        height: "16px!important",
      }}
    />
    </Col>
    </div>
    <div className="d-flex">
    <Col md={10}>
    <div className="f14">Body Weight</div>
    </Col>
    <Col md={2}   className="pl-0 my-2 text-end pe-2"
    id="checkbx">
    <Form.Check
      type="checkbox"
      className="radio"
      name="doctorValue"
      style={{
        width: "14px!important",
        height: "16px!important",
      }}
    />
    </Col>
    </div>    <div className="d-flex">
    <Col md={10}>
    <div className="f14">Systolic blood pressure</div>
    </Col>
    <Col md={2}   className="pl-0 my-2 text-end pe-2"
    id="checkbx">
    <Form.Check
      type="checkbox"
      className="radio"
      name="doctorValue"
      style={{
        width: "14px!important",
        height: "16px!important",
      }}
    />
    </Col>
    </div>
    <div className="d-flex">
    <Col md={10}>
    <div className="f14">diastolic blood pressure</div>
    </Col>
    <Col md={2}   className="pl-0 my-2 text-end pe-2"
    id="checkbx">
    <Form.Check
      type="checkbox"
      className="radio"
      name="doctorValue"
      style={{
        width: "14px!important",
        height: "16px!important",
      }}
    />
    </Col>
    </div>
    <div className="d-flex">
    <Col md={10}>
    <div className="f14">Peripheral Oxygen Saturation</div>
    </Col>
    <Col md={2}   className="pl-0 my-2 text-end pe-2"
    id="checkbx">
    <Form.Check
      type="checkbox"
      className="radio"
      name="doctorValue"
      style={{
        width: "14px!important",
        height: "16px!important",
      }}
    />
    </Col>
    </div>
    <div className="d-flex">
    <Col md={10}>
    <div className="f14">Body temperature</div>
    </Col>
    <Col md={2}   className="pl-0 my-2 text-end pe-2"
    id="checkbx">
    <Form.Check
      type="checkbox"
      className="radio"
      name="doctorValue"
      style={{
        width: "14px!important",
        height: "16px!important",
      }}
    />
    </Col>
    </div>
    <div className="d-flex">
    <Col md={10}>
    <div className="f14">Body Mass Index</div>
    </Col>
    <Col md={2}   className="pl-0 my-2 text-end pe-2"
    id="checkbx">
    <Form.Check
      type="checkbox"
      className="radio"
      name="doctorValue"
      style={{
        width: "14px!important",
        height: "16px!important",
      }}
    />
    </Col>
    </div>
    <div className="d-flex">
    <Col md={10}>
    <div className="f14">Blood pressure</div>
    </Col>
    <Col md={2}   className="pl-0 my-2 text-end pe-2"
    id="checkbx">
    <Form.Check
      type="checkbox"
      className="radio"
      name="doctorValue"
      style={{
        width: "14px!important",
        height: "16px!important",
      }}
    />
    </Col>
    </div>
    <div className="d-flex">
    <Col md={10}>
    <div className="f14">Body height</div>
    </Col>
    <Col md={2}   className="pl-0 my-2 text-end pe-2"
    id="checkbx">
    <Form.Check
      type="checkbox"
      className="radio"
      name="doctorValue"
      style={{
        width: "14px!important",
        height: "16px!important",
      }}
    />
    </Col>
    </div>
    
    
    </React.Fragment>
  );
};

export default Prescription_sidebar;
