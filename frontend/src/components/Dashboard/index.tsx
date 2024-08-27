import React, { useEffect } from 'react';
import { ListTask } from './ListTask';
import { getAllTasks } from '../../api/task.';

export function DashboardPage() {
  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await getAllTasks();
      console.log(data);
      return data;
    };
    fetchTask();
  }, []);

  return (
    <section className="px-8 mt-11">
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Tasks</h1>
        <button className="bg-blue-600 text-white px-8 py-2 rounded-md text-sm">
          New Task +
        </button>
      </div>
      <div className="grid lg:grid-cols-4 gap-3 mt-5">
        <ListTask title="toDo" classColor="bg-blue-100" />
        <ListTask title="In Progress" classColor="bg-orange-100" />
        <ListTask title="Delayed" classColor="bg-red-100" />
        <ListTask title="Completed" classColor="bg-gray-100" />
      </div>
    </section>
  );
}
