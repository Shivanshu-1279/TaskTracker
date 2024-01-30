import React from 'react';
import './todoItem.css';

export const TodoItem = ({ todo, onDelete, onComplete }) => {
  return (
    <div className="todo-box" style={boxStyle}>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <span className="created-on">{todo.createdOn}</span>
      <button type="button" className="complete-btn" onClick={() => { onComplete(todo) }}>Complete</button>
      <button type="button" style={btnStyle} onClick={() => { onDelete(todo) }}>Delete</button>
      {todo.completed && <span className="completed-tick">&#10003;</span>}
      <hr />
    </div>
  );
};

const boxStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  marginBottom: '20px',
  backgroundColor: '#f4f4f4',
  position: 'relative',
};

const btnStyle = {
  background: '#dc3545',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '3px',
  cursor: 'pointer',
};
