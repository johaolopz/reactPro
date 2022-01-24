import React, {useState} from 'react';

//INTERFACE
interface CounterProps {
    initialValue?: number
}

interface CounterState {
    counter: number
    clicks: number
}

//Se puede dar un default value a la prop y hacerla opcional en la interface con "?"
export const CounterBy = ({initialValue=5}:CounterProps) => {
    const [{counter, clicks}, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    })

    const handleClick = (value:number)=>{
        setCounterState( ({counter, clicks}) => ({
            counter:counter+value,
            clicks:clicks+1
        }))
    }
  return <>
      <h1>CounterBy: {counter}</h1>
      <h1>Clicks: {clicks}</h1>

      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
  </>;
};
