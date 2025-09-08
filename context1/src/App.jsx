import './App.css'
import Login from './context/components/Login'
import Profile from './context/components/Profile'
import UserContextProvider from "./context/UserContextProvider"

function App() {
  

  return (
    <>
      <UserContextProvider>
        <h1>Context Api</h1>
        <Login />
        <Profile /> 
      </UserContextProvider>
    </>
  )
}

export default App
