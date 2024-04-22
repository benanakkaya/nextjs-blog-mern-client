import axios from "axios"


export const GetCategories = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category/get-categories`);
        return  res.data;
}

export const GetCategory = async (categoryID) => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category/get-category`, {
          params: {
            categoryID
          },
        });
        return res.data;
      }
      