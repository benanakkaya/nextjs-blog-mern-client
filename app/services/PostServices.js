import axios from "axios";

export const CreateNewPost = async (values) => {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/post/new-post`, values);
  return res.data;
};

export const GetPost = async (postID) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post/get-post`, {
    params: {
      postID: postID,
    },
  });

  return res.data;
};

export const GetMyPosts = async (token) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post/get-my-posts`, {
    params: {
      token,
    },
  });

  return res.data;
};

export const GetLastPosts = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post/get-last-posts`);
  return res.data;
};


export const SetPostViews = (postID) => {
  const res = axios.post(`${process.env.NEXT_PUBLIC_API_URL}/post/set-post-views`,{postID});
};


export const GetPopularPosts = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post/get-popular-posts`);
  return res.data;
}

export const GetCategoryPosts = async (categoryID) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post/get-category-posts`, {
    params: {
      categoryID
    },
  });
  return res.data;
}


