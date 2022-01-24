import React, {useState} from 'react';

//INTERFACE
interface CounterProps {
    initialValue?: number
}

//Se puede dar un default value a la prop y hacerla opcional en la interface con "?"
export const CounterBy = ({initialValue=5}:CounterProps) => {
    const [counterState, setCounterState] = useState({
        counter: initialValue,
        clicks: 0
    })
    const {counter, clicks} = counterState

    const handleClick = (value:number)=>{
        setCounterState( prev => ({
            counter:prev.counter+value,
            clicks:prev.clicks+1
        }))
    }
  return <>
      <h1>CounterBy: {counter}</h1>
      <h1>Clicks: {clicks}</h1>

      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
  </>;
};
