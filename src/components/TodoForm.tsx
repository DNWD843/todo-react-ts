import React, { useState } from "react";
import { ITodoFormProps } from "../interfaces";
import classNames  from "classnames";
import {
  TODO_FORM_INPUT_LABEL,
  TODO_FORM_INPUT_PLACEHOLDER,
  TODO_FORM_ADD_BUTTON_TITLE,
  ADD_ICON_TYPE,
  EMPTY_VALUE,
} from "../constants/constants";

export const TodoForm: React.FC<ITodoFormProps> = (props) => {
  const [value, setValue] = useState<string>(EMPTY_VALUE)
  const { onAddTodo } = props;

  const addIconClassName = classNames("material-icons",
    {
      "purple-text text-darken-2": value,
      "grey-text text-lighten-1": !value
    });
  
  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(evt.target.value)
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onAddTodo(value);
    setValue(EMPTY_VALUE);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="input-field mt2">
        <input
          value={value}
          onChange={handleInputChange}
          type="text"
          id="add-form-title"
          placeholder={TODO_FORM_INPUT_PLACEHOLDER}
        />
        <label htmlFor="title" className="active">
          {TODO_FORM_INPUT_LABEL}
        </label>
      </div>
      <button
        id="add-submit"
        type="submit"
        disabled={!value}
        title={value ? TODO_FORM_ADD_BUTTON_TITLE : EMPTY_VALUE}
      >
        <i
          className={addIconClassName}>{ ADD_ICON_TYPE }</i>
      </button>
    </form>
  );
};
