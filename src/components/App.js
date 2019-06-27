import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import NavBar from './Nav';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import {fetch_default, select_video} from '../actions/index';

class App extends React.Component {
    componentDidMount() {
        this.props.fetch_default();
    };

    onVideoSelect = (video) => {
        this.props.select_video(video);
    }
    
    render() {
        return (
            <div className="ui container">
                <NavBar/>
                <SearchBar/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                        <VideoDetail/>
                        </div>
                        <div className="five wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.props.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        videos: state.videos,
        selected: state.selected
    }
};

export default connect(mapStateToProps,{fetch_default, select_video})(App);