import {
    FETCH_DEFAULT,
    FETCH_SEARCH
    } from './../actions/types';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_DEFAULT:
            return [...action.payload];
        case FETCH_SEARCH:
            return [...action.payload];
        default:
            return [...state];
    }
};