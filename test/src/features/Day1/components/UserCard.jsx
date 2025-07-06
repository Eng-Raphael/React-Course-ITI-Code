import React from 'react'
import '../styles/UserCard.css';

export default function UserCard({name , age}) {

 const isAdult = age>=18;

const cardClass = age >=18 ? 'adult-card' : 'minor-card';

  return (
    <div className={cardClass}>
        <h3>{name}</h3>
        <h3>age : {age}</h3>
        { isAdult ? <p>Adult</p> : <p>Minor</p>}
        {age< 18 ? <p>Minor</p> : <p>Adult</p>}
    </div>
  )
}
