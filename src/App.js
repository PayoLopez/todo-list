import Title from './components/Title';
import Todos from './components/Todos';
import TodoComplete from './components/TodoComplete';
import TodoPorHacer from './components/TodoPorHacer';
import TodoInput from './components/TodoInput';

import { useState } from 'react';


function App() {
  
  const [tareas,setTareas]=useState([{
    id:1,
    title:"tarea prueba",
    completed:false
  }]);


  const pushTask=(title)=>{
    const lastId = tareas.length > 0 ? tareas[tareas.length - 1].id : 1;
   
    const newTask={
      id:lastId +1,
      title,
      completed:false
    }
    const todoList=[...tareas]
    todoList.push(newTask)
    setTareas(newTask);
    
console.log(tareas)
  }

 const addNewTask=(title)=>{
    console.log({title});
}
 
 
 
 
  return (
    <div className='container-all'>
      <Title/>
      <TodoInput addNewTask={addNewTask}/>
      <TodoComplete tareas={tareas}>
        <p>Completas</p>
       
      </TodoComplete>
      <TodoPorHacer tareas={tareas}>
        <p>Por Hacer</p>
      
      </TodoPorHacer>
    </div>
  );
}

export default App;
