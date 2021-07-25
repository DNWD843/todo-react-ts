import React, { useState, useContext } from 'react';
import { TodosContext } from '../contexts/todosContext';
import classNames from 'classnames';
import {
    SEARCH_FORM_INPUT_LABEL,
    SEARCH_FORM_INPUT_PLACEHOLDER,
    RESET_BUTTON_TEXT,
    IMPORTANT_BUTTON_TEXT,
    DONE_BUTTON_TEXT,
    ACTIVE_BUTTON_TEXT,
    SEARCH_ICON_TYPE,
    EMPTY_VALUE,
} from '../constants/constants';
import { ITodo, IFilterPanelProps} from '../interfaces';

export const FilterPanel: React.FC<IFilterPanelProps> = ({ setFilteredListToState }) => {
    const todosList = useContext(TodosContext);
    const [value, setValue] = useState<string>(EMPTY_VALUE)

    const searchIconClassName = classNames("material-icons",
        {
            "purple-text text-darken-2": value,
            "grey-text text-lighten-1": !value,
        });

    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(evt.target.value);
        const filteredList: ITodo[] = todosList
            .filter(todo => todo
                .todoText
                .toLowerCase()
                .includes(evt.target.value.toLowerCase()));
        setFilteredListToState(filteredList, true);
    }

    const handleClickImportantButton = (): void => {
        const filteredList: ITodo[] = todosList
            .filter(todo => todo.isImportant);
        setFilteredListToState(filteredList, true);
    }

    const handleClickDoneButton = (): void => {
        const filteredList: ITodo[] = todosList
            .filter(todo => todo.completed);
        setFilteredListToState(filteredList, true);
    }

    const handleClickActiveButton = (): void => {
        const filteredList: ITodo[] = todosList.filter(todo => !todo.completed);
        setFilteredListToState(filteredList, true);
    }

    const handleClickResetButton = () => {
        setFilteredListToState([], false);
        setValue(EMPTY_VALUE);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setValue(EMPTY_VALUE);
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <div className="form-field">
                <div className="input-field mt2">
                    <input
                        value={value}
                        onChange={handleInputChange}
                        type="text"
                        id="filter-panel-title"
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
                    >{SEARCH_ICON_TYPE}</i>
                </button>
            </div>

            <button
                type="button"
                className="filter-button waves-effect waves-light btn-small"
                onClick={handleClickResetButton}
            >{RESET_BUTTON_TEXT}</button>
            <button
                type="button"
                className="filter-button waves-effect waves-light btn-small "
                onClick={handleClickImportantButton}
            >{IMPORTANT_BUTTON_TEXT}</button>
            <button
                type="button"
                className="filter-button waves-effect waves-light btn-small"
                onClick={handleClickDoneButton}
            >{DONE_BUTTON_TEXT}</button>
            <button
                type="button"
                className="filter-button waves-effect waves-light btn-small"
                onClick={handleClickActiveButton}
            >{ACTIVE_BUTTON_TEXT}</button>
        </form>
    );
};