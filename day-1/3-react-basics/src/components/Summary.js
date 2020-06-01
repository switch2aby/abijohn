import React, { Component } from 'react';

class Summary extends Component {
    render() {
        let { value } = this.props;
        return (
            <div className="alert alert-warning">
                <hr />
                Total Actions : <span className="badge badge-dark">{value}</span>
                <hr />
            </div>
        );
    }
}

export default Summary;