import React, { useState } from "react";
import { Row, Col, Form, Card, ProgressBar } from "react-bootstrap";
import styles from "../../../styles/IPD_Admin/Dashboard.module.scss";
import Searchbar from "./Searchbar";
import Highcharts from "highcharts";
import Logo2 from "/public/images/norecords.png";
import HighchartsReact from "highcharts-react-official";
import { Space, Switch, Table } from "antd";
import { useQuery } from "@apollo/client";
import { GET_IP_REC_DASHBOARD } from '../../../graphql/queries';
import { useRecoilState } from "recoil";
import { serachdashboard } from '../../../shared/ipdrecepserachdashboard'

const Dashboard = () => {

  const [form, setForm] = useRecoilState(serachdashboard)

  let globalUserHip = 0;

  if (typeof window !== "undefined") {
    const storedGlobalUserHip = localStorage.getItem("userHip");
    if (storedGlobalUserHip) {
      try {
        globalUserHip = JSON.parse(storedGlobalUserHip);
      } catch (error) {
        console.error("Error parsing global user hip from localStorage:", error);
      }
    }
  }

  const { data, loading, error } = useQuery(GET_IP_REC_DASHBOARD, {
    variables: {
      hip: globalUserHip,
      doctor: parseInt(form.doctor),
      department: parseInt(form.department),
      fromDate: form.fromDate,
      toDate: form.toDate,
      gender: parseInt(form.gender)
    }
  })

  let DashboardDetails = {};
  let DailyPatientCountBySepecilization = [];
  let DailyPatientCount = [];
  if (data && data.getIpReceptionistDashboard) {
    DashboardDetails = data.getIpReceptionistDashboard
    DailyPatientCount = data.getIpReceptionistDashboard.daily_patientCount
    DailyPatientCountBySepecilization = data.getIpReceptionistDashboard.daily_patientCountBySpecilazation
  }


  const { AllDoctor, Total_Patient, bed_accupacy_rate, average_lengthOfStay, emergancy_Department, bed_managment, Staff_managment } = DashboardDetails

  // All doctor count 
  const AllDoctorCount = AllDoctor || 0
  // Total Patient count
  const TotalPatientCount = Total_Patient || 0
  // Total Bed accupacy count
  const TotalBedAccupacyCount = bed_accupacy_rate || 0
  // Total Average length of Stay count
  const TotalAverageLengthOfStayCount = average_lengthOfStay || 0
  // Emergenct Department count
  const EmergencyDoctorCount = emergancy_Department || 0


  // Bed Management
  let AvailableBeds = 0;
  let AvailableAcuteCareBed = 0;
  let TotalAcuteCareDetails = [];
  let TotalNoAcuteCareDetails = [];
  let TotalAcuteBeds = 0;
  let TotalNonAcuteBeds = 0;
  let TotalAccupancyAcuteCare = 0;
  let TotalAccupancyNonAcuteCare = 0;
  let TotalAvailableAcuteBeds = 0
  let TotalAvailableNonAcuteBeds = 0
  let TotalAccupancy = 0;
  let TotalAvailable = 0;
  let TotalBeds = 0;
  if (bed_managment) {
    if (bed_managment.avilable_bed) {
      AvailableBeds = bed_managment.avilable_bed
    }
    if (bed_managment.avilable_acute_care_bed) {
      AvailableAcuteCareBed = bed_managment.avilable_acute_care_bed
    }

    if (bed_managment.care_types.total_available_acute_care) {
      TotalAvailableAcuteBeds = bed_managment.care_types.total_available_acute_care
    }
    if (bed_managment.care_types.total_Accupancy_acute_care) {
      TotalAccupancyAcuteCare = bed_managment.care_types.total_Accupancy_acute_care
    }
    if (bed_managment.care_types.total_available_non_acute_care) {
      TotalAvailableNonAcuteBeds = bed_managment.care_types.total_available_non_acute_care
    }
    if (bed_managment.care_types.total_Accupancy_non_acute_care) {
      TotalAccupancyNonAcuteCare = bed_managment.care_types.total_Accupancy_non_acute_care
    }


    if (bed_managment.care_types) {
      if (bed_managment.care_types.total_acute_care) {
        TotalAcuteBeds = bed_managment.care_types.total_acute_care
      }
      if (bed_managment.care_types.total_non_acute_care) {
        TotalNonAcuteBeds = bed_managment.care_types.total_non_acute_care
      }
      if (bed_managment.care_types.acute_care) {
        TotalAcuteCareDetails = bed_managment.care_types.acute_care
      }
      if (bed_managment.care_types.non_acute_care) {
        TotalNoAcuteCareDetails = bed_managment.care_types.non_acute_care
      }
    }
  }

  TotalAccupancy = (TotalAccupancyAcuteCare + TotalAccupancyNonAcuteCare) / 2;
  TotalAvailable = TotalAvailableAcuteBeds + TotalAvailableNonAcuteBeds;
  TotalBeds = TotalNonAcuteBeds + TotalAcuteBeds

  // staff management
  let DoctorsAssigned = 0;
  let NurseAssigned = 0;
  if (Staff_managment) {
    if (Staff_managment.doctors_assigned) {
      DoctorsAssigned = Staff_managment.doctors_assigned
    }
    if (Staff_managment.nurses_assigned) {
      NurseAssigned = Staff_managment.nurses_assigned
    }
  }



  const columns = [
    {
      title: "Acuity Type",
      dataIndex: "AcuityType",
      key: "AcuityType",
    },
    {
      title: "Total beds",
      dataIndex: "Totalbeds",
      key: "Totalbeds",
    },
    {
      title: "Available beds ",
      dataIndex: "Availablebeds",
      key: "Availablebeds",
    },
    {
      title: "Occupancy % ",
      dataIndex: "Occupancy",
      key: "Occupancy",
    },
  ];

  const data22 = [
    {
      key: 1,
      AcuityType: "Non-Acute Care",
      Totalbeds: TotalNonAcuteBeds,
      Availablebeds: TotalAvailableNonAcuteBeds,
      Occupancy: `${TotalAccupancyNonAcuteCare} %`,
      children: TotalNoAcuteCareDetails.map((each, index) => ({
        key: 11 + index, // You can update the key based on your requirement
        AcuityType: each.name,
        Totalbeds: each.total_beds,
        Availablebeds: each.Available_beds,
        Occupancy: each.Accupancy + "%",
      })),
    },
    {
      key: 2,
      AcuityType: "Acute Care",
      Totalbeds: TotalAcuteBeds,
      Availablebeds: TotalAvailableAcuteBeds,
      Occupancy: `${TotalAccupancyAcuteCare} %`,
      children: TotalAcuteCareDetails.map((each, index) => ({
        key: 21 + index, // You can update the key based on your requirement
        AcuityType: each.name,
        Totalbeds: each.total_beds,
        Availablebeds: each.Available_beds,
        Occupancy: each.Accupancy + "%",
      })),
    },
  ];


  const columns1 = [
    {
      title: "Department",
      dataIndex: "Department",
      key: "Department",
    },
    {
      title: "Doctor",
      dataIndex: "Doctor",
      key: "Doctor",
    },
    {
      title: "Nurses ",
      dataIndex: "Nurses",
      key: "Nurses",
    },
    {
      title: "Dr vs Patient ",
      dataIndex: "DrvsPatient",
      key: "DrvsPatient",
    },
    {
      title: "Nurse vs Patient  ",
      dataIndex: "NursevsPatient ",
      key: "NursevsPatient ",
    },
  ];

  const data1 = [
    {
      key: 1,
      Department: "Non-Acute Care",
      Doctor: 60,
      Nurses: 50,
      DrvsPatient: "6:7",
      NursevsPatient: "7:8",
      children: [
        {
          key: 11,
          Department: "CCU",
          Doctor: 42,
          Nurses: 50,
          DrvsPatient: "6:7",
          NursevsPatient: "7:8",
        },
        {
          key: 12,
          Department: "GENSURG",
          Doctor: 30,
          Nurses: 50,
          DrvsPatient: "6:7",
          NursevsPatient: "7:8",
          children: [
            {
              key: 121,
              Department: "NF",
              Doctor: 16,
              Nurses: 70,
              DrvsPatient: "6:7",
              NursevsPatient: "7:8",
            },
          ],
        },
      ],
    },
    {
      key: 2,
      Department: "Acute Care",
      Doctor: 32,
      Nurses: 10,
      DrvsPatient: "6:7",
      NursevsPatient: "7:8",
    },
  ];
  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  //DailyPatientCount
  const options4 = {
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: DailyPatientCount.map((each) => each.day),
    },

    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      column: {
        borderRadius: "2%",
      },
    },
    colors: [" #AE00BD", " #0B889D"],
    series: [
      {
        name: "IPD",
        data: DailyPatientCount.map((each) => each.IPD)
      },
      {
        name: "OPD",
        data: DailyPatientCount.map((each) => each.OPD)
      },
    ],
  };

  // DailyPatientCountBySepecilization
  const options5 = {
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: DailyPatientCountBySepecilization.map((each => each.specialization_name))
    },

    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      column: {
        borderRadius: "2%",
      },
    },
    colors: ["#5E3A9E", "#248AFD"],
    series: [
      {
        name: "IPD",
        data: DailyPatientCountBySepecilization.map((each => each.ip_patient_count)),
      },
      {
        name: "OPD",
        data: DailyPatientCountBySepecilization.map((each => each.op_patient_count)),
      },
    ],
  };

  const CustomTableFooter = () => {
    return (
      <table>
        <tfoot>
          <tr>
            <td
              className="font-weight-600 ant-table-cell "
              style={{ width: "31%" }}
            >
              Total
            </td>
            <td
              className="font-weight-600 ant-table-cell "
              style={{ width: "21%" }}
            >
              {TotalBeds}
            </td>
            <td className="font-weight-600 ant-table-cell ">{TotalAvailable}</td>
            <td className="font-weight-600 ant-table-cell " style={{ width: "20%" }}>{TotalAccupancy.toFixed(2)}%</td>
          </tr>
        </tfoot>
      </table>
    );
  };

  const CustomTableFooter1 = () => {
    return (
      <table>
        <tfoot>
          <tr>
            <td
              className="font-weight-600 ant-table-cell "
              style={{ width: "30%" }}
            >
              Total
            </td>
            <td
              className="font-weight-600 ant-table-cell "
              style={{ width: "22%" }}
            >
              1680
            </td>
            <td className="font-weight-600 ant-table-cell ">856</td>
            <td className="font-weight-600 ant-table-cell " style={{ width: "20%" }}>88%</td>
          </tr>
        </tfoot>
      </table>
    );
  };

  const renderFooter = () => CustomTableFooter();
  const renderFooter1 = () => CustomTableFooter1()

  return (
    <React.Fragment>
      <div className="bg-white mt-3 br8 mb-3">
        <div className="p-3">
          <Searchbar />
        </div>
      </div>
      <div className={styles.card3}>
        <Card className={` ${styles.b1shdw} brnone p-0 `}>
          <Card.Body className="">
            <div
              className={`${styles.font} theme12 font-weight-500 ps-2 mb-3 ${styles.f18}`}
            >
              All Doctors
            </div>
            <div className={`ps-2 theme14 ${styles.f21}`}>{AllDoctorCount}</div>
          </Card.Body>
        </Card>

        <Card className={` ${styles.b1shdw} brnone p-0 `}>
          <Card.Body className="">
            <div
              className={`${styles.font} theme12 font-weight-500 ps-2 mb-3 ${styles.f18}`}
            >
              Total Patients
            </div>
            <div className={`ps-2 theme14 ${styles.f21}`}>{TotalPatientCount}</div>
          </Card.Body>
        </Card>

        <Card className={` ${styles.b1shdw} brnone p-0 `}>
          <Card.Body className="">
            <div
              className={`${styles.font} theme12 font-weight-500 ps-2 mb-3 ${styles.f18}`}
            >
              Bed Occupancy rate
            </div>
            <div className={`ps-2 theme14 ${styles.f21} ${styles.clr}`}>
              {TotalBedAccupacyCount}%
            </div>
          </Card.Body>
        </Card>

        <Card className={` ${styles.b1shdw} brnone p-0 `}>
          <Card.Body className="">
            <div
              className={`${styles.font} theme12 font-weight-500 ps-2 mb-3 ${styles.f18}`}
            >
              Average length of stay
            </div>
            <div className={`ps-2 theme14 ${styles.f21}`}>
              {TotalAverageLengthOfStayCount} <sub>days</sub>
            </div>
          </Card.Body>
        </Card>

        <Card className={` ${styles.b1shdw} brnone p-0 `}>
          <Card.Body className="">
            <div
              className={`${styles.font} theme12 font-weight-500 ps-2 mb-3 ${styles.f18}`}
            >
              Emergency Dept
            </div>
            <div className={`ps-2 theme14 ${styles.f21}`}>
              {EmergencyDoctorCount} <sub>patients</sub>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Row className="mt-3">
        <Col md={6} className="mb-md-0 mb-2">
          <Card>
            <Card.Body>
              <div id="chart2" className={`mb-3 ${styles.f17} font`}>
                Patients Count by Daily
              </div>
              <HighchartsReact
                highcharts={Highcharts}
                options={options4}
                style={{ height: "300px" }}
              />
              <Col md={12} className="text-center">
                <div className="d-flex justify-content-center">
                  <div className="d-flex align-items-center ps-3 pb-3">
                    <div className={styles.box5}></div>
                    <div className="f12 ps-2">IPD</div>
                  </div>
                  <div className="d-flex align-items-center ps-3 pb-3">
                    <div className={styles.box6}></div>
                    <div className="f12 ps-2">OPD</div>
                  </div>
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <div id="chart2" className={`mb-3 ${styles.f17} font`}>
                Patients Count by Specialisation
              </div>
              <HighchartsReact
                highcharts={Highcharts}
                options={options5}
                style={{ height: "300px" }}
              />
              <Col md={12} className="text-center">
                <div className="d-flex justify-content-center">
                  <div className="d-flex align-items-center ps-3 pb-3">
                    <div className={styles.box7}></div>
                    <div className="f12 ps-2">IPD</div>
                  </div>
                  <div className="d-flex align-items-center ps-3 pb-3">
                    <div className={styles.box8}></div>
                    <div className="f12 ps-2">OPD</div>
                  </div>
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={12} lg={12} xl={6} className="mb-3">
          <Card>
            <div className="f15 pt-3 ps-3 pb-3 font">Bed Management</div>
            <div className="ps-3 pe-3">
              <Card.Header className={styles.bg1}>
                <Row>
                  <Col md={6} xl={5}>
                    <div>Available beds</div>
                    <div className="font-weight-600">{AvailableBeds}</div>
                  </Col>
                  <Col md={6} xl={7}>
                    <div>Available acute care beds</div>
                    <div className="font-weight-600">{AvailableAcuteCareBed}</div>
                  </Col>
                </Row>
              </Card.Header>
            </div>
            <Card.Body>
              <Table
                columns={columns}
                rowSelection={null}
                dataSource={data22}
                scroll={{ x: true }}
                pagination={false}
                footer={renderFooter}
              />
            </Card.Body>
          </Card>
        </Col>
        {/* <Col md={12} lg={12} xl={6} className="mb-3">
          <Card>
            <div className="f15 pt-3 ps-3 pb-3 font">Staff Management</div>
            <div className="ps-3 pe-3">
              <Card.Header className={styles.bg1}>
                <Row>
                  <Col md={6} xl={6}>
                    <div>Dr Assigned</div>
                    <div className="font-weight-600">{DoctorsAssigned}</div>
                  </Col>
                  <Col md={6} xl={6}>
                    <div>Nurse Assigned</div>
                    <div className="font-weight-600">{NurseAssigned}</div>
                  </Col>
                </Row>
              </Card.Header>
            </div>
            <Card.Body>
              <Table
                columns={columns}
                rowSelection={null}
                scroll={{ x: true }}
                dataSource={data22}
                pagination={false}
                footer={renderFooter1}
              />
            </Card.Body>
          </Card>
        </Col> */}

      </Row>
    </React.Fragment>
  );
};

export default Dashboard;
