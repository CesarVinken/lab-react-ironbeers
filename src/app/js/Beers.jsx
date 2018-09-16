import axios from "axios";

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import BeerTile from "./BeerTile";
const Beers = props => {
  if (props.beers.length <= 0) props.getAllBeers();

  const mappedBeers = props.beers.map(beer => {
    return (
      <BeerTile
        key={beer._id}
        id={beer._id}
        name={beer.name}
        description={beer.description}
        image={beer.image_url}
        createdBy={beer.contributed_by}
      />
    );
  });
  console.log(props);
  return (
    <Switch>
      <Route
        exact
        path="/beers"
        render={() => (
          <div>
            <h1>All Beers</h1>
            <div className="tiles-container">{mappedBeers}</div>
          </div>
        )}
      />
      <Route
        exact
        path="/beers/:id"
        render={() => {
          return <BeerDetails />;
        }}
      />
    </Switch>
  );
};

export default Beers;
