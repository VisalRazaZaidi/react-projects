import React,{useState, useContext} from 'react'
import UserContext from '../UserContext'

function Login() {

    const [username , setUsername] = useState("")
    const [password, setpassword] = useState("")
    
    const {setUser} = useContext(UserContext) // setUser is come from the UserContextProvider so we use usecontext hook and pass it the context
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (

    <div>
        <div>Login</div>
            <input 
            type="text" 
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            {"  "}
            <input 
            type="text" 
            placeholder='password'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            />
            <button onClick={handleSubmit}>
                Submit
            </button>


        
    </div>
  )
}

export default Login