import React from 'react';
import { TaskProps } from '../../types/taskProps';
import { MdOutlineModeEdit, MdOutlineDelete } from 'react-icons/md';
import { useMenu } from '../../contexts/MenuContext/useMenu';
import { useTask } from '../../contexts/TaskContext/useTask';
import { notify } from '../Toasts/notify';

interface ListTaskProps {
  title: string;
  classColor: string;
  tasks: TaskProps[];
}

export function ListTask({ title, classColor, tasks }: ListTaskProps) {
  const { setModalIsOpen, setUpdateTaskModal, setTaskDetailsModal } = useMenu();
  const { deleteTask } = useTask();

  const handleClickTaskDetails = (task: TaskProps) => {
    setTaskDetailsModal(task);
    setModalIsOpen(true);
  };

  return (
    <section className={`${classColor} w-full rounded-md p-3`}>
      <h4 className={`font-semibold text-gray-600`}>{title}</h4>
      <div className="flex flex-col gap-9 mt-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-md p-6 relative flex flex-col justify-between gap-4 shadow-lg hover:scale-105 transition-all"
          >
            <div className="flex gap-2 xl:flex-col max-sm:flex-col xl:gap-0">
              <strong>Title:</strong>
              <p className="line-clamp-1">{task.title}</p>
            </div>
            <div className="flex gap-2 xl:flex-col max-sm:flex-col xl:gap-0">
              <p className="line-clamp-5 text-justify">
                <strong>Description: </strong>
                {task.description}
              </p>
            </div>
            <div className="flex gap-2 xl:flex-col max-sm:flex-col xl:gap-0">
              <strong>created:</strong>
              <p>{task.createdAt?.split(':')[0]}</p>
            </div>
            <div className="flex gap-2 xl:flex-col max-sm:flex-col xl:gap-0">
              <strong>updated:</strong>
              <p>{task.updatedAt?.split(':')[0]}</p>
            </div>
            <button
              onClick={() => handleClickTaskDetails(task)}
              className="bg-blue-400 rounded-lg w-2/4 m-auto py-2 px-3 text-white font-semibold leading-tight hover:bg-blue-600"
            >
              Details
            </button>
            <div className="absolute top-3 right-3 gap-4 flex z-50">
              <button
                onClick={() => {
                  setUpdateTaskModal(task);
                  setModalIsOpen(true);
                }}
              >
                <MdOutlineModeEdit size={22} color="blue" />
              </button>
              <button
                onClick={async () => {
                  new Promise(() => {
                    deleteTask(task.id as string);
                    notify('success', 'Task Deleted');
                    setTimeout(() => window.location.reload(), 2000);
                    return;
                  });
                }}
              >
                <MdOutlineDelete size={22} color="red" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
