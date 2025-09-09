import axios from "axios";
import config from "./config.json";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // backend URL

export async function getFeature() {
  try {
    const response = await axios.get(`${API_BASE_URL}${config.features}`);
    console.log("Feature API Response:", response.data); // Debug
    return response.data;
  } catch (error) {
    console.error("Error fetching Feature data:", error);
    return [];
  }
}