import { Link, useParams } from 'wouter';
import useExamen from '../services/useExamen';
import Simple from '../components/preguntas/Simple';
import Multiple from '../components/preguntas/Multiple';
import PreguntaVideo from '../components/preguntas/PreguntaVideo';
import authStore from '../services/authStore';

function Examen() {
  const { id } = useParams();
  const { data, isLoading, examenMutation } = useExamen(id);
  const videoURL = authStore(state => state.videoURL);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  const sendRespuesta = async e => {
    e.preventDefault();

    const respuestas = [];
    data.preguntas.forEach(p => {
      const inputPregunta = e.target[p._id];

      respuestas.push({
        pregunta: p._id,
        respuestaAlumno: p.tipo === 'video' ? '' : inputPregunta.value,
      });
    });

    const res = await fetch(videoURL);
    const video = await res.blob();

    const formData = new FormData();
    formData.append('examen', data._id);
    formData.append('respuestas', JSON.stringify(respuestas));
    formData.append('video', video, 'respuesta.mp4');

    await examenMutation.mutateAsync(formData);
  };

  return (
    <main className='max-w-[1000px] m-auto mt-5'>
      <Link
        to='/dashboard'
        className='text-xl font-medium bg-blue-300 px-3 py-2 rounded-md'
      >
        Regresar
      </Link>
      <form
        className=' flex flex-col gap-6 text-xl mt-6'
        onSubmit={sendRespuesta}
      >
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
            return <PreguntaVideo key={p._id} enunciado={p.pregunta} />;
          }
        })}

        <div className='text-center'>
          <button
            type='submit'
            className='bg-blue-400 p-2 rounded-md text-white'
          >
            Finalizar examen
          </button>
        </div>
      </form>
    </main>
  );
}

export default Examen;
