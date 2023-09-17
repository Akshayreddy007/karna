import React, { useEffect, useState } from 'react'
import { Card, Col, Form, Button, Modal, Table } from 'react-bootstrap';
import { useRouter } from 'next/router';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import styles from '../../styles/IPD_Receptionist/Appointments.module.scss';
import Change_Bed from './ChangeBed';
import Upload_Consent from './UploadConsent';
import Check_In from './CheckIn';
import Cancel_Appointment from './CancelAppointment';
import Schedule_Consultation from './ScheduleConsultation';
import Assign_Doctor from './AssignDoctor';
import Reschedule_Consultation from './RescheduleConsultation';
import Visitor_Id from './VisitorId';
import Wallet from './Wallet';
import Link from 'next/link';
import { useQuery, useMutation } from '@apollo/client';
import { GET_IP_PATIENTS, GET_DEPARTEMNTS, GET_WARDS, GET_FLOORS } from '../../graphql/queries'
import { UPDATE_STATUS_AS_ADMITED } from '../../graphql/mutations'
import { useRecoilState } from 'recoil';
import { appointmentTable } from '../../shared/appointments'
import patientDetails from '../../shared/patientreg'
import { ipPatientRegistration } from '../../shared/patientreg'
import { schedule, checkin } from '../../shared/schedule';
import scheduleDetails from '../../shared/schedule'
import assignDetails from '../../shared/assigndoctor'
import { assigndoctor } from '../../shared/assigndoctor'
import { addipservices } from '../../shared/addipservices'
import Services from './Services'
import { addservices } from '../../shared/service'
import { getbedsfilterState } from '../../shared/getbedsfilterState'
import SuccessMessage, { showMessage } from '../alertmessages/Alertmessages'


const Appointments = () => {
  const router = useRouter();
  const [form, setForm] = useRecoilState(appointmentTable)
  const [pform, setPform] = useRecoilState(ipPatientRegistration)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);
  const [checkinmodal, setCheckinModal] = useState(false);
  const [cancelappointmentmodal, setCancelAppointmentModal] = useState(false);
  const [scheduleconsultationmodal, setScheduleConsultationModal] = useState(false);
  const [assigndoctormodal, setAssignDoctorModal] = useState(false);
  const [reschedulemodal, setRescheduleModal] = useState(false);
  const [visitormodal, setVisitorModal] = useState(false);
  const [walletmodal, setWalletModal] = useState(false);
  const [serviceshow, setServicesShow] = useState(false)
  const [pdetails, setPDetails] = useState("");
  const [sform, setSform] = useRecoilState(schedule)
  const [aform, AsetForm] = useRecoilState(assigndoctor)
  const [cform, CsetForm] = useRecoilState(checkin)
  const [addform, AddsetForm] = useRecoilState(addipservices)
  const [payform, PaysetForm] = useRecoilState(addservices)
  const [bform, setBform] = useRecoilState(getbedsfilterState)
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

  const bedChange = (each) => {
    setShow(true);
    setPDetails({ ...each });
    setTimeout(() => setEllipseIndex(""), 1);
  };

  const bedChangeClose = () => {
    setShow(false);
    setPDetails("");
    setTimeout(() => setEllipseIndex(1), 1000);
  };

  //handle cancel appointments
  const cancelAppointmentData = (each) => {
    setCancelAppointmentModal(true);
    setPDetails({ ...each })
    setTimeout(() => setEllipseIndex(""), 1);
  }

  const cancelAppointmentDataClose = () => {
    setCancelAppointmentModal(false);
    setPDetails("")
    setTimeout(() => setEllipseIndex(1), 1000);
  }

  //handle wallet
  const handleWallet = (each) => {
    setWalletModal(true);
    setPDetails({ ...each })
    setTimeout(() => setEllipseIndex(""), 1);
  }

  const handleWalletClose = () => {
    setWalletModal(false);
    setPDetails("")
    setTimeout(() => setEllipseIndex(1), 1000);
  }

  // handle visitor
  const visitorIdData = (each) => {
    setVisitorModal(true)
    setPDetails({ ...each })
    setTimeout(() => setEllipseIndex(""), 1);
  }

  const visitorIdDataClose = () => {
    setVisitorModal(false)
    setPDetails("")
    setTimeout(() => setEllipseIndex(1), 1000);
  }

  // uploadConsent
  const uploadConsentData = (each) => {
    setModalShow(true)
    setPDetails({ ...each })
    setTimeout(() => setEllipseIndex(""), 1);
  }

  const uploadConsentDataClose = () => {
    setModalShow(false)
    setPDetails("")
    setTimeout(() => setEllipseIndex(1), 1000);
  }

  const handleClick = (data) => {
    localStorage.setItem("item", JSON.stringify(data));
    setPform({
      ...patientDetails,
    })
    setBform({
      ...bform,
      block: 0,
      floor: 0,
      ward: 0,
      bed: 0,
      bedType: 0,
      submitError: ""
    })
    AddsetForm({
      ...addform,
      servicedetails: [],
      discount: 0,
      remarks: "",
      submitError: "",
      pageaccess: true
    })
    router.push('/ipr_billing');
  };

  const { data, loading, error, refetch } = useQuery(GET_IP_PATIENTS, {
    variables: {
      department: parseInt(form.department),
      search: form.search,
      floor: parseInt(form.floor),
      ward: parseInt(form.ward),
      crossConsultationAppid: 0,
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

  const [updateInitialAssessmentStatus] = useMutation(UPDATE_STATUS_AS_ADMITED, {
    onError: (err) => {
      if (err.message === "Request failed with status code 422") {
        console.log("Got continuous requests. Please try again");
      } else {
        console.log(err.message);
      }
    },
    onCompleted: () => refetch(), // Assuming refetch is defined elsewhere in the component.
  });

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

  //handleSchedule and setPdaetils
  const handleSchedule = (data) => {
    setPDetails(data)
    setSform({
      ...scheduleDetails
    })
    setScheduleConsultationModal(true)
    setTimeout(() => setEllipseIndex(""), 1);
  }

  //handleSchedule Close
  const handleScheduleClose = () => {
    setPDetails("")
    setSform({
      ...scheduleDetails
    })
    setScheduleConsultationModal(false)
    setTimeout(() => setEllipseIndex(1), 1);
  }

  // handleReSchedule
  const handleReSchedule = (data) => {
    setPDetails(data)
    setSform({
      ...scheduleDetails
    })
    setRescheduleModal(true)
    setTimeout(() => setEllipseIndex(""), 1);
  }

  //handleReSchedule Close
  const handleReScheduleClose = () => {
    setPDetails("")
    setSform({
      ...scheduleDetails
    })
    setRescheduleModal(false)
    setTimeout(() => setEllipseIndex(1), 1000);
  }


  // handleassignDoctor
  const handleassignDoctor = (data) => {
    setPDetails(data)
    AsetForm({
      ...assignDetails
    })
    setAssignDoctorModal(true)
    setTimeout(() => setEllipseIndex(""), 1);
  }

  // handleassignDoctor
  const handleassignDoctorClose = () => {
    setPDetails()
    AsetForm({
      ...assignDetails
    })
    setAssignDoctorModal(false)
    setTimeout(() => setEllipseIndex(1), 1000);
  }

  //handle Checkin
  const handleCheckIn = (data) => {
    setPDetails(data)
    CsetForm({
      ...cform, submitError: ""
    })
    setCheckinModal(true)
    setTimeout(() => setEllipseIndex(""), 1);
  }

  //handleClose Checkin
  const handleCheckInClose = () => {
    setPDetails("")
    CsetForm({
      ...cform, submitError: ""
    })
    setCheckinModal(false)
    setTimeout(() => setEllipseIndex(1), 100);
  }

  //service handleShow

  const handleServices = (data) => {
    setPDetails(data)
    PaysetForm({
      ...payform,
      submitError: "",
      cash: "",
      paymentMethod: 2,
      onlinePay: "",
      servicedetails: [],
      username: ""
    })
    setServicesShow(true)
    setTimeout(() => setEllipseIndex(""), 1);
  }

  const handleServicesClose = () => {
    setPDetails("")
    PaysetForm({
      ...payform, submitError: "",
      servicedetails: [],
      cash: "",
      paymentMethod: 2,
      onlinePay: "",
      username: ""
    })
    setServicesShow(false)
    setTimeout(() => setEllipseIndex(1), 1000);
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


  // Admiited Status Mutation Submit

  function ChangeStatustoAdmitted(each) {
    if (each && each.status === 1 && each.ip_appointment_id) {
      updateInitialAssessmentStatus({
        variables: {
          ipAppointmentId: each.ip_appointment_id,
        },
        update: (cache, { data }) => {
          if (data.updateInitialAssessmentStatus) {
            // showMessage("Patient Admitted successfully", "success");
          }
        },
      });
    }
  }

  let PatientDeatails = [];
  let PatientList = false;
  if (IpPatients && IpPatients.length > 0) {
    PatientList = true;
    PatientDeatails = IpPatients.map((each, idx) => {
      let PatientName = "NA";
      let Gender = "NA";
      let Age = "NA";
      let DoctorName = "NA";
      let Department = "NA";
      let Status = "";
      let ViewStatus = false;

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
        const { name, age, gender } = each.PatientData;
        PatientName = name || "NA";
        Age = age || "NA";
        Gender = gender === 0 ? "F" : gender === 1 ? "M" : gender === 2 ? "O" : "NA";
      }

      //view Status
      if (each.status === 1 && each.bed) {
        ViewStatus = true
      } else if (each.status === 2) {
        ViewStatus = true
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


      let AppointmentType = "";
      if (each.appointment_type && each.appointment_type == 1) {
        AppointmentType = 1
      }


      return {
        EMG: <span>{AppointmentType ? <div className={`nowwrap bg-success text-success`} style={{ width: "2px", height: "45px" }} title={`OP`} role="button"></div> : each.case_type == 1 ? <div className={`nowwrap bg-danger text-danger`} style={{ width: "2px", height: "45px" }} title={`EMERGENCY`} role="button"></div> : ""}</span>,
        UHID_IP_ADMISNNO: (
          <div className='nowwrap1 f15'>
            <div className="theme14" key={idx}>{each.uhid}</div>
            <div className='theme12'>{`${each.display_ip_appointment_id}`}</div>
          </div>
        ),
        PATIENTNAME_AGE_GENDER: (
          <div className='nowwrap1 f15'>
            <div className="theme14">{PatientName}</div>
            <div className='theme12'>{`${Age}/${Gender}`}</div>
          </div>
        ),
        GUARDIAN_CONTACT_NO: (
          <div className='nowwrap1 f15'>
            <div className="theme14">{AttenderName || "NA"}</div>
            <div className='theme12'>{AttenderMobile || "NA"}</div>
          </div>
        ),
        BEDLOCATION: (
          <div className='nowwrap1 f15'>
            <div className="theme14">{firstTwoValues || "NA"}</div>
            <div className='theme13'>{lastTwoValue || "NA"}</div>
          </div>
        ),
        DOCTOR_DEPARTMENT: (
          <div className='nowwrap1 f15'>
            <div className="theme14">{DoctorName ? `Dr ${DoctorName}` : "NA"}</div>
            <div className='theme12'>{Department}</div>
          </div>
        ),
        STATUS: <div className={Status === "Cancelled" ? styles.discharged : Status === "Rescheduled" ? styles.scheduled : styles.admitted}>{Status}</div>,
        Resheduled: <div className='nowwrap1 f15'>{each.resheduled ? <span className="text-primary">Yes</span> : <span className="text-dark">No</span>}</div>,
        BALANCE: <div className={walletStatus ? styles.discharged : styles.admitted}>{Math.ceil(TotalWalletAmount)} <i className="fal fa-rupee-sign"></i></div>,
        ACTION: (
          <div className='nowwrap1 d-flex'>
            {Status != "Discharged" && Status != "Cancelled" && Status != "" &&

              <React.Fragment>
                {/* view options for Admitted and (Checked-In when Bed Assign) */}
                <Link href="/ipd_nurse_view">
                {ViewStatus &&
                  <i className='fal fa-eye me-2 px-2 py-2 f15' role="button" onClick={() => ChangeStatustoAdmitted(each)}></i>
                }
                </Link>
                {/* <i className='fal fa-edit me-2 px-2 py-2 f15'></i> */}
                <div className="dropdown-container py-1" tabindex={ellipseindex} onClick={setEllipse}>
                  <div className="three-dots px-2 py-1"></div>
                  <div className="dropdown">
                    {Status === "New" || Status === "Rescheduled" ? (
                      <>
                        {/* Show CheckIn, ReSchedule and Cancel for Status New */}
                        <div className='pt-2 pb-2 ps-3' onClick={() => handleCheckIn(each)} role="button">Check in</div>
                        <div className='pt-2 pb-2 ps-3' onClick={() => handleassignDoctor(each)} role="button">Assign Doctor</div>
                        <div className='pt-2 pb-2 ps-3' onClick={() => handleReSchedule(each)} role="button">Reschedule Admission</div>
                        <div className='pt-2 pb-2 ps-3' onClick={() => cancelAppointmentData(each)} role="button">Cancel Appointment</div>
                      </>
                    ) : Status === "Admitted" ? (
                      <>
                        {/* Show all options except Reschedule Admission for Admitted status */}
                        <div className='pt-2 pb-2 ps-3' onClick={() => handleWallet(each)} role="button">Wallet</div>
                        {!each.final_bill_status ?
                          <>
                            <div className='pt-2 pb-2 ps-3' onClick={() => bedChange(each)} role="button">Change Bed</div>
                          </> : ""}
                        <div className='pt-2 pb-2 ps-3' role="button">Discharge Summary</div>
                        {!each.final_bill_status ?
                          <>
                            <div className='pt-2 pb-2 ps-3' onClick={() => uploadConsentData(each)} role="button">Upload Consent</div>
                            <div className='pt-2 pb-2 ps-3' onClick={() => handleSchedule(each)} role="button">Schedule consultation</div>
                            <div className='pt-2 pb-2 ps-3' onClick={() => handleassignDoctor(each)} role="button">Assign Doctor</div>
                            <div className='pt-2 pb-2 ps-3' onClick={() => visitorIdData(each)} role="button">Visitor ID</div>
                            <div className='pt-2 pb-2 ps-3' role="button" onClick={() => handleServices(each)}>Add Service / Bill</div>
                          </> : ""}
                        <div className='pt-2 pb-2 ps-3' onClick={() => handleClick(each)} role='button'>Final Billing</div>
                      </>
                    ) : Status === "Checked-In" ? (
                      <>
                        {/* Show only cancel and Change Bed for Checked-In or Sheduled status */}
                        <div className='pt-2 pb-2 ps-3' onClick={() => cancelAppointmentData(each)} role="button">Cancel Appointment</div>
                        <div className='pt-2 pb-2 ps-3' onClick={() => bedChange(each)} role="button">Change Bed</div>
                        <div className='pt-2 pb-2 ps-3' onClick={() => handleassignDoctor(each)} role="button">Assign Doctor</div>
                      </>
                    ) : ""}
                  </div>
                </div>
              </React.Fragment>}
          </div>
        )
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
      dataField: "UHID_IP_ADMISNNO",
      text: (
        <div className='f13'>
          UHID /<br /> IP ADMISN NO
        </div>
      ),
    },
    {
      dataField: "PATIENTNAME_AGE_GENDER",
      text: (
        <div className='f13'>
          PATIENT NAME/<br /> AGE/GENDER
        </div>
      ),
    },
    {
      dataField: "GUARDIAN_CONTACT_NO",
      text: (
        <div className='f13'>
          GUARDIAN /<br />CONTACT NO
        </div>
      ),
    },
    {
      dataField: "BEDLOCATION",
      text: (<div className='f13'> BED LOCATION  </div>),

    },
    {
      dataField: "DOCTOR_DEPARTMENT",
      text: (
        <div className='f13'>
          DOCTOR /<br />DEPARTMENT
        </div>
      ),
    },
    {
      dataField: "STATUS",
      text: (<div className='f13'>STATUS </div>),
    },
    // {
    //   dataField: "Resheduled",
    //   text: (<div className='f13'>RESHEDULED</div>),

    // },
    {
      dataField: "BALANCE",
      text: (<div className='f13'>BALANCE </div>),
    },

    {
      dataField: "ACTION",
      text: (<div className='f13'>ACTION</div>)
    },
  ];

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
    <React.Fragment>
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
              <Button className={`${styles.servicebtn} ms-xl-2`}>
                Search
              </Button>
            </Col>
          </Col>
          <Col md={12} lg={12} xl={2} className={`text-xl-end mt-md-2 mt-lg-2 mt-xl-0  mt-2 `}>
            <Link href='/ipr_patientregistration'>
              <Button className={styles.servicebtn}>
                Admit Patient
              </Button>
            </Link>
          </Col>
        </div>
        <Col md={12} xl={12} lg={12} className='pr-0 mb-0'>
          {/* success message */}
          {/* <SuccessMessage /> */}
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
                : <div className="text-center my-5">No Details Available</div>
              }
            </Card.Body>
          </Card>
        </Col>
      </div>
      <Change_Bed show={show} onHide={bedChangeClose} test={pdetails} refetch={refetch} />
      <Upload_Consent show={modalShow} onHide={uploadConsentDataClose} test={pdetails} refetch={refetch} />
      <Check_In show={checkinmodal} onHide={handleCheckInClose} pdetails={pdetails} refetch={refetch} />
      <Cancel_Appointment
        show={cancelappointmentmodal}
        onHide={cancelAppointmentDataClose}
        test={pdetails}
        refetch={refetch}
      />
      <Schedule_Consultation show={scheduleconsultationmodal} onHide={handleScheduleClose} pdetails={pdetails} refetch={refetch} />
      <Assign_Doctor show={assigndoctormodal} onHide={handleassignDoctorClose} pdetails={pdetails} refetch={refetch} />
      <Reschedule_Consultation show={reschedulemodal} onHide={handleReScheduleClose} pdetails={pdetails} refetch={refetch} />
      <Visitor_Id show={visitormodal} onHide={visitorIdDataClose} test={pdetails} refetch={refetch} />
      <Wallet show={walletmodal} onHide={handleWalletClose} test={pdetails} refetch={refetch} />
      <Services show={serviceshow} onHide={handleServicesClose} refetch={refetch} pdetails={pdetails} />
    </React.Fragment>
  )
}

export default Appointments