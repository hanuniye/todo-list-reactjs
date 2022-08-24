import React from 'react';
import "../App.css"

const Todoform = () => {
  return (
    <div className='container'>
      <form className='input-cont'>
        <input type="text" placeholder='Add task' />
        <button className='submiBtn' type='submit'>
          <i class="fa-solid fa-plus plus-icon"></i>
        </button>
       
      </form>
    </div>
  );
};

export default Todoform;