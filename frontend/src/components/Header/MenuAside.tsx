import React from 'react';
import { MdManageSearch } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { CiLogout } from 'react-icons/ci';
import { useMenu } from '../../contexts/MenuContext/useMenu';
import { useAuth } from '../../contexts/AuthContext/useAuth';
import { useFilter } from '../../contexts/FilterContext/useFilter';
import { ProgressTaskProps } from '../../types/taskProps';
import { notify } from '../Toasts/notify';

export function MenuAside() {
  const { menuIsOpen, setMenuIsOpen } = useMenu();
  const { setCategoryTask, categoryTask } = useFilter();
  const { logout } = useAuth();
  const handleButtonCategory = (category: ProgressTaskProps | null) => {
    setCategoryTask(category);
    setMenuIsOpen(false);
  };

  return (
    <aside
      className={`fixed top-0 w-[40%] lg:w-64 bg-gray-100 z-50 h-full flex flex-col justify-between items-center p-7 shadow-2xl ${
        menuIsOpen ? 'left-0' : 'max-md:-left-[40%]'
      }`}
    >
      <div className="flex flex-col gap-8">
        {menuIsOpen && (
          <button onClick={() => setMenuIsOpen(false)} className="md:hidden">
            <IoMdClose />
          </button>
        )}
        <h3 className="text-lg font-bold flex">
          <MdManageSearch size={25} />
          Pro Manage
        </h3>
        <ul className="list-inside list-none gap-5 flex flex-col text-blue-700 font-medium">
          <li>
            <button onClick={() => handleButtonCategory(null)}>
              Dashboard
            </button>
          </li>
          <li>
            <button
              className={`${
                categoryTask === ProgressTaskProps.pending
                  ? 'bg-blue-200 p-3 transition-all rounded-md'
                  : ''
              }`}
              onClick={() => handleButtonCategory(ProgressTaskProps.pending)}
            >
              ToDo
            </button>
          </li>
          <li>
            <button
              className={`${
                categoryTask === ProgressTaskProps.inProgress
                  ? 'bg-blue-200 p-3 transition-all rounded-md'
                  : ''
              }`}
              onClick={() => handleButtonCategory(ProgressTaskProps.inProgress)}
            >
              In Progress
            </button>
          </li>
          <li>
            <button
              className={`${
                categoryTask === ProgressTaskProps.delayed
                  ? 'bg-blue-200 p-3 transition-all rounded-md'
                  : ''
              }`}
              onClick={() => handleButtonCategory(ProgressTaskProps.delayed)}
            >
              Delayed
            </button>
          </li>
          <li>
            <button
              className={`${
                categoryTask === ProgressTaskProps.completed
                  ? 'bg-blue-200 p-3 transition-all rounded-md'
                  : ''
              }`}
              onClick={() => handleButtonCategory(ProgressTaskProps.completed)}
            >
              Completed
            </button>
          </li>
        </ul>
      </div>

      <button
        className="flex items-center gap-3 bg-orange-100 rounded-xl px-6 py-3 hover:bg-orange-200 transition-all"
        onClick={() => {
          notify('success', 'Logout! Come Back again');
          logout();
        }}
      >
        <CiLogout />
        Log Out
      </button>
    </aside>
  );
}
