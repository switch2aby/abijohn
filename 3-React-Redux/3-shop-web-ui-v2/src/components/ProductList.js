import React, { Component } from 'react';
import Product from './Product';


import { loadProducts } from '../actions/products'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';


class ProductList extends Component {

    componentDidMount() {
        let { actions } = this.props;
        actions.loadProducts('elec', 100)
    }

    renderProducts() {
        let { products } = this.props;
        return products.map((product, idx) => {
            return (
                <div key={product.id} className="list-group-item">
                    <Product value={product} />
                </div>
            )
        })
    }
    renderStatus() {
        let { status } = this.props
        if (status.message) {
            return (
                <div className="alert alert-warning">{status.message}</div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderStatus()}
                {this.renderProducts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
        status: state.status
    }
}
function mapDispatchToProps(dispatch) {
    return {
        //actions: bindActionCreators({ loadProducts }, dispatch)
        // or
        actions: { loadProducts: (cat, size) => dispatch(loadProducts(cat, size)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);