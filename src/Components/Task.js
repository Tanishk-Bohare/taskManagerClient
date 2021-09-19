import { useContext } from "react"
import { GlobalContext } from "../Contexts/GlobalState"

const Task = ({task}) => {
    const {deleteTask} = useContext(GlobalContext)

    return (
        <li className="task task-li" >
            {task.description}: {task.completed? 'Done': 'Not done'}<button 
            className="btn" onClick={()=>deleteTask(task._id)} >x</button>
        </li>
    )
}

export default Task
