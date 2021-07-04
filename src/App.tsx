import React, { useState } from 'react';
import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = (todoText: string):void => {
    console.log('добавим такое дело: ', todoText);
  }

  return (
    <>
      <Header />
      <div className="container">
        <TodoForm onAddTodo={handleAddTodo} />
      </div>
    </>
  );
}

export default App;
