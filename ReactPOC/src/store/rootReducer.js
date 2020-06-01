
import { combineReducers } from 'redux';
import searchResultReducer from '../store/reducers/searchResultReducer'
import languageContentReducer from '../store/reducers/languageContentReducer'


export const rootReducer = combineReducers({
       searchResults:searchResultReducer,
       languageContent:languageContentReducer   
});

export default rootReducer;