import React from "react";
import classNames from 'classnames';

type TodoProps = {
    id: number,
    completed: boolean,
    todoText: string,
    onToggle: (id: number) => void,
    handleClickDeleteIcon: (id: number) => void,
}

export const Todo: React.FC<TodoProps> = ({ id, completed, todoText, onToggle, handleClickDeleteIcon }) => {
    
    const todoClassName = classNames("todo", {
        "completed": completed
      })

    return (
        <li key={id } className={ todoClassName } >
              <label >
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={completed}
                  onChange={() => onToggle(id)}
                />
                <span >{ todoText }</span>
                <i
                  className="material-icons red-text"
                  onClick={() => handleClickDeleteIcon(id)} >delete</i>
              </label>
            </li>
    )
};