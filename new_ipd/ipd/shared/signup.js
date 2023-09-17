import { atom } from "recoil";


export const signupState = atom({
  key: "signupState",
  default: {
    name: "",
    email: "",
    mobile: "",
    signup: 1,
    organization:"",
    submitError: "",
    formValid: false,
    formErrors: {
        name: "",
        email: "",
        mobile: "",
        organization:""
    }
  },
});

