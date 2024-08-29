import React, { ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function ModalUpdateUser({ open, onClose, children }: ModalProps) {
  return (
    // backdrop
    <div
      onClick={() => {
        onClose();
      }}
      className={`
      fixed inset-0 flex justify-center items-center transition-colors z-[70] ${
        open ? 'visible bg-black/20 z-50' : 'invisible'
      }
    `}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`
          bg-white rounded-xl shadow w-[70%] p-6 md:w-2/5 transition-all ${
            open ? `scale-100 opacity-100` : 'scale-125 opacity-0'
          }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
