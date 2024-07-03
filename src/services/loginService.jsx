import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const createAccount = async (payload) => {
  const res = await axios.post(`${baseUrl}/api/signup`, payload);
  return res.data;
};

const checkUsername = async (username) => {
  const res = await axios.post(`${baseUrl}/api/signup/username`, { username });
  return res.data;
};

const checkEmail = async (email) => {
  const res = await axios.post(`${baseUrl}/api/signup/email`, { email });
  return res.data;
};

const getAccount = async (payload) => {
  const res = await axios.post(`${baseUrl}/api/login`, payload);
  return res.data;
};

const setCharacter = async (character, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const body = { character };
  const res = await axios.post(`${baseUrl}/api/character`, body, config);
  return res.data;
};

export default {
  createAccount, checkUsername, checkEmail, getAccount, setCharacter,
};
