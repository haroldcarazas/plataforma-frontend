import { useParams } from 'wouter';
import useExamen from '../services/useExamen';

function Examen() {
  const { id } = useParams();
  const { data, isLoading } = useExamen(id);

  console.log(data.preguntas);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return <div>Examen</div>;
}

export default Examen;
