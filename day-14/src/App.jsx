import React from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import MouseCounter from "./components/MouseCounter";

const App = () => {
  return (
    <>
      <ClickCounter />
      <MouseCounter />
    </>
  );
};

export default App;
