"use client";
import { GetPopularPosts } from "@/app/services/PostServices";
import React from "react";
import Slider from "react-slick";
import CarauselItem from "./components/CarauselItem";

const Carausel = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const GetPosts = async () => {
      const posts = await GetPopularPosts();
      setPosts(posts);
    };
    GetPosts();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="h-[240px] sm:h-[400px] bg-gray-400 " {...settings}>
      {posts.map((post) => (
        <CarauselItem post={post} />
      ))}
    </Slider>
  );
};

export default Carausel;
