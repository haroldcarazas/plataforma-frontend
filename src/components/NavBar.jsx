import { Link } from 'wouter';
import authStore from '../services/authStore';

function NavBar() {
  const user = authStore(state => state.user);
  return (
    <nav className='w-full flex justify-between px-6 gap-5 items-center text-xl bg-blue-400 h-[80px]'>
      <ul className='flex gap-1 h-full'>
        <li className='bg-blue-600 text-white font-medium'>
          <Link
            to='/dashboard'
            className='flex justify-center items-center h-full px-2'
          >
            Home
          </Link>
        </li>
        {user?.rol === 'alumno' && (
          <li className='bg-blue-600 text-white font-medium'>
            <Link
              to='/calificaciones'
              className='flex justify-center items-center h-full px-2'
            >
              Calificaciones
            </Link>
          </li>
        )}
      </ul>

      <div className='flex justify-center items-center gap-5'>
        <span>
          {user?.nombres} {user?.apellidos}
        </span>
        <img
          src='https://picsum.photos/50'
          alt='Profile picture'
          className='cursor-pointer rounded-lg'
        />
      </div>
    </nav>
  );
}

export default NavBar;
