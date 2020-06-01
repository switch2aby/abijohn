
import Api from '../api/Api'

export function loadReviews(productId, size) {
    // let reviews = [
    //     { stars: 1, author: 'who@mail.com', body: 'sample review-1' },
    //     { stars: 2, author: 'who@mail.com', body: 'sample review-2' }
    // ]
    // return { type: 'LOAD_REVIEWS_SUCCESS', productId, reviews } // action



    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'Loading reviews' })
        let promise = Api.loadReviews(productId)
        promise
            .then(response => response.data)
            .then(reviews => {
                dispatch({ type: 'REQUEST_FINISHED', message: '' })
                dispatch({ type: 'LOAD_REVIEWS_SUCCESS', productId, reviews })
            })
    }

}


export function addNewReview(productId, review) {
    // return { type: 'ADD_NEW_REVIEW_SUCCESS', productId, review } // action
    return function (dispatch) {
        let promise = Api.addNewReview(productId, review)
        promise
            .then(response => response.data)
            .then(review => {
                dispatch({ type: 'ADD_NEW_REVIEW_SUCCESS', productId, review })
            })
    }
}