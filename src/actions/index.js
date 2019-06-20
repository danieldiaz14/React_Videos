import youtube from '../apis/youtube';

import {
    FETCH_DEFAULT,
    FETCH_SEARCH
} from './types';


export const fetch_default = () => async dispatch => {
    const response = await youtube.get('/search', {
        params: {
            q: 'League of Legends'
        }
    });
    dispatch({type: FETCH_DEFAULT, payload: response.data.items});
};

export const fetch_Search = term => async dispatch => {
    const response = await youtube.get('/search', {
        params: {
            q: term
        }
    });
    dispatch({type: FETCH_SEARCH, payload: response.data.items});
}