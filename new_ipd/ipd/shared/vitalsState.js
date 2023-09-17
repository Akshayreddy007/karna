import { atom } from "recoil";

export const vitalsState = atom({
  key: "vitalsState",
  default: {
    formValid: false,
    submitError: "",
    vitalsarray: [],
    temperature: "",
    pulse: "",
    systolic_bp: "",
    diastolic_bp: "",
    random_blood_sugar: "",
    height: "",
    weight: "",
    spo2: "",
    respiratory_rate: "",
    bmi: "",
    bmicategory: "",
  },
});


