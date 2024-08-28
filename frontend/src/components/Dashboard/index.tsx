import React from 'react';
import { ListTask } from './ListTask';
import { useMenuContext } from '../../contexts/MenuContext/userMenuContext';
import { Modal } from '../Modal';
import { FormNewTask } from '../Modal/FormNewTask';
import { useTask } from '../../contexts/TaskContext/useTask';
import { ProgressTaskProps } from '../../types/taskProps';

export function DashboardPage() {
  const { setModalIsOpen, modalIsOpen } = useMenuContext();
  const { allTasks } = useTask();
  console.log(allTasks);

  return (
    <section className="px-8 mt-11">
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Tasks</h1>
        <button
          className="bg-blue-600 text-white px-8 py-2 rounded-md text-sm"
          onClick={() => setModalIsOpen(true)}
        >
          New Task +
        </button>
      </div>
      <div className="grid lg:grid-cols-4 gap-3 mt-5">
        <ListTask
          title="toDo"
          classColor="bg-blue-100"
          tasks={allTasks.filter(
            (task) => task.progress === ProgressTaskProps.pending,
          )}
        />
        <ListTask
          title="In Progress"
          classColor="bg-orange-100"
          tasks={allTasks.filter(
            (task) => task.progress === ProgressTaskProps.inProgress,
          )}
        />
        <ListTask
          title="Delayed"
          classColor="bg-red-100"
          tasks={allTasks.filter(
            (task) => task.progress === ProgressTaskProps.delayed,
          )}
        />
        <ListTask
          title="Completed"
          classColor="bg-gray-100"
          tasks={allTasks.filter(
            (task) => task.progress === ProgressTaskProps.completed,
          )}
        />
      </div>

      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <FormNewTask />
      </Modal>
    </section>
  );
}
