import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormTaskInput } from '../../types/taskProps';
import { useTask } from '../../contexts/TaskContext/useTask';
import { useMenu } from '../../contexts/MenuContext/useMenu';
import { notify } from '../Toasts/notify';
import { useNavigate } from 'react-router-dom';

export function FormUpdateTask() {
  const { updateTask } = useTask();
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const { updateTaskModal } = useMenu();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormTaskInput>();

  const onSubmit: SubmitHandler<IFormTaskInput> = async (data) => {
    setIsLoading(true);
    const res = await updateTask(data, updateTaskModal?.id as string);
    if (!res) {
      setSubmitError(true);
      notify('warning', 'Updated Error');
      setIsLoading(false);
      return;
    }

    return new Promise(() => {
      reset({ title: '', description: '' });
      notify('success', 'Task Updated');
      setTimeout(() => {
        setIsLoading(false);
        navigate(0);
      }, 2000);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <h4 className="font-bold text-xl text-center">Update Task</h4>
      <div className="flex flex-col gap-7 mt-8">
        <input
          placeholder="Title"
          className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
          type="text"
          {...register('title', { required: true })}
          defaultValue={updateTaskModal?.title}
        />
        <textarea
          placeholder="Description"
          className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition overflow-y-hidden"
          rows={4}
          defaultValue={updateTaskModal?.description}
          {...register('description', { required: true })}
        />
        <select
          {...register('progress', { required: true })}
          defaultValue={updateTaskModal?.progress}
        >
          <option value="pending">ToDo</option>
          <option value="inProgress">In Progress</option>
          <option value="delayed">Delayed</option>
          <option value="completed">Completed</option>
        </select>
        {errors.title?.type === 'required' && (
          <p role="alert" className="text-red-200">
            Title is required
          </p>
        )}
        {errors.description?.type === 'required' && (
          <p role="alert" className="text-red-200">
            Description is required
          </p>
        )}
        {submitError && (
          <p role="alert" className="text-red-200">
            Task Invalid
          </p>
        )}
        <button
          className="bg-blue-500 px-6 py-3 rounded-md text-white font-semibold hover:bg-blue-600"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? (
            <div className="flex justify-center items-center">
              <svg
                className="mr-3 h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span className="font-medium"> Processing... </span>
            </div>
          ) : (
            'Updated'
          )}
        </button>
      </div>
    </form>
  );
}
