import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthContext/useAuth';
import { useNavigate } from 'react-router-dom';
import { ButtonForm } from './Button';
import { notify } from '../Toasts/notify';
import { Toast } from '../Toasts';

interface LoginPageProps {
  setPage: (vl: boolean) => void;
}

interface IFormInput {
  email: string;
  password: string;
}

export function LoginPage({ setPage }: LoginPageProps) {
  const [submitError, setSubmitError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { authenticate } = useAuth();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    const response = await authenticate(data);
    if (!response) {
      setSubmitError(true);
      notify('warning', 'Error login');
      setIsLoading(false);
      return;
    }
    return new Promise(() => {
      reset();
      notify('success', 'Login succesful');
      setTimeout(() => {
        setIsLoading(false);
        navigate('/dashboard');
      }, 2000);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-blue-100 rounded-md p-5 flex flex-col gap-4"
    >
      <h2 className="text-xl font-bold text-center">Login</h2>
      <div className="flex justify-between items-center gap-12">
        <div className="relative flex w-full max-w-[24rem]">
          <div className="relative h-10 w-full min-w-[200px]">
            <input
              title="Email"
              type="email"
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              {...register('email', { required: true })}
            />
            <label className="before:content[&#x27; &#x27;] after:content[&#x27; &#x27;] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email Address
            </label>
          </div>
        </div>
      </div>
      <div className="relative flex w-full max-w-[24rem]">
        <div className="relative h-10 w-full min-w-[200px]">
          <input
            title="Password"
            type="password"
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=""
            {...register('password', { required: true })}
          />
          <label className="before:content[&#x27; &#x27;] after:content[&#x27; &#x27;] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Password
          </label>
        </div>
      </div>
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
      {submitError && (
        <p role="alert" className="text-red-200">
          Password or Email invalid
        </p>
      )}
      <div className="flex flex-col gap-5">
        <button type="button" className="w-full" onClick={() => setPage(false)}>
          Dont´t have an account? Sign Up.
        </button>
        <ButtonForm title="Send" isLoading={isLoading} />
      </div>
      <Toast />
    </form>
  );
}
