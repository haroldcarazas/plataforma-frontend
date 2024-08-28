import { mainAPI } from './authApi';

export const getExamenesByCurso = async (cursoId, token) => {
  const res = await mainAPI.get(`/api/examenes/curso/${cursoId}`, {
    headers: { Authorization: token },
  });
  return res.data;
};

export const getExamenById = async (examenId, token) => {
  const res = await mainAPI.get(`/api/examenes/${examenId}`, {
    headers: { Authorization: token },
  });
  return res.data;
};

export const sendRespuestaExamen = async (data, token) => {
  const res = await mainAPI.post('/api/respuestas', data, {
    headers: { Authorization: token },
  });
  return res.data;
};
