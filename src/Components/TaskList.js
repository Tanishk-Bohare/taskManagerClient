import { useContext, useEffect } from 'react'
import { GlobalContext } from '../Contexts/GlobalState'
import Task from './Task'

const TaskList = () => {

    const {tasks, getTasks} = useContext(GlobalContext)
    console.log(tasks)

    useEffect(() => {
        getTasks()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        < >
            <h2>Tasks</h2>
            <ul className="task-ul" >
                { tasks.length>0? tasks.map((task)=> <Task key={task._id} task={task} />  ): <h4>No Tasks added yet. </h4>  }
            </ul>
        </>
    )
}

export default TaskList
