// Class Component

//Props - Properties

import React from "react";
import Counter from "./Components/Counter";
// import Greeting from "./Components/Greeting";
// import Lifecycle from "./Components/Lifecycle";

export default class App extends React.Component {
  render() {
    return <Counter />;
    // return <Greeting name="John" />;
    // return <Lifecycle />;
  }
}
