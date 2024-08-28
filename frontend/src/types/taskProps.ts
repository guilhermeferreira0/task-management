export interface IFormTaskInput {
  title: string;
  description: string;
  progress: string;
}

export interface TaskProps {
  id?: string;
  title: string;
  description: string;
  progress: string;
  createdAt?: string;
  updatedAt?: string;
}
