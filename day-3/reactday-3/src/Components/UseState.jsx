import { useState } from "react";

const UseState = () => {
  //   const [variable, function] = useState(initialValue);
  //   virtual DOM

  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={decrement}>Minus</button>
      <button onClick={increment}>Plus</button>
    </div>
  );
};

export default UseState;
