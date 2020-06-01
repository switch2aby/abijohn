

import Api from '../api/Api'


export function loadProducts(cat = 'elec', size) {

    // let products = [
    //     { id: 1, name: 'Item-1', price: 1000, description: 'item one' },
    //     { id: 2, name: 'Item-2', price: 2000, description: 'item two' }
    // ]
    // return { type: 'LOAD_PRODUCTS_SUCCESS', products } // sync action


    return function (dispatch) {
        let promise = Api.loadProducts()
        promise
            .then(response => response.data)
            .then(products => {
                dispatch({ type: 'LOAD_PRODUCTS_SUCCESS', products })
            })
    }

}