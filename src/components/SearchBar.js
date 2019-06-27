import './SearchBar.css';
import { fetch_search } from '../actions/index';

import React from 'react';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
    state = {
        term: ''
    };

    handleChange = (e) => {
        this.setState({term: e.target.value});
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.fetch_search(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
        )
    }
};

export default connect(null,{fetch_search})(SearchBar);