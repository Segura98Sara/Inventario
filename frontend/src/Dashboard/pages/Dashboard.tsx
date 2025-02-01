import NavBar from '@/Dashboard/components/NavBar';
import SideMenu from '@/Dashboard/components/SideMenu';
import { Outlet } from 'react-router';

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <main className='flex h-screen'>
        <SideMenu/>
        <Outlet />
      </main>
    </>
  );
}
