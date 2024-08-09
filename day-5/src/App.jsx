import { useState } from "react";
import FunctionalComp from "./Components/Functional/FunctionlComp";
import ClassComp from "./Components/Class/ClassComp";

const App = () => {
  const [showFunction, setShowFunction] = useState(true);
  const [showClass, setShowClass] = useState(true);

  const toggleFunction = () => {
    setShowFunction(!showFunction);
  };

  const toggleClass = () => {
    setShowClass(!showClass);
  };

  return (
    <>
      <button onClick={toggleFunction}>Functional Component</button>
      <button onClick={toggleClass}>Class Component</button>

      {showFunction && <FunctionalComp />}
      {showClass && <ClassComp />}
    </>
  );
};

export default App;
