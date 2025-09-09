import axios from "axios";

import config from "./config.json";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // backend URL

export async function getBlog() {
  try {
    const response = await axios.get(`${API_BASE_URL}${config.blog}`);
    console.log("Blog API Response:", response.data); // Debug
    return response.data;
  } catch (error) {
    console.error("Error fetching Blog data:", error);
    return [];
  }
}