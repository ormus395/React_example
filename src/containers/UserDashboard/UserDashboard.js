import React, { Component } from "react";
import NewsFeed from "../NewsFeed/NewsFeed";
import UserCard from "../../components/UserCard/UserCard";

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loaded: false
    };
  }

  componentDidMount() {
    let token = localStorage.getItem("token");
    fetch("http://localhost:3000/users/profile", {
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + token
      })
    })
      .then(result => {
        if (result.status === 200 && result.ok === true) {
          return result.json();
        } else {
          return <Redirect to="/login" />;
        }
      })
      .then(result =>
        this.setState({
          user: result.user,
          loaded: true
        })
      );
  }

  render() {
    return (
      <div className="container">
        {this.state.loaded ? (
          <div className="row">
            <UserCard username={this.state.user.username} />
            <div className="col-8">
              <NewsFeed />
            </div>
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

export default UserDashboard;
