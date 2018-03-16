import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Login } from "../Login/Login";
import classes from "./Register.css";

const URL = "http://localhost:3000";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handlePost = e => {
    let data = { ...this.state };
    axios
      .post(URL + "/users/new", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className={classes.Register}>
        <h2>Register</h2>
        <div className={classes.Form}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={this.handleChange}
            name="username"
            value={this.state.username}
            placeholder="username"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
          />
          <button onClick={this.handlePost}>Register</button>
          <hr />
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Register;
