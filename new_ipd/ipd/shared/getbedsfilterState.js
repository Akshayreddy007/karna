import { atom } from "recoil";

// bed filter
export const getbedsfilterState = atom({
    key: "getbedsfilterState",
    default: {
        block: 0,
        floor: 0,
        ward: 0,
        bed: 0,
        bedType:0,
        submitError:"",
        department:"0"
    },
});

