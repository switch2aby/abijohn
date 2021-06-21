import React, { Component } from 'react';
import Product from './Product';


import store from '../store'
import { loadProducts } from '../actions/products'


class ProductList extends Component {
    state = {
        products: []
    };
    componentDidMount() {
        this.unsubscibe = store.subscribe(() => {
            let products = store.getState().products;
            this.setState({ products })
        })
        store.dispatch(loadProducts('elec', 100))
    }
    componentWillUnmount() {
        this.unsubscibe()
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
            <div>
                {this.renderProducts()}
            </div>
        );
    }
}

export default ProductList;