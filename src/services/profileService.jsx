import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const createTask = async (payload, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const res = await axios.post(`${baseUrl}/api/task`, payload, config);
  return res.data;
};

const getTasks = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const res = await axios.get(`${baseUrl}/api/task`, config);
  return res.data
}

const deleteTasks = async (payload, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    data: payload,
  };
  const res = await axios.delete(`${baseUrl}/api/task`, config);
  return res.data
}

export default { createTask, getTasks, deleteTasks }