import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getwordReducer } from './reducers/wordReducers';




const finalReducer = combineReducers({
    getwordReducer: getwordReducer
});

const currentWord = localStorage.getItem('currentWord') ? JSON.parse(localStorage.getItem('currentWord')) : [];

const initialState = {
    // cartReducer: {
    //     cartItems: cartItems
    // },
    getwordReducer: {
        currentWord: currentWord
    }
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;