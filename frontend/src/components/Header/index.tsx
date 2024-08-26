import React from 'react';
import defaultProfile from '../../assets/images/img_avatar.png';
import { FiMenu } from 'react-icons/fi';

export function NavBar() {
  return (
    <header className="fixed flex items-center justify-between border-b bg-white h-24 px-8 gap-8 top-0 right-0 w-[75%] max-md:w-full">
      <button>
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
      <div>
        <img
          src={defaultProfile}
          alt="default profile"
          className="h-12 rounded-2xl"
        />
      </div>
    </header>
  );
}
