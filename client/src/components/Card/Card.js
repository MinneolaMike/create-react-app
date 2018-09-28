import React from "react";
import "./Card.css";

const Card = () => (
  // Create a Card with a column with of 1/3 of the page and margin-top 2
  <div className="card col-md-4 mt-2">
    <div className="card-title font-weight-bold">Title</div>
    <div className="card-body">Body</div>
    <button className="btn btn-primary btn-md">Click Me</button>
  </div>
);

export default Card;
