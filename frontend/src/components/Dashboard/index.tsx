import React, { useCallback, useDeferredValue } from 'react';
import { ListTask } from './ListTask';
import { useMenu } from '../../contexts/MenuContext/useMenu';
import { useTask } from '../../contexts/TaskContext/useTask';
import { ProgressTaskProps } from '../../types/taskProps';
import { useFilter } from '../../contexts/FilterContext/useFilter';
import { Modal } from '../Modal';
import { FormUpdateTask } from '../Modal/FormUpdateTask';
import { FormNewTask } from '../Modal/FormNewTask';

export function DashboardPage() {
  const { search, categoryTask } = useFilter();
  const { setModalIsOpen, modalIsOpen, setUpdateTaskModal, updateTaskModal } =
    useMenu();
  const { allTasks } = useTask();
  const deferedSearch = useDeferredValue(search);
  const tasksFilter = allTasks.filter((task) => {
    const taskLower = task.title.toLowerCase();
    return taskLower.includes(deferedSearch.toLowerCase());
  });

  const getTasksByCategory = (category: ProgressTaskProps) => {
    return tasksFilter.filter((task) => task.progress === category);
  };

  const modalCallback = useCallback(() => {
    return (
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        {updateTaskModal ? <FormUpdateTask /> : <FormNewTask />}
      </Modal>
    );
  }, [modalIsOpen]);

  return (
    <section className="px-8 mt-11">
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Tasks</h1>
        <button
          className="bg-blue-600 text-white px-8 py-2 rounded-md text-sm"
          onClick={() => {
            setModalIsOpen(true);
            setUpdateTaskModal(null);
          }}
        >
          New Task +
        </button>
      </div>
      <div className="grid xl:grid-cols-4 gap-3 mt-5">
        {!categoryTask && (
          <>
            <ListTask
              title="toDo"
              classColor="bg-blue-100"
              tasks={getTasksByCategory(ProgressTaskProps.pending)}
            />
            <ListTask
              title="In Progress"
              classColor="bg-orange-100"
              tasks={getTasksByCategory(ProgressTaskProps.inProgress)}
            />
            <ListTask
              title="Delayed"
              classColor="bg-red-100"
              tasks={getTasksByCategory(ProgressTaskProps.delayed)}
            />
            <ListTask
              title="Completed"
              classColor="bg-gray-100"
              tasks={getTasksByCategory(ProgressTaskProps.completed)}
            />
          </>
        )}
        {categoryTask === ProgressTaskProps.pending && (
          <>
            <ListTask
              title="toDo"
              classColor="bg-blue-100"
              tasks={getTasksByCategory(ProgressTaskProps.pending)}
            />
          </>
        )}
        {categoryTask === ProgressTaskProps.inProgress && (
          <>
            <ListTask
              title="In Progress"
              classColor="bg-orange-100"
              tasks={getTasksByCategory(ProgressTaskProps.inProgress)}
            />
          </>
        )}
        {categoryTask === ProgressTaskProps.delayed && (
          <>
            <ListTask
              title="Delayed"
              classColor="bg-red-100"
              tasks={getTasksByCategory(ProgressTaskProps.delayed)}
            />
          </>
        )}
        {categoryTask === ProgressTaskProps.completed && (
          <>
            <ListTask
              title="Completed"
              classColor="bg-gray-100"
              tasks={getTasksByCategory(ProgressTaskProps.completed)}
            />
          </>
        )}
      </div>
      {modalIsOpen && modalCallback()}
    </section>
  );
}
