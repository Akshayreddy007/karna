import Image from "next/image";
import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Logo1 from "../../public/images/loginlogo.png";
import styles from "../../styles/Login.module.scss";
import { Button, Row, Col, Form, InputGroup } from "react-bootstrap";
import Router from "next/router";
import { useRecoilState } from "recoil";
import validator from "validator";
import Logo2 from "../../public/images/logoicon.svg";
import Link from 'next/link';
import { loginState, toggleState } from '../../shared/loginState';
import { useMutation } from '@apollo/client';
import { authlogout, resocket } from "../tokenauth/AuthorizationError";
import { LOGIN } from "../../graphql/mutations";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useRecoilState(loginState);
  const [toggleform, togglesetForm] = useRecoilState(toggleState);
  const [isLoading, setIsLoading] = useState(false);
  const [submit, setSubmitLoading] = useState(false);


  const [login, { data, loading }] = useMutation(LOGIN, {
    onError: (err) => {
      setForm({
        ...form,
        submitError: err.message,
      });
    },
  });

  let userData = null;

  if (typeof window !== 'undefined') {
    const userdetails = localStorage.getItem("user");

    if (userdetails) {
      try {
        userData = JSON.parse(userdetails);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }
  }


  let userHip = 0;
  if (localStorage.getItem("userHip")) {
    userHip = localStorage.getItem("userHip");
  }

  const auth_token = localStorage.getItem("auth_token")

  const handleFetch = (value, path) => {
    if (value && path) {
      setIsLoading(value);
    }
  };

  useEffect(() => {
    let path = "";
    if (localStorage.getItem("auth_token") != undefined) {
      if (userData && userData.userlevel == 7) {
        path = "dashboard_ipr";
      }

      if (userData && userData.userlevel != 7) {
        authlogout();
        localStorage.clear()
        setForm({
          ...form, submitError: "user does not have permissions"
        })
      }

      togglesetForm({ ...toggleform, currentpath: path });
      if (path) {
        handleFetch(true, path);
        Router.push(`/${path}`);
      }
    }
  }, [auth_token]);


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const styles3 = {
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    cursor: "pointer",
    fontSize: "15px"
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let formErrors = {};
    if (validator.isEmpty(value, { ignore_whitespace: true })) {
      if (name == "email") {
        formErrors = {
          ...form.formErrors,
          [name]: `User name can not be empty`,
        };
      } else {
        formErrors = {
          ...form.formErrors,
          [name]: `${[name]} can not be empty`,
        };
      }
    } else {
      if (name == "email") {
        let pattern = new RegExp("^[a-zA-Z0-9-]+$");
        if (!pattern.test(value)) {
          formErrors = {
            ...form.formErrors,
            [name]: `Username Accept only Alphanumeric values`,
          };
        } else {
          formErrors = {
            ...form.formErrors,
            [name]: "",
          };
        }
      } else {
        formErrors = {
          ...form.formErrors,
          [name]: "",
        };
      }
    }
    setForm({
      ...form,
      [name]: value,
      formErrors: formErrors,
      submitError: "",
      formValid: true,
    });
  };

  function loginFormSubmit(e) {
    e.preventDefault();
    const { email, password, formErrors, formValid } = form;
    if (
      formErrors.email === "" &&
      formErrors.password === "" &&
      email !== "" &&
      password !== "" &&
      formValid
    ) {
      login({
        variables: { username: email, password },
        update: async (cache, { data }) => {
          if (data != undefined) {
            if (data.login.status == "error") {
              setForm({
                ...form,
                submitError: "Error",
                loading: false,
              });

            } else {
              if (!data.login.token) {
                authlogout();
              }
              setSubmitLoading(true);

              localStorage.setItem(
                "lastlogin",
                data.login.user.lastlogin ? data.login.user.lastlogin : ""
              );

              localStorage.setItem(
                "auth_token",
                data.login.token ? data.login.token : ""
              );

              localStorage.setItem(
                "userrefreshToken",
                data.login.refreshToken ? data.login.refreshToken : ""
              );

              localStorage.setItem(
                "userlevel",
                data.login.user.userlevel ? data.login.user.userlevel : ""
              );

              localStorage.setItem("user", JSON.stringify(data.login.user));

              if (data.login.user && data.login.user) {
                const userClinics = data.login.user.userClinics;
                if (userClinics && userClinics.length > 0) {
                  if (userClinics[0].hip) {
                    localStorage.setItem("userHip", userClinics[0].hip);
                  }
                }
              }

              setForm({
                ...form, loading: true
              });

              resocket(data.login.token != null ? data.login.token : "");
              const userlevel = localStorage.getItem("userlevel") || "";

            }
          }
        },
      });
    } else {
      setForm({ ...form, submitError: "Please fill in all the values", loading: false });
    }

    

    setTimeout(() => {
      setForm({ ...form, submitError: "" });
      setSubmitLoading(false);
    }, 2000);
  }

  return (
    <React.Fragment style={{ backgroundColor: "#fff" }}>
      {!isLoading ?
        <div className="container-fluid bg-white">
          <Row>
            <Col md={5} xl={3} lg={4} sm={12} className="pr-md-0">
              <Sidebar />
            </Col>
            <Col md={7} xl={9} lg={8} sm={9}>
              <div className={styles.mgauto}>
                <div className="text-center me-4">
                  <Image
                    src={Logo1}
                    className="img-fluid"
                    width="55"
                    height="50"
                    alt="logo"
                  />
                </div>
                <h4 className="text-left mt-4 welcomefont mb-0">
                  Welcome to 91 CARE!
                </h4>
                <div className="text-left mb-4 pb-2">
                  <small
                    className={`${styles.smallclr} mx-2`}
                    style={{ fontSize: "12px" }}
                  >
                    The key to providing the best care is open to you.
                  </small>
                </div>
                <Form>
                  {form.submitError == "You have successfully logged in" ? (
                    <h6 className="text-success">{form.submitError}</h6>
                  ) : (
                    <h6 className="text-danger">{form.submitError}</h6>
                  )}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="mb-0">Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      className="textboxborder"
                      autoComplete="off"
                      placeholder="User Name"
                    />
                    <Form.Text className="text-danger">
                      {form.formErrors.email}
                    </Form.Text>
                  </Form.Group>
                  <Form.Label className="mb-0">Password</Form.Label>
                  <InputGroup className="">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      value={form.password}
                      onChange={handleInputChange}
                      className="textboxborder"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text
                      className="f16"
                      onClick={handleTogglePassword}
                      style={styles3}
                    >
                      <i
                        className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"
                          }`}
                      ></i>
                    </InputGroup.Text>
                  </InputGroup>
                  <Form.Text className="text-danger">
                    {form.formErrors.password}
                  </Form.Text>

                  <Row className="mt-4 pt-2 mb-4 pb-3">
                    <Col md={6} xl={6} sm={12} xs={6} className="f13">
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                      </Form.Group>
                    </Col>
                    <Col md={6} xl={6} sm={12} xs={6} className="text-end">
                      <a href="/password_recovery" className="f13">
                        Forgot Password
                      </a>
                    </Col>
                  </Row>
                  <Col md={12} xl={12} lg={12} className="text-center mt-4 mb-5">
                    <Button className={styles.login_button}
                      onClick={(e) => loginFormSubmit(e)}
                      disabled={loading ? true : false}
                    >
                      LOGIN <i className="fal fa-chevron-circle-right mr_12"></i>
                    </Button>
                  </Col>
                </Form>
                <a href="/signup">
                  <Col md={12} xl={12} lg={12} className="text-center">
                    <span className="f14 font-weight-500">
                      Dont have an account{" "}
                    </span>
                    <span className="f14">
                      <b>Signup ?</b>
                    </span>
                  </Col>
                </a>
              </div>
            </Col>
          </Row>
        </div>
        : (
          isLoading && (
            <div className="bgload">
              <div className="loading-content">
                <div className="loading-image">
                  <Image
                    src={Logo2}
                    alt=""
                    width={50}
                    height={50}
                    className="ldx ldx-float"
                  />
                </div>
              </div>
            </div>
          )
        )}
    </React.Fragment>
  );
};

export default Login;