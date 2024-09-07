import React from 'react';
import backgroundImage from '../../assets/images/montain-bg.jpg';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section>
      <div className="absolute -z-20 h-full w-full top-0 right-0">
        <img
          src={backgroundImage}
          alt="montain defalt"
          className="w-full h-full bg-cover"
        />
      </div>
      <section className="flex flex-col w-screen items-center justify-center h-screen">
        <div>
          <h2 className="text-2xl">
            Error 404 | <strong>Not Found</strong>
          </h2>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl">Return to routes: </h2>
          <ul className="list-disc flex flex-col p-5 gap-3 text-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
