import { atom } from "recoil";

// bed filter

const details = {
    department: 0,
    doctor: 0,
    submitError: "",
    formErrors: {
        department: "",
        doctor: "",
    }
}

export const assigndoctor = atom({
    key: "assigndoctor",
    default: {
        ...details,
    },
});


const assignDetails = {
    ...details,
}

export default assignDetails;
