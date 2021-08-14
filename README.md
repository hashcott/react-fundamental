# Lesson 1: Component

# Usage:

```
import React from "react";
import ReactDOM from "react-dom";
// import
class App extends React.Component {
  // Kết thừa component
  constructor() {} // Hàm được chạy đầu tiên
  render() {
    return <div className="message-box">Wellcome to ABC</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
```
