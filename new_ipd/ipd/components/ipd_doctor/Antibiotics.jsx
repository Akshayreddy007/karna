import React from 'react'
import { Row, Nav, Col, Tab } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
const Antibiotics = () => {

    const products = [
        {
            SNO: <div className='nowwrap1 f15'><div className="theme14">1</div></div>,
            DATE_TIME: <div className='nowwrap1 f15'><div className="theme14"> 11 Feb 23</div><div className='theme12 f14'> @4:00</div></div>,
            MEDICITATION: <div className='nowwrap1 f15'><div className="theme14">Tab Liv 52 ; Tab Rantidin 250MG ;
                Inj. Cefriazone 500MG</div></div>,

        },
        {
            SNO: <div className='nowwrap1 f15'><div className="theme14">2</div></div>,
            DATE_TIME: <div className='nowwrap1 f15'><div className="theme14"> 12 Feb 23</div><div className='theme12 f14'>@5:00</div></div>,
            MEDICITATION: <div className='nowwrap1 f15'><div className="theme14">Tab Liv 52 ; Tab Rantidin 250MG ;
                Inj. Cefriazone 500MG</div></div>,
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
            dataField: "MEDICITATION",
            text: (
                <div className='f13'>
                    MEDICITATION
                </div>
            ),
        }


    ];

    const products1 = [
        {
            SNO: <div className='nowwrap1 f15'><div className="theme14">1</div></div>,
            CATEGORY: <div className='nowwrap1 f15'><div className="theme14">7.2</div></div>,
            NOTES: <div className='nowwrap1 f15'><div className="theme14">
                <ul>
                    <li>Urine cls sentin ER 6/2/23 . e-coli</li>
                    <li> 2D Echo clone in ER 6/2/23</li>
                    <div>   Blood cls 6/2/23 M/Cor (No growth) 24hrs (no growth)</div>
                </ul>
            </div></div>,

        },
        {
            SNO: <div className='nowwrap1 f15'><div className="theme14">2</div></div>,
            CATEGORY: <div className='nowwrap1 f15'><div className="theme14">8.2</div></div>,
            NOTES: <div className='nowwrap1 f15'><div className="theme14">
                <ul>
                    <li>Urine cls sentin ER 6/2/23 . e-coli</li>
                    <li> 2D Echo clone in ER 6/2/23</li>
                    <div>   Blood cls 6/2/23 M/Cor (No growth) 24hrs (no growth)</div>
                </ul>
            </div></div>,
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
            dataField: "CATEGORY",
            text: (
                <div className='f13'>
                    CATEGORY
                </div>
            ),
        },
        {
            dataField: "NOTES",
            text: (
                <div className='f13'>
                    NOTES
                </div>
            ),
        }


    ];
    return (
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={12} className="bdrbtm1 p-0">
                        <Nav variant="pills" className="flex-row">
                            <Nav.Item>
                                <Nav.Link eventKey="first" className="f13">
                                    Drugs
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" className="f13">
                                    Lines
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" className="f13">
                                    Remarks
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
                                <div>Hii1</div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <div>
                                    <BootstrapTable bootstrap4 keyField='id' data={products1} columns={columns1} bordered={false} pagination={paginationFactory()} />
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default Antibiotics