"use client";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import * as yup from "yup";

const Register = () => {
  const [status, setStatus] = useState("idle");

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      password2: "",
    },
    onSubmit: async (values) => {
      const userValues = {
        username: values.username,
        email: values.email,
        password: values.password,
      };
      const res = await axios
        .post("http://localhost:5000/user/register", userValues)
        .then((res) => {
          toast.success(res.data.message);
          router.push("/login");
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    },
    validationSchema: yup.object({
      username: yup.string().required("Username is required"),
      email: yup.string().email("Invalid email").required("Email is required"),
      password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      password2: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="p-2 col-span-2 rounded-lg flex items-center gap-2 font-bold text-xl h-[43.95px] bg-customGreen text-white shadow-lg shadow-gray-400">
        Register
      </div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <label className="w-full flex flex-col justify-center gap-2 text-lg">
          Username:
          <input
            placeholder="Username..."
            onBlur={formik.handleBlur}
            className="w-full px-2 py-1 rounded-lg border-[1px] border-customGreen outline-none"
            type="text"
            name="username"
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name && (
            <small className="text-sm text-red-400">{formik.errors.name}</small>
          )}
        </label>
        <label className="w-full flex flex-col justify-center gap-2 text-lg">
          E-mail:
          <input
            placeholder="name@mail.com"
            onBlur={formik.handleBlur}
            className="w-full px-2 py-1 rounded-lg border-[1px] border-customGreen outline-none"
            type="email"
            name="email"
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <small className="text-sm text-red-400">
              {formik.errors.email}
            </small>
          )}
        </label>
        <label className="w-full flex flex-col justify-center gap-2 text-lg">
          Password:
          <input
            placeholder="●●●●●●●"
            onBlur={formik.handleBlur}
            className="w-full px-2 py-1 rounded-lg border-[1px] border-customGreen outline-none"
            type="password"
            name="password"
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <small className="text-sm text-red-400">
              {formik.errors.password}
            </small>
          )}
        </label>
        <label className="w-full flex flex-col justify-center gap-2 text-lg">
          Password (repeat):
          <input
            placeholder="●●●●●●●"
            onBlur={formik.handleBlur}
            className="w-full px-2 py-1 rounded-lg border-[1px] border-customGreen outline-none"
            type="password"
            name="password2"
            onChange={formik.handleChange}
          />
          {formik.errors.password2 && formik.touched.password2 && (
            <small className="text-sm text-red-400">
              {formik.errors.password2}
            </small>
          )}
        </label>
        <button
          type="submit"
          className="px-2 py-1 bg-customGreen text-white font-bold rounded-lg"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
