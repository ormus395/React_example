import React, { Component } from "react";

const userCard = props => {
  let style = {
    height: "150px"
  };
  return (
    <div style={style} className="card col-2">
      <p>{props.username}</p>
    </div>
  );
};

export default userCard;
