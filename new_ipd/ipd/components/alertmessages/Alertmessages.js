import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showMessage = (message, type) => {

  try {
    if (message && type) {
      toast[type](message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1800,
        draggable: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "light",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const AlertMessage = () => {
  return (
    <div className="App">
      <ToastContainer
        theme="colored"
        autoClose={1800}
        limit={1}
        position="top-right"
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
      />
    </div>
  );
};

export default AlertMessage;
