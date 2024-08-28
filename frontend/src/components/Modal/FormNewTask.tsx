import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ButtonForm } from '../Login/Button';
import { IFormTaskInput } from '../../types/taskProps';

export function FormNewTask() {
  const {
    register,
    formState: { isLoading },
    handleSubmit,
  } = useForm<IFormTaskInput>();

  const onSubmit: SubmitHandler<IFormTaskInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          defaultValue={'toDo'}
        >
          <option value="toDo">ToDo</option>
          <option value="inProgress">In Progress</option>
          <option value="delayed">Delayed</option>
          <option value="completed">Completed</option>
        </select>
        <ButtonForm title="Send" disabled={isLoading} />
      </div>
    </form>
  );
}
