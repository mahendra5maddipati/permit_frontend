// client/src/api/permit.js
import axios from "axios";

const API_BASE = "https://permit-backend.onrender.com"; // replace with deployed backend later

export const assignRole = async (userEmail, role, workspaceId) => {
  return axios.post(`${API_BASE}/assign-role`, {
    userEmail, role, workspaceId,
  });
};

export const checkPermission = async (user, resource, action) => {
  const res = await axios.post(`${API_BASE}/check-permission`, {
    user, resource, action,
  });
  return res.data.allowed;
};
