import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setcounter] = useState(0)
  
  const addValue = () => {
    if(counter < 10){
      // setcounter(counter+1); 
      setcounter(prev => prev + 1) // more improved code using functional update form (useState)
    }
  }

  const minusValue = () => {
    if(counter >= 1){
      // setcounter(counter - 1)
      setcounter(prev => prev - 1);
    }
  }

  const resetValue = () => {
    // setcounter(counter = 0 ) Here you’re both reassigning counter and calling setcounter. You only need:
    setcounter(0);
  }

  return (
    <>
      <h1>React Counter Project</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>+ Add Value</button>
      <button onClick={resetValue}>Reset Value</button>
      <button onClick={minusValue}>- Decreas Value</button>
    </>
  )
}

export default App
