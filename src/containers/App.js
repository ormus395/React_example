import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Header from "../components/UI/Header/Header";
import NewPost from "../components/NewPost/NewPost";
import UserDashboard from "./UserDashboard/UserDashboard";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLoggedIn = user => {};

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/register" exact component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/new-post" component={NewPost} />
            <Route path="/dashboard" component={UserDashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}
