import React from 'react';
import { useAuth } from '../../contexts/AuthContext/useAuth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { redirect } from 'react-router-dom';

interface LoginPageProps {
  setPage: (vl: boolean) => void;
}

interface IFormInput {
  username: string;
  email: string;
  password: string;
}

export function RegisterPage({ setPage }: LoginPageProps) {
  const { registerUser } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const response = await registerUser(data);
    if (response) {
      redirect('/dashboard');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-blue-100 rounded-md p-5 flex flex-col gap-4"
    >
      <h2 className="text-xl font-bold text-center">User Registration</h2>
      <div className="flex justify-between items-center gap-5">
        <label htmlFor="username" className="whitespace-nowrap">
          Username:
        </label>
        <input
          type="text"
          {...register('username', { required: true })}
          className="p-2 rounded-lg w-full"
        />
      </div>
      <div className="flex justify-between items-center gap-12">
        <label htmlFor="email" className="whitespace-nowrap">
          E-mail:
        </label>
        <input
          type="email"
          {...register('email', { required: true })}
          placeholder="email@example.com"
          className="p-2 rounded-lg w-full"
        />
      </div>
      <div className="flex justify-center items-center gap-6 mb-5">
        <label htmlFor="email">Password:</label>
        <input
          type="password"
          {...register('password', { required: true, minLength: 8 })}
          placeholder=""
          className="p-2 rounded-lg w-full"
        />
      </div>
      {errors.username?.type === 'required' && (
        <p role="alert" className="text-red-200">
          Username is required
        </p>
      )}
      {errors.email?.type === 'required' && (
        <p role="alert" className="text-red-200">
          Email is required
        </p>
      )}
      {errors.password?.type === 'required' && (
        <p role="alert" className="text-red-200">
          Password is required
        </p>
      )}
      {errors.password?.type === 'minLength' && (
        <p role="alert" className="text-red-200">
          Password must be 8 characters
        </p>
      )}
      <div className="flex flex-col gap-5">
        <button type="button" className="w-full" onClick={() => setPage(true)}>
          Already have an account? Sign in.
        </button>
        <button
          type="submit"
          className="bg-blue-500 rounded-xl py-2 text-white text-base font-semibold hover:bg-blue-700 transition-all w-full"
        >
          Resgister
        </button>
      </div>
    </form>
  );
}
