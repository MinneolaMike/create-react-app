import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <div className="row">
            <Card />
          </div>
        </div>
        <br />
        <p className="App-intro">Welcome to the Create-React-App Boilerplate</p>
        <p>with Sequelize</p>
      </div>
    );
  }
}

export default App;
