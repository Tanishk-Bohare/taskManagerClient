import { useContext, useState } from "react"
import { GlobalContext } from "../Contexts/GlobalState"
import UpdateUser from "./UpdateUser"

const UserDetails = () => {

    const [ showUpdate, setShowUpdate ] = useState(false);

    const { user, deleteUser} = useContext(GlobalContext)

    const handleDelete = () => {

        setShowUpdate(false)
        deleteUser()
    }
    
    return (
        <div>
            <h2>User Details <button className="btn" onClick={()=> setShowUpdate(!showUpdate) } >Update</button> </h2>

            {
                showUpdate?
                    <UpdateUser />:
                    <>
                    <p>{`Name: ${user.name}`}</p>
                    <p>{`Email: ${user.email}`}</p>
                    <p>{`Age: ${user.age}`}</p>
                    {/* <p>{`User Registered on: ${user.createdAt}`}</p> */}
        
                    <button className="btn" onClick={()=>handleDelete()} >Delete User</button>
                    </>
            }

        </div>
    )
}

export default UserDetails
