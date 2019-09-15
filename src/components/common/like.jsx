import React, { Component } from "react";

// input: liked: boolean
// output: onClick
// Remember when converting a class to SFC, pass props and get rid of "this"

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onLikeToggled}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
