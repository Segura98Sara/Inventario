import { type FormEvent, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router';

import { useUser } from '@/Auth/hooks/useUser';
import type { NewUser } from '@/Auth/interfaces/userSession';

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    password: false,
    verification: false,
  });
  const { createUser } = useUser();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(
      new window.FormData(form)
    ) as unknown as NewUser;
    createUser(data).finally(() => setIsLoading(false));
  };

  return (
    <form
      className='flex flex-col gap-4 bg-white shadow rounded-md p-8 text-gray-700 w-72'
      onSubmit={handleSubmit}
    >
      <h1 className='text-center text-xl font-semibold my-1'>Registro</h1>
      <label className='flex flex-col justify-between gap-1'>
        Nombre
        <input
          type='text'
          name='name'
          className='px-3 py-1 shadow rounded-lg'
          required
        />
      </label>
      <label className='flex flex-col justify-between gap-1'>
        Email
        <input
          type='email'
          name='email'
          className='px-3 py-1 shadow rounded-lg'
          required
        />
      </label>
      <label className='flex flex-col justify-between gap-1'>
        Contraseña
        <div className='relative flex items-center'>
          <input
            type={showPassword.password ? 'text' : 'password'}
            name='password'
            className='px-3 py-1 shadow rounded-lg focus:outline-none w-full peer'
            required
          />
          <button
            className='absolute right-2 opacity-0 peer-focus:opacity-100 transition-opacity'
            type='button'
            onClick={() =>
              setShowPassword({
                ...showPassword,
                password: !showPassword.password,
              })
            }
          >
            {showPassword.password ? (
              <AiOutlineEyeInvisible className='size-5' />
            ) : (
              <AiOutlineEye className='size-5' />
            )}
          </button>
        </div>
      </label>
      <label className='flex flex-col justify-between gap-1'>
        Verifica contraseña
        <div className='relative flex items-center'>
          <input
            type={showPassword.verification ? 'text' : 'password'}
            name='password2'
            className='px-3 py-1 shadow rounded-lg focus:outline-none w-full peer'
            required
          />
          <button
            type='button'
            className='absolute right-2 opacity-0 peer-focus:opacity-100 transition-opacity'
            onClick={() =>
              setShowPassword({
                ...showPassword,
                verification: !showPassword.verification,
              })
            }
          >
            {showPassword.verification ? (
              <AiOutlineEyeInvisible className='size-5' />
            ) : (
              <AiOutlineEye className='size-5' />
            )}
          </button>
        </div>
      </label>
      <label className='flex flex-col justify-between gap-1'>
        Teléfono
        <input
          type='number'
          name='phone'
          className='px-3 py-1 shadow rounded-lg'
          required
        />
      </label>
      <button
        className='bg-slate-600 px-3 py-1 text-white rounded-md hover:bg-amber-600 transition-colors disabled:opacity-40 disabled:pointer-events-none'
        disabled={isLoading}
      >
        Registrarse
      </button>
      <span>
        Ya tienes cuenta?
        <Link
          to={'/auth'}
          className='underline hover:text-blue-700 transition-colors ms-1'
        >
          Inicia sesión!
        </Link>
      </span>
    </form>
  );
}
