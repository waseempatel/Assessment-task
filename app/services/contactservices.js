import axios from "axios";
import config from "./config.json";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}${config.contact}`; // match controller

export async function sendContactForm(contact) {
  try {
    const response = await axios.post(`${API_URL}`, contact);
    return response.data;
  } catch (error) {
    console.error("Error sending contact form:", error.response?.data || error.message);
    throw error;
  }
}
