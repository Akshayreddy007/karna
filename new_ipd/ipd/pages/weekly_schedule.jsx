import React from "react";
import Navbar from "../components/navbar1/NavbarTwo";
import Weekly_schedule from "../components/doctor_profile/Weekly_schedule";

const weekly_schedule = () => {
  return (
    <React.Fragment>
    <Navbar />
    <div>
      <Weekly_schedule />
      </div>
    </React.Fragment>
  );
};

export default weekly_schedule;
