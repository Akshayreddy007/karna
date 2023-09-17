import { atom } from "recoil";


export const addipservices = atom({
    key: "addipservices",
    default: {
        servicedetails: [],
        submitError: '',
        remarks: "",
        discountValue: 0,
        discount:0,
        formErrors:{
            remarks:""
        },
        pageaccess: false
    },
});

