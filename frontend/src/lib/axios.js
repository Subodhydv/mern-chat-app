import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "https://mern-chat-app-x0nm.onrender.com/api",
  withCredentials: true,
});