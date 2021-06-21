

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { buy } from '../actions/cart'
import { bindActionCreators } from 'redux'

class CartView extends Component {
    renderCartItems() {
        let { cart, actions } = this.props;
        return cart.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>qty</td>
                    <td>total</td>
                    <td><i onClick={e => actions.buy(item)} className="fa fa-plus"></i></td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">Your cart</div>
                <div className="card-body">
                    <table className="table table-sm table-bordered">
                        <tbody>
                            {this.renderCartItems()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="4">Total : 0</td>
                            </tr>
                        </tfoot>
                    </table>
                    <button className="btn btn-danger">checkout</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ buy }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartView);