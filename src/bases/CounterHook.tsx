import { useEffect, useRef, useState } from "react";
import { useCounter } from '../hooks/useCounter';


export const CounterHook = () => {

    const { counter, elementToAnimite, handleClick } = useCounter({
        maxCount: 10
    });
   
    return (
        <>
            <h1>Counter Hook: </h1>
            <h2 ref={ elementToAnimite }>{ counter }</h2>
            <button
                onClick={handleClick}
            >
                +1
            </button>
        </> 
    );
};
