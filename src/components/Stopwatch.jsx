import React, { useEffect, useRef, useState } from "react";

const Stopwatch = () => {

    const [time, setTime] = useState(0);
    const startTime = useRef(0);
    const intervalID = useRef(null);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if(isRunning){
        intervalID.current = setInterval(() => {
            setTime(Date.now() - startTime.current)
        }, 10)
    }
    return () => {
        clearInterval(intervalID.current);
    }
    },[isRunning])

    const start = () => {


        setIsRunning(true)
        startTime.current = Date.now() - time;
  

    
        
    

    }

    const stop = () => {
        setIsRunning(false)
        clearInterval(intervalID.current);
        
    }

    const reset = () => {
        setTime(0);
        setIsRunning(false);
    }

    const timeDisplay = () => {
        const minutes = Math.floor(time / (1000 *60) % 60);
        const seconds = Math.floor(time  / (1000) % 60  );
        let string = "";
        if(seconds < 10) string = "0";
        return `${minutes}.${string}${seconds}`
    }
    
    return (
        <div>
            <h1>Stopwatch</h1>
            <br/>
            <p>{timeDisplay()}</p>
            {!isRunning ? <button onClick={start}>Start</button> : <button onClick={stop}>Stop</button>}
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Stopwatch;