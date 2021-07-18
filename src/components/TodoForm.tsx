import React, { useState } from "react";
import { ITodoFormProps } from "../interfaces";
import classNames  from "classnames";

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
    <form onSubmit={handleSubmit} className="add-todo-form">
      <div className="input-field mt2">
        <input
          value={value}
          onChange={handleInputChange}
          type="text"
          id="title"
          placeholder="Введите название дела"
        />
        <label htmlFor="title" className="active">
          Введите название дела
        </label>
      </div>
      <button
        type="submit"
        disabled={!value}
      >
        <i
          className={addIconClassName}>add</i>
      </button>

    </form>
  )
}