import React, { useState, useEffect } from "react";
import { TagsInput } from "react-tag-input-component";
// import styles from "../../styles/Dashboard.module.scss";
import styles1 from "../../styles/IPD_Nurse/IpdNurse.module.scss";
import { Form, Row, Col, Button, Container, Modal, Accordion, Offcanvas } from "react-bootstrap";
import moment from "moment";
import RsuiteDatePicker from "../../utils/rsuiteDatePicker";
import subDays from 'date-fns/subDays';
import addDays from 'date-fns/addDays';
import Image from "next/image";
import filter from '../../public/images/filter.svg';
// import Inventory_SearchFilter from "../inventory_newpharma/Inventory_SearchFilter";
const ranges = [
  {
    label: 'Today',
    value: [new Date(), new Date()]
  },
  {
    label: 'Yesterday',
    value: [addDays(new Date(), -1), addDays(new Date(), -1)]
  },
  {
    label: 'Last 7 days',
    value: [subDays(new Date(), 6), new Date()]
  },
  {
    label: 'Last 15 Days',
    value: [subDays(new Date(), 14), new Date()],
  },
  {
    label: 'Last 30 days',
    value: [subDays(new Date(), 29), new Date()]
  },
];
const Ipd_Searchbar = ({
    handleFilter,
    loginUserNameHip,
  }) => {
  
    const [filters, setFilters] = useState({ billStatus: 0, doctor: 0, patientName: "" });
    const [dateRange, setDateRange] = useState([new Date(moment().subtract(7, 'd')), new Date(moment())]);
    const [startDate, endDate] = dateRange;
    const [tag, setTag] = useState(["tag"]);
    const [manufacturer, setManufacturer] = useState(["tag"]);
    const [content, setContent] = useState(["tag"]);
    const [location, setLocation] = useState(["tag"]);
    // const handleChange = (e) => {
    //   const name = e.target.name;
    //   const value = e.target.type === 'select-one' ? parseInt(e.target.value) : e.target.value;
    //   setFilters({ ...filters, [name]: value });
    // }
  
    const [doctor, setDoctors] = useState([]);
  
    // const { data: doctors } = useQuery(GET_DOCTORS, {
    //   variables: { hip: loginUserNameHip, department: 0 },
    // });
  
    // useEffect(() => {
    //   if (doctors && doctors.getDoctors) {
    //     setDoctors(doctors.getDoctors.map((each) => {
    //       if (each && each.details) {
    //         return { id: each.id, name: each.details.name }
    //       }
    //     }) || []);
    //   }
    // }, [doctors]);
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleDateRanges = (e) => {
      setDateRange(e);
    }


  
  
  return (
    <React.Fragment>
        <Container className="">
      <div className="row mx-md-0">
        <Col md={1} xl={2} lg={2} className="pe-xl-0">
          <Form.Select
            aria-label="Default select example"
            className="themeinput"
          >
            <option>All Departments</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={1} xl={2} lg={2} className="pe-xl-0">
          <Form.Select
            aria-label="Default select example"
            className="themeinput"
          >
            <option>All Doctors</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={1} xl={1} lg={2} className={`${styles1.cus_column_2} pe-xl-0`}>
          <Form.Select
            aria-label="Default select example"
            className="themeinput"
          >
            <option>All Status</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={1} xl={1} lg={2} className={`${styles1.cus_column_2} pe-xl-0`}>
          <Form.Select
            aria-label="Default select example"
            className="themeinput"
          >
            <option>All Floor</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={1} xl={1} lg={2} className={`${styles1.cus_column_2} pe-xl-0`}>
          <Form.Select
            aria-label="Default select example"
            className="themeinput"
          >
            <option>All Ward</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>

        <Col md={2} xs={12} xl={2} className="pe-xl-0">
          <Form.Group controlId="formBasicText">
            <Form.Control
              type="text"
              placeholder="Enter Keyword"
              className="themeinput"
              style={{ width: "100%!important" }}
            />
          </Form.Group>
        </Col>
        <Col md={1} xl={1} className={`pe-xl-0`}>
          <Button className={`${styles1.serchbtn} ms-2 me-3`}>
            Search
          </Button>
          
        </Col>
      </div>
      </Container>
     
    </React.Fragment>
  );
};

export default Ipd_Searchbar;
