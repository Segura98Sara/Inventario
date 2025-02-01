import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';
import { Toaster } from 'sonner';
import { AuthContext } from '@/Auth/context/AuthContext';

export default function Auth() {
  const { session } = useContext(AuthContext);
  
  if(session.isLogged) return <Navigate to={'/'}/>

  return (
    <div className='grid place-content-center h-full bg-slate-100'>
      <Outlet />
      <Toaster richColors />
    </div>
  );
}
