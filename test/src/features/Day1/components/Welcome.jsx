import React from 'react'

 function Welcome() {

    const user = {name : 'rafy',age:25}
    const isAdult = user.age >= 18;


  return (
    <div>
      <h3>Hello {user.name}</h3>
      <p>Status : {isAdult ? 'Adult' : 'Minor'}</p>
    </div>
  )
}

export default Welcome;
