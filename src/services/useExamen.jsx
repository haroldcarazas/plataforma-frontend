import { useQuery } from '@tanstack/react-query';
import { getExamenById } from '../api/examenesApi';
import authStore from './authStore';

function useExamen(id) {
  const authToken = authStore(state => state.authToken);
  const { data, isLoading } = useQuery({
    queryKey: ['examen'],
    queryFn: () => getExamenById(id, authToken),
  });

  return { data, isLoading };
}

export default useExamen;
