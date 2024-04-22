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
    <div className="h-[240px] sm:h-[400px] bg-gray-400 overflow-hidden" >
    <Slider {...settings}>
      {posts.map((post) => (
        <CarauselItem key={post._id} post={post} />
      ))}
    </Slider>
    </div>
  );
};

export default Carausel;
