import React , {useState} from 'react'

import NameInput from './NameInput';
import Greeting from './Greeting';

export default function LiftingStateUp() {

    const [name, setName] = useState('');

   
  return (
    <div>
        <NameInput name={name} setName={setName} />
        <Greeting name={name} />
    </div>
  )
}

   

