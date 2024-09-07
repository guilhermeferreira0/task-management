import { TaskProps } from '../../types/taskProps';

export interface TaskContextProps {
  allTasks: TaskProps[];
  setAllTasks: (vl: TaskProps[]) => void;
}
