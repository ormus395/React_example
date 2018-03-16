import React, { Component } from "react";
import axios from "axios";
import classes from "./NewPost.css";
const URL = "http://localhost:3000";
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }
  componentDidMount() {
    console.log(document.cookie);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePost = () => {
    let data = { ...this.state };
    let token = localStorage.getItem("token");
    console.log(token);
    fetch(URL + "/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      })
    })
      .then(res => res.json())
      .then(res => this.props.history.push("/dashboard"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className={classes.NewPost}>
        <input
          type="text"
          name="title"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <button onClick={this.handlePost}>Submit</button>
      </div>
    );
  }
}

export default NewPost;
