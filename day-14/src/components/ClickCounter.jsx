import React from "react";
import WithCounter from "./WithCounter";
import WithName from "./WithName";

const ClickCounter = (props) => {
  const { count, increment, name } = props;
  return (
    <>
      <button onClick={increment}>Plus</button>
      <h2>ClickCount : {count}</h2>
      <h2>Name : {name}</h2>
    </>
  );
};

export default WithName(WithCounter(ClickCounter, 10));
