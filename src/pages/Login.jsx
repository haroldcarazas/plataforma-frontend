import useAuth from '../services/useAuth';

function Login() {
  const { loginMutation } = useAuth();

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
