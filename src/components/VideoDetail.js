import React from 'react';
import { connect } from 'react-redux';

class VideoDetail extends React.Component {

    render() {

        if(!Object.keys(this.props.selected).length) {
            return <div>Loading...</div>
        }
        const {selected} = this.props;
        const videoSrc = `https://www.youtube.com/embed/${selected.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe title="Video Player" src={videoSrc}/>
                </div>   
                <div className="ui segment">
                    <h4 className="ui header">{selected.snippet.title}</h4>
                    <p>{selected.snippet.description}</p>
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
export default connect(mapStateToProps,{})(VideoDetail);