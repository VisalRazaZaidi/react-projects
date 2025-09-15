import { useState } from 'react'
import './App.css'
import AddTodos from './components/AddTodo'
import Todos from "./components/Todos"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Redux ToolKit</h1>
      <AddTodos />
      <Todos />
    </>
  )
}

export default App
