import axios from 'axios';

const authAPI = axios.create({ baseURL: 'http://localhost:3000' });

export const login = async ({ username, password }) => {
  const res = await authAPI.post('/api/auth/login', { username, password });
  return res.data;
};

export const getMyInformation = async token => {
  const res = await authAPI.get('/api/auth/me', {
    headers: { Authorization: token },
  });
  return res.data;
};
