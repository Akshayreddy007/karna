import { atom } from "recoil";

// Appointment Table
export const appointmentTable = atom({
    key: "appointmentTable",
    default: {
        id: 0,
        department: 0,
        departmentSearch:0,
        search: "",
        searchNames:"",
        floor:0,
        floorId:0,
        ward:0,
        wardId:0,
        status:6,
        allStatus:6
    },
});

