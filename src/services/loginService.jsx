import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const createAccount = async (payload) => {
  const res = await axios.post(`${baseUrl}/api/signup`, payload);
  return res.data;
};

const getAccount = async (payload) => {
  const res = await axios.post(`${baseUrl}/api/login`, payload);
  return res.data;
};

export default { createAccount, getAccount };
