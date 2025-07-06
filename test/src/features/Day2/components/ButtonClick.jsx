import React from 'react'

export default function ButtonClick() {

    function handleClick ()  {
        alert('Button clicked!');
    }


  return (
    <div>
        {/* <button onClick={() => alert('Button clicked!')}>
            Click Me!
        </button> */}
        <button onClick={() => handleClick()}>
            Click Me!
        </button>
    </div>
  )
}
