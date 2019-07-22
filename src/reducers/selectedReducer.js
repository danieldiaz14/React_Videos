import {
    FETCH_DEFAULT,
    SELECT_VIDEO,
    CLOSE_VIDEO
    } from './../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_DEFAULT:
            return { }
        case SELECT_VIDEO:
            return {...action.payload}
        case CLOSE_VIDEO:
            return {}
        default:
            return state;
    }
};