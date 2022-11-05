import axios from "axios";

import { API_URL, API_KEY } from "./constants";

const request = axios.create({
  baseURL: API_URL,
});

const API_FIREBASE =
  "https://react-accounts-28e16-default-rtdb.asia-southeast1.firebasedatabase.app/bookmarks";

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

export const requestBookmarkRecipe = async (path, value = null, method = "GET") => {
  const url = `${API_FIREBASE}/${path}.json`;
  const res = await fetch(url, {
    method: method,
    body: JSON.stringify(value),
  });
  const data = await res.json();
  return data;
};

export const getAllBookmark = async () => {
  const url = `${API_FIREBASE}.json`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
