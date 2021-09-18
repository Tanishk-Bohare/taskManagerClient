import { useState, useContext } from "react";
import { GlobalContext } from '../Contexts/GlobalState'

const UpdateUser = () => {

    const [ name, setName ] = useState('')
    const [ age, setAge ] = useState(0)
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('');

    const { updateUser } = useContext(GlobalContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {name, age, email, password}
        console.log(user)
        updateUser(user)
    }
    return (
        <div className="container" >
            <h2>Update User</h2>
            <form action="" className="update-form" onSubmit={handleSubmit} >
                <label htmlFor="name">Name </label>
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    value={name}
                    onChange={(e)=> setName(e.target.value)} 
                /><br />

                <label htmlFor="age">Age </label>
                <input 
                    type="number" 
                    placeholder="0" 
                    name="age" 
                    value={age}
                    onChange={(e)=> setAge(e.target.value)} 
                /><br />
                
                <label htmlFor="email">Email </label>
                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email"
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)} 
                    required
                /><br />
                
                <label htmlFor="password">Password </label>
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)} 
                    required
                />  <br />
                
                <input type="submit" className="btn" name="submit" value="Update" />
            </form>
        </div>
    )
}

export default UpdateUser
