import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  Modal,
  Form,
  Button,
  Col,
  Table,
  Row,
  ProgressBar,
} from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/IPD_Receptionist/Appointments.module.scss";
import styles3 from "../../styles/IPD_Receptionist/Billing.module.scss";
import styles2 from "../../styles/Appointments.module.scss";
import styles1 from "../../styles/BillingHistory.module.scss";
import Logo1 from "../../public/images/draganddrop.png";
import { FileUpload } from "react-drag-n-drop-image";
import {
  GET_RELATIONS,
  GET_ALL_UPLOADCONSENT_DATA,
} from "../../graphql/queries";
import { UPLOAD_MUTATION, DELETE_CONSENT } from "../../graphql/mutations";
import Axios from "axios";

const UploadConsent = (props) => {
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
        console.error(
          "Error parsing global user hip from localStorage:",
          error
        );
      }
    }
  }

  // Extract the username from userData if it exists
  let username = "";
  if (userData && userData.username) {
    username = userData.username;
  }

  const [relationData, setRelationData] = useState([]);
  const [reason, setReason] = useState("");
  const [relationShip, setRelationShip] = useState("");
  const [image, setImage] = useState([]);
  const [fileErr, setFileErr] = useState("");
  const [reasonErr, setReasonErr] = useState("");
  const [relationErr, setRelationErr] = useState("");
  const [submitData, setSubmitData] = useState([]);
  const [ucData, setucData] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  let uCData = "";
  if (props.test) {
    uCData = props.test;
  }

  let AppointmentId = "";

  if (uCData.ip_appointment_id) {
    AppointmentId = uCData.ip_appointment_id;
  }
  console.log(AppointmentId, "ucp");

  let IpId = "";
  if (uCData.IpRecord && uCData.IpRecord.length > 0) {
    console.log(uCData.IpRecord[0].ip_id);
    IpId = uCData.IpRecord[0].ip_id;
  }
  console.log(IpId, "Uipid");

  let patientId = "";
  if (uCData.IpRecord && uCData.IpRecord.length > 0) {
    console.log(uCData.IpRecord[0].id);
    patientId = uCData.IpRecord[0].id;
  }

  const { data: getRelation } = useQuery(GET_RELATIONS);
  useEffect(() => {
    if (getRelation) {
      console.log(getRelation.getRelations);
      setRelationData(getRelation.getRelations || []);
    }
  }, [getRelation]);

  //uploadConsent data

  const { data: uploadCData, refetch } = useQuery(GET_ALL_UPLOADCONSENT_DATA, {
    variables: {
      ipId: IpId,
      ipAppointmentId: AppointmentId,
    },
    refetchQueries: {
      query: GET_ALL_UPLOADCONSENT_DATA,
      fetchPolicy: "network-only",
    },
  });

  useEffect(() => {
    if (uploadCData) {
      console.log(uploadCData.getAlluplodeconsent, "result");
      setucData(uploadCData.getAlluplodeconsent);
    }
  }, [uploadCData]);
  const [Upload] = useMutation(UPLOAD_MUTATION, {
    onCompleted: refetch,
  });

  const [deleteConsent] = useMutation(DELETE_CONSENT);

  const handleReason = (e) => {
    setReason(e.target.value);
    if (e.target.value) {
      setReasonErr("");
    }
  };

  const handleRelation = (e) => {
    setRelationShip(e.target.value);
    if (e.target.value) {
      setRelationErr("");
    }
  };

  const fileUpload = (file, stream) => {
    const url = `https://up.maa.care/mobile.php?uploadImage=true`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("stream", stream);
    const config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    };
    return Axios.post(url, formData, config);
  };

  const handleFile = (e) => {
    // setImageState(!imgstate)
    const name = e.target.name;

    if (name == "image") {
      let files = e.target.files;
      // let err = "";
      const types = ["image/png", "image/jpeg", "application/pdf", "image/jpg"];
      for (var x = 0; x < files.length; x++) {
        console.log(files[x], "fileSize");
        if (types.every((type) => files[x].type !== type)) {
          // console.log(files[x], "hhh")
          setFileErr("Uploaded file is not a valid format.");
        } else if (types.every((type) => files[x].size > 10e6)) {
          // console.log(files[x].size, "fileSize")
          setFileErr("Please upload a file smaller than 10 MB");
        }
      }

      if (fileErr != "") {
        setImage({
          ...image,
          error: fileErr,
        });
      } else {

        var file = e.target.files[0];
        console.log("file", file);
        const fileread = new FileReader();
        console.log("fileread", fileread);

        if (e.target.value) {
          setFileErr("");
        }

        if (e.target.value != "") {
          setImage({
            ...image,
            image_filename: e.target.value,
            error: "",
          });
        }
        setImage({
          ...image,
          image_filename: e.target.value,
          error: "",
        });
        if (!file) {
          setImage({
            ...image,
            error: "Please Select Image",
          });
        } else {
          fileread?.readAsDataURL(file);
        }
        fileread.onload = async (e) => {
          let fobj = {
            stream: e.target.result,
            filename: file.name,
            mimetype: file.type,
          };
          const upload = await fileUpload(file, fobj.stream);
          try {
            if (upload.data.result == "success") {
              if (e.target.value != "") {
                setImage({
                  ...image,
                  image_filename: file.name,
                  image: upload.data.filename,
                  error: "",
                  selectedImage: URL.createObjectURL(file),
                });
              }

              setImage({
                ...image,
                image_filename: file.name,
                image: upload.data.filename,
                error: "",
              });
            }
          } catch (error) {
            setImage({
              ...image,
              image_filename: file.name,
              image: "",
              error: "File is to large",
            });
          }
        };
      }
    }
  };

  const handleDelete = (id) => {
    deleteConsent({
      variables: {
        deleteConsentId: id,
      },
      refetchQueries: [
        {
          query: GET_ALL_UPLOADCONSENT_DATA,
          fetchPolicy: "network-only",
        },
      ],
    })
      .then((response) => {
        setucData((prevData) => prevData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onCancel = () => {
    props.onHide();
    setReason("");
    setRelationShip("");
    setFileErr("");
    setImage("");
    setReasonErr("");
    setRelationErr("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    if (image.length === 0) {
      setFileErr("No files selected");
      isValid = false;
    } else {
      setFileErr("");
    }

    if (!reason) {
      setReasonErr("Enter Reason");
      isValid = false;
    } else {
      setReasonErr("");
    }

    if (!relationShip) {
      setRelationErr("Select Relation");
      isValid = false;
    } else {
      setRelationErr("");
    }

    if (isValid) {
      try {
        const response = await Upload({
          variables: {
            reason: reason,
            relationships: parseInt(relationShip),
            image: `https://up.maa.care/files1/` + image.image,
            ipId: IpId,
            ipAppointment: AppointmentId,
            // image:image
            // relationships: 0,
          },
          refetchQueries: () => [
            {
              mutation: UPLOAD_MUTATION,
              fetchPolicy: "network-only",
            },
          ],
        });

        console.log("Upload:", response.data.upload);
        setSubmitData(response.data.upload);
        console.log(submitData);
        if (response.data.upload) {
          setImage({
            ...image,
            image: "",
            submitError: "File Uplaod Successfully",
          });
        }
      } catch (error) {
        console.log(error);
      }

      // Reset the form fields and error messages
      setReason("");
      setRelationShip("");
      setImage("");
      setReasonErr("");
      setRelationErr("");
      setFileErr("");
      setIsSubmit(true);
      setTimeout(() => {
        setIsSubmit(false);
      }, 3000);
    }
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
            Upload Consent
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5 mx-lg-5">
          {isSubmit ? (
            <div className="text-success">successfully submit</div>
          ) : (
            ""
          )}
          <div className="d-md-flex align-items-center mt-4">
            <Col md={6} xl={6} lg={6} className="ps-0">
              <Form.Label className={`mb-0 ${styles.font}`}>Reason</Form.Label>
              <Form.Control
                aria-label="Default select example"
                className={styles.textboxwdth55}
                type="text"
                value={reason}
                onChange={handleReason}
                placeholder="Enter Reason"
              />
              {reasonErr && <div className="text-danger">{reasonErr}</div>}
            </Col>
            <Col md={6} xl={6} lg={6} className="ps-md-4 ps-0 mt-md-0 mt-3">
              <Form.Label className={`mb-0 ${styles.font}`}>
                Relationship
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                className={styles.textboxwdth55}
                name="relation"
                value={relationShip}
                onChange={handleRelation}
              >
                <option> Select Relation</option>
                {relationData &&
                  relationData.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.relation}
                    </option>
                  ))}
              </Form.Select>
              {relationErr && <div className="text-danger">{relationErr}</div>}
            </Col>
          </div>

          <Row>
            <Col md={5} className="mt-4">
              <div className={`${styles3.minht33}`}>
                <Row className="p-2 mt-2">
                  <Col md={8} xs={8} className="px-3">
                    <div className="f11 theme12">File Name</div>
                  </Col>
                  <Col md={4} xs={4} className="text-center">
                    <div className="f11 theme12">Actions</div>
                  </Col>
                </Row>
                {ucData ? (
                  ucData.map((item, id) => (
                    <Row className="p-2 mt-0" key={id}>
                      <Col md={8} xs={8} className="px-3">
                        <div className="f11">{item.reason}</div>
                        <div className="f11 theme12 mt-1">
                          {item.image.split("/files1/")[1]}
                        </div>
                      </Col>
                      <Col md={4} xs={4} className="text-center">
                        <span
                          className="mt-2"
                          role="button"
                          onClick={() => {
                            handleDelete(item.id);
                          }}
                        >
                          <i className="fal fa-trash f11 mt-3"></i>
                        </span>
                        <a
                          className="ms-2"
                          href={item.image}
                          target="_blank"
                          role="button"
                          rel="noreferrer"
                        >
                          <i
                            className="fal fa-download f11 mt-3"
                            href={item.image}
                            target="_blank"
                          ></i>
                        </a>
                      </Col>
                    </Row>
                  ))
                ) : (
                  <p>No data available.</p>
                )}
              </div>
            </Col>
            <Col md={7}>
              <div className={`${styles.file_upload_box} mt-4 mb-4`}>
                <div>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <div>
                      <Form.Control
                        type="file"
                        name="image"
                        onChange={handleFile}
                        style={{ opacity: 0 }}
                        className={`${styles.psabs} ${styles.ht112}`}
                      ></Form.Control>
                      <div className={`${styles.f50} text-center pt-1`}>
                        <i class="fal fa-cloud-upload"></i>
                      </div>
                      <div className="d-md-flex align-items-center justify-content-center pt-4 pb-5">
                        <div>
                          Drag & Drop files here{" "}
                          <span className="px-3 theme12">or</span>
                        </div>
                        <div
                          className={styles.browse}
                          style={{ width: "fit-content" }}
                        >
                          Browse files
                        </div>
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </div>
              <div>
                {image.image_filename && (
                  <div>
                    <div>{image.image_filename}</div>
                  </div>
                )}
              </div>
              {fileErr && <div className="text-danger">{fileErr}</div>}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className={` ${styles.bdrnone} bg-white theme13 `}
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button type="submit" className={styles.submitbtn} onClick={onSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default UploadConsent;
