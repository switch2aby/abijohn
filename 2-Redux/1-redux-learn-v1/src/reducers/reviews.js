
/*


{
    111:[
        {},{}
    ],
    222:[
        {},{}
    ]
}

*/

export function reviewsReducer(state = {}, action) {
    console.log("-reviews reducer-");
    switch (action.type) {
        case 'LOAD_REVIEWS_SUCCESS': {
            let { productId, reviews } = action;
            return { ...state, [productId]: reviews }
        }
        case 'ADD_NEW_REVIEW': {
            let { productId, review } = action;
            let existingReviews = state[productId];
            let reviews = existingReviews.concat(review)
            return { ...state, [productId]: reviews }
        }
        default: {
            return state;
        }
    }
}