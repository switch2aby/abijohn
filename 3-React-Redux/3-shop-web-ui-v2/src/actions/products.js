

import Api from '../api/Api'


export function loadProducts(cat = 'elec', size) {

    // let products = [
    //     { id: 1, name: 'Item-1', price: 1000, description: 'item one' },
    //     { id: 2, name: 'Item-2', price: 2000, description: 'item two' }
    // ]
    // return { type: 'LOAD_PRODUCTS_SUCCESS', products } // sync action


    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'Loading products' })
        let promise = Api.loadProducts()
        promise
            .then(response => response.data)
            .then(products => {
                dispatch({ type: 'REQUEST_FINISHED', message: '' })
                dispatch({ type: 'LOAD_PRODUCTS_SUCCESS', products })
            })
            .catch((err) => {
                dispatch({ type: 'REQUEST_ERROR', message: 'error..' })
            })
    }

}