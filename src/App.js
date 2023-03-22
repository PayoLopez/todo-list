import Title from './components/Title';

import './App.css';
import { useState } from 'react';
import TodoPorHacer from './components/TodoPorHacer';
import TodoComplete from './components/TodoComplete';
import TodoInput from './components/TodoInput';


function App() {
  const [tareas,setTareas]=useState([{
    id:1,
    title:"tarea prueba",
    completed:false
  }]);


 const addNewTask=(title)=>{
  

  return(console.log({title}));
}
 
 
 
 
  return (
    <div className="App">
      <Title/>
      <TodoInput addNewTask={addNewTask}/>
      <TodoPorHacer/>
      <TodoComplete/>
    </div>
  );
}

export default App;
