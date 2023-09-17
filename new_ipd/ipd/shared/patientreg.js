import { atom } from "recoil";
import moment from "moment";

const newDate = new Date();
const year = newDate.getFullYear();
const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
const day = String(newDate.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;


// Patient Registration

const regdetails = {
  username: "",
  doctor: 0,
  department: 0,
  doctorusername: "",
  referredName: "",
  referredMobile: "",
  bedId: "",
  slotCheck: "",
  slotId: "",
  slotTime: "",
  serviceType: "",
  patientName: "",
  patientAge: "",
  patientDob: "",
  patientMobile: "",
  patientGender: "",
  patientOccupation: "",
  ethnicity: "",
  reason: "",
  caseType: "2",
  organisation: "",
  serviceNo: "",
  relationship: 0,
  newBorn: 0,
  fatherName: "",
  motherName: "",
  timeOfBirth: "",
  patientAddress: "",
  appointmentDate: formattedDate,
  images: [],
  detailsarray:[{image:""}],
  reason: "",
  guardianDetail: [{ guardian_mobile: "", guardian_name: "", guardian_relation:"", nameerror: "", mobileerror: "", relationerror:"" }],
  DoctorDetails: [{ doctor: 0, department: 0, username:"", doctorerror: "", departmenterror: "", maindoctor: 0, maindoctorerror: "", maindoctorchecking:"" }],
  insuranceProvider: "",
  employeePolicy: "",
  corpEmployee: "",
  cardHolderName: "",
  file: "",
  image_filename: "",
  imageerror: "",
  submitError: "",
  submitError1:""
};



export const ipPatientRegistration = atom({
  key: "ipPatientRegistration",
  default: {
    ...regdetails,
    formErrors: {
      ...regdetails, department: "", doctor: "", appointmentDate: "", caseType: "",
      guardianDetail: [{ guardian_mobile: "", guardian_name: "", guardian_relation:"", relationerror:"", nameerror: "", mobileerror: "" }],
    }
  }
});

const patientDetails = {
  ...regdetails,
  formErrors: {
    ...regdetails, department: "", doctor: "", appointmentDate: "", caseType:"",
    guardianDetail: [{ guardian_mobile: "", guardian_name: "", guardian_relation:"", relationerror:"", nameerror: "", mobileerror: "" }],
  }
}

export default patientDetails;

