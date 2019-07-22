import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList= videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;
    });
    return <div style={{border: "1px solid white", cursor: "default"}} className="ui five column grid">{renderedList}</div>
};

export default VideoList;