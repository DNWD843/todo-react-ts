import React, { useState } from "react";
/**
 * Интерфейс пропсов компонента TodoForm
 */
interface ITodoFormProps {
  onAddTodo(todoText: string): void
}

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
  const handlePressEnter = (evt: React.KeyboardEvent):void => {
    if (evt.key === 'Enter') {
      onAddTodo(value);
      setValue('');
    }
  }

  return (
      <div className="input-field mt2">
      <input
        value={value}
        onChange={handleInputChange}
        onKeyPress={handlePressEnter}
        type="text"
        id="title"
        placeholder="Введите название дела"
      />
        <label htmlFor="title" className="active">
          Введите название дела
        </label>
      </div>
  )
}