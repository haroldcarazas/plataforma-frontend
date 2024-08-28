import { useMutation, useQuery } from '@tanstack/react-query';
import { getMyInformation, login } from '../api/authApi';
import authStore from './authStore';
import { useLocation } from 'wouter';
import { useEffect } from 'react';

function useAuth() {
  const setToken = authStore(state => state.setToken);
  const authToken = authStore(state => state.authToken);
  const setUser = authStore(state => state.setUser);
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

  const {
    data: user,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => getMyInformation(authToken),
    enabled: Boolean(authToken),
  });

  const logoutUser = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  };

  useEffect(() => {
    if (user && !isLoading && !isError) {
      setUser(user.data);
    }
  }, [user, isLoading, setUser, isError]);

  return { loginMutation, user, isLoading, error, authToken, logoutUser };
}

export default useAuth;
