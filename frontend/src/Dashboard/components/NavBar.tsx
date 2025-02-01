import { AuthContext } from '@/Auth/context/AuthContext';
import { useContext } from 'react';
import { AiFillNotification, AiOutlineLogout } from 'react-icons/ai';
import { useNavigate } from 'react-router';

export default function NavBar() {
  const { logout, session } = useContext(AuthContext);
  const navigate = useNavigate();
  const signOut = () => {
    logout();
    navigate('/auth');
  };
  return (
    <header className='bg-slate-700 ps-8 pr-10'>
      <nav className='flex items-center justify-between h-16'>
        <div className='size-10'>
          <img src='/logo.webp' alt='logo' />
        </div>
        <ul className='flex items-center gap-5'>
          <li>
            <AiFillNotification className='size-5' />
          </li>
          <li className='flex items-center size-5 w-fit gap-2 bg-slate-600 rounded-lg px-2 py-4'>
            <span className='text-lg'>{session.name}</span>
            <button
              className='hover:text-red-500 transition-colors'
              onClick={signOut}
            >
              <AiOutlineLogout className='size-5' />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
