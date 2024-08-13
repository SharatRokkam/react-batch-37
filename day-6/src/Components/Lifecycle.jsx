import React, { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }

  tick = () => {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.seconds !== prevState.seconds) {
      console.log(`TimerUpdated : ${this.state.seconds} seconds`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <h1>{this.props.message}</h1>
        <p>Seconds : {this.state.seconds}</p>
      </>
    );
  }
}

export default Lifecycle;
