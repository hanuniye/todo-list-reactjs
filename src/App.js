import React,{useState} from "react";
import Todoform from "./components/TodoForm";
import TodoList from "./components/TodoList";
import tasks from "./components/Tasks";
import "./App.css";

const App = () => {
  const [task,setTask] = useState(tasks);

  console.log(task);
  let info = task.map(item =>{
    return <TodoList text={item.text} isCompleted={item.isCompleted}  key={item.key}/>
  })

  let completedTask = task.filter(item =>{
    return item.isCompleted == true;
  })

  let leftTask = task.filter(item =>{
    return item.isCompleted == false
  })

  
  function handleChange(e){
    let newEdit = task
    newEdit.text = e.target.value
    setTask(newEdit)
  }

  function addItem(e){
    e.preventDefault()

    let newText = task.text;

    let newItem = {
      key:Math.floor(Math.random() * 5000),
      text:newText,
      isCompleted:false
    }

    let newTask = [...task, newItem]
    setTask(newTask)
  }


  return (
    <>
      <Todoform handleChange={handleChange} addItem={addItem} task={task}/>
      {info}
      <div className="status">
        <h6>{leftTask.length} task left</h6>
        <h6>{completedTask.length} completed</h6>
      </div>
    </>
    
  );
};

export default App;