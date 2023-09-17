import React from "react";
import Prescription_edit from "../components/admin/prescriptions/Prescription_edit";
import Prescription_Navbar from "../components/admin/prescriptions/Prescription_Navbar";
const prescription_edit = () => {
  return (
    <div>
      <Prescription_Navbar/>
      <Prescription_edit />
    </div>
  );
};

export default prescription_edit;
