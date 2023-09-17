import { gql } from "@apollo/client";
export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      refreshToken
      user {
        username
        name
        email
        mobile
        hip
        userlevel
        registration_id
        valid
        image
        hpr_id
        address
        timestamp
        title
        specilization
        gender
        signature
        alternativeMobile
        dob
        twoFactor
        role_id
        role_discount
        department
        lastlogin
        userEducationDetails {
          id
          degree_id
          university
          specialization_id
        }
        userPermissions {
          moduleId
          subPermissions {
            subModuleId
            status
          }
        }
        doctorServices {
          id
          username
          service_id
          clinic_fee
          discount
          validity
          service_name
          total_price
        }
        userClinics {
          id
          hip
          clinic_id
          clinic_name
          clinic_permission {
            id
            clinic_id
            main_module
          }
          clinic_services {
            id
            clinic_id
            service_id
            timestamp
          }
        }
      }
    }
  }
`;

export const OTP_VERIFICTATION = gql`
  mutation otpVerifiction($username: String!) {
    otpVerifiction(username: $username)
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword($otp: String!, $newpassword: String!, $username: String!) {
    changePassword(otp: $otp,newpassword: $newpassword,username: $username,)
  }
`;

export const ADD_SIGN_UP = gql`
mutation AddSignUp(
  $name: String!
  $mobile: String!
  $email: String!
  $organization: String!
) {
  AddSignUp(
    name: $name
    mobile: $mobile
    email: $email
    organization: $organization
  )
}
`;

export const IP_PATIENT_REGISTARTION = gql`

mutation IpPatientRegistration($username: String!, $department: Int!, $referredName: String!, $referredMobile: String!, $bedId: Int!, $newBorn: Int!, $patientName: String!, $patientAge: Int!, $patientDob: String!, $patientMobile: String!, $patientAddress: String!, $patientOccupation: String!, $ethnicity: Int!, $reason: String!, $caseType: Int!, $doctors: [alldoctor]!, $organisation: String!, $insuranceProvider: Int!, $serviceNo: Int!, $relationship: Int!, $appointmentDate: String!, $hip: Int!, $bedDiscount: Int, $fatherName: String, $motherName: String, $timeOfBirth: String, $patientGender: Int, $allImage: [images], $guardianDetail: [gar_details], $corpEmployee: String, $employeePolicy: String, $cardHolderName: String, $serviceType: Int) {
  IpPatientRegistration(username: $username, department: $department, Referred_Name: $referredName, Referred_mobile: $referredMobile, bed_id: $bedId, newBorn: $newBorn, patientName: $patientName, patientAge: $patientAge, patientDob: $patientDob, patientMobile: $patientMobile, patientAddress: $patientAddress, patientOccupation: $patientOccupation, Ethnicity: $ethnicity, Reason: $reason, Case_type: $caseType, doctors: $doctors, Organisation: $organisation, Insurance_Provider: $insuranceProvider, Service_No: $serviceNo, Relationship: $relationship, appointmentDate: $appointmentDate, hip: $hip, bed_discount: $bedDiscount, father_name: $fatherName, mother_name: $motherName, time_of_birth: $timeOfBirth, patientGender: $patientGender, allImage: $allImage, guardian_detail: $guardianDetail, Corp_employee: $corpEmployee, Employee_Policy: $employeePolicy, Card_Holder_Name: $cardHolderName, service_type: $serviceType) {
    ip_appointment_id
    display_ip_appointment_id
    ip_id
    ip_appointment_time
    health_id
    doctor
    department
    ip_appointment_timestamp
    username
    timestamp
    Referred_Name
    Referred_mobile
    Relationship
    bed
    appointment_type
    patient {
      id
      name
      age
      gender
      mobile
      email
      type
      address
      city
      state
      pincode
      occupation
      maritalStatus
      dob
      hip
    }
    hip
    Organisation
    Corp_employee
    Insurance_Provider
    Employee_Policy
    Service_No
    Card_Holder_Name
    Ethnicity
    Reason
    Case_type
    image
  }
}
`

export const UPDATE_IP_APPOINTMENT = gql`
mutation UpdateIPAppointmentStatus($type: Int!, $doctor: Int!, $department: Int!, $ipAppointmentId: String!, $appointmentDate: String!, $appointmentTime: String!, $reasonForCancellation: Int) {
  UpdateIPAppointmentStatus(type: $type, doctor: $doctor, department: $department, ip_appointment_id: $ipAppointmentId, appointmentDate: $appointmentDate, appointmentTime: $appointmentTime, Reason_For_Cancellation: $reasonForCancellation)
}`

export const UPDATE_ASSGIN_DOCTOR = gql`
mutation Updateassigneddoctor($doctor: Int!, $ipId: String!, $username: String!) {
  updateassigneddoctor(doctor: $doctor, ip_id: $ipId, username: $username)
}`

export const ADD_SHEDULE_APPOINTMENT = gql`
mutation AddSheduleAppointment($ipAppointmentId: String!, $doctor: Int!, $date: String!, $department: Int!, $serviceType: Int) {
  AddSheduleAppointment(ip_appointment_id: $ipAppointmentId, doctor: $doctor, date: $date, department: $department, service_type: $serviceType)
}`

export const IP_CHECKIN = gql`
mutation IpcheckIn($status: Int!, $ipAppointmentId: String!) {
  IpcheckIn(status: $status, ip_appointment_id: $ipAppointmentId)
}`

export const ADD_IP_INVOICE = gql`
mutation AddIpInvoice($serviceInvoice: [ipservice]!, $ipId: String!, $ipAppointmentId: String!, $type: Int!, $username: String!, $paymentMethod: Int!, $cash: Float!, $onlinePay: Float! ) {
  addIpInvoice(service_invoice: $serviceInvoice, ip_id: $ipId, ip_appointment_id: $ipAppointmentId, type: $type, username: $username, payment_method: $paymentMethod, cash: $cash, online_pay: $onlinePay)
}`

export const APPOINTMENT_STATUS = gql`
mutation UpdateIPAppointmentStatus($type: Int!, $doctor: Int!, $department: Int!, $ipAppointmentId: String!, $appointmentDate: String!, $appointmentTime: String!, $reasonForCancellation: Int) {
  UpdateIPAppointmentStatus(type: $type, doctor: $doctor, department: $department, ip_appointment_id: $ipAppointmentId, appointmentDate: $appointmentDate, appointmentTime: $appointmentTime, Reason_For_Cancellation: $reasonForCancellation)
}
`

export const UPLOAD_MUTATION = gql`
   mutation Upload($reason: String!, $relationships: Int!, $image: String!, $ipId: String!, $ipAppointment: String!) {
  upload(reason: $reason, relationships: $relationships, image: $image, ip_id: $ipId, ip_appointment: $ipAppointment)
}
`

export const DELETE_CONSENT = gql`
  mutation DeleteConsent($deleteConsentId: ID!) {
    deleteConsent(id: $deleteConsentId)
  }
`

export const ADD_FINAL_BILL = gql`
mutation Addfinalbill($ipAppointmentId: String!, $discount: Float!, $remarks: String!) {
  addfinalbill(ip_appointment_id: $ipAppointmentId, discount: $discount, remarks: $remarks)
}
`

export const TRANSFER_BED = gql`
mutation UpdateIPTransfer($bed: Int!, $ipAppointmentId: String!, $type: Int, $department: Int, $discount: Int) {
  UpdateIPTransfer(bed: $bed, Ip_appointment_id: $ipAppointmentId, type: $type, department: $department, discount: $discount)
}
`

export const ADD_ASSIGNED_DOCTORS = gql`
  mutation AddIpAssignedDoctor($id: Int!, $ipAppoinmentId: String!, $doctor: Int) {
  AddIpAssignedDoctor(Id: $id, ip_appoinment_id: $ipAppoinmentId, doctor: $doctor)
}
`

export const ADD_WALLET = gql`
  mutation AddWallet($ipId: String!, $ipAppointmentId: String!, $type: Int!, $username: String!, $amount: Float!, $status: Int!, $onlinePay: Float!, $cash: Float!, $paymentMethod: Int!) {
    addWallet(ip_id: $ipId, ip_appointment_id: $ipAppointmentId, type: $type, username: $username, amount: $amount, status: $status, online_pay: $onlinePay, cash: $cash, payment_method: $paymentMethod)
  }
`

export const UPDATE_STATUS_AS_ADMITED = gql`
mutation UpdateInitialAssessmentStatus($ipAppointmentId: String!) {
  updateInitialAssessmentStatus(ip_appointment_id: $ipAppointmentId)
}`

export const ADD_FLOOR = gql`
mutation AddFloor($blockId: Int!, $floorNumber: Int!, $floorName: String!) {
  AddFloor(block_id: $blockId, floor_number: $floorNumber, floor_name: $floorName)
}
`

export const ADD_VITALS = gql`
mutation AddIpVitals($vitals: [vitalsData]!, $ipId: String!, $ipAppointmentId: String!, $username: String!) {
  AddIpVitals(Vitals: $vitals, ip_id: $ipId, ip_appointment_Id: $ipAppointmentId, username: $username)
}
`

export const ADD_IP_UPLOADS = gql`
mutation AddIpUploads($uploads: [IpfileUploads]!, $ipId: String!, $username: String!) {
  AddIpUploads(Uploads: $uploads, IpId: $ipId, username: $username)
}
`

export const VIEW_PDF = gql`
mutation ViewPdf($Id: String!, $type: String!, $testRecomendedId: Int, $serviceId: Int, $pdfType: String, $sampleId: String) {
  ViewPdf(Id: $Id, type: $type, test_recomended_id: $testRecomendedId, service_Id: $serviceId, pdf_type: $pdfType, sampleId: $sampleId) {
    pdfurl
  }
}
`;

export const DELETE_IP_COMPLAINTS = gql`
mutation DeleteIprecord($id: Int!, $type: String!, $username: String!) {
  DeleteIprecord(Id: $id, type: $type, username: $username)
}
`;
