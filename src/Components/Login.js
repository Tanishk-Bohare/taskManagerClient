import { useState, useContext } from "react";
import { GlobalContext } from '../Contexts/GlobalState'

const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('');

    const { loginUser } = useContext(GlobalContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email, password}
        console.log(user)
        loginUser(user)
    }

    return (
        <div className="container" >
            <h2>Login</h2>
            <form action="" className="login-form" onSubmit={handleSubmit} >
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
                
                <input type="submit" className="btn" name="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login
