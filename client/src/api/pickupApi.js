import axios from "./axiosInstance";

export const createPickup = async (pickupData) => {
  const res = await axios.post("/pickups", pickupData);
  return res.data.pickup;
};

export const getMyPickups = async () => {
  const res = await axios.get("/pickups/my");
  return res.data;
};

export const getAllPickups = async () => {
  const res = await axios.get("/pickups");
  return res.data;
};

export const updatePickupStatus = async (pickupId, updateData) => {
  const res = await axios.put(`/pickups/${pickupId}/status`, updateData);
  return res.data.updatedPickup;
};

export const deletePickup = async (pickupId) => {
  const res = await axios.delete(`/pickups/${pickupId}`);
  return res.data;
};
