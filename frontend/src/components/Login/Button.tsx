import React, { ButtonHTMLAttributes } from 'react';

interface ButtonFormProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isLoading: boolean;
}

export function ButtonForm({ title, isLoading, ...props }: ButtonFormProps) {
  return (
    <button
      className="bg-blue-500 px-6 py-3 rounded-md text-white font-semibold hover:bg-blue-600"
      disabled={isLoading}
      type="submit"
      {...props}
    >
      {isLoading ? (
        <div className="flex justify-center items-center">
          <svg
            className="mr-3 h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="font-medium"> Processing... </span>
        </div>
      ) : (
        title
      )}
    </button>
  );
}
