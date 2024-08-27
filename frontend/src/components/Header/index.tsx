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
        <input
          type="text"
          name="search"
          id="search"
          className="border w-full h-8 p-5 rounded-lg"
          placeholder="Search"
        />
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
