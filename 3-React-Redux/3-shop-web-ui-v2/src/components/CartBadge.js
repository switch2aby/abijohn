
import React from 'react';
import { connect } from 'react-redux'


function CartBadge({ cart }) {
    return (
        <div>
            <i className="fa fa-shopping-cart"></i>&nbsp;
            <span className="badge badge-danger">{cart.length}</span> item(s) in cart
        </div>
    )
}


function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartBadge);