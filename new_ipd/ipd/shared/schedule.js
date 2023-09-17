import { atom } from "recoil";

const newDate = new Date();
const year = newDate.getFullYear();
const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
const day = String(newDate.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

const details = {
    department: 0,
    doctor: 0,
    serviceType: 0,
    slotCheck: 0,
    slotTime: "",
    doctorusername: "",
    slotCheck: -2,
    slotId: 0,
    date: formattedDate,
    time: ""
}

const scheduleDetails = {
    ...details,
    formErrors: {
        ...details,
        department: "",
        doctor: "",
        slotCheck: "",
        slotId: "",
        slotTime: "",
        serviceType: "",
        date: ""
    }
}
export default scheduleDetails

//schedule atom
export const schedule = atom({
    key: "schedule",
    default: {
        ...details,
        formErrors: {
            ...details,
            department: "",
            doctor: "",
            slotCheck: "",
            slotId: "",
            slotTime: "",
            serviceType: ""
        }
    }
})

export const checkin = atom({
    key: "checkin",
    default: {
        submitError: ""
    }
})