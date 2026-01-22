import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// LOGIN
export const loginUser = (data) => {
  return API.post("/auth/login", data);
};

// SIGNUP
export const signupUser = (data) => {
  return API.post("/auth/signup", data);
};
