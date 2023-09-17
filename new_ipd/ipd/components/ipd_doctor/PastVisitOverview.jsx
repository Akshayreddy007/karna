import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Breadcrumb, Card, Row, Nav, Col, Form, Image } from 'react-bootstrap';
import Logo2 from '../../public/images/medication.svg';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import styles1 from '../../styles/IPD_Doctor/CrossConsultation.module.scss';
import styles from '../../styles/IPD_Doctor/InitialAssessment.module.scss';
import Link from 'next/link';
const PastVisitOverview = () => {
    const products = [
        {
            SNO: <div className='nowwrap1 f15'><div className="theme14">1</div></div>,
            DATE_TIME: <div className='nowwrap1 f15'><div className="theme14"> 11 Feb 23</div><div className='theme12 f14'> @4:00</div></div>,
            FLUID: <div className='nowwrap1 f15'><div className="theme14">ING Dextomoid</div></div>,
            RATEOFINFUSION: <div className='nowwrap1 f15'><div className="theme14">20ml/Hr</div></div>,
            TOTALFLUID: <div className='nowwrap1 f15'><div className="theme14">50ml</div></div>

        },
        {
            SNO: <div className='nowwrap1 f15'><div className="theme14">2</div></div>,
            DATE_TIME: <div className='nowwrap1 f15'><div className="theme14"> 12 Feb 23</div><div className='theme12 f14'>@5:00</div></div>,
            FLUID: <div className='nowwrap1 f15'><div className="theme14">ING Dextomoid</div></div>,
            RATEOFINFUSION: <div className='nowwrap1 f15'><div className="theme14">20ml/Hr</div></div>,
            TOTALFLUID: <div className='nowwrap1 f15'><div className="theme14">50ml</div></div>
        }

    ];
    const columns = [
        {
            dataField: "SNO",
            text: (
                <div className='f13'>
                    SNO
                </div>
            ),
        },
        {
            dataField: "DATE_TIME",
            text: (
                <div className='f13'>
                    DATE/TIME
                </div>
            ),
        },
        {
            dataField: "FLUID",
            text: (
                <div className='f13'>
                    FLUID
                </div>
            ),
        },
        {
            dataField: "RATEOFINFUSION",
            text: (
                <div className='f13'>
                    RATE OF INFUSION
                </div>
            ),
        },
        {
            dataField: "TOTALFLUID",
            text: (
                <div className='f13'>
                    TOTALFLUID
                </div>
            ),
        }


    ];
    return (
        <div>
            <div className='d-flex'>
                <Col id="breadcrumb1" className='mt-3' md={4}>
                    <Breadcrumb>
                        <Link href="#" className='me-3'><i className='fal fa-arrow-left theme14'></i></Link>
                        <Breadcrumb.Item href="#" className={`${styles1.font} f16`}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#" className={`${styles1.font} f16`}> Profile</Breadcrumb.Item>
                        <Breadcrumb.Item active className={`${styles1.font} f16`}>Past Visit </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Col md={6}>

                </Col>
                <Col md={2}>
                    <div>
                        <Form.Control type="date" name="name" className={styles.h44}></Form.Control>
                    </div>
                </Col>
            </div>
            <div id="tabs1">
                <Tabs>
                    <TabList>
                        <Tab>
                            <div id="tab1" className='text-center'></div><div className={`mt-2 ${styles1.font}`}>Prescription</div></Tab>
                        <Tab><div id="tab2" className='text-center'></div><div className={`mt-2 ${styles1.font}`}>Notes</div></Tab>
                        <Tab><div id="tab3" className='text-center'></div><div className={`mt-2 ${styles1.font}`}>Video Call Recording</div></Tab>
                        <Tab><div id="tab4" className='text-center'></div><div className={`mt-2 ${styles1.font}`}> Assessment Summary</div></Tab>
                    </TabList>

                    <TabPanel>
                        <Card className={`brnone ${styles1.font}`}>
                            <Card.Body className="pt-1">
                                <div><span><Image src={Logo2} alt="" /></span><span className="theme12">Medication</span></div>
                                <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} bordered={false} pagination={paginationFactory()} />
                            </Card.Body>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card className={`brnone ${styles1.font}`}>
                            <Card.Body className="pt-1">
                            </Card.Body>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card className={`brnone ${styles1.font}`}>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card className={`brnone ${styles1.font}`}>

                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card className={`brnone ${styles1.font}`}>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    )
}

export default PastVisitOverview