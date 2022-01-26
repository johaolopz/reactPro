import {useState, useEffect, useRef, useLayoutEffect} from 'react';
import { gsap } from 'gsap';

export const useCounter = ({MAXIMUM_COUNT=1}) => {
    const [counter, setCounter] = useState(7)
    //Nos ayuda a referencia un nodo del DOM, en este caso el <h2>{counter}</h2>
    //const elementToAnimate = useRef<HTMLHeadingElement>(null)

    //Se cambia HTMLHeadingElement por any para soportar otros tipos elem HTML
    const elementToAnimate = useRef<any>(null)

    //
    const tl = useRef(gsap.timeline())

    const handleClick = ()=>{
        //Usar método Math.min - counter no se actualiza si llega a un valor min.
        setCounter( prev => Math.min(prev + 1, MAXIMUM_COUNT) )
    }

    //Casi igual al useEffect, solo que se asegura que los elementos HTML estén
    //construidos
    useLayoutEffect(()=>{
        //Básicamente useLayoutEffect controla que la referencia al HTML
        //counterElement exista, sino no se renderiza, pero "gsap" manda
        //error de consola cuando no encuentra "ref" en ningún elem HTML
        //Eso lo manejamos con el siguiente IF
        if (!elementToAnimate.current) return

        //########## SCREENSOCK CON PROMESAS GSAP ##########
        // //ANIMATION WITH GSAP SCREENSOCK, X-Y SLIDE/DURATION/ANIMATION TYPES
        // //Estos métodos son promesas, se puede usar .then
        // gsap.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'}).then(()=>{
        //     //Usa del useRef counterElement como buena práctica en vez de .class
        //     gsap.to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'})
        //   })

        //########## SCREENSOCK SIN PROMESAS, CON TIMELINE ##########
        tl.current.to(elementToAnimate.current, {y: -10, duration: 0.2, ease: 'ease.out'})
                  .to(elementToAnimate.current, {y: 0, duration: 1, ease: 'bounce.out'})
                  //pause() de gsap controla que al renderizarse por primera vez, o al
                  //definirse, no se dispare hasta que se lo llame con play()
                  .pause()
        
    },[])

    useEffect(() => {
        // //mientras counter no pase de 9 no hace nada "return"
        // if (counter < 10) return

        // //Una vez counter sea 10+ hace el efecto y estiliza con css la consola del navegador
        // console.log("%cSe llegó al max","color: red; background-color: black;")

        //play() de gsap recibe el argumento 0 para que se reproduzca en el instante que se llama
        //Recordar que useEffect se ejecuta cada que el counter se actualiza
        tl.current.play(0)

    }, [counter]);
  return {
      counter,
      counterElement: elementToAnimate,
      handleClick
  }
}
