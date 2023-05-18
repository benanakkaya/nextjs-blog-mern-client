"use client"
import React from "react";
import { ToastContainer } from "react-toastify";

const Toast = () => {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default Toast;
