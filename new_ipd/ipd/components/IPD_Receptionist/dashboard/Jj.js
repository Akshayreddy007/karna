import React, { useState } from 'react'
import { Card, Col, Form, Button, Modal, Table } from 'react-bootstrap';
import { useRouter } from 'next/router';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import styles from '../../styles/IPD_Receptionist/Appointments.module.scss';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { GET_IP_PATIENTS, GET_DEPARTEMNTS, GET_WARDS, GET_FLOORS } from '../../graphql/queries'
import { useRecoilState } from 'recoil';
import { appointmentTable } from '../../shared/appointments'
import moment from 'moment';


const CrossConsultation = () => {
  const router = useRouter();
  const [form, setForm] = useRecoilState(appointmentTable)
  // Retrieve user data from localStorage
  let userData = {};
  let globalUserHip = 0;

  if (typeof window !== "undefined") {
    const storedUserData = localStorage.getItem("user");
    const storedGlobalUserHip = localStorage.getItem("userHip");

    if (storedUserData) {
      try {
        userData = JSON.parse(storedUserData);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }

    if (storedGlobalUserHip) {
      try {
        globalUserHip = JSON.parse(storedGlobalUserHip);
      } catch (error) {
        console.error("Error parsing global user hip from localStorage:", error);
      }
    }
  }

  // Extract the username from userData if it exists
  let username = "";
  if (userData && userData.username) {
    username = userData.username;
  }

  const { data, loading, error, refetch } = useQuery(GET_IP_PATIENTS, {
    variables: {
      department: parseInt(form.department),
      search: form.search,
      floor: parseInt(form.floor),
      ward: parseInt(form.ward),
      crossConsultationAppid: 1,
      hip: globalUserHip,
      status: parseInt(form.status)
    }, fetchPolicy: "network-only"
  })

  const { data: data3, loading: loading3, error: error3 } = useQuery(GET_FLOORS, {
    variables: {
      blockId: 0
    },
    fetchPolicy: "cache-and-network"
  })

  const { data: data4, loading: loading4, error: error4 } = useQuery(GET_WARDS, {
    variables: {
      blockId: 0,
      floorId: parseInt(form.floorId)
    },
    fetchPolicy: "cache-and-network"
  })

  // Floor Data
  let FloorData = [];
  if (data3 && data3.getFloors && data3.getFloors.length > 0) {
    FloorData = data3.getFloors;
  }

  // Ward Data
  let WardData = [];
  if (data4 && data4.getWard && data4.getWard.length > 0) {
    WardData = data4.getWard;
  }



  let IpPatients = [];

  if (data && data.getInPateints && data.getInPateints.length > 0) {
    IpPatients = data.getInPateints;
  }

  const { data: data1, loading: loading1, error: error1 } = useQuery(GET_DEPARTEMNTS, {
    fetchPolicy: "cache-and-network"
  }
  )

  let departments = [];
  if (data1 && data1.getDepartments) {
    if (data1.getDepartments.length > 0) {
      departments = data1.getDepartments
    }
  }

  let PatientDeatails = [];
  let PatientList = false;
  if (IpPatients && IpPatients.length > 0) {
    PatientList = true
    PatientDeatails = IpPatients.map((each, idx) => {
      let PatientName = "NA";
      let PatientMobile = "NA";
      let Gender = "NA";
      let Age = "NA";
      let DoctorName = "";
      let Department = "";
      let Status = "";
      if (each.status === 0 && each.resheduled) {
        Status = "Rescheduled"
      } else if (each.status === 0 && !each.resheduled) {
        Status = "New"
      } else if (each.status === 1) {
        Status = "Checked-In"
      } else if (each.status === 2) {
        Status = "Admitted"
      } else if (each.status === 3) {
        Status = "Discharged"
      } else if (each.status === 4) {
        Status = "Cancelled"
      }

      if (each.PatientData && each.PatientData) {
        const { name, age, gender, mobile } = each.PatientData;
        PatientName = name || "NA";
        Age = age || "NA";
        PatientMobile = mobile || "NA";
        Gender = gender === 0 ? "F" : gender === 1 ? "M" : gender === 2 ? "O" : "NA";
      }

      let arr = each.assigndoctor.find((each) => each.main_doctor)
      if (arr) {
        DoctorName = arr.doctor_name
        Department = arr.department_name
      }

      let locationArray = [];
      let firstTwoValues = "";
      let lastTwoValue = "";

      if (each.location) {
        locationArray = each.location.split(',');
        firstTwoValues = locationArray.slice(0, 2).join(',');
        lastTwoValue = locationArray.slice(2, 4).join(',');
      }
      let TotalWalletAmount = 0;
      let walletStatus = 0;
      if (each.total_wallet_amount > 0) {
        TotalWalletAmount = each.total_wallet_amount
        walletStatus = 0;
      } else if (each.total_wallet_amount < 0) {
        TotalWalletAmount = each.total_wallet_amount
        walletStatus = 1;
      }

      let AttenderName = "";
      let AttenderMobile = "";
      if (each.gerdian_details && each.gerdian_details.length > 0) {
        if (each.gerdian_details[0].Name) {
          AttenderName = each.gerdian_details[0].Name
        }
        if (each.gerdian_details[0].Mobile) {
          AttenderMobile = each.gerdian_details[0].Mobile
        }
      }

      let ServiceName = "";
      if (each.service_name) {
        ServiceName = each.service_name
      }

      const DATE = moment.unix(each.timestamp).format("DD.MM.YYYY") || "NA";
      const TIME = moment.unix(each.timestamp).format("hh:mm a") || "NA";

      let AppointmentType = "";
      if (each.appointment_type && each.appointment_type == 1) {
        AppointmentType = 1
      }


      return {
        EMG: <span>{AppointmentType ? <div className={`nowwrap bg-success text-success`} style={{ width: "2px", height: "45px" }} title={``} role="button"></div> : ""}</span>,
        TOKEN: (
          <div className='nowwrap1 f15'>
            <div className='theme14'>{`${each.display_ip_appointment_id}`}</div>
          </div>
        ),
        UHID_IP_ADMISNNO: (
          <div className='nowwrap1 f15'>
            <div className="theme14">{each.uhid}</div>
          </div>
        ),
        DATETIME: (
          <div className='nowwrap1 f15'>
            <div className="theme14">{DATE}</div>
            <div className='theme12'>{TIME}</div>
          </div>
        ),
        PATIENTNAME: (
          <div className='nowwrap1 f15'>
            <div className="theme14">{PatientName}</div>
          </div>
        ),
        AGEGENDER: (
          <div className='nowwrap1 f15'>
            <div className='theme14'>{`${Age}/${Gender}`}</div>
          </div>
        ),
        MOBILE: (
          <div className='nowwrap1 f15'>
            <div className="theme14">{PatientMobile}</div>
          </div>
        ),
        GUARDIAN_CONTACT_NO: (
          <div className='nowwrap1 f15'>
            <div className="theme14">{AttenderName || "NA"}</div>
            <div className='theme12'>{AttenderMobile || "NA"}</div>
          </div>
        ),
        // BEDLOCATION: (
        //   <div className='nowwrap1 f15'>
        //     <div className="theme14">{firstTwoValues || "NA"}</div>
        //     <div className='theme13'>{lastTwoValue || "NA"}</div>
        //   </div>
        // ),
        SERVICE: (
          <div className='nowwrap1 f15'>
            <div className="theme14">{ServiceName ? <span className=''>{ServiceName}</span> : "NA"}</div>
          </div>
        ),
        DOCTOR_DEPARTMENT: (
          <div className='nowwrap1 f15'>
            <div className="theme14">{DoctorName ? `Dr ${DoctorName}` : "NA"}</div>
            <div className='theme12'>{Department}</div>
          </div>
        ),

        STATUS: <div className={each.status === 4 ? styles.discharged : styles.admitted}>{Status}</div>,
        // BALANCE: <div className={walletStatus ? styles.discharged : styles.admitted}>Rs: {TotalWalletAmount}</div>,
      }
    })
  }

  if (loading) {
    return (
      <span>Loading please wait...</span>
    )
  }

  const columns = [
    {
      dataField: "EMG",
      text: "",
    },
    {
      dataField: "TOKEN",
      text: (
        <div className='f13'>
          APPOINTMENT ID
        </div>
      ),
    },

    {
      dataField: "UHID_IP_ADMISNNO",
      text: (
        <div className='f13'>
          UHID
        </div>
      ),
    },
    {
      dataField: "DATETIME",
      text: (
        <div className='f13'>
          DATE & TIME
        </div>
      ),
    },
    {
      dataField: "PATIENTNAME",
      text: (
        <div className='f13'>
          PATIENT NAME
        </div>
      ),
    },
    {
      dataField: "AGEGENDER",
      text: (
        <div className='f13'>
          AGE/GENDER
        </div>
      ),
    },
    {
      dataField: "MOBILE",
      text: (
        <div className='f13'>
          MOBILE
        </div>
      ),
    },
    {
      dataField: "GUARDIAN_CONTACT_NO",
      text: (
        <div className='f13'>
          GUARDIAN DETAILS
        </div>
      ),
    },

    // {
    //   dataField: "BEDLOCATION",
    //   text: (<div className='f13'> BED LOCATION  </div>),

    // },
    {
      dataField: "DOCTOR_DEPARTMENT",
      text: (
        <div className='f13'>
          DOCTOR /<br />DEPARTMENT
        </div>
      ),
    },
    {
      dataField: "SERVICE",
      text: (
        <div className='f13'>
          SERVICE
        </div>
      ),
    },
    // {
    //   dataField: "STATUS",
    //   text: (<div className='f13'>STATUS </div>),
    // },
    // {
    //   dataField: "BALANCE",
    //   text: (<div className='f13'>BALANCE </div>),
    // }
  ];

  const handleInputChangeforStatus = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleInputChangeFloor = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
      ward: 0,
      wardId: 0
    });
  };

  const handleSerachState = () => {
    setForm({
      ...form,
      department: form.departmentSearch,
      search: form.searchNames,
      floor: form.floorId,
      ward: form.wardId,
      status: form.allStatus
    })
  }

  return (
    <React.Fragment>
      <div className='pe-3'>
        <div className={`d-xl-flex mb-2 align-items-center ${styles.pssticky}`}>
          <Col md={12} lg={12} xl={10} className={`d-xl-flex bg-white py-2 rounded  `}>
            <div className='ps-2 pe-1'>
              <Form.Select
                aria-label="Default select example"
                className={styles.textboxwdth44}
                name="departmentSearch" value={form.departmentSearch}
                onChange={handleInputChange}
              >
                <option value="0">All Departments</option>
                {departments.map((each, index) => {
                  return (
                    <option value={each.id}>{each.department}</option>
                  )
                })}
              </Form.Select>
            </div>
            {/* <Col md={12} xl={2} lg={12} className='px-2'>
              <Form.Select
                aria-label="Default select example"
                className={styles.textboxwdth44}
              >
                <option>All Status</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col> */}
                 <Col md={12} xl={2} lg={12} className='px-2'>
              <Form.Select
                aria-label="Default select example"
                className={styles.textboxwdth44}

                value={form.allStatus}
                name="allStatus"
                onChange={handleInputChangeforStatus}
              >
                <option value={6}> All Status </option>

                <option value={0}>New</option>
                <option value={1}>Checked-In</option>
                <option value={2}>Admitted</option>
                <option value={3}>Discharged</option>
                <option value={4}>Cancelled</option>
                <option value={5}>Resheduled</option>


              </Form.Select>
            </Col>
            <Col md={12} xl={2} lg={12} className='px-2'>
              <Form.Select
                aria-label="Default select example"
                className={styles.textboxwdth44}

                value={form.floorId}
                name="floorId"
                onChange={handleInputChangeFloor}
              >
                <option value="0"> All Floors </option>
                {FloorData.map((each, idx) => {
                  return (
                    <option value={each.id}>{each.floor_name}</option>
                  )
                })}
              </Form.Select>
            </Col>
            <Col md={12} xl={2} lg={12} className='px-2'>
              <Form.Select
                aria-label="Default select example"
                className={styles.textboxwdth44}

                value={form.wardId}
                name="wardId"
                onChange={handleInputChange}
              >
                <option value="0"> All Wards </option>
                {WardData.map((each, idx) => {
                  return (
                    <option value={each.id}>{each.ward_name}</option>
                  )
                })}
              </Form.Select>
            </Col>
            <Col md={12} xl={3} xs={12} className='px-2 px-md-2 px-lg-2 px-xl-0'>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text" name="searchNames" value={form.searchNames}
                  placeholder="Search..." onChange={handleInputChange}
                  className={styles.textboxwdth44}
                  style={{ width: "100%!important" }}
                />
              </Form.Group>
            </Col>
            <Col className='mt-1 px-2' onClick={handleSerachState}>
              <Button className={`${styles.servicebtn} ms-xl-2`}>
                Search
              </Button>
            </Col>
          </Col>
        </div>
        <Col md={12} xl={12} lg={12} className='pr-0 mb-0'>
          <Card className={`${styles.font} brnone`}>
            <Card.Body className="pt-1">
              {PatientList ?
              <>
                <BootstrapTable bootstrap4 keyField='id' data={PatientDeatails} columns={columns} bordered={false} pagination={paginationFactory()} hover />
                     <small className="text-success h6" style={{
                    position: "relative",
                    bottom: "46px",
                    left: "25px"
                  }}> <i className="fa fa-square mx-1"></i>Admit to IP</small>
                  </>
                : <div className="text-center my-5">No Details Available</div>}
            </Card.Body>
          </Card>
        </Col>
      </div>
    </React.Fragment>
  )
}

export default CrossConsultation