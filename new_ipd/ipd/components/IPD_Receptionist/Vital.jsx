import React, { useEffect } from "react";
import {
    Row,
    Col,
    Form,
    InputGroup,
    FormLabel,
    Modal,
    Button
} from "react-bootstrap";
import { vitalsState } from "../../shared/vitalsState";
import validator from "validator";
import { useRecoilState } from "recoil";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_VITALS } from "../../graphql/mutations";
import { GET_IP_VITALS } from "../../graphql/queries";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";

const Vitals = ({ vitalShow, patientDetails, vitalClose }) => {
    const [form, setForm] = useRecoilState(vitalsState);
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

    let appointmentId = "";
    let Name = "";
    let Status = "";
    let TimeStampDate = "";
    let AppointmentType = "";
    let Age = "";
    let Gender = "";
    let DoctorName = "NA"
    let DoctorUsername = ""
    let IPID = "";


    if (patientDetails && patientDetails.ip_appointment_id) {
        appointmentId = patientDetails.ip_appointment_id;

        const { PatientData, status, timestamp, appointment_type, doctor_name, doctor_username, assigndoctor, resheduled, IpRecord } = patientDetails;

        if (PatientData) {
            Name = PatientData.name || "";
            Age = PatientData.age || "";
            Gender = PatientData.gender === 1 ? 'M' : PatientData.gender === 2 ? 'O' : PatientData.gender === 0 ? 'F' : "";
        }

        if (IpRecord) {
            if (IpRecord.length > 0 && IpRecord[0].ip_id) {
                IPID = IpRecord[0].ip_id
            }
        }


        if (appointment_type || appointment_type === 0) {
            AppointmentType = appointment_type === 0 ? "Ip" : appointment_type === 1 ? "Op" : appointment_type === 2 ? "Ed" : "";
        }

        if (doctor_username) {
            DoctorUsername = doctor_username
        }

        if (status === 0 && resheduled) {
            Status = "Resheduled"
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

        TimeStampDate = timestamp

        let arr = assigndoctor.find((each) => each.main_doctor)
        if (arr) {
            DoctorName = arr.doctor_name || "NA"
        }
    }

    const { data } = useQuery(GET_IP_VITALS, {
        variables: {
            ipId: IPID,
            ipAppointmentId: appointmentId
        }, fetchPolicy: "cache-and-network"
    })
    
    useEffect(() => {
        if (data && data.getIpPateintRecord) {
            const ipPatientRecord = data.getIpPateintRecord;
            const ipvitalsData = ipPatientRecord.IpVitals || [];
            if (ipvitalsData.length > 0) {
                const {
                    temperature,
                    pulse,
                    systolic_bp: Sbp,
                    diastolic_bp: Dbp,
                    respiratory_rate: Rrate,
                    spo2,
                    random_blood_sugar: rgb,
                    height,
                    weight,
                    id,
                } = ipvitalsData[0];

                setForm(prevForm => ({
                    ...prevForm,
                    id: id || 0,
                    temperature: temperature || "",
                    pulse: pulse || "",
                    systolic_bp: Sbp || "",
                    diastolic_bp: Dbp || "",
                    random_blood_sugar: rgb || "",
                    height: height || "",
                    weight: weight || "",
                    spo2: spo2 || "",
                    respiratory_rate: Rrate || "",
                    bmi: "",
                    bmicategory: "",
                }));
            }
        }
    }, [data]);

    const [AddIpVitals, { }] = useMutation(ADD_VITALS, {
        onError: (err) => {
            if (err.message == "Request failed with status code 422") {
                setForm({
                    ...form,
                    submitError: "Got continuous requests.Please try again",
                });
            } else {
                setForm({
                    ...form,
                    submitError: err.message,
                });
            }
        },
    });

    const today = moment();
    const disableFutureDt = (current) => {
        return current.isBefore(today);
    };


    const handleInputChangeforFloat = (event) => {
        const { name, value } = event.target;
        if (/^(\d+(\.\d*)?)?$/.test(value)) {
            setForm(prevForm => ({
                ...prevForm,
                [name]: value || "",
                submitError: ""
            }));
        }
    }

let bmi = "";
let bmi_text = "";

const weight = parseFloat(form.weight) || 0;
const height = parseFloat(form.height) || 0;

if (height && weight) {
    const bmiValue = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmiValue < 18.6) {
        bmi_text = "Under Weight";
    } else if (bmiValue < 24.9) {
        bmi_text = "Normal";
    } else {
        bmi_text = "Over Weight";
    }

    bmi = bmiValue;
}


    const handleFormSubmit = async () => {
        try {
            const vitalsData = {
                id: parseInt(form.id) || 0,
                temperature: parseFloat(form.temperature) || 0,
                pulse: parseFloat(form.pulse) || 0,
                systolic_bp: parseFloat(form.systolic_bp) || 0,
                diastolic_bp: parseFloat(form.diastolic_bp) || 0,
                random_blood_sugar: parseFloat(form.random_blood_sugar) || 0,
                height: parseFloat(form.height) || 0,
                weight: parseFloat(form.weight) || 0,
                spo2: parseFloat(form.spo2) || 0,
                respiratory_rate: parseInt(form.respiratory_rate) || 0,
            };

            const { data } = await AddIpVitals({
                variables: {
                    vitals: [vitalsData],
                    ipId: IPID,
                    ipAppointmentId: appointmentId,
                    username: username,
                },
                refetchQueries: [
                    {
                        query: GET_IP_VITALS,
                        variables: {
                            ipId: IPID,
                            ipAppointmentId: appointmentId,
                        },
                        fetchPolicy: "cache-and-network",
                    },
                ],
            });

            if (data && data.AddIpVitals) {
                setForm({ ...form, submitError: "Vitals Added Successfully" });
            } else {
                setForm({
                    ...form,
                    submitError: "Something went wrong. Please try again later.",
                });
            }
        } catch (error) {
            console.error("Error submitting vitals:", error);
            setForm({
                ...form,
                submitError: "An error occurred. Please try again later.",
            });
        }
    };

    return (
        <Modal show={vitalShow} size="xl" onHide={vitalClose}>
            <Modal.Header closeButton className='bdr2 pb-2'>
                Vitals
            </Modal.Header>
            <Modal.Body>
                <Row className="bg-white mt-5 m-5 pe-2">
                    <Col md={4}>
                        <Form.Group>
                            <InputGroup className="mb-3" id="dt">
                                <Form.Label className="col-md-4  col-xl-6  mt-2 f13">
                                    Temparature
                                </Form.Label>
                                <Form.Control name="temperature" value={form.temperature}
                                    onChange={handleInputChangeforFloat} onBlur={handleFormSubmit} type="text"
                                />
                                <InputGroup.Text id="basic-addon2">
                                    {`\u00b0F`}
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <InputGroup className="mb-3" id="dt">
                                <Form.Label className="col-md-4  col-xl-6  mt-2 f13">
                                    Pulse Rate
                                </Form.Label>
                                <Form.Control name="pulse" value={form.pulse} type="text" onChange={handleInputChangeforFloat} onBlur={handleFormSubmit} />
                                <InputGroup.Text id="basic-addon2">
                                    {`bpm`}

                                </InputGroup.Text>

                            </InputGroup>
                        </Form.Group>

                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <InputGroup className="mb-3" id="dt">
                                <Form.Label className="col-md-4  col-xl-6  mt-2 f13">
                                    Spo2
                                </Form.Label>
                                <Form.Control name="spo2" value={form.spo2} type="text" onChange={handleInputChangeforFloat} onBlur={handleFormSubmit} />
                                <InputGroup.Text id="basic-addon2">
                                    {`%`}

                                </InputGroup.Text>

                            </InputGroup>
                        </Form.Group>

                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <InputGroup className="mb-3" id="dt">
                                <Form.Label className="col-md-4  col-xl-6  mt-2 f13">
                                    Random Blood Sugar
                                </Form.Label>
                                <Form.Control name={"random_blood_sugar"} value={form.random_blood_sugar} type="text" onChange={handleInputChangeforFloat} onBlur={handleFormSubmit} />
                                <InputGroup.Text id="basic-addon2">
                                    {`md/dl`}

                                </InputGroup.Text>

                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <InputGroup className="mb-3" id="dt">
                                <Form.Label className="col-md-4  col-xl-6  mt-2 f13">
                                    Body Height
                                </Form.Label>
                                <Form.Control value={form.height} name="height" type="text" onChange={handleInputChangeforFloat} onBlur={handleFormSubmit} />
                                <InputGroup.Text id="basic-addon2">
                                    {`cm`}

                                </InputGroup.Text>

                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <InputGroup className="mb-3" id="dt">
                                <Form.Label className="col-md-4  col-xl-6  mt-2 f13">
                                    Body Weight
                                </Form.Label>
                                <Form.Control value={form.weight} name="weight" type="text" onChange={handleInputChangeforFloat} onBlur={handleFormSubmit} />
                                <InputGroup.Text id="basic-addon2">
                                    {`kg`}

                                </InputGroup.Text>

                            </InputGroup>
                        </Form.Group>
                    </Col>
                    {/* <Col md={4}>
                        <Form.Group>
                            <InputGroup className="mb-3" id="dt">
                                <Form.Label className="col-md-4  col-xl-6  mt-2 f13">
                                    LMP
                                </Form.Label>
                                <Datetime
                                    isValidDate={disableFutureDt}
                                    dateFormat="DD-MM-YYYY"
                                    timeFormat={false}
                                    closeOnSelect={true}
                                />
                                <InputGroup.Text id="basic-addon2">
                                    <i className="fal fa-calendar"></i>

                                </InputGroup.Text>

                            </InputGroup>
                        </Form.Group>
                    </Col> */}
                    <Col md={4}>
                        <Form.Group>
                            <InputGroup className="mb-3" id="dt">
                                <Form.Label className="col-md-4  col-xl-6  mt-2 f13">
                                    Blood Pressure
                                </Form.Label>
                                <Form.Control name="systolic_bp" value={form.systolic_bp} type="text" onChange={handleInputChangeforFloat} onBlur={handleFormSubmit} />
                                <Form.Control name="diastolic_bp" value={form.diastolic_bp} type="text" onChange={handleInputChangeforFloat} onBlur={handleFormSubmit} />
                                <InputGroup.Text id="basic-addon2">
                                    {"mmHg"}

                                </InputGroup.Text>

                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <InputGroup className="mb-3" id="dt">
                                <Form.Label className="col-md-4  col-xl-6  mt-2 f13">
                                    Respiratory Rate
                                </Form.Label>
                                <Form.Control name="respiratory_rate" value={form.respiratory_rate} type="text" onChange={handleInputChangeforFloat} onBlur={handleFormSubmit} />
                                <InputGroup.Text id="basic-addon2">
                                    <i className="fal fa-lungs"></i>

                                </InputGroup.Text>

                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <InputGroup className="mb-3" id="dt">
                                <Form.Label className="col-md-4  col-xl-6  mt-2 f13">
                                    Body Mass Index
                                </Form.Label>
                                <Form.Control
                                    aria-describedby="basic-addon2"
                                    type="text"
                                    name="bmi"
                                    value={bmi}
                                    placeholder="Enter BMI"
                                    disabled={true}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <InputGroup className="mb-3" id="dt">
                                <Form.Label className="col-md-4  col-xl-6  mt-2 f13">
                                    BMI Category
                                </Form.Label>
                                <Form.Control
                                    aria-describedby="basic-addon2"
                                    type="text"
                                    name="bmicategory"
                                    value={bmi_text}
                                    placeholder="Enter BMI Category"
                                    disabled={true}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={vitalClose} className="bg-white theme13 brnone">close</Button>
            </Modal.Footer>
        </Modal>

    );
};

export default Vitals;
