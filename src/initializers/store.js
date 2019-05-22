import { createStore, combineReducers } from 'redux';
import { SET_TOKEN, CLEAR_TOKEN, LOGGED_IN, SIGN_OUT } from './types';

function tokenReducer(state = '', action) {
    switch (action.type) {
        case SET_TOKEN:
            return action.token;

        case CLEAR_TOKEN:
            return '';

        default:
            return state;
    }
}

function userReducer(state = null, action) {
    switch (action.type) {
        case LOGGED_IN:
            return action.user;

        case SIGN_OUT:
            return null;

        default:
            return state;
    }
}

let rootReducer = combineReducers({
    token: tokenReducer,
    user: userReducer
});

export default createStore(rootReducer);