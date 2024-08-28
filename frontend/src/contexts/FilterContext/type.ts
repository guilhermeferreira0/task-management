import { ProgressTaskProps } from '../../types/taskProps';

export interface FilterContextProps {
  deferedSearch: string;
  search: string;
  setSearch: (vl: string) => void;
  categoryTask: ProgressTaskProps | null;
  setCategoryTask: (vl: ProgressTaskProps | null) => void;
}
