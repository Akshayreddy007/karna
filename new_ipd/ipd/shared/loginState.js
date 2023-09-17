import { atom } from "recoil";
import * as Cookies from "es-cookie";
export const loginState = atom({
  key: "loginState",
  default: {
    email: "",
    password: "",
    captcha:"",
    formErrors: {
      email: "",
      password: "",
      captcha:"",
    },
    submitError: "",
    formValid: false
  },
});

export const toggleState = atom({
  key: "toggleState",
  default: {
    tclassname: "",
    currentpath: "",
    socket: "",
  },
});

export const logout = () => {
  Cookies.remove("usertoken");
  Cookies.remove("userrefreshToken");
  Cookies.remove("user");
};
