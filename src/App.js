import React,{useState} from "react";
import Todoform from "./components/TodoForm";
import TodoList from "./components/TodoList";
import tasks from "./components/Tasks";

const App = () => {
  const [task,setTask] = useState(tasks);

  let info = task.map(item =>{
    return <TodoList task={item.task} />
  })

  function getTask(){
    
  }
  return (
    <>
      <Todoform />
      {info}
    </>
    
  );
};

export default App;