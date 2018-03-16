import React, { Component } from "react";

const postCard = props => {
  return (
    <div className="card mb-1">
      <div className="card-header">
        <a href="#" className="card-title">
          <img alt="future profile pic" className="card-img-left" />
          <span>
            <strong>{props.user.fullname}</strong>
          </span>
          <span>{props.user.username || "Jarec"}</span>
        </a>
      </div>
      <div className="card-body">
        <p>{props.title}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-outline-primary btn-sm">Comment</button>
        <button className="btn btn-outline-success btn-sm">Howl</button>
        <button className="btn btn-outline-info btn-sm">Treat</button>
      </div>
    </div>
  );
};

export default postCard;
