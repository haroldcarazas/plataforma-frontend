/* eslint-disable react/prop-types */
function ExamenCard({ examenId, calificacionMinima }) {
  return (
    <div style={{ border: '1px solid gray', width: '300px' }}>
      <p>{examenId}</p>
      <p>Calificación mínima: {calificacionMinima}</p>
    </div>
  );
}

export default ExamenCard;
