import { useReducer, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // Reducer
  const [state, dispatch] = useReducer(reducer, 0)
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state + action.payload;
      case "decrement":
        return state - action.payload;
      default:
        return 0
    }
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)} >Increment</button>
      <h3> {count} </h3>
      <button onClick={() => setCount(count - 1)} >Decrement</button>

      <div>
        <h1>useReducer</h1>
        <button onClick={() => dispatch({ type: "increment", payload: 1 })} >Increment With Reducer</button>
        <h3> {state} </h3>
        <button onClick={() => dispatch({ type: "decrement", payload: 1 })} >Decrement With Reducer</button>
      </div>
    </>
  )
}

export default App
