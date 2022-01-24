import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap'



export const useCounter = ({ maxCount = 1 }) => {
    const [counter, setCounter] = useState(5);

    const elementToAnimite = useRef<any>(null);

    const tl = useRef(gsap.timeline());

    const handleClick = () => {
        setCounter( prev => Math.min(prev + 1, maxCount) )
    }

    useLayoutEffect(() => {
        if(!elementToAnimite.current) return;
        tl.current.to(elementToAnimite.current, {y: -10, duration: 0.2, ease: 'ease.out'}) 
                  .to(elementToAnimite.current, { y: 0, duration: 1, ease: 'bounce.out'})
                  .pause();
    }, []);
    

    useEffect(() => {
        // if( counter < maxCount) return;
        
        tl.current.play(0)
    }, [counter]);
    

    return {
        counter,
        elementToAnimite,
        handleClick
    }
};
