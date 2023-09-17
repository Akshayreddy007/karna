import React from 'react'
import { Breadcrumb, Row, Col, Form, Card, Tab, Nav, Table } from "react-bootstrap";
import styles from "../../../styles/Services.module.scss";
import styles1 from "../../../styles/admin/User.module.scss";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import products from "../../usersviewdata";
import products1 from "../../userviewdata1";
import { Bubble, Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
const Users_View = () => {

    const data1 = {
        labels: ["Consultation ", "Surgery", "Dressing ", "Laser treatment", "Followup", "Medicines", "Surgery", "consulting"],
        datasets: [
            {
                label:"",
                data: [10, 20, 30, 30, 40, 35, 40, 30, 20],
                fill: false,
                backgroundColor: "rgba(0, 48, 204, 1)",
                borderColor: "rgba(0, 48, 204, 1)",
                fontFamily: "poppins",
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        }
                    }
                }
            },
        ],

    };

    const chartOptions = {
        scales: {
            x: {
                grid: {
                    display: false, // Hide x-axis grid lines
                },
            },
            y: {
                grid: {
                    display: false, // Hide y-axis grid lines
                },
            },
        },
    };


    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        onPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        }
    });

    const pagination1 = paginationFactory({
        page: 1,
        sizePerPage: 5,
        onPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        }
    });


    const columns = [
        {
            dataField: "SNO",
            text: "SNO",
        },
        {
            dataField: "PATIENTNAME",
            text: "PATIENT NAME",
        },
        {
            dataField: "SERVICETAKEN",
            text: "SERVICE TAKEN",
        },
        {
            dataField: "TOTALBILL",
            text: "TOTAL BILL",
        },
        {
            dataField: "DOCTORS1",
            text: "DOCTORS %",
        },
        {
            dataField: "PAYMENTSTATUS",
            text: "PAYMENT STATUS",
        },
        {
            dataField: "AMOUNTINRS",
            text: "AMOUNT IN RS",
        },
    ];
    const columns1 = [
        {
            dataField: "SNO",
            text: "SNO",
        },
        {
            dataField: "SERVICE",
            text: "SERVICE",
        },
        {
            dataField: "NOOFTIMES",
            text: "NO OF TIMES",
        },
        {
            dataField: "TOTALBILL",
            text: "TOTAL BILL",
        },
        {
            dataField: "DOCTORS1",
            text: "DOCTORS %",
        },
        {
            dataField: "AMOUNTINRS",
            text: "AMOUNT IN RS",
        },
    ];
    return (
        <React.Fragment>
            <div className="mt-3">
                <Breadcrumb>
                    <Breadcrumb.Item href="#" className="theme12">
                        <i className="fa fa-home"></i>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#" className="theme12">
                        Users
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active className="theme14">
                        Tony Daza
                    </Breadcrumb.Item>
                </Breadcrumb>

                <div className="bg-white mt-3 br8 mb-3 px-3 py-3">
                    <Row className={styles.ovrflw}>
                        <Col md={8}>
                            <div className="d-flex">
                                <div>
                                    <Form.Label className="theme12">ID</Form.Label>
                                    <div className="theme14 font-weight-500">01</div>
                                </div>

                                <div className="ms-5">
                                    <Form.Label className="theme12 f14">NAME</Form.Label>
                                    <div className="theme14 font-weight-500 f14">
                                        Tony Daza
                                    </div>
                                </div>
                                <div className="ms-5">
                                    <Form.Label className="theme12 f14">CONTACT NO</Form.Label>
                                    <div className="theme14 font-weight-500 f14">+91 9875425568</div>
                                </div>
                                <div className="ms-5">
                                    <Form.Label className="theme12 f14">PRICE</Form.Label>
                                    <div className="theme14 font-weight-500 f14">400/-</div>
                                </div>
                                <div className="ms-5">
                                    <Form.Label className="theme12 f14">SPECIALIZATION</Form.Label>
                                    <div className="theme14 font-weight-500 f14">Cardio</div>
                                </div>
                                <div className="ms-5">
                                    <Form.Label className="theme12 f14">MARGIN</Form.Label>
                                    <div className="theme14 font-weight-500 f14">5%</div>
                                </div>
                                <div className="ms-5">
                                    <Form.Label className="theme12 f14">PAYMENT STATUS</Form.Label>
                                    <div className="theme14 font-weight-500 f14">Pending</div>
                                </div>
                                <div className="ms-5">
                                    <Form.Label className="theme12 f14"> STATUS</Form.Label>
                                    <div className={`theme14 font-weight-500 f14 ${styles.services_active}`}>Active</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <div className="d-md-flex align-items-center  bg-white rounded px-2">
                        <Col md={9} xl={10} xs={12} className=" p-0 pt-2 pb-2 ">
                            <Nav variant="pills" className="flex-row">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className="f13">
                                        Patients
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className="f13">
                                        Services
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={3} xl={2} xs={12} className='pb-md-0 pb-3 pt-md-0 pt-3'>
                            <Form.Control type="date"></Form.Control>
                        </Col>
                    </div>
                    <Col md={12} className="mt-2">
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div className="p-1">
                                    <Card style={{ border: 'none' }}>
                                        <BootstrapTable
                                            bootstrap4
                                            keyField="id"
                                            data={products}
                                            columns={columns}
                                            bordered={true}
                                            pagination={pagination} />
                                        <Table bordered className="mb-0">
                                            <thead>
                                            </thead>
                                            <tbody>
                                                <tr className={styles.bg1}>
                                                    <td
                                                        className={`${styles1.w25} text-start f18`}
                                                        colSpan={2}
                                                    >
                                                        <div className='f15'>Total Patients :5</div>
                                                    </td>
                                                    <td className={styles1.w16}></td>
                                                    <td className={` ${styles1.w12} f15`}>22,000/-</td>
                                                    <td className={styles1.w15}></td>
                                                    <td colSpan={2}>
                                                        <div className='d-md-flex'>
                                                            <div className='text-start col-md-6 f15'>Grand Total</div>
                                                            <div className='text-end col-md-6 f18'><b>110/-</b></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Card style={{ border: 'none' }}>
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                        <div className="d-flex align-items-center justify-content-end bg-white rounded px-2">
                                            <Col md={12} className=" p-0 pt-2 pb-2 justify-content-end ">
                                                <Nav className="flex-row justify-content-end" id="bg12">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="first" className="f13">
                                                            <i className="fal fa-line-columns"></i>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="second" className="f13">
                                                            <i className="fal fa-table"></i>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Col>
                                        </div>
                                        <Col md={12}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <div className="px-3 pb-3">
                                                        <Card style={{ border: 'none' }}>
                                                            <Bar data={data1} options={chartOptions} />
                                                        </Card>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                    <div className="p-1">
                                                        <Card style={{ border: 'none' }}>
                                                            <BootstrapTable
                                                                bootstrap4
                                                                keyField="id"
                                                                data={products1}
                                                                columns={columns1}
                                                                bordered={true}
                                                                pagination={pagination1}
                                                            />
                                                            <Table bordered className="mb-0">
                                                                <thead>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className={styles.bg1}>
                                                                        <td colSpan={2} className={styles1.w9}></td>
                                                                        <td className={styles1.w15}></td>
                                                                        <td className={`${styles1.w20} f15`}>55</td>
                                                                        <td className={styles1.w16}>22,000/-</td>
                                                                        <td className={styles1.w19}></td>
                                                                        <td>
                                                                            <div className="d-md-flex">
                                                                                <div className='text-start f15 col-md-6 col-12'>Grand Total</div>
                                                                                <div className='text-end  f18 col-md-6 col-12'><b>110/-</b></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </Card>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>

                                    </Tab.Container>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>

                </Tab.Container>


            </div>
        </React.Fragment>
    )
}

export default Users_View