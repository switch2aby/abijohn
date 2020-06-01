


export function loadReviews(productId, size) {
    // Api call
    let reviews = [
        { stars: 1, author: 'who@mail.com', body: 'sample review-1' },
        { stars: 2, author: 'who@mail.com', body: 'sample review-2' }
    ]
    return { type: 'LOAD_REVIEWS_SUCCESS', productId, reviews } // action
}


export function addNewReview(productId, review) {
    // Api call
    return { type: 'ADD_NEW_REVIEW_SUCCESS', productId, review } // action
}