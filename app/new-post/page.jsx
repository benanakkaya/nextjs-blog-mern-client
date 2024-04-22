"use client";
import React, { useState,useEffect } from "react";
import { useFormik } from "formik";
import Cookies from "universal-cookie";
import { GetCategories } from "../services/CategoryServices";
import { CreateNewPost } from "../services/PostServices";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const NewPost = () => {
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState([]);

  const router = useRouter();


  useEffect(() => {
    const fetchCategories = async () => {
      const res = await GetCategories();
      setCategories(res);
    };
    fetchCategories();
  }, []);

  const handleContent = (e) => {
    setContent(e);
    formik.setFieldValue("content", content);
  };

  const cookies = new Cookies();

  const formik = useFormik({
    initialValues: {
      title: "",
      subtitle: "",
      category: "",
      content: "",
      image: "",
      author: cookies.get("token"),
    },
    onSubmit: async (values) => {
      await CreateNewPost(values).then((res) => {
        toast.success(res.message);
        router.push(`/post/${res.post._id}`);
      });
    },
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="p-2 col-span-2 rounded-lg font-bold text-lg bg-customGreen text-white shadow-lg shadow-gray-400">
        Create New Post
      </div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
        <input
          placeholder="Title"
          className="px-2 py-1 outline-none border-customGray border-[2px] rounded-lg"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <input
          placeholder="Subtitle"
          className="px-2 py-1 outline-none border-customGray border-[2px] rounded-lg"
          name="subtitle"
          onChange={formik.handleChange}
          value={formik.values.subtitle}
        />
        <input
          placeholder="Image (URL)"
          className="px-2 py-1 outline-none border-customGray border-[2px] rounded-lg"
          name="image"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        <select
          name="category"
          onChange={formik.handleChange}
          className="px-2 py-1 outline-none border-customGray border-[2px] rounded-lg"
        >
          <option selected disabled value="">
            Select a category
          </option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
        <ReactQuill
          onChange={(e) => handleContent(e)}
          theme="snow"
          value={content}
        />
        <button
          className=" bg-customGreen rounded-lg text-white py-1 hover:bg-opacity-75"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default NewPost;
