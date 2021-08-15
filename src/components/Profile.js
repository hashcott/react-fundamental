import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    console.log(this.props);
    if (this.props.isDisplay) {
      return (
        <div>
          <p>This is {this.props.nameComponent}</p>
          {/* Using props */}
          <p>{this.props.name}</p>
          <p>{this.props.job}</p>
          <p>{this.props.age}</p>
        </div>
      );
    } else {
      return <div>Profile was hidden</div>;
    }
  }
}

Profile.defaultProps = {
  nameComponent: "Profile",
};
