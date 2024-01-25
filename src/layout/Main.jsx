
import React, { useState } from 'react';
import './Main.scss';
import TodoCard from '../components/TodoCard';

const Main = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: 'I will Work on todo list',
      status: 'complete',
    },
    {
      id: 2,
      todo: 'sleep',
      status: 'complete',
    },
  ]);

  const [newTodoInput, setNewTodoInput] = useState('');

  const handleInputChange = (e) => {
    setNewTodoInput(e.target.value);
  };

  const submitTodo = (e) => {
    e.preventDefault();

    if (newTodoInput.trim() === '') {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      todo: newTodoInput,
      status: 'incomplete',
    };
    setTodos([...todos, newTodo]);
    setNewTodoInput(''); 
  };

  return (
    <div className="main">
      <form className="form" onSubmit={submitTodo}>
     
        <button className="submit" type="submit"></button>
      
        <input
          className="input"
          type="text"
          placeholder="create a new todo ..."
          value={newTodoInput}
          onChange={handleInputChange}
        />
      </form>
      <div className="todos">
        <TodoCard todos={todos} setTodos={setTodos} />
        <div className="todos-lower">
          <div className="todos-lower-left">
            <p>5 Items Left</p>
          </div>
          <div className="todos-lower-middle">
            <h4>All</h4>
            <h4>Active</h4>
            <h4>Completed</h4>
          </div>
          <div className="btn">
            <button>Clear Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
