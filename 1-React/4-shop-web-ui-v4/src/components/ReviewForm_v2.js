

import React, { Component } from 'react';

class ReviewForm extends Component {
    state = {
        isOpen: false,
        stars: 5,
        author: 'nag@mail.com',
        body: '',
        errors: ''
    }
    togleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen })
    }
    handleForm(e) {
        e.preventDefault();
        let { stars, author, body } = this.state;
        let newReview = { stars, author, body }
        let { onSubmit } = this.props;
        if (onSubmit) {
            onSubmit({ review: newReview })
            this.togleForm();
        }
    }
    handleChange(e) {
        let field = e.target.id;
        let fieldValue = e.target.value;
        this.setState({ [field]: fieldValue }, () => {
            if (field === 'body') {
                let words = ['shit']
                if (words.includes(fieldValue)) {
                    this.setState({ errors: 'No bad words' })
                } else {
                    this.setState({ errors: '' })
                }
            }
        }) // async
    }
    isValidForm() {
        let { stars } = this.state;
        if (stars < 3) return true;
        else return false;
    }
    renderForm() {
        let { isOpen, stars, author, body, errors } = this.state;
        if (!isOpen) return (<button onClick={e => this.togleForm()} className="btn btn-sm btn-info"><i className="fa fa-plus"></i></button>)
        else return (
            <div className="card">
                <div className="card-header">Review Form</div>
                <div className="card-body">
                    <form onSubmit={e => this.handleForm(e)}>
                        <div className="form-group">
                            <label>stars</label>
                            <select className="form-control" id="stars" value={stars} onChange={e => this.handleChange(e)}>
                                {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                            </select>
                            <span style={{ color: 'red' }}>{stars < 3 ? 'expected atleast 3 stars' : null}</span>
                        </div>
                        <div className="form-group">
                            <label>author</label>
                            <input className="form-control" id="author" value={author} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label>body</label>
                            <textarea className="form-control" id="body" value={body} onChange={e => this.handleChange(e)}></textarea>
                            {errors}
                        </div>
                        <button disabled={this.isValidForm()} className="btn btn-sm btn-dark">submit</button>&nbsp;
                        <button type="button" onClick={e => this.togleForm()} className="btn btn-sm btn-danger">cancel</button>
                    </form>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-8 col-md-6">
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}

export default ReviewForm;