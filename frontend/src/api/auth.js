import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// LOGIN
export const loginUser = (data) => {
  return API.post("/auth/login", data);
};

// SIGNUP
export const signupUser = (data) => {
  return API.post("/auth/signup", data);
};

export default API;
