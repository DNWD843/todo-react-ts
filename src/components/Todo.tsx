import React from "react";
import classNames from 'classnames';
import { ITodoProps } from "../interfaces";

/*
Можно указать типы пропс в виде объекта типов.
type TodoProps = {
    id: number
    completed: boolean
    todoText: string
    isImportant: boolean
    onToggle: (id: number) => void
    handleClickDeleteIcon: (id: number) => void
    onTogglePriority: (id: number) => void
} */

export const Todo: React.FC<ITodoProps> = ({
    id,
    completed,
    todoText,
    isImportant,
    onToggle,
    handleClickDeleteIcon,
    onTogglePriority }) => {

    const todoClassName = classNames("todo ", {
        "completed": completed,
        "important": isImportant
    })

    const priorityIconClassName = classNames("material-icons purple-text", {
        "text-darken-3": isImportant,
        "text-lighten-1": !isImportant
    })

    return (
        <li key={id} className={todoClassName} >
            <label className="label">
                <input
                    id="checkbox"
                    type="checkbox"
                    checked={completed}
                    onChange={() => onToggle(id)}
                />
                <span >{todoText}</span>

            </label>
            <div className="icons">
                <i
                    className={priorityIconClassName}
                    onClick={() => onTogglePriority(id)}
                >priority_high</i>
                <i
                    className="material-icons red-text"
                    onClick={() => handleClickDeleteIcon(id)} >delete</i>
            </div>
        </li>
    )
};