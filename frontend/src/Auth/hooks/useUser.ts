import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

import type { NewUser } from '@/Auth/interfaces/userSession';
import { login as loginService, signUp } from '@/Auth/services/users.service';
import { AuthContext } from '@/Auth/context/AuthContext';

export function useUser() {
  const [error, setError] = useState<string | null>(null);
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    return () => {
      setError(null);
    };
  }, [error]);

  const signin = async (email: string, password: string) => {
    const { userData, error } = await loginService(email, password);
    if (error) {
      setError(error);
      return;
    }
    login({
      ...userData,
      isLogged: true,
    });
    navigate('/dashboard');
  };

  const createUser = async (data: NewUser) => {
    if (data.password2 !== data.password)
      return setError('Las contraseñas no coinciden');
    const { ok, error } = await signUp(data);
    if (!ok) {
      setError(error!);
      return;
    }
    toast.info('Registro exitoso!', {
      onDismiss: () =>
        navigate('/auth', {
          state: { email: data.email },
        }),
      onAutoClose: () =>
        navigate('/auth', {
          state: { email: data.email },
        }),
    });
  };

  return {
    signin,
    createUser,
  };
}
