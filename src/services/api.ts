import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_BIRDEYE_BASE_URL || "https://public-api.birdeye.so";

export const birdeyeApi = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    accept: "application/json",
    "X-API-KEY": process.env.NEXT_PUBLIC_BIRDEYE_API_KEY || "",
  },
});

birdeyeApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Birdeye API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  },
);
