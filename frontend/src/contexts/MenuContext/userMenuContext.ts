import { useContext } from 'react';
import { Context } from './index';

export function useMenuContext() {
  return useContext(Context);
}
