import { mainAPI } from './authApi';

export const getExamenesByCurso = async (cursoId, token) => {
  const res = await mainAPI.get(`/api/examenes/curso/${cursoId}`, {
    headers: { Authorization: token },
  });
  return res.data;
};
