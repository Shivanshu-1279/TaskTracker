
import React, { useState } from 'react';
import { TodoItem } from './TodoItem';

export const Todos = ({ todos, onDelete, onComplete, handleDragStart, handleDrop, handleDragOver }) => {
  const [showAll, setShowAll] = useState(true);
  const [showPending, setShowPending] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  
  let myStyle = {
    minHeight: "100vh",
    margin: "30px auto",
  };

  const handleAllClick = () => {
    setShowAll(true);
    setShowPending(false);
    setShowCompleted(false);
  };

  const handlePendingClick = () => {
    setShowAll(false);
    setShowPending(true);
    setShowCompleted(false);
  };

  const handleCompletedClick = () => {
    setShowAll(false);
    setShowPending(false);
    setShowCompleted(true);
  };
   
  return (
    <div className="container" style={myStyle} onDragOver={handleDragOver}>
      {/* <h3 className='text-center'>Tasks:</h3> */}

      <div className="btn-group mb-3" role="group" aria-label="Basic example" style={{ display: "flex",
    justifyContent: "center"}}>

<div style={{ textAlign: 'center', display:"flex" }}>
<div style={{ textAlign: 'center', display: "flex", justifyContent: "center" }}>
  <h4 style={{ cursor: 'pointer', color: showAll ? 'blue' : 'black', marginRight: '20px' }} onClick={handleAllClick}>All</h4>
  <h4 style={{ cursor: 'pointer', color: showPending ? 'blue' : 'black', marginRight: '20px' }} onClick={handlePendingClick}>Pending</h4>
  <h4 style={{ cursor: 'pointer', color: showCompleted ? 'blue' : 'black' }} onClick={handleCompletedClick}>Completed</h4>
</div>

</div>

      </div>
      <hr />

      {showAll && (
        <>
          <h4 className='text-center'>All Tasks:</h4>
          {todos.length === 0 ? "All tasks are performed, nothing to display!!😊" :
            todos.map((todo, index) => (
              <a key={index} draggable onDragStart={(e) => handleDragStart(e, index)} onDrop={(e) => handleDrop(e, index)}>
                <TodoItem todo={todo} onDelete={onDelete} onComplete={onComplete} />
              </a>
            ))
          }
        </>
      )}

      {showPending && (
        <>
          <h4 className='text-center'>Pending Tasks:</h4>
          {todos.filter(todo => !todo.completed).length === 0 ? "No pending tasks!" :
            todos.filter(todo => !todo.completed).map((todo, index) => (
              <a key={index} draggable onDragStart={(e) => handleDragStart(e, index)} onDrop={(e) => handleDrop(e, index)}>
                <TodoItem todo={todo} onDelete={onDelete} onComplete={onComplete} />
              </a>
            ))
          }
        </>
      )}

      {showCompleted && (
        <>
          <h4 className='text-center'>Completed Tasks:</h4>
          {todos.filter(todo => todo.completed).length === 0 ? "All tasks completed!" :
            todos.filter(todo => todo.completed).map((todo, index) => (
              <a key={index} draggable onDragStart={(e) => handleDragStart(e, index)} onDrop={(e) => handleDrop(e, index)}>
                <TodoItem todo={todo} onDelete={onDelete} onComplete={onComplete} />
              </a>
            ))
          }
        </>
      )}
    </div>
  );
}
