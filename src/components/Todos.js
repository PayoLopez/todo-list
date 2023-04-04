

const Todos =({tarea,handleCheck,handleDelete})=>{
    let background = tarea.completed === true ? 'bg-green-600' : 'bg-red-600';
    return(
    <div className={`flex items-center  p-4 ${background} border-b border-solid border-gray-600`}>
           
            <div>
               <button onClick={()=>handleDelete(tarea)}>delete</button>
                <span className="span" onClick={()=>handleCheck(tarea)}></span>
                <p className="title">{tarea.title}</p>
                
            </div>
        
    </div>
    
    )
}

export default Todos;