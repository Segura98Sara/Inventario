import { NewUser } from "@/Auth/interfaces/userSession";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/users`;

const getToken = () => window.localStorage.getItem('token');

export const login = async (email: string, password: string) => {
  try {
    const res = await fetch(`${BASE_URL}/${email}&${password}`,{
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    if (!res) throw new Error('No pudimos conectar con el servidor');
    const { user, error, token } = await res.json();
    if (error) throw new Error(error);
    window.localStorage.setItem('token', token);
    return { userData: user };
  } catch (error) {
    if (error instanceof TypeError) return { error: 'Algo salió mal...' };
    return { error: (error as Error).message };
  }
};

export const signUp = async (data: NewUser) => {
  try {
    const res = await fetch(`${BASE_URL}/signUp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        ...data,
      }),
    });
    if (!res.ok) throw new Error('No pudimos conectar con el servidor');
    const { ok } = await res.json();
    if (!ok) throw new Error('Algo salió mal');
    return { ok };
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export const verifyToken = async () => {
  try {
    const res = await fetch(`${BASE_URL}/isLogged/${getToken()}`,{
      headers: {
        
      }
    });
    if (res.status === 401) throw new Error('Acceso no autorizado');
    if (!res.ok) throw new Error('No pudimos conectar con el servidor');
    return await res.json();
  } catch (error) {
    return { error: (error as Error).message };
  }
};
