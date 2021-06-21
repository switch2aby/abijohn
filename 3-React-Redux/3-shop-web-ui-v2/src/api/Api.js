
import axios from 'axios';

let apiUrl = 'http://localhost:8080/api/products'

let Api = {
    loadProducts() {
        return axios.get(apiUrl);
    },
    loadReviews(productId) {
        return axios.get(apiUrl + `/${productId}/reviews`);
    },
    addNewReview(productId, review) {
        return axios.post(apiUrl + `/${productId}/reviews`, review);
    }
};

export default Api;