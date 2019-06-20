import { combineReducers } from 'redux';
import selectedReducer from './selectedReducer';
import videosReducer from './videosReducer';

export default combineReducers({
    selected: selectedReducer,
    videos: videosReducer
});