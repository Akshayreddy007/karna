import React from 'react'
import { Row,Col,Form,Tab,Button,Card,Tabs,Container } from 'react-bootstrap'
import styles from '../../styles/Dashboard.module.scss';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import products from '../userdata3';
import Searchbar from '../Searchbar';
const Doctors = () => {

    const columns = [
        {
        dataField: 'SNO',
        text: 'SNO'
      },
        {
        dataField: 'DOCTORNAME',
        text: 'DOCTORNAME'
      }, {
        dataField: 'SPECIALISATION',
        text: 'SPECIALISATION'
      }, 
      {
        dataField: 'MOBILENO',
        text: 'MOBILENO'
      },
      {
        dataField: 'MARGINPERCENTAGE',
        text: 'MARGINPERCENTAGE'
      },
      {
        dataField: 'TOTALREFERRALS',
        text: 'TOTALREFERRALS'
      },
      {
        dataField: 'TOTALBILLEDAMOUNT',
        text: 'TOTALBILLEDAMOUNT'
      },
      {
        dataField: 'COMMISSION',
        text: 'COMMISSION'
      },
    
      {
        dataField: 'ACTION',
        text: 'ACTION'
      }];

  return (
    <React.Fragment>
    <Container>
    <div className="bg-white mt-3 br8 mb-3">
    <Row className='p-3'>
    <Col md={12} xl={12} lg={12} sm={12}>
    <div className='d-md-flex'>
    <Searchbar/>
    <Form.Select aria-label="Default select example" className={styles.textboxwdth} >
    <option>All Clinics</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Form.Select>
  <Form.Group  controlId="formBasicEmail">
  <Form.Control type="text" placeholder="Search" className={styles.textboxwdth} />
   </Form.Group>
    </div>
    </Col>
    </Row>
    </div>
    <Tabs
defaultActiveKey="profile"
id="uncontrolled-tab-example"
className=""
>
<Tab eventKey="doctors" title="Doctors">
 <Card className={styles.bordernone}>
 <Card.Body>
 <BootstrapTable bootstrap4 keyField='id' data={products} columns={ columns } bordered={ false } pagination={ paginationFactory() } />
 </Card.Body>
 </Card>
</Tab>
<Tab eventKey="department" title="Department">
<Card className={styles.bordernone}>
<Card.Body>
<BootstrapTable bootstrap4 keyField='id' data={products} columns={ columns } bordered={ false } pagination={ paginationFactory() } />
</Card.Body>
</Card>
</Tab>
</Tabs>
</Container>
    </React.Fragment>
  )
}

export default Doctors