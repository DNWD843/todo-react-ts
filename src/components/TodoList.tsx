import React from 'react';
import { Todo } from './Todo';
import { ITodoListProps } from '../interfaces';
import { TODOLIST_IS_EMPTY } from '../constants/constants';

export const TodoList: React.FC<ITodoListProps> = ({
  todos, onToggle, handleClickDeleteIcon, onTogglePriority
}) => {
  if (!todos.length) { return <h5 className="center no-todos-title">{TODOLIST_IS_EMPTY}</h5 > }
  return (
    <ul>
      {todos.map(todo => {
        const { id, completed, todoText, isImportant } = todo
        return (
          <Todo
            key={id}
            id={id}
            completed={completed}
            todoText={todoText}
            isImportant={isImportant}
            onToggle={onToggle}
            handleClickDeleteIcon={handleClickDeleteIcon}
            onTogglePriority={onTogglePriority}
          />
        );
      }
      )}
    </ul>
  );
};
