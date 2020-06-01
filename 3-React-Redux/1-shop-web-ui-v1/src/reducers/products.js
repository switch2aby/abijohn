


export function productsReducer(state = [], action) {
    switch (action.type) {
        case 'LOAD_PRODUCTS_SUCCESS': {
            let { products } = action;
            return [...products]
        }
        // case 'BUY': {
        //     return state.filter(item => item.id !== action.item.id)
        // }
        default: {
            return state;
        }
    }
}