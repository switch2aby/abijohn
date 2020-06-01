import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore ,applyMiddleware} from 'redux'
import rootReducer from './store/rootReducer'
import ReduxPromise from 'redux-promise'
/**
 * to connect react with redux we need a spcial package called react-redux 
 * redux standlone dosent support to connect with react we should use react-redux lib to connect it
 * by injecting provider. provider is a  hoc componet wich will wrap our app compnent and gives the fucntionality 
 * which Provider components have to app
 */
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

 /**
 * store takes a reducer as a input 
 * 
 */
const storeWithMiddleWare = applyMiddleware(ReduxPromise,thunk)(createStore);


ReactDOM.render(<Provider store={storeWithMiddleWare(rootReducer)}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();

