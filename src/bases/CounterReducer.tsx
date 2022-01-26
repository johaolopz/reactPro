import {useReducer} from 'react';

interface CounterState {
    counter: number
    previous: number
    changes: number
}

const INITIAL_STATE:CounterState = {
    counter: 10,
    previous: 5,
    changes: 5
}

//Definición de las action
type CounterAction =
    | { type: 'increaseBy', payload: { value: number}}
    | { type: 'reset'}

//Construcción del REDUCER
const counterReducer = ( state:CounterState, action: CounterAction ): CounterState => {
    //State destructuring
    const { counter, changes } = state

    switch (action.type) {
        case 'increaseBy':
            return {
                counter: counter + action.payload.value,
                changes: changes + 1,
                previous: counter
            }
        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previous: 0
            }

        default:
            return state
    }
}

export const CounterReducer = () => {

    const [ counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const increaseBy = (value:number) => {
        dispatch({ type: 'increaseBy', payload: { value } })
    }
    
    const handleReset = ()=>{
        dispatch({ type: 'reset'})
    }
  return <>
      <h1>CounterReducer</h1>
      <pre>
          {JSON.stringify( counterState, null, 2)}
      </pre>
      <button onClick={() => increaseBy(1)}>
          +1
      </button>
      <button onClick={() => increaseBy(5)}>
          +5
      </button>
      <button onClick={() => increaseBy(10)}>
          +10
      </button>
      <button onClick={handleReset}>
          Reset
      </button>
  </>;
};
