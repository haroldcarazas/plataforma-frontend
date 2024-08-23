import { useMutation } from '@tanstack/react-query';
import { login } from '../api/authApi';
import { useLocation } from 'wouter';
import authStore from '../services/authStore';

function Login() {
  const [, setLocation] = useLocation();
  const setToken = authStore(state => state.setToken);

  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
    onError: error => alert(error.message),
    onSuccess: data => {
      setToken(data.token);
      setLocation('/dashboard');
    },
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    await loginMutation.mutateAsync({ username, password });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input type='text' name='username' />
        </label>
        <label>
          Contraseña: <input type='text' name='password' />
        </label>
        <button type='submit'>Ingresar</button>
      </form>
    </main>
  );
}

export default Login;
