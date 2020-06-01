import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CartView from './components/CartView';
import Home from './components/Home';
import NotFound from './components/NotFound';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ProductList from './components/ProductList';
import CartBadge from './components/CartBadge';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar title="online-shopping" />
        <hr />
        <CartBadge />
        <hr />
        <Router>
          <div>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/link">Link</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/products" render={() => <ProductList />} />
              <Route path="/cart" render={() => <CartView />} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div >
    );
  }
}

export default App;
