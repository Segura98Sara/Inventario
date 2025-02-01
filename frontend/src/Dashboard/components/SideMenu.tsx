import { FaUserAlt } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';
import { Link } from 'react-router';

export default function SideMenu() {
  return (
    <aside className='w-64 bg-slate-100'>
      <ul className='capitalize text-slate-700 font-medium'>
        <li>
          <Link
            className='flex gap-2 items-center py-4 ps-8 hover:bg-blue-400 hover:text-white transition-colors'
            to='/dashboard'
          >
            <MdSpaceDashboard className='size-5'/>
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className='flex gap-2 items-center py-4 ps-8 hover:bg-blue-400 hover:text-white transition-colors'
            to='profile'
          >
            <FaUserAlt className='size-4'/>
            Profile
          </Link>
        </li>
      </ul>
    </aside>
  );
}
