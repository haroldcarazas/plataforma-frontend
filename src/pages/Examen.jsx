import { useParams } from 'wouter';
import useExamen from '../services/useExamen';
import Simple from '../components/preguntas/Simple';
import Multiple from '../components/preguntas/Multiple';
import PreguntaVideo from '../components/preguntas/PreguntaVideo';

function Examen() {
  const { id } = useParams();
  const { data, isLoading } = useExamen(id);

  if (isLoading) {
    return <div>Cargando...</div>;
  }
  console.log(data.preguntas);

  return (
    <form className='max-w-[1000px] m-auto flex flex-col gap-6 text-xl mt-5'>
      {data.preguntas.map(p => {
        if (p.tipo === 'simple') {
          return (
            <Simple key={p._id} enunciado={p.pregunta} nameInput={p._id} />
          );
        }

        if (p.tipo === 'multiple') {
          return (
            <Multiple
              key={p._id}
              enunciado={p.pregunta}
              nameCheckbox={p._id}
              opciones={p.opciones}
            />
          );
        }

        if (p.tipo === 'video') {
          return <PreguntaVideo key={p._id} />;
        }
      })}

      <div className='text-center'>
        <button
          type='submit'
          className='bg-green-400 p-2 rounded-md text-white'
        >
          Finalizar examen
        </button>
      </div>
    </form>
  );
}

export default Examen;
