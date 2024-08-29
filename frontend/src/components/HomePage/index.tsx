import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/images/montain-bg.jpg';
import { FooterPage } from '../Footer';

export function HomePage() {
  return (
    <section className="flex flex-col h-lvh justify-center items-center">
      <div className="absolute -z-20 h-full w-full top-0 right-0">
        <img
          src={backgroundImage}
          alt="montain defalt"
          className="w-full h-full bg-cover"
        />
      </div>
      <div className="w-[85%] md:w-[57%] h-[80%] bg-gradient-to-r bg-gray-50 shadow-xl rounded-sm p-10 flex flex-col gap-2 sm:gap-5 text-justify overflow-y-scroll">
        <h1 className="text-base md:text-lg font-bold">
          Welcome to Task Manager
        </h1>
        <p className="text-xs sm:text-base">
          Task Management is your comprehensive solution for managing tasks and
          users efficiently and intuitively. With our platform, you can:
        </p>
        <ul className="list-disc list-inside text-xs sm:text-base">
          <li>
            <strong>Manage Tasks: </strong>Easily create, update, and delete
            user profiles..
          </li>
          <li>
            <strong>Manage Tasks: </strong>Perform full CRUD (Create, Read,
            Update, Delete) operations to keep your tasks organized..
          </li>
          <li>
            <strong>Filter Tasks: </strong>Use advanced filters to view and
            manage tasks according to your needs.
          </li>
          <li>
            <strong>Search by Keyword: </strong>Quickly find specific tasks
            using our intuitive search bar
          </li>
        </ul>
        <p className="text-xs sm:text-base">
          Our mission is to provide a seamless task management experience,
          helping you stay productive and organized. Explore the features and
          see how we can transform the way you handle your activities.
        </p>
        <FooterPage />
        <div>
          <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200">
            <span>
              <Link to="/login">Sign In</Link>
            </span>
            <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
