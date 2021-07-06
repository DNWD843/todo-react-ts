import React from 'react';
import classNames from 'classnames';
import { ITodo } from '../interfaces';

type TodoListProps = {
  todos: ITodo[],
  onToggle: (id: number) => void,
  handleClickDeleteIcon: (id: number) => void,
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, handleClickDeleteIcon }) => {
    return (
      <ul>
        {todos.map(todo => {
          const todoClassName = classNames("todo", {
            "completed": todo.completed
          })
          return (
            <li key={todo.id } className={ todoClassName } >
              <label >
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={()=>onToggle(todo.id)}
                />
                <span >{ todo.todoText }</span>
                <i
                  className="material-icons red-text"
                  onClick={() => handleClickDeleteIcon(todo.id)} >delete</i>
              </label>
            </li>
          )}
        )}
      </ul>
    );
}