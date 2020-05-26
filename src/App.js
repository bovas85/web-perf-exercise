import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home, Basket, Checkout } from "./components";

import './styles.scss'

export default function() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/basket">Basket</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
