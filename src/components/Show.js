import React from "react";
import { TiMediaRecordOutline } from "react-icons/ti";
import { TiMediaRecord } from "react-icons/ti";

const show = props => (
  <div className="show">
    <img src={props.img} alt={props.title} className="show__img" />
    <h1 className="show__title">{props.title}</h1>
    <button className="show__button" onClick={props.clicked}>
      <TiMediaRecordOutline className="show__icon" />
    </button>
  </div>
);

export default show;

/* <button className="heart-button" onClick={this.handleLike}>
{hasLiked === true ? (
  <TiMediaRecord color="#e0245e" className="tweet-icon" />
) : (
  <TiMediaRecordOutline className="tweet-icon" />
)}
</button> */
