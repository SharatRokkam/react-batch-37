import React from "react";

import WithCounter from "./WithCounter";
// DRY - Do not repeat yourself

const MouseCounter = (props) => {
  const { count, increment } = props;

  return (
    <>
      <button onMouseOver={increment}>Plus</button>
      <h2>MouseCount : {count}</h2>
    </>
  );
};

export default WithCounter(MouseCounter, 5);
