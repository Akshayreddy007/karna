import { atom } from "recoil";

const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
};

const newDate = new Date();

// bed filter
export const serachdashboard = atom({
    key: "serachdashboard",
    default: {
        department: "0",
        doctor: "0",
        fromDate: getFormattedDate(newDate),
        toDate: getFormattedDate(newDate),
        search: "",
        gender:3
    },
});
