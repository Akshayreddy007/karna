import React, { useState } from "react";
import { Row, Col, Form, Card, ProgressBar } from "react-bootstrap";
import styles from "../../../styles/IPD_Admin/Dashboard.module.scss";
import Searchbar from "./Searchbar";
import Highcharts from "highcharts";
import Logo2 from "/public/images/norecords.png";
import HighchartsReact from "highcharts-react-official";
import { Space, Switch, Table } from "antd";

const CustomTableFooter = () => {
  return (
    <table>
    <tfoot >
      <tr>
        <td className="font-weight-600 ant-table-cell ">
          Total
        </td>
        <td className="font-weight-600 ant-table-cell ">
          505
        </td>
        <td className="font-weight-600 ant-table-cell ">
          505
        </td>
        <td className="font-weight-600 ant-table-cell ps-0  pe-0">
          77%
        </td>
      </tr>
    
    </tfoot>
    </table>
  );
};
const CustomTableFooter1 = () => {
  return (
    <table>
    <tfoot >
      <tr>
        <td className="font-weight-600 ant-table-cell " style={{width:"32%"}}>
          Total
        </td>
        <td className="font-weight-600 ant-table-cell " style={{width:"20%"}}>
          1680
        </td>
        <td className="font-weight-600 ant-table-cell ">
          856
        </td>
        <td className="font-weight-600 ant-table-cell "></td>
        <td className="font-weight-600 ant-table-cell "></td>
        
      </tr>
    
    </tfoot>
    </table>
  );
};

const Dashboard = () => {
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

  const data = [
    {
      key: 1,
      AcuityType: "Non-Acute Care",
      Totalbeds: 60,
      Availablebeds: 50,
      Occupancy: "50%",
      children: [
        {
          key: 11,
          AcuityType: "CCU",
          Totalbeds: 42,
          Availablebeds: 50,
          Occupancy: "80%",
        },
        {
          key: 12,
          AcuityType: "GENSURG",
          Totalbeds: 30,
          Availablebeds: 50,
          Occupancy: "80%",
          children: [
            {
              key: 121,
              AcuityType: "NF",
              Totalbeds: 16,
              Availablebeds: 70,
              Occupancy: "80%",
            },
          ],
        },
      ],
    },
    {
      key: 2,
      AcuityType: "Acute Care",
      Totalbeds: 32,
      Availablebeds: 10,
      Occupancy: "80%",
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
  const options4 = {
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: ["12/03", "12/03", "12/03", "12/03"],
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
        data: [10, 15, 14, 17],
      },
      {
        name: "OPD",
        data: [18, 15, 10, 12],
      },
    ],
  };
  const options5 = {
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: [
        "Cardio",
        "Neuro",
        "Ortho",
        "General",
        "Gyne",
        "Pedia",
        "Dermo",
      ],
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
        data: [10, 15, 14, 17, 19, 20, 15],
      },
      {
        name: "OPD",
        data: [18, 15, 10, 12, 15, 18, 14],
      },
    ],
  };
  const renderFooter = () => <CustomTableFooter />;
  const renderFooter1 = () => <CustomTableFooter1 />;
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
            <div className={`ps-2 theme14 ${styles.f21}`}>43</div>
          </Card.Body>
        </Card>

        <Card className={` ${styles.b1shdw} brnone p-0 `}>
          <Card.Body className="">
            <div
              className={`${styles.font} theme12 font-weight-500 ps-2 mb-3 ${styles.f18}`}
            >
              Total Patients
            </div>
            <div className={`ps-2 theme14 ${styles.f21}`}>221</div>
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
              87.34%
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
              5 <sub>days</sub>
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
              5 <sub>patients</sub>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Row className="mt-3">
        <Col md={6}>
          <Card>
            <Card.Body>
              <div id="chart2" className={`mb-3 ${styles.f17}`}>
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
              <div id="chart2" className={`mb-3 ${styles.f17}`}>
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
            <div className="f15 pt-3 ps-3 pb-3">Bed Management</div>
            <div className="ps-3 pe-3">
              <Card.Header className={styles.bg1}>
                <Row>
                  <Col md={6} xl={5}>
                    <div>Available beds</div>
                    <div className="font-weight-600">404</div>
                  </Col>
                  <Col md={6} xl={7}>
                    <div>Available acute care beds</div>
                    <div className="font-weight-600">101</div>
                  </Col>
                </Row>
              </Card.Header>
            </div>
            <Card.Body>
              <Table
                columns={columns}
                rowSelection={null}
                dataSource={data}
                scroll={{ x: true }}
                footer={renderFooter}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12} xl={6} className="mb-3">
          <Card>
            <div className="f15 pt-3 ps-3 pb-3">Staff Management</div>
            <div className="ps-3 pe-3">
              <Card.Header className={styles.bg1}>
                <Row>
                  <Col md={6} xl={6}>
                    <div>Dr Assigned</div>
                    <div className="font-weight-600">404</div>
                  </Col>
                  <Col md={6} xl={6}>
                    <div>Nurse Assigned</div>
                    <div className="font-weight-600">101</div>
                  </Col>
                </Row>
              </Card.Header>
            </div>
            <Card.Body>
              <Table
                columns={columns}
                rowSelection={null}
                scroll={{ x: true }}
                dataSource={data}
                footer={renderFooter1}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12} xl={6} className="mb-3">
          <Card>
            <div className="f15 pt-3 ps-3 pb-3">Bed Management</div>
            <div className="ps-3 pe-3">
              <Card.Header className={styles.bg1}>
                <Row>
                  <Col md={12}>
                    <div>Projected beds available in 2 days</div>
                    <div className="font-weight-600">404</div>
                  </Col>
                </Row>
              </Card.Header>
            </div>
            <Card.Body>
              <Table
                columns={columns}
                rowSelection={null}
                scroll={{ x: true }}
                dataSource={data}
                footer={renderFooter}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Dashboard;
