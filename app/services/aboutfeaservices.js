import axios from "axios";
import config from "./config.json";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // backend URL

export async function getAboutFeatures() {
  try {
    const response = await axios.get(`${API_BASE_URL}${config.aboutfeatures}`);
    console.log("AboutFeatures API Response:", response.data); // Debug
    return response.data;
  } catch (error) {
    console.error("Error fetching AboutFeatures data:", error);
    return [];
  }
}