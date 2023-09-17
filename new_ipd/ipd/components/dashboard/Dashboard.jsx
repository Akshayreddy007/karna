import React from "react";
import { Row, Col, Form, Card, ProgressBar } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "../../styles/Dashboard.module.scss";
import Avatar from "react-avatar";
import Searchbar from "../Searchbar";
import Testimonials_Data from "./Testimonials_Data1";
// var $ = require("jquery");
// if (typeof window !== "undefined") {
//   window.$ = window.jQuery = require("jquery");
// }

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Dashboard = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 500,
    navClass: ["owl-prev", "owl-next"],
    navText: [
      "<i class='fal fa-chevron-left pad11'></i>",
      "<i class='fal fa-chevron-right pad11'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      2000: {
        items: 1,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [19, 19, 19],
        backgroundColor: ["#4B49AC", "#FFC100", "#248AFD"],
        borderColor: ["#4B49AC", "#FFC100", "#248AFD"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="px-md-5">
        <div className="bg-white mt-3 br8">
          <Row className="p-3">
            <Col md={12} xl={9} lg={10} sm={12}>
              <div className="d-xl-inline-flex">
                <Searchbar />
                <Form.Select
                  aria-label="Default select example"
                  className={styles.textboxwdth4}
                >
                  <option>All Diagnosis</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  aria-label="Default select example"
                  className={styles.textboxwdth3}
                >
                  <option>All Gender</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Col>

            <Col
              md={12}
              xl={3}
              lg={2}
              sm={12}
              xs={12}
              className={styles.d_justify}
            >
              <Form.Select
                aria-label="Default select example"
                className={styles.textboxwdth1}
              >
                <option>All Clinics</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
        </div>

        <div className="pt-3">
          <Col md={12} xl={12} lg={12} sm={12}>
            <div className="card1">
              <Card className="card_shadow card_width p-0">
                <div className="bx_shdw3 px-3">
                  <div className={styles.textclr}>Today Appointments</div>
                  <div className={styles.textclr1}>164</div>
                </div>
                <Card.Body>
                  <Row>
                    <Col md={7} className="pr-0">
                      <div className={styles.textclr}>New Consultations</div>
                    </Col>
                    <Col md={5} className="px-xl-1 px-lg-1">
                      <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-center">
                        114
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={7} className="pr-0">
                      <div className={styles.textclr}>Follow up</div>
                    </Col>
                    <Col md={5} className="px-xl-1 px-lg-1">
                      <div className="f24 font-weight-300 text-center">50</div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card className="card_shadow card_width p-0">
                <div className="bx_shdw3 px-3">
                  <div className={styles.textclr}>Check-in Pending</div>
                  <div className={styles.textclr1}>100</div>
                </div>
                <Card.Body>
                  <Row>
                    <Col md={7} className="pr-0">
                      <div className={styles.textclr}>New Consultations</div>
                    </Col>
                    <Col md={5} className="px-xl-1 px-lg-1">
                      <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-center">
                        80
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={7} className="pr-0">
                      <div className={styles.textclr}>Follow up</div>
                    </Col>
                    <Col md={5} className="px-xl-1 px-lg-1">
                      <div className="f24 font-weight-300 text-center">20</div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card className="card_shadow card_width p-0">
                <div className="bx_shdw3 px-3">
                  <div className={styles.textclr}>Completed</div>
                  <div className={styles.textclr1}>20</div>
                </div>
                <Card.Body>
                  <Row>
                    <Col md={7} className="pr-0">
                      <div className={styles.textclr}>New Consultations</div>
                    </Col>
                    <Col md={5} className="px-xl-1 px-lg-1">
                      <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-center">
                        10
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={7} className="pr-0">
                      <div className={styles.textclr}>Follow up</div>
                    </Col>
                    <Col md={5} className="px-xl-1 px-lg-1">
                      <div className="f24 font-weight-300 text-center">10</div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card className="card_shadow card_width p-0">
                <div className="bx_shdw3 px-3">
                  <div className={styles.textclr}>Payment Pending</div>
                  <div className={styles.textclr1}>14</div>
                </div>
                <Card.Body>
                  <Row>
                    <Col md={7} className="pr-0">
                      <div className={styles.textclr}>New Consultations</div>
                    </Col>
                    <Col md={5} className="px-xl-1 px-lg-1">
                      <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-center">
                        09
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={7} className="pr-0">
                      <div className={styles.textclr}>Follow up</div>
                    </Col>
                    <Col md={5} className="px-xl-1 px-lg-1">
                      <div className="f24 font-weight-300 text-center">05</div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card className="card_shadow card_width p-0">
                <div className="bx_shdw3 px-3">
                  <div className={styles.textclr}>Today Procedures </div>
                  <div className={styles.textclr1}>11</div>
                </div>
                <Card.Body>
                  <Row>
                    <Col md={7} className="pr-0">
                      <div className={styles.textclr}>New Consultations</div>
                    </Col>
                    <Col md={5} className="px-xl-1 px-lg-1">
                      <div className="f24 pb-xl-3  pt-xl-2 font-weight-300 text-center">
                        08
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={7} className="pr-0">
                      <div className={styles.textclr}>Follow up</div>
                    </Col>
                    <Col md={5} className="px-xl-1 px-lg-1">
                      <div className="f24 font-weight-300 text-center text-center">
                        03
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card className="card_shadow card_width p-0">
                <div className="bx_shdw3 px-3">
                  <div className={styles.textclr2}>Canceled & rescheduled </div>
                  <div className={styles.textclr1}>32</div>
                </div>
                <Card.Body>
                  <Row>
                    <Col md={7} className="pr-0">
                      <div className={styles.textclr}>New Consultations</div>
                    </Col>
                    <Col md={5} className="px-xl-1 px-lg-1">
                      <div className="f24 pb-3  pt-2 font-weight-300 text-center">
                        29
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={7} className="pr-0">
                      <div className={styles.textclr}>Follow up</div>
                    </Col>
                    <Col md={5} className="px-xl-1 px-lg-1">
                      <div className="f24 font-weight-300 text-center">05</div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card className="card_shadow card_width p-0">
                <div className="bx_shdw3 px-3">
                  <div className={styles.textclr}>Doctors available</div>
                  <div className={styles.textclr1}>12 / 15</div>
                </div>
                <Card.Body>
                  <Row>
                    <Col md={7} className="pr-0">
                      <div className={styles.textclr}>Part Day</div>
                    </Col>
                    <Col md={5} className="px-xl-1 px-lg-1">
                      <div className="f24 pb-3  pt-2 font-weight-300 text-center">
                        01
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={7} className="pr-0">
                      <div className={styles.textclr}>Full Day</div>
                    </Col>
                    <Col md={5} className="px-xl-1 px-lg-1">
                      <div className="f24 pb-3  pt-2 font-weight-300 text-center">
                        01
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </div>

        <div className="d-flex">
          <Row>
            <Col md={12} xl={7} xs={12} className="pr-0 mx_wdth">
              <OwlCarousel
                className="owl-theme"
                loop
                responsiveClass={true}
                margin={4}
                nav={false}
                arrow={true}
                navText={[
                  <i className="fa fa-arrow-left pad11"></i>,
                  <i className="fa fa-arrow-right pad11"></i>,
                ]}
                dots={true}
                animateIn={true}
                {...options}
              >
                {Testimonials_Data && Testimonials_Data.length > 0
                  ? Testimonials_Data.map((product) => {
                      return (
                        <div
                          id="featuredProducts"
                          className="item float-left w-100"
                          key={product.amount}
                        >
                          <div className="pt-3">
                            <Card>
                              <Card.Body className="p-4">
                                <Row>
                                  <Col md={4} xl={3} lg={3}>
                                    <h6>Detailed Reports</h6>
                                    <div className={styles.amount}>
                                      Rs.{product.amount}
                                    </div>
                                    <div className={styles.theme11}>India</div>
                                    <p className="pt-3 f12">
                                      The total number of sessions within the
                                      date range. It is the period time a user
                                      is actively engaged with your website,
                                      page or app, etc
                                    </p>
                                  </Col>
                                  <Col md={8} xl={5} lg={4}>
                                    <Row className="pt-4">
                                      <Col
                                        md={2}
                                        xl={4}
                                        className="f12 theme12 pb-xl-4 pt-xl-4 pb-md-2  pr-0"
                                      >
                                        Cold Flue
                                      </Col>
                                      <Col md={8} xl={6} className="pt-xl-4 ">
                                        <ProgressBar
                                          variant="success"
                                          now={product.bar1value}
                                        />
                                      </Col>
                                      <Col
                                        md={2}
                                        xl={2}
                                        className="pt-xl-4 font-weight-600 f13"
                                      >
                                        {product.bar1count}
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col
                                        md={2}
                                        xl={4}
                                        className="f12 theme12 pb-xl-4 pb-md-2 pr-0"
                                      >
                                        Viral Fever
                                      </Col>
                                      <Col md={8} xl={6} className="pt-xl-0 ">
                                        <ProgressBar
                                          variant="warning"
                                          now={product.bar2value}
                                        />
                                      </Col>
                                      <Col
                                        md={2}
                                        xl={2}
                                        className=" font-weight-600 f12"
                                      >
                                        {product.bar2count}
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col
                                        md={2}
                                        xl={4}
                                        className="f12 theme12 pb-xl-4 pb-md-2 pr-0"
                                      >
                                        General OP
                                      </Col>
                                      <Col md={8} xl={6} className="pt-xl-0 ">
                                        <ProgressBar
                                          variant="danger"
                                          now={product.bar3value}
                                        />
                                      </Col>
                                      <Col
                                        md={2}
                                        xl={2}
                                        className=" font-weight-600 f12"
                                      >
                                        {product.bar3count}
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col
                                        md={2}
                                        xl={4}
                                        className="f12 theme12 pb-xl-4 pb-md-2  pr-0"
                                      >
                                        Follow up
                                      </Col>
                                      <Col md={8} xl={6} className="pt-xl-0 ">
                                        <ProgressBar
                                          variant="primary"
                                          now={product.bar4value}
                                        />
                                      </Col>
                                      <Col
                                        md={2}
                                        xl={2}
                                        className=" font-weight-600 f12"
                                      >
                                        {product.bar4count}
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col
                                        md={2}
                                        xl={4}
                                        className="f12 theme12 pb-xl-4 pb-md-2  pr-0"
                                      >
                                        Emergency
                                      </Col>
                                      <Col md={8} xl={6} className="pt-xl-0 ">
                                        <ProgressBar
                                          variant="success"
                                          now={product.bar5value}
                                        />
                                      </Col>
                                      <Col
                                        md={2}
                                        xl={2}
                                        className=" font-weight-600 f12"
                                      >
                                        {product.bar5count}
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col
                                        md={2}
                                        xl={4}
                                        className="f12 theme12 pb-xl-4 pb-md-2  pr-0"
                                      >
                                        Surgery
                                      </Col>
                                      <Col md={8} xl={6} className="pt-xl-0 ">
                                        <ProgressBar
                                          variant="danger"
                                          now={product.bar6value}
                                        />
                                      </Col>
                                      <Col
                                        md={2}
                                        xl={2}
                                        className=" font-weight-600 f12"
                                      >
                                        {product.bar6count}
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col
                                    md={6}
                                    xl={4}
                                    lg={4}
                                    className="pt-4 mt-2"
                                  >
                                    <Doughnut
                                      data={data}
                                      style={{ width: "210px" }}
                                    />
                                    <Row className="pt-4">
                                      <Col md={1} xl={1} xs={1}>
                                        <div className={styles.bgborder}></div>
                                      </Col>
                                      <Col md={7} xl={7} xs={7}>
                                        <div className="f12">
                                          Offline Consultations
                                        </div>
                                      </Col>
                                      <Col md={3} xl={3} xs={3}>
                                        <div className="f13">
                                          {product.offlinecount}
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row className="pt-3">
                                      <Col md={1} xl={1} xs={1}>
                                        <div className={styles.bgborder1}></div>
                                      </Col>
                                      <Col md={7} xl={7} xs={7}>
                                        <div className="f12">
                                          Online Consultations
                                        </div>
                                      </Col>
                                      <Col md={3} xl={3} xs={3}>
                                        <div className="f13">
                                          {product.omlinecount}
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row className="pt-3">
                                      <Col md={1} xl={1} xs={1}>
                                        <div className={styles.bgborder2}></div>
                                      </Col>
                                      <Col md={7} xl={7} xs={7}>
                                        <div className="f12">
                                          Mobile Consultations
                                        </div>
                                      </Col>
                                      <Col md={3} xl={3} xs={3}>
                                        <div className="f13">
                                          {product.mobilecount}
                                        </div>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Card.Body>
                            </Card>
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </OwlCarousel>
            </Col>
            <Col xl={3} md={12} className="pr-0">
              <div className="pt-3 px-1 w_420">
                <Card>
                  <Card.Body>
                    <h6 className="pb-3 font-weight-600">To Do List</h6>
                    <div
                      className={styles.border2x}
                      style={{ display: "flex", marginBottom: "25px" }}
                    >
                      <Col md={10} className="d-flex">
                        <span>
                          <Form.Check
                            type="checkbox"
                            name="checkbox"
                            style={{ width: "19px", height: "22px" }}
                          />
                        </span>
                        <span className="ms-3 f13">Level up for Antony</span>
                      </Col>
                      <Col md={2} className="text-end">
                        <i className="fal fa-times"></i>
                      </Col>
                    </div>

                    <div
                      className={styles.border2x}
                      style={{ display: "flex", marginBottom: "25px" }}
                    >
                      <Col md={10} className="d-flex">
                        <span>
                          <Form.Check
                            type="checkbox"
                            name="checkbox"
                            style={{ width: "19px", height: "22px" }}
                          />
                        </span>
                        <span className="ms-3 f13">Level up for Antony</span>
                      </Col>
                      <Col md={2} className="text-end">
                        <i className="fal fa-times"></i>
                      </Col>
                    </div>

                    <div
                      className={styles.border2x}
                      style={{ display: "flex", marginBottom: "25px" }}
                    >
                      <Col md={10} className="d-flex">
                        <span>
                          <Form.Check
                            type="checkbox"
                            name="checkbox"
                            style={{ width: "19px", height: "22px" }}
                          />
                        </span>
                        <span className="ms-3 f13">Level up for Antony</span>
                      </Col>
                      <Col md={2} className="text-end">
                        <i className="fal fa-times"></i>
                      </Col>
                    </div>
                    <div
                      className={styles.border2x}
                      style={{ display: "flex", marginBottom: "25px" }}
                    >
                      <Col md={10} className="d-flex">
                        <span>
                          <Form.Check
                            type="checkbox"
                            name="checkbox"
                            style={{ width: "19px", height: "22px" }}
                          />
                        </span>
                        <span className="ms-3 f13">Level up for Antony</span>
                      </Col>
                      <Col md={2} className="text-end">
                        <i className="fal fa-times"></i>
                      </Col>
                    </div>
                    <Row>
                      <Col md={10} className="font-weight-400 f13">
                        Add new task
                      </Col>
                      <Col md={2} className="font-weight-600 f13 text-end">
                        <span className="bgplus">
                          <i className="fal fa-plus"></i>
                        </span>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={2}>
              <div className="wdthdoctorcard d-xl-block d-none">
                <Card>
                  <Card.Body>
                    <Row className="bdr2 pb-2 ">
                      <Col md={3}>
                        <Avatar
                          name="Jonathan Higgins"
                          size="40"
                          round
                          color="#f7c094 "
                        />
                      </Col>
                      <Col md={9}>
                        <div className="f11 pb-1 pt-1">Jonathan Higgins</div>
                        <div className="f12  theme12">dentist</div>
                      </Col>
                    </Row>
                    <Row className="bdr2 pb-2 pt-2">
                      <Col md={3}>
                        <Avatar
                          name="Mike Torello"
                          size="40"
                          round
                          color="#d8eedb"
                        />
                      </Col>
                      <Col md={9}>
                        <div className="f11 pb-1 pt-1">Mike Torello</div>
                        <div className="f12  theme12">Neurologist</div>
                      </Col>
                    </Row>
                    <Row className="bdr2 pb-2 pt-2">
                      <Col md={3}>
                        <Avatar
                          name="Willie Tanner"
                          size="40"
                          round
                          color="#ffebc6"
                        />
                      </Col>
                      <Col md={9}>
                        <div className="f11 pb-1 pt-1">Willie Tanner</div>
                        <div className="f11  theme12">General Physician</div>
                      </Col>
                    </Row>
                    <Row className="bdr2 pb-2 pt-2">
                      <Col md={3}>
                        <Avatar
                          name="Peter Thornton"
                          size="40"
                          round
                          color="#ffebc6"
                        />
                      </Col>
                      <Col md={9}>
                        <div className="f11 pb-1 pt-1">Peter Thornton</div>
                        <div className="f12  theme12">Pediatrician</div>
                      </Col>
                    </Row>
                    <Row className="bdr2 pb-2 pt-2">
                      <Col md={3}>
                        <Avatar
                          name="Peter Thornton"
                          size="40"
                          round
                          color="#EEE5FD"
                        />
                      </Col>
                      <Col md={9}>
                        <div className="f11 pb-1 pt-1">Peter Thornton</div>
                        <div className="f12  theme12">Pediatrician</div>
                      </Col>
                    </Row>
                    <Row className="bdr2 pb-2 pt-2">
                      <Col md={3}>
                        <Avatar
                          name="Angela Bower"
                          size="40"
                          round
                          color="#DAE3FF"
                        />
                      </Col>
                      <Col md={9}>
                        <div className="f11 pb-1 pt-1">Angela Bower</div>
                        <div className="f12  theme12">Cardiologist</div>
                      </Col>
                    </Row>
                    <Row className="bdr2 pb-2 pt-2">
                      <Col md={3}>
                        <Avatar
                          name="Lynn Tanner"
                          size="40"
                          round
                          color="#F4E0F6"
                        />
                      </Col>
                      <Col md={9}>
                        <div className="f11 pb-1 pt-1">Lynn Tanner</div>
                        <div className="f12  theme12">Gynaecologist </div>
                      </Col>
                    </Row>
                    <Row className="bdr2 pb-2 pt-2">
                      <Col md={3}>
                        <Avatar
                          name="Hannibal Smith"
                          size="40"
                          round
                          color="#FAD3B4"
                        />
                      </Col>
                      <Col md={9}>
                        <div className="f11 pb-1 pt-1">Hannibal Smith</div>
                        <div className="f12  theme12">Dentist </div>
                      </Col>
                    </Row>
                    <Row className="bdr2 pb-2 pt-2">
                      <Col md={3}>
                        <Avatar
                          name="Templeton Peck"
                          size="40"
                          round
                          color="#ffefd1"
                        />
                      </Col>
                      <Col md={9}>
                        <div className="f11 pb-1 pt-1">Templeton Peck</div>
                        <div className="f12  theme12">General Physician</div>
                      </Col>
                    </Row>
                    <Row className=" pb-2 pt-2">
                      <Col md={3}>
                        <Avatar
                          name="Willie Tanner"
                          size="40"
                          round
                          color="#DAE3FF"
                          border="#ffefd1"
                        />
                      </Col>
                      <Col md={9}>
                        <div className="f11 pb-1 pt-1">Willie Tanner</div>
                        <div className="f11  theme12">General Physician</div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
