import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      date: new Date(),
    };
  }
  render() {
    const { format, timezone } = this.props; // { format, timezone }
    return (
      <div>
        {this.state.date.toLocaleString(format, { timeZone: timezone })}
      </div>
    );
  }
}
