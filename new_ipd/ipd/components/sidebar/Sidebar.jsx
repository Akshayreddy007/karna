import React from "react";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Sidebar.module.scss";
// import Testimonials_Data from "./Testimonials_Data";
import Logo1 from "../../public/images/91care_white.svg";

const Sidebar = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    navClass: ["owl-prev", "owl-next"],
    navText: [
      "<i class='fa fa-chevron-left pad11'></i>",
      "<i class='fa fa-chevron-right pad11'></i>",
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
      1000: {
        items: 1,
      },
    },
  };

  return (
    <React.Fragment style={{ backgroundColor: "#fff" }}>
      <Col md={12} xl={12} lg={12} sm={12} className={styles.sidebarbgcolor}>
        <div className={styles.mp_20}>
          <div className="d-flex">
            <Image
              src={Logo1}
              className="img-fluid"
              width="35"
              height="35"
              alt="logo"
            />
            <h4
              className="text-white mb-0 mt-1 font-weight-600"
              style={{ marginLeft: "10px" }}
            >
              91. CARE
            </h4>
          </div>
          <div className="mt-5 pt-3">
            <h2
              className={`${styles.f24} text-white font-weight-500 line_height40`}
            >
              Simplifying healthcare delivery for providers.
            </h2>
          </div>
          <div className="mt-4">
            <h6 className={styles.font_weight}>
              91 CARE helps your practice thrive and relieves you of all the
              hassles of healthcare delivery.
            </h6>
          </div>
          <div className="mt-md-3 pt-md-4 mt-xl-4 pt-xl-5 me-2">
            <div className={`${styles.bg_theme} my-md-1 my-xl-5`}>
              <div className="owl-theme my-3">
                <div className="item float-left w-100 ">
                  <div className="productListing col-lg-5th col-md-12 col-sm-6 col-xs-12 testimonials">
                    <a>
                      <a className="product float-left">
                        <span className="image text-center"></span>

                        <div
                          className="h3servicefont "
                          style={{ fontSize: "15px", wordBreak: "break-word" }}
                        >
                          91CARE is an ABDM compliant, interoperable,
                          cloud-based, comprehensive EHR application with
                          features that help you run your clinic end to end on a
                          single platform.
                        </div>
                      </a>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Sidebar;