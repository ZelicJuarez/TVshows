import React from "react";

const show = props => (
  <div className="show">
    <img src={props.img} alt={props.title} className="show__img" />
    <h1>{props.title}</h1>
  </div>
);

export default show;