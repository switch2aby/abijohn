


import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const preLoadedState = {
    products: [
        { id: 999, name: 'sample-item', price: 0 }
    ],
    reviews: {},
    cart: []
}

const store = createStore(rootReducer, preLoadedState, composeEnhancers(
    applyMiddleware(thunk)
))


export default store;