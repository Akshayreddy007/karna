import { atom } from "recoil";

// Appointment Table
export const addfloordata = atom({
    key: "addfloordata",
    default: {
        block: "",
        floor: "",
        floorName: "",
        submitError: "",
        blockerror: "", 
        floorerror: "",
        floorNameerror: "",
    },
});

