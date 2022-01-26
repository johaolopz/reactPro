import {useReducer} from 'react';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';
//Importación de acciones
//import { doReset, doIncreseBy, CounterAction } from './actions/actions';

////##### OTRA FORMA DE IMPORTAR LAS ACCIONES #####////
import * as actions from './actions/actions';

const INITIAL_STATE:CounterState = {
    counter: 10,
    previous: 5,
    changes: 5
}

export const CounterReducerSegmented = () => {

    const [ counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const increaseBy = (value:number) => {
        dispatch( actions.doIncreseBy(value) )
    }
    
    const handleReset = ()=>{
        dispatch( actions.doReset() )
    }
  return <>
      <h1>CounterReducerSegmented</h1>
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
