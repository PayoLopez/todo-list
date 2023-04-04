import { useState } from "react";

const TodoInput=({addNewTask})=>{
    const [title,setTitle]=useState('')
   
   
  const handleOnKeyDown=(e)=>{
    if(e.key ==='Enter'){
        addNewTask(title);
      
        setTitle('')
    }
  }
   
    return(
        <div className="container-input">
            <div className="input">
            <input
                type="text"
                value={title}
                onChange={e=>(setTitle(e.target.value))}
                placeholder="Nueva Tarea"
                onKeyDown={e=>(handleOnKeyDown(e))}/>
                </div>
        </div>
    )
}
export default TodoInput;