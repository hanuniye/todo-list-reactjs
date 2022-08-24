import React from 'react';


const TodoList = ({task}) => {
  return (
    <div className='todoList'>
      <input className='' type="text" value={task} />

      <i class="fa-solid fa-trash trash-icon"></i>
      <i class="fa-solid fa-circle-check check-icon"></i>
    </div>
  );
};

export default TodoList;