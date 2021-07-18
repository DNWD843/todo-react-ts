import { createContext } from "react";
import { ITodo } from '../interfaces'

export const TodosContext = createContext([] as ITodo[]);