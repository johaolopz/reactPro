import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from "./bases/CounterHook";
import { CounterReducer } from "./bases/CounterReducer";
import { CounterReducerSegmented } from "./counter-reducer/CounterReducerSegmented";

function App() {
  return (
    <>
      <Counter initialValue={10}/>
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducer />
      <CounterReducerSegmented />
    </>
  );
}

export default App;
