/* eslint-disable react/prop-types */
function Multiple({ enunciado, nameCheckbox, opciones }) {
  return (
    <div className='flex flex-col gap-2'>
      <p className='font-bold'>{enunciado}</p>
      <div className='flex flex-col gap-1'>
        {opciones.map((o, i) => (
          <label key={i} className='cursor-pointer capitalize'>
            {o} <input type='radio' value={o} name={nameCheckbox} />
          </label>
        ))}
      </div>
    </div>
  );
}

export default Multiple;
