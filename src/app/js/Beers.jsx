import axios from "axios";

import React, { Component } from "react";
import BeerTile from "./BeerTile";
const Beers = props => {
  if (props.beers.length <= 0) props.getAllBeers();

  const mappedBeers = props.beers.map(beer => {
    return (
      <BeerTile
        key={beer.id}
        name={beer.name}
        description={beer.description}
        image={beer.image_url}
        createdBy={beer.contributed_by}
      />
    );
  });

  return (
    <div>
      <h1>All Beers</h1>
      <div className="tiles-container">{mappedBeers}</div>
    </div>
  );
};

export default Beers;
