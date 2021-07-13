import React, { useState, useEffect, useCallback } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { ITodo } from '../interfaces';
import { TODOS_KEY } from '../constants/constants';
import { getDataFromStorage, setDataToStorage } from '../utils/storage';


export const MainPage: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([]);

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

  useEffect(() => {
    setTodos(getDataFromStorage(TODOS_KEY));
  }, [])

  useEffect(() => {
    setDataToStorage(TODOS_KEY, todos)
  }, [todos])


  return (
    <>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        handleClickDeleteIcon={handleClickDeleteIcon}
        onTogglePriority={togglePriority} 
      />
    </>
  )
}


