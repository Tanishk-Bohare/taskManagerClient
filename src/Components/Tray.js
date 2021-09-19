import { useContext, useState } from "react"
import { GlobalContext } from "../Contexts/GlobalState"
import Register from './Register'
import AddTask from './AddTask'
import Login from './Login'
import UserDetails from './UserDetails'
import TaskList from './TaskList'

const Tray = () => {


    const [showReg, setShowReg] = useState(false)
    const [showAddTask, setShowAddTask] = useState(false)
    const [showUserDetails, setShowUserDetails] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [showTasks, setShowTasks] = useState(false)

    const { isLoggedIn, logoutUser, logoutAllUser } = useContext(GlobalContext)

    const handleLogout = (all) => {
        setShowTasks(false)
        setShowUserDetails(false)
        setShowLogin(false)
        setShowReg(false)
        setShowAddTask(false)
        if(all==="all")
            logoutAllUser()
        else 
            logoutUser()
    }


    return (
        <div>

            { isLoggedIn?
                <>
                    <button 
                        className="btn"
                        onClick={()=>{
                            setShowTasks(false)
                            setShowUserDetails(true)
                            setShowLogin(false)
                            setShowReg(false)
                            setShowAddTask(false)
                        }}
                        >User Details</button>

                    <button 
                        className="btn" 
                        onClick={()=>{
                            setShowReg(false)
                            setShowLogin(false)
                            setShowUserDetails(false)
                            setShowTasks(false)
                            setShowAddTask(true) 
                        }}
                        >Add Task
                    </button>

                    <button 
                        className="btn" 
                        onClick={()=>{
                            setShowUserDetails(false)
                            setShowReg(false)
                            setShowLogin(false)
                            setShowAddTask(false) 
                            setShowTasks(true)
                        }}
                        >Show Tasks
                    </button>
                     
                    <button className="btn" onClick={()=> handleLogout() } >LogOut</button>
                    <button className="btn" onClick={()=> handleLogout("all")} >LogOutAll</button>
                </>
            :
                <>
                    <button 
                        className="btn"
                        onClick={()=>{
                            setShowReg(false)
                            setShowAddTask(false)
                            setShowUserDetails(false)
                            setShowLogin(true)
                            setShowTasks(false)
                        }}
                        >Login
                    </button>
                    <button 
                        className="btn"
                        onClick={()=>{
                            setShowReg(true)
                            setShowUserDetails(false)
                            setShowTasks(false)
                            setShowLogin(false)
                            setShowAddTask(false) 
                        }}
                        >Register
                    </button>
                </>    
            }
            {showReg? <Register/>: ''}
            {showAddTask? <AddTask/>: ''}
            {showUserDetails? <UserDetails/>: ''}
            {showLogin? <Login/>: ''}
            {showTasks? <TaskList/>: ''}
        </div>
    )
}

export default Tray
