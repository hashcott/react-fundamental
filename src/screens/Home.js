import React, { Component } from "react";
import Profile from "../components/Profile";
export default class Home extends Component {
  render() {
    return (
      <div>
        {/* pass value to component */}
        <Profile name="Nguyễn Đức Hạnh" job="IT" age={20} isDisplay={true} />
        <Profile
          name="Nguyễn Thị Thu Uyên"
          job="HR"
          age={19}
          isDisplay={false}
        />
      </div>
    );
  }
}
