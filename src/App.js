import React, { Component } from "react";
import "./App.css";
// Export component
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>Harry's Todo List</header>
        <div className="img-svg">
          <div className="left">
            <img src="https://mycolor.space/img/color-scheme-left.svg" />
          </div>
          <div className="right">
            <img src="https://mycolor.space/img/color-scheme-right.svg" />
          </div>
        </div>
      </div>
    );
  }
}
