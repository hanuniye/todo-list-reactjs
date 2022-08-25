import React from 'react';

const TodoList = ({task,check,deleteTask,updateTask}) => {
  return (
    task.map(item =>{
      return <div className={`todoList ${item.isCompleted ? "checked" : ""}`}>
      <input className={item.isCompleted ? "middle-line" : ""} type="text" value={item.text} 
      onChange={(e) =>{
        updateTask(e.target.value,item.key)
      }}
      />
        <i class="fa-solid fa-trash trash-icon" 
        onClick={() =>{
          deleteTask(item.key)
        }}
        ></i>
        <i class="fa-solid fa-circle-check check-icon" onClick={() =>{
          check(item.key)
        }}></i>
      </div>
    })
  );
};

export default TodoList;