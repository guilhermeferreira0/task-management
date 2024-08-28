import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ButtonForm } from '../Login/Button';
import { IFormTaskInput } from '../../types/taskProps';
import { useTask } from '../../contexts/TaskContext/useTask';

export function FormNewTask() {
  const { registerTask } = useTask();
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<IFormTaskInput>();

  const onSubmit: SubmitHandler<IFormTaskInput> = async (data) => {
    const res = await registerTask(data);
    if (!res) {
      setSubmitError(true);
      return;
    }
    reset();
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <h4 className="font-bold text-xl text-center">New Task</h4>
      <div className="flex flex-col gap-7 mt-8">
        <input
          placeholder="Title"
          className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
          type="text"
          {...register('title', { required: true })}
        />
        <textarea
          placeholder="Description"
          className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition overflow-y-hidden"
          rows={4}
          {...register('description', { required: true })}
        />
        <select
          {...register('progress', { required: true })}
          defaultValue={'pending'}
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
        <ButtonForm title="Send" disabled={isSubmitting} />
      </div>
    </form>
  );
}
