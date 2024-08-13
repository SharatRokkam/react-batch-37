// import React from "react";

// const Greeting = ({name}) => {
//   return (
//     <>
//       <h1>Hello, {name}</h1>
//     </>
//   );
// };

// export default Greeting;

import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Greeting;
