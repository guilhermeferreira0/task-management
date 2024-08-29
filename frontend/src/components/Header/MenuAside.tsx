import React from 'react';
import { MdManageSearch } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { CiLogout } from 'react-icons/ci';
import { useMenu } from '../../contexts/MenuContext/useMenu';
import { useAuth } from '../../contexts/AuthContext/useAuth';
import { useNavigate } from 'react-router-dom';
import { useFilter } from '../../contexts/FilterContext/useFilter';
import { ProgressTaskProps } from '../../types/taskProps';

export function MenuAside() {
  const { menuIsOpen, setMenuIsOpen } = useMenu();
  const { setCategoryTask } = useFilter();
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <aside
      className={`fixed top-0 w-[40%] lg:w-64 bg-gray-100 z-20 h-full flex flex-col justify-between items-center p-7 shadow-2xl ${
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
            <button onClick={() => setCategoryTask(null)}>Dashboard</button>
          </li>
          <li>
            <button onClick={() => setCategoryTask(ProgressTaskProps.pending)}>
              ToDo
            </button>
          </li>
          <li>
            <button
              onClick={() => setCategoryTask(ProgressTaskProps.inProgress)}
            >
              In Progress
            </button>
          </li>
          <li>
            <button onClick={() => setCategoryTask(ProgressTaskProps.delayed)}>
              Delayed
            </button>
          </li>
          <li>
            <button
              onClick={() => setCategoryTask(ProgressTaskProps.completed)}
            >
              Completed
            </button>
          </li>
        </ul>
      </div>

      <button
        className="flex items-center gap-3 bg-orange-100 rounded-xl px-6 py-3"
        onClick={() => {
          logout();
          navigate('/');
        }}
      >
        <CiLogout />
        Log Out
      </button>
    </aside>
  );
}
