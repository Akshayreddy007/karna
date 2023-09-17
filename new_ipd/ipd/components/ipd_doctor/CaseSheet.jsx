import Link from 'next/link'
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Breadcrumb, Card, Row, Nav, Col } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import styles1 from '../../styles/IPD_Doctor/CrossConsultation.module.scss'
import Image from 'next/image'
import Antibiotics from './Antibiotics';
import ParenteralFluid from './ParenteralFluid';
import AdditionalDrug from './AdditionalDrug';

const CaseSheet = () => {
  const products = [
    {
      SNO: <div className='nowwrap1 f15'><div className="theme14">1</div></div>,
      DATE: <div className='nowwrap1 f15'><div className="theme14"> 24 Jan 2023</div><div className='theme12 f14'> 12:34 PM</div></div>,
      NURSE: <div className='nowwrap1 f15'><div className="theme14">Jyothi</div></div>,
      NOTES: <div className='nowwrap1 f15'><div className="theme14">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has
        industry</div></div>,

    },
    {
      SNO: <div className='nowwrap1 f15'><div className="theme14">2</div></div>,
      DATE: <div className='nowwrap1 f15'><div className="theme14"> 24 Jan 2023</div><div className='theme12 f14'>12:34 PM</div></div>,
      NURSE: <div className='nowwrap1 f15'><div className="theme14">Jyothi</div></div>,
      NOTES: <div className='nowwrap1 f15'><div className="theme14">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has
        industry</div></div>,

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
      dataField: "DATE",
      text: (
        <div className='f13'>
          DATE
        </div>
      ),
    },
    {
      dataField: "NURSE",
      text: (
        <div className='f13'>
          NURSE
        </div>
      ),
    },
    {
      dataField: "NOTES",
      text: (<div className='f13'> NOTES  </div>),

    }
  ];

  const products1 = [
    {
      SNO: <div className='nowwrap1 f15'><div className="theme14">1</div></div>,
      DATE_TIME: <div className='nowwrap1 f15'><div className="theme14"> 11th Feb, 23
      </div><div className='theme12 f14'> @4:00pm</div></div>,
      TEMP: <div className='nowwrap1 f15'><div className="theme14">99F</div></div>,
      PULSE: <div className='nowwrap1 f15'><div className="theme14">72</div></div>,
      BP: <div className='nowwrap1 f15'><div className="theme14">120/80</div></div>,
      SPO2: <div className='nowwrap1 f15'><div className="theme14">100</div></div>,
      RESP: <div className='nowwrap1 f15'><div className="theme14">24</div></div>,
      INTERVENTION: <div className='nowwrap1 f15'><div className="theme14">PSV /50/8/8
      </div><div className='theme12 f14'>Nr:Jyothi</div></div>

    },
    {
      SNO: <div className='nowwrap1 f15'><div className="theme14">2</div></div>,
      DATE_TIME: <div className='nowwrap1 f15'><div className="theme14"> 11th Feb, 23
      </div><div className='theme12 f14'> @4:00pm</div></div>,
      TEMP: <div className='nowwrap1 f15'><div className="theme14">99F</div></div>,
      PULSE: <div className='nowwrap1 f15'><div className="theme14">72</div></div>,
      BP: <div className='nowwrap1 f15'><div className="theme14">120/80</div></div>,
      SPO2: <div className='nowwrap1 f15'><div className="theme14">100</div></div>,
      RESP: <div className='nowwrap1 f15'><div className="theme14">24</div></div>,
      INTERVENTION: <div className='nowwrap1 f15'><div className="theme14">PSV /50/8/8
      </div><div className='theme12 f14'>Nr:Jyothi</div></div>

    },
    {
      SNO: <div className='nowwrap1 f15'><div className="theme14">3</div></div>,
      DATE_TIME: <div className='nowwrap1 f15'><div className="theme14"> 11th Feb, 23
      </div><div className='theme12 f14'> @4:00pm</div></div>,
      TEMP: <div className='nowwrap1 f15'><div className="theme14">99F</div></div>,
      PULSE: <div className='nowwrap1 f15'><div className="theme14">72</div></div>,
      BP: <div className='nowwrap1 f15'><div className="theme14">120/80</div></div>,
      SPO2: <div className='nowwrap1 f15'><div className="theme14">100</div></div>,
      RESP: <div className='nowwrap1 f15'><div className="theme14">24</div></div>,
      INTERVENTION: <div className='nowwrap1 f15'><div className="theme14">PSV /50/8/8
      </div><div className='theme12 f14'>Nr:Jyothi</div></div>

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
      dataField: "TEMP",
      text: (
        <div className='f13'>
          TEMP
        </div>
      ),
    },
    {
      dataField: "PULSE",
      text: (<div className='f13'> PULSE  </div>),

    },
    {
      dataField: "BP",
      text: (<div className='f13'> BP  </div>),

    },
    {
      dataField: "SPO2",
      text: (<div className='f13'> SPO2  </div>),

    },
    {
      dataField: "RESP",
      text: (<div className='f13'> RESP  </div>),

    },
    {
      dataField: "INTERVENTION",
      text: (<div className='f13'> INTERVENTION  </div>),

    }
  ];
  return (
    <div>
      <div id="breadcrumb1" className='mt-3'>
        <Breadcrumb>
          <Link href="#" className='me-3'><i className='fal fa-arrow-left theme14'></i></Link>
          <Breadcrumb.Item href="#" className={`${styles1.font} f16`}>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#" className={`${styles1.font} f16`}> Profile</Breadcrumb.Item>
          <Breadcrumb.Item active className={`${styles1.font} f16`}>Nurse Note </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div id="tabs1">
        <Tabs>
          <TabList>
            <Tab>
              <div id="tab1" className='text-center'><span><i className='fal fa-book'></i></span></div><div className={`mt-2 ${styles1.font}`}>Nurse Notes</div></Tab>
            <Tab><div id="tab2" className='text-center'><span><i className='fal fa-waveform-path'></i></span></div><div className={`mt-2 ${styles1.font}`}>Vital Monitoring</div></Tab>
            <Tab><div id="tab3" className='text-center'><span><i className='fal fa-prescription-bottle'></i></span></div><div className={`mt-2 ${styles1.font}`}>Antibiotics</div></Tab>
            <Tab><div id="tab4" className='text-center'><span><i className='fal fa-flask'></i></span></div><div className={`mt-2 ${styles1.font}`}> Parenteral Fluid</div></Tab>
            <Tab><div id="tab5" className='text-center'><span><i className='fal fa-prescription'></i></span></div><div className={`mt-2 ${styles1.font}`}>Addnl Drug Prestn</div></Tab>
          </TabList>

          <TabPanel>
            <Card className={`brnone ${styles1.font}`}>
              <Card.Body className="pt-1">
                <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} bordered={false} pagination={paginationFactory()} />
              </Card.Body>
            </Card>
          </TabPanel>
          <TabPanel>
            <Card className={`brnone ${styles1.font}`}>
              <Card.Body className="pt-1">
                <BootstrapTable bootstrap4 keyField='id' data={products1} columns={columns1} bordered={false} pagination={paginationFactory()} />
              </Card.Body>
            </Card>
          </TabPanel>
          <TabPanel>
            <Card className={`brnone ${styles1.font}`}>
              <Card.Body>
                <Antibiotics />
              </Card.Body>
            </Card>
          </TabPanel>
          <TabPanel>
            <Card className={`brnone ${styles1.font}`}>
              <ParenteralFluid />
            </Card>
          </TabPanel>
          <TabPanel>
            <Card className={`brnone ${styles1.font}`}>
              <Card.Body>
                <AdditionalDrug />
              </Card.Body>
            </Card>
          </TabPanel>

        </Tabs>
      </div>
    </div>
  )
}

export default CaseSheet