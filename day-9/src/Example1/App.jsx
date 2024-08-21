import React from "react";
import Child from "./Child";

const App = () => {
  const data = "Hello From Parent Component";

  return (
    <>
      <Child data={data} />
    </>
  );
};

export default App;
