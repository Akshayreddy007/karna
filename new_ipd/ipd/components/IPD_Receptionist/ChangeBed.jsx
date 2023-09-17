import React, { useEffect, useState } from "react";
import { Modal, Form, Button, Col, Table, Check } from "react-bootstrap";
import styles from "../../styles/IPD_Receptionist/Appointments.module.scss";
import { useQuery, useMutation } from "@apollo/client";
import moment from 'moment';
import {
  GET_BLOCKS,
  GET_FLOORS,
  GET_WARDS,
  GET_BED,
  GET_DEPARTMENTS,
  GET_BED_TYPES,
  // GET_IN_PATIENTS,
  GET_ALL_IPLOCATION,
  GET_ALL_WARDDEPARTMENTS,
} from "../../graphql/queries";
import { TRANSFER_BED } from "../../graphql/mutations";
import SuccessMessage, { showMessage } from '../alertmessages/Alertmessages'

const ChangeBed = (props) => {

  let userData = {};
  let globalUserHip = 0;

  if (typeof window !== "undefined") {
    const storedUserData = localStorage.getItem("user");
    const storedGlobalUserHip = localStorage.getItem("userHip");

    if (storedUserData) {
      try {
        userData = JSON.parse(storedUserData);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }

    if (storedGlobalUserHip) {
      try {
        globalUserHip = JSON.parse(storedGlobalUserHip);
      } catch (error) {
        console.error("Error parsing global user hip from localStorage:", error);
      }
    }
  }

  // Extract the username from userData if it exists
  let username = "";
  if (userData && userData.username) {
    username = userData.username;
  }


  const [departments, setDepartments] = useState([]);
  const [blockId, setBlockId] = useState("");
  const [floorId, setFloorId] = useState("");
  const [wardId, setWardId] = useState("");
  const [bedId, setBedId] = useState("");
  const [bedtype, setBedtype] = useState("");
  const [departId, setDepartId] = useState("");
  const [blockErr, setBlockErr] = useState("");
  const [floorErr, setFloorErr] = useState("");
  const [wardErr, setWardErr] = useState("");
  const [bedErr, setBedErr] = useState("");
  const [bedTypeErr, setBedTypeErr] = useState("");
  const [departErr, setDepartErr] = useState("");
  const [radioValue, setRadioValue] = useState("Bed");
  const [ipDetails, setIpDetails] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [WDepartData, setWDepartData] = useState([]);
  const [wdepartId, setWdepartId] = useState("");
  const [wdepErr, setWdepErr] = useState("");
  const [subMsg, setSubMsg] = useState("")
  const [price, setPrice] = useState("");
  const [discount,setDiscount]=useState("")
  const [tAmount,setTAmount]=useState("")
  const [disErr,setDisErr]=useState("")
  const [minDiscount, setMinDiscount] = useState(0);

  let isValid = true; // for errors

  let AppointmentId = "";
  if (props.test) {
    if (props.test.ip_appointment_id) {
      AppointmentId = props.test.ip_appointment_id;
    }
  }

  let IpId = "";
  if (props.test) {
    if (props.test.IpRecord && props.test.IpRecord.length > 0) {
      IpId = props.test.IpRecord[0].ip_id;
    }
  }

  const { data: getIpDetails, refetch: refetch1 } = useQuery(GET_ALL_IPLOCATION, {
    variables: {
      ipId: IpId,
      ipAppointmentId: AppointmentId,
    },
    fetchPolicy: "network-only"
  });

  useEffect(() => {
    if (getIpDetails) {
      setIpDetails(getIpDetails.getIpPatientLocation);
    }
  }, [getIpDetails]);


  const { data: getDepartmentsDetails } = useQuery(GET_DEPARTMENTS);
  useEffect(() => {
    if (getDepartmentsDetails && getDepartmentsDetails.getDepartments) {
      setDepartments(getDepartmentsDetails.getDepartments);
    }
  }, [getDepartmentsDetails]);

 

  const [UpdateIPTransfer] = useMutation(TRANSFER_BED, {
    onError: (err) => {
      if (err.message == "Request failed with status code 422") {
        setSubMsg("Got Continous request please try after some time")
      } else {
        setSubMsg(err.message)
      }
    },
    onCompleted: () => {
      refetch1();
      props.refetch();
    }
  });



  //floor data
  const { data: data2 } = useQuery(GET_BLOCKS,{fetchPolicy: "cache-and-network"},);
  
  let BlockData = [];
  if (data2 && data2.getBlocks && data2.getBlocks.length > 0) {
    BlockData = data2.getBlocks;
  }


  //floor data
  const { data: data3 } = useQuery(GET_FLOORS, {
    variables: {
      blockId: parseInt(blockId) || 0,
    },
    fetchPolicy: "cache-and-network",
  });

  let FloorData = [];
  if (data3 && data3.getFloors && data3.getFloors.length > 0 && blockId > 0) {
    FloorData = data3.getFloors;
  }

  //wdepartment
  const { data: getWDepartData } = useQuery(GET_ALL_WARDDEPARTMENTS,{fetchPolicy: "cache-and-network"});
  useEffect(() => {
    if (getWDepartData ) {
      setWDepartData(getWDepartData.getAllDepartments);
    }
  }, [getWDepartData]);
  
  const { data: data4 } = useQuery(GET_WARDS, {
    variables: {
      blockId: parseInt(blockId) || 0,
      floorId: parseInt(floorId) || 0,
      departments: wdepartId || "",
    },
    fetchPolicy: "cache-and-network",
  });
  let WardData = [];
  if (data4 && data4.getWard && data4.getWard.length > 0 && blockId && floorId> 0) {
    WardData = data4.getWard;
  }

  const { data: data5 } = useQuery(GET_BED_TYPES,{fetchPolicy: "cache-and-network"});
   // Bed Types
   let BedTypes = [];
   if (data5 && data5.getAllbedtypes && wardId> 0 && data5.getAllbedtypes.length > 0 && blockId > 0) {
     BedTypes = data5.getAllbedtypes;
   }


  useEffect(() => {
    setWardId("");
    setWdepartId("");
    setBedtype("");
  }, [blockId]);

  const { data: data6,error: error5, } = useQuery(GET_BED, {
    variables: {
      blockId: parseInt(blockId) || 0,
      floorId: parseInt(floorId) || 0,
      wardId: parseInt(wardId) || 0,
      bedtypes: parseInt(bedtype) || 0,
      status:0
    },fetchPolicy: "cache-and-network",
  });

  // Bed Data
  let BedData = [];
  if (data6 && data6.getBed && data6.getBed.length > 0 && wardId > 0 && bedtype > 0) {
    BedData = data6.getBed;
  }

  const handleBlockChange = (e) => {
    setBlockId(e.target.value);
    if (e.target.value) {
      setBlockErr("")
    }
  };

  const handleFloorChange = (e) => {
    setFloorId(e.target.value);
    if (e.target.value) {
      setFloorErr("")
    }
  };

  const handleWardChange = (e) => {
    setWardId(e.target.value);
    if (e.target.value) {
      setWardErr("")
    }
  };

  const handleBedChange = (e) => {
    setBedId(e.target.value);
    if (e.target.value) {
      setBedErr("")
    }
  };

  const handleBedTypeChange = (e) => {
    setBedtype(e.target.value);

    if (e.target.value) {
      setBedTypeErr("");
      // Find the selected bed type and update the price state variable
      const selectedBedType = BedTypes.find((bedType) => bedType.id == e.target.value);
      if (selectedBedType) {
        setPrice(selectedBedType.UnitPrice);
        setMinDiscount(selectedBedType.Min_discount || 0);
      }
    }
  };

  const handleDepartments = (e) => {
    setDepartId(e.target.value);
    if (e.target.value) {
      setDepartErr("")
    }
  };

  const handleWdepart = (e) => {
    setWdepartId(e.target.value);
    if (e.target.value) {
      setWdepErr("")
    }
  };

  
  const handleDiscountChange = (e) => {
    const { value } = e.target;
    let truncatedValue = value.slice(0, 3);
    setDiscount(truncatedValue || 0);
    if (e.target.value <= minDiscount) {
      setDisErr("")
      let amount = price - (price * (parseFloat(e.target.value) / 100));
      setTAmount(amount);   

  }else
    setDisErr(`Discount cannot be more than ${minDiscount}`)
  };
  
 

  

 const onSubmit = async (e) => {
  e.preventDefault();
  let isValid = true;

  if (radioValue === "Bed") {
    if (!blockId) {
      setBlockErr("Please Select Block");
      isValid = false;
    } else {
      setBlockErr("");
    }

    if (!floorId) {
      setFloorErr("Please Select Floor");
      isValid = false;
    } else {
      setFloorErr("");
    }

    if (!wardId) {
      setWardErr("Please Select Ward");
      isValid = false;
    } else {
      setWardErr("");
    }

    if (!bedId) {
      setBedErr("Please Select bed");
      isValid = false;
    } else {
      setBedErr("");
    }

    if (!bedtype) {
      setBedTypeErr("Please Select Bed Type");
      isValid = false;
    } else {
      setBedTypeErr("");
    }

    if (!wdepartId) {
      setWdepErr("please select option");
      isValid = false;
    } else {
      setWdepErr("");
    }

    // if(!discount){
    //   setDisErr("please select option");
    //   isValid = false;
    // }else{
    //   setDisErr("")
    // }
  } else {
    if (!departId) {
      setDepartErr("Please Select Option");
      isValid = false;
    } else {
      setDepartErr("");
    }
  }

  if (isValid) {
    if (radioValue === "Bed") {
      try {
        const { data } = await UpdateIPTransfer({
          variables: {
            bed: parseInt(bedId) || 0,
            ipAppointmentId: AppointmentId || "",
            type: 0,
            department: parseInt(wdepartId) || 0,
            discount: parseInt(discount) || 0
            
          },
        });

        if (data && data.UpdateIPTransfer) {
          setShowSuccessMessage(true)
          showMessage("Successfully Bed Changed", "success");
          setTimeout(() => {
            setSubMsg("");
          }, 2500);
          
        } else {
          setSubMsg("bed already assigned to another patient");
          setTimeout(() => {
            setSubMsg("");
          }, 3000);
        }
        setBlockId("")
        setFloorId("")
        setWdepartId("")
        setWardId("")
        setBedtype("")
        setBedId("")
        setDiscount("")
        setPrice("")
        setTAmount("")
      } catch (error) {
        setSubMsg("An error occurred. Please try again later");
        setTimeout(() => {
          setSubMsg("");
        }, 3000);
      }
    } else {
      setDepartId("");
      setDepartErr("");
      setTimeout(() => {
        setSubMsg("");
      }, 3000);
    }
  }
};


    const onCancel = () => {
      props.onHide();
      setBedErr("");
      setBlockErr("");
      setDepartErr("");
      setBedTypeErr("");
      setWardErr("");
      setFloorErr("");
      setBedId("");
      setBlockId("");
      setFloorId("");
      setWardId("");
      setBedtype("");
      setDepartId("");
      setWdepErr("");
      setWdepartId("");
      setDisErr("")
      setDiscount("")
      setPrice("")
      setTAmount("")
    };
    const modelProps = { ...props, onHide: onCancel };
    return (
      <div>
        <Modal
          {...modelProps}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          id="md3"
        >
          <Modal.Header closeButton className="bdr2">
            <Modal.Title
              id="contained-modal-title-vcenter"
              className={`px-md-3 f15 ${styles.font}`}
            >
              Change Bed
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="px-lg-0">
            <div className="d-md-flex align-items-center">
              <div className="ps-4">
                <Form.Check
                  type="radio"
                  label="Bed"
                  id="rad1"
                  selected
                  className="mr-3"
                  inline
                  checked={radioValue === "Bed"}
                  onChange={() => setRadioValue("Bed")}
                />
                <Form.Check
                  type="radio"
                  label="OT"
                  id="rad2"
                  className="mr-3"
                  inline
                  checked={radioValue === "OT"}
                  onChange={() => setRadioValue("OT")}
                />
              </div>
            </div>
            {radioValue === "Bed" ? (
              <div className="px-lg-4">
                <div className="text-center">
                  {subMsg == "SuccessFully Bed Changed" ? "": <span className="text-danger">{subMsg}</span>}
                  {/* {subMsg ? (
                    <span className={showSuccessMessage ? 'text-success' : 'text-danger'}>
                      {subMsg}
                    </span>
                    ) : null
                  } */}
                  {/* {showSuccessMessage && showSuccessMessage ? <sapn className="text-success">{subMsg}</sapn> : <span className="text-danger">{subMsg}</span>} */}
                  <SuccessMessage />
                </div>
                <div className="d-md-flex align-items-center mt-3">
                  <Col md={3} xl={3} lg={3} className="ps-2">
                    <Form.Label className={`mb-0 ${styles.font}`}>
                      From
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="from"
                      aria-label="Default select example"
                      className={styles.textboxwdth55}
                      placeholder="IP"
                      disabled
                    ></Form.Control>
                  </Col>
                  <Col md={1} xl={1} lg={1} className="ps-1 text-center mt-3">
                    <i className="fal fa-arrow-right"></i>
                  </Col>
                  <Col md={3} xl={4} lg={3} className="ps-0">
                    <Form.Label className={`mb-0 ${styles.font}`}>
                      Block
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className={styles.textboxwdth55}
                      value={blockId}
                      name="block"
                      onChange={handleBlockChange}
                    >
                      <option value="" className="d-none">Select Block</option>
                      {BlockData.map((block) => {
                        return (
                          <option key={block.id} value={block.id}>
                            {block.block_name}
                          </option>
                        );
                      })}
                    </Form.Select>
                    {blockErr && (
                      <Form.Text className="text-danger">{blockErr}</Form.Text>
                    )}
                  </Col>
                  <Col md={4} xl={4} lg={4} className="ps-md-4 ps-0 mt-md-0 mt-3">
                    <Form.Label className={`mb-0 ${styles.font}`}>
                      Floor
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className={styles.textboxwdth55}
                      value={floorId}
                      name="floor"
                      onChange={handleFloorChange}
                    >
                      <option value={""} className="d-none">Select Floor</option>
                      {FloorData.map((floor) => {
                        return (
                          <option key={floor.id} value={floor.id}>
                            {floor.floor_name}
                          </option>
                        );
                      })}
                    </Form.Select>
                    {floorErr && (
                      <Form.Text className="text-danger">{floorErr}</Form.Text>
                    )}
                  </Col>
                </div>
                <div className="d-md-flex align-items-center mt-3">
                  <Col md={3} xl={3} lg={3} className="ps-md- ps-0 ">
                    <Form.Label className={`mb-0 ${styles.font}`}>
                      Department
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className={styles.textboxwdth55}
                      name="wdepartId"
                      value={wdepartId}
                      onChange={handleWdepart}
                    >
                      <option value={""} className="d-none">Select Department </option>
                      {WDepartData.map((item) => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.department}
                          </option>
                        );
                      })}
                    </Form.Select>
                    {wdepErr && (
                      <Form.Text className="text-danger">{wdepErr}</Form.Text>
                    )}
                  </Col>
                  
                  <Col md={1} xl={1} lg={1}></Col>
                  <Col md={3} xl={4} lg={3} className="ps-md-0 ps-0 mt-md-0 mt-3">
                    <Form.Label className={`mb-0 ${styles.font}`}>
                      Ward
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className={styles.textboxwdth55}
                      name="ward"
                      value={wardId}
                      onChange={handleWardChange}
                    >
                      <option value={""} className="d-none">Select Ward</option>
                      {WardData.map((ward) => {
                        return (
                          <option key={ward.id} value={ward.id}>
                            {ward.ward_name}
                          </option>
                        );
                      })}
                    </Form.Select>
                    {wardErr && (
                      <Form.Text className="text-danger">{wardErr}</Form.Text>
                    )}
                  </Col>
                  <Col md={4} xl={4} lg={4} className="ps-md-4 ps-0 mt-md-0 mt-3">
                    <Form.Label className={`mb-0 ${styles.font}`}>
                      BedType
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className={styles.textboxwdth55}
                      value={bedtype}
                      name="bedtype"
                      onChange={handleBedTypeChange}
                    >
                      <option value={""} className="d-none">Select Bed Type</option>
                      {BedTypes.map((bedType) => (
                        <option key={bedType.id} value={bedType.id}>
                          {bedType.Title}
                        </option>
                      ))}
                    </Form.Select>
                    {bedTypeErr && (
                      <Form.Text className="text-danger">{bedTypeErr}</Form.Text>
                    )}
                  </Col>
                </div>
                <div className="d-md-flex align-items-center mt-3">
                  <Col md={3} xl={3} lg={3} className="ps-md- ps-0 ">
                    <Form.Label className={`mb-0 ${styles.font}`} >Bed</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className={styles.textboxwdth55}
                      value={bedId}
                      name="bed"
                      onChange={handleBedChange}
                    >
                      <option value={""} className="d-none">Select Bed</option>
                      {BedData.filter((bed) => bed.status == 0).map((bed) => {
                        return (
                          <option key={bed.id} value={bed.id}>
                            {bed.bed_number}
                          </option>
                        );
                      })}
                    </Form.Select>
                    {bedErr && (
                      <Form.Text className="text-danger">{bedErr}</Form.Text>
                    )}
                  </Col>
                  <Col md={1} xl={1} lg={1}></Col>
                  <Col md={3} xl={4} lg={3} className="ps-md-0 ps-0 mt-md-0 mt-3">
                    <Form.Label className={`mb-0 ${styles.font}`}>
                      Price
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="price"
                      value={price}
                      placeholder={price}
                      disabled
                    />
                  </Col>
                  <Col md={4} xl={4} lg={4} className="ps-md-4 ps-0 mt-md-0 mt-3">
                    <Form.Label className={`mb-0 ${styles.font}`}>
                      Discount
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="discount"
                      value={discount }
                      onChange={handleDiscountChange}
                      placeholder="Enter Discount"
                    />
                     {disErr && (
                      <Form.Text className="text-danger">{disErr}</Form.Text>
                    )}
                  </Col>
                
                </div>
                <div className="d-md-flex align-items-center mt-3">
                  <Col md={3} xl={3} lg={3} className="ps-md- ps-0 ">
                    <Form.Label className={`mb-0 ${styles.font}`}>
                      Amount
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="tamount"
                      value={tAmount || 0}
                      placeholder={tAmount}
                      disabled
                    />
                  </Col>
                  <Col md={9} className="text-end">
                  <div className="d-flex justify-content-end">
                  <Button
              className={` ${styles.bdrnone} bg-white theme13 `}
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button className={styles.submitbtn} onClick={onSubmit}>
              Submit
            </Button>
            </div>
            </Col>
                </div>
                <div id="scroll">
                <div className={styles.minht54}>
                <Table className={`mt-4 mb-5`} responsive>
                  <thead className={styles.bdr}>
                    <tr>
                      <th className={`${styles.wdth60} ${styles.font} ${styles.f60} ps-md-1`}>
                        <b>Sno</b>
                      </th>
                      <th
                        className={`${styles.wdth40} ${styles.font} ${styles.f60}`}
                      >
                        <b>Bed No</b>
                      </th>
                      <th
                        className={`${styles.wdth40} ${styles.font} ${styles.f60} ${styles.breakspaces}`}
                      >
                        <b>Bed Location</b>
                      </th>
                      <th
                        className={`${styles.wdth40} ${styles.font} ${styles.f60} ${styles.breakspaces}`}
                      >
                        <b>Min-Hours</b>
                      </th>
                      <th className={`${styles.wdth40} ${styles.font} ${styles.f60}`}>
                        <b>No Of Days</b>
                      </th>
                      
                      <th className={`${styles.wdth40} ${styles.font} ${styles.f60}`}>
                        <b>Unit Price</b>
                      </th>
                      {/* <th className={`${styles.wdth40} ${styles.font} ${styles.f60}`}>
                        <b>Price</b>
                      </th> */}
                      <th className={`${styles.wdth40} ${styles.font} ${styles.f60}`}>
                        <b>Discount</b>
                      </th>
                      <th className={`${styles.wdth40} ${styles.font} ${styles.f60}`}>
                        <b>GST</b>
                      </th>
                      <th className={`${styles.wdth40} ${styles.font} ${styles.f60}`}>
                        <b>Amount</b>
                      </th>
                      <th className={`${styles.wdth40} ${styles.font} ${styles.f60}`}>
                        <b>From Date</b>
                      </th>
                      <th className={`${styles.wdth40} ${styles.font} ${styles.f60}`}>
                        <b>To Date</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ipDetails && ipDetails.length > 0 ? (
                      ipDetails.map((location, index) => {
                        let lastindex = ipDetails.length - 1 
                        
                        {/* let borderColor = index ? "" :styles.border ;   */}
                        let borderColor  =  index == 0? styles.border  : ""    
                               
                    return (
                          <tr key={location.id}  className={`${borderColor}`} >
                            <td className={styles.txtleft} >{index + 1}</td>
                            {location.bed && location.bed.length > 0 ? (
                              <td className={styles.txtleft}>{location?.bed[0]?.bed_number}</td>
                            ) : (
                              <td></td>
                            )}
                            {location.bed && location.bed.length > 0 ? (
                              <td className={styles.txtleft}>{`${location?.bed[0]?.blockname} - ${location?.bed[0]?.floorname} - ${location?.bed[0]?.department_name} - ${location?.bed[0]?.wardname}`}</td>
                            ) : (
                              <td></td>
                            )} 
                            {location.bed && location.bed.length > 0 ? (
                              <td className={`${styles.txtleft}`}>
                                {location?.bed[0]?.bedtype.Min_hours}
                              </td>
                            ) : (
                              <td></td>
                            )}
                              
                            {location.bed && location.bed.length > 0 ? (
                              <td className={`${styles.txtleft}`}>
                                {location?.bed[0]?.Days}
                              </td>
                            ) : (
                              <td></td>
                            )}
                            {location.bed && location.bed.length > 0 ? (
                              <td className={styles.txtleft}>
                                {location?.bed[0]?.bedtype?.UnitPrice}
                              </td>
                            ) : (
                              <td></td>
                            )}
                            {location.bed && location.bed.length > 0 ? (
                              <td className={styles.txtleft}>
                                {/* <i className="fal fa-rupee-sign"></i>{" "} */}
                                {location.discount}
                              </td>
                            ) : (
                              <td></td>
                            )}
                            {location.bed && location.bed.length > 0 ? (
                              <td className={styles.txtleft}>
                                {location?.bed[0]?.gst}
                              </td>
                            ) : (
                              <td></td>
                            )}
                            {location.bed && location.bed.length > 0 ? (
                              <td className={styles.txtleft}>
                                <i className="fal fa-rupee-sign"></i>{" "}
                                {location?.bed[0]?.Total}
                              </td>
                            ) : (
                              <td></td>
                            )}
                            {location.bed && location.bed.length > 0 ? (
                              <td className={styles.txtleft}>
                                {/* {location.from_date} */}
                                {moment.unix(location.from_date).format("DD/MM/YYYY")}
                              </td>
                            ) : (
                              <td></td>
                            )}
                            {location.bed && location.bed.length > 0 ? (
                              <td className={styles.txtleft}>
                              {/* {location.to_date} */}
                              {moment.unix(location.to_date).format("DD/MM/YYYY")}
                                {/* {lastindex == index ? "Current" : "OFld"} */}
                              </td>
                            ) : (
                              <td></td>
                            )}
                          </tr>
                        )
                      }
                      )) : (
                      <tr>
                        <td colSpan="2">No IP details found</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
                </div>
                </div>
              </div>
            ) : (
              // ----------------------- Ot code starts here ------------------------

              <div className="px-lg-4">
                {/* {showSuccessMessage && showSuccessMessage ? (
                  <div className="text-success text-center">
                    Successfully bed changed
                  </div>
                ) : (
                  ""
                )} */}
                <div className="d-md-flex align-items-center mt-3">
                  <Col md={3} xl={4} lg={3} className="ps-md-0 ps-0 mt-md-0 mt-3">
                    <Form.Label className={`mb-0 ${styles.font}`}>
                      Departments
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className={styles.textboxwdth55}
                      value={departId}
                      name="departments"
                      onChange={handleDepartments}
                    >
                      <option value={""}>Select Department</option>
                      {departments.map((item) => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.department}
                          </option>
                        );
                      })}
                    </Form.Select>
                    {departErr && (
                      <Form.Text className="text-danger">{departErr}</Form.Text>
                    )}
                  </Col>
                  
                </div>
                <div className="d-flex justify-content-end">
                  <Button
              className={` ${styles.bdrnone} bg-white theme13 `}
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button className={styles.submitbtn} onClick={onSubmit}>
              Submit
            </Button>
            </div>
              </div>
            )}
          </Modal.Body>
          {/* <Modal.Footer>
          <Button
              className={` ${styles.bdrnone} bg-white theme13 `}
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button className={styles.submitbtn} onClick={onSubmit}>
              Submit
            </Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    );
  };

  export default ChangeBed;