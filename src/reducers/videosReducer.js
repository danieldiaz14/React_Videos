import {FETCH_DEFAULT} from './../actions/types';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_DEFAULT:
            return [...state, ...action.payload];
        default:
            return [...state];
    }
}