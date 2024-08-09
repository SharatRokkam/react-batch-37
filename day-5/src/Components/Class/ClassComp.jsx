import { Component } from "react";
import React from "react";

class ClassComp extends Component {
  render() {
    return (
      //Fragments
      <>
        <h2>Class Component</h2>
        <p>Inline CSS</p>
        <p>External CSS</p>
        <p>Module CSS</p>
      </>
    );
  }
}

export default ClassComp;
