import List from './components/List';
import Tarea from './components/Tarea';
import './App.css';
import { useState } from 'react';

function App() {
  const [tareas,setTareas]=useState([]);

  const handleEvent=(evento)=>{
    
    let dato= evento.value

    setTareas.push(dato);
    console.log(tareas);

  }
  
 
 
 
 
  return (
    <div className="App">
      <div className='todo-list'>
      <h1>TODO LIST</h1>
      </div>
      
      <div className='por-hacer'>
        
        <h2>POR HACER</h2>
        
        </div>
      <div className='completadas'>
        
        <h2>COMPLETADAS</h2>
        
        </div>
      
      <div>
        <List/>
      </div>
    </div>
  );
}

export default App;
