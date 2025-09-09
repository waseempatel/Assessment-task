import axios from "axios";
import config from "./config.json";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // backend URL

export async function getFacts() {
  try {
    const response = await axios.get(`${API_BASE_URL}${config.facts}`);
    console.log("Facts API Response:", response.data); // Debugging log
    return response.data;
  } catch (error) {
    console.error("Error fetching Facts data:", error);
    return [];
  }
}