import {FETCH_DEFAULT,GO_HOME} from './../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_DEFAULT:
            return {...state, selectedVideo: action.payload}
        case GO_HOME:
            return {...state, selectedVideo: action.payload}
        default:
            return state;
    }
}