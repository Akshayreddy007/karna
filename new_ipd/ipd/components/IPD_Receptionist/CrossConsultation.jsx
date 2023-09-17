import React, { useState } from "react";
import { Col, Form, Button, Card } from "react-bootstrap";
import styles from "../../styles/IPD_Doctor/CrossConsultation.module.scss";
import { Space, Switch, Table } from "antd";
import { useQuery } from '@apollo/client';
import { GET_IP_PATIENTS, GET_DEPARTEMNTS, GET_WARDS, GET_FLOORS } from '../../graphql/queries'
import { useRecoilState } from 'recoil';
import { appointmentTable } from '../../shared/appointments'
import moment from 'moment';
import Vitals from "./Vital";
import Uploads from "./Uploads"
// import Rx from "./Rx";
import { vitalsState } from "../../shared/vitalsState";
import { UploadsState } from "../../shared/uploads";


const CrossConsultationList = () => {
  const [form, setForm] = useRecoilState(appointmentTable)
  const [vitalshow, setVitalshow] = useState(false)
  const [patientDetails, setPatientDetails] = useState("")
  const [vitals, setVitals] = useRecoilState(vitalsState)
  const [uploadshow, setUploadshow] = useState(false)
  const [rxshow, setRxshow] = useState(false)
  const [uploadform, setUploadform] = useRecoilState(UploadsState)
  const [ellipseindex, setEllipseIndex] = useState(1);

  //open ellipse onclick condition
  const setEllipse = () => {
    setEllipseIndex(1)
  }

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

  // handle Show Vitals
  const hanldeShowVital = (each) => {
    setVitals({
      formValid: false,
      submitError: "",
      vitalsarray: [],
      temperature: "",
      pulse: "",
      systolic_bp: "",
      diastolic_bp: "",
      random_blood_sugar: "",
      height: "",
      weight: "",
      spo2: "",
      respiratory_rate: "",
      bmi: "",
      bmicategory: "",
    })
    setPatientDetails({ ...each })
    setVitalshow(true)
    setTimeout(() => setEllipseIndex(""), 1);
  }
  const hanldeCloseVital = () => {
    setVitals({
      formValid: false,
      submitError: "",
      vitalsarray: [],
      temperature: "",
      pulse: "",
      systolic_bp: "",
      diastolic_bp: "",
      random_blood_sugar: "",
      height: "",
      weight: "",
      spo2: "",
      respiratory_rate: "",
      bmi: "",
      bmicategory: "",
    })
    setPatientDetails("")
    setVitalshow(false)
    setTimeout(() => setEllipseIndex(1), 1000);

  }

  // uploads

  const handleShowUploads = (each) => {
    setPatientDetails({ ...each })
    setUploadform({
      formValid: false,
      submitError: "",
      submitError1: "",
      detailsarray: [{}],
    })
    setUploadshow(true)
    setTimeout(() => setEllipseIndex(""), 1);
  }

  const handleCloseUploads = () => {
    setPatientDetails("")
    setUploadshow(false)
    setTimeout(() => setEllipseIndex(1), 1000);

  }

  // rx

  const handleShowRx = (each) => {
    setPatientDetails({ ...each })
    setRxshow(true)
    setTimeout(() => setEllipseIndex(""), 1);
  }

  const handleCloseRx = () => {
    setPatientDetails("")
    setRxshow(false)
    setTimeout(() => setEllipseIndex(1), 1000);

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

  const columns = [
    {
      title: "APPOINTMENT NO",
      dataIndex: "AppointmentNo",
      key: "AppointmentNo",
    },
    {
      title: "DATE & TIME",
      dataIndex: "Datetime",
      key: "Datetime",
    },
    {
      title: "PATIENT NAME ",
      dataIndex: "PatientName",
      key: "PatientName",
    },
    {
      title: "MOBILE NO",
      dataIndex: "Mobileno",
      key: "Mobileno",
    },
    {
      title: "DOCTOR",
      dataIndex: "Doctor",
      key: "Doctor",
    },
    {
      title: "STATUS",
      dataIndex: "Status",
      key: "Status",
    },
    {
      title: "ACTION",
      dataIndex: "Action",
      key: "Action",
    },
  ];

  let PatientData = [];
  let PatientList = false;

  if (IpPatients && IpPatients.length > 0) {
    PatientList = true
    PatientData = IpPatients.map((each, idx) => {
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

      const DATE = moment.unix(each.ip_appointment_timestamp).format("DD.MM.YYYY") || "NA";
      const TIME = moment.unix(each.ip_appointment_timestamp).format("hh:mm a") || "NA";

      let AppointmentType = "";
      if (each.appointment_type && each.appointment_type == 1) {
        AppointmentType = 1
      }


      return {

        key: idx + 1,
        AppointmentNo: each.display_ip_appointment_id,
        Datetime: DATE + " - " + TIME,
        PatientName: (
          <div>
            <span>{PatientName}</span>
            <span className="theme12">({`${Age}/${Gender}`})</span>
          </div>
        ),
        Mobileno: PatientMobile,
        Doctor: DoctorName ? "Dr " + DoctorName : "NA",
        Status: (
          <div className={Status === "Cancelled" ? styles.discharged : Status === "Rescheduled" ? styles.scheduled : styles.admitted}>
            <span className={Status === "Cancelled" ? styles.clr1 : Status === "Rescheduled" ? styles.clr2 : styles.clr2}>
              <i className="fa fa-circle"></i>
            </span>
            <span className="ps-1">{Status}</span>
          </div>
        ),
        Action: (
          <div className="nowwrap1 d-flex ">
            <i className="fal fa-eye  px-2 py-2  f15"></i>
            <i className="fal fa-prescription px-2 py-2  f15"></i>
            <div class="dropdown-container py-1" tabindex={ellipseindex} onClick={setEllipse}>
              <div class="three-dots px-2 py-1"></div>
              <div class="dropdown">
                <div className="pt-2 pb-1 ps-1" role="button" 
                // onClick={() => handleShowRx(each)}
                >
                  Rx
                </div>
                <div className="pt-2 pb-1 ps-1" role="button" onClick={() => hanldeShowVital(each)}>
                  Vitals
                </div>
                <div className="pt-2 pb-1 ps-1" role="button" onClick={() => handleShowUploads(each)}>
                  Uploads
                </div>
              </div>
            </div>
          </div>
        ),
        children: [
          {
            key: 11,
            AppointmentNo: (
              <div>
                <div className="theme12">UHID</div>
                <div className="ps-4 ms-3">{each.uhid ? each.uhid : "NA"}</div>
              </div>
            ),
            Datetime: (
              <div>
                <div className="theme12">GUARDIAN DETAILS</div>
                <div>{AttenderName}</div>
              </div>
            ),
            PatientName: (
              <div>
                <div className="theme12">GUARDIAN DETAILS</div>
                <div>{AttenderMobile}</div>
              </div>
            ),
            Mobileno: (
              <div>
                <div className="theme12">DEPARTMENT</div>
                <div>{Department}</div>
              </div>
            ),
            Doctor: (
              <div>
                <div className="theme12">SERVICE</div>
                <div>{ServiceName}</div>
              </div>
            ),
          },
        ],
      }

    })
  }
  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleInputChangeforStatus = (event) => {
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
    <div>
      <div className='pe-3'>
        <div className={`d-xl-flex mb-2 align-items-center ${styles.pssticky}`}>
          <Col md={12} lg={12} xl={10} className={`d-xl-flex bg-white py-2 rounded  `}>
            <Col md={12} xl={2} lg={12} className='px-2'>
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
            </Col>
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
              <Button className={`${styles.servicebtn} ms-xl-2 `}>
                Search
              </Button>
            </Col>
          </Col>

        </div>
      </div>
      <div className="mt-3">
        <Card className={`${styles.bdrnone} min_ht72`}>
          {!loading ?
            <Card.Body id="bedtable1" className={styles.bdrnone}>
              <Table
                columns={columns}
                rowSelection={null}
                dataSource={PatientData}
                scroll={{ x: true }}
              />
            </Card.Body> : loading ? <span className="text-center my-3">Loading please wait </span> : ""}
        </Card>
      </div>
      <Vitals patientDetails={patientDetails} vitalShow={vitalshow} vitalClose={hanldeCloseVital} />
      <Uploads patientDetails={patientDetails} UploadShow={uploadshow} UploadClose={handleCloseUploads} />
      {/* <Rx patientDetails={patientDetails} RxClose={handleCloseRx} RxShow={rxshow} /> */}
    </div>
  );
};

export default CrossConsultationList;