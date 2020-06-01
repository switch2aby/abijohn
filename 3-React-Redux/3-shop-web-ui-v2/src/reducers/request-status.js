



export function requestStatusReducer(state = {}, action) {
    switch (action.type) {
        case 'REQUEST_BEGIN': {
            return { message: action.message }
        }
        case 'REQUEST_FINISHED': {
            return { message: action.message }
        }
        case 'REQUEST_ERROR': {
            return { message: action.message }
        }
        default: return state;
    }
}