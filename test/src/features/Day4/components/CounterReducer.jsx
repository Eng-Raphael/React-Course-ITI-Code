import React, { useReducer } from 'react'


const initialState = { count: 0 }

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return initialState
        default:
            throw new Error()
    }
}

export default function CounterReducer() {


    const [state , dispatch] = useReducer(reducer , initialState)

    const handelIncrement = () => {
        dispatch({ type: 'increment' })
    }
    const handelDecrement = () => {
        dispatch({ type: 'decrement' })
    }
    const handelReset = () => {
        dispatch({ type: 'reset' })
    }

  return (
    <div>
        <h1>Counter: {state.count}</h1>
        <button onClick={handelIncrement}>Increment</button>
        <button onClick={handelDecrement}>Decrement</button>
        <button onClick={handelReset}>Reset</button>
    </div>
  )
}
