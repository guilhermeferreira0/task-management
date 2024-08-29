import React, { ReactNode } from 'react';
import { useMenu } from '../../contexts/MenuContext/useMenu';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
  const { setUpdateTaskModal, setTaskDetailsModal, taskDetailsModal } =
    useMenu();

  return (
    // backdrop
    <div
      onClick={() => {
        setTaskDetailsModal(null);
        setUpdateTaskModal(null);
        onClose();
      }}
      className={`
      fixed inset-0 flex justify-center items-center transition-colors ${
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
          } ${
            taskDetailsModal
              ? 'w-[70%] h-[80%] overflow-y-scroll sm:w-3xl sm:h-max'
              : 'w-2/4'
          }
        `}
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
