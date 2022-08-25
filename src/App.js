import React,{useState} from "react";
import Todoform from "./components/TodoForm";
import TodoList from "./components/TodoList";
import tasks from "./components/Tasks";
import "./App.css";

const App = () => {
  const [task,setTask] = useState(tasks);


  let completedTask = task.filter(item =>{
    return item.isCompleted === true;
  })

  let leftTask = task.filter(item =>{
    return item.isCompleted === false
  })

  
  function handleChange(e){
    let newEdit = task
    newEdit.text = e.target.value
    setTask(newEdit)
  }

  function addItem(e){
    e.preventDefault();

    let newText = task.text;
    let newItem = {
      key:Math.floor(Math.random() * 5000),
      text:newText,
      isCompleted:false
    }

    if(newItem.text !== ''){
      let newTask = [...task, newItem];
      setTask(newTask);
    }

    
  }

  function check(key){
    let checkedTask = task.map(item =>{
      if(item.key === key){
        item.isCompleted = !item.isCompleted
      }
      return item;
    })
    setTask(checkedTask)
  }

  function deleteTask(key){
    let deletedTask = task.filter(item =>{
      return item.key != key
    })
    setTask(deletedTask)
  }

  function updateTask(text,key){
    let updatedTask = task.map(item =>{
      if(item.key === key){
        item.text = text
      }
      return item;
    })

    setTask(updatedTask)
  }


  return (
    <>
      <Todoform handleChange={handleChange} addItem={addItem} task={task}/>
      <TodoList task={task} check={check} deleteTask={deleteTask} updateTask={updateTask}/>

      <div className="status">
        <h6>{leftTask.length} task left</h6>
        <h6>{completedTask.length} completed</h6>
      </div>
    </>
    
  );
};

export default App;