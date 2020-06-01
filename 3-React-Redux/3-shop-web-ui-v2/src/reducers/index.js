


import { productsReducer } from './products'
import { reviewsReducer } from './reviews'
import { cartReducer } from './cart'
import { requestStatusReducer } from './request-status'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    cart: cartReducer,
    status: requestStatusReducer
})


export default rootReducer;