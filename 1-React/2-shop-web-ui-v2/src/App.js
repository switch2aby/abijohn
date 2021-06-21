import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import CartView from './components/CartView';

class App extends Component {

  state = {
    isCartOpen: false,
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

  toggleCart(e) {
    e.preventDefault();
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen })
  }
  addToCart({ item }) {
    let { cart } = this.state;
    cart = cart.concat(item);
    this.setState({ cart })
  }

  renderProducts() {
    let { products, isCartOpen } = this.state;
    if (!isCartOpen) {
      return products.map((product, idx) => {
        return (
          <div key={product.id} className="list-group-item">
            <Product value={product} onBuy={e => this.addToCart(e)} />
          </div>
        )
      })
    }
  }

  renderCart() {
    let { cart, isCartOpen } = this.state;
    if (isCartOpen)
      return <CartView cart={cart} />
  }

  render() {
    let { cart, isCartOpen } = this.state;
    return (
      <div className="container">
        <Navbar title="online-shopping" />
        <hr />
        <i className="fa fa-shopping-cart"></i>&nbsp;
        <span className="badge badge-danger">{cart.length}</span> item(s) in cart
        <hr />
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a onClick={e => this.toggleCart(e)} className="nav-link" href="/">{isCartOpen ? 'Products' : 'Cart'}</a>
          </li>
        </ul>
        <hr />
        {this.renderCart()}
        <hr />
        {this.renderProducts()}
      </div >
    );
  }
}

export default App;
