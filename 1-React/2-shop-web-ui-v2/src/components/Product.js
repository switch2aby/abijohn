
import React, { Component } from 'react';
import classNames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm_v2';

class Product extends Component {

    state = {
        currentTab: 1,
        reviews: [
            { stars: 5, author: 'who@mail.com', body: 'sample-review 1' },
            { stars: 2, author: 'who@mail.com', body: 'sample-review 2' }
        ]
    }
    changeTab(e, tabIndex) {
        e.preventDefault();
        this.setState({ currentTab: tabIndex })
    }
    handleBuy(e) {
        let { onBuy, value } = this.props;
        if (onBuy) {
            onBuy({ item: value, qty: 1 })
        }
    }

    renderBuyBtn(product) {
        if (product.canBuy) return (<button onClick={e => this.handleBuy(e)} className="btn btn-primary btn-sm">buy</button>)
        else return null;
    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => {
            return <Review value={review} key={idx} />
        })
    }
    addNewReview(e) {
        // let { value } = this.props;
        // TODO:
        let { reviews } = this.state;
        reviews = reviews.concat(e.review);
        this.setState({ reviews })
    }
    renderPanel(product) {
        let { currentTab } = this.state;
        switch (currentTab) {
            case 1: return (<div>{product.description}</div>)
            case 2: return (<div>{"Not Yet"}</div>)
            case 3: return (
                <div>
                    {this.renderReviews()}
                    <ReviewForm onSubmit={e => this.addNewReview(e)} />
                </div>
            )
            default: return null;
        }
    }
    render() {
        // let product = this.props.value;
        // or
        let { value: product } = this.props;
        let { currentTab } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-3 col-sm-3 col-md-3">
                        <img className="img-fluid" src={product.image} alt={product.name} />
                    </div>
                    <div className="col-9 col-sm-9 col-md-9">
                        <h5>{product.name}</h5>
                        <h6>{product.price}</h6>
                        {this.renderBuyBtn(product)}
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a onClick={e => this.changeTab(e, 1)} className={classNames('nav-link', { active: currentTab === 1 })} href="/">Description</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={e => this.changeTab(e, 2)} className={classNames('nav-link', { active: currentTab === 2 })} href="/">Specification</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={e => this.changeTab(e, 3)} className={classNames('nav-link', { active: currentTab === 3 })} href="/">Reviews</a>
                            </li>
                        </ul>
                        {this.renderPanel(product)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;