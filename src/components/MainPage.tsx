import React, { useContext } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodosContext } from '../contexts/todosContext';
import { FilteredListContext } from '../contexts/filteredListContext';
import { IMainPageProps } from '../interfaces';
import { FilterPanel } from './FilterPanel';

export const MainPage: React.FC<IMainPageProps> = (props) => {
  const {
    handleAddTodo,
    toggleTodo,
    handleClickDeleteIcon,
    togglePriority,
    setFilteredListToState,
    isFiltered,
  } = props;
  const todos = useContext(TodosContext);
  const filteredList = useContext(FilteredListContext);
  //const isFiltered: boolean = !!filteredList.length;

  return (
    <>
      <TodoForm onAddTodo={handleAddTodo} />
      <FilterPanel setFilteredListToState={setFilteredListToState} />
      <TodoList
        todos={isFiltered ? filteredList : todos}
        onToggle={toggleTodo}
        handleClickDeleteIcon={handleClickDeleteIcon}
        onTogglePriority={togglePriority}
      />
    </>
  )
}


