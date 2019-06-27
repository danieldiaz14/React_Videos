import youtube from '../apis/youtube';

import {
    FETCH_DEFAULT,
    FETCH_SEARCH,
    SELECT_VIDEO
} from './types';


export const fetch_default = () => async dispatch => {
    const response = await youtube.get('/search', {
        params: {
            q: 'League of Legends'
        }
    });
    dispatch({type: FETCH_DEFAULT, payload: response.data.items});
};

export const fetch_search = term => async dispatch => {
    const response = await youtube.get('/search', {
        params: {
            q: term
        }
    });
    dispatch({type: FETCH_SEARCH, payload: response.data.items});
};

export const select_video = video => dispatch => {
    dispatch({type: SELECT_VIDEO, payload: video});
};