import React, { useState } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import styles from "../../../styles/IPD_Admin/Nurse.module.scss";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import AddFloor from "./AddFloor";
import { useQuery } from "@apollo/client";
import { GET_FLOORS, GET_BLOCKS } from "../../../graphql/queries";
import { useRecoilState } from "recoil";
import { getfloor } from "../../../shared/ipdadmin/getfloor";

const Floor = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useRecoilState(getfloor)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data, loading, error, refetch } = useQuery(GET_FLOORS, {
    variables: {
      blockId: parseInt(form.block)
    },
    fetchPolicy: "network-only"
  })

  const { data: data1, loading: loading1, error: error1, refetch: refetch1 } = useQuery(GET_BLOCKS, {
    fetchPolicy: "cache-and-network"
  })

  // get floor data
  let GetFloors = [];
  if (data && data.getFloors) {
    GetFloors = data.getFloors
  }


  // get Block Data
  let GetBlocks = [];
  if (data1 && data1.getBlocks) {
    GetBlocks = data1.getBlocks
  }

  const columns = [
    {
      dataField: "ID",
      text: "ID",
    },
    {
      dataField: "FLOORNO",
      text: "FLOOR NO",
    },
    {
      dataField: "FLOORNAME",
      text: " FLOOR NAME",
    },
    {
      dataField: "BLOCKNumber",
      text: "BLOCK NO",
    },
    {
      dataField: "BLOCK",
      text: "BLOCK",
    },
    {
      dataField: "ACTION",
      text: "ACTION",
    },
  ];

  const products1 = GetFloors.map((each, index) => {
    let BlockName = "NA";
    let BlockNumber = 'NA';
    if (each.BlockData) {
      if (each.BlockData.length > 0) {
        if (each.BlockData[0].block_name) {
          BlockName = each.BlockData[0].block_name
        }
        if (each.BlockData[0].block_number) {
          BlockNumber = each.BlockData[0].block_number
        }
      }
    }
    return {
      ID: <div className="nowwrap" key={index}>{each.id}</div>,
      FLOORNO: <div className="nowwrap">{each.floor_number}</div>,
      FLOORNAME: <div className="nowwrap">{each.floor_name}</div>,
      BLOCKNumber: <div className="nowwrap">{BlockNumber}</div>,
      BLOCK: <div className="nowwrap">{BlockName}</div>,
      // BEDSCOUNT: <div className="nowwrap">24</div>,
      // STATUS: <div className={`nowwrap ${styles.active}`}>Active</div>,
      ACTION: (
        <div className="nowwrap d-flex">
          <i className="fal fa-eye me-3  f14"></i>
          <i className="fal fa-edit me-3  f14"></i>
          <i className="fal fa-trash-alt me-3  f14"></i>
        </div>
      )
    }
  })

  return (
    <div>
      <div className="row">
        <Col md={7} xs={12}>
          <Card className="brnone">
            <div className="row pt-3 pb-2">
              <Col md={3} xs={12}>
                <Form.Select
                  aria-label="Default select example"
                  className={styles.textboxwdth44}
                >
                  <option>All Floors</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col md={6} xs={12}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Enter Keyword"
                    className={styles.textboxwdth44}
                    style={{ width: "100%!important" }}
                  />
                </Form.Group>
              </Col>
              <Col md={3} xs={12} className="text-end pe-4">
                <Button className={styles.servicebtn}>Search</Button>
              </Col>
            </div>
          </Card>
        </Col>
        <Col md={5} xs={12} className="text-end mt-3">
          <Button className={styles.servicebtn} onClick={handleShow}>
            Add Floor
          </Button>
        </Col>
      </div>
      <Card className="mt-3 brnone">
        <Card.Body className="pb-0 pt-1" id="services">
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={products1}
            columns={columns}
            bordered={false}
            pagination={paginationFactory()}
          />
        </Card.Body>
      </Card>
      <AddFloor show={show} onHide={handleClose} refetch={refetch} />
    </div>
  );
};

export default Floor;
