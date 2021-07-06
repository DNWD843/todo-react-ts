import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './interfaces';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAddTodo = useCallback((todoText: string): void => {
    const newTodo: ITodo = {
      todoText,
      id: Date.now(),
      completed: false,
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
  
  const handleClickDeleteIcon = useCallback((id: number): void => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          handleClickDeleteIcon={handleClickDeleteIcon}
        />
      </div>
    </>
  );
}

export default App;
