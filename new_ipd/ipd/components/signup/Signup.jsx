import React from 'react'
import Image from 'next/image'
import Sidebar from '../sidebar/Sidebar'
import { Button, Row, Col, Form } from 'react-bootstrap';
import Logo1 from "../../public/images/loginlogo.png";
import Logo2 from "../../public/images/Google_Logo.png";
import styles from '../../styles/Login.module.scss';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { signupState } from '../../shared/signup';
import { useMutation } from '@apollo/client';
import { ADD_SIGN_UP } from "../../graphql/mutations";
import validator from 'validator';

const Signup = () => {
  const [form, setForm] = useRecoilState(signupState);

  const [AddSignUp, { data, loading, error, reset }] = useMutation(ADD_SIGN_UP, {
    onError: (err) => {
      setForm({
        ...form,
        submitError: err.message,
      });
    },
  });

  const handleInputChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    let formErrors = {}
    if (validator.isEmpty(value, { ignore_whitespace: true })) {
      formErrors = {
        ...form.formErrors,
        [name]: `${[name]} can not be empty`
      }

    }
    else {

      if ((name == "email" && !validator.isEmail(value)) || (name == "mobile" && !validator.isMobilePhone(value, ['en-IN']))) {

        formErrors = {
          ...form.formErrors,
          [name]: `Invalid ${[name]}`
        }

      }
      else {
        formErrors = {
          ...form.formErrors,
          [name]: ""
        }

      }
    }
    setForm({ ...form, [name]: value, formErrors: formErrors, submitError: "", formValid: true });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.name != "" && form.email != "" && form.mobile != "") {
      console.log("handlesubmit:", "variables", {
        name: form.name,
        email: form.email,
        mobile: form.mobile,
      });
      AddSignUp({
        variables: {
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          organization: form.organization,
        },
        update: (cache, { data }) => {
          if (data != undefined) {
            if (data.AddSignUp) {
              setForm({
                ...form,
                formValid: false,
                submitError: "You have successfully sign up"
              });
              setTimeout(() => {
                setForm({
                  name: "",
                  email: "",
                  mobile: "",
                  organization: ""
                });
              }, 3000);
            } else {
              setForm({
                ...form, submitError: "Your Attempts are Completed, Please Try After 24 Hours"
              });
            }
          }
        }
      });
      setTimeout(() => {
        setForm({
          ...form,
          formValid: false,
          submitError: "",
        });
      })
    } else {
      setForm({ ...form, submitError: "Please fill all values" });
    }
  }
  return (
    <React.Fragment>
      <div className='container-fluid bg-white'>
        <Row>
          <Col md={5} xl={3} lg={4} sm={12} className='pr-md-0'>
            <Sidebar />
          </Col>
          <Col md={7} xl={9} lg={8} sm={12}>
            <div className={styles.mgauto1}>
              <div className='text-center me-5' style={{ paddingRight: '6.5rem' }}>
                <Image src={Logo1} className="img-fluid" width="55" height="50" alt="logo" />
              </div>
              <h4 className='text-left mt-4 welcomefont mb-0'>Signup</h4>
              <div className='text-left mb-4 pb-2 mt-2'>
                <small className={styles.smallclr}>The faster you fill up, the faster you get started</small>
              </div>
              <Form>
                {form.submitError == "You have successfully sign up" ? (
                  <h6 className="text-success">{form.submitError}</h6>
                ) : (
                  <h6 className="text-danger">{form.submitError}</h6>
                )}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0">Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Full Name" name="name" value={form.name}
                    onChange={handleInputChange} className='textboxborder' autoComplete='off' />
                  <Form.Text className="text-danger">
                    {form.formErrors?.name}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0">Email</Form.Label>
                  <Form.Control type="email" placeholder="xxx@xx.xx" name="email" value={form.email}
                    onChange={handleInputChange} className='textboxborder' />
                  <Form.Text className="text-danger">
                    {form.formErrors?.email}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0">Mobile No</Form.Label>
                  <Form.Control type="number" placeholder="Enter Mobile" name="mobile" value={form.mobile}
                    onChange={handleInputChange} className='textboxborder' />
                  <Form.Text className="text-danger">
                    {form.formErrors?.mobile}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-0">Organization</Form.Label>
                  <Form.Control type="text" as="textarea" placeholder="Enter organization" name="organization" value={form.organization}
                    onChange={handleInputChange} className='textboxborder' />
                  <Form.Text className="text-danger">
                    {form.formErrors?.organization}
                  </Form.Text>
                </Form.Group>
                <Col md={12} xl={12} lg={12} className='text-center mt-5 mb-3'>
                  <Link href='/signup_verify'>
                    <Button className={styles.login_button} onClick={handleSubmit}>Sign up     <i className='fa fa-chevron-circle-right mr_12'></i></Button>
                  </Link>
                </Col>
              </Form>
              <Link href='/login'>
                <Col md={12} xl={12} lg={12} className='text-center mt-4 mb-3 pt-4'>
                  Already have an Account ? <b>Signin </b>
                </Col>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Signup