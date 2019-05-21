import React from 'react';
import { connect } from 'react-redux';

import { fetch_default } from '../actions';

class NavMenu extends React.Component {

    clickDefault = () => {
        this.props.fetch_default();
    };

    render() {
        return (
            <div className="ui container">
                <div className="ui inverted segment">
                    <div className="ui inverted secondary pointing menu">
                        <p  onClick={this.clickDefault}className={`active item`}>Home</p>
                        <p  className="item">Previous</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selected: state.selected
    }
}

export default connect(mapStateToProps, {fetch_default})(NavMenu);