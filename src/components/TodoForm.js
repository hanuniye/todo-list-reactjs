import React from 'react';
import "../App.css";

const Todoform = ({handleChange,addItem}) => {
  return (
    <div className='container'>
      <form className='input-cont' onSubmit={addItem}>
        <input type="text"
         placeholder='Add task'
         onChange={handleChange}
         />
        <button className='submiBtn' type='submit'>
          <i class="fa-solid fa-plus plus-icon"></i>
        </button>
       
      </form>
    </div>
  );
};

export default Todoform;