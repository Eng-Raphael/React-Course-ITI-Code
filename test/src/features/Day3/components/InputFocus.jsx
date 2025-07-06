import React , {useRef} from 'react'

export default function InputFocus() {


    const inputRef = useRef();

    function handelfocus() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'lightblue';
        inputRef.current.style.color = 'black';
        inputRef.current.style.fontSize = '20px';
    }

  return (
    <div>
        <input ref={inputRef}  placeholder='click btn to focus me' />
        <button onClick={handelfocus} >Focus Input</button>
    </div>
  )
}
