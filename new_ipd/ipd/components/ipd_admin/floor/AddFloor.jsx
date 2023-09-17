import React from "react";
import styles1 from "../../../styles/IPD_Admin/Nurse.module.scss";
import { Form, Row, Col, Button, Modal } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/client";
import { GET_BLOCKS } from "../../../graphql/queries";
import { ADD_FLOOR } from "../../../graphql/mutations";
import { useRecoilState } from "recoil";
import { addfloordata } from "../../../shared/ipdadmin/additems";


const AddFloor = (props) => {
  const [form, setForm] = useRecoilState(addfloordata)

  const { data, loading } = useQuery(GET_BLOCKS, {
    fetchPolicy: "cache-and-network"
  })

  const [AddFloor] = useMutation(ADD_FLOOR, {
    onError: (err) => {
      if (err.message == "Request failed with status code 422") {
        setForm({
          ...form,
          submitError: "Got continuous requests.Please try again",
        });
      }
      else {
        setForm({
          ...form,
          submitError: err.message,
        });
      }
    }, onCompleted: props.refetch
  })

  // get Block Data
  let GetBlocks = [];
  if (data && data.getBlocks) {
    GetBlocks = data.getBlocks
  }

  // handle Change for Block
  const handleInputChangeforBlock = (event) => {
    const { name, value } = event.target
    if (value) {
      setForm({
        ...form, submitError: "",
        [name]: value,
        blockerror: ""
      })
    } else {
      setForm({
        ...form, submitError: "",
        [name]: 0
      })
    }
  }

  // handle Change for Floor Number
  const handleInputChangeforFloorNumber = (event) => {
    const { name, value } = event.target;
    const parseValue = parseInt(value);

    if (!isNaN(parseValue) && parseValue > 0) {
      setForm({
        ...form,
        submitError: "",
        [name]: parseValue,
        floorerror: ""
      });
    } else {
      setForm({
        ...form,
        submitError: "",
        [name]: "",
      });
    }
  };

  // handle Change for Floor Name
  const handleInputChangeforFloorName = (event) => {
    const { name, value } = event.target
    if (value) {
      setForm({
        ...form, submitError: "",
        [name]: value,
        floorNameerror: ""
      })
    } else {
      setForm({
        ...form, submitError: "",
        [name]: ""
      })
    }
  }

  const onSubmitMutation = async () => {
    let isValid = true;
    if (form.block == "" || form.floor == "" || form.floorName == "") {
      isValid = false;
      setForm({
        ...form,
        blockerror: form.block ? "" : "please select block",
        floorerror: form.floor ? "" : "please enter floor number",
        floorNameerror: form.floorName ? "" : "please enter floor name"
      })
    }

    if (isValid) {
      const { data } = await AddFloor({
        variables: {
          blockId: parseInt(form.block),
          floorNumber: parseInt(form.floor),
          floorName: form.floorName
        }
      })
      if (data && data.AddFloor) {
        setForm({
          ...form, block: "", floorName: "", floor: "", submitError: "Floor Added Successfully"
        })
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          submitError: "Something went wrong, please try after sometime",
        }));
      }
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        submitError: "Please fill mandatary fileds",
      }));
    }
  }

  return (
    <React.Fragment>
      <Modal size="lg" id="md1" {...props}>
        <Modal.Header closeButton className={styles1.services_border}>
          <Modal.Title>Add Floor</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5 mx-5 py-5">
          <Form>
            {form.submitError == "Floor Added Successfully" ? <span className="text-success">{form.submitError}</span> : <span className="text-danger">{form.submitError}</span>}
            <Row className=" mt-4 mb-4">
              <Col md={6} className="pe-5 ps-md-4">
                <Form.Group className="mb-4 pb-4">
                  <Form.Label className="mb-0 f14">Block*</Form.Label>
                  <Form.Select className={styles1.services_input} value={form.block} name="block"
                    onChange={handleInputChangeforBlock}
                    onBlur={() => {
                      const isEmpty = !form.block;
                      setForm((prevForm) => ({
                        ...prevForm,
                        blockerror: isEmpty ? "please slect block" : ""
                      }))
                    }}
                  >
                    <option value={0} className="d-none" >Select</option>
                    {GetBlocks.map((each, index) => {
                      return (
                        <option value={each.id} key={index}>{each.block_name}</option>
                      )
                    })}
                  </Form.Select>
                  <Form.Text className="text-danger">{form.blockerror}</Form.Text>
                </Form.Group>
              </Col>
              <Col md={6} className="pe-5">
                <Form.Group className="mb-4 pb-4" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f14">Floor Number*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Number"
                    value={form.floor}
                    name="floor"
                    onChange={handleInputChangeforFloorNumber}
                    className={styles1.services_input}
                    onBlur={() => {
                      const isEmpty = !form.floor;
                      setForm((prevForm) => ({
                        ...prevForm,
                        floorerror: isEmpty ? "please enter floor number" : ""
                      }))
                    }}
                  />
                  <Form.Text className="text-danger">{form.floorerror}</Form.Text>
                </Form.Group>
              </Col>
              <Col md={6} className="pe-5 ps-md-4">
                <Form.Group className="mb-4 pb-4" controlId="formBasicEmail">
                  <Form.Label className="mb-0 f14">Floor Name*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={form.floorName}
                    name="floorName"
                    onChange={handleInputChangeforFloorName}
                    className={styles1.services_input}
                    onBlur={() => {
                      const isEmpty = !form.floorName;
                      setForm((prevForm) => ({
                        ...prevForm,
                        floorNameerror: isEmpty ? "please enter floor Name" : ""
                      }))
                    }}
                  />
                  <Form.Text className="text-danger">{form.floorNameerror}</Form.Text>
                </Form.Group>
              </Col>
              {/* <Col md={6} className="pe-5 ps-md-4">
                <Form.Group className="mb-4 pb-4">
                  <Form.Label className="mb-0 f14">Status</Form.Label>
                  <Form.Select className={styles1.services_input}>
                    <option>Active</option>
                    <option>In Active </option>
                  </Form.Select>
                </Form.Group>
              </Col> */}
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className={`theme9 bg-white ${styles1.border_none} brnone`}>
            Cancel
          </Button>
          <Button variant="primary" className={styles1.servicebtn} onClick={onSubmitMutation}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment >
  );
};

export default AddFloor;
