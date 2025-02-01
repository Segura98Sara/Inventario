import { useUser } from '@/Auth/hooks/useUser';
import { FormEvent, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { signin } = useUser();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = Object.fromEntries(
      new window.FormData(form)
    ) as { email: string; password: string };
    setIsLoading(true);
    signin(email, password).finally(() => setIsLoading(false));
  };

  return (
    <form
      className='flex flex-col gap-4 bg-white shadow rounded-md p-8 text-gray-700 w-72'
      onSubmit={handleSubmit}
    >
      <h1 className='text-center text-xl font-semibold my-1'>
        Inicio de sesión
      </h1>
      <label className='flex flex-col justify-between gap-1'>
        Email
        <input
          type='email'
          name='email'
          className='px-3 py-1.5 shadow focus:outline-none rounded-lg'
          required
        />
      </label>
      <label className='flex flex-col justify-between gap-1'>
        Contraseña
        <div className='relative flex items-center'>
          <input
            type={showPassword ? 'text' : 'password'}
            name='password'
            className='px-3 py-1.5 shadow w-full focus:outline-none rounded-lg peer'
            required
          />
          <button
            type='button'
            className='absolute right-2 opacity-0 peer-focus:opacity-100 transition-opacity'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible className='size-5' />
            ) : (
              <AiOutlineEye className='size-5' />
            )}
          </button>
        </div>
      </label>
      <button
        className='bg-slate-600 px-3 py-1 text-white rounded-md hover:bg-amber-600 transition-colors disabled:opacity-40 disabled:pointer-events-none'
        disabled={isLoading}
      >
        Iniciar sesión
      </button>
      <span>
        Aun no tienes cuenta?
        <Link
          to={'/auth/signup'}
          className='underline hover:text-blue-700 transition-colors ms-1'
        >
          Regístrate
        </Link>
      </span>
    </form>
  );
}
