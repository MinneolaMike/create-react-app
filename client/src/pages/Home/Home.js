import React, { Component } from "react";
import Card from "../../components/Card";
import Badge from "../../components/Badge";
import logo from "../../logo.svg";
import "./Home.css";

class Home extends Component {
  state = {
    //none
  };

  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a href="/login" className="btn btn-primary">
            Login
          </a>
          <a href="/" className="btn btn-secondary m-2">
            Logout
          </a>
        </div>
        <br />
        <div className="container">
          <p className="App-intro">
            Welcome to the Create-React-App Boilerplate
          </p>
          <p>with Sequelize</p>
          <Card />
          <Badge />
        </div>
        <br />
      </div>
    );
  }
}

export default Home;
