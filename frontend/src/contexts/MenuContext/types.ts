import { TaskProps } from '../../types/taskProps';

export interface MenuContextProps {
  menuIsOpen: boolean;
  setMenuIsOpen: (vl: boolean) => void;
  modalIsOpen: boolean;
  setModalIsOpen: (vl: boolean) => void;
  updateTaskModal: TaskProps | null;
  setUpdateTaskModal: (vl: TaskProps | null) => void;
}
