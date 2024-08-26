import authStore from '../services/authStore';

function NavBar() {
  const user = authStore(state => state.user);
  return (
    <nav className='w-full flex justify-end pe-6 py-4 gap-5 items-center text-2xl bg-blue-400'>
      <span>
        {user?.nombres} {user?.apellidos}
      </span>
      <img
        src='https://picsum.photos/50'
        alt='Profile picture'
        className='cursor-pointer rounded-lg'
      />
    </nav>
  );
}

export default NavBar;
