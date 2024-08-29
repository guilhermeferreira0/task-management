import React from 'react';
import { TbBrandGithub } from 'react-icons/tb';
import { MdWeb } from 'react-icons/md';

export function FooterPage() {
  return (
    <footer className="p-4 sm:p-10 flex flex-col justify-center bg-gradient-to-b from-cyan-50 to-blue-200 mt-8">
      <ul className="w-full flex flex-col sm:grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
        <li>
          <h4 className="font-semibold text-lg">About the Project</h4>
          <p className="text-justify text-xs sm:text-base">
            Developed with dedication and creativity for the{' '}
            <strong>Jackiexperts</strong> challenge. This website represents a
            blend of innovative design and functionality, aiming to provide the
            best user experience.
          </p>
        </li>
        <li>
          <h4 className="font-semibold text-lg">Contact</h4>
          <p className="text-justify text-xs sm:text-base">
            For more information, please reach out to us at:{' '}
            <strong className="max-sm:text-[10px]">
              guilherme.fsilva23@gmail.com
            </strong>
          </p>
        </li>
        <li>
          <h4 className="font-semibold text-lg">Social Media </h4>
          <p className="text-justify text-xs sm:text-base">
            Follow us on social media to stay updated:
          </p>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
            <a
              href="https://github.com/guilhermeferreira0/task-management"
              className="flex justify-center items-center gap-2 text-xs sm:text-base"
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandGithub /> Github
            </a>
            <a
              href="https://gf-portfolio-eight.vercel.app/"
              className="flex justify-center items-center gap-2 text-xs sm:text-base"
              target="_blank"
              rel="noreferrer"
            >
              <MdWeb /> Portfolio
            </a>
          </div>
        </li>
        <li>
          <p className="text-xs sm:text-base">
            <strong>Copyright </strong>© 2024{' '}
            <strong>Guilherme Ferreira</strong>. All rights reserved.
          </p>
        </li>
      </ul>
    </footer>
  );
}
