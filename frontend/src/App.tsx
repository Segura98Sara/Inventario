import { HashRouter, Navigate, Route, Routes } from 'react-router';

import Login from '@/Auth/components/Login';
import SignUp from '@/Auth/components/SignUp';
import Auth from '@/Auth/pages/Auth';
import Guard from '@/utils/Guard';
import AuthContextProvider from '@/Auth/context/AuthContext';

import Inventory from '@/Dashboard/components/Inventory';
import Dashboard from '@/Dashboard/pages/Dashboard';
import Profile from '@/Dashboard/pages/Profile';

function App() {
  return (
    <>
      <HashRouter>
        <AuthContextProvider>
          <Routes>
            <Route path='/' element={<Navigate to={'dashboard'} />} />
            <Route path='/auth' element={<Auth />}>
              <Route index element={<Login />} />
              <Route path='signup' element={<SignUp />} />
            </Route>
            <Route element={<Guard />}>
              <Route path='/dashboard' element={<Dashboard />}>
                <Route index element={<Inventory />} />
                <Route path='profile' element={<Profile />} />
              </Route>
            </Route>
          </Routes>
        </AuthContextProvider>
      </HashRouter>
    </>
  );
}

export default App;
