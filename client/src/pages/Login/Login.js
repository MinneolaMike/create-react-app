import React, { Component } from "react";
import logo from "../../logo.svg";
import "./Login.css";

class Login extends Component {
  state = {
    //none
  };

  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <br />
        <div className="container">
          <h2>Login</h2>
          <hr />
          <form className="form">
            <input name="firstName" type="text" placeholder="firstName" />
            <br />
            <input name="lastName" type="text" placeholder="lastName" />
            <br />
            <button
              className="btn btn-primary mt-2"
              type="submit"
              action="/api/users"
              method="POST"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
