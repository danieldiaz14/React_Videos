import React from 'react';
import { connect } from 'react-redux';

import { fetch_default } from '../actions';

class NavMenu extends React.Component {

    state = {
        selected: "Home"
    }

    clickDefault = () => {
        this.props.fetch_default();
    };

    render() {
        return (
            <div className="ui container">
                <div className="ui inverted segment">
                    <div className="ui inverted secondary pointing menu">
                        <p  onClick={this.clickDefault} className={`active item`}>Home</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {fetch_default})(NavMenu);