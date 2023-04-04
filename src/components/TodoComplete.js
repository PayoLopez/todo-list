import Todos from "./Todos";
const TodoComplete=({children})=>{

    return(<div>
        <p>Completas</p>
        {children}
    </div>)
}

export default TodoComplete;