


export function productsReducer(state = [], action) {
    console.log("-products reducer-");
    switch (action.type) {
        case 'LOAD_PRODUCTS_SUCCESS': {
            let { products } = action;
            return [...state, ...products]
        }
        case 'BUY': {
            return state.filter(item => item.id !== action.item.id)
        }
        default: {
            return state;
        }
    }
}