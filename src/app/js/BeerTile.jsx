import React from "react";
import { Link } from "react-router-dom";

const BeerTile = props => {
  return (
    <div className="tile">
      <img src={props.image} alt="beer" />
      <div className="beer-Info">
        <Link to={`/beers/${props.id}`}>
          <h3>{props.name}</h3>
        </Link>
        <p>{props.description}</p>
        <p>Created by {props.createdBy}</p>
      </div>
    </div>
  );
};

export default BeerTile;
