import React, { ButtonHTMLAttributes } from 'react';

interface ButtonFormProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  disabled: boolean;
}

export function ButtonForm({ title, disabled, ...props }: ButtonFormProps) {
  if (disabled) {
    return (
      <button
        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 font-medium cursor-default bg-blue-200 pointer-events-none"
        disabled={true}
        {...props}
      >
        Loading...
      </button>
    );
  }

  return (
    <button
      className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 font-medium cursor-pointer"
      type="submit"
      disabled={disabled}
    >
      <div className="inline-flex h-12 translate-y-0 items-center justify-center bg-white px-6 text-neutral-950 transition group-hover:-translate-y-[150%] w-full">
        {title}
      </div>
      <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center bg-blue-500 px-6 text-neutral-50 transition duration-300 group-hover:translate-y-0">
        {title}
      </div>
    </button>
  );
}
