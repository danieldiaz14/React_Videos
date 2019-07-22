import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="column">
            <img className="ui medium image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="ui center aligned header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
};

export default VideoItem;