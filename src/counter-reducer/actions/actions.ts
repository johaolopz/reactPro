//Definición de las action
export type CounterAction =
    | { type: 'increaseBy', payload: { value: number}}
    | { type: 'reset'}
    