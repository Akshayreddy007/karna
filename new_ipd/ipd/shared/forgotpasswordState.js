import { atom } from "recoil";
import * as Cookies from "es-cookie";
export const forgotpasswordState = atom({
  key: "forgotpasswordState",
  default: {
    email: "",
    formErrors: {
      email: "",
    },
    submitError: "",
    formValid: false,
  },
});

export const changepasswordState = atom({
  key: "changepasswordState",
  default: {
    submitError: "",
    otptext:"",
    detailsarray: [{ otptext: "" }, { otptext: "" }, { otptext: "" }, { otptext: "" }, { otptext: "" }, { otptext: "" }]
  },
});


export const newpasswordState = atom({
  key: "newpasswordState",
  default: {
    formValid: false,
    submitError: "",
    newpassword:"",
    oldpassword: "",
    confirmpassword: "",
    status:0,
    cstatus:0,
    formErrors: {
      confirmpassword:"",
      oldpassword:"",
      newpassword:"",
    }
  },
});
