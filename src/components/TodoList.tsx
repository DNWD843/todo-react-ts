import React from 'react';

import { Todo } from './Todo';
import { ITodo } from '../interfaces';
import { TODOLIST_IS_EMPTY } from '../constants/constants';

type TodoListProps = {
  todos: ITodo[],
  onToggle: (id: number) => void,
  handleClickDeleteIcon: (id: number) => void,
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, handleClickDeleteIcon }) => {
  if (!todos.length) { return <h5 className="center no-todos-title">{TODOLIST_IS_EMPTY }</h5 >}
    return (
      <ul>
        {todos.map(todo => {
          const { id, completed, todoText } = todo
          return (
            <Todo
              id={id}
              completed={completed}
              todoText={todoText}
              onToggle={onToggle}
              handleClickDeleteIcon={handleClickDeleteIcon}
            />
          )}
        )}
      </ul>
    );
}