import React, { useState, useContext } from 'react';
import { TodosContext } from '../contexts/todosContext';
import classNames from 'classnames';
import { SEARCH_FORM_INPUT_LABEL, SEARCH_FORM_INPUT_PLACEHOLDER } from '../constants/constants';
import { ITodo, IFilterPanelProps } from '../interfaces';

export const FilterPanel:React.FC<IFilterPanelProps> = ({setFilteredListToState}) => {
    const todosList = useContext(TodosContext);
    const [value, setValue] = useState<string>('')

    const searchIconClassName = classNames("material-icons",
        {
            "purple-text text-darken-2": value,
            "grey-text text-lighten-1": !value
        })

    /**
     * @method handleInputChange
     * @description Обработчик ввода значений в инпут добавления задачи
     * @param {SyntheticEvent} evt - событие
     * @returns {void} void
     * @since v.1.0.0
     * @public
     */
    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(evt.target.value);
        const filteredList: ITodo[] = todosList
            .filter(todo => todo
                .todoText
                .toLowerCase()
                .includes(evt.target.value.toLowerCase()));
        setFilteredListToState(filteredList);
        
    }

    const handleClickImportantButton = ():void => {
        const filteredList: ITodo[] = todosList
            .filter(todo => todo.isImportant);
        setFilteredListToState(filteredList);
        }

    const handleClickDoneButton = (): void => {
        const filteredList: ITodo[] = todosList
            .filter(todo => todo.completed);
        setFilteredListToState(filteredList);
       }

    const handleClickActiveButton = (): void => {
        const filteredList: ITodo[] = todosList.filter(todo => !todo.completed);
        setFilteredListToState(filteredList);
    }

    const handleClickResetButton = () => {
        setFilteredListToState([]);
        setValue('');
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
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <div className="form-field">
                <div className="input-field mt2">
                    <input
                        value={value}
                        onChange={handleInputChange}
                        type="text"
                        id="title"
                        placeholder={SEARCH_FORM_INPUT_PLACEHOLDER}
                    />
                    <label htmlFor="title" className="active">
                        {SEARCH_FORM_INPUT_LABEL}
                    </label>
                </div>
                <button
                    id="search-submit"
                    type="submit"
                    disabled={!value}
                >
                    <i
                        id="search-icon"
                        className={searchIconClassName}
                    >search</i>
                </button>
            </div>

            <button
                type="button"
                className="filter-button waves-effect waves-light btn-small"
                onClick={handleClickResetButton}
            >Reset</button>
            <button
                type="button"
                className="filter-button waves-effect waves-light btn-small "
                onClick={handleClickImportantButton}
            >Important</button>
            <button
                type="button"
                className="filter-button waves-effect waves-light btn-small"
                onClick={handleClickDoneButton}
            >Done</button>
            <button
                type="button"
                className="filter-button waves-effect waves-light btn-small"
                onClick={handleClickActiveButton}
            >Active</button>

        </form>
    )
}