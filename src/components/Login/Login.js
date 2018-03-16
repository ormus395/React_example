import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import classes from "./Login.css";

const URL = "http://localhost:3000";
class Login extends Component {
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
    console.log(URL);
    let data = { ...this.state };
    axios.post(URL + "/users/login", data).then(res => {
      let token = res.data.token;
      localStorage.setItem("token", token);
      this.props.history.push("/dashboard");
    });
  };

  render() {
    return (
      <div className={classes.Login}>
        <h2>Login</h2>
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
          <button onClick={this.handlePost}>Login</button>
          <hr />
          <Link to="/">
            <button>Register</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Login;
