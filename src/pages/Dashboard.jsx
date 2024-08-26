import { useQuery } from '@tanstack/react-query';
import authStore from '../services/authStore';
import useAuth from '../services/useAuth';
import { getExamenesByCurso } from '../api/examenesApi';
import ExamenCard from '../components/ExamenCard';

function Dashboard() {
  const user = authStore(state => state.user);
  const { isLoading, authToken } = useAuth();
  const cursoUsuario = user?.cursos[0];
  const { data: examenes, isLoading: isLoadingExamenes } = useQuery({
    queryKey: ['examenes'],
    queryFn: () => getExamenesByCurso(cursoUsuario._id, authToken),
    enabled: Boolean(user),
  });

  if (isLoading || isLoadingExamenes || !user || !examenes) {
    return <div>Cargando...</div>;
  }

  return (
    <main>
      <h1 className='text-3xl text-center my-4'>Exámenes</h1>
      <section className='max-w-[1000px] m-auto'>
        {examenes.map(e => (
          <ExamenCard
            key={e._id}
            examenId={e._id}
            calificacionMinima={e.calificacionMinima}
          />
        ))}
      </section>
    </main>
  );
}

export default Dashboard;
