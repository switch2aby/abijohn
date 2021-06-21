

import React, { Component } from 'react';

class CartView extends Component {
    renderCartItems() {
        let { cart } = this.props;
        return cart.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>qty</td>
                    <td>total</td>
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
                    </table>
                </div>
            </div>
        );
    }
}

export default CartView;