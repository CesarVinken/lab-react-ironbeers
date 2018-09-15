import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="container nav-content">
        <div>
          {window.location.pathname !== "/" && (
            <Link className="link nav-link" to="/">
              Home
            </Link>
          )}
        </div>
        <div>
          <Link className="link nav-link" to="/beers">
            Beers
          </Link>
        </div>
        <div>
          <Link className="link nav-link" to="/random-beer">
            Random
          </Link>
        </div>
        <div>
          <Link className="link nav-link" to="/new-beer">
            New
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
