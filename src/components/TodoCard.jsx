// TodoCard.jsx

import React from 'react';
import './TodoCard.scss';
import CheckInputBtn from './CheckInputBtn';
import DeleteIcon from '../assets/icon-cross.svg';
import EditIcon from '../assets/edit3.svg';

const TodoCard = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    const findIndex=todos.findIndex(todo=>todo.id===id)
    if(findIndex!==-1){
        const newTodos=[...todos];
        newTodos.splice(findIndex,1)
        setTodos(newTodos)
    }
  };

  const updateTodo = (id) => {
    const updatedTodoText = prompt('Update todo:', todos.find(todo => todo.id === id)?.todo);
    
    if (updatedTodoText !== null && updatedTodoText.trim() !== '') {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: updatedTodoText } : todo)));
    }
  };

  return (
    <div>
      {todos &&
        todos
          .sort((a, b) => b.id - a.id)
          .map((todo) => (
            <div key={todo.id} className="main-card">
              <div className="todo-content">
                <CheckInputBtn />
                <span>{todo.todo}</span>
              </div>
              <div className="content-icons">
                <button onClick={() => updateTodo(todo.id)}>
                  <img src={EditIcon} alt="" />
                </button>
                <button onClick={() => deleteTodo(todo.id)}>
                  <img src={DeleteIcon} alt="" />
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default TodoCard;
