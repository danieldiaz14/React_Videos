import React from 'react';
import { connect } from 'react-redux';

import { fetch_default, close_video } from '../actions';

class NavMenu extends React.Component {

    clickDefault = e => {
        e.preventDefault();
        this.props.fetch_default();
    };

    backToSearch = e => {
        e.preventDefault();
        this.props.close_video();
    };

    render() {
        return (
            <div className="ui container">
                <div className="ui inverted segment">
                    <div className="ui inverted secondary pointing menu">
                        <a  href="/" onClick={this.clickDefault} className="item">Home</a>
                        <a href="/" onClick={this.backToSearch} className="item">Back to Search</a>
                        <a target="_blank" rel='noreferrer noopener' href="https://danieldiaz14.github.io" className="item">Portfolio</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {fetch_default, close_video})(NavMenu);