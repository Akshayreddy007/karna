import React , {useState, useEffect} from 'react';
import { Modal, Form, Button, Col, Table } from 'react-bootstrap'
import styles from '../../styles/IPD_Receptionist/Appointments.module.scss'
import { ADD_SHEDULE_APPOINTMENT } from '../../graphql/mutations'
import { GET_DEPARTEMNTS, GET_DOCTORS, GET_SCHEDULE_SLOTS, GET_ADMIN_USERS, GET_BLOCKDATES } from '../../graphql/queries'
import { useQuery, useMutation } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { schedule } from '../../shared/schedule'
import moment from 'moment';
import SuccessMessage, { showMessage } from '../alertmessages/Alertmessages'

const ScheduleConsultation = (props) => {
    const [form, setForm] = useRecoilState(schedule)
    const [disableloading, setDisableLoading] = useState(false);

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

    const newDate = new Date();
    const yyy = newDate.getFullYear();
    const mmm = String(newDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
    const ddd = String(newDate.getDate()).padStart(2, '0');

    const todayDate = `${yyy}-${mmm}-${ddd}`;

    const [AddSheduleAppointment, { loading }] = useMutation(ADD_SHEDULE_APPOINTMENT, {
        onCompleted: props.refetch
    })

    useEffect(() => {
        if (loading) {
            setDisableLoading(true);
        }
        setTimeout(() => {
            setDisableLoading(false);
        }, [2500])
    }, [loading])


    const pdetails = props.pdetails || {}

    let appointmentId = "";
    let Name = "";
    let Age = "";
    let Gender = "";
    let Mobile = "";
    let AttenderName = "";
    let AttenderMobile = "";
    let DisAppointment = "";
    let Status = "";
    let TimeStampDate = "";
    let DoctorUsername = "";
    let DoctorId = 0;
    let UHID = "";
    let Assigndoctors = [];
    let DoctorName = "";
    if (pdetails && pdetails.ip_appointment_id) {
        appointmentId = pdetails.ip_appointment_id;

        const { PatientData, display_ip_appointment_id, status, timestamp, doctor_username, doctor, gerdian_details, uhid, assigndoctor, resheduled } = pdetails;

        if (PatientData) {
            Name = PatientData.name || "";
            Age = PatientData.age || "";
            Gender = PatientData.gender === 1 ? 'M' : PatientData.gender === 2 ? 'O' : PatientData.gender === 0 ? 'F' : "";
            Mobile = PatientData.mobile || "";
        }
        UHID = uhid || "NA"
        if (status === 0 && resheduled) {
            Status = "Rescheduled"
        } else if (status === 0 && !resheduled) {
            Status = "New"
        } else if (status === 1) {
            Status = "Checked-In"
        } else if (status === 2) {
            Status = "Admitted"
        } else if (status === 3) {
            Status = "Discharged"
        } else if (status === 4) {
            Status = "Cancelled"
        }

        if (assigndoctor) {
            Assigndoctors = assigndoctor
        }

        if (gerdian_details && gerdian_details.length > 0) {
            if (gerdian_details[0]) {
                AttenderName = gerdian_details[0].Name || "NA"
            }
            if (gerdian_details[0]) {
                AttenderMobile = gerdian_details[0].Mobile || "NA"
            }
        }

        let arr = assigndoctor.find((each) => each.main_doctor)
        if (arr) {
            DoctorName = arr.doctor_name || "NA"
        }

        DisAppointment = display_ip_appointment_id || "";
        TimeStampDate = timestamp
        DoctorUsername = doctor_username || ""
        DoctorId = doctor || 0
    }

    // console.log(Assigndoctors, "Assigndoctors")
    // Day Conversions
    const mydate = moment(form.date, 'YYYY-MM-DD');
    const dayId = mydate.format("d");

    //convert Date
    const formattedDate = mydate.format("DD-MM-YYYY");

    //timestamp
    const isToday = mydate.isSame(moment(), 'day');
    const timestamp = isToday ? Math.floor(Date.now() / 1000).toString() : (moment(mydate).format("x"));

    //disable past dates
    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };


    const { data, loading: loading1, error } = useQuery(GET_DEPARTEMNTS, {
        fetchPolicy: "cache-and-network"
    });

    const { data: data1, loading: loading2, error: error2 } = useQuery(GET_DOCTORS, {
        variables: {
            department: parseInt(form.department),
            hip: globalUserHip
        },
        fetchPolicy: "cache-and-network"
    });

    const { data: data2, loading: loading3, error: error3 } = useQuery(GET_SCHEDULE_SLOTS, {
        variables: { username: form.doctorusername, day: parseInt(dayId) || 0, timestamp: timestamp },
        fetchPolicy: "network-only"
    })

    const { data: data3 } = useQuery(GET_ADMIN_USERS, {
        variables: {
            username: form.doctorusername,
            name: "",
            hip: globalUserHip
        },
        fetchPolicy: "network-only"
    })


    const { data: data4 } = useQuery(GET_BLOCKDATES, {
        variables: {
            date: formattedDate,
            username: form.doctorusername
        }, fetchPolicy: "network-only"
    })

    //blocked date for doctor
    let DoctorAvialble = 1;
    if (data4 && data4.getdoctorblockdate && form.doctor > 0) {
        if (data4.getdoctorblockdate.length > 0) {
            if (data4.getdoctorblockdate[0]) {
                if (data4.getdoctorblockdate[0].entire_day) {
                    DoctorAvialble = 0
                }
            }
        }
    }

    // Department query data
    let Departments = [];
    if (data && data.getDepartments) {
        Departments = data.getDepartments;
    }

    // Doctor query data
    let Doctors = [];
    if (data1 && data1.getDoctors) {
        if (form.department > 0) {
            data1.getDoctors.forEach((item, index) => {
                Doctors.push({
                    id: item.id,
                    name: item.details.name,
                    username: item.details.username,
                });
            });
        }
    }

    // Assuming data3, DoctorAvailable, form.date, and slottimmings are available and defined elsewhere in the code.

    // Function to remove duplicates from an array based on a specific key.
    function uniqByKeepLast(data, key) {
        return [...new Map(data.map(item => [key(item), item])).values()];
    }

    // Filter and transform data if conditions are met
    let filterData = [];
    if (data3 && data3.getAdminUsers && DoctorAvialble && form.date) {
        if (data3.getAdminUsers.length > 0 && data3.getAdminUsers[0]) {
            const doctorServices = data3.getAdminUsers[0].doctorServices || [];
            filterData = doctorServices.map(each => ({
                ...each,
                serid: each.service_id,
                sertext: each.service_name,
            }));
        }
    }

    // Remove duplicate services based on the serid property
    let FilterDuplicateServices = uniqByKeepLast(filterData, it => it.serid);

    //handleChange for Department
    const handleChangeforDepartment = (event) => {
        const { name, value } = event.target
        if (value) {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
                submitError: "",
                doctor: "",
                serviceType: 0,
                doctorusername: "",
                date: todayDate,
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
                doctor: "",
                serviceType: 0,
                doctorusername: "",
                date: todayDate,
                formErrors: {
                    ...prevForm.formErrors,
                    [name]: "",
                },
            }))
        }

    }

    const handleChangeforDoctor = (event) => {
        const { name, value, options } = event.target;
        const uname = options[options.selectedIndex].getAttribute("uname"); // Retrieve the 'uname' attribute

        if (value) {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
                doctorusername: uname,
                submitError: "",
                serviceType: 0,
                date: todayDate,
                formErrors: {
                    ...prevForm.formErrors,
                    [name]: ""
                }
            }));
        } else {
            setForm((prevForm) => ({
                ...prevForm,
                submitError: "",
                [name]: "",
                doctorusername: "",
                formErrors: {
                    ...prevForm.formErrors,
                    [name]: ""
                }
            }));
        }
    };

    const handleChangeformDate = (event) => {
        const { name, value } = event.target;
        if (value) {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
                submitError: "",
                time: "",
                serviceType: 0,
                formErrors: {
                    ...prevForm.formErrors,
                    [name]: ""
                }
            }))
        } else {
            setForm((prevForm) => ({
                ...prevForm,
                submitError: "",
                [name]: "",
                formErrors: {
                    ...prevForm.formErrors,
                    [name]: ""
                }
            }))
        }
    }

    // for remainging form 
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (value) {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
                submitError: "",
                formErrors: {
                    ...prevForm.formErrors,
                    [name]: ""
                }
            }))
        } else {
            setForm((prevForm) => ({
                ...prevForm,
                submitError: "",
                [name]: "",
                formErrors: {
                    ...prevForm.formErrors,
                    [name]: ""
                }
            }))
        }
    }


    const handleSchedule = async () => {
        let formValid = true
        //convert Date
        const mydate = moment(form.date, 'YYYY-MM-DD');
        const Date = mydate.format("DD-MM-YYYY") || "";
        if (!form.serviceType || !form.doctor || !form.department || !Date) {
            formValid = false
        }

        const sdetails = {
            ipAppointmentId: appointmentId,
            department: parseInt(form.department),
            doctor: parseInt(form.doctor),
            date: Date,
            serviceType: parseInt(form.serviceType),
        }

        try {
            if (appointmentId) {
                if (formValid) {
                    const { data } = await AddSheduleAppointment({
                        variables: sdetails,
                    });
                    if (data && data.AddSheduleAppointment) {
                        setForm((prevForm) => ({
                            ...prevForm,
                            submitError: "Scheduled successfully",
                        }));
                        showMessage("Scheduled successfully", "success");

                        setTimeout(() => {
                            props.onHide()
                        }, [2500])

                    } else {
                        setForm((prevForm) => ({
                            ...prevForm,
                            submitError: "Something went wrong. Please try again",
                        }));
                    }
                } else {
                    setForm((prevForm) => ({
                        ...prevForm,
                        submitError: "Please fill all mandatory fields",
                    }));
                }
            } else {
                setForm((prevForm) => ({
                    ...prevForm, submitError: "Some thing went wrong please try sometime"
                }))
            }
        } catch (error) {
            if (error.message === "Request failed with status code 422") {
                setForm((prevForm) => ({
                    ...prevForm,
                    submitError: "Too many continuous requests. Please try again later",
                }));
            } else {
                setForm((prevForm) => ({
                    ...prevForm,
                    submitError: error.message,
                }));
            }
        }
    }


    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton className='bdr2'>
                    <Modal.Title id="contained-modal-title-vcenter" className={`px-md-3 f15 ${styles.font}`}>
                        Schedule Consultation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    {/* Allert Messges */}
                    <SuccessMessage />
                    <div className='row align-items-center pe-md-5 ps-md-0 ps-3 mx-md-4'>
                        <Col md={6} xl={3} lg={3} sm={6} xs={6} className='ps-0 mb-lg-3 mb-md-3 mb-0'>
                            <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>UHID</Form.Label>
                            <div className={`f14 ${styles.font}`}>{UHID}</div>
                        </Col>
                        <Col md={6} xl={3} lg={3} sm={6} xs={6} className=' ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0'>
                            <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>NAME</Form.Label>
                            <div className={`f14 ${styles.font}`}>{Name} ({Age} {Gender ? "/" + Gender : ""})</div>
                        </Col>
                        <Col md={6} xl={3} lg={3} sm={6} xs={6} className=' ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0'>
                            <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>MOBILE NO</Form.Label>
                            <div className={`f14 ${styles.font}`}>{Mobile ? "+91 " + Mobile : "NA"}</div>
                        </Col>
                        <Col md={6} xl={3} lg={3} sm={6} xs={6} className=' ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0'>
                            <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>GUARDIAN</Form.Label>
                            <div className={`f14 ${styles.font}`}>{AttenderName || "NA"} ({AttenderMobile || "NA"})</div>
                        </Col>
                    </div>
                    <div className='d-lg-flex align-items-center pe-md-5 ps-md-0 ps-2 mx-md-4'>
                        <Col md={6} xl={3} lg={3} sm={6} xs={6} className='  ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0 pb-3'>
                            <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>ADMISN NO</Form.Label>
                            <div className={`f14 ${styles.font}`}>{DisAppointment}</div>
                        </Col>
                        <Col md={6} xl={3} lg={3} sm={6} xs={6} className='  ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0 pb-3'>
                            <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>DATE & TIME</Form.Label>
                            <div className={`f14 ${styles.font}`}>({moment.unix(TimeStampDate).format("Do-MMM-YY hh:mm a")})</div>
                        </Col>
                        <Col md={6} xl={3} lg={3} sm={6} xs={6} className=' ps-0 mt-md-0 mb-lg-3 mb-md-3 mt-3 mb-5 pb-3'>
                            <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>STATUS</Form.Label>
                            <div className={`${styles.admitted} f14`}>{Status}</div>
                        </Col>
                    </div>
                    <div className='bdr2'>
                        <Col md={6} xl={3} lg={6} className='ps-md-0 ps-1 mb-3 ms-md-4 mt-4'>
                            <Form.Label className={`f12 theme12 ${styles.font} `}>CHIEF DOCTOR</Form.Label>
                            <div className={`f14 theme14 ${styles.font} `}>{DoctorName || "NA"}</div>
                        </Col>
                    </div>
                    {form.submitError === "Scheduled successfully" ? <span className="text-success">{""}</span> : <span className="text-danger">{form.submitError}</span>}
                    <div className="d-lg-flex mt-4">
                        <Col md={11} xl={4} lg={6} xs={11} className='ps-md-0 ps-2 mb-3 ms-md-4 mt-4'>
                            <Form.Label className={`f14 theme14 ${styles.font} mb-1 `}>Department*</Form.Label>
                            <Form.Select style={{ marginLeft: '0px !important' }}
                                aria-label="Default select example"
                                className={styles.textboxwdth44}
                                onChange={handleChangeforDepartment}
                                name="department"
                                value={form.department}
                                onBlur={() => {
                                    const isEmpty = form.department > 0;
                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        formErrors: { ...prevForm.formErrors, department: isEmpty ? "" : "department cannot be empty" }
                                    }))
                                }}
                            >
                                <option value={0}> select </option>
                                {Departments.map((each, index) => {
                                    return (
                                        <option key={index} value={each.id}>{each.department}</option>
                                    )
                                })}
                            </Form.Select>
                            <Form.Text className="text-danger">{form.formErrors.department}</Form.Text>

                        </Col>

                        <Col md={11} xl={4} lg={6} xs={11} className='ps-md-0 ps-1 mb-3 ms-md-4 mt-4'>
                            <Form.Label className={`f14 theme14 ${styles.font} mb-1 `}>Doctor*</Form.Label>
                            <Form.Select style={{ marginLeft: '0px!important' }}
                                aria-label="Default select example"
                                className={styles.textboxwdth44}
                                name="doctor"
                                value={form.doctor}
                                onChange={handleChangeforDoctor}
                                onBlur={() => {
                                    const isEmpty = form.doctor > 0;
                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        formErrors: { ...prevForm.formErrors, doctor: isEmpty ? "" : "doctor cannot be empty" }
                                    }))
                                }}
                            >
                                <option> select </option>
                                {Doctors.map((each, index) => (
                                    <option key={index} value={each.id} uname={each.username} className={Assigndoctors.some((item) => item.doctor == each.id) ? "d-none" : ""}>{each.name}</option>
                                ))}

                            </Form.Select>
                            <Form.Text className="text-danger">{form.formErrors.doctor}</Form.Text>

                        </Col>
                    </div>
                    <div className="d-lg-flex ">
                        <Col md={11} xl={4} lg={6} xs={11} className='ps-md-0 ps-0 mb-3 ms-md-4'>
                            <Form.Label className={`f14 theme14 ${styles.font} mb-1 `}>Date*</Form.Label>
                            <Form.Control style={{ marginLeft: '0px!important' }}
                                className={styles.textboxwdth44} type='date'
                                name="date"
                                value={form.date}
                                onChange={handleChangeformDate}
                                min={disablePastDate()}
                                onBlur={() => {
                                    const isEmpty = form.date;
                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        formErrors: { ...prevForm.formErrors, date: isEmpty ? "" : "date cannot be empty" }
                                    }))
                                }}
                            >
                            </Form.Control>
                            <Form.Text className="text-danger">{form.formErrors.date}</Form.Text>

                        </Col>
                        <Col md={11} xl={4} lg={6} xs={11} className='ps-md-0 ps-0 mb-3 ms-md-4'>
                            <Form.Label className={`f14 theme14 ${styles.font} mb-1 `}>Services*</Form.Label>
                            <Form.Select style={{ marginLeft: '0px!important' }}
                                value={form.serviceType}
                                name="serviceType"
                                className={styles.textboxwdth44}
                                onChange={handleChange}
                                onBlur={() => {
                                    const isEmpty = form.serviceType;
                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        formErrors: { ...prevForm.formErrors, serviceType: isEmpty ? "" : "Service cannot be empty" }
                                    }))
                                }}
                            >
                                <>
                                    {DoctorAvialble ?
                                        <option className="d-none">Select Service</option>
                                        :
                                        <option className="d-none" disabled>Doctor Not Available</option>
                                    }
                                    {FilterDuplicateServices && FilterDuplicateServices.map((item, index) => (
                                        <option value={parseInt(item.serid)} key={index}>{item.sertext}</option>
                                    ))}
                                </>
                            </Form.Select>
                            <Form.Text className="text-danger">{form.formErrors.serviceType}</Form.Text>
                        </Col>


                    </div>

                    <div className="d-lg-flex">

                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <div className='d-flex'>
                        <Col md={9} className='text-center'><div className='theme12'></div></Col>
                        <Col md={3} className='d-flex justify-content-end'>
                            <Button className={` ${styles.bdrnone} ${styles.font} bg-white theme13 me-2 `} onClick={props.onHide}>Cancel</Button>
                            <Button className={styles.submitbtn} onClick={handleSchedule} disabled={disableloading}>Submit</Button>
                        </Col>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ScheduleConsultation