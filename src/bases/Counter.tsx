import React, {useState} from 'react';

//INTERFACE
interface CounterProps {
    initialValue?: number
}

//Se puede dar un default value a la prop y hacerla opcional en la interface con "?"
export const Counter = ({initialValue=0}:CounterProps) => {
    const [counter, setCounter] = useState(initialValue)

    const handleClick = ()=>{
        setCounter( prev => prev + 1 )
    }
  return <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>
          +1
      </button>
  </>;
};
