import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import NavBar from './Nav';
import VideoList from './VideoList';
import VideoListSideBar from './VideoListSideBar';
import VideoDetail from './VideoDetail';

import {fetch_default, select_video} from '../actions/index';

class App extends React.Component {
    componentDidMount() {
        this.props.fetch_default();
    };

    onVideoSelect = (video) => {
        this.props.select_video(video);
    };

    ifVideoSelected = () => {
        if (Object.entries(this.props.selected).length > 0) {
            return (
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail/>
                        </div>
                        <div style={{border: "1px solid white"}}className="five wide column">
                            <VideoListSideBar onVideoSelect={this.onVideoSelect} videos={this.props.videos.slice(0,4)}/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <VideoList onVideoSelect={this.onVideoSelect} videos={this.props.videos}/>
        }
    };
    
    render() {
        return (
            <div className="container">
                <NavBar/>
                <SearchBar/>
                {this.ifVideoSelected()}
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