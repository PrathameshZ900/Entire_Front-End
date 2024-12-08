import React from 'react';

const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;