import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'
import Greeting from './components/Greeting'
import Box from './components/Box';
import Product from './components/Product';
import Employee from './components/Employee';
import A from './components/A';
import D from './components/Display';
// import ActionBox from './components/ActionBox';

class App extends Component {

  state = {
    message: 'greetings'
  }

  constructor(props) {
    super();
    //console.log(props);
    // this.state = {
    //   message: 'greetings'
    // }
    console.log("App :: constructor()");
  }

  changeMessage(e, message) {
    this.setState({ message }) // diffing
  }

  render() {
    console.log("App :: render()");
    // let title = this.props.title;
    // let trainer = this.props.trainer;
    // or
    let { title, trainer } = this.props; // de-structuring
    let { message } = this.state;
    let data = {
      prop1: 'One',
      prop2: 'Two',
      prop3: 'Three'
    }
    return (
      <div className="container">
        <hr />
        <h1>{title}</h1> : by <span>{trainer}</span>
        <hr />
        <D prop1={data.prop1} prop2={data.prop2} prop3={data.prop3} />
        <hr />
        <D {...data} />
        <hr />
        <A color="red" />
        <A color="green" />
        <A color="blue" />
        <hr />
        <Box >
          <Product />
          <Product />
        </Box>
        <Box>
          <Employee />
          <Employee />
          <Employee />
        </Box>
        <hr />
        {/* <ActionBox /> */}
        <hr />
        <button onClick={e => this.changeMessage(e, 'good morning')} className="btn btn-primary">GM</button>&nbsp;
        <button onClick={e => this.changeMessage(e, 'good noon')} className="btn btn-primary">GN</button>&nbsp;
        <button onClick={e => this.changeMessage(e, 'good evening')} className="btn btn-primary">GE</button>&nbsp;
        <button onClick={e => this.changeMessage(e, '')} className="btn btn-danger">Remove</button>&nbsp;
        <hr />
        {message ? <Greeting message={message} /> : null}
      </div>
    );
  }
  componentDidMount() {
    console.log("App :: componentDidMount()");

    // n/w req

    // setTimeout(() => {
    //   let response = "Hello react! hope u r rocking"
    //   this.setState({ message: response })
    // }, 2000)

  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("App :: componentDidUpdate()");
  }

}

App.defaultProps = {
  trainer: 'Anonymous'
}
App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}

export default App;
