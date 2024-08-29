import React from "react";

const Child = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick}>increment</button>
    </>
  );
};

export default Child;
