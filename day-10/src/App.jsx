import React from "react";
import NameInput from "./components/NameInput";
import NameOutput from "./components/NameOutput";
import NameProvider from "./components/NameProvider";
import "./App.css";

const App = () => {
  return (
    <NameProvider>
      <div>
        <NameInput />
        <NameOutput />
      </div>
    </NameProvider>
  );
};

export default App;
