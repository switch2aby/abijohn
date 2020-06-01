


import { createStore } from 'redux'
import rootReducer from '../reducers'

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
))


export default store;