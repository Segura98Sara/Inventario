import { verifyToken } from '@/Auth/services/users.service';
import { AuthContext } from '@/Auth/context/AuthContext';
import { useCallback, useContext, useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router';

export default function Guard() {
  const { login, logout, session } = useContext(AuthContext);
  const token = window.localStorage.getItem('token');
  const navigate = useNavigate();

  const handleVerification = useCallback(async () => {
    if (!token) {
      // Si no hay token, se asegura de cerrar sesión y redirigir
      if (session.isLogged) logout();
      navigate('auth/');
      return;
    }
    try {
      const res = await verifyToken();
      if (!res) throw new Error('Hubo una falla de conexión con el servidor');

      const { error, user } = res;
      if (error) throw new Error(error);
      if (!session.isLogged) login({ ...user, isLogged: true });
    } catch (error) {
      logout();
      navigate('auth', {
        state: {
          error: (error as Error).message,
        },
      });
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleVerification();
  }, [handleVerification]);

  if (!token) return <Navigate to={'auth'} />;

  return <Outlet />;
}
