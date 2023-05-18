import axios from "axios"


export const GetCategories = async () => {
        const res = await axios.get("http://localhost:5000/category/get-categories");
        return res.data;
}

export const GetCategory = async (categoryID) => {
        const res = await axios.get("http://localhost:5000/category/get-category", {
          params: {
            categoryID
          },
        });
        return res.data;
      }
      