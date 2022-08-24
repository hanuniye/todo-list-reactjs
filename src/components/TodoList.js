import React from 'react';


const TodoList = ({text,isCompleted,key}) => {
  return (
    <div className={`todoList ${isCompleted ? "checked" : ""}`}>
      <input className={isCompleted ? "middle-line" : ""} type="text" value={text} />
        <i class="fa-solid fa-trash trash-icon" ></i>
        <i class="fa-solid fa-circle-check check-icon"></i>
    </div>
  );
};

export default TodoList;