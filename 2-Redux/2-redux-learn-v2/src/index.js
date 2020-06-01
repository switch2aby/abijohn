import 'bootstrap/dist/css/bootstrap.css';


import store from './store'

import { loadProducts } from './actions/products'
import { loadReviews } from './actions/reviews'
import { buy } from './actions/cart'


//-------------------------------------------
// View : ProductList
//-------------------------------------------
store.subscribe(() => {
    let products = store.getState().products;
    console.log(products);
})
//-------------------------------------------
// View : CartView
//-------------------------------------------
store.subscribe(() => {
    let cart = store.getState().cart;
    console.log(cart);
})

//---------------------------------------------


setTimeout(() => {
    let action = loadProducts('elec', 10)
    store.dispatch(action)
}, 2000)

setTimeout(() => {
    let action = loadReviews('5bd11f879d48e60f57f7182b')
    store.dispatch(action)
}, 3000)

setTimeout(() => {
    let action = buy({ id: '5bd11f879d48e60f57f7182b' })
    store.dispatch(action)
}, 5000)