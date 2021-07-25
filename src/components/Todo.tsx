import React from "react";
import classNames from 'classnames';
import { ITodoProps } from "../interfaces";
import { DELETE_ICON_TYPE, PRIORITY_ICON_TYPE } from "../constants/constants";

/*
Можно указать типы пропс в виде объекта типов.
type TTodoProps = {
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
    });

    const priorityIconClassName = classNames("material-icons purple-text", {
        "text-darken-3": isImportant,
        "text-accent-1": !isImportant
    });

    return (
        <li key={id} className={todoClassName} >
            <label className="label">
                <input
                    id="checkbox"
                    type="checkbox"
                    checked={completed}
                    onChange={() => onToggle(id)}
                />
                <span>{todoText}</span>
            </label>

            <div className="icons">
                <i
                    className={priorityIconClassName}
                    onClick={() => onTogglePriority(id)}
                >{PRIORITY_ICON_TYPE}</i>
                <i
                    className="material-icons red-text"
                    onClick={() => handleClickDeleteIcon(id)}>{DELETE_ICON_TYPE}</i>
            </div>
        </li>
    );
};
