import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';

class App extends Component {

  state = {
    products: [
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
      },

    ]
  }

  renderProducts() {
    let { products } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={product.id} className="list-group-item">
          <Product value={product} />
        </div>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <Navbar title="online-shopping" />
        <hr />
        <hr />
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
