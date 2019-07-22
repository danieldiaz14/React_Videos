import React from 'react';
import { connect } from 'react-redux';
import { close_video } from '../actions/index';

class VideoDetail extends React.Component {

    render() {
        if(!Object.keys(this.props.selected).length) {
            return <div></div>
        }
        const {selected} = this.props;
        const videoSrc = `https://www.youtube.com/embed/${selected.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe title="Video Player" allowFullScreen="allowfullscreen" src={videoSrc}/>
                </div>   
                <div style={{cursor:"default"}} className="ui segment">
                    <h4 className="ui header">{selected.snippet.title}</h4>
                    <p className="ui center aligned">{selected.snippet.description}</p>
                    <button onClick={this.props.close_video} className="negative ui button">Close video</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selected: state.selected
    }
}
export default connect(mapStateToProps,{close_video})(VideoDetail);