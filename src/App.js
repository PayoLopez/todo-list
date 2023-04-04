import Title from "./components/Title";
import Todos from "./components/Todos";
import TodoComplete from "./components/TodoComplete";
import TodoPorHacer from "./components/TodoPorHacer";
import TodoInput from "./components/TodoInput";
import app from "./app.css";

import { useState } from "react";

function App() {
  const [tareas, setTareas] = useState([])


  const [contador, setContador] = useState(0);

  const handleDelete = (tarea) => {
    const aaa = tareas.filter((elem) => {
      return elem.id !== tarea.id
      
    });

setTareas(aaa)

  };

  const pushTask = (title) => {
    const lastId = tareas.length > 0 ? tareas[tareas.length - 1].id : 1;

    const newTask = {
      id: lastId + 1,
      title,
      completed: false,
    };

    const todoList = [...tareas];
    todoList.push(newTask);
    console.log(todoList);
    setTareas(todoList);
  };

  const handleCheck = (tarea) => {
    console.log("quiero cambiarle el estado a la tarea:", tarea.id);

    const nuevaTareas = tareas.map((elem) => {
      if (tarea.id === elem.id) {
        elem.completed = !elem.completed;
      }

      return elem;
    });

    setTareas(nuevaTareas);
  };

  return (
    <div className="app">
      <div className="container">
        <Title />
        <TodoInput addNewTask={pushTask} />

        <TodoPorHacer>
          {tareas.map((tarea) => {
            if (tarea.completed === false) {
              return (
                <Todos key={tarea.id} tarea={tarea} handleCheck={handleCheck} handleDelete={handleDelete} />
              );
            }
          })}
        </TodoPorHacer>

        <TodoComplete>
          {tareas.map((tarea) => {
            if (tarea.completed === true) {
              return (
                <Todos key={tarea.id} tarea={tarea} handleCheck={handleCheck} handleDelete={handleDelete} />
              );
            }
          })}
        </TodoComplete>
      </div>
    </div>
  );
}

export default App;
