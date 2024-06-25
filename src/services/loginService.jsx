import axios from 'axios';

const baseUrl = 'BACKEND URL';

const createAccount = async (payload) => {
  const res = await axios.post(`${baseUrl}/FROM BACKEND`, payload);
  return res.data;
};

const getAccount = async (payload) => {
  const res = await axios.post(`${baseUrl}/FROM BACKEND`, payload);
  return res.data;
};

export default { createAccount, getAccount };
