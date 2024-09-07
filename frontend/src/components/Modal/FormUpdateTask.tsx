import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormTaskInput } from '../../types/taskProps';
import { useMenu } from '../../contexts/MenuContext/useMenu';
import { useHookTask } from '../../hooks/useHookTask';
import { ButtonForm } from '../Login/Button';

export function FormUpdateTask() {
  const { updateTask, loading } = useHookTask();
  const { updateTaskModal, setModalIsOpen, setUpdateTaskModal } = useMenu();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormTaskInput>();

  const onSubmit: SubmitHandler<IFormTaskInput> = async (data) => {
    await updateTask(data, updateTaskModal?.id as string);
    setUpdateTaskModal(null);
    setModalIsOpen(false);
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
        <ButtonForm isLoading={loading} title="Update" />
      </div>
    </form>
  );
}
