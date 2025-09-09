import axios from "axios";
import config from "./config.json";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}${config.newsLetter}`;

export async function subscribeNewsLetter(email) {
  try {
    const response = await axios.post(`${API_URL}`, { email });
    return response.data;
  } catch (error) {
    console.error("Error subscribing:", error.response?.data || error.message);
    throw error;
  }
}
