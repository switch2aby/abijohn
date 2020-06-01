
import React, { Component } from 'react';
import Action from './Action';
import Summary from './Summary';

class ActionBox extends Component {
    state = {
        totalCount: 0
    }
    incrementTotalCount(e) {
        let { totalCount } = this.state;
        totalCount += e.value;
        this.setState({ totalCount })
    }
    renderActions() {
        let numbers = [1, -1, 10, -10, 20, 30, 40, 50]
        return numbers.map((number, idx) => {
            return <Action key={number} value={number} onAction={e => this.incrementTotalCount(e)} />
        })
    }
    render() {
        // console.log("ActionBox :: render()");
        let { totalCount } = this.state;
        return (
            <div className="card">
                <div className="card-header">Action Box : <span className="badge badge-danger">{totalCount}</span> </div>
                <div className="card-body">
                    {/* 
                    <Action value={1} onAction={e => this.incrementTotalCount(e)} />
                    <Action value={10} onAction={e => this.incrementTotalCount(e)} />
                    <Action value={-10} onAction={e => this.incrementTotalCount(e)} />
                    <Action value={-1} onAction={e => this.incrementTotalCount(e)} /> 
                    */}
                    {this.renderActions()}

                    <div style={{ clear: 'both' }}>
                        <hr />
                        {totalCount > 10 ? <Summary value={totalCount} /> : null}
                        <hr />
                    </div>

                </div>
            </div>
        );
    }
}

ActionBox.propTypes = {

};

export default ActionBox;