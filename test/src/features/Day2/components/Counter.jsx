import React from 'react'
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // count = count +1;
    // setCount(count + 1);
    setCount(count => count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
    const reset = () => {
        setCount(0);
    };
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={ increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
