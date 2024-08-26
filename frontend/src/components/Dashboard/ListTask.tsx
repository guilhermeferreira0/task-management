import React from 'react';

interface ListTaskProps {
  title: string;
  classColor: string;
}

export function ListTask({ title, classColor }: ListTaskProps) {
  return (
    <section className={`${classColor} w-full rounded-md p-3`}>
      <h4 className={`font-semibold text-gray-600`}>{title}</h4>
    </section>
  );
}
