import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      username: "JohnDoe",
      age: 30,
    };
    console.log("Constructor : State Initialized");
  }

  componentDidMount() {
    console.log("ComponentDidMount");
    setTimeout(() => {
      this.setState({ age: 31 });
      console.log("Data Fetched: State Updated");
    }, 2000);
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate(prevState) {
    console.log("component did updated");
    if (prevState.age !== this.state.age)
      console.log(`Age updated from ${prevState.age} to ${this.state.age}`);
  }

  componentWillUnmount() {
    console.log("Component is removed");
  }

  render() {
    console.log("render : rendering the component");
    return (
      <>
        <div>
          <h2>UserName : {this.state.username}</h2>
          <h4>Age : {this.state.age}</h4>
        </div>
      </>
    );
  }
}

export default Profile;
