import { atom } from "recoil";


//schedule atom
export const RxState = atom({
    key: "RxState",
    default: {
        rx: '',
        pdf: '',
        submitError:""
    }
})
