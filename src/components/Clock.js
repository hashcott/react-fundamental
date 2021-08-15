import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      date: new Date(), // 0x0001
    };
    // references obj1 == obj2 // address memory
  }
  componentDidMount() {
    console.log("Clock : component did mount");
    setInterval(() => {
      this.setState({
        date: new Date(), // 0x0002
      });
    }, 1000);
  }
  componentDidUpdate() {
    console.log("Clock : component did update");
  }
  render() {
    console.log("Clock : render");
    const { format, timezone } = this.props; // { format, timezone }
    return (
      <div
        style={{
          backgroundColor: "#333",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          borderRadius: "5px",
          width: "50%",
          margin: "10px auto",
        }}
      >
        <span
          style={{
            display: "inline-block",
            marginRight: "5px",
            color: "tomato",
          }}
        >
          {timezone} :
        </span>
        <span>
          {this.state.date.toLocaleString(format, { timeZone: timezone })}
        </span>
      </div>
    );
  }
}
