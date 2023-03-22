import { useState } from "react";

const TodoInput=({addNewTask})=>{
    const [title,setTitle]=useState('')
   
   
  const handleOnKeyDown=(e)=>{
    if(e.key ==='Enter'){
        console.log({title});
    }
  }
   
    return(
        <div className="todo-input">
            <input
                type="text"
                value={title}
                onChange={e=>(setTitle(e.target.value))}
                placeholder="Nueva Tarea"
                onKeyDown={e=>(handleOnKeyDown(e))}/>
        </div>
    )
}
export default TodoInput;