import React, { useState, useRef } from "react";

export const CountRenders = () => {
  const [state, setState] = useState();
  const [seconds, setSeconds] = useState(0);
  const renders = useRef(0);
  const inputRef = useRef(0);
  const timerRef = useRef(0);
  const handleChange = (e) => {
    setState(e.target.value);
    inputRef.current++;
  };
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      renders.current++;
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = 0;
  };
  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
  };
  return (
    <div>
      <p>Count Of Renders:{inputRef.current}</p>
      <input type="text" onChange={handleChange} />
      <section>
        <p>Timer:{seconds}</p>
        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>stop</button>
        <button onClick={resetTimer}>reset</button>
      </section>
    </div>
  );
};
