import { useMutation, useQuery } from '@tanstack/react-query';
import { getMyInformation, login } from '../api/authApi';
import authStore from './authStore';
import { useLocation } from 'wouter';

function useAuth() {
  const setToken = authStore(state => state.setToken);
  const authToken = authStore(state => state.authToken);
  const [, setLocation] = useLocation();

  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
    onError: error => alert(error.response.data.message),
    onSuccess: data => {
      setToken(data.token);
      setLocation('/dashboard');
    },
  });

  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => getMyInformation(authToken),
  });

  return { loginMutation, user, isLoading };
}

export default useAuth;
