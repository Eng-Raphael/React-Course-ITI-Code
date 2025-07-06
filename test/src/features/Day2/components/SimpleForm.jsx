import React, { useState } from 'react'

export default function SimpleForm() {


    const [name , setName] = useState('');

    function handleSubmit(event) {
        event.preventDefault(); // Prevents the default form submission behavior            

        alert(`Hello, ${name}!`); // Displays an alert with the entered name
       setName(''); // Resets the name state to an empty string after submission
    }
    function handleChange(event) {
        setName(event.target.value); // Updates the name state with the input value
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder='Enter your name'
                value={name} // Binds the input value to the name state
                onChange={handleChange}
            />

            <button type="submit">
                Greet Me  
            </button>
            
        </form>
    </div>
  )
}
