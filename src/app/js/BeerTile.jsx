import React from "react";

const BeerTile = props => {
  console.log(props);
  return (
    <div className="tile">
      <img src={props.image} alt="beer" />
      <div className="beer-Info">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>Created by {props.createdBy}</p>
      </div>
      <hr />
    </div>
  );
};

export default BeerTile;
