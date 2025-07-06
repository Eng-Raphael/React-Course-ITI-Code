import React, { Children } from 'react'

export default function Card({ children     }) {
  return (
    <div  style={{
      border: '1px solid gray',
      padding: '1rem',
      borderRadius: '5px'
    }}>

        {children}

    </div>
  )
}
