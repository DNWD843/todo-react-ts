import React, { useState } from "react";
import { ITodoFormProps } from "../interfaces";
import classNames  from "classnames";
import { TODO_FORM_INPUT_LABEL, TODO_FORM_INPUT_PLACEHOLDER, TODO_FORM_ADD_BUTTON_TITLE } from "../constants/constants";

/**
 * @function TodoForm
 * @description Функциональный компонент
 * Форма добавления задачи.
 * @param {ITodoFormProps} props
 * @property {function} props.onAddTodo - метод сохранения набранной задачи 
 * @returns {void} void
 * @since v.1.0.0
 * @public
 */
export const TodoForm: React.FC<ITodoFormProps> = (props) => {
  const [value, setValue] = useState<string>('')
  const { onAddTodo } = props;

  const addIconClassName = classNames("material-icons", 
    {
      "purple-text text-darken-2": value,
      "grey-text text-lighten-1": !value
  } )
  /**
   * @method handleInputChange
   * @description Обработчик ввода значений в инпут добавления задачи
   * @param {SyntheticEvent} evt - событие
   * @returns {void} void
   * @since v.1.0.0
   * @public
   */
  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(evt.target.value)
  }

  /**
   * @method handlePressEnter
   * @description Обработчик нажатия на "Enter" - сохранения набранной задачи
   * @param {SyntheticEvent} evt - событие
   * @returns {void} void
   * @since v.1.0.0
   * @public
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onAddTodo(value);
    setValue('');
  }

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
        title={value ? TODO_FORM_ADD_BUTTON_TITLE : ''}
      >
        <i
          className={addIconClassName}>add</i>
      </button>

    </form>
  )
}