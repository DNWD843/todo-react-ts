import { createContext } from 'react';
import { ITodo } from '../interfaces';

export const FilteredListContext = createContext([] as ITodo[]);