import React, { Component } from "react";
import PostCard from "../../components/PostCard/PostCard";
class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loaded: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/posts/all")
      .then(result => {
        if (result.status === 200) {
          return result.json();
        }
      })
      .then(result => {
        this.setState({
          posts: result.posts,
          loaded: true
        });
      });
  }

  render() {
    let postList = this.state.posts.map(post => (
      <PostCard key={post.id} user={post.User} title={post.title} />
    ));
    return <div>{this.state.loaded ? postList : "Loading..."}</div>;
  }
}

export default NewsFeed;
