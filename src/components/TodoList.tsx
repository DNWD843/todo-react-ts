import React from 'react';

import { Todo } from './Todo';
import { ITodo } from '../interfaces';
import { TODOLIST_IS_EMPTY } from '../constants/constants';

type TodoListProps = {
  todos: ITodo[],
  onToggle: (id: number) => void,
  handleClickDeleteIcon: (id: number) => void,
  onTogglePriority: (id: number) => void,
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, handleClickDeleteIcon, onTogglePriority }) => {
  if (!todos.length) { return <h5 className="center no-todos-title">{TODOLIST_IS_EMPTY }</h5 >}
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
          )}
        )}
      </ul>
    );
}