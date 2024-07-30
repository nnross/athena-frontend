import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const createTask = async (payload, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const res = await axios.post(`${baseUrl}/api/task`, payload, config);
  return res.data;
};

export default { createTask }