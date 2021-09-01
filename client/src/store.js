import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getrandomwordReducer, getwordReducer } from './reducers/wordReducers';




const finalReducer = combineReducers({
    getwordReducer: getwordReducer,
    getrandomwordReducer : getrandomwordReducer
});

const currentWord = localStorage.getItem('currentWord') ? JSON.parse(localStorage.getItem('currentWord')) : [];
const GuessWord = localStorage.getItem('GuessWord') ? JSON.parse(localStorage.getItem('GuessWord')) : [];


const initialState = {
    // cartReducer: {
    //     cartItems: cartItems
    // },
    getwordReducer: {

        Words: currentWord
    },
    getrandomwordReducer:{
        GuessWord: GuessWord
    }
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;