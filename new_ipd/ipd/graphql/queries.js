import { gql } from "@apollo/client";
export const GET_ALL_DRUGS = gql`
query Getipdrugs($ipId: String!, $ipAppointment: String!) {
  getipdrugs(ip_id: $ipId, ip_appointment: $ipAppointment) {
    id
    ip_id
    ip_appointment
    medication
    medicinename
    status
    informed {
      id
      hip
      department
      doctor_username
    }
    username
    nurse
    timestamps
    medication_timestamp
    Update_timestamp
  }
}
`;
export const GET_STATES = gql`
  {
    getStates {
      id
      state
    }
  }
`;

export const IP_ = gql`
  {
    getVitals {
      id
      vital
      code
    }
  }
`;
export const GET_VITAL_UNITS = gql`
  {
    getVitalUnits {
      id
      vital_id
      vital_unit
      code
    }
  }
`;

export const GET_VITALS = gql`
  {
    getVitals {
      id
      vital
      code
    }
  }
`;

export const GET_HABITS = gql`
  {
    getHabits {
      id
      habit
      code
    }
  }
`;

export const GET_RELATIONS = gql`
  {
    getRelations {
      id

      relation
      code
    }
  }
`;

export const GET_PTREATMENT = gql`
  {
    getPrescriptionTreatement {
      id
      treatment
    }
  }
`;

export const GET_PADVICES = gql`
  {
    getPrescriptionAdvices {
      id
      advice
    }
  }
`;

export const GET_PTREATMENT_RATES = gql`
  {
    getTreatmentRates {
      id
      treatment
      cost
    }
  }
`;

export const GET_DEPARTEMNTS = gql`
query GetDepartments {
  getDepartments {
    id
    hip
    department
  }
}
`;

export const GET_DOCTORS = gql`
query GetDoctors($department: Int!, $hip: Int!) {
  getDoctors(department: $department, hip: $hip) {
      id
      hip
      department
      department_name
      details {
        name
        username
        email
        mobile
      }
    }
  }
`;

export const GET_BLOCKS = gql`
query GetBlocks($username: String!, $hip: Int) {
  getBlocks(username: $username, hip: $hip) {
    id
    block_name
    username
    timestamp
    status
    hip
  }
}
`

export const GET_FLOORS = gql`
query GetFloors($blockId: Int!, $username: String!, $hip: Int) {
  getFloors(block_Id: $blockId, username: $username, hip: $hip) {
    id
    floor_name
    BlockData {
      id
      block_name
      hip
    }
    username
    timestamp
    status
    hip
  }
}
`
export const GET_WARDS = gql`
query GetWard($blockId: Int!, $floorId: Int!, $username: String!, $departments: Int, $hip: Int) {
  getWard(block_Id: $blockId, floor_Id: $floorId, username: $username, departments: $departments, hip: $hip) {
    id
    ward_name
    BlockData {
      id
      block_name
      hip
    }
    floorData {
      id
      floor_name
      hip
    }
    nurse
    nurse_name
    doctor
    doctor_name
    username
    departments {
      id
      ward_id
      department
      department_name
    }
    timestamp
    status
    hip
  }
}
`

export const GET_BED = gql`
query GetBed($blockId: Int!, $floorId: Int!, $wardId: Int!, $bedtypes: Int!, $username: String!, $status: Int, $hip: Int, $bedNumber: String) {
  getBed(block_Id: $blockId, floor_Id: $floorId, ward_Id: $wardId, bedtypes: $bedtypes, username: $username, status: $status, hip: $hip, bed_number: $bedNumber) {
    id
    bed_number
    BlockData {
      id
      block_name
      hip
    }
    floorData {
      id
      floor_name
      hip
    }
    WardData {
      id
      ward_name
      hip
    }
    status
    username
    timestamp
    bedtype {
      id
      Title
      availableBeds
      Status
      Features {
        id
        bedtype_id
        Features
        Featuresname
      }
      Min_hours
      UnitPrice
      Min_discount
      username
      hip
    }
    gst
    repute
    care_type
    department {
      id
      department
      status
      hip
      username
    }
    hip
  }
}
`

export const GET_CANCEL_REASON = gql`
  query GetGlobalCancellationReason {
  getGlobalCancellationReason {
    id
    reason
  }
}
`

export const GET_ALL_WARDDEPARTMENTS = gql`
query GetAllDepartments($hip: Int, $username: String) {
  getAllDepartments(hip: $hip, username: $username) {
    id
    department
    status
    hip
    username
  }
}
`

export const GET_DEPARTMENTS = gql`
    query GetDepartments {
  getDepartments {
    id
    hip
    department
  }
}
`

export const GET_ALL_UPLOADCONSENT_DATA = gql`
  query GetAlluplodeconsent($ipId: String, $ipAppointmentId: String) {
    getAlluplodeconsent(ip_id: $ipId, ip_appointment_id: $ipAppointmentId) {
      id
      reason
      relationships
      image
    }
  }
`

export const GET_BED_TYPES = gql`
query GetAllbedtypes {
  getAllbedtypes {
    id
    Title
    availableBeds
    Status
    Features {
      id
      bedtype_id
      Features
    }
    Min_hours
    UnitPrice
    Min_discount
  }
}
`

export const GET_RELATIOSN = gql`
query GetRelations {
  getRelations {
    id
    relation
    code
  }
}`


export const GET_GLOBAL_INSURENCE = gql`
query GetAllGlobalInsurances {
  getAllGlobalInsurances {
    id
    tittle
  }
}`

export const GET_CASE_TYPES = gql`
query GetAllGlobalCasetype {
  getAllGlobalCasetype {
    id
    title
  }
}`

export const GET_ETHNICITY = gql`
query GetAllGlobalethnicity {
  getAllGlobalethnicity {
    id
    country
  }
}`

export const GET_ADMIN_USERS = gql`
query GetAdminUsers($username: String, $name: String, $adminUserName: String) {
  getAdminUsers(username: $username, name: $name, adminUserName: $adminUserName) {
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
      clinic_id
      clinic_name
      hip
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
}`


export const GET_IP_PATIENTS = gql`
query GetInPateints($hip: Int!, $ipAppointmentId: String, $department: Int, $search: String, $gender: Int, $floor: Int, $ward: Int, $crossConsultationAppid: Int, $status: Int) {
  getInPateints(hip: $hip, Ip_appointment_id: $ipAppointmentId, department: $department, search: $search, gender: $gender, floor: $floor, ward: $ward, cross_consultation_appid: $crossConsultationAppid, status: $status) {
    appointment_type
    display_ip_appointment_id
    ip_id
    IpRecord {
      id
      ip_id
      op_appointment_id
    }
    doctor
    doctor_username
    doctor_name
    department
    department_name
    ip_appointment_id
    ip_appointment_timestamp
    patient_id
    health_id
    bed
    ward_nurse
    total_wallet_amount
    Doctor_ward
    location
    category
    vulnerable
    reason
    attender_name
    attender_mobile
    attender_relation
    resheduled
    consultant_status
    consultant_name
    PatientData {
      id
      name
      age
      gender
      mobile
      marital_status
      address
      father_name
      mother_name
      time_of_birth
    }
    del_flag
    username
    timestamp
    status
    hip
    uhid
    ethinicity
    case_type
    imagesdata {
      id
      ip_appointment_id
      ip_id
      image
    }
    referred_name
    mobile_no
    Insurance_details {
      organisation
      corp_employee
      insurance_provider
      employee_policy
      service_no
      card_holder_name
      relationship_id
    }
    service_type
    service_name
    cross_consultation_appid
    gerdian_details {
      Name
      Mobile
      relation
    }
    assigndoctor {
      id
      ip_appointment_id
      doctor
      doctor_username
      doctor_name
      main_doctor
      department
      department_name
    }
    bed_discount
    discount
    remarks
    final_bill
    final_bill_status
  }
}
`

export const GET_SCHEDULE_SLOTS = gql`
query GetScheduleSlots($username: String!, $timestamp: String!, $day: Int) {
  getScheduleSlots(username: $username, timestamp: $timestamp, day: $day) {
    id
    day_id
    day
    from_time
    to_time
    service_id
    services_text
    username
    hip
    timestamp
    slotarray {
      time
    }
  }
}`

export const GET_PHARAMA_DISCOUNT = gql`
query GetGlobalPharmaGst {
  getGlobalPharmaGst {
    id
    gst
    percentage
  }
}
`

export const GET_BLOCKDATES = gql`
query Getdoctorblockdate($date: String, $username: String!) {
  getdoctorblockdate( date: $date, username: $username) {
    id
    doctor_name
    block_date
    entire_day
    username
    timestamp
    doctor_detail {
      id
      doctor_date_id
      from_time
      to_time
      username
      timestamp
    }
  }
}`

export const GET_PAYMENT_MODES = gql`
query GetPaymentModes {
  getPaymentModes {
    id
    mode
    status
  }
}`


export const GET_IP_REC_DASHBOARD = gql`
query GetIpReceptionistDashboard($hip: Int!, $department: Int, $toDate: String, $fromDate: String, $gender: Int, $doctor: Int) {
  getIpReceptionistDashboard(hip: $hip, department: $department, To_Date: $toDate, From_Date: $fromDate, gender: $gender, doctor: $doctor) {
    AllDoctor
    Total_Patient
    bed_accupacy_rate
    average_lengthOfStay
    emergancy_Department
    daily_patientCount {
      IPD
      OPD
      day
    }
    daily_patientCountBySpecilazation {
      specialization_name
      op_patient_count
      ip_patient_count
    }
    bed_managment {
      avilable_bed
      avilable_acute_care_bed
      care_types {
        total_acute_care
        total_non_acute_care
        total_available_acute_care
        total_Accupancy_acute_care
        total_available_non_acute_care
        total_Accupancy_non_acute_care
        acute_care {
          name
          total_beds
          Available_beds
          Accupancy
        }
        non_acute_care {
          name
          total_beds
          Available_beds
          Accupancy
        }
      }
    }
  }
}`

export const GET_IP_INVOICES = gql`
query GetIpInvoice($invoiceId: String, $ipAppointmentId: String) {
  getIpInvoice(invoice_id: $invoiceId, ip_appointment_id: $ipAppointmentId) {
    id
    ip_id
    ip_appointment_id
    invoice_id
    amount
    type
    remarks
    discount
    username
    timestamp
    invoice_details {
      id
      invoice_id
      type
      service_name
      quantity
      unit_price
      gst
      price
      discount
      amount
      max_discount
    }
    partial_pay {
      id
      invoice_id
      payment_method
      amount_paid
      status
      username
    }
    payment_status
  }
}
`
export const GET_ASSIGNED_DOCTORS = gql`
  query GetAssignedDoctor($ipAppointmentId: String!) {
    getAssignedDoctor(ip_appointment_id: $ipAppointmentId) {
      id
      ip_appointment_id
      doctor
      doctor_username
      doctor_name
      department
      department_name
      status
    }
}
`

export const GET_ALL_IPLOCATION = gql`
  query GetIpPatientLocation($ipId: String, $ipAppointmentId: String) {
  getIpPatientLocation(ip_id: $ipId, ip_appointment_id: $ipAppointmentId) {
    id
    ip_id
    ip_appointment_id
    bed {
      id
      block_id
      blockname
      floor_id
      floorname
      ward_id
      wardname
      bed_number
      status
      username
      timestamp
      transfer_timestamp
      bedtype {
        id
        Title
        availableBeds
        Status
        Features {
          id
          bedtype_id
          Features
        }
        Min_hours
        UnitPrice
        Min_discount
      }
      department
      department_name
      repute
      Hours
      Days
      gst
      Amount
      Total
    }
    type
    timestamp
    department
    discount
    from_date
    to_date
  }
}
`

export const GET_WALLET_TRANSACTIONS = gql`
    query GetWalletTransaction($ipId: String, $ipAppointmentId: String, $type: Int) {
  getWalletTransaction(ip_id: $ipId, ip_appointment_id: $ipAppointmentId, type: $type) {
    amount
    ip_appointment_id
    timestamp
    type
    username
    wallettransaction {
      invoice_id
      status
      payment_method
      amount_paid
    }
    invoice_id
    service
  }
}
`

export const GET_IP_VITALS = gql`
query GetIpPateintRecord($ipId: String!, $ipAppointmentId: String!) {
  getIpPateintRecord(ip_Id: $ipId, ip_appointmentId: $ipAppointmentId) {
    IpVitals {
      id
      ip_id
      ip_appointment_id
      patient_id
      temperature
      pulse
      systolic_bp
      diastolic_bp
      respiratory_rate
      spo2
      random_blood_sugar
      height
      weight
      username
      timestamp
    }
  }
}
`

export const GET_IP_PATIENTS_RECORDS = gql`
query GetIpPateintRecord($ipId: String!, $ipAppointmentId: String!) {
  getIpPateintRecord(ip_Id: $ipId, ip_appointmentId: $ipAppointmentId) {
    IpChiefComplaints {
      id
      ip_id
      ip_appointment_id
      patient_id
      complaint
      complaint_text
      status
      remarks
      duration
      duration_selection
      onset
      severity
      timestamp
    }
    IpAllergies {
      id
      ip_id
      ip_appointment_id
      patient_id
      allergy
      remarks
      allergy_text
      username
      timestamp
    }
    IpFindings {
      id
      ip_id
      ip_appointment_id
      patient_id
      finding
      finding_text
      username
      timestamp
    }
    IpExistingComplaints {
      id
      ip_id
      ip_appointment_id
      patient_id
      complaint
      complaint_text
      status
      present_since
      present_since_type
      del_flag
      username
      timestamp
    }
    IpHabits {
      id
      ip_id
      ip_appointment_id
      patient_id
      habit
      habit_text
      status
      username
      timestamp
    }
    IpMedicationHistory {
      id
      ip_id
      ip_appointment_id
      patient_id
      medication
      medication_name
      dosage
      route
      frequency
      frequency_text
      start_date
      remarks
      del_flag
      username
      timestamp
    }
    IpSurgicalHistory {
      id
      ip_id
      ip_appointment_id
      patient_id
      surgery
      surgery_text
      del_flag
      username
      timestamp
    }
    IpPrescription {
      id
      ip_id
      ip_appointment_id
      patient_id
      medication
      medication_name
      dosage
      route
      frequency
      frequency_text
      start_date
      remarks
      issued_quantity
      batch_number
      status
      del_flag
      username
      timestamp
    }
    IpTestsRecommended {
      id
      ip_id
      ip_appointment_id
      patient_id
      test_recommended
      testRecommended_text
      testResult
      testStatus
      barcode_type
      collected
      sample_id
      sample_timestamp
      test {
        result_value
        remarks
        timestamp
      }
      username
      timestamp
    }
    IpVitals {
      id
      ip_id
      ip_appointment_id
      patient_id
      temperature
      pulse
      systolic_bp
      diastolic_bp
      respiratory_rate
      spo2
      random_blood_sugar
      height
      weight
      username
      timestamp
    }
    IpfamilyHistory {
      id
      ip_id
      ip_appointment_id
      patient_id
      relation
      relation_text
      complaint
      complaint_text
      del_flag
      username
      timestamp
    }
    IpPatientDicharges {
      id
      ip_id
      ip_appointment_id
      health_id
      health_history
      condition_discharge
      diet
      activities
      followup
      other_advice
      review
      del_flag
      username
      timestamp
      dischargeFindings {
        id
        ip_id
        ip_appointment_id
        patient_id
        finding
        finding_text
        username
        timestamp
      }
      dischargePrescription {
        id
        ip_id
        ip_appointment_id
        patient_id
        medication
        medication_name
        dosage
        route
        frequency
        frequency_text
        start_date
        remarks
        status
        del_flag
        username
        timestamp
      }
    }
    IpPresentilleness {
      id
      ip_id
      ip_appointment_id
      illness
      username
      timestamp
    }
    IpRiskScore {
      id
      ip_id
      patient_id
      ip_appointment_id
      eye_opening_response
      eye_opening_response_title
      verbal_response
      verbal_response_title
      motor_response
      motor_response_title
      total_score
      total_score_title
      remarks
      username
      timestamp
    }
    ip_contact {
      id
      ip_id
      ip_appointment_id
      name
      mobile
      relation
      timestamp
    }
    ip_location_history {
      id
      ip_id
      ip_appointment_id
      bed
      type
      Ot_title
      ward_name
      floor_name
      block_name
      timestamp
    }
    Ipnote {
      id
      ip_id
      ip_appointment_id
      patient_id
      username
      clinical_notes
      private_notes
      timestamp
    }
    IpdoctorAssign {
      id
      ip_id
      ip_appointment_id
      from_date
      to_date
      doctor
      doctor_username
      doctor_name
      username
      timestamp
    }
    IpRemarks {
      id
      ip_appointment_id
      ot_booking_id
      ip_id
      remarks
      timestamp
    }
    ip_discharge_prescription {
      id
      ip_id
      ip_appointment_id
      patient_id
      medication
      medication_name
      dosage
      route
      frequency
      frequency_text
      start_date
      remarks
      status
      del_flag
      username
      timestamp
    }
    ip_discharge_findings {
      id
      ip_id
      ip_appointment_id
      patient_id
      finding
      finding_text
      username
      timestamp
    }
    ot_prescription {
      id
      ip_id
      ip_appointment_id
      patient_id
      medication
      medication_name
      dosage
      route
      frequency
      frequency_text
      otdata {
        id
        ip_appointment_id
        ip_id
        username
        date
        start_time
        procedure
        timestamp
        status
        ot
        title
        patient_name
        mobile
      }
      start_date
      remarks
      status
      del_flag
      username
      timestamp
    }
    ip_redioTestRecommanded {
      id
      patient_id
      ip_id
      ip_appointment_id
      test_recommended
      testRecommended_text
      testResult
      testStatus
      result_value
      remarks
      result_timestamp
      del_flag
      timestamp
    }
    ip_followup {
      id
      patient_id
      ip_appointment_id
      ip_id
      follow_date
      remarks
    }
    IpPrognosis {
      id
      patient_id
      ip_appointment_id
      ip_id
      remarks
    }
    IpNurseNotes {
      id
      patient_id
      ip_appointment_id
      ip_id
      remarks
    }
    IpOtNotes {
      id
      patient_id
      ip_appointment_id
      ip_id
      remarks
    }
    IpPatientInstruction {
      id
      patient_id
      ip_appointment_id
      ip_id
      remarks
    }
    IpPatientTratement {
      id
      patient_id
      ip_appointment_id
      ip_id
      remarks
    }
    IpReferralDoctors {
      id
      patient_id
      ip_appointment_id
      ip_id
      doctor
      department
      mobile
      notes
      del_flag
      username
    }
    IpHOPI {
      id
      patient_id
      ip_appointment_id
      ip_id
      remarks
    }
    ExaminationFindings {
      id
      patient_id
      ip_appointment_id
      ip_id
      finding
      finding_text
      remarks
    }
    ipPatientImmunization {
      id
      patient_id
      ip_appointment_id
      ip_id
      vaccine
      vaccine_text
      body_site
      body_site_text
      dosage
      brand
      route
      date
      type
    }
    Uploads {
      id
      patient_id
      ip_appointment_id
      ip_id
      type
      file
      username
    }
  }
}`

export const GET_CLINIC_DETAILS = gql`
  query GetClinicDetails($hip: Int) {
  getClinicDetails(hip: $hip) {
    contact_number
    address
    clinic_name
    clinic_logo
    timing
   }
}
`

export const GET_IP_RX_DATES = gql`
query GetIpPatientRX {
  getIpPatientRX {
    appointment_id
    RXTIME
  }
}
`