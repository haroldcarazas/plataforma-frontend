import axios from 'axios';

// export const mainAPI = axios.create({ baseURL: 'http://localhost:3000' });
export const mainAPI = axios.create({
  baseURL: 'https://plataforma-backend-tply.onrender.com',
});

export const login = async ({ username, password }) => {
  const res = await mainAPI.post('/api/auth/login', { username, password });
  return res.data;
};

export const getMyInformation = async token => {
  const res = await mainAPI.get('/api/auth/me', {
    headers: { Authorization: token },
  });
  return res.data;
};
