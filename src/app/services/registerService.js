import { url } from "./apiConfig";
import React, { useState } from "react";
import { toast } from "react-toastify";


export async function register(data) {


  fetch(`${url}/signUp/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      "singUp": {
        "fullName": data.fullName,
        "username": data.username,
        "phoneNumber": data.phoneNumber,
        "email": data.email,
        "password": data.password

      }

    }),
  })

    .then((response) => {
      if (response.status === 200) {
        toast.success("Success!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          icon: "fa fa-check",
          title: "Success",
          className: "toast-success",
        });

        return response.json();
      } else {
        toast.error("Error!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          icon: "fa fa-times",
          title: "Error",
          className: "toast-error",
        });
        throw new Error("Something went wrong on API server!");
      }
    })
    .then((response) => {
      console.debug(response);
      // …
    })
    .catch((error) => {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "fa fa-exclamation-triangle",
        title: "Error",
        className: "toast-warning",
      });
      console.error(error);
    });
}