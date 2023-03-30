

const Todos =({tareas})=>{

   

    return(
    <div className="todos">
           
            <div className="span">
                <span></span>
                {tareas.map(tarea=>{
                    return(
                        <Todos key={tarea.id}/>
                    )
                })}
            </div>
        
    </div>
    
    )
}

export default Todos;