import React  from 'react'

export default function Greeting({name}) {


    const upperName = name.toUpperCase();

  return (
    <div>
        <h2>Hello , {upperName || "starnger"}!!</h2>
    </div>
  )
}
