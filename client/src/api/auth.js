import axios from "../services/axios";

export const login = async (credentials) => {
  const response = await axios.post("/user/login", credentials);
  return response.data;
};

export const register = async (data) => {
  const response = await axios.post("/user/register", data);
  return response.data;
};

export const fetchCurrentUser = async () => {
  const response = await axios.get("/auth/me");
  return response.data;
};
