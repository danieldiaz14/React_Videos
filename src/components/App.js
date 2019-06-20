import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import NavBar from './Nav';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import {fetch_default} from '../actions/index';

class App extends React.Component {
    componentDidMount() {
        this.props.fetch_default();
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };
    
    render() {
        return (
            <div className="ui container">
                <NavBar/>
                <SearchBar onFormSubmit={this.onFormSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                        <VideoDetail video={this.props.videos[0]}/>
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
        videos: state.videos
    }
};

export default connect(mapStateToProps,{fetch_default})(App);