import { atom } from "recoil";


export const addservices = atom({
    key: "addservices",
    default: {
        servicedetails: [],
        submitError: "",
        onlinePay: "",
        cash: "",
        onlinePay: 2,
        username:""
    },
});

