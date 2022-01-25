import React, {useState, useEffect} from 'react';
import { gsap } from 'gsap';

const MAXIMUM_COUNT = 10

export const CounterEffect = () => {
    const [counter, setCounter] = useState(7)

    const handleClick = ()=>{
        //Usar método Math.min - counter no se actualiza si llega a un valor min.
        setCounter( prev => Math.min(prev + 1, MAXIMUM_COUNT) )
    }

    useEffect(() => {
        //mientras counter no pase de 9 no hace nada "return"
        if (counter < 10) return

        //Una vez counter sea 10+ hace el efecto y estiliza con css la consola del navegador
      console.log("%cSe llegó al max","color: red; background-color: black;")

      //ANIMATION WITH GSAP SCREENSOCK, X-Y SLIDE/DURATION/ANIMATION TYPES
      //Estos métodos son promesas, se puede usar .then
      gsap.to('h2', {y: -10, duration: 0.2, ease: 'ease.out'}).then(()=>{
          gsap.to('h2', {y: 0, duration: 1, ease: 'bounce.out'})
        })
    
    }, [counter]);
    
  return <>
      <h1>CounterEffect:</h1>
      <h2>{counter}</h2>
      <button onClick={handleClick}>
          +1
      </button>
  </>;
};
