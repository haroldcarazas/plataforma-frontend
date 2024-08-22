import axios from 'axios';

const authAPI = axios.create({ baseURL: 'http://localhost:3000' });

export const login = async ({ username, password }) => {
  console.log(username);
  console.log(password);
  const res = await authAPI.post('/api/auth/login', { username, password });
  return res.data;
};
