import { TaskProps, IFormTaskInput } from '../../types/taskProps';

export interface TaskContextProps {
  allTasks: TaskProps[];
  registerTask: (data: IFormTaskInput) => Promise<void>;
}
