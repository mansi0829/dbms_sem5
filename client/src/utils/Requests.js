import axios from "axios";

const backend = axios.create({
  baseURL: "http://localhost:8000/api",
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
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const uploadData = (data) => {
  return backend.get("/user/upload/", data);
};
