import React, { useEffect, useState } from 'react'
// import styles from '../../styles/IPD_Receptionist/Appointments.module.scss';
import { Modal, Form, Button, Col, Table, InputGroup, Row } from 'react-bootstrap'
import styles1 from '../../styles/IPD_Receptionist/Appointments.module.scss';
import { useRecoilState } from 'recoil';
import { addservices } from '../../shared/service'
import { useQuery, useMutation } from '@apollo/client';
import { GET_ADMIN_USERS, GET_PHARAMA_DISCOUNT, GET_PAYMENT_MODES } from '../../graphql/queries';
import { ADD_IP_INVOICE } from '../../graphql/mutations';
import styles from "../../styles/Appointments.module.scss";
import validator from 'validator';
import SuccessMessage, { showMessage } from '../alertmessages/Alertmessages'
import moment from 'moment';

function Services(props) {
    const [form, setForm] = useRecoilState(addservices)
    const [grandtotal, setGrandTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0)
    const [gst, setGst] = useState(0)
    const [selectedServiceId, setSelectedServiceId] = useState('');
    const [disablebutton, setDisableButton] = useState(false)
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

    //mutataion 
    const [addIpInvoice, { loading: loading5 }] = useMutation(ADD_IP_INVOICE, {
        onCompleted: props.refetch
    });

    useEffect(() => {
        if (loading5) {
            setDisableButton(true);
        }
        setTimeout(() => {
            setDisableButton(false)
        }, [2500])
    }, [loading5])

    const pdetails = props.pdetails || {}

    let appointmentId = "";
    let Name = "";
    let IpId = "";
    let Age = "";
    let Gender = "";
    let Mobile = "";
    let DoctorName = ""
    let AttenderName = "";
    let AttenderMobile = "";
    let DoctorUsername = ""
    let TimeStampDate = "";
    let DoctorId = 0;
    let TotalWalletAmount = 0;
    let AssignedDoctor = [];

    if (pdetails && pdetails.ip_appointment_id) {
        appointmentId = pdetails.ip_appointment_id;

        const { PatientData, IpRecord, doctor_name, doctor_username, total_wallet_amount, assigndoctor, gerdian_details, timestamp } = pdetails;

        if (PatientData) {
            Name = PatientData.name || "";
            Age = PatientData.age || "";
            Gender = PatientData.gender === 1 ? 'M' : PatientData.gender === 2 ? 'O' : PatientData.gender === 0 ? 'F' : "";
            Mobile = PatientData.mobile || "";
        }

        let arr = assigndoctor.find((each) => each.main_doctor)
        if (arr) {
            DoctorId = arr.doctor
            DoctorUsername = arr.doctor_username
            DoctorName = arr.doctor_name || "NA"
        }

        if (IpRecord && IpRecord.length > 0) {
            IpId = IpRecord[0].ip_id
        }

        if (gerdian_details && gerdian_details.length > 0) {
            if (gerdian_details[0]) {
                AttenderName = gerdian_details[0].Name || "NA"
            }
            if (gerdian_details[0]) {
                AttenderMobile = gerdian_details[0].Mobile || "NA"
            }
        }


        //timestamp
        TimeStampDate = timestamp


        // if (doctor_username) {
        //     DoctorUsername = doctor_username
        // }

        if (total_wallet_amount) {
            TotalWalletAmount = total_wallet_amount
        }
    }

    // asign Doctors

    if (pdetails && pdetails.assigndoctor) {
        AssignedDoctor = pdetails.assigndoctor
    }

    // calculation amount details for array
    useEffect(() => {
        let gt = 0;
        let gt1 = 0;
        let gt3 = 0;

        form.servicedetails.forEach((item) => {
            const c = parseFloat(item.price) || 0;
            const d = parseFloat(item.discount) || 0;
            const e = parseFloat(item.gst) || 0;

            const discountedPrice = c - (c * d) / 100;
            const gstAmount = (discountedPrice * e) / 100;

            gt += c;
            gt1 += (c * d) / 100;
            gt3 += gstAmount;
        });

        const gt2 = gt - gt1;
        const gt4 = gt2 + gt3;

        setTotal(gt);
        setDiscount(gt1);
        setGst(gt3);
        setGrandTotal(gt4);
        // Any Change in form, Select Option should be Empty.
        setSelectedServiceId("")
    }, [form]);


    const { data, loading, error } = useQuery(GET_ADMIN_USERS, {
        variables: {
            username: form.username,
            hip: globalUserHip
        }, fetchPolicy: "network-only"
    })

    const { data: data1, loading: loading1, error: error1 } = useQuery(GET_PHARAMA_DISCOUNT, {
        fetchPolicy: "network-only"
    })

    const { data: data2, loading: loading4, error: error2 } = useQuery(GET_PAYMENT_MODES, {
        fetchPolicy: "network-only"
    })

    const { data: data3, loading: loading3, error: error3 } = useQuery(GET_ADMIN_USERS, {
        variables: {
            username: username,
            hip: globalUserHip
        }, fetchPolicy: "network-only"
    })

    // Login RoleDiscount
    let RoleDiscount = 0;
    if (data3 && data3.getAdminUsers) {
        if (data3.getAdminUsers.length > 0) {
            if (data3.getAdminUsers[0].role_discount) {
                RoleDiscount = data3.getAdminUsers[0].role_discount
            }
        }
    }

    //paymentmodes 
    let PaymentModes = [];
    if (data2 && data2.getPaymentModes) {
        PaymentModes = data2.getPaymentModes
    }
    // Service Data
    let Services = [];

    if (data && data.getAdminUsers && data.getAdminUsers.length > 0) {
        const doctorServices = data.getAdminUsers[0].doctorServices;
        if (doctorServices && doctorServices.length > 0) {
            Services = doctorServices;
        }
    }

    // pharama gst 
    let PharmaGst = [];
    if (data1 && data1.getGlobalPharmaGst) {
        PharmaGst = data1.getGlobalPharmaGst
    }

    // onChange for Select Doctors
    const handleChangeforDoctors = (event) => {
        const { name, value } = event.target;
        if (value) {
            setForm({
                ...form,
                username: value,
            });
        } else {
            setForm({
                ...form,
                username: "",
            });
        }
    };

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedServiceId(selectedValue);
    };

    const handleAddService = () => {
        const selectedService = Services.find(service => service.service_id === Number(selectedServiceId));
        if (selectedService) {
            setForm({
                ...form,
                submitError: "",
                username: "",
                servicedetails: [
                    ...form.servicedetails,
                    {
                        test: selectedService.service_id,
                        test_name: selectedService.service_name,
                        discount: 0,
                        gst: 0,
                        amount: selectedService.total_price,
                        unit_price: selectedService.total_price,
                        price: selectedService.total_price,
                        c_discount: selectedService.discount || 0,
                        error: "",
                        id: selectedService.id,
                        quantity: 1
                    }
                ]
            });
            setSelectedServiceId('');
        }
    };

    // remove service
    const removeService = (each, idx) => {
        const detailsarray = form.servicedetails.filter((i, index) => index != idx);
        setForm({ ...form, servicedetails: detailsarray, submitError: "" })
    }


    // handleChange for discount and gst
    const addhandlechangediscountandgst = (e, rrindex, name) => {
        const { value } = e.target;

        let arr = form.servicedetails.map((item, index) => {
            if (index === rrindex) {
                if (name === 'discount') {
                    let parsedValue = RoleDiscount ? parseInt(value, 10) : 0;
                    if (parsedValue > RoleDiscount && !isNaN(parsedValue)) {
                        parsedValue = Math.floor(parsedValue / 10);
                    } else if (parsedValue === "" || isNaN(parsedValue)) {
                        parsedValue = 0;
                    }
                    const discountedAmount = item.price - (item.price * parsedValue / 100);
                    const finalAmount = discountedAmount + (discountedAmount * item.gst / 100);
                    return { ...item, [name]: parsedValue > RoleDiscount ? RoleDiscount : parsedValue, amount: finalAmount };
                } else {
                    let parsedValue = parseInt(value)
                    if (parsedValue > 100 && !isNaN(parsedValue)) {
                        parsedValue = Math.floor(parsedValue / 10);
                    } else if (parsedValue === "" || isNaN(parsedValue)) {
                        parsedValue = 0;
                    }
                    const discountedAmount = item.price - (item.price * item.discount / 100);
                    const finalAmount = discountedAmount + (discountedAmount * parsedValue / 100);
                    return { ...item, [name]: parsedValue, amount: finalAmount };
                }
            } else {
                return { ...item };
            }
        });

        setForm({ ...form, servicedetails: arr, submitError: "" });
    };

    //handle Change for PaymentModes
    const handlepaymentModeChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setForm((prevForm) => ({
            ...prevForm,
            onlinePay: "",
            cash: "",
            [name]: value,
            submitError: "",
            formValid: true
        }));
    };

    const handleInputpaymentModeChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
                submitError: "",
                formValid: true
            }));
        }
        else {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value.slice(0, -1),
                submitError: "",
                formValid: true
            }));
        }
    };

    // invoice mutation submit
    const handleIpInvoice = async (action) => {
        let formValid = true;
        let Services = form.servicedetails.map((each, index) => {
            return {
                quantity: 1,
                unit_price: parseFloat(each.price),
                gst: parseInt(each.gst),
                discount: parseInt(each.discount),
                type: parseInt(each.test)
            }
        })

        let OnlinePay = 0;
        let Cash = 0;
        let message = "";
        if (action === "payNow") {
            message = "Amount paid successfully"
            // Check payment method options
            const UPIPaymentMethod = form.paymentMethod == "1";
            const CASHPaymentMethod = form.paymentMethod == "2";
            const CARDPaymentMethod = form.paymentMethod == "3";
            // Check payment mode options
            const SPLITPaymentMode = form.paymentMode == "4";
            const WalletPaymentMode = form.paymentMode == "5";

            // Calculate OnlinePay and Cash based on selected options
            if (UPIPaymentMethod || CARDPaymentMethod) {
                // If UPI or CARD payment method selected, OnlinePay is set to the grandtotal
                OnlinePay = parseFloat(grandtotal);
            } else if (CASHPaymentMethod) {
                // If CASH payment method selected, Cash is set to the grandtotal
                Cash = parseFloat(grandtotal);
            } else if (SPLITPaymentMode) {
                // If SPLIT payment mode selected, use the entered values (or 0 if not entered)
                OnlinePay = parseFloat(form.onlinePay) || 0;
                Cash = parseFloat(form.cash) || 0;
            } else if (WalletPaymentMode) {
                // If Wallet payment mode selected, OnlinePay and Cash are set to 0
                OnlinePay = 0;
                Cash = 0;
            }
        } else if (action === "Draft") {
            message = "Draft Added successfully"
            // For draft action, set OnlinePay and Cash to 0
            OnlinePay = 0;
            Cash = 0;
        }

        const TotalpayingAmount = (parseFloat(form.onlinePay) || 0) + (parseFloat(form.cash) || 0);

        try {
            if (formValid) {
                if (Services && Services.length > 0) {
                    if (grandtotal >= TotalpayingAmount) {
                        const { data } = await addIpInvoice({
                            variables: {
                                serviceInvoice: Services,
                                ipId: IpId,
                                ipAppointmentId: appointmentId,
                                type: 1,
                                paymentMethod: parseInt(form.paymentMethod),
                                cash: Cash,
                                onlinePay: OnlinePay,
                                username: username
                            },
                        });
                        if (data && data.addIpInvoice) {
                            setForm((prevForm) => ({
                                ...prevForm, cash: "", paymentMethod: 2, onlinePay: "",
                                submitError: "Amount paid successfully",
                            }));

                            showMessage(message, "success");

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
                            submitError: "Amount can not be more than total bill",
                        }));
                    }
                }
                else {
                    setForm((prevForm) => ({
                        ...prevForm,
                        submitError: "Please add atleast one service",
                    }));
                }
            } else {
                setForm((prevForm) => ({
                    ...prevForm,
                    submitError: "Please fill all mandatory fields",
                }));
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
    };

    const isPaymentMethod5 = form.paymentMethod == 5;
    const UPIPaymentMethod = form.paymentMethod == 1;
    const CASHPaymentMethod = form.paymentMethod == 2;
    const CARDPaymentMethod = form.paymentMethod == 3;
    const SPLITPaymentMode = form.paymentMethod == 4


    // Determine if the "Pay Now" button should be disabled
    let isButtonDisabled = false;

    if (isPaymentMethod5 && (grandtotal > TotalWalletAmount)) {
        isButtonDisabled = true;
    } else if (SPLITPaymentMode && ((form.cash + form.onlinePay) < grandtotal)) {
        isButtonDisabled = true;
    }

    // Determine if the submit button should be disabled
    const SubmitDisabled =
        (isPaymentMethod5) ||
        (!isPaymentMethod5 && (form.cash > 0 || form.onlinePay > 0));


    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton className="brnone">
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className={`px-md-3 f15 ${styles.font}`}
                >
                    Payment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="pb-0">
                {/* Allert Messges */}
                <SuccessMessage />
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
                <div className="table-responsive h_395">
                    <div className={styles.ht60}>
                        {form.submitError === "Amount paid successfully" ? <span className="text-success">{""}</span> : <span className="text-danger">{form.submitError}</span>}

                        <Table>
                            <thead className={styles.bdrtop}>
                                <tr>
                                    <th className="nowwrap text-left">SNO </th>
                                    <th className="nowwrap tableleftborder text-left">SERVICE</th>
                                    {/* <th className="nowwrap tableleftborder text-center">
                                        Quanity
                                    </th> */}
                                    {/* <th className="nowwrap text-left">DESCRIPTION</th> */}
                                    <th className="nowwrap tableleftborder text-left">
                                        UNIT PRICE
                                    </th>
                                    <th className="nowwrap tableleftborder text-center">
                                        DISCOUNT
                                    </th>
                                    <th className="nowwrap tableleftborder text-center">TAXES</th>
                                    <th className="nowwrap text-center ">
                                        SUB TOTAL
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {form.servicedetails.map((each, index) => {
                                    return (
                                        <tr>
                                            <td className="nowwrap">{index + 1}</td>
                                            <td className="nowwrap tableleftborder">
                                                <div className="d-flex">
                                                    <div className="col-md-11">{each.test_name}</div>
                                                    <div>
                                                        <i className="fal fa-trash-alt" role="button" onClick={() => removeService(each, index)}></i>
                                                    </div>
                                                </div>
                                            </td>
                                            {/* <td className="nowwrap tableleftborder">
                                                General Oral Checkup and treatment suggestions{" "}
                                            </td> */}
                                            {/* <td className="nowwrap tableleftborder text-center">
                                                <InputGroup className="mt-2 w_100 mx-auto">
                                                    <Form.Control aria-describedby="basic-addon2" value={each.quantity} onChange={(e) => addhandlechangeforQunatity(e, index, "quantity")} />
                                                </InputGroup>
                                            </td> */}
                                            <td className="nowwrap tableleftborder text-center">
                                                <i className="fal fa-rupee-sign"></i> {each.price}
                                            </td>
                                            <td className="nowwrap tableleftborder text-center">
                                                {" "}
                                                <InputGroup className="mt-2 w_100 mx-auto">
                                                    <Form.Control aria-describedby="basic-addon2" value={each.discount} disabled={each.discount > RoleDiscount} onChange={(e) => addhandlechangediscountandgst(e, index, "discount")} />
                                                    <InputGroup.Text id="basic-addon2">{RoleDiscount}%</InputGroup.Text>
                                                </InputGroup>
                                            </td>
                                            <td className="nowwrap tableleftborder text-center">
                                                <Form.Select as="select" value={each.gst}
                                                    onChange={(e) => addhandlechangediscountandgst(e, index, "gst")}>
                                                    {PharmaGst.map((each, index) => {
                                                        return (
                                                            <option value={each.percentage} key={index}>{each.gst}</option>
                                                        )
                                                    })}
                                                </Form.Select>
                                            </td>
                                            <td className="nowwrap text-center ">
                                                <i className="fal fa-rupee-sign"></i> {each.amount}
                                            </td>
                                        </tr>
                                    )
                                })}

                                <tr>
                                    <td colSpan={3} className="tableleftborder">
                                        <Row>
                                            <Col md={3}>
                                                <Form.Group controlId="formBasicEmail" className="d-flex">
                                                    <Form.Select id="servicesDropdown" name="username" value={form.username} onChange={handleChangeforDoctors}>
                                                        <option value="" className='d-none'>Select a Doctor</option>
                                                        {AssignedDoctor.map((doctor) => (
                                                            <option key={doctor.doctor_username} value={doctor.doctor_username}>
                                                                {doctor.doctor_name}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="formBasicEmail" className="d-flex">
                                                    <Form.Label className="me-3 mb-0 mt-2">Services</Form.Label>
                                                    <Form.Select id="servicesDropdown" value={selectedServiceId} onChange={handleChange}>
                                                        <option value="" className=''>Select a service...</option>
                                                        {Services.map((service) => (
                                                            <option key={service.id} value={service.service_id} className={form.servicedetails.some((each => each.test == service.service_id)) ? "d-none" : ""} >
                                                                {service.service_name}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={2} className="mt-2">
                                                <a className="theme13 ms-3 mt-2" role="button" onClick={handleAddService}>
                                                    <i className="fa fa-plus"></i> Add
                                                </a>
                                            </Col>
                                        </Row>
                                    </td>
                                    {/* <td className="tableleftborder">
                                        <div>Amount</div>
                                        <div>
                                            <i className="fa fa-rupee-sign"></i> {total}
                                        </div>
                                    </td> */}
                                    <td className="tableleftborder">
                                        <div>Discount</div>
                                        <div>
                                            <i className="fa fa-rupee-sign"></i> {discount}
                                        </div>
                                    </td>
                                    <td className="tableleftborder">
                                        <div>Gst</div>
                                        <div>
                                            <i className="fa fa-rupee-sign"></i> {gst}
                                        </div>
                                    </td>
                                    <td className="">
                                        <div>Total</div>
                                        <div>
                                            <i className="fa fa-rupee-sign"></i> {grandtotal}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div
                        className={`bg3 py-2 px-1 d-flex ${styles.pssticky1}`}
                        style={{ overflow: "hidden" }}
                    >
                        <Col md={4}>
                            <Form.Group controlId="formBasicEmail" >
                                <Row>
                                    <Col md={4} className='pr-0 ms-4'>
                                        <Form.Label className=' mb-0 mt-2 f12'>Payment Mode</Form.Label>
                                    </Col>
                                    <Col md={7}>
                                        <Form.Select aria-label="Default select example" name="paymentMethod" value={form.paymentMethod} onChange={handlepaymentModeChange}>
                                            <option value="" className="d-none" selected>Select</option>
                                            {PaymentModes.map((item, index) => (
                                                <option value={parseInt(item.id)} key={index}>
                                                    {item.mode}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Col>
                        <Col md={5} className='ms-4'>
                            {form.paymentMethod == 1 &&
                                <Form.Group controlId="formBasicEmail">
                                    <Row>
                                        <Col md={2} className='pr-0'>
                                            <Form.Label className='f12 mb-0 mt-2'>UPI</Form.Label>
                                        </Col>
                                        <Col md={7}>
                                            <Form.Control type="text" placeholder={grandtotal} name="onlinePay" value={form.onlinePay} onChange={handleInputpaymentModeChange} disabled />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            }
                            {(form.paymentMethod == 2) &&
                                <Form.Group controlId="formBasicEmail" >
                                    <Row>
                                        <Col md={2} className='pr-0'>
                                            <Form.Label className=' mb-0 mt-2 f12' >Cash</Form.Label>
                                        </Col>
                                        <Col md={7}>
                                            <Form.Control type="text" placeholder={grandtotal} value={form.cash} name="cash" onChange={handleInputpaymentModeChange} disabled />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            }
                            {(form.paymentMethod == 3) &&
                                <Form.Group controlId="formBasicEmail" >
                                    <Row>
                                        <Col md={2} className='pr-0'>
                                            <Form.Label className=' mb-0 mt-2 f12' >Card</Form.Label>
                                        </Col>
                                        <Col md={7}>
                                            <Form.Control type="text" placeholder={grandtotal} value={form.onlinePay} name="onlinePay" onChange={handleInputpaymentModeChange} disabled />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            }
                            {(form.paymentMethod == 4) &&
                                <div className="d-flex">
                                    <Row>
                                        <Col md={4} className='pr-0'>
                                            <Form.Label className=' mb-0 mt-2 f12' >Card/UPI</Form.Label>
                                        </Col>
                                        <Col md={8}>
                                            <Form.Control type="text" placeholder="Enter" value={form.onlinePay} name="onlinePay" onChange={handleInputpaymentModeChange} />
                                        </Col>
                                    </Row>
                                    <Row className="mx-1">
                                        <Col md={3} className='pr-0'>
                                            <Form.Label className=' mb-0 mt-2 f12' >Cash</Form.Label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Control type="text" placeholder="Enter" value={form.cash} name="cash" onChange={handleInputpaymentModeChange} />
                                        </Col>
                                    </Row>
                                </div>
                            }
                        </Col>
                        <Col md={1}>
                        </Col>
                        <Col md={2}>
                            <div
                                className="bg-white py-2 rounded px-2"
                                style={{ width: "fit-content" }}
                            >
                                <span className="me-2">Total</span>
                                <span className="theme13">
                                    <i className="fa fa-rupee-sign"></i> {grandtotal}
                                </span>
                            </div>
                        </Col>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-block">
                <div className="d-flex">
                    <Col md={6}></Col>
                    <Col md={6} className="text-end">
                        <div className="d-flex justify-content-end align-items-center">
                            <div>
                                <Button className="bg-white brnone theme13" onClick={props.onHide}>Close</Button>
                            </div>
                            <div className='mx-2'>
                                <Button className={styles1.servicebtn} onClick={() => handleIpInvoice("Draft")}
                                    disabled={SubmitDisabled || disablebutton}
                                >Draft</Button>
                            </div>
                            <div>
                                <Button className={styles1.servicebtn} onClick={() => handleIpInvoice("payNow")}
                                    disabled={isButtonDisabled || disablebutton}
                                >Pay Now</Button>
                            </div>
                        </div>
                    </Col>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default Services
