import React from 'react';
import { TaskProps } from '../../types/taskProps';
import { MdOutlineModeEdit, MdOutlineDelete } from 'react-icons/md';
import { useMenuContext } from '../../contexts/MenuContext/userMenuContext';

interface ListTaskProps {
  title: string;
  classColor: string;
  tasks: TaskProps[];
}

export function ListTask({ title, classColor, tasks }: ListTaskProps) {
  const { setModalIsOpen } = useMenuContext();

  return (
    <section className={`${classColor} w-full rounded-md p-3`}>
      <h4 className={`font-semibold text-gray-600`}>{title}</h4>
      <div className="flex flex-col gap-9 mt-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg p-6 relative">
            <div className="flex gap-3">
              <strong>Title:</strong>
              <p>{task.title}</p>
            </div>
            <div className="flex gap-3">
              <strong>Description:</strong>
              <p>{task.description}</p>
            </div>
            <div className="flex gap-3">
              <strong>created:</strong>
              <p>{task.createdAt}</p>
            </div>
            <div className="absolute top-3 right-3 gap-4 flex">
              <button onClick={() => setModalIsOpen(true)}>
                <MdOutlineModeEdit size={22} color="blue" />
              </button>
              <button>
                <MdOutlineDelete size={22} color="red" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
