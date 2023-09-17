import React from "react";
import Navbar from "../components/navbar1/NavbarTwo";
import Doctor_profile from "../components/doctor_profile/Doctor_profile";

const doctor_profile = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <Doctor_profile />
      </div>
    </React.Fragment>
  );
};

export default doctor_profile;
