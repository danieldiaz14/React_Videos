import {
    FETCH_DEFAULT,
    SELECT_VIDEO
    } from './../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_DEFAULT:
            return {...action.payload[0]}
        case SELECT_VIDEO:
            return {...action.payload}
        default:
            return state;
    }
};