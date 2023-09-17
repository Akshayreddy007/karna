import { atom } from "recoil";

export const UploadsState = atom({
    key: "UploadsState",
    default: {
        formValid: false,
        submitError: "",
        submitError1: "",
        detailsarray: [{}],
    },
});

