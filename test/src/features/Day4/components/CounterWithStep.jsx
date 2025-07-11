import React, { useReducer } from 'react';


const initialState = {
  count: 0,
  step: 1,
};


function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'reset':
      return initialState;
    case 'setStep':
      return { ...state, step: action.payload };
    default:
      throw new Error('Unknown action type');
  }
}

export default function CounterWithStep() {
  const [state, dispatch] = useReducer(reducer, initialState);


  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  const handleStepChange = (e) => {
    dispatch({ type: 'setStep', payload: Number(e.target.value) });
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid gray' }}>
      <h2>Count: {state.count}</h2>
      <div>
        <label>
          Step:
          <input
            type="number"
            value={state.step}
            onChange={handleStepChange}
            style={{ marginLeft: '0.5rem', width: '50px' }}
          />
        </label>
      </div>
      <button onClick={handleIncrement} style={{ margin: '0.5rem' }}>
        Increment
      </button>
      <button onClick={handleDecrement} style={{ margin: '0.5rem' }}>
        Decrement
      </button>
      <button onClick={handleReset} style={{ margin: '0.5rem' }}>
        Reset
      </button>
    </div>
  );
}
