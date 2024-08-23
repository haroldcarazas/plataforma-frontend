import authStore from '../services/authStore';
import { useLocation } from 'wouter';

function ProtectedRoute({ children }) {
  const authToken = authStore(state => state.authToken);
  const [, setLocation] = useLocation();

  if (!authToken) {
    return setLocation('/');
  }

  return children;
}

export default ProtectedRoute;
