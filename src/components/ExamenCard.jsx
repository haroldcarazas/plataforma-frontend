import { Link } from 'wouter';

/* eslint-disable react/prop-types */
function ExamenCard({ examenId, calificacionMinima }) {
  return (
    <Link
      to={`/examenes/${examenId}`}
      className='w-[350px] h-[150px] bg-yellow-200 rounded-md p-4 flex flex-col justify-end cursor-pointer'
    >
      <p className='font-bold text-lg'>{examenId}</p>
      <p className='text-sm'>Calificación mínima: {calificacionMinima}</p>
    </Link>
  );
}

export default ExamenCard;
