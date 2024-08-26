/* eslint-disable react/prop-types */
function Simple({ enunciado, nameInput }) {
  return (
    <label className='flex flex-col gap-2 font-bold'>
      {enunciado}
      <input
        type='text'
        name={nameInput}
        className='border rounded-md p-2 font-normal'
      />
    </label>
  );
}

export default Simple;
