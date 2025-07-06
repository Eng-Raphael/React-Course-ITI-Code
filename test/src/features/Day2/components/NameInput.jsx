import React from 'react'

export default function NameInput({name  , setName}) {

    

  return (
    <input 
    
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter your name'
    />
  )
}
