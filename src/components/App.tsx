import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ITodo } from '../interfaces';
import { TODOS_KEY } from '../constants/constants';
import { getDataFromStorage, setDataToStorage } from '../utils/storage';
import { About } from './About';
import { Header } from './Header';
import { MainPage } from './MainPage';
import { TodosContext } from '../contexts/todosContext';

const App: React.FC = () => {

  const { Provider: TodosProvider } = TodosContext;

  const [todos, setTodos] = useState<ITodo[]>(getDataFromStorage(TODOS_KEY));

  const handleAddTodo = useCallback((todoText: string): void => {
    const newTodo: ITodo = {
      todoText,
      id: Date.now(),
      completed: false,
      isImportant: false,
    }
    setTodos(prev => [newTodo, ...prev]);
  }, [])

  const toggleTodo = useCallback((id: number) => {

    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }))
  }, [todos])

  const togglePriority = useCallback((id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.isImportant = !todo.isImportant
      }
      return todo
    }))
  }, [todos])

  const handleClickDeleteIcon = useCallback((id: number): void => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, [])

  /* useEffect(() => {
    setTodos(getDataFromStorage(TODOS_KEY));
  }, [])  */

  useEffect(() => {
    setDataToStorage(TODOS_KEY, todos)
  }, [todos])

  return (

    <TodosProvider value={todos}>
      <Header />
      <div className="container">
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <MainPage
                handleAddTodo={handleAddTodo}
                toggleTodo={toggleTodo}
                togglePriority={togglePriority}
                handleClickDeleteIcon={handleClickDeleteIcon}

              />)}
          />

          <Route path="/about" component={About} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </TodosProvider>
  );


}


export default App;
