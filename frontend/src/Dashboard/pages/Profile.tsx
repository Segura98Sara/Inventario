import { AuthContext } from '@/Auth/context/AuthContext';
import { useContext } from 'react';

export default function Profile() {
  const { session } = useContext(AuthContext);
  return (
    <div className='size-full p-5 text-gray-700 space-y-5'>
      <div className='flex gap-10'>
        <span className='flex flex-col'>
          <legend className='font-bold'>Nombre</legend>
          <p>{session.name}</p>
        </span>
        <span className='flex flex-col'>
          <legend className='font-bold'>Email</legend>
          <p>{session.email}</p>
        </span>
      </div>
      <span className='flex flex-col'>
        <legend className='font-bold'>Teléfono</legend>
        <p>{session.phone}</p>
      </span>
    </div>
  );
}
