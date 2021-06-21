import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import CartView from './components/CartView';
import Home from './components/Home';
import NotFound from './components/NotFound';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component {

  state = {
    cart: [],
    products:
      [
        {
          id: 111,
          name: 'Laptop',
          price: 198000,
          canBuy: true,
          image: 'images/Laptop.png',
          description: 'New Mac pro'
        },
        {
          id: 222,
          name: 'Mobile',
          price: 18000,
          canBuy: true,
          image: 'images/Mobile.png',
          description: 'New  pro'
        }
      ]
  };

  addToCart({ item }) {
    let { cart } = this.state;
    cart = cart.concat(item);
    this.setState({ cart })
  }

  renderProducts() {
    let { products } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={product.id} className="list-group-item">
          <Product value={product} onBuy={e => this.addToCart(e)} />
        </div>
      )
    })
  }

  renderCart() {
    let { cart, } = this.state;
    return <CartView cart={cart} />
  }

  render() {
    let { cart } = this.state;
    return (
      <div className="container">
        <Navbar title="online-shopping" />
        <hr />
        <i className="fa fa-shopping-cart"></i>&nbsp;
        <span className="badge badge-danger">{cart.length}</span> item(s) in cart
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
              <Route path="/products" render={() => this.renderProducts()} />
              <Route path="/cart" render={() => this.renderCart()} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div >
    );
  }
}

export default App;
