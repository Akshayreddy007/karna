import Sidebar from '../sidebar/Sidebar'
import Image from 'next/image'
import { useMutation, useQuery } from '@apollo/client';
import React, { Component, useEffect, useState } from 'react'
import { Tab, Row, Col, Form, Card, Modal, Button, Select, Table } from 'react-bootstrap';
import Logo1 from "../../public/images/loginlogo.png";
import styles from '../../styles/Login.module.scss';
import Link from "next/link";
import { changepasswordState, forgotpasswordState, newpasswordState } from '../../shared/forgotpasswordState';
import { useRecoilState } from 'recoil';
import { CHANGE_PASSWORD, OTP_VERIFICTATION } from '../../graphql/mutations';
import validator from "validator";
import Router from "next/router";
export default function Password_Verification(props) {
    const [form, setForm] = useRecoilState(changepasswordState);
    const [newpasswordform, setNewPasswordForm] = useRecoilState(newpasswordState);

    const [forgotForm, setForgotForm] = useRecoilState(forgotpasswordState);

    const [setloading, setLoading] = useState("");
    const [submit, setSubmitLoading] = useState(false);
    const [changePassword, { loading }] = useMutation(CHANGE_PASSWORD, {
        onError: (err) => {
            setNewPasswordForm({
                ...newpasswordform,
                submitError: err.message,
            });
        },
    });

    const [otpVerifiction, { loading1 }] = useMutation(OTP_VERIFICTATION, {
        onError: (err) => {
            setForgotForm({
                ...forgotForm,
                submitError: err.message,
            });
        },
    });


    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let formErrors = {};
        if (validator.isEmpty(value, { ignore_whitespace: true })) {
            formErrors = {
                ...form.formErrors,
                [name]: `${[name]} can not be empty`,
            };
        } else {
            formErrors = {
                ...form.formErrors,
                [name]: "",
            };
        }
        setForm({
            ...form,
            [name]: value,
            formErrors: formErrors,
            submitError: "",
            formValid: true,
        });
    };


    function changePasswordFormSubmit(e) {
        setSubmitLoading(true);
        e.preventDefault();

        if (
            newpasswordform.formErrors.newpassword == "" &&
            newpasswordform.formValid == true
        ) {

            changePassword({
                variables: {
                    otp: form.otptext, newpassword: newpasswordform.newpassword, username: forgotForm.email
                },
                update: async (cache, { data }) => {

                    if (data != undefined) {

                        if (data.changePassword.status == "error") {
                            setNewPasswordForm({
                                ...newpasswordform,
                                formValid: false,
                                newpassword: "",
                                formErrors: {
                                    newpassword: "",
                                },
                                submitError: 'error'

                            });
                        } else {
                            setNewPasswordForm({
                                ...newpasswordform,
                                formValid: false,
                                newpassword: "",
                                status: 0,
                                cstatus: 1,
                                formErrors: {
                                    newpassword: "",
                                },
                                submitError: "Your password has been changed successfully"
                            });
                            setTimeout(() => {

                                Router.push(`/`);
                            }, [3000])
                        }

                        setTimeout(() => {
                            setNewPasswordForm({
                                ...newpasswordform,
                                submitError: ""
                            });

                            setForm({
                                ...form,
                                submitError: "",
                                detailsarray: [{ otptext: "" }, { otptext: "" }, { otptext: "" }, { otptext: "" }, { otptext: "" }, { otptext: "" }]

                            });
                            setForgotForm({
                                ...forgotForm,
                                email: "",
                                formErrors: {
                                    email: "",
                                },
                                submitError: "",
                                formValid: false,

                            })
                        }, 4000);

                    }
                },
            });

        } else {
            setNewPasswordForm({ ...newpasswordform, submitError: "Please fill all the values" });
        }

        setTimeout(() => {
            setNewPasswordForm({
                ...newpasswordform,
                submitError: ""
            });
            setSubmitLoading(false);
        }, 2000);
    }

    function otpFormSubmit(e) {
        e.preventDefault();
        setSubmitLoading(true);
        console.log("form.detailsarray", form.detailsarray, status);
        if (form.otptext) {
            setNewPasswordForm({ ...newpasswordform, cstatus: 1, status: status });
        }
        else {
            setForm({ ...form, submitError: "Please enter OTP" });
        }

        setTimeout(() => {
            setForm({ ...form, submitError: "" });
            setSubmitLoading(false);
        }, 2000);
    }

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let formErrors = {};
        if (validator.isEmpty(value, { ignore_whitespace: true })) {

            formErrors = {
                ...newpasswordform.formErrors,
                [name]: `${[name]} can not be empty`,
            };

        } else {
            if (
                name == "newpassword" &&
                !validator.isStrongPassword(value, [
                    "minLength: 10",
                    " minLowercase: 1",
                    "minUppercase: 1",
                    "minNumbers: 1",
                    "minSymbols: 1",
                ])
            ) {
                formErrors = {
                    ...newpasswordform.formErrors,
                    [name]: `A strong password should contain alphabets, atleast one Uppercase, one number and any of special characters (!@#) allowed.`,
                };
            } else {
                formErrors = {
                    ...newpasswordform.formErrors,
                    [name]: "",
                };
            }
        }
        setNewPasswordForm({
            ...newpasswordform,
            [name]: value,
            formErrors: formErrors,
            submitError: "",
            formValid: true,
        });
    };


    function resendFormSubmit(e) {
        e.preventDefault();
        setSubmitLoading(true);
        setForm({ ...form, detailsarray: [{ otptext: "" }, { otptext: "" }, { otptext: "" }, { otptext: "" }, { otptext: "" }, { otptext: "" }] });
        if (
            forgotForm.formErrors.email == "" &&
            forgotForm.formValid == true
        ) {

            otpVerifiction({
                variables: { username: forgotForm.email },
                update: async (cache, { data }) => {
                    if (data != undefined) {
                        setLoading("Otp has been sent to your email")
                    }
                    setTimeout(() => {
                        setLoading("");
                    }, 2000);
                },
            });
        } else {
            setForgotForm({ ...forgotForm, submitError: "Please fill all the values" });
        }

        setTimeout(() => {
            setForgotForm({ ...forgotForm, submitError: "" });
            setSubmitLoading(false);
        }, 2000);
    }
    return (
        <React.Fragment>
            <div className='container-fluid bg-white'>
                <Row>
                    <Col md={5} xl={3} lg={4} sm={12} className='pr-md-0'>
                        <Sidebar />
                    </Col>
                    <Col>
                        <div className="p-lg-3">
                            <div className={styles.mgauto}>
                                <div className='text-center '>
                                    <Image src={Logo1} className="img-fluid" width="55" height="50" alt="logo" />
                                </div>
                                <h4 className='text-left mt-4 welcomefont mb-0 mx-5'>Password Verify</h4>
                                <div className='text-left mb-5 mx-5'>
                                    <small className={"mx-3"}>Enter OTP to set new password</small>
                                </div>
                                {newpasswordform.status == 1 && newpasswordform.cstatus == 0 ? (
                                    <>
                                        <h3 className={`${styles.text_theme} text-center py-lg-3`}>Enter OTP</h3>
                                        <h6 className="text-success">{setloading}</h6>
                                        <h6 className="text-success">{form.submitError}</h6>
                                        <Row>
                                            <Col md={12}>
                                                <Form.Control type="text" value={form.otptext} name="otptext"
                                                    className={`${""}`} placeholder="Enter OTP" onChange={
                                                        handlechange
                                                    } />
                                            </Col>


                                        </Row>
                                        <div className="d-grid gap-2 my-4">
                                            {
                                                submit == false ? (
                                                    <Link href="">
                                                        <Button variant="" className="btn btn-theme" onClick={(e) => otpFormSubmit(e)}>
                                                            SUBMIT
                                                        </Button>
                                                    </Link>
                                                ) : (
                                                    <Link href="">
                                                        <Button variant="" className="btn btn-theme" disabled={true}>
                                                            SUBMIT
                                                        </Button>
                                                    </Link>
                                                )
                                            }

                                        </div>
                                        {loading1 ? (<span className="text-success">Submitting...</span>) : (<div className="text-center">
                                            {
                                                submit == false ? (
                                                    <a href="" onClick={(e) => resendFormSubmit(e)} ><h5 style={{ cursor: 'pointer', color: '#393160', fontSize: '16px' }}>Resend the Code</h5></a>
                                                ) : (
                                                    <a href="" ><h5 style={{ cursor: 'pointer', color: '#393160', fontSize: '16px' }}>Resending the Code</h5></a>
                                                )
                                            }
                                        </div>)}

                                    </>

                                ) : newpasswordform.status == 0 && newpasswordform.cstatus == 1 ? (
                                    <>
                                        <h4 className={`${styles.text_theme} text-center py-lg-3`}>Change Password</h4>
                                        {newpasswordform.submitError == "Your password has been changed successfully" ? (
                                            <h6 className="text-success">{newpasswordform.submitError}</h6>
                                        ) : (
                                            <h6 className="text-danger">{newpasswordform.submitError}</h6>
                                        )}
                                        <Form.Group className="mb-3" controlId="formPassword">
                                            <Row>
                                                <Col xl={5} lg={6} md={6} sm={12}>
                                                    <Form.Label className={`${styles.text_gray6}`}>New password<small className="text-danger">*</small></Form.Label>
                                                </Col>
                                                <Col xl={7} lg={6} md={6} sm={12}>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Password"
                                                        name="newpassword"
                                                        value={newpasswordform.newpassword}
                                                        onChange={handleInputChange}
                                                        autoComplete="new-password"
                                                    />
                                                    <Form.Text className="text-danger">
                                                        {newpasswordform.formErrors.newpassword}
                                                    </Form.Text>
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                        <div className="d-grid gap-2 my-4">
                                            {loading ? (<span className="text-success">Submitting...</span>) : (
                                                <>
                                                    {
                                                        submit == false ? (
                                                            <Link href="">
                                                                <Button className={styles.login_button} style={{ width: 'auto', padding: '8px 17px 8px 17px' }} onClick={(e) => changePasswordFormSubmit(e)}>
                                                                    SUBMIT
                                                                </Button>
                                                            </Link>
                                                        ) : (
                                                            <Link href="">
                                                                <Button className={styles.login_button} style={{ width: 'auto', padding: '8px 17px 8px 17px' }} disabled={true}>
                                                                    SUBMIT
                                                                </Button>
                                                            </Link>
                                                        )
                                                    }
                                                </>
                                            )}

                                        </div>

                                    </>

                                ) : (<>

                                    <h3 className={`${styles.text_theme} text-center py-lg-3`}>Enter OTP</h3>
                                    <h6 className="text-success">{setloading}</h6>
                                    <h6 className="text-success">{form.submitError}</h6>
                                    <Row>
                                        <Col md={12}>
                                            <Form.Control type="text" name="otptext" value={form.otptext} className={`${""}`} placeholder="Enter OTP"
                                                onChange={
                                                    handlechange
                                                } />
                                        </Col>


                                    </Row>
                                    <div className="d-grid gap-2 my-4">
                                        {
                                            submit == false ? (
                                                <Link href="">
                                                    <Button className={styles.login_button} style={{ width: 'auto', padding: '8px 17px 8px 17px' }} onClick={(e) => otpFormSubmit(e)}>
                                                        SUBMIT
                                                    </Button>
                                                </Link>
                                            ) : (
                                                <Link href="">
                                                    <Button className={styles.login_button} style={{ width: 'auto', padding: '8px 17px 8px 17px' }} disabled={true}>
                                                        SUBMIT
                                                    </Button>
                                                </Link>
                                            )
                                        }

                                    </div>
                                    <div className="text-center">
                                        {loading1 ? (<span className="text-success">Submitting...</span>) : (
                                            <div className="text-center">

                                                {
                                                    submit == false ? (
                                                        <a href="" onClick={(e) => resendFormSubmit(e)} ><h5 style={{ cursor: 'pointer', color: '#393160', fontSize: '16px' }}>Resend the Code</h5></a>
                                                    ) : (
                                                        <a href="" ><h5 style={{ cursor: 'pointer', color: '#393160', fontSize: '16px' }}>Resending the Code</h5></a>
                                                    )
                                                }


                                            </div>)}
                                    </div>

                                </>)}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

