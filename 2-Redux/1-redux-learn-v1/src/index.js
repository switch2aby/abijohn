import 'bootstrap/dist/css/bootstrap.css';


import store from './store'

import { loadProducts } from './actions/products'
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
    let action = buy({ id: 1 })
    store.dispatch(action)
}, 3000)