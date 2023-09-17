import React, { useEffect } from "react";
import { Col, Form, Button, Row, Nav, ProgressBar, Modal } from "react-bootstrap";
import styles from "../../styles/IPD_Receptionist/Patient.module.scss";
import styles1 from "../../styles/IPD_Receptionist/Appointments.module.scss";
import Logo3 from "../../public/images/cloud-upload.svg";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import FileUpload from "react-drag-n-drop-image";
import Image from "next/image";
import { useMutation, useQuery } from "@apollo/client";
import { GET_DEPARTEMNTS, GET_DOCTORS, GET_BLOCKS, GET_FLOORS, GET_WARDS, GET_BED, GET_BED_TYPES, GET_RELATIOSN, GET_GLOBAL_INSURENCE, GET_CASE_TYPES, GET_ETHNICITY, GET_ADMIN_USERS, GET_SCHEDULE_SLOTS, GET_BLOCKDATES, GET_ALL_WARDDEPARTMENTS, GET_RELATIONS } from '../../graphql/queries'
import { IP_PATIENT_REGISTARTION } from '../../graphql/mutations'
import { useRecoilState } from "recoil";
import { ipPatientRegistration } from '../../shared/patientreg'
import { getbedsfilterState } from '../../shared/getbedsfilterState'
import Axios from "axios";
import moment from "moment";
import Router from "next/router";
import patientDetails from '../../shared/patientreg';
import SuccessMessage, { showMessage } from '../alertmessages/Alertmessages'
import { unset } from "lodash";


const PatientRegistration = () => {
  const [files, setFiles] = useState([]);
  const [blobimage, setBlobImage] = useState("")
  const [form, setForm] = useRecoilState(ipPatientRegistration)
  const [pform, setPform] = useRecoilState(getbedsfilterState)
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [show, setShow] = useState(false)
  const [disableloading, setDisableLoading] = useState(false);


  // Retrieve user data from localStorage
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


  //upload modal

  const uploadMoadl = () => {
    const Emptyarray = [{ image: "", image_filename: "", error: "" }]
    setShow(true)
    setForm({
      ...form,
      submitError1: "",
      detailsarray: Emptyarray
    })
  }

  const uploadCloseModal = () => {
    setShow(false)
    setForm({
      ...form,
      submitError1: "",
      detailsarray: []
    })
  }

  //Upload Iamges
  const uplaodImages = () => {
    const Emptyarray = [{ image: "", image_filename: "", error: "" }]
    if (form.detailsarray && form.detailsarray.length > 0) {
      const arr = form.detailsarray // Filter out items with no image
        .map((each) => ({ ...each })); // Spread each object to create a new array with valid items
      let formValid = true;
      if (arr.map((each, idx) => {
        if (!each.image) {
          setForm({
            ...form, submitError1: "Please choose files in all fileds"
          })
          formValid = false;
        }
      }))

        if (formValid) {
          setForm({
            ...form,
            submitError1: "",
            images: [...form.images, ...arr], // Concatenate the new array with existing images
            detailsarray: []
          });
          setTimeout(() => {
            setForm((prevForm) => ({
              ...prevForm,
              submitError: "",
              detailsarray: Emptyarray
            }));
          }, [10])
        }
    }
  };

  const addRow = () => {
    setForm({ ...form, submitError1: "", detailsarray: [...form.detailsarray, {}] });
  };

  const removeRow = (rindex) => {
    const detailsarray = form.detailsarray.filter(
      (i, index) => index != rindex
    );
    setForm({ ...form, submitError1: "", detailsarray: detailsarray });
  };

  //Remove Image

  const removeRowImage = (e, rindex) => {
    const detailsarray = form.images.filter(
      (i, index) => index != rindex
    );
    setForm({ ...form, images: detailsarray });
  };


  const newDate = new Date();
  const yyy = newDate.getFullYear();
  const mmm = String(newDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
  const ddd = String(newDate.getDate()).padStart(2, '0');

  const todayDate = `${yyy}-${mmm}-${ddd}`;

  const { data, loading, error } = useQuery(GET_DEPARTEMNTS, {
    fetchPolicy: "cache-and-network"
  });

  const { data: data1, loading: loading1, error: error1 } = useQuery(GET_DOCTORS, {
    variables: {
      department: parseInt(form.department),
      hip: globalUserHip,
      username: username
    },
    fetchPolicy: "cache-and-network"
  });

  const { data: data2, loading: loading2, error: error2 } = useQuery(GET_BLOCKS, {
    variables: {
      hip: globalUserHip,
      username: username
    },
    fetchPolicy: "cache-and-network"
  })

  const { data: data3, loading: loading3, error: error3 } = useQuery(GET_FLOORS, {
    variables: {
      blockId: parseInt(pform.block),
      hip: globalUserHip,
      username: username
    },
    fetchPolicy: "cache-and-network"
  })

  const { data: data15 } = useQuery(GET_ALL_WARDDEPARTMENTS, {
    variables: {
      hip: globalUserHip,
      username: username
    },
    fetchPolicy: "network-only"
  })

  const { data: data4, loading: loading4, error: error4 } = useQuery(GET_WARDS, {
    variables: {
      blockId: parseInt(pform.block),
      floorId: parseInt(pform.floor),
      departments: parseInt(pform.department),
      hip: globalUserHip,
      username : username
    },
    fetchPolicy: "cache-and-network"
  })

  const { data: data5, loading: loading5, error: error5 } = useQuery(GET_BED_TYPES, {
    fetchPolicy: "cache-and-network"
  })

  const { data: data6, loading: loading6, error: error6 } = useQuery(GET_BED, {
    variables: {
      blockId: parseInt(pform.block),
      floorId: parseInt(pform.floor),
      wardId: parseInt(pform.ward),
      bedtypes: parseInt(pform.bedType),
      status: 0,
      hip: globalUserHip,
      username: username
    },
    fetchPolicy: "cache-and-network"
  })

  const { data: data7, loading: loading7, error: error7 } = useQuery(GET_RELATIOSN, {
    fetchPolicy: "cache-and-network"
  })

  const { data: data8, loading: loading8, error: error8 } = useQuery(GET_GLOBAL_INSURENCE, {
    fetchPolicy: "cache-and-network"
  })

  const { data: data9, loading: loading9, error: error9 } = useQuery(GET_CASE_TYPES, {
    fetchPolicy: "cache-and-network"
  })

  const { data: data10, loading: loading10, error: error10 } = useQuery(GET_ETHNICITY, {
    fetchPolicy: "cache-and-network"
  })

  const { data: data11, loading: loading13, error: error13 } = useQuery(GET_DOCTORS, {
    variables: {
      department: 0,
      hip: globalUserHip
    },
    fetchPolicy: "cache-and-network"
  });

  const [IpPatientRegistration, { loading: loading11 }] = useMutation(IP_PATIENT_REGISTARTION);

  useEffect(() => {
    if (loading1) {
      setDisableLoading(true);
    }
    setTimeout(() => {
      setDisableLoading(false);
    }, [2500])
  }, [loading1])

  // Day Conversions
  const mydate = moment(form.appointmentDate, 'YYYY-MM-DD');
  const dayId = mydate.format("d");

  //convert Date
  const formattedDate = mydate.format("DD-MM-YYYY");

  //timestamp
  const isToday = mydate.isSame(moment(), 'day');
  const timestamp = isToday ? Math.floor(Date.now() / 1000).toString() : (moment(mydate).format("x"));

  // get Slots
  const { data: data12, loading: loading12, error: error12 } = useQuery(GET_SCHEDULE_SLOTS, {
    variables: {
      username: form.doctorusername,
      day: parseInt(dayId) || 0,
      timestamp: timestamp
    },
    fetchPolicy: "network-only"
  })

  // getAdmin Service for Book Now
  const { data: data13 } = useQuery(GET_ADMIN_USERS, {
    variables: {
      username: form.doctorusername,
      name: "",
      hip: globalUserHip
    },
    fetchPolicy: "network-only"
  })



  let Maindoctordetails = form.DoctorDetails.find(each => each.maindoctor)
  let Maindoctorusername = (Maindoctordetails && Maindoctordetails.username) ? Maindoctordetails.username : "";

  const { data: data14 } = useQuery(GET_BLOCKDATES, {
    variables: {
      date: formattedDate,
      username: Maindoctorusername
    }, fetchPolicy: "network-only"
  })


  const { data: data16, loading: loading14, error: error14 } = useQuery(GET_RELATIONS, {
    fetchPolicy: "cache-and-network"
  })

  // GET REALATIONS
  let GETRELATION = [];
  if (data16 && data16.getRelations) {
    GETRELATION = data16.getRelations
  }

  //blocked date for doctor
  let DoctorAvialble = 1;
  if (data14 && data14.getdoctorblockdate && Maindoctorusername) {
    if (data14.getdoctorblockdate.length > 0) {
      if (data14.getdoctorblockdate[0]) {
        if (data14.getdoctorblockdate[0].entire_day) {
          DoctorAvialble = 0
        }
      }
    }
  }

  // department qurey data
  let Departments = [];
  if (data && data.getDepartments) {
    Departments = data.getDepartments
  }

  // doctor qurey data
  let Doctors = [];
  if (data1 && data1.getDoctors) {
    if (form.department > 0) {
      data1.getDoctors.map((item, index) => {
        Doctors.push({
          id: item.id,
          name: item.details.name,
          username: item.details.username
        });
      })
    }
  }

  // doctor details with out department filter
  let DoctorsDetails = [];
  if (data11 && data11.getDoctors) {
    data11.getDoctors.map((item, index) => {
      DoctorsDetails.push({
        departmentId: item.department,
        id: item.id,
        name: item.details.name,
        username: item.details.username
      });
    })
  }

  // Block Data
  let BlockData = [];
  if (data2 && data2.getBlocks && data2.getBlocks.length > 0) {
    BlockData = data2.getBlocks.filter(each => each.status)
  }

  // Floor Data
  let FloorData = [];
  if (data3 && data3.getFloors && data3.getFloors.length > 0 && pform.block > 0) {
    FloorData = data3.getFloors.filter(each => each.status)
  }

  //departments
  let AllDepartments = [];
  if (data15 && data15.getAllDepartments && pform.floor > 0) {
    AllDepartments = data15.getAllDepartments
  }

  // Ward Data
  let WardData = [];
  if (data4 && data4.getWard && data4.getWard.length > 0 && pform.block && pform.floor > 0 && pform.department > 0) {
    WardData = data4.getWard.filter(each => each.status)
  }

  // Bed Types
  let BedTypes = [];
  if (data5 && data5.getAllbedtypes && pform.ward > 0 && data5.getAllbedtypes.length > 0) {
    BedTypes = data5.getAllbedtypes;
  }

  //bed types for dispalying
  let DisplayBedTypes = [];
  if (data5 && data5.getAllbedtypes && data5.getAllbedtypes.length > 0) {
    DisplayBedTypes = data5.getAllbedtypes;
  }

  // Bed Data
  let BedData = [];
  if (data6 && data6.getBed && data6.getBed.length > 0 && pform.ward > 0 && pform.bedType > 0) {
    BedData = data6.getBed
  }

  //global Relations
  let Relations = [];
  if (data7 && data7.getRelations) {
    if (data7.getRelations.length > 0) {
      Relations = data7.getRelations
    }
  }

  //InssrenceDetails
  let Insurances = [];
  if (data8 && data8.getAllGlobalInsurances) {
    if (data8.getAllGlobalInsurances.length > 0) {
      Insurances = data8.getAllGlobalInsurances
    }
  }

  //case types
  let CaseTypes = [];
  if (data9 && data9.getAllGlobalCasetype) {
    if (data9.getAllGlobalCasetype.length > 0) {
      CaseTypes = data9.getAllGlobalCasetype
    }
  }

  //ethencity
  let Ethencity = [];
  if (data10 && data10.getAllGlobalethnicity) {
    if (data10.getAllGlobalethnicity.length > 0) {
      Ethencity = data10.getAllGlobalethnicity
    }
  }

  // service Data
  let filterData = [];
  if (data13 && data13.getAdminUsers && DoctorAvialble && form.appointmentDate) {
    if (data13.getAdminUsers.length > 0 && data13.getAdminUsers[0]) {
      const doctorServices = data13.getAdminUsers[0].doctorServices || [];
      filterData = doctorServices.map(each => ({
        ...each,
        serid: each.service_id,
        sertext: each.service_name,
      }));
    }
  }

  //filter Duplicates
  function uniqByKeepLast(data, key) {
    return [...new Map(data.map(x => [key(x), x])).values()]
  }

  let FilterDuplicateServices = [];
  if (filterData && filterData.length > 0) {
    FilterDuplicateServices = uniqByKeepLast(filterData, it => it.serid)
  }

  //disable fucture dates
  const disableFutureDate = () => {
    const today = new Date();
    today.setDate(today.getDate());
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };



  //disable past dates
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  //document checker
  function isDocumentUrl(url) {
    const documentExtensions = ['.pdf', '.doc', '.docx', '.ppt', '.pptx', '.xls', '.xlsx', '.odt', '.rtf', '.txt']
    const fileExtension = url.substr(url.lastIndexOf('.')).toLowerCase();
    return documentExtensions.includes(fileExtension);
  }

  //image checker
  function isImageUrl(url) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const fileExtension = url.substr(url.lastIndexOf('.')).toLowerCase();
    return imageExtensions.includes(fileExtension);
  }

  //upload files
  const fileUpload = (file, stream) => {
    const url = `${process.env.NEXT_PUBLIC_UPLOAD_FILE}/mobile.php?uploadImage=true`;
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


  //handleChange for Image
  const handleChangeImage = (e, rrindex, name) => {
    if (name === "image") {
      let files = e.target.files
      let err = ''
      const types = [
        'image/png',
        'image/jpeg',
        'image/jpg',
        "application/pdf",
        "image/webp",
        "application/doc",
        "application/docx",
        "application/vnd.ms-excel",
        "application/msword",
      ]
      for (var x = 0; x < files.length; x++) {
        if (types.every(type => files[x].type !== type)) {
          err += "Uploaded file is not a valid format.";
        } else if (types.every(type => files[x].size > 10e6)) {
          err += "Please upload a file smaller than 10 MB";
        }
      };

      if (err != "") {
        let arr = form.detailsarray.map((i, index) => {
          if (index == rrindex) {
            return { ...i, error: err, image: "" };
          } else {
            return { ...i };
          }
        });

        setForm({ ...form, detailsarray: arr, submitError: "", submitError1: "" });
      }

      else {
        var file = e.target.files[0];
        let fileread = new FileReader();
        let arr = form.detailsarray.map((i, index) => {
          if (index == rrindex) {
            if (e.target.value != "") {
              return { ...i, image_filename: e.target.value, error: err };
            } else {
              let dobj = unset(i, [name]);
              return { ...dobj };
            }
          } else {
            return { ...i };
          }
        });

        setForm({ ...form, detailsarray: arr, submitError: "", submitError1: "" });

        if (file) {
          fileread.readAsDataURL(file);
        }

        fileread.onload = async (e) => {
          let fobj = {
            stream: e.target.result,
            filename: file.name,
            mimetype: file.type,
          };
          try {
            const upload = await fileUpload(file, fobj.stream);
            if (upload.data.result == "success") {
              let arr = form.detailsarray.map((i, index) => {
                if (index == rrindex) {
                  if (e.target.value != "") {
                    return {
                      ...i,
                      image_filename: file.name,
                      image: upload.data.filename,
                      error: "",
                    };
                  } else {
                    let dobj = unset(i, [name]);
                    return { ...dobj };
                  }
                } else {
                  return { ...i };
                }
              });

              setForm({ ...form, detailsarray: arr, submitError: "", submitError1: "" });
            }
          } catch (error) {
            let arr = form.detailsarray.map((i, index) => {
              if (index == rrindex) {
                if (e.target.value != "") {
                  return {
                    ...i,
                    image_filename: file.name,
                    image: "",
                    error: "something went wrong please upload agian",
                  };
                } else {
                  let dobj = unset(i, [name]);
                  return { ...dobj };
                }
              } else {
                return { ...i };
              }
            });
            setForm({ ...form, detailsarray: arr, submitError: "", submitError1: "" });
          }
        };
      }
    } else {
      setForm({
        ...form,
        submitError: "",
        submitError1: ""
      })
    }
  }


  //clear form data
  const handleClearFormsData = () => {
    setForm({
      ...patientDetails
    })
    setPform({
      ...pform, block: 0, floor: 0, ward: 0, bed: 0, bedType: 0, submitError: ""
    })
  }

  //image remove
  const HandleImageRemove = () => {
    setForm({
      ...form, image: ""
    })
  }

  // handleChange for newborn
  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      newBorn: checked ? 1 : 0,
      fatherName: "",
      motherName: "",
      timeOfBirth: "",
      patientAge: "",
      patientDob: ""
    }));
  };

  //handleChange for Mobile
  const handleChangeforMobile = (event) => {
    const { name, value } = event.target;
    const mobileNumber = value.replace(/\D/g, "");
    const mobilevalue = mobileNumber.slice(0, 10)
    const isValid = mobileNumber.length > 9 && mobileNumber.length > 0
    if (mobileNumber > 5) {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: mobilevalue,
        submitError: "",
        formErrors: {
          ...prevForm.formErrors,
          [name]: isValid ? "" : "Please enter valid mobile",
        },
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: "",
        submitError: "",
        formErrors: {
          ...prevForm.formErrors,
          [name]: "",
        },
      }));
    }

  };

  // handleChange for name, age
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "patientName") {
      const nameRegex = /^[A-Za-z\s]+$/;
      if (!value || nameRegex.test(value)) {
        setForm((prevForm) => ({
          ...prevForm,
          patientName: value,
          submitError: "",
          formErrors: {
            ...prevForm.formErrors,
            patientName: "",
          },
        }));
      }
    } else if (name === "patientAge") {
      const age = parseInt(value);
      if (!isNaN(age) && age > 150) {
        setForm((prevForm) => ({
          ...prevForm,
          patientAge: Math.floor(value / 10),
          submitError: "",
          formErrors: {
            ...prevForm.formErrors,
            patientAge: "",
          },
        }));
      } else if (age !== "" && !isNaN(age) && age <= 150) {
        setForm((prevForm) => ({
          ...prevForm,
          patientAge: value,
          submitError: "",
          formErrors: {
            ...prevForm.formErrors,
            patientAge: "",
          },
        }))
      }
      else {
        setForm((prevForm) => ({
          ...prevForm,
          patientAge: "",
          submitError: "",
          formErrors: {
            ...prevForm.formErrors,
            patientAge: "",
          },
        }))
      }
    }
  };

  //handleChange for Department
  const handleChangeforDepartment = (event) => {
    const { name, value } = event.target
    if (value) {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
        submitError: "",
        doctor: "",
        serviceType: 0,
        doctorusername: "",
        appointmentDate: todayDate,
        formErrors: {
          ...prevForm.formErrors,
          [name]: "",
        },
      }))
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
        submitError: "",
        doctor: "",
        serviceType: 0,
        doctorusername: "",
        appointmentDate: todayDate,
        formErrors: {
          ...prevForm.formErrors,
          [name]: "",
        },
      }))
    }

  }

  // Handle Change for Doctor
  const handleChangeforDoctor = (event) => {
    const { name, value, options } = event.target;
    const uname = options[options.selectedIndex].getAttribute("uname"); // Retrieve the 'uname' attribute

    if (value) {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
        doctorusername: uname,
        submitError: "",
        serviceType: 0,
        appointmentDate: todayDate,
        slotTime: "",
        formErrors: {
          ...prevForm.formErrors,
          [name]: ""
        }
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        submitError: "",
        [name]: "",
        doctorusername: "",
        formErrors: {
          ...prevForm.formErrors,
          [name]: ""
        }
      }));
    }
  };

  //handleChange for Array Departments
  const handleChangeforArrayDepartment = (event, index) => {
    const { name, value } = event.target;
    setForm((prevForm) => {
      const DepartmentDetails = [...prevForm.DoctorDetails];
      DepartmentDetails[index] = {
        ...DepartmentDetails[index],
        [name]: value,
        submitError: "",
        maindoctor: 0,
        // Only reset the doctor value if the department is changed
        doctor: DepartmentDetails[index].department !== value ? 0 : DepartmentDetails[index].doctor,
        departmenterror: "",
        maindoctorerror: "",
        doctorerror: "",
        maindoctorchecking: ""
      };

      setSelectedDepartments((prevSelected) => {
        const updatedSelected = [...prevSelected];
        updatedSelected[index] = value;
        return updatedSelected;
      });

      return {
        ...prevForm,
        DoctorDetails: DepartmentDetails,
      };
    });
  };


  //handleChange for Array Doctor
  const handleChangeforArrayDoctor = (event, index) => {
    const { name, value, options } = event.target;
    const uname = options[options.selectedIndex].getAttribute("uname"); // Retrieve the 'uname' attribute

    setForm((prevForm) => {
      const DepartmentDetails = [...prevForm.DoctorDetails];
      DepartmentDetails[index] = {
        ...DepartmentDetails[index],
        [name]: value,
        submitError: "",
        doctorerror: "",
        maindoctor: 0,
        maindoctorerror: "",
        username: uname,
        maindoctorchecking: ""
      };
      return {
        ...prevForm,
        DoctorDetails: DepartmentDetails,
      };
    });
  };


  const [dstatus, setDStatus] = useState(false)
  const handleChangeforArrayMainDoctor = (event, index) => {
    const { name, checked, options } = event.target;
    let arr = form.DoctorDetails.map((each, idx) => {
      if (idx === index) {
        return {
          ...each,
          maindoctor: checked ? 1 : 0,
          maindoctorerror: "",
          maindoctorchecking: ""
        };
      } else {
        return {
          ...each,
          maindoctor: 0,
          maindoctorerror: "",
          maindoctorchecking: ""

        };
      }
    });

    setForm({
      ...form,
      DoctorDetails: arr,
      submitError: ""
    });
    setDStatus(true)
  }

  //doctor avialblity check
  useEffect(() => {
    setForm({
      ...form,
      DoctorDetails: form.DoctorDetails.map((each) => ({
        ...each,
        maindoctorchecking: !DoctorAvialble && each.maindoctor
          ? `Main Doctor not available on ${moment(appointmentDate).format('Do-MMM-YYYY')}`
          : '',
      })),
    });
    setTimeout(() => {
      setDStatus(false)
    }, [100])
  }, [dstatus, data14])

  //add more addmoreDoctorDetails
  const addmoreDoctorDetails = () => {
    setForm({
      ...form, DoctorDetails: [...form.DoctorDetails, {
        doctor: 0, department: 0, username: "", doctorerror: "", departmenterror: "", DoctorAvialbleError: ""
      }]
    })
  }

  const removeDoctorDetails = (rindex) => {
    const detailsarray = form.DoctorDetails.filter(
      (i, index) => index != rindex
    );
    setForm({ ...form, DoctorDetails: detailsarray });
  }


  // handle change for appointment Date
  const handleChangeformDate = (event) => {
    const { name, value } = event.target;

    let todayDate = new Date()
    const currentYear = todayDate.getFullYear();
    const cuurentMonth = String(newDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
    const currentDay = String(newDate.getDate()).padStart(2, '0');
    const currentDate = `${currentYear}-${cuurentMonth}-${currentDay}`;
    // date not enter past dates
    let CheckingYears = currentDate <= value ? value : currentDate;

    if (value) {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: CheckingYears,
        submitError: "",
        serviceType: 0,
        formErrors: {
          ...prevForm.formErrors,
          [name]: ""
        }
      }))
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        submitError: "",
        [name]: "",
        time: "",
        serviceType: 0,
        formErrors: {
          ...prevForm.formErrors,
          [name]: ""
        }
      }))
    }
  }


  // for remainging form 
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (value) {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
        submitError: "",
        formErrors: {
          ...prevForm.formErrors,
          [name]: ""
        }
      }))
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        submitError: "",
        [name]: "",
        formErrors: {
          ...prevForm.formErrors,
          [name]: ""
        }
      }))
    }
  }

  //handle Change for Age
  const handleInputageChange = (e) => {
    const value = parseInt(e.target.value);
    const name = e.target.name;
    const newDate = new Date();
    const newYear = moment(newDate).format("YYYY");
    if (!isNaN(value) && value > 150) {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: Math.floor(value / 10),
        patientDob: `${newYear - Math.floor(value / 10)}-01-01`,
        formErrors: {
          ...form.formErrors, patientDob: ""
        }
      }));
    } else if (value && !isNaN(value) && value > 0) {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
        patientDob: `${newYear - value}-01-01`,
        formErrors: { ...prevForm.formErrors, patientDob: "" },
      }));
    } else if (!isNaN(value) && value == 0) {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
        patientDob: `${newYear}-01-01`,
        formErrors: { ...prevForm.formErrors, patientDob: "" },
      }));
    } else {
      setTimeout(() => {
        setForm((prevForm) => ({
          ...prevForm,
          [name]: "",
          patientDob: ``,
          formErrors: { ...prevForm.formErrors, patientDob: "" },
        }));
      }, 10);
    }
  };

  //handlechange for DOB
  const handleChangeforDob = (event) => {
    const { name, value } = event.target;

    if (value) {
      let todayDate = new Date()
      const currentYear = todayDate.getFullYear();
      const cuurentMonth = String(newDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
      const currentDay = String(newDate.getDate()).padStart(2, '0');
      const currentDate = `${currentYear}-${cuurentMonth}-${currentDay}`;

      let CheckingYears = currentDate >= value ? value : currentDate;
      const formattedDate = CheckingYears;
      var dob = new Date(formattedDate);

      if (formattedDate == null || formattedDate == '') {
        return false;
      } else {
        // Calculate month difference from the current date in time
        var month_diff = Date.now() - dob.getTime();
        // Convert the calculated difference into a date format
        var age_dt = new Date(month_diff);
        // Extract the year from the date    
        var year = age_dt.getUTCFullYear();
        // Calculate the age of the user
        var age = Math.abs(year - 1970);
      }

      setForm((prevForm) => ({
        ...prevForm,
        [name]: CheckingYears,
        submitError: "",
        patientAge: age,
        formErrors: {
          ...prevForm.formErrors,
          [name]: ""
        }
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        submitError: "",
        [name]: "",
        patientAge: 0,
        formErrors: {
          ...prevForm.formErrors,
          [name]: ""
        }
      }));
    }
  };

  //handlechnage for array contact details
  const handleChangeforArray = (event, index) => {
    const { name, value } = event.target;
    setForm((prevForm) => {
      const updatedGuardianDetail = [...prevForm.guardianDetail];
      updatedGuardianDetail[index] = {
        ...updatedGuardianDetail[index],
        [name]: value,
        submitError: "",
        nameerror: "",
      };
      return {
        ...prevForm,
        guardianDetail: updatedGuardianDetail,
      };
    });
  };

  //handlechnage for array contact details mobile
  const handleChangeforArrayMobile = (event, index) => {
    const { name, value } = event.target;
    const mobileNumber = value.replace(/\D/g, "");
    const mobileNumberValid = mobileNumber > 5 ? mobileNumber : ""
    setForm((prevForm) => {
      const updatedGuardianDetail = [...prevForm.guardianDetail];
      updatedGuardianDetail[index] = {
        ...updatedGuardianDetail[index],
        [name]: mobileNumberValid.slice(0, 10),
        submitError: "",
        mobileerror: mobileNumberValid.length >= 1 && mobileNumberValid.length <= 9 ? "Invalid mobile number" : ""
      };
      return {
        ...prevForm,
        guardianDetail: updatedGuardianDetail,
        formErrors: {
          ...prevForm.formErrors,
        }
      };
    });
  };

  const handleChangeforArrayRelation = (event, index) => {
    const { name, value } = event.target;
    setForm((prevForm) => {
      const updatedGuardianDetail = [...prevForm.guardianDetail];
      updatedGuardianDetail[index] = {
        ...updatedGuardianDetail[index],
        [name]: value,
        submitError: "",
        relationerror: ""
      };
      return {
        ...prevForm,
        guardianDetail: updatedGuardianDetail,
        formErrors: {
          ...prevForm.formErrors,
        }
      };
    });
  };

  // SendaryContactAdd
  const SendaryContactAdd = () => {
    setForm((prevForm) => ({
      ...prevForm, submitError: "",
      guardianDetail: [
        ...prevForm.guardianDetail,
        { guardian_mobile: "", guardian_name: "", guardian_relation: "", id: 0, nameerror: "", mobileerror: "", relationerror: "", }
      ],
      formErrors: {
        ...prevForm.formErrors,
        guardianDetail: [
          ...prevForm.formErrors.guardianDetail,
          { guardian_mobile: "", guardian_name: "", guardian_relation: "" }
        ]
      }
    }));
  };

  //secondary contact remove
  const secondaryDetailsDelete = () => {
    setForm((prevForm) => {
      const updatedGuardianDetail = prevForm.guardianDetail.filter((item, index) => index !== 1);
      const updatedFormErrors = prevForm.formErrors.guardianDetail.filter((item, index) => index !== 1);
      return {
        ...prevForm, submitError: "",
        guardianDetail: updatedGuardianDetail,
        formErrors: {
          ...prevForm.formErrors,
          guardianDetail: updatedFormErrors
        }
      };
    });
  };

  //handleChange for department
  const handleChangeforBlock = (event) => {
    const { name, value } = event.target
    if (value) {
      setPform({
        ...pform, submitError: "",
        [name]: value, floor: 0, ward: 0, bed: 0, bedType: 0
      })
    }
  }

  // handleChangeforFloor
  const handleChangeforFloor = (event) => {
    const { name, value } = event.target
    if (value) {
      setPform({
        ...pform, submitError: "",
        [name]: value, ward: 0, bed: 0, bedType: 0, department: 0
      })
    }
  }

  //handleChangeforWard
  const handleChangeforWardDep = (event) => {
    const { name, value } = event.target
    if (value) {
      setPform({
        ...pform, submitError: "",
        [name]: value, ward: 0, bed: 0, bedType: 0,
      })
    }
  }

  // handleChangeforWard and BedType
  const handleChangeforWard = (event) => {
    const { name, value } = event.target
    if (value) {
      setPform({
        ...pform, submitError: "",
        [name]: value, bedType: 0,
      })
      //bedId Changing
      setForm({
        ...form, bedId: 0
      })
    }
  }

  const handleChangeforWardandBedType = (event) => {
    const { name, value } = event.target
    if (value) {
      setPform({
        ...pform, submitError: "",
        [name]: value
      })
      //bedId Changing
      setForm({
        ...form, bedId: 0
      })
    }
  }

  //convert patientDob 
  let PatientDob = form.patientDob ? form.patientDob.toString() : ""
  let [year, month, day] = PatientDob.split('-')
  let PatientDateofBirth = `${day}-${month}-${year}`

  //appointmentDate
  let appointmentDate = form.appointmentDate ? form.appointmentDate.toString() : ""
  let [y, m, d] = appointmentDate.split('-')
  let appointmentDateCheck = `${d}-${m}-${y}`

  //image

  let UploadImage = []
  if (form.images && form.images.length > 0) {
    UploadImage = form.images.filter((each) => each.image).map((item) => {
      return {
        image: `${process.env.NEXT_PUBLIC_UPLOAD_FILE}/files1/` + item.image
      }
    })
  }

  let Doctorsubmitdetails = [];
  Doctorsubmitdetails = form.DoctorDetails.map((each) => {
    return {
      doctor: parseInt(each.doctor),
      main_doctor: parseInt(each.maindoctor) || 0
    }
  })

  //mutation variables
  const RegistartionForm = {
    username: username,
    doctor: parseInt(form.doctor),
    department: parseInt(form.department),
    appointmentDate: appointmentDateCheck,
    referredName: form.referredName,
    referredMobile: form.referredMobile,
    bedId: parseInt(form.bedId) || 0,
    patientName: form.patientName,
    patientAge: 0,
    patientDob: PatientDateofBirth,
    patientMobile: form.patientMobile,
    patientGender: parseInt(form.patientGender),
    patientAddress: form.patientAddress,
    patientOccupation: form.patientOccupation,
    timeOfBirth: form.timeOfBirth,
    motherName: form.motherName,
    fatherName: form.fatherName,
    newBorn: parseInt(form.newBorn) || 0,
    ethnicity: parseInt(form.ethnicity) || 0,
    reason: form.reason,
    caseType: parseInt(form.caseType) || 0,
    corpEmployee: form.corpEmployee,
    organisation: form.organisation,
    employeePolicy: form.employeePolicy,
    insuranceProvider: parseInt(form.insuranceProvider) || 0,
    serviceNo: parseInt(form.serviceNo) || 0,
    cardHolderName: form.cardHolderName,
    relationship: parseInt(form.relationship) || 0,
    guardianDetail:
      form.guardianDetail && form.guardianDetail.length > 0
        ? form.guardianDetail.map((each, index) => {
          return {
            guardian_mobile: each.guardian_mobile,
            guardian_name: each.guardian_name,
            relation: parseInt(each.guardian_relation) || 0
          };
        })
        : [],
    // image: UploadImage,
    allImage: UploadImage,
    serviceType: parseInt(form.serviceType) || 0,
    hip: globalUserHip,
    doctors: Doctorsubmitdetails
  };

  // handle submit Registartion
  const handlePatientRegistration = async () => {
    let formValid = true;

    if (!form.appointmentDate) {
      formValid = false;
      setForm((prevForm) => ({
        ...prevForm,
        formErrors: {
          ...prevForm.formErrors,
          appointmentDate: !form.appointmentDate ? "Appointment date cannot be empty" : "",
        },
      }));
    }

    if (!form.patientName || !form.patientMobile || !form.patientDob || !form.caseType || !form.patientGender) {
      formValid = false;
      setForm((prevForm) => ({
        ...prevForm,
        formErrors: {
          ...prevForm.formErrors,
          patientName: form.patientName ? "" : "Name cannot be empty",
          patientMobile: form.patientMobile ? "" : "Mobile cannot be empty",
          patientDob: form.patientDob ? "" : "Dob cannot be empty",
          caseType: form.caseType ? "" : "Case type cannot be empty",
          patientGender: form.patientGender ? "" : "Gender cannot be empty",
        },
      }));
    }

    if (form.guardianDetail.map((each, index) => {
      if (each.guardian_name == "" || each.guardian_mobile == "" || each.guardian_relation == "") {
        formValid = false
      }

      setForm((prevForm) => ({
        ...prevForm,
        guardianDetail: [...form.guardianDetail.map((each, index) => {
          return {
            ...each, mobileerror: each.guardian_mobile ? "" : "Mobile cannot be empty",
            nameerror: each.guardian_name ? "" : "Name cannot be empty",
            relationerror: each.guardian_relation ? "" : "Relation cannot be empty"
          }
        })]
      }))
    }))

      if (form.DoctorDetails.map((each, index) => {
        if (!each.doctor || each.doctor == 0 || !each.department || each.department == 0) {
          formValid = false
        }
        // Assuming form is a state variable holding the state of your component
        const hasNonMainDoctor = form.DoctorDetails.some(each => each.maindoctor);
        if (!hasNonMainDoctor) {
          formValid = false
        }

        if (hasNonMainDoctor) {
          if (!DoctorAvialble) {
            formValid = false;
          }
        }

        //Main Doctor Avilablity

        setForm((prevForm) => ({
          ...prevForm,
          DoctorDetails: [...form.DoctorDetails.map((each, index) => {
            return {
              ...each,
              departmenterror: each.department ? "" : "Department cannot be empty",
              doctorerror: !each.doctor ? "Doctor cannot be empty" : "",
              maindoctorerror: hasNonMainDoctor ? "" : "Select main doctor",
              maindoctorchecking: !DoctorAvialble && each.maindoctor ? `Main Doctor not available on ${moment(form.appointmentDate).format("Do-MMM-YYYY")}` : ""
            }
          })]
        }))
      }))



        try {
          if (formValid) {
            const { data } = await IpPatientRegistration({
              variables: RegistartionForm,
            });
            if (data && data.IpPatientRegistration) {
              setForm((prevForm) => ({
                ...patientDetails,
                submitError: "Patient registered successfully",
              }));
              setPform({
                ...pform, block: 0, floor: 0, ward: 0, bed: 0, bedType: 0, submitError: ""
              })
              showMessage("Patient registered successfully", "success");

              setTimeout(() => {
                setForm((prevForm) => ({
                  ...patientDetails,
                  submitError: "",
                }));
                Router.push("/ipr_appointments")
              }, [4500])
            } else {
              setForm((prevForm) => ({
                ...prevForm,
                submitError: "Something went wrong. Please try again",
              }));
            }
          } else {
            setForm((prevForm) => ({
              ...prevForm,
              submitError: "Please fill all mandatory fields",
            }));
          }
        } catch (error) {
          if (error.message === "Request failed with status code 422") {
            setForm((prevForm) => ({
              ...prevForm,
              submitError: "Too many continuous requests. Please try again later",
            }));
          } else {
            setForm((prevForm) => ({
              ...prevForm,
              submitError: error.message,
            }));
          }
        }
  };

  return (
    <React.Fragment>
      {/* Allert Messges */}
      <SuccessMessage />
      <div className={styles.pt_6}>
        <div
          className={` ${styles.bg3} d-md-flex pt-4 pb-4 align-items-center px-4 px-xl-5 `}
        >
          <Col md={6} xl={6} lg={6} sm={12} xs={12}>
            <div className="d-flex">
              <div className="pe-4">
                <Nav.Link href="/ipr_appointments">
                  <i className="fal fa-arrow-left"></i>
                </Nav.Link>
              </div>
              <div className={`${styles.text} ${styles1.font}`}>Patient Registration</div>
            </div>
          </Col>
          {/* <Col md={6} xl={6} lg={6} sm={12} xs={12} className={`text-md-end ${styles1.font}`}>
            <div>
              Date:
              <span>
                <strong> 2nd Feb, 2023 / 5:25PM </strong>
              </span>
            </div>
          </Col> */}
        </div>
      </div>
      <div className="px-xl-5 px-4 bg-white">
        <section id="section0">
          <div className={`d-md-flex pt-5 pb-3 ${styles.bdrbtm} ${styles1.font}`}>
            <Col md={2} xl={5} lg={3} sm={12} xs={12}>
              <div className={`${`${styles.text1} ${styles1.font}`} ${styles1.font}`}>
                <strong>Patient Details</strong>
              </div>
            </Col>
            <Col
              md={10}
              xl={7}
              lg={9}
              sm={12}
              xs={12}
              className="text-md-end mt-3 mt-md-0"
            >
              {/* <div className="d-flex justify-content-md-end">
                <div className={`pe-lg-5 pe-xl-5 pe-md-3 pe-2 ${styles.f13} ${styles1.font}`}>
                  IP No : 87645
                </div>
                <div className={`pe-lg-5 pe-xl-5 pe-md-3 pe-2 ${styles.f13} ${styles1.font}`}>
                  UHID No : ABC98
                </div>
                <div className={`${styles.f13} ${styles1.font}`}>Admission No : ABC987645</div>
              </div> */}
            </Col>
          </div>
          <span>
            {
              form.submitError === "Patient registered successfully" ?
                <span className="text-success">{""}</span> :
                <span className="text-danger">{form.submitError}</span>
            }
          </span>
          <Col
            xl={10}
            md={12}
            lg={12}
            sm={12}
            className="d-lg-flex align-items-center  mt-5"
          >
            <Col md={12} lg={3} xl={3} className=" mt-3 pe-lg-5">
              <Form.Label className={`f14 mb-0 ${styles1.font}`}>Patient Name*</Form.Label>
              <Form.Control
                type="text"
                className={styles.textbox}
                placeholder="Enter Patient Name"
                name="patientName"
                value={form.patientName}
                onChange={handleInputChange}
                onBlur={() => {
                  const isEmpty = !form.patientName.trim();
                  setForm((prevForm) => ({
                    ...prevForm,
                    formErrors: { ...prevForm.formErrors, patientName: isEmpty ? "Patient Name cannot be empty" : "" }
                  }))
                }}
              />
              <Form.Text className="text-danger">{form.formErrors.patientName}</Form.Text>
            </Col>
            {form.newBorn ? (
              <React.Fragment>
                <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                  <Form.Label className={`f14 mb-0 ${styles1.font}`}>Mobile No*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Patient Mobile"
                    name="patientMobile"
                    className={styles.textbox}
                    value={form.patientMobile}
                    onChange={handleChangeforMobile}
                    onBlur={() => {
                      const isEmpty = !form.patientMobile.trim();
                      setForm((prevForm) => ({
                        ...prevForm,
                        formErrors: { ...prevForm.formErrors, patientMobile: isEmpty ? "Mobile cannot be empty" : "" }
                      }))
                    }}

                  />
                  <Form.Text className="text-danger">{form.formErrors.patientMobile}</Form.Text>
                </Col>
                <Col md={12} lg={3} xl={3} className="mt-3 pe-lg-5"></Col>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                  <Form.Label className={`f14 mb-0 ${styles1.font}`}>Mobile No*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Patient Mobile"
                    name="patientMobile"
                    value={form.patientMobile}
                    onChange={handleChangeforMobile}
                    className={styles.textbox}
                    onBlur={() => {
                      const isEmpty = !form.patientMobile.trim();
                      setForm((prevForm) => ({
                        ...prevForm,
                        formErrors: { ...prevForm.formErrors, patientMobile: isEmpty ? "Mobile cannot be empty" : "" }
                      }))
                    }}
                  />
                  <Form.Text className="text-danger">{form.formErrors.patientMobile}</Form.Text>
                </Col>
                <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                  <Form.Label className={`f14 mb-0 ${styles1.font}`}>Patient Gender*</Form.Label>
                  <Form.Select
                    type="text"
                    placeholder="Enter"
                    name="patientGender"
                    value={form.patientGender}
                    onChange={handleChange}
                    className={styles.textbox}
                    onBlur={() => {
                      const isEmpty = !form.patientGender;
                      setForm((prevForm) => ({
                        ...prevForm,
                        formErrors: { ...prevForm.formErrors, patientGender: isEmpty ? "Gender cannot be empty" : "" }
                      }))
                    }}
                  >
                    <option className="d-none" value="">Select</option>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                    <option value="2">Others</option>

                  </Form.Select>
                  <Form.Text className="text-danger">{form.formErrors.patientGender}</Form.Text>

                  {/* <div className={`${styles.historytext} ${styles1.font}`}>History Found</div> */}
                </Col>
              </React.Fragment>
            )}
            <Col md={12} lg={3} xl={3} className=" mt-3 pe-lg-5" >
              <div className="d-flex align-items-center">
                <Col md={6} className="ps-4 mt-3">
                  <Form.Check
                    type="checkbox"
                    checked={form.newBorn ? true : false}
                    onChange={handleCheckboxChange}
                    placeholder="Enter"
                    label="Just Born"
                    className={`f14 mb-0 ${styles1.font}`}
                  />
                </Col>
              </div>
            </Col>
          </Col>
          <Col
            xl={10}
            md={12}
            lg={12}
            sm={12}
            className="d-lg-flex align-items-center mt-4"
          >
            {form.newBorn ? (
              <React.Fragment>
                <Col md={12} lg={3} xl={3} className=" mt-3 pe-lg-5">
                  <Form.Label className={`f14 mb-0 ${styles1.font}`}>Father Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter"
                    onChange={handleChange}
                    value={form.fatherName}
                    name="fatherName"
                    className={styles.textbox}
                  />
                </Col>
                <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                  <Form.Label className={`f14 mb-0 ${styles1.font}`}>Mother Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter"
                    value={form.motherName}
                    name="motherName"
                    onChange={handleChange}
                    className={styles.textbox}
                  />
                </Col>
                <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                  <Form.Label className={`f14 mb-0 ${styles1.font}`}>Time Of Birth</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="Enter"
                    onChange={handleChange}
                    name="timeOfBirth"
                    value={form.timeOfBirth}
                    className={styles.textbox}
                  />
                </Col>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                  <Form.Label className={`f14 mb-0 ${styles1.font}`}>Age</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Age"
                    name="patientAge"
                    value={form.patientAge}
                    onChange={handleInputageChange}
                    className={styles.textbox}
                  />
                  <Form.Text className="text-danger">{form.formErrors.patientAge}</Form.Text>
                </Col>
              </React.Fragment>
            )}
            <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
              <Form.Label className={`f14 mb-0 ${styles1.font}`}>Date Of Birth*</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter"
                value={form.patientDob}
                name="patientDob"
                onChange={handleChangeforDob}
                max={disableFutureDate()}
                onBlur={() => {
                  const isEmpty = !form.patientDob.trim();
                  setForm((prevForm) => ({
                    ...prevForm,
                    formErrors: { ...prevForm.formErrors, patientDob: isEmpty ? "Patient Dob cannot be empty" : "" }
                  }))
                }}
                className={styles.textbox}
              />
              <Form.Text className="text-danger">{form.formErrors.patientDob}</Form.Text>
            </Col>

          </Col>
          <Col
            xl={10}
            md={12}
            lg={12}
            sm={12}
            className="d-lg-flex align-items-center mt-4"
          >
            <Col md={12} lg={3} xl={3} className=" mt-3 pe-lg-5">
              <Form.Label className={`f14 mb-0 ${styles1.font}`}>Ethnicity</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className={styles.textbox}
                value={form.ethnicity}
                name="ethnicity"
                onChange={handleChange}
              >
                <option> select </option>
                {Ethencity.map((each, index) => {
                  return (
                    <option key={index} value={each.id}>{each.country}</option>
                  )
                })}
              </Form.Select>
            </Col>
            <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
              <Form.Label className={`f14 mb-0 ${styles1.font}`}>Occupation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter"
                value={form.patientOccupation}
                name={"patientOccupation"}
                onChange={handleChange}
                className={styles.textbox}
              />
            </Col>
            <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
              <Form.Label className={`f14 mb-0 ${styles1.font}`}>Reason</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter"
                name="reason"
                value={form.reason}
                onChange={handleChange}
                className={styles.textbox}
              />
            </Col>
            <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
              <Form.Label className={`f14 mb-0 ${styles1.font}`}>Case Type*</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className={styles.textbox}
                value={form.caseType}
                name="caseType"
                onChange={handleChange}
                onBlur={() => {
                  const isEmpty = !form.caseType
                  setForm((prevForm) => ({
                    ...prevForm,
                    formErrors: { ...prevForm.formErrors, caseType: isEmpty ? "case type  cannot be empty" : "" }
                  }))
                }}
              >
                {/* <option value={""}> select </option> */}
                {CaseTypes.map((each, index) => {
                  return (
                    <option key={index} value={each.id}>{each.title}</option>
                  )
                })}
              </Form.Select>
              <Form.Text className="text-danger">{form.formErrors.caseType}</Form.Text>

            </Col>
          </Col>
          <Col
            xl={10}
            md={12}
            lg={12}
            sm={12}
            className="d-lg-flex align-items-center mt-4">
            <Col md={12} lg={6} xl={6} className=" mt-3 pe-lg-5">
              <Form.Label className={`f14 mb-0 ${styles1.font}`}>Full Address</Form.Label>
              <Form.Control as="textarea" placeholder="Enter" rows="3" />
            </Col>
            <Col md={12} lg={6} xl={6} className="pe-lg-1 mt-3">
              {/* {!form.image ? */}
              <div className="d-flex">
                <React.Fragment>
                  <div className={`${styles.file_upload_box} mt-3`}>
                    {/* <Form.Control
                      name="image"
                      type="file"
                      className={styles1.fileinput}
                      onChange={(e) => handleChangeImage(e)}

                    /> */}
                    <div>
                      <div className='d-flex align-items-center pt-2 pb-1' onClick={uploadMoadl} role="button">
                        <div className={`${styles1.f50} text-center pt-1 f44`}><Image src={Logo3} alt="" width={80} height={80} className="pe-4" /></div>
                        <div className={`${styles1.font} f14 `}>Upload Files<br></br><span></span><span className='px-5  theme12'></span></div>
                        <div className={`${styles1.browse} ${styles1.font} f14`}></div>
                      </div>
                    </div>
                    <Form.Text className="text-success">{form.images && form.images.length > 0 ? form.images.length + "Files Uploaded" : ''}</Form.Text>
                  </div>
                </React.Fragment>
                {/* <React.Fragment>
                  {form.image && UploadImage &&
                    <React.Fragment>
                      {isDocumentUrl(UploadImage) ?
                        <div className="col mt-3 mx-2 rounded">
                          <a className="text-dark bg-primary text-center mx-2" href={UploadImage} target="_blank" role="button" title="Click to View Pdf">Click to View</a>
                        </div>
                        :
                        isImageUrl(UploadImage) ?
                          <img src={UploadImage} className="mt-3 mx-2 rounded" alt={"image"} width={123} height={100} /> : ""}
                      <i className="fal fa-trash-alt my-3 text-danger" role="button" onClick={HandleImageRemove}
                        style={{ position: "relative", right: "5px" }}
                      ></i>
                    </React.Fragment>
                  }
                </React.Fragment> */}
              </div>
              {/* :
                <span>
                  {form.image && UploadImage &&
                    <div>
                      <div className="bg3 rounded py-2 px-2" >
                        <a href={UploadImage} target="_blank" role="button">
                          <div className="f11">{form.image}</div>
                        </a>
                        <div className="row">
                          <div className="col-md-11">
                            <div className="mt-2 mb-3 ">
                              <ProgressBar variant="success" now={100} />
                            </div>
                          </div><div className="col-md-1">
                            <i className="fal fa-times" role="button" onClick={HandleImageRemove}></i></div></div></div>
                    </div>
                  }
                </span>} */}
            </Col>
          </Col >
        </section >
        <section id="section1">
          <div className={`d-md-flex pt-3 pb-3 mt-4 ${styles.bdrbtm}`}>
            <div className={`${styles.text1} ${styles1.font}`}><strong> Guardian Details </strong></div>
          </div>
          {form.guardianDetail.map((each, index) => {
            return (
              <Col key={index}
                xl={10}
                md={12}
                lg={12}
                sm={12}
                className="  mt-5">
                <div className={`font-weight-600 ${styles1.font}`}>{index === 0 ? "Primary" : "Secondary"} Contact </div>
                <div className="d-lg-flex">
                  <Col md={12} lg={5} xl={3} className=" mt-3 pe-lg-5">
                    <Form.Label className={`f14 mb-0 ${styles1.font}`}>Name*</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter"
                      className={styles.textbox}
                      name="guardian_name"
                      value={each.guardian_name}
                      onChange={(event) => handleChangeforArray(event, index)}
                      onBlur={() => {
                        const isEmpty = !each.guardian_name.trim();
                        setForm((prevForm) => ({
                          ...prevForm,
                          guardianDetail: prevForm.guardianDetail.map((item, idx) => ({
                            ...item,
                            nameerror: idx === index ? (isEmpty ? "Name cannot be empty" : "") : item.nameerror
                          }))
                        }));
                      }}
                    />
                    <Form.Text className="text-danger">{each.nameerror}</Form.Text>
                  </Col>
                  <Col md={12} lg={5} xl={3} className="pe-lg-5 mt-3" key={index}>
                    <Form.Label className={`f14 mb-0 ${styles1.font}`}>Mobile No*</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter"
                      className={styles.textbox}
                      name="guardian_mobile"
                      value={each.guardian_mobile}
                      onChange={(event) => handleChangeforArrayMobile(event, index)}
                      onBlur={() => {
                        const isEmpty = !each.guardian_mobile.trim();
                        setForm((prevForm) => ({
                          ...prevForm,
                          guardianDetail: prevForm.guardianDetail.map((item, idx) => ({
                            ...item,
                            mobileerror: idx === index ? (isEmpty ? "Mobile number cannot be empty" : "") : item.mobileerror
                          }))
                        }));
                      }}
                    />
                    <Form.Text className="text-danger">{each.mobileerror}</Form.Text>
                  </Col>
                  <Col md={12} lg={5} xl={3} className="pe-lg-5 mt-3" key={index}>
                    <Form.Label className={`f14 mb-0 ${styles1.font}`}>Relation*</Form.Label>
                    <Form.Select
                      type="text"
                      placeholder="Enter"
                      className={styles.textbox}
                      name="guardian_relation"
                      value={each.guardian_relation}
                      onChange={(event) => handleChangeforArrayRelation(event, index)}
                      onBlur={() => {
                        const isEmpty = !each.guardian_relation.trim();
                        setForm((prevForm) => ({
                          ...prevForm,
                          guardianDetail: prevForm.guardianDetail.map((item, idx) => ({
                            ...item,
                            relationerror: idx === index ? (isEmpty ? "Relation cannot be empty" : "") : item.relationerror
                          }))
                        }));
                      }}
                    >
                      <option value={""}>Select</option>
                      {GETRELATION.map((each, index) => {
                        return (
                          <option value={each.id} key={index + 1}>{each.relation}</option>
                        )
                      })}
                    </Form.Select>
                    <Form.Text className="text-danger">{each.relationerror}</Form.Text>
                  </Col>
                  <Col className="pe-lg-5 mt-3" md={12} lg={5} xl={3} >
                    {index !== 0 ? (
                      <div className="mt-4">
                        <i className="fal fa-trash-alt mt-2" role="button" onClick={secondaryDetailsDelete}></i>
                      </div>
                    ) : null}
                  </Col>
                </div>
                {form.guardianDetail && form.guardianDetail.length > 1 ? (
                  ""
                ) : (
                  <div className={`theme9 mt-4 ms-4 mb-5 ${styles1.font}`} >
                    <span role="button" onClick={SendaryContactAdd}>
                      Add Secondary Contact details
                    </span>
                  </div>
                )}
              </Col>
            )
          })}
        </section>
        <section id="section2">
          <div className={`d-md-flex pt-3 pb-3 ${styles.bdrbtm}`}>
            <div className={`${`${styles.text1} ${styles1.font}`} ${styles1.font} mt-4`}><strong> Bed Location </strong></div>
          </div>
          <Col
            xl={12}
            md={12}
            lg={12}
            sm={12}
            className={`mt-5 ${styles.pe_7}`}>
            <div className={`font-weight-500 mb-3 ${styles1.font}`}>Bed Availability</div>
            <Row>
              {DisplayBedTypes.map((each, index) => {
                return (
                  <Col md={4} xl={2} lg={3} sm={6} xs={12}>
                    <div className={`${styles.btmbdr1} px-2 py-3 mb-3`}>
                      <div className={`${styles.f14} ${styles1.font}`}>{each.Title}</div>
                      <div className={`${styles.f20} ${styles1.font}`}>{each.availableBeds}</div>
                    </div>
                  </Col>
                )
              })}

              {/* <Col md={4} xl={2} lg={3} sm={6} xs={12}>
                <div className={`${styles.btmbdr1} px-2 py-3 mb-3`}>
                  <div className={`${styles.f14} ${styles1.font}`}>A/C Rooms</div>
                  <div className={`${styles.f20} ${styles1.font}`}>251</div>
                </div>
              </Col>
              <Col md={4} xl={2} lg={3} sm={6} xs={12}>
                <div className={`${styles.btmbdr1} px-2 py-3 mb-3`}>
                  <div className={`${styles.f14} ${styles1.font}`}>Non A/C Rooms</div>
                  <div className={`${styles.f20} ${styles1.font}`}>1351</div>
                </div>
              </Col>
              <Col md={4} xl={2} lg={3} sm={6} xs={12}>
                <div className={`${styles.btmbdr1} px-2 py-3 mb-3`}>
                  <div className={`${styles.f14} ${styles1.font}`}>A/C Ward Beds</div>
                  <div className={`${styles.f20} ${styles1.font}`}>25</div>
                </div>
              </Col>
              <Col md={4} xl={2} lg={3} sm={6} xs={12}>
                <div className={`${styles.btmbdr1} px-2 py-3 mb-3`}>
                  <div className={`${styles.f14} ${styles1.font}`}>Non A/C Ward Beds</div>
                  <div className={`${styles.f20} ${styles1.font}`}>1351</div>
                </div>
              </Col>
              <Col md={4} xl={2} lg={3} sm={6} xs={12}>
                <div className={`${styles.btmbdr1} px-2 py-3 mb-3`}>
                  <div className={`${styles.f14} ${styles1.font}`}>General Ward Beds</div>
                  <div className={`${styles.f20} ${styles1.font}`}>400</div>
                </div>
              </Col>
              <Col md={4} xl={2} lg={3} sm={6} xs={12}>
                <div className={`${styles.btmbdr1} px-2 py-3 mb-3`}>
                  <div className={`${styles.f14} ${styles1.font}`}>ICU Beds</div>
                  <div className={`${styles.f20} ${styles1.font}`}>160</div>
                </div>
              </Col>
              <Col md={4} xl={2} lg={3} sm={6} xs={12}>
                <div className={`${styles.btmbdr1} px-2 py-3 mb-3`}>
                  <div className={`${styles.f14} ${styles1.font}`}>IMCU Beds</div>
                  <div className={`${styles.f20} ${styles1.font}`}>1351</div>
                </div>
              </Col>
              <Col md={4} xl={2} lg={3} sm={6} xs={12}>
                <div className={`${styles.btmbdr1} px-2 py-3 mb-3`}>
                  <div className={`${styles.f14} ${styles1.font}`}>Emergency Beds</div>
                  <div className={`${styles.f20} ${styles1.font}`}>130</div>
                </div>
              </Col>
              <Col md={4} xl={2} lg={3} sm={6} xs={12}>
                <div className={`${styles.btmbdr1} px-2 py-3 mb-3`}>
                  <div className={`${styles.f14} ${styles1.font}`}>OT Beds</div>
                  <div className={`${styles.f20} ${styles1.font}`}>0/12</div>
                </div>
              </Col> */}
            </Row>
          </Col>
          <Col xl={10}
            md={12}
            lg={12}
            sm={12}
            className="mt-4" >
            <div className="d-lg-flex">
              {/* <Col md={12} lg={3} xl={3} className=" mt-3 pe-lg-5">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Department</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className={styles.textbox}>
                  <option> select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col> */}
              <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Block</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className={styles.textbox}
                  value={pform.block}
                  name="block"
                  onChange={handleChangeforBlock}
                >
                  <option value="0" className="d-none"> select </option>
                  {BlockData.map((each, idx) => {
                    return (
                      <option value={each.id}>{each.block_name}</option>
                    )
                  })}
                </Form.Select>
              </Col>
              <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Floor</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className={styles.textbox}
                  value={pform.floor}
                  name="floor"
                  onChange={handleChangeforFloor}
                >
                  <option value="0" className="d-none"> select </option>
                  {FloorData.map((each, idx) => {
                    return (
                      <option value={each.id} key={idx}>{each.floor_name}</option>
                    )
                  })}
                </Form.Select>
              </Col>
              <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Department</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className={styles.textbox}
                  value={pform.department}
                  name="department"
                  onChange={handleChangeforWardDep}
                >
                  <option value="0" className="d-none"> select </option>
                  {AllDepartments.map((each, idx) => {
                    return (
                      <option value={each.id} key={idx}>{each.department}</option>
                    )
                  })}
                </Form.Select>
              </Col>
            </div>
            <div className="d-lg-flex">

              <Col md={12} lg={3} xl={3} className=" mt-3 pe-lg-5">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Ward</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className={styles.textbox}
                  value={pform.ward}
                  name="ward"
                  onChange={handleChangeforWard}
                >
                  <option value="0" className="d-none"> select </option>
                  {WardData.map((each, idx) => {
                    return (
                      <option value={each.id} key={idx}>{each.ward_name}</option>
                    )
                  })}
                </Form.Select>
              </Col>
              <Col md={12} lg={3} xl={3} className=" mt-3 pe-lg-5">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Bed Type</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className={styles.textbox}
                  value={pform.bedType}
                  name="bedType"
                  onChange={handleChangeforWardandBedType}
                >
                  <option value="0" className="d-none"> select </option>
                  {BedTypes.map((each, idx) => {
                    return (
                      <option value={each.id} key={idx}>{each.Title}</option>
                    )
                  })}
                </Form.Select>
              </Col>
              <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Bed No</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleChange}
                  name="bedId"
                  value={form.bedId}
                  className={styles.textbox}>
                  <option value="0" className="d-none"> select </option>
                  {BedData.map((each, idx) => {
                    return (
                      <option value={each.id} key={idx}>{each.bed_number}</option>
                    )
                  })}
                </Form.Select>
                {/* <Form.Text className="text-danger">{form.formErrors.bedId}</Form.Text> */}
              </Col>
            </div>
          </Col>
        </section>
        <section id="section3">
          <div className={`d-md-flex pt-3 pb-3 mt-5 ${styles.bdrbtm}`}>
            <div className={`${`${styles.text1} ${styles1.font}`} ${styles1.font} `}><strong> Doctor Details </strong></div>
          </div>
          {form.DoctorDetails.map((each, index) => {
            const selectedDepartment = selectedDepartments[index];
            const filteredDoctors = DoctorsDetails.filter((doctor) => doctor.departmentId == selectedDepartment) || [];
            return (
              <Col
                xl={10}
                md={12}
                lg={12}
                sm={12}
                className="mt-4" >
                <div className="d-lg-flex mt-3">
                  <Col md={12} lg={3} xl={3} className=" mt-3 pe-lg-5">
                    <Form.Label className={`f14 mb-0 ${styles1.font}`}>Department*</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className={styles.textbox}
                      onChange={(event) => handleChangeforArrayDepartment(event, index)}
                      name="department"
                      value={each.department}
                      onBlur={() => {
                        const isEmpty = !each.department || each.department == 0;
                        setForm((prevForm) => ({
                          ...prevForm,
                          DoctorDetails: prevForm.DoctorDetails.map((item, idx) => ({
                            ...item,
                            departmenterror: idx === index ? (isEmpty ? "Department cannot be empty" : "") : item.departmenterror
                          }))
                        }));
                      }}
                    >
                      <option value={0}> select </option>
                      {Departments.map((item, index) => {
                        return (
                          <option key={index} value={item.id}>{item.department}</option>
                        )
                      })}
                    </Form.Select>
                    <Form.Text className="text-danger">{each.departmenterror}</Form.Text>
                  </Col>
                  <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                    <Form.Label className={`f14 mb-0 ${styles1.font}`}>Doctor*</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className={styles.textbox}
                      onChange={(event) => handleChangeforArrayDoctor(event, index)}
                      name="doctor"
                      value={each.doctor}
                      onBlur={() => {
                        const isEmpty = !each.doctor || each.doctor == 0;
                        setForm((prevForm) => ({
                          ...prevForm,
                          DoctorDetails: prevForm.DoctorDetails.map((item, idx) => ({
                            ...item,
                            doctorerror: idx === index ? (isEmpty ? "Doctor cannot be empty" : "") : item.doctorerror
                          }))
                        }));
                      }}
                    >
                      <option value={0}> select </option>
                      {filteredDoctors.map((foritem, index) => {
                        return (
                          <option key={index} uname={foritem.username} className={form.DoctorDetails.some((item, idx) => item.doctor == foritem.id) ? "d-none" : ""} value={foritem.id}>{foritem.name}</option>
                        )
                      })}
                    </Form.Select>
                    <Form.Text className="text-danger">{each.doctorerror}</Form.Text>
                    <Form.Text className="text-danger">{each.maindoctorchecking}</Form.Text>
                  </Col>
                  <Col md={6} lg={2} xl={2} className="pe-lg-3 mt-3">
                    <Form.Label className={`f14 mb-0 ${styles1.font}`}>Main Doctor*</Form.Label>
                    <Form.Check // prettier-ignore
                      className="my-2 mx-4"
                      name="mainDoctor"
                      value={each.maindoctor}
                      doctorid={each.id}
                      checked={each.maindoctor == 1 ? true : false}
                      onChange={(event) => handleChangeforArrayMainDoctor(event, index)}
                    />
                    <Form.Text className="text-danger">{each.maindoctorerror}</Form.Text>
                  </Col>
                  <Col md={6} lg={2} xl={2} className="pe-lg-5 mt-5">
                    <div className="">
                      {index ?
                        <i className="fal fa-trash-alt" role="button" onClick={() => removeDoctorDetails(index)}></i>
                        : ""}
                    </div>
                  </Col>
                </div>
              </Col>
            )
          })}
          <div className={`theme9 mt-4 ms-4 mb-5 ${styles1.font}`}>
            <span role="button" onClick={addmoreDoctorDetails}>
              Add more Doctor Details
            </span>
          </div>
          <Col
            xl={10}
            md={12}
            lg={12}
            sm={12}
            className="mt-4" >
            <div className="d-lg-flex mt-3">
              {/* <Col md={12} lg={3} xl={3} className=" mt-3 pe-lg-5">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Department*</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className={styles.textbox}
                  onChange={handleChangeforDepartment}
                  name="department"
                  value={form.department}
                  onBlur={() => {
                    const isEmpty = form.department > 0;
                    setForm((prevForm) => ({
                      ...prevForm,
                      formErrors: { ...prevForm.formErrors, department: isEmpty ? "" : "department cannot be empty" }
                    }))
                  }}
                >
                  <option value={0}> select </option>
                  {Departments.map((each, index) => {
                    return (
                      <option key={index} value={each.id}>{each.department}</option>
                    )
                  })}
                </Form.Select>
                <Form.Text className="text-danger">{form.formErrors.department}</Form.Text>
              </Col> */}
              {/* <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Doctor*</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className={styles.textbox}
                  onChange={handleChangeforDoctor}
                  name="doctor"
                  value={form.doctor}
                  onBlur={() => {
                    const isEmpty = form.doctor > 0;
                    setForm((prevForm) => ({
                      ...prevForm,
                      formErrors: { ...prevForm.formErrors, doctor: isEmpty ? "" : "doctor cannot be empty" }
                    }))
                  }}
                >
                  <option> select </option>
                  {Doctors.map((each, index) => {
                    return (
                      <option key={index} value={each.id} uname={each.username}>{each.name}</option>
                    )
                  })}
                </Form.Select>
                <Form.Text className="text-danger">{form.formErrors.doctor}</Form.Text>
              </Col> */}

              {/* <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Services*</Form.Label>
                <Form.Select
                  value={form.serviceType}
                  name="serviceType"
                  className={styles.textbox}

                  onChange={handleChange}
                  onBlur={() => {
                    const isEmpty = form.serviceType;
                    setForm((prevForm) => ({
                      ...prevForm,
                      formErrors: { ...prevForm.formErrors, serviceType: isEmpty ? "" : "Service cannot be empty" }
                    }))
                  }}
                >
                  <>
                    {DoctorAvialble ?
                      <option className="d-none">Select Service</option>
                      :
                      <option className="d-none" disabled>Doctor Not Available</option>
                    }
                    {FilterDuplicateServices && FilterDuplicateServices.map((item, index) => (
                      <option value={parseInt(item.serid)} key={index}>{item.sertext}</option>
                    ))}
                  </>
                </Form.Select>
                <Form.Text className="text-danger">{form.formErrors.serviceType}</Form.Text>
              </Col> */}
            </div>
          </Col>
          <Col
            xl={10}
            md={12}
            lg={12}
            sm={12}
            className="mt-0" >
            <div className="d-lg-flex">
              <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Admission Date*</Form.Label>
                <Form.Control
                  aria-label="Default select example"
                  className={styles.textbox}
                  onChange={handleChangeformDate}
                  name="appointmentDate"
                  min={disablePastDate()}
                  type="date"
                  value={form.appointmentDate}
                  onBlur={() => {
                    const isEmpty = form.appointmentDate;
                    setForm((prevForm) => ({
                      ...prevForm,
                      formErrors: { ...prevForm.formErrors, appointmentDate: isEmpty ? "" : "appointment Date cannot be empty" }
                    }))
                  }}
                />

                <Form.Text className="text-danger">{form.formErrors.appointmentDate}</Form.Text>
              </Col>
              <Col md={12} lg={3} xl={3} className=" mt-3 pe-lg-5">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Referral Name</Form.Label>
                <Form.Control
                  type="text" placeholder="Enter"
                  onChange={handleChange}
                  value={form.referredName}
                  name="referredName"
                  className={styles.textbox}
                ></Form.Control>
              </Col>
              <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Mobile No</Form.Label>
                <Form.Control
                  type="text" placeholder="Enter"
                  onChange={handleChangeforMobile}
                  value={form.referredMobile}
                  name="referredMobile"
                  className={styles.textbox}
                ></Form.Control>
              </Col>
            </div>
          </Col>
        </section>
        <section id="section4" className="pb-5">
          <div className={`d-md-flex pt-3 pb-3 mt-5 ${styles.bdrbtm}`}>
            <div className={`${`${styles.text1} ${styles1.font}`} ${styles1.font}`}><strong> Insurance  Details </strong></div>
          </div>
          <Col
            xl={10}
            md={12}
            lg={12}
            sm={12}
            className="mt-4 pb-5">
            <div className="d-lg-flex">
              <Col md={12} lg={3} xl={3} className=" mt-3 pe-lg-5">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Organisation</Form.Label>
                <Form.Control
                  type="text" placeholder="Enter"
                  className={styles.textbox}
                  value={form.organisation}
                  name="organisation"
                  onChange={handleChange}
                ></Form.Control>
              </Col>
              <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Corp Employee</Form.Label>
                <Form.Control
                  type="text" placeholder="Enter"
                  className={styles.textbox}
                  value={form.corpEmployee}
                  name="corpEmployee"
                  onChange={handleChange}
                ></Form.Control>
              </Col>
              <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Insurance Provider</Form.Label>
                <Form.Select
                  name="insuranceProvider"
                  value={form.insuranceProvider}
                  onChange={handleChange}
                  type="text" placeholder="Enter"
                  className={styles.textbox}>
                  <option value={0}>Select</option>
                  {Insurances.map((each, idx) => {
                    return (
                      <option value={each.id} key={idx}>{each.tittle}</option>
                    )
                  })}
                </Form.Select>
              </Col>
            </div>
            <div className="d-lg-flex">
              <Col md={12} lg={3} xl={3} className=" mt-3 pe-lg-5">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Employee Policy</Form.Label>
                <Form.Control
                  type="text" placeholder="Enter"
                  name="employeePolicy"
                  value={form.employeePolicy}
                  onChange={handleChange}
                  className={styles.textbox}
                ></Form.Control>
              </Col>
              <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Service No</Form.Label>
                <Form.Control
                  type="text" placeholder="Enter"
                  className={styles.textbox}
                  name="serviceNo"
                  value={form.serviceNo}
                  onChange={handleChange}
                ></Form.Control>
              </Col>

            </div>
            <div className="d-lg-flex">
              <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Card Holder Name</Form.Label>
                <Form.Control
                  type="text" placeholder="Enter"
                  className={styles.textbox}
                  name="cardHolderName"
                  onChange={handleChange}
                  value={form.cardHolderName}
                ></Form.Control>
              </Col>
              <Col md={12} lg={3} xl={3} className="pe-lg-5 mt-3">
                <Form.Label className={`f14 mb-0 ${styles1.font}`}>Relationship</Form.Label>
                <Form.Select
                  type="text"
                  name="relationship"
                  value={form.relationship}
                  onChange={handleChange}
                  className={styles.textbox} >
                  <option value={0}>Select</option>
                  {Relations.map((each, idx) => {
                    return (
                      <option key={idx} value={each.id}>{each.relation}</option>
                    )
                  })}

                </Form.Select>
              </Col>
            </div>
          </Col>
          <div className="d-flex mt-3 mb-3">
            <Col md={6}>
            </Col>
            <Col md={6} xs={12} className="text-end d-flex justify-content-end">
              <Button type="submit" className={`${styles.previous} ${styles1.font}`} onClick={handleClearFormsData}>Cancel</Button>
              <Button type="submit" className={`${styles.next} ${styles1.font} ms-3`} disabled={disableloading} onClick={handlePatientRegistration}>Admit</Button>
            </Col>
          </div>
        </section>
      </div >
      <Modal show={show} onHide={uploadCloseModal} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered id="md3">
        <Modal.Header closeButton className='bdr2'>
          <Modal.Title>Upload files</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={4} className={`mt-4 ${styles1.bdr3} mx-3`}>
              <Row className="p-2 mt-4" key={""}>
                <Col md={8} xs={8} className="px-3">
                  <div className="f12 theme12">File Name</div>
                </Col>
                <Col md={4} xs={4} className="text-center">
                  <div className="f12 theme12">Actions</div>
                </Col>
              </Row>
              {form.images && form.images.length > 0 ? "" :
                <Row className="p-2 mt-4" key={""}>
                  <Col md={8} xs={8} className="px-3">
                    <div className="f12 theme12">No Files Uploaded</div>
                  </Col>
                </Row>}

              {form.images.map((each, index) => {
                const ViewImage = `${process.env.NEXT_PUBLIC_UPLOAD_FILE}/files1/` + each.image
                return (
                  <Row className="p-2 mt-4" key={index}>
                    <Col md={8} xs={8} className="f12">
                      <div className="mt-1">
                        {each.image}
                      </div>
                    </Col>
                    <Col md={4} className="text-center">
                      <span
                        className=""
                        role="button"
                        onClick={(e) => removeRowImage(e, index)}
                      >
                        <i className="fal fa-trash f11 "></i>
                      </span>
                      <a
                        className="ms-2"
                        href={ViewImage}
                        target="_blank"
                        role="button"
                        rel="noreferrer"
                      >
                        <i
                          className="fal fa-download f11"
                          href={ViewImage}
                          target="_blank"
                        ></i>
                      </a>
                    </Col>
                  </Row>
                )
              })}
            </Col>
            <Col md={7} className={`${styles1.bg4} mt-4 rounded mx-3`}>
              <span className={"text-danger"}>{form.submitError1} </span>
              {form.detailsarray.map((item, index) => {
                return (
                  <Row key={index}>
                    <Col md={8} xs={12} className="ps-0">
                      <div className="p-2">
                        <div className="f12 ">Document {index + 1}</div>
                        <div className="pt-3 d-flex">
                          <Col md={12} className="">
                            <Form.Label className="f13 mb-0">
                              Upload File
                            </Form.Label>
                            <Form.Control
                              type="file"
                              name="image"
                              onChange={(e) => handleChangeImage(e, index, "image")}
                              placeholder="Select"
                              style={{ fontSize: "0.9rem" }}
                            />
                          </Col>
                        </div>
                      </div>
                    </Col>
                    <Col md={4} xs={4} className="text-end">
                      <div className="pt-3 px-3">
                        {index != 0 ? (
                          <div
                            className="f13 text-danger"
                            role="button"
                            onClick={() => removeRow(index)}
                          >
                            Delete file
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </Col>
                    <Col md={12}>
                      <small className="text-danger mx-3"> {item.error}</small>
                    </Col>
                  </Row>
                );
              })}
              <div
                className="f13 text-success mx-3 pb-3 my-3"
                style={{ fontSize: "13px" }}
                role="button"
                onClick={addRow}
              >
                Add file
              </div>
            </Col>

          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button className={`${styles.previous} ${styles1.font}`} onClick={uploadCloseModal}>Cancel</Button>
          <Button type="submit" className={`${styles.next} ${styles1.font} ms-3`} onClick={uplaodImages}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment >
  );
};
export default PatientRegistration;
