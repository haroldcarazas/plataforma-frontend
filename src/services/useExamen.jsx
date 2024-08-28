import { useMutation, useQuery } from '@tanstack/react-query';
import { getExamenById, sendRespuestaExamen } from '../api/examenesApi';
import authStore from './authStore';

function useExamen(id) {
  const authToken = authStore(state => state.authToken);

  const { data, isLoading } = useQuery({
    queryKey: ['examen'],
    queryFn: () => getExamenById(id, authToken),
  });

  const examenMutation = useMutation({
    mutationKey: ['examen'],
    mutationFn: data => sendRespuestaExamen(data, authToken),
    onSuccess: res => {
      alert(res.message);
      console.log(res);
    },
    onError: res => {
      alert('Error al enviar la respuesta');
      console.log(res);
    },
  });

  return { data, isLoading, examenMutation };
}

export default useExamen;
