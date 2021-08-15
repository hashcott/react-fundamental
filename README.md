# Lesson 2: Props

# Props:

Props (properties) là thuộc tính của componet được chuyền vào hoặc khởi tạo mặc định

# Pass props to component

## **screens/Home.js**

```
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
```

## **components/Profile.js**

```
import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    console.log(this.props);
    if (this.props.isDisplay) {
      return (
        <div>
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
```
