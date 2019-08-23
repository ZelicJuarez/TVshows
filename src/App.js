import React, { Component } from "react";
import { Route } from "react-router-dom";
import List from "./containers/List";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={List} />
      </div>
    );
  }
}

export default App;
