export interface IFormTaskInput {
  title: string;
  description: string;
  progress: ProgressTaskProps;
}

export interface TaskProps extends IFormTaskInput {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
}

export enum ProgressTaskProps {
  pending = 'pending',
  inProgress = 'inProgress',
  delayed = 'delayed',
  completed = 'completed',
}
