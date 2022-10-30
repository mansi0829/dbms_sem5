import axios from "axios";
import { email } from "./validators";
const token = localStorage.getItem("userinfo")

const backend = axios.create({
  baseURL: `${process.env.REACT_APP_ANTONS_API}`,
});

//auth

export const register = (data) => {
  return backend.post("/user/register/", data);
};

export const login = (data, config) => {
  return backend.post("/user/login/", data, config);
};

export const getUserByToken = (token) => {
  return backend.get("/user/profile/", {
    headers: { Authorization: `${token}` },
  });
};
