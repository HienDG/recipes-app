import axios from "axios";

import { API_URL, API_KEY } from "./constants";

const request = axios.create({
   baseURL: API_URL,
});

export const getAllRecipe = async (path, option) => {
   const response = await request.get(path, {
      params: {
         ...option,
         key: API_KEY,
      },
   });
   const data = await response.data;
   return data.data;
};
