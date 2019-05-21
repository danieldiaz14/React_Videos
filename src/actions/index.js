import youtube from '../apis/youtube';

import {
    FETCH_DEFAULT,
    GO_HOME
} from './types';


export const fetch_default = () => async dispatch => {
    const response = await youtube.get('/search',{
        q: 'League of Legends'
    })
    dispatch({type: FETCH_DEFAULT, payload: response.data});
};

export const goHome = () => dispatch => {
    dispatch({type: GO_HOME});
}