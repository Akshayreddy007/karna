import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '../sidebar/Sidebar'
import Logo1 from "../../public/images/loginlogo.png";
import styles from '../../styles/Login.module.scss';
import React, { Component, useState } from "react";
import { Row, Col, Form, Button, Carousel, Modal } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { useRecoilState } from "recoil";
import { changepasswordState, forgotpasswordState, newpasswordState } from "../../shared/forgotpasswordState";
import validator from "validator";
import { OTP_VERIFICTATION } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
import Password_Verification from './Password_Verification';
export default function Login(props) {
  const [form, setForm] = useRecoilState(forgotpasswordState);
  const [changeform, setChangeform] = useRecoilState(changepasswordState);
  const [newpasswordform, setNewpasswordform] = useRecoilState(newpasswordState);
  const [captchtoken, setCaptchtoken] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [submit, setSubmitLoading] = useState(false);
  function onChange(value) {
    if (value != "" && value != null) {
      setCaptchtoken(value);
    }
  }


  const [otpVerifiction, { loading, data }] = useMutation(OTP_VERIFICTATION, {
    onError: (err) => {
      setForm({
        ...form,
        submitError: err.message,
      });
    },
  });

  function loginFormSubmit(e) {
    setSubmitLoading(true);
    e.preventDefault();

    setChangeform({ ...changeform, detailsarray: [{ otptext: "" }, { otptext: "" }, { otptext: "" }, { otptext: "" }, { otptext: "" }, { otptext: "" }] });
    setNewpasswordform({
      formValid: false,
      submitError: "",
      newpassword: "",
      status: 0,
      cstatus: 0,
      formErrors: {
        newpassword: "",
      }
    })
    if (
      form.formErrors.email == "" &&
      form.formValid == true
    ) {
      if (captchtoken != "") {
        //setCaptchtoken("");
        otpVerifiction({
          variables: { username: form.email },
          update: async (cache, { data }) => {
            if (data != undefined) {

              setShow(true)

            }
          },
        });
      }
      else {
        setForm({ ...form, submitError: "Please select captch" });
      }

    } else {
      setForm({ ...form, submitError: "Please fill all the values" });
    }

    setTimeout(() => {
      setForm({
        ...form,
        submitError: ""
      });
      setSubmitLoading(false);
    }, 2000);
  }
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let formErrors = {};
    if (validator.isEmpty(value, { ignore_whitespace: true })) {
      if (name == "email") {
        formErrors = {
          ...form.formErrors,
          [name]: `Email can not be empty`,
        };
      } else {
        formErrors = {
          ...form.formErrors,
          [name]: `${[name]} can not be empty`,
        };
      }
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

  if (data && data.otpVerifiction == true) {
    return (
      <Password_Verification />
    )
  } else {
    return (
      <React.Fragment>
        <div className='container-fluid bg-white'>
          <Row>
            <Col md={5} xl={3} lg={4} sm={12} className='pr-md-0'>
              <Sidebar />
            </Col>
            <Col md={7} xl={9} lg={8} sm={9}>
              <div className={styles.mgauto}>
                <div className='text-center me-4'>
                  <Image src={Logo1} className="img-fluid" width="55" height="50" alt="logo" />
                </div>
                <h4 className='text-left mt-4 welcomefont mb-0'>Password Recovery</h4>
                <div className='text-left mb-5'>
                  <small className={styles.smallclr}>Enter  username and OTP to set new password.</small>
                </div>
                {form.submitError == "You have successfully logged in" ? (
                  <h6 className="text-success">{form.submitError}</h6>
                ) : (
                  <h6 className="text-danger">{form.submitError}</h6>
                )}
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicl">
                    <Form.Label className="mb-0">Username </Form.Label>
                    <Form.Control
                      type="email"
                      autoFocus
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      autoComplete="new-password"
                      placeholder="Email OR Username"
                    />
                    <Form.Text className="text-danger">
                      {form.formErrors.email}
                    </Form.Text>
                  </Form.Group>
                  <div className="mb-3">
                    <ReCAPTCHA
                      sitekey="6LepGK8fAAAAADghskZJaXj61xpFensTjzHFx6k_"
                      onChange={onChange}
                      type="image"
                    />
                  </div>
                  <Col md={12} xl={12} lg={12} className='text-left mt-4 pt-1 mb-4'>
                    <div className="d-grid gap-2 my-4">
                      {loading ? (
                        <Button className={styles.login_button} style={{ width: '105px', padding: '8px 17px 8px 17px' }}>
                          Submitting...
                        </Button>
                      ) : (
                        <>
                          {
                            submit == false ? (<Link href="">
                              <Button className={styles.login_button} style={{ width: 'auto', padding: '8px 17px 8px 17px' }} onClick={(e) => loginFormSubmit(e)}>
                                SUBMIT
                              </Button>
                            </Link>) : (<Link href="">
                              <Button className={styles.login_button} style={{ width: 'auto', padding: '8px 17px 8px 17px' }} disabled={true}>
                                SUBMIT
                              </Button>
                            </Link>)
                          }
                        </>
                      )
                      }

                    </div>
                  </Col>
                </Form>
                <Row>
                  <Col className="mx-3" md={12} xl={12} lg={12} sm={12}>
                    <Link href='/'> Signin </Link>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

