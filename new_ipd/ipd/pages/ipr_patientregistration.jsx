import React, {useEffect} from "react";
import PatientRegistration from "../components/IPD_Receptionist/PatientRegistration";
import Navigation from "../components/IPD_Receptionist/Navigation";
import Router from 'next/router';
import { authlogout, resocket } from "../components/tokenauth/AuthorizationError";

const ipr_patientregistration = () => {
    useEffect(() => {
    if (localStorage.getItem("auth_token") == undefined) {
      Router.push("/");
      authlogout();
    }
  });
  return (
    <div>
      <Navigation />
      <PatientRegistration />
    </div>
  );
};

export default ipr_patientregistration;
