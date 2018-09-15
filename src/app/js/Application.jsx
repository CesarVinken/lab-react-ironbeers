import React from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";

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
      user: this._setUser(true)
    };

    this._setUser = this._setUser.bind(this);
    this._resetUser = this._resetUser.bind(this);
  }

  componentDidMount() {
    this._setUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/beers" render={() => <Beers />} />
            <Route exact path="/random-beer" render={() => <RandomBeer />} />
            <Route exact path="/new-beer" render={() => <NewBeer />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  _resetUser() {
    this.setState({
      user: null
    });
  }

  _setUser(init) {
    const token = localStorage.getItem("identity");
    if (token) {
      const decoded = jwtDecode(token);
      delete decoded.iat;
      if (init) return decoded;
      this.setState({ user: decoded });
    } else {
      return null;
    }
  }
}

export default Application;
