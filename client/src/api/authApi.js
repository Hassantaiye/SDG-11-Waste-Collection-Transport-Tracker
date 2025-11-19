import axios from "./axiosInstance";

// Save token helper
const saveToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
  }
};

// Register User
export const registerUser = async (userData) => {
  try {
    const res = await axios.post("/auth/register", userData);

    const user = res.data?.user;
    if (user?.token) saveToken(user.token);

    return user;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Login User
export const loginUser = async (credentials) => {
  try {
    const res = await axios.post("/auth/login", credentials);

    const user = res.data?.user;
    if (user?.token) saveToken(user.token);

    return user;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Get Logged-in User
export const getMeApi = async () => {
  try {
    const res = await axios.get("/auth/me");
    return res.data;
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
    }
    throw error.response?.data || error;
  }
};

// Logout User
export const logoutUser = () => {
  localStorage.removeItem("token");
};
