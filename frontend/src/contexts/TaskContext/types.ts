import { TaskProps, IFormTaskInput } from '../../types/taskProps';

export interface TaskContextProps {
  allTasks: TaskProps[];
  registerTask: (data: IFormTaskInput) => Promise<boolean>;
  updateTask: (data: IFormTaskInput, id: string) => Promise<boolean>;
}
