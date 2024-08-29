import React from 'react';
import { useMenu } from '../../contexts/MenuContext/useMenu';

export function TaskDetails() {
  const { taskDetailsModal } = useMenu();

  return (
    <div>
      <div className="flex gap-2 xl:flex-col max-sm:flex-col xl:gap-0">
        <strong>Title:</strong>
        <p className="">{taskDetailsModal?.title}</p>
      </div>
      <div className="flex gap-2 xl:flex-col max-sm:flex-col xl:gap-0">
        <p className="text-justify line-clamp-[20]">
          <strong>Description: </strong>
          {taskDetailsModal?.description}
        </p>
      </div>
      <div className="flex gap-2 xl:flex-col max-sm:flex-col xl:gap-0">
        <strong>created:</strong>
        <p>{taskDetailsModal?.createdAt?.split(':')[0]}</p>
      </div>
      <div className="flex gap-2 xl:flex-col max-sm:flex-col xl:gap-0">
        <strong>updated:</strong>
        <p>{taskDetailsModal?.updatedAt?.split(':')[0]}</p>
      </div>
    </div>
  );
}
