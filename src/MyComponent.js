import React, { Component, StrictMode } from "react";

export default class MyComponent extends Component {
  name = "Ayxan";

  constructor(props) {
    super(props);
    this.state = { counter: 0, error: false };
    this.handleIncreaseCounterClick =
      this.handleIncreaseCounterClick.bind(this);
  }

  handleIncreaseCounterClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  componentDidCatch(error) {
    // Changing the state to true
    // if some error occurs
    this.setState({
      error: true,  
    });
  }

  render() {
    return (
      <div>
        <StrictMode>
          <div>
            {this.state.error ? (
              <div>Some error Occured (Handled By componentDidCatch)</div>
            ) : (
              <GFGComponent />
            )}
          </div>
        </StrictMode>

        <h1>Hello {this.name}</h1>
        <h1>Info : {this.props.info}</h1>
        <h2>Current Counter Is {this.state.counter}</h2>
        <button onClick={this.handleIncreaseCounterClick}>
          Increase Counter
        </button>
      </div>
    );
  } 
}

class GFGComponent extends Component {
  // GFGComponent throws error as state of GFGCompnonent
  // is not defined

  render() {
    return <h1>{this.state.heading}</h1>;
  }
}
