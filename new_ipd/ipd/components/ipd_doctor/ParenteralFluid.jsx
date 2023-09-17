import React from 'react'
import { Row, Nav, Col, Tab } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
const ParenteralFluid = () => {
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

    const products1 = [
        {
            SNO: <div className='nowwrap1 f15'><div className="theme14">1</div></div>,
            DATE_TIME: <div className='nowwrap1 f15'><div className="theme14">11 FEB 2023</div><div className="theme12 f14">@ 4:00pm</div></div>,
            MEDICATION: <div className='nowwrap1 f15'><div className="theme14">ing PCM
            </div></div>,
            DOSAGE: <div className='nowwrap1 f15'><div className="theme14">100ml
            </div></div>,
            ROUTE: <div className='nowwrap1 f15'><div className="theme14">IV
            </div></div>

        },
        {
            SNO: <div className='nowwrap1 f15'><div className="theme14">1</div></div>,
            DATE_TIME: <div className='nowwrap1 f15'><div className="theme14">11 FEB 2023</div><div className="theme12 f14">@ 4:00pm</div></div>,
            MEDICATION: <div className='nowwrap1 f15'><div className="theme14">ing PCM
            </div></div>,
            DOSAGE: <div className='nowwrap1 f15'><div className="theme14">100ml
            </div></div>,
            ROUTE: <div className='nowwrap1 f15'><div className="theme14">IV
            </div></div>

        }

    ];
    const columns1 = [
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
            dataField: "MEDICATION",
            text: (
                <div className='f13'>
                    MEDICATION
                </div>
            ),
        },
        {
            dataField: "DOSAGE",
            text: (
                <div className='f13'>
                    DOSAGE
                </div>
            ),
        },
        {
            dataField: "ROUTE",
            text: (
                <div className='f13'>
                    ROUTE
                </div>
            ),
        }


    ];

    const products2 = [
        {
            SNO: <div className='nowwrap1 f15'><div className="theme14">1</div></div>,
            DATE_TIME: <div className='nowwrap1 f15'><div className="theme14">11 FEB 2023</div><div className="theme12 f14">@ 4:00pm</div></div>,
            TOTALFLUIDINPUT: <div className='nowwrap1 f15'><div className="theme14">1000ml
            </div></div>,
            TOTALFLUIDOUTPUT: <div className='nowwrap1 f15'><div className="theme14">1000ml
            </div></div>

        },
        {
            SNO: <div className='nowwrap1 f15'><div className="theme14">1</div></div>,
            DATE_TIME: <div className='nowwrap1 f15'><div className="theme14">11 FEB 2023</div><div className="theme12 f14">@ 4:00pm</div></div>,
            TOTALFLUIDINPUT: <div className='nowwrap1 f15'><div className="theme14">1000ml
            </div></div>,
            TOTALFLUIDOUTPUT: <div className='nowwrap1 f15'><div className="theme14">1000ml
            </div></div>

        },

    ];
    const columns2 = [
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
            dataField: "TOTALFLUIDINPUT",
            text: (
                <div className='f13'>
                    TOTAL FLUID INPUT
                </div>
            ),
        },
        {
            dataField: "TOTALFLUIDOUTPUT",
            text: (
                <div className='f13'>
                    TOTALFLUIDOUTPUT
                </div>
            ),
        }


    ];
    return (
        <div className='px-3'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className='px-3'>
                    <Col sm={12} className="bdrbtm1 p-0">
                        <Nav variant="pills" className="flex-row">
                            <Nav.Item>
                                <Nav.Link eventKey="first" className="f13">
                                    Fluid
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" className="f13">
                                    Stats/Once Only Drugs
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" className="f13">
                                    Fluid Monitoring
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={12} className="mt-4">
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div>
                                    <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} bordered={false} pagination={paginationFactory()} />
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div>
                                    <BootstrapTable bootstrap4 keyField='id' data={products1} columns={columns1} bordered={false} pagination={paginationFactory()} />
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <div>
                                    <BootstrapTable bootstrap4 keyField='id' data={products2} columns={columns2} bordered={false} pagination={paginationFactory()} />
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}


export default ParenteralFluid