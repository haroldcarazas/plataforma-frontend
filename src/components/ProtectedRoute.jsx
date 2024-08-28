/* eslint-disable react/prop-types */
import { useLocation } from 'wouter';
import useAuth from '../services/useAuth';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const { isLoading, authToken, error, logoutUser } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (error?.response.status === 403) {
      logoutUser();
      return;
    }
  }, [error, logoutUser]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!authToken) {
    return setLocation('/');
  }

  return children;
}

export default ProtectedRoute;
