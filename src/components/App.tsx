import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ITodo } from '../interfaces';
import { TODOS_KEY, TO_MAIN_PAGE, TO_ABOUT_PAGE } from '../constants/constants';
import { getDataFromStorage, setDataToStorage } from '../utils/storage';
import { About } from './About';
import { Header } from './Header';
import { MainPage } from './MainPage';
import { TodosContext } from '../contexts/todosContext';
import { FilteredListContext } from '../contexts/filteredListContext';

const App: React.FC = () => {

  const { Provider: TodosProvider } = TodosContext;
  const { Provider: FilteredListProvider } = FilteredListContext;

  const [todos, setTodos] = useState<ITodo[]>(getDataFromStorage(TODOS_KEY));
  const [filteredList, setFilteredList] = useState<ITodo[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleAddTodo = useCallback((todoText: string): void => {
    const newTodo: ITodo = {
      todoText,
      id: Date.now(),
      completed: false,
      isImportant: false,
    }
    setTodos(prev => [newTodo, ...prev]);
  }, []);

  const toggleTodo = useCallback((id: number) => {

    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }))
  }, [todos]);

  const togglePriority = useCallback((id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.isImportant = !todo.isImportant
      }
      return todo
    }))
  }, [todos]);

  const handleClickDeleteIcon = useCallback((id: number): void => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const setFilteredListToState = (newFilteredList: ITodo[], isFilteredNewValue: boolean): void => {
    if (isFiltered !== isFilteredNewValue) {
    setIsFiltered(isFilteredNewValue);
    }
    if (!filteredList.length && !newFilteredList.length) return;
    setFilteredList(newFilteredList);
    
   };

  useEffect(() => {
    setDataToStorage(TODOS_KEY, todos)
  }, [todos]);

  return (
    <TodosProvider value={todos}>
      <FilteredListProvider value={filteredList} >
      <Header />
      <div className="container">
        <Switch>
          <Route
            path={TO_MAIN_PAGE}
            exact
            render={() => (
              <MainPage
                handleAddTodo={handleAddTodo}
                toggleTodo={toggleTodo}
                togglePriority={togglePriority}
                handleClickDeleteIcon={handleClickDeleteIcon}
                setFilteredListToState={setFilteredListToState}
                isFiltered={isFiltered}
              />)}
          />

          <Route path={TO_ABOUT_PAGE} component={About} />
            
          <Route>
            <Redirect to={TO_MAIN_PAGE} />
          </Route>
        </Switch>
      </div>
      </FilteredListProvider>
    </TodosProvider>
  );
}

export default App;
