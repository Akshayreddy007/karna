import { atom } from "recoil";
export const paymentbilling = atom({
    key: "paymentbilling",
    default: {
        onlinePay: 0,
        cash: 0,
        paymentMode: 2
    }
})