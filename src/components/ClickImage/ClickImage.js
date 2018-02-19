import React from "react";
import "./ClickImage.css";

const ClickImage = props => (
  <div
    role="img"
    aria-label="click item"
    onClick={() => props.handleClick(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={`click-item${props.shake ? " shake" : ""}`}
  />
);

export default ClickImage;
