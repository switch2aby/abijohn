import React, { Component } from 'react';
import TopicList from './components/TopicList'
import 'bootstrap/dist/css/bootstrap.css';
import CommentList from './components/CommentList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <h1> Higher Order Components</h1>
        <hr />
        <div className="row">
          <div className="col-sm-sm col-md-6">
            <TopicList />
          </div>
          <div className="col-sm-sm col-md-6">
            <CommentList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
