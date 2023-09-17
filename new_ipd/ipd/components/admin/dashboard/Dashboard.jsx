import React from "react";
import { Row, Col, Form, Card, ProgressBar } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styles from "../../../styles/Dashboard.module.scss";
import Searchbar from "./Searchbar";
const Dashboard = () => {
  const options = {
    chart: {
      type: 'pie',
      renderTo: 'atmospheric-composition'
    },
      credits: {
          enabled: false // Disable the highcharts.com label
        },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: '₹40,000',
      color: "#898989",
      style: {
        fontSize: '18px',
        color: "#898989",
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false, // Disable data labels to hide the lines
        },
        innerSize: '65%'
      }
    },
    legend: {
      itemStyle: {
        width: '100px', // Adjust the width of legend items (rectangle boxes)
      },
      symbolWidth: 12, // Adjust the width of the legend symbols (rectangle boxes)
    },
    series: [{
      name: 'Admin',
      data: [
        {
          name: 'OPD',
          y: 35,
          color: '#B7B7E3'
        },
        {
          name: 'IPD',
          y: 15,
          color: '#3C3C7E'
        },

        {
          name: 'Lab',
          y: 20,
          color: '#9597E8'
        },
        {
          name: 'Pharmacy',
          y: 10,
          color: '#5A5CDB'
        },
      ]
    }]
  };
  const options1 = {
    chart: {
      type: 'pie',
      renderTo: 'atmospheric-composition'
    },
      credits: {
          enabled: false // Disable the highcharts.com label
        },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: '₹40,000',
      color: "#898989",
      style: {
        fontSize: '18px',
        color: "#898989",
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false, // Disable data labels to hide the lines
        },
        innerSize: '65%'
      }
    },
    legend: {
      itemStyle: {
        width: '100px', // Adjust the width of legend items (rectangle boxes)
      },
      symbolWidth: 12, // Adjust the width of the legend symbols (rectangle boxes)
    },
    series: [{
      name: 'Admin',
      data: [
        {
          name: 'OPD',
          y: 30,
          color: '#A5A5DC'
        },

        {
          name: 'Lab',
          y: 20,
          color: ' #3C3C7E'
        },
        {
          name: 'Pharmacy',
          y: 25,
          color: '#8788E1'
        },
      ]
    }]
  };
  const options2 = {
    chart: {
      type: 'pie',
      renderTo: 'atmospheric-composition'
    },
      credits: {
          enabled: false // Disable the highcharts.com label
        },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: '₹40,000',
      color: "#898989",
      style: {
        fontSize: '18px',
        color: "#898989",
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false, // Disable data labels to hide the lines
        },
        innerSize: '65%'
      }
    },
    legend: {
      itemStyle: {
        width: '100px', // Adjust the width of legend items (rectangle boxes)
      },
      symbolWidth: 12, // Adjust the width of the legend symbols (rectangle boxes)
    },
    series: [{
      name: 'Admin',
      data: [
        {
          name: 'OPD',
          y: 30,
          color: '#B7B7E3'
        },

        {
          name: 'Lab',
          y: 20,
          color: ' #636398'
        },
        {
          name: 'Pharmacy',
          y: 25,
          color: '#7B7DE2'
        },
        {
          name: 'Admin',
          y: 10,
          color: '#5A5CDB'
        },
      ]
    }]
  };
  const options3 = {
    chart: {
      type: 'column',
    },
    title: {
      text: '',
    },
      credits: {
          enabled: false // Disable the highcharts.com label
        },
    xAxis: {
      labels: {
        style: {
          color: '#898989', // Set the desired color for x-axis labels
          fontSize: '11px',
        },
      },
      categories: ['OPD', 'IPD', 'LAB', 'PHARMACY'],
    },
    yAxis: {
      title: {
        text: '',
      },
      labels: {
        enabled: true, // Ensure that the y-axis labels are enabled
      },
    },
    plotOptions: {

      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: false, // Disable data labels to hide the lines
        },
      },
    },
    legend: {
      enabled: false, // Hide the legend
    },
    colors: ['#F0F0F0', '#A9A9F3'], // Specify colors for each series
    series: [
      {
        name: 'Series 1',
        data: [45, 50, 55, 55],
      },
      {
        name: 'Series 2',
        data: [23, 28, 22, 25],
      }
    ],
  };
  // const options4 = {
  //   chart: {
  //     type: 'column'
  //   },

  //   title: {
  //     text: '',
  //   },
  // credits: {
  //         enabled: false // Disable the highcharts.com label
  //       },
  //   xAxis: {
  //     labels: {
  //       style: {
  //         color: '#898989', // Set the desired color for x-axis labels
  //         fontSize: '15px',
  //       },
  //     },
  //     categories: ['0-18Yrs', '18-45Yrs', '45-60Yrs', '60+Yrs']
  //   },

  //   yAxis: {
  //     allowDecimals: false,
  //     min: 0,
  //     title: {
  //       text: ''
  //     }
  //   },

  //   plotOptions: {
  //     column: {
  //       stacking: 'normal'
  //     }
  //   },
  //   legend: {
  //     enabled: false, // Hide the legend
  //   },
  //   colors: ['#F0F0F0', '#A9A9F3', '#F0F0F0', '#E371BE'], // Specify colors for each series
  //   series: [{
  //     name: 'Norway',
  //     data: [148, 133, 124, 75],
  //     stack: 'Europe'
  //   }, {
  //     name: 'Germany',
  //     data: [102, 98, 65, 85],
  //     stack: 'Europe'
  //   }, {
  //     name: 'United States',
  //     data: [113, 122, 95, 85],
  //     stack: 'North America'
  //   }, {
  //     name: 'Canada',
  //     data: [77, 72, 80, 95],
  //     stack: 'North America'
  //   }]
  // }
  const options4 = {
  chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['0-18Yrs', '18-45Yrs', '45-60Yrs', '60+Yrs']
    },
    credits: {
        enabled: false
    },
    legend: {
      enabled: false
  },
    plotOptions: {
        column: {
            borderRadius: '2%'
        }
    },
    colors: ['#A9A9F3', '#E371BE'], 
    series: [{
        name: 'Male',
        data: [5, 3, 4, 7]
    }, {
        name: 'Female',
        data: [8, 5, 10, 2]
    }]
  }
  const options5 = {
    chart: {
      type: 'line',
    },
    title: {
      text: '',
    },
      credits: {
          enabled: false // Disable the highcharts.com label
        },
    plotOptions: {
      series: {
        lineColor: '#000000', // Set the line color
        color: '#0030CC', // Set the dot color
        marker: {
          fillColor: '#0030CC', // Set the dot color
        },
      },
    },
    legend: {
      enabled: false, // Hide the legend
    },
    xAxis: {
      labels: {
        style: {
          color: '#898989', // Set the desired color for x-axis labels
          fontSize: '15px',
        },
      },
      categories: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'], // Set the desired categories for the x-axis
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    series: [
      {
        name: 'Series 1',
        data: [5, 10, 15, 58, 45, 35, 20],
      },
    ],
  };
  const options6 = {
    chart: {
      type: 'area',
    },
    title: {
      text: '',
    },
    xAxis: {
      labels: {
        style: {
          color: '#898989', // Set the desired color for x-axis labels
          fontSize: '15px',
        },
      },
      categories: ['Roger', 'Kianna', 'Chance', 'Jaylon', 'Leo', 'Hanna', 'Kierra', 'Mira'],
    },
    yAxis: {
      title: {
        text: '',
      },
    },
      credits: {
          enabled: false // Disable the highcharts.com label
        },
    legend: {
      enabled: false, // Hide the legend
    },

    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, 'rgba(117, 117, 204, 1)'], // Start color
            [1, 'rgba(255, 255, 255, 1)'] // End color (transparent)
          ]
        },
        marker: {
          enabled: false
        }
      },
      series: {
      
        color: '#8788E1', // Set the dot color
        marker: {
         enabled:false,
        },
      },
    },
    series: [
      {
        name: 'Series 1',
        data: [60, 38, 80, 70, 38, 80, 38, 80],
      },
    ],
  };
  const options7 = {
    chart: {
      type: 'column',
    },
    title: {
      text: '',
    },
      credits: {
          enabled: false // Disable the highcharts.com label
        },
    xAxis: {
      labels: {
        style: {
          color: '#898989', // Set the desired color for x-axis labels
          fontSize: '10px',
        },
      },
      categories: ['New', 'Recurring', 'Referred'],
    },
    yAxis: {
      title: {
        text: '',
      },
      labels: {
        enabled: true, // Ensure that the y-axis labels are enabled
      },
    },
    plotOptions: {

      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: false, // Disable data labels to hide the lines
        },
      },
    },
    legend: {
      enabled: false, // Hide the legend
    },
    colors: ['#F0F0F0', '#3C3C7E'], // Specify colors for each series
    series: [
      {
        name: 'Series 1',
        data: [45, 50, 55],
      },
      {
        name: 'Series 2',
        data: [35, 38, 32],
      }
    ],
  };
  const options8 = {
    chart: {
      type: 'column',
    },
    title: {
      text: '',
    },
      credits: {
          enabled: false // Disable the highcharts.com label
        },
    xAxis: {
      labels: {
        style: {
          color: '#898989', // Set the desired color for x-axis labels
          fontSize: '10px',
        },
      },
      categories: ['CheckIn', 'ReScheduled', 'Cancelled'],
    },
    yAxis: {
      title: {
        text: '',
      },
      labels: {
        enabled: true, // Ensure that the y-axis labels are enabled
      },
    },
    plotOptions: {

      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: false, // Disable data labels to hide the lines
        },
      },
    },
    legend: {
      enabled: false, // Hide the legend
    },
    colors: ['#F0F0F0', '#E797CD'], // Specify colors for each series
    series: [
      {
        name: 'Series 1',
        data: [45, 50, 55],
      },
      {
        name: 'Series 2',
        data: [33, 38, 32],
      }
    ],
  };
  const options9 = {
    chart: {
      type: 'line',
    },
    title: {
      text: '',
    },
      credits: {
          enabled: false // Disable the highcharts.com label
        },
    plotOptions: {
      series: {
        lineColor: '#000000', // Set the line color
        color: '#0030CC', // Set the dot color
        marker: {
          fillColor: '#0030CC', // Set the dot color
        },
      },
    },
    legend: {
      enabled: false, // Hide the legend
    },
    xAxis: {
      labels: {
        style: {
          color: '#898989', // Set the desired color for x-axis labels
          fontSize: '15px',
        },
      },
      categories: ['Roger', 'Kianna', 'Chance', 'Jaylon', 'Leo', 'Hanna', 'Kierra', 'Mira'],// Set the desired categories for the x-axis
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    series: [
      {
        name: 'Series 1',
        data: [5, 10, 15, 58, 45, 35, 20],
      },
    ],
  };
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
            <div className={`${styles.font} theme14 font-weight-600 ps-2`} id="chart1">Today Revenue</div>
            <HighchartsReact highcharts={Highcharts} options={options} style={{ height: "200px" }} />
            <div className="d-flex pt-2">
              <Col md={6}>
                <div className="d-flex align-items-center ps-5 pb-3">
                  <div className={styles.box1}></div><div className="f12 ps-2">OPD</div></div>
              </Col>
              <Col md={6}>
                <div className="d-flex align-items-center pb-3">
                  <div className={styles.box2}></div><div className="f12 ps-2">IPD</div></div>
              </Col>
            </div>
            <div className="d-flex">
              <Col md={6}>
                <div className="d-flex align-items-center ps-5 pb-3">
                  <div className={styles.box3}></div><div className="f12 ps-2">LAB</div></div>
              </Col>
              <Col md={6}>
                <div className="d-flex align-items-center">
                  <div className={styles.box4}></div><div className="f12 ps-2">PHARMACY</div></div>
              </Col>
            </div>
          </Card.Body>
        </Card>

        <Card className={` ${styles.b1shdw} brnone p-0 `}>
          <Card.Body className="">
            <div className={`${styles.font} theme14 font-weight-600 ps-2`} id="chart1">Mode Of Payment</div>
            <HighchartsReact highcharts={Highcharts} options={options1} style={{ height: "200px" }} />
            <div className="d-flex pt-2">
              <Col md={6}>
                <div className="d-flex align-items-center ps-5 pb-3">
                  <div className={styles.box1}></div><div className="f12 ps-2">Cash</div></div>
              </Col>
              <Col md={6}>
                <div className="d-flex align-items-center pb-3">
                  <div className={styles.box2}></div><div className="f12 ps-2">Card</div></div>
              </Col>
            </div>
            <div className="d-flex">
              <Col md={6}>
                <div className="d-flex align-items-center ps-5 pb-3">
                  <div className={styles.box3}></div><div className="f12 ps-2">UPI</div></div>
              </Col>
              <Col md={6}>
              </Col>
            </div>
          </Card.Body>
        </Card>

        <Card className={` ${styles.b1shdw} brnone p-0 `}>
          <Card.Body className="">
            <div className={`${styles.font} theme14 font-weight-600 ps-2`} id="chart1">Billing</div>
            <HighchartsReact highcharts={Highcharts} options={options2} style={{ height: "200px" }} />
            <div className="d-flex pt-2">
              <Col md={6}>
                <div className="d-flex align-items-center ps-5 pb-3">
                  <div className={styles.box1}></div><div className="f12 ps-2">Pending</div></div>
              </Col>
              <Col md={6}>
                <div className="d-flex align-items-center pb-3 ps-2">
                  <div className={styles.box2}></div><div className="f12 ps-2">Collected</div></div>
              </Col>
            </div>
            <div className="d-flex">
              <Col md={6}>
                <div className="d-flex align-items-center ps-5 pb-3">
                  <div className={styles.box3}></div><div className="f12 ps-2">Refund</div></div>
              </Col>
              <Col md={6}>
                <div className="d-flex align-items-center  pb-3 ps-3">
                  <div className={styles.box4}></div><div className="f12 ps-2">Discount</div></div>

              </Col>
            </div>
          </Card.Body>
        </Card>

        <Card className={` ${styles.b1shdw} brnone p-0 `}>
          <Card.Body className="">
            <div className={`${styles.font} theme14 font-weight-600 ps-2 mb-3`} id="chart3">Billing department wise</div>
            <HighchartsReact highcharts={Highcharts} options={options3} style={{ height: "400px" }} />
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex mt-3">
        <Col md={6} className>
          <Card className={` ${styles.b1shdw} brnone p-0 `}>
            <Card.Body className="" >
              <div className="d-flex" id="chart2">
                <Col xl={8} lg={7} md={5}>
                  <div className={`${styles.font} theme14 font-weight-600 ps-2 mb-3`} >Age Range</div>
                </Col>
                <Col xl={4} lg={5} md={7}>
                  <div className="d-flex">
                    <Col md={6}>
                      <div className="d-flex align-items-center ps-3 pb-3">
                        <div className={styles.box5}></div><div className="f12 ps-2">Male</div></div>
                    </Col>
                    <Col md={6}>
                      <div className="d-flex align-items-center ps-3 pb-3">
                        <div className={styles.box6}></div><div className="f12 ps-2">Female</div></div>
                    </Col>
                  </div>
                </Col>

              </div>
              <HighchartsReact highcharts={Highcharts} options={options4} style={{ height: "300px" }} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="ps-3">
          <Card className={` ${styles.b1shdw} brnone p-0 `}>
            <Card.Body className="">
              <div className="d-flex" id="chart2">
                <Col md={8}>
                  <div className={`${styles.font} theme14 font-weight-600 ps-2 mb-3`} >Appointment Trend</div>
                </Col>
                <Col md={4}>
                </Col>

              </div>
              <HighchartsReact highcharts={Highcharts} options={options5} style={{ height: "300px" }} />
            </Card.Body>
          </Card>
        </Col>
      </div>
      <div className="d-flex mt-3">
        <Col md={6} className>
          <Card className={` ${styles.b1shdw} brnone p-0 `}>
            <Card.Body className="">
              <div className="d-flex" id="chart2">
                <Col md={8}>
                  <div className={`${styles.font} theme14 font-weight-600 ps-2 mb-3`} >Top 8 Services</div>
                </Col>
                <Col md={4}>
                </Col>

              </div>
              <HighchartsReact highcharts={Highcharts} options={options6} style={{ height: "400px" }} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="ps-3">
          <Card className={` ${styles.b1shdw} brnone p-0 `}>
            <Card.Body className="">
              <div className="d-flex" id="chart2">
                <Col md={8}>
                  <div className={`${styles.font} theme14 font-weight-600 ps-2 mb-3`} >Doctor wise Revenue</div>
                </Col>
                <Col md={4}>
                </Col>

              </div>
              <HighchartsReact highcharts={Highcharts} options={options9} style={{ height: "400px" }} />
            </Card.Body>
          </Card>
        </Col>
      </div>
      <div className="d-flex mt-3">
        <Col md={6}>
          <div className="d-flex">
            <Col md={6}>
              <Card className={` ${styles.b1shdw} brnone p-0 `}>
                <Card.Body className="">
                  <div className={`${styles.font} theme14 font-weight-600 ps-2 mb-3`} id="chart2">Total Patients</div>
                  <HighchartsReact highcharts={Highcharts} options={options7} style={{ height: "400px" }} />
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="ps-3">
              <Card className={` ${styles.b1shdw} brnone p-0 `}>
                <Card.Body className="">
                  <div className={`${styles.font} theme14 font-weight-600 ps-2 mb-3`} id="chart2">Appointments</div>
                  <HighchartsReact highcharts={Highcharts} options={options8} style={{ height: "400px" }} />
                </Card.Body>
              </Card>
            </Col>
          </div>
        </Col>
        <Col md={6}></Col>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
