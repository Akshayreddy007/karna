import React, {useEffect} from 'react'
import Navigation from '../components/IPD_Receptionist/Navigation'
import Billing from '../components/IPD_Receptionist/Billing'
import Router from 'next/router';
import { authlogout, resocket } from "../components/tokenauth/AuthorizationError";

const ipr_billing = () => {
  useEffect(() => {
    if (localStorage.getItem("auth_token") == undefined) {
      Router.push("/");
      authlogout();
    }
  });
  
  return (
    <div>
      <Navigation />
      <Billing />
    </div>
  )
}

export default ipr_billing