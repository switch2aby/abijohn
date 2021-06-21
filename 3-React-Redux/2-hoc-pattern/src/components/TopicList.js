import React, { Component } from 'react';

// import store from '../store'

import { connect } from '../connect';

class TopicList extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         topics: store.getState().topics
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
                {this.props.topics.map((topic, idx) => {
                    return <div key={idx} className="list-group-item">{topic}</div>
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        topics: state.topics,
    }
}

export default connect(TopicList, mapStateToProps);