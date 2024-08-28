import authStore from '../services/authStore';
import Cursos from './Cursos';
import Examenes from './Examenes';

function Dashboard() {
  const user = authStore(state => state.user);

  return (
    <main>
      {user?.rol === 'alumno' && <Examenes />}
      {user?.rol === 'maestro' && <Cursos />}
    </main>
  );
}

export default Dashboard;
