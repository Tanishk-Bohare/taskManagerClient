import { useState, useContext } from "react"
import { GlobalContext } from "../Contexts/GlobalState"

const AddTask = () => {
    const {addTask} = useContext(GlobalContext)

    const [description, setdescription ] = useState('')
    const [day, setDay ] = useState('')
    const [completed, setcompleted ] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()
        
        if(!description){
            alert('Please Add a task!')
            return
        }
        addTask({description, day, completed})
        setdescription('')
        setDay('')
        setcompleted(false)
    }

    return (
        <form className='add-from' onSubmit={onSubmit} >
            <h2>Add Task </h2>
            <div className='form-control' >
                <label htmlFor="">Task </label>
                <input type="text" 
                    placeholder='Add Task'
                    value={description} 
                    onChange={(e) => setdescription(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check' >
                <label htmlFor="">Day & Time </label>
                <input type="text" 
                    placeholder='Add Day & Time'     
                    value={day} 
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control' >
                <label htmlFor="">Set completed </label>
                <input type='checkbox'
                    checked={completed} 
                    value={completed} 
                    onChange={(e) => setcompleted(e.currentTarget.checked)}
                />
            </div>
            
            <input type='submit' value='Save Task' className='btn' />
        </form>
    )
}

export default AddTask
