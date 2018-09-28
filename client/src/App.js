import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Badge from "./components/Badge";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <br />
        <div className="container">
          <p className="App-intro">
            Welcome to the Create-React-App Boilerplate
          </p>
          <p>with Sequelize</p>
          <br />
          <Card />
          <Badge />
        </div>
      </div>
    );
  }
}

export default App;
