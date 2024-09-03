import React, { useState } from "react";
import { useCustom } from "../Hooks/useCustom";

const Counter1 = () => {
  const [count, increment, decrement] = useCustom();

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
};

export default Counter1;
