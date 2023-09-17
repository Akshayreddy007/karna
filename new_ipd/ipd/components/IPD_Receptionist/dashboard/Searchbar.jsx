import React, { useEffect, useState } from "react";
import styles from "../../../styles/IPD_Admin/Dashboard.module.scss";
import { Form, Row, Col } from "react-bootstrap";
import moment from "moment";
import RsuiteDatePicker from "../../../utils/rsuiteDatePicker";
import subDays from 'date-fns/subDays';
import addDays from 'date-fns/addDays';
import { useRecoilState } from "recoil";
import { serachdashboard } from '../../../shared/ipdrecepserachdashboard'
import { useQuery } from '@apollo/client';
import { GET_DEPARTEMNTS, GET_DOCTORS } from '../../../graphql/queries'

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


const Searchbar = () => {
  const [form, setForm] = useRecoilState(serachdashboard)
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;


  // Retrieve user data from localStorage
  let globalUserHip = 0;

  if (typeof window !== "undefined") {
    const storedGlobalUserHip = localStorage.getItem("userHip");

    if (storedGlobalUserHip) {
      try {
        globalUserHip = JSON.parse(storedGlobalUserHip);
      } catch (error) {
        console.error("Error parsing global user hip from localStorage:", error);
      }
    }
  }

  const { data, loading, error } = useQuery(GET_DEPARTEMNTS, {
    fetchPolicy: "cache-and-network"
  });

  const { data: data1, loading: loading1, error: error1 } = useQuery(GET_DOCTORS, {
    variables: {
      department: parseInt(form.department),
      hip: globalUserHip
    },
    fetchPolicy: "cache-and-network"
  });

  // department qurey data
  let Departments = [];
  if (data && data.getDepartments) {
    Departments = data.getDepartments
  }

  // doctor qurey data
  let Doctors = [];
  if (data1 && data1.getDoctors) {
    data1.getDoctors.map((item, index) => {
      Doctors.push({
        id: item.id,
        name: item.details.name,
        username: item.details.username
      });
    })
  }


  useEffect(() => {
    if (startDate && endDate) {
      const formattedStartDate = moment(startDate).format("DD-MM-YYYY");
      const formattedEndDate = moment(endDate).format("DD-MM-YYYY");

      setForm((prevForm) => ({
        ...prevForm,
        fromDate: formattedStartDate,
        toDate: formattedEndDate,
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        fromDate: "",
        toDate: "",
      }));
    }
  }, [startDate, endDate, setForm]);

  const handleDateRanges = (e) => {
    if (e) {
      setDateRange(e);
    } else {
      setDateRange([new Date(), new Date()]);
    }
  };


  //handleChange for Department
  const handleChangeforDepartment = (event) => {
    const { name, value } = event.target
    if (value) {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
        submitError: "",
        doctor: 0,
        formErrors: {
          ...prevForm.formErrors,
          [name]: "",
        },
      }))
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
        submitError: "",
        doctor: 0,
        formErrors: {
          ...prevForm.formErrors,
          [name]: "",
        },
      }))
    }

  }

  // Handle Change for Remaining
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (value) {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
        formErrors: {
          ...prevForm.formErrors,
          [name]: ""
        }
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        submitError: "",
        formErrors: {
          ...prevForm.formErrors,
          [name]: ""
        }
      }));
    }
  };


  return (
    <React.Fragment>
      <div className="row">
        <Col md={4} xl={2} lg={4} className="mb-2 mb-md-0">
          <div className="d-md-flex" id="date2">
            <RsuiteDatePicker
              role="button"
              style={{ width: 300 }}
              placeholder="Please select date"
              onChange={handleDateRanges}
              value={dateRange}
              className={styles.h44}
              cleanable={false}
              ranges={ranges}
              format={"dd-MM-yyyy"}
              size={'md'}
            />
          </div>

        </Col>
        <Col md={4} xl={2} lg={4} className="mb-2 mb-md-0">
          <Form.Select
            aria-label="Default select example"
            className={styles.h44}
            name="department"
            value={form.department}
            onChange={handleChangeforDepartment}
          >
            <option value={0}>All Departments</option>
            {Departments.map((each, index) => {
              return (
                <option key={index} value={each.id}>{each.department}</option>
              )
            })}

          </Form.Select>
        </Col>
        <Col md={4} xl={2} lg={4} className="mb-2 mb-md-0">
          <Form.Select
            aria-label="Default select example"
            className={styles.h44}
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
          >
            <option value={0}>All Doctors</option>
            {Doctors.map((each, index) => {
              return (
                <option key={index} value={each.id}>{each.name}</option>
              )
            })}
          </Form.Select>
        </Col>
        <Col md={4} xl={2} lg={4} className="mb-2 mb-md-0">
          <Form.Select
            aria-label="Default select example"
            className={styles.h44}
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="3">All Gender</option>
            <option value="1">Male</option>
            <option value="0">Female</option>
            <option value="2">Others</option>
          </Form.Select>
        </Col>
      </div>
    </React.Fragment>
  );
};

export default Searchbar;
