# Lesson 1: Component

# Usage basic:

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

# Usage basic:

### **index.js**

```
import React from "react";
import ReactDOM from "react-dom";

// Import component
import App from "./App.js";

ReactDOM.render(<App />, document.getElementById("app"));
```

### **App.js**

```
import React, { Component } from "react";

// Export component
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hey girl</h1>
        <h1>Well done</h1>
      </div>
    );
  }
}
```
