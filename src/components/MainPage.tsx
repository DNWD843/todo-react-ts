import React, { useContext } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodosContext } from '../contexts/todosContext';
import { IMainPageProps } from '../interfaces';

export const MainPage: React.FC<IMainPageProps> = (props) => {
  const { handleAddTodo, toggleTodo, handleClickDeleteIcon, togglePriority } = props;
  const todos = useContext(TodosContext);
  
  return (
    <>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        handleClickDeleteIcon={handleClickDeleteIcon}
        onTogglePriority={togglePriority} 
      />
    </>
  )
}


