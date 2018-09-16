import React from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Beers from "./Beers";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";
import Navigation from "./Navigation";
import NotFound from "./NotFound";

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    };

    this._getAllBeers = this._getAllBeers.bind(this);
  }

  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route
              exact
              path="/beers"
              render={() => (
                <Beers
                  beers={this.state.beers}
                  getAllBeers={this._getAllBeers}
                />
              )}
            />
            <Route exact path="/random-beer" render={() => <RandomBeer />} />
            <Route exact path="/new-beer" render={() => <NewBeer />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  _getAllBeers() {
    console.log("get all the beers");
    let beers = [];
    axios
      .get("https://ironbeer-api.herokuapp.com/beers/all")
      .then(res => {
        beers = res.data.map(beer => {
          return beer;
        });
        console.log(beers);
        this.setState({ beers });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default Application;
