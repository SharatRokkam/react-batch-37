import { useState } from "react";

const App = () => {
  const [isValid, setIsValid] = useState(false);

  // element variable
  // let age;
  // if (isValid) {
  //   age = <h2>You can Drive</h2>;
  // } else {
  //   age = <h2>You cannot Drive </h2>;
  // }

  // return <>{age}</>;

  //Not the ideal way - if statement
  // if (isValid) {
  //   return <h1>You can Drive</h1>;
  // } else {
  //   return <h1>You cannot Drive</h1>;
  // }

  //ternary operator
  //Preferred Way
  // return <>{isValid ? <h2>You can drive</h2> : <h2>Sorry You cannot</h2>}</>;

  //short circuit
  return <>{isValid && <h2>You can drive </h2>}</>;
};

export default App;
