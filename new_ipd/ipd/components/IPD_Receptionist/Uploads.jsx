import React, { useState } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'
import styles1 from "../../styles/BillingHistory.module.scss";
import styles from '../../styles/IPD_Receptionist/Appointments.module.scss';
import { UploadsState } from '../../shared/uploads';
import { useRecoilState } from 'recoil';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_IP_UPLOADS, DELETE_IP_COMPLAINTS } from '../../graphql/mutations';
import { GET_IP_PATIENTS_RECORDS } from '../../graphql/queries'
import Axios from 'axios';
import moment from 'moment';
import { unset } from "lodash";

function Uploads({ UploadClose, UploadShow, patientDetails }) {
    const [form, setForm] = useRecoilState(UploadsState)
    const [loadingImage, setloadingImage] = useState(false);

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
    let Mobile = "";
    let DoctorName = "NA"
    let DoctorUsername = ""
    let IPID = "";
    let AttenderName = "";
    let AttenderMobile = ""


    if (patientDetails && patientDetails.ip_appointment_id) {
        appointmentId = patientDetails.ip_appointment_id;

        const { PatientData, status, timestamp, appointment_type, doctor_name, doctor_username, assigndoctor, resheduled, IpRecord, gerdian_details } = patientDetails;

        if (PatientData) {
            Name = PatientData.name || "";
            Age = PatientData.age || "";
            Gender = PatientData.gender === 1 ? 'M' : PatientData.gender === 2 ? 'O' : PatientData.gender === 0 ? 'F' : "";
            Mobile = PatientData.mobile || "";
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

        if (gerdian_details && gerdian_details.length > 0) {
            if (gerdian_details[0]) {
                AttenderName = gerdian_details[0].Name || "NA"
            }
            if (gerdian_details[0]) {
                AttenderMobile = gerdian_details[0].Mobile || "NA"
            }
        }
    }

    const { data } = useQuery(GET_IP_PATIENTS_RECORDS, {
        variables: {
            ipId: IPID,
            ipAppointmentId: appointmentId
        }, fetchPolicy: "cache-and-network"
    })

    // Patient Record Data
    let IpPatientRecords = [];
    if (data && data.getIpPateintRecord) {
        IpPatientRecords = data.getIpPateintRecord
    }

    // Uploads Data
    let IpUploads = [];
    if (IpPatientRecords && IpPatientRecords) {
        if (IpPatientRecords.Uploads) {
            IpUploads = IpPatientRecords.Uploads
        }
    }

    const [AddIpUploads, { loading2 }] = useMutation(ADD_IP_UPLOADS, {
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

    const [DeleteIprecord] = useMutation(DELETE_IP_COMPLAINTS, {
        onError: (err) => {
            if (err.message == "Request failed with status code 422") {
                setForm({
                    ...form,
                    submitError1: "Got continuous requests.Please try again",
                });
            } else {
                setForm({
                    ...form,
                    submitError1: err.message,
                });
            }
        },
    })

    const addRow = () => {
        setForm({ ...form, detailsarray: [...form.detailsarray, {}] });
    };
    const removeRow = (rindex) => {
        const detailsarray = form.detailsarray.filter(
            (i, index) => index != rindex
        );
        setForm({ ...form, detailsarray: detailsarray });
    };

    const fileUpload = (file, stream) => {
        const url = `${process.env.NEXT_PUBLIC_UPLOAD_FILE}/mobile.php?uploadImage=true`;
        const formData = new FormData();
        formData.append("file", file);
        formData.append("stream", stream);
        const config = {
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
        };
        return Axios.post(url, formData, config);
    };

    const addhandlechange = async (e, rrindex, name) => {
        if (name === "image") {
            let files = e.target.files;
            let err = "";

            const validTypes = [
                "image/png", "image/jpeg", "application/pdf", "image/webp",
                "image/jpg", "application/doc", "application/docx",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "application/msword",
            ];

            for (let x = 0; x < files.length; x++) {
                const file = files[x];

                if (!validTypes.includes(file.type)) {
                    err += "Uploaded file is not a valid format.";
                } else if (file.size > 10e6) {
                    err += "Please upload a file smaller than 10 MB";
                }
            }

            if (err !== "") {
                e.target.value = null;
                const arr1 = form.detailsarray.map((i, index) =>
                    index === rrindex ? { ...i, image_filename: null, error: "" } : { ...i }
                );

                setForm({ ...form, detailsarray: arr1, submitError: "" });

                const arr = form.detailsarray.map((i, index) =>
                    index === rrindex ? { ...i, error: err } : { ...i }
                );

                setForm({ ...form, detailsarray: arr, submitError: "" });
            } else {
                const file = e.target.files[0];
                let fileread = new FileReader();
                const fobj = {
                    stream: file ? await readFileAsDataURL(file) : "",
                    filename: file ? file.name : "",
                    mimetype: file ? file.type : "",
                };

                setFormWithLoading(rrindex, fobj, file);

                fileread.onload = async (e) => {
                    const fobj = {
                        stream: e.target.result,
                        filename: file.name,
                        mimetype: file.type,
                    };

                    setFormWithLoading(rrindex, fobj, file);
                };

                if (file) {
                    fileread.readAsDataURL(file);
                }
            }
        } else {
            const arr = form.detailsarray.map((i, index) =>
                index === rrindex ?
                    (e.target.value !== "" ? { ...i, [name]: e.target.value } : unset(i, [name]))
                    : { ...i }
            );

            setForm({ ...form, detailsarray: arr, submitError: "" });
        }
    };

    async function readFileAsDataURL(file) {
        return new Promise((resolve) => {
            let fileread = new FileReader();
            fileread.onload = (e) => resolve(e.target.result);
            fileread.readAsDataURL(file);
        });
    }

    async function setFormWithLoading(rrindex, fobj, file) {
        setloadingImage(true);

        try {
            const upload = await fileUpload(file, fobj.stream);

            if (upload.data.result === "success") {
                const arr = form.detailsarray.map((i, index) =>
                    index === rrindex ? {
                        ...i,
                        image_filename: file.name,
                        image: upload.data.filename,
                        error: "",
                    } : { ...i }
                );

                setForm({ ...form, detailsarray: arr, submitError: "" });
            }
        } catch (error) {
            const arr = form.detailsarray.map((i, index) =>
                index === rrindex ? {
                    ...i,
                    image_filename: file.name,
                    image: "",
                    error: "something went wrong, please upload again",
                } : { ...i }
            );

            setForm({ ...form, detailsarray: arr, submitError: "" });
        }

        setloadingImage(false);
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        let status = 0;

        form.detailsarray.forEach((item, index) => {
            if (Object.entries(item).length === 0 || !item.type || !item.image) {
                status = 1;
            }
        });

        if (status !== 1) {
            const uploadarray = form.detailsarray.map((item) => ({
                type: parseInt(item.type),
                file: `${process.env.NEXT_PUBLIC_UPLOAD_FILE}/files1/${item.image}`,
            }));

            AddIpUploads({
                variables: {
                    uploads: uploadarray,
                    ipId: IPID,
                    username: username,
                },
                refetchQueries: [{
                    query: GET_IP_PATIENTS_RECORDS,
                    variables: {
                        ipId: IPID,
                        ipAppointmentId: appointmentId
                    },
                    fetchPolicy: "cache-and-network",
                },
                ],
                update: (cache, { data }) => {
                    if (data && data.AddIpUploads) {
                        setForm({
                            ...form,
                            formValid: false,
                            submitError: "Files Submitted Successfully",
                            detailsarray: [],
                        });

                        setTimeout(() => {
                            setForm({
                                ...form,
                                submitError: "",
                                detailsarray: [{}],
                            });
                        }, 1500);
                    } else {
                        setForm({
                            ...form,
                            submitError: "Please wait. We are processing continuous requests.",
                        });
                    }
                },
            });
        } else {
            setForm({
                ...form,
                submitError: "Please fill all the values",
            });
        }
    }

    function handleDelete(e, did) {
        e.preventDefault();

        if (did !== "") {
            DeleteIprecord({
                variables: {
                    id: parseInt(did),
                    type: "IpUpload",
                    username: username,
                },
                refetchQueries: [
                    {
                        query: GET_IP_PATIENTS_RECORDS,
                        variables: {
                            ipId: IPID,
                            ipAppointmentId: appointmentId,
                        },
                        fetchPolicy: "cache-and-network",
                    },
                ],
                update: async (cache, { data }) => {
                    if (data && data.DeleteIprecord) {
                        setForm({
                            ...form,
                            formValid: false,
                            submitError1: "File has been successfully deleted",
                            detailsarray: [{}],
                        });
                    } else {
                        setForm({
                            ...form,
                            submitError1: "Please wait. We are processing continuous requests.",
                        });
                    }
                },
            });
            setTimeout(() => {
                setForm({ ...form, submitError1: "" });
            }, 2000);
        }
    }

    return (
        <Modal show={UploadShow} size="xl" onHide={UploadClose}>
            <Modal.Header closeButton className='bdr2 pb-2'>
                Uploads
            </Modal.Header>
            <Modal.Body className=''>
                <div className='row align-items-center pe-md-5 ps-md-0 ps-3 mx-md-4'>
                    <Col md={6} xl={3} lg={3} sm={6} xs={6} className=' ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0'>
                        <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>NAME</Form.Label>
                        <div className={`f14 ${styles.font}`}>{Name} ({Age} {Gender ? "/" + Gender : ""})</div>
                    </Col>
                    <Col md={6} xl={2} lg={3} sm={6} xs={6} className=' ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0'>
                        <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>MOBILE NO</Form.Label>
                        <div className={`f14 ${styles.font}`}>{Mobile ? "+91 " + Mobile : "NA"}</div>
                    </Col>
                    <Col md={6} xl={3} lg={3} sm={6} xs={6} className=' ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0'>
                        <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>GUARDIAN</Form.Label>
                        <div className={`f14 ${styles.font}`}>{AttenderName || "NA"} ({AttenderMobile || "NA"})</div>
                    </Col>
                    <Col md={6} xl={2} lg={3} sm={6} xs={6} className='  ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0'>
                        <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>DATE & TIME</Form.Label>
                        <div className={`f14 ${styles.font}`}>({moment.unix(TimeStampDate).format("Do-MMM-YY hh:mm a")})</div>
                    </Col>
                    <Col md={6} xl={2} lg={3} sm={6} xs={6} className='  ps-0 mt-md-0 mt-3 mb-lg-3 mb-md-3 mb-0'>
                        <Form.Label className={`f12 theme12 ${styles.font} mb-0 `}>CHIEF DOCTOR</Form.Label>
                        <div className={`f14 ${styles.font}`}>{DoctorName || "NA"}</div>
                    </Col>
                </div>
                <Row className="pt-3">
                    <Col md={4} className="pr-0 rounded">
                        {form.submitError1 == "File has been successfully deleted" ? (
                            <h6 className="text-success">{form.submitError1}</h6>
                        ) : (
                            <h6 className="text-danger">{form.submitError1}</h6>
                        )}
                        <div className={styles1.border_theme}>
                            {IpUploads && IpUploads.length > 0 ?
                                <>
                                    {IpUploads.map((item, index) => {
                                        return (
                                            <Row className="p-2 mt-4" key={index}>
                                                <Col md={8} xs={8} className="px-3">
                                                    <div className="f12 theme12">File Name</div>
                                                    <div className="f12 mt-3">
                                                        {item.type === 1
                                                            ? "Lab"
                                                            : item.type === 2
                                                                ? "radiology"
                                                                : item.type === 3
                                                                    ? "prescription"
                                                                    : item.type === 4
                                                                        ? "doctor notes"
                                                                        : ""}
                                                    </div>
                                                    <div className="f12 theme12 mt-1">
                                                        {item.type === 1
                                                            ? "Lab"
                                                            : item.type === 2
                                                                ? "radiology"
                                                                : item.type === 3
                                                                    ? "prescription"
                                                                    : item.type === 4
                                                                        ? "doctor notes"
                                                                        : ""}{" "}
                                                        report{" "}
                                                    </div>
                                                </Col>
                                                <Col md={4} xs={4} className="text-center">
                                                    <div className="f12 theme12">Actions</div>
                                                    <span
                                                        className="mt-3"
                                                        role="button"
                                                        onClick={(e) => handleDelete(e, item.id)}
                                                    >
                                                        <i
                                                            className="fal fa-trash f12 mt-3"
                                                            onClick={(e) => handleDelete(e, item.id)}
                                                        ></i>
                                                    </span>
                                                    <a
                                                        className="ms-2"
                                                        href={item.file}
                                                        target="_blank"
                                                        role="button"
                                                        rel="noreferrer"
                                                    >
                                                        <i
                                                            className="fal fa-download f11 mt-3"
                                                            href={item.file}
                                                            target="_blank"
                                                        ></i>
                                                    </a>
                                                </Col>
                                            </Row>
                                        )
                                    })}
                                </>
                                : <div className='text-center my-5'>No Records found</div>}
                        </div>
                    </Col>

                    <Col md={8}>
                        {form.submitError == "Files Submitted Successfully" ? (
                            <h6 className="text-success">{form.submitError}</h6>
                        ) : (
                            <h6 className="text-danger">{form.submitError}</h6>
                        )}
                        <div className={` ${styles1.bg4}  rounded`}>
                            {form.detailsarray.map((item, index) => {
                                return (
                                    <Row key={index}>
                                        <Col md={8} xs={8} className="">
                                            <div className="p-2">
                                                <div className="f12">Document {index + 1}</div>
                                                <div className="pt-3 d-flex">
                                                    <Col md={6}>
                                                        <Form.Label className="f13 mb-0">
                                                            Record Type
                                                        </Form.Label>
                                                        <Form.Select
                                                            aria-label="Default select example"
                                                            className={styles1.textboxwdth2}
                                                            onChange={(e) => addhandlechange(e, index, "type")}
                                                            value={item.type}
                                                            style={{ fontSize: "0.9rem" }}
                                                        >
                                                            <option value="" className="d-none">-Select-</option>
                                                            <option value="1">lab</option>
                                                            <option value="2">Radiology</option>
                                                            <option value="3">Prescription</option>
                                                            <option value="4">Doctor notes</option>
                                                        </Form.Select>
                                                    </Col>
                                                    <Col md={12} className="ms-2">
                                                        <Form.Label className="f13 mb-0">
                                                            Upload File
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="file"
                                                            name="image"
                                                            onChange={(e) => addhandlechange(e, index, "image")}
                                                            placeholder="Select"
                                                            style={{ fontSize: "0.9rem" }}
                                                        />
                                                    </Col>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col md={4} xs={4} className="text-end">
                                            <div className="pt-3 px-3">
                                                {index != 0 ? (
                                                    <div
                                                        className="f13 text-danger"
                                                        role="button"
                                                        onClick={() => removeRow(index)}
                                                    >
                                                        Delete file
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <small className="text-danger mx-3"> {item.error}</small>
                                        </Col>
                                    </Row>
                                );
                            })}
                            <div
                                className="f13 text-success mx-3 pb-3 my-3"
                                style={{ fontSize: "13px" }}
                                role="button"
                                onClick={addRow}
                            >
                                Add file
                            </div>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={UploadClose} className="bg-white theme13 brnone">close</Button>
                <Button
                    className={`${styles.servicebtn}`}
                    onClick={(e) => handleFormSubmit(e)}
                >
                    Save
                </Button>
            </Modal.Footer>

        </Modal>
    )
}

export default Uploads
