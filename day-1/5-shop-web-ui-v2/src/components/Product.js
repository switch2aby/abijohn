import React, { Component } from 'react';
import classNames from 'classnames'


class Product extends Component {

    state = {
        currentTab: 1,
    }
    changeTab(tabIndex, e) {
        e.preventDefault();
        this.setState({ currentTab: tabIndex })
    }

    renderBuyBtn(product) {
        if (product.canBuy) return <button className="btn btn-sm btn-primary">buy</button>
        else return null;
    }
    renderTabPanel(product) {
        let { currentTab } = this.state;
        switch (currentTab) {
            case 1: return (<div>{product.description}</div>)
            case 2: return (<div>Not Yet</div>)
            case 3: return (<div>None yet</div>)
            default: return null;
        }
    }
    render() {
        let { value: product } = this.props;
        let { currentTab } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-3 col-sm-3 col-md-3">
                        <img className="img-fluid" src={product.image} alt={product.image} />
                    </div>
                    <div className="col-9 col-sm-9 col-md-9">
                        <h5>{product.name}</h5>
                        <h6>&#8377;{product.price}</h6>
                        {this.renderBuyBtn(product)}
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a onClick={e => this.changeTab(1, e)} className={classNames('nav-link', { active: currentTab === 1 })} href="/">Description</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={e => this.changeTab(2, e)} className={classNames('nav-link', { active: currentTab === 2 })} href="/">Specification</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={e => this.changeTab(3, e)} className={classNames('nav-link', { active: currentTab === 3 })} href="/">Reviews</a>
                            </li>
                        </ul>
                        {this.renderTabPanel(product)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;