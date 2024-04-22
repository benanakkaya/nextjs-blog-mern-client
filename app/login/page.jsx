"use client";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import cookie from 'js-cookie';
import { UserContext } from "../context/User";


const LoginPage = () => {

  const { isLogged,setIsLogged } = useContext(UserContext);


    const router = useRouter();

    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        const userValues= {email: values.email, password: values.password};
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, userValues).then((res) => {
          toast.success(res.data.message);
          setIsLogged(true);
          cookie.set('token', res.data.token)
          router.push("/")
        }).catch(err => {
          toast.error(err.response.data.message)
        })
      },
      validationSchema: yup.object({
        email: yup.string().email("Invalid email").required("Email is required"),
      }),
    });

  return (
    <div className="flex flex-col gap-6">
      <div className="p-2 col-span-2 rounded-lg flex items-center gap-2 font-bold text-lg h-[43.95px] bg-customGreen text-white shadow-lg shadow-gray-400">
        Login
      </div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
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
            <small className="text-sm text-red-400">{formik.errors.email}</small>
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
            <small className="text-sm text-red-400">{formik.errors.password}</small>
          )}
        </label>
        <button type="submit" className="px-2 py-1 bg-customGreen text-white font-bold rounded-lg hover:bg-opacity-75">
            Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
