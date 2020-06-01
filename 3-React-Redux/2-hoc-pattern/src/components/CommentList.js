import React, { Component } from 'react';

// import store from '../store'
import { connect } from '../connect';

class CommentList extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         comments: store.getState().comments
    //     }
    // }
    // componentDidMount() {

    // }
    // componentWillUnmount() {

    // }
    // commonLogic() {

    // } 
    render() {
        return (
            <div>
                {this.props.comments.map((comment, idx) => {
                    return <div style={{ backgroundColor: '#DEF', padding: '15px' }} key={idx} className="list-group-item">{comment}</div>
                })}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}

export default connect(CommentList, mapStateToProps);