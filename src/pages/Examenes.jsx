import { useQuery } from '@tanstack/react-query';
import ExamenCard from '../components/ExamenCard';
import authStore from '../services/authStore';
import { getExamenesByCurso } from '../api/examenesApi';

function Examenes() {
  const user = authStore(state => state.user);
  const authToken = authStore(state => state.authToken);
  const cursoUsuario = user?.cursos[0];
  const { data: examenes, isLoading: isLoadingExamenes } = useQuery({
    queryKey: ['examenes'],
    queryFn: () => getExamenesByCurso(cursoUsuario._id, authToken),
    enabled: Boolean(user),
  });

  if (isLoadingExamenes || !examenes) {
    return <div>Cargando...</div>;
  }
  return (
    <>
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
    </>
  );
}

export default Examenes;
