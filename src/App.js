import React, { Component } from "react";
import "./App.css";
// Export component
export default class App extends Component {
  constructor(props) {
    super(props);

    // Initial counter
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div className="container">
        <h1
          onClick={() => {
            this.setState({
              counter: 0,
            });
          }}
          className="header"
        >
          Counter
        </h1>

        <p className="number">{this.state.counter}</p>

        <div className="action">
          <button
            onClick={() => {
              this.setState({
                counter: this.state.counter + 1,
              });
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              this.setState({
                counter: this.state.counter - 1,
              });
            }}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}
