import React from 'react';
import defaultProfile from '../../assets/images/img_avatar.png';
import { FiMenu } from 'react-icons/fi';
import { useMenuContext } from '../../contexts/MenuContext/userMenuContext';

export function NavBar() {
  const { setMenuIsOpen } = useMenuContext();

  return (
    <header className="fixed flex items-center justify-between border-b bg-white h-24 px-8 gap-8 top-0 right-0 w-[65%] lg:w-[calc(100%-256px)] max-md:w-full">
      <button
        onClick={() => setMenuIsOpen(true)}
        className="md:opacity-0 z-40 md:hidden"
      >
        <FiMenu size={27} />
      </button>
      <div className="w-full flex">
        <div className="relative">
          <input
            placeholder="Search..."
            className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
            type="search"
            name="search"
          />
          <svg
            className="size-6 absolute top-3 right-3 text-gray-500"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
      </div>
      <div className="w-12 rounded-xl overflow-hidden">
        <img
          src={defaultProfile}
          alt="default profile"
          className="w-full bg-cover"
        />
      </div>
    </header>
  );
}
