import React, { useState } from 'react';
import { MdManageSearch } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';

export function MenuAside() {
  const [menuIsOpen] = useState(false);

  return (
    <aside
      className={`fixed top-0 w-[25%] bg-gray-100 z-10 h-full flex flex-col justify-between items-center p-7 shadow-2xl ${
        menuIsOpen ? 'left-0' : 'max-md:left-full'
      }`}
    >
      <div className="flex flex-col gap-8">
        <h3 className="text-lg font-bold flex">
          <MdManageSearch size={25} />
          Pro Manage
        </h3>
        <ul className="list-inside list-none gap-5 flex flex-col text-blue-700 font-medium">
          <li>
            <a href="">Dashboard</a>
          </li>
          <li>
            <a href="">ToDo</a>
          </li>
          <li>
            <a href="">In Progress</a>
          </li>
          <li>
            <a href="">Delayed</a>
          </li>
          <li>
            <a href="">Completed</a>
          </li>
        </ul>
      </div>

      <button className="flex items-center gap-3 bg-orange-100 rounded-xl px-6 py-3">
        <CiLogout />
        Log Out
      </button>
    </aside>
  );
}
